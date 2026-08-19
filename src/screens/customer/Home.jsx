import { RETAILERS, SAVED_PLACES, PAST_ORDERS } from "../../data";
import PageHeader from "../../components/PageHeader";
import { Plus, MapPin, ChevronRight, Package } from "lucide-react";

export default function Home({ goTo, user }) {
  const activeOrder = PAST_ORDERS[0];

  return (
    <div className="p-5 md:p-10 max-w-6xl mx-auto fade-up pb-24 md:pb-10">
      <PageHeader
        eyebrow="Overview"
        title={`Hi ${user?.name?.split(" ")[0] || "there"}, where to today?`}
      />

      <div className="grid md:grid-cols-3 gap-5">
        {/* New delivery CTA */}
        <button
          onClick={() => goTo("customerNew")}
          className="md:col-span-2 flex items-center justify-between gap-6 bg-navy rounded-xl2 p-7 text-left text-white shadow-float hover:bg-navy-light transition-colors"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-signal mb-2">
              Book a delivery
            </p>
            <h2 className="font-display font-800 text-xl md:text-2xl mb-1">
              Start a new delivery
            </h2>
            <p className="text-sm text-sky-mid/80">
              From Game, Makro, Builders Warehouse, Walmart & more.
            </p>
          </div>
          <div className="w-14 h-14 shrink-0 rounded-full bg-signal flex items-center justify-center">
            <Plus className="w-7 h-7 text-navy-deep" strokeWidth={2.5} />
          </div>
        </button>

        {/* Active order */}
        <button
          onClick={() => goTo("customerTrack")}
          className="bg-white rounded-xl2 p-6 shadow-card border border-sky-mid text-left hover:border-route transition-colors flex flex-col justify-between"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-route mb-2">
              In transit
            </p>
            <p className="font-display font-700 text-navy text-base mb-1">SGT-48312</p>
            <p className="text-xs text-slate">Arriving in 14 min</p>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-route mt-4">
            Track live <ChevronRight className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Retailers */}
      <div className="mt-8">
        <h3 className="font-display font-700 text-navy text-lg mb-4">Popular retailers</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {RETAILERS.map((r) => (
            <button
              key={r.name}
              onClick={() => goTo("customerNew")}
              className="bg-white rounded-xl p-5 shadow-card border border-sky-mid hover:-translate-y-0.5 hover:border-route transition-all flex flex-col items-center gap-3"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-display font-700 text-white text-sm"
                style={{ backgroundColor: r.color }}
              >
                {r.name.charAt(0)}
              </div>
              <span className="text-xs font-semibold text-ink text-center">{r.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Saved places + recent orders */}
      <div className="grid md:grid-cols-2 gap-5 mt-8">
        <div className="bg-white rounded-xl2 p-6 shadow-card border border-sky-mid">
          <h3 className="font-display font-700 text-navy text-base mb-4">Saved places</h3>
          <div className="space-y-3">
            {SAVED_PLACES.map((p) => (
              <div key={p.id} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-sky flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-route" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{p.label}</p>
                  <p className="text-xs text-slate">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl2 p-6 shadow-card border border-sky-mid">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-700 text-navy text-base">Recent orders</h3>
            <button
              onClick={() => goTo("customerOrders")}
              className="text-xs font-semibold text-route hover:underline"
            >
              View all
            </button>
          </div>
          <div className="space-y-3">
            {PAST_ORDERS.slice(0, 2).map((o) => (
              <div key={o.id} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sky flex items-center justify-center shrink-0">
                  <Package className="w-4 h-4 text-route" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-ink truncate">{o.retailer}</p>
                  <p className="text-xs text-slate">{o.date} · {o.total}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
