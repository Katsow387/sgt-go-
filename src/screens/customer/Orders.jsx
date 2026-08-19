import { PAST_ORDERS } from "../../data";
import PageHeader from "../../components/PageHeader";
import { Package, ChevronRight } from "lucide-react";

const STATUS_STYLES = {
  Delivered: "bg-emerald-50 text-emerald-600",
  Cancelled: "bg-rose-50 text-rose-600",
};

export default function Orders({ goTo }) {
  return (
    <div className="p-5 md:p-10 max-w-4xl mx-auto fade-up pb-24 md:pb-10">
      <PageHeader eyebrow="History" title="Your orders" />

      <div className="bg-white rounded-xl2 shadow-card border border-sky-mid divide-y divide-sky-mid">
        {PAST_ORDERS.map((o) => (
          <button
            key={o.id}
            onClick={() => goTo("customerTrack")}
            className="w-full flex items-center gap-4 p-5 text-left hover:bg-sky/50 transition-colors"
          >
            <div className="w-11 h-11 rounded-full bg-sky flex items-center justify-center shrink-0">
              <Package className="w-5 h-5 text-route" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-ink text-sm">{o.retailer}</p>
                <span className="text-[11px] font-mono text-slate">{o.id}</span>
              </div>
              <p className="text-xs text-slate">{o.date}</p>
            </div>
            <div className="text-right">
              <p className="font-display font-700 text-sm text-navy mb-1">{o.total}</p>
              <span
                className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                  STATUS_STYLES[o.status] || "bg-sky text-navy"
                }`}
              >
                {o.status}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
}
