import { ArrowRight, Wallet, PackageSearch, TrendingDown, Tag } from "lucide-react";
import { MERCHANT, MERCHANT_STATS, MERCHANT_ORDERS, PROMOTIONS } from "../../data";

export default function MerchantHome({ goTo }) {
  const openOrder = MERCHANT_ORDERS.find((o) => o.status === "In transit");

  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-slate font-mono">
            Merchant dashboard
          </p>
          <h1 className="font-display font-bold text-2xl text-navy leading-tight">
            {MERCHANT.business}
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold text-sm">
          {MERCHANT.contact.charAt(0)}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-xl shadow-card p-3">
          <Wallet size={16} className="text-route" />
          <p className="font-display font-bold text-[15px] text-ink mt-1">{MERCHANT_STATS.monthSpend}</p>
          <p className="text-[9.5px] text-slate">Spend this month</p>
        </div>
        <div className="bg-white rounded-xl shadow-card p-3">
          <PackageSearch size={16} className="text-signal" />
          <p className="font-display font-bold text-[15px] text-ink mt-1">{MERCHANT_STATS.openOrders}</p>
          <p className="text-[9.5px] text-slate">Open orders</p>
        </div>
        <div className="bg-white rounded-xl shadow-card p-3">
          <TrendingDown size={16} className="text-green-500" />
          <p className="font-display font-bold text-[15px] text-ink mt-1">{MERCHANT_STATS.savedVsRetail}</p>
          <p className="text-[9.5px] text-slate">Saved vs retail</p>
        </div>
      </div>

      {/* Reorder CTA */}
      <button
        onClick={() => goTo("merchantOrders")}
        className="w-full text-left rounded-xl2 bg-gradient-to-br from-navy to-navy-light p-5 shadow-float relative overflow-hidden mb-6"
      >
        <div className="relative">
          <p className="text-sky text-[11px] font-mono uppercase tracking-[0.14em] mb-2">
            One-click reorder
          </p>
          <h2 className="font-display font-bold text-white text-xl leading-snug mb-4 max-w-[220px]">
            Reorder your usual stock from trusted suppliers.
          </h2>
          <span className="inline-flex items-center gap-2 bg-signal text-navy-deep font-display font-bold text-sm px-4 py-2 rounded-full">
            View orders <ArrowRight size={16} />
          </span>
        </div>
      </button>

      {/* Live order */}
      {openOrder && (
        <div className="mb-6">
          <h3 className="font-display font-bold text-sm text-ink mb-2.5">In transit</h3>
          <button
            onClick={() => goTo("merchantOrders")}
            className="w-full text-left flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-card"
          >
            <div className="w-9 h-9 rounded-full bg-sky flex items-center justify-center text-route shrink-0">
              <PackageSearch size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-semibold text-[13px] text-ink">
                {openOrder.supplier} · <span className="font-mono text-[11.5px] text-slate">{openOrder.id}</span>
              </p>
              <p className="text-[11.5px] text-slate">{openOrder.items} items · {openOrder.total}</p>
            </div>
            <ArrowRight size={16} className="text-slate" />
          </button>
        </div>
      )}

      {/* Promotions */}
      <div>
        <h3 className="font-display font-bold text-sm text-ink mb-2.5">Promotions for you</h3>
        <div className="space-y-2">
          {PROMOTIONS.map((p) => (
            <div key={p.id} className="flex items-center gap-3 bg-sky rounded-xl px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-route shrink-0">
                <Tag size={15} />
              </div>
              <div className="min-w-0">
                <p className="font-display font-semibold text-[12.5px] text-navy-light truncate">{p.title}</p>
                <p className="text-[11px] text-slate">{p.expires}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
