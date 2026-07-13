import { PackageCheck, XCircle } from "lucide-react";
import { PAST_ORDERS } from "../data";

export default function Orders({ goTo }) {
  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <h1 className="font-display font-bold text-lg text-navy mb-5">Your orders</h1>
      <div className="space-y-3">
        {PAST_ORDERS.map((o) => {
          const delivered = o.status === "Delivered";
          return (
            <button
              key={o.id}
              onClick={() => delivered && goTo("track")}
              className="w-full text-left bg-white rounded-xl2 shadow-card p-4 flex items-center gap-3"
            >
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  delivered ? "bg-sky text-route" : "bg-red-50 text-red-400"
                }`}
              >
                {delivered ? <PackageCheck size={18} /> : <XCircle size={18} />}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-[13px] text-ink">
                  {o.retailer} · <span className="font-mono text-[11.5px] text-slate">{o.id}</span>
                </p>
                <p className="text-[11.5px] text-slate">{o.date}</p>
              </div>
              <div className="text-right">
                <p className="font-mono font-semibold text-[13px] text-navy">{o.total}</p>
                <p
                  className={`text-[10.5px] font-medium ${
                    delivered ? "text-route" : "text-red-400"
                  }`}
                >
                  {o.status}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
