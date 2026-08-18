import { CreditCard, TrendingUp, Plus } from "lucide-react";
import { MERCHANT_STATS, MERCHANT_ORDERS } from "../../data";

export default function MerchantPayments() {
  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <h1 className="font-display font-bold text-lg text-navy mb-5">Payments & spending</h1>

      <div className="rounded-xl2 bg-gradient-to-br from-navy to-navy-light p-5 shadow-float mb-6">
        <p className="text-sky text-[11px] font-mono uppercase tracking-[0.14em] mb-2 flex items-center gap-1.5">
          <TrendingUp size={13} /> This month
        </p>
        <p className="font-display font-bold text-white text-2xl">{MERCHANT_STATS.monthSpend}</p>
        <p className="text-sky text-[11.5px] mt-1">across {MERCHANT_ORDERS.length} orders</p>
      </div>

      <h3 className="font-display font-bold text-sm text-ink mb-2.5">Payment methods</h3>
      <div className="bg-white rounded-xl2 shadow-card p-4 flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-sky flex items-center justify-center text-route shrink-0">
          <CreditCard size={18} />
        </div>
        <div className="flex-1">
          <p className="font-display font-semibold text-[13px] text-ink">Business card •• 4471</p>
          <p className="text-[11.5px] text-slate">Default payment method</p>
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 text-[12.5px] font-medium text-route bg-sky rounded-xl py-3 mb-6">
        <Plus size={14} /> Add payment method
      </button>

      <h3 className="font-display font-bold text-sm text-ink mb-2.5">Recent spend</h3>
      <div className="space-y-2">
        {MERCHANT_ORDERS.map((o) => (
          <div key={o.id} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-card">
            <div>
              <p className="font-display font-semibold text-[12.5px] text-ink">{o.supplier}</p>
              <p className="text-[11px] text-slate">{o.date}</p>
            </div>
            <p className="font-mono font-semibold text-[13px] text-navy">{o.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
