import { PackageCheck, XCircle, Truck, RefreshCw, Download } from "lucide-react";
import { MERCHANT_ORDERS } from "../../data";

const STATUS_STYLE = {
  Delivered: { icon: PackageCheck, wrap: "bg-sky text-route", text: "text-route" },
  "In transit": { icon: Truck, wrap: "bg-signal/15 text-signal", text: "text-signal" },
  Cancelled: { icon: XCircle, wrap: "bg-red-50 text-red-400", text: "text-red-400" },
};

export default function MerchantOrders() {
  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <h1 className="font-display font-bold text-lg text-navy mb-5">Your orders</h1>
      <div className="space-y-3">
        {MERCHANT_ORDERS.map((o) => {
          const s = STATUS_STYLE[o.status] || STATUS_STYLE.Delivered;
          const Icon = s.icon;
          return (
            <div key={o.id} className="bg-white rounded-xl2 shadow-card p-4">
              <div className="flex items-center gap-3">
                <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${s.wrap}`}>
                  <Icon size={18} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-semibold text-[13px] text-ink">
                    {o.supplier} · <span className="font-mono text-[11.5px] text-slate">{o.id}</span>
                  </p>
                  <p className="text-[11.5px] text-slate">{o.date} · {o.items} items</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-semibold text-[13px] text-navy">{o.total}</p>
                  <p className={`text-[10.5px] font-medium ${s.text}`}>{o.status}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-3 pt-3 border-t border-sky-mid">
                <button className="flex-1 flex items-center justify-center gap-1.5 text-[11.5px] font-medium text-navy bg-sky rounded-full py-2">
                  <RefreshCw size={13} /> Reorder
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 text-[11.5px] font-medium text-slate bg-sky rounded-full py-2">
                  <Download size={13} /> Invoice
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
