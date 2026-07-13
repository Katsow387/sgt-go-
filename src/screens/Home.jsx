import { ArrowRight, MapPin, Package, ShieldCheck } from "lucide-react";
import { RETAILERS, SAVED_PLACES } from "../data";

export default function Home({ goTo }) {
  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-slate font-mono">
            Segwata Holdings
          </p>
          <h1 className="font-display font-bold text-2xl text-navy leading-tight">
            Morning, Dimakatso
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold text-sm">
          L
        </div>
      </div>

      {/* Hero card */}
      <button
        onClick={() => goTo("new")}
        className="w-full text-left rounded-xl2 bg-gradient-to-br from-navy to-navy-light p-5 shadow-float relative overflow-hidden mb-6"
      >
        <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 300 140" fill="none">
          <path d="M0 110 Q80 60 150 90 T300 40" stroke="#EAF2FC" strokeWidth="1.5" className="route-line" />
          <path d="M0 40 Q100 90 180 50 T300 100" stroke="#F5A623" strokeWidth="1.2" className="route-line" />
        </svg>
        <div className="relative">
          <p className="text-sky text-[11px] font-mono uppercase tracking-[0.14em] mb-2">
            Same-day delivery
          </p>
          <h2 className="font-display font-bold text-white text-xl leading-snug mb-4 max-w-[210px]">
            Get anything picked up and dropped off, today.
          </h2>
          <span className="inline-flex items-center gap-2 bg-signal text-navy-deep font-display font-bold text-sm px-4 py-2 rounded-full">
            Send a package <ArrowRight size={16} />
          </span>
        </div>
      </button>

      {/* Saved places */}
      <div className="mb-6">
        <h3 className="font-display font-bold text-sm text-ink mb-2.5">Saved places</h3>
        <div className="space-y-2">
          {SAVED_PLACES.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-card"
            >
              <div className="w-8 h-8 rounded-full bg-sky flex items-center justify-center text-route shrink-0">
                <MapPin size={16} />
              </div>
              <div className="min-w-0">
                <p className="font-display font-semibold text-[13px] text-ink">{p.label}</p>
                <p className="text-[12px] text-slate truncate">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Retail partners */}
      <div className="mb-6">
        <h3 className="font-display font-bold text-sm text-ink mb-2.5">
          Shop from our partner retailers
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {RETAILERS.map((r) => (
            <button
              key={r.name}
              onClick={() => goTo("new")}
              className="bg-white rounded-xl px-4 py-4 shadow-card flex flex-col gap-2 items-start"
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${r.color}1A` }}
              >
                <Package size={16} style={{ color: r.color }} />
              </span>
              <span className="font-display font-semibold text-[12.5px] text-ink">{r.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2.5 bg-sky rounded-xl px-4 py-3">
        <ShieldCheck size={18} className="text-route shrink-0" />
        <p className="text-[11.5px] text-navy-light leading-snug">
          Every delivery is covered under our loss-adjusting partnership with AOS Assessing.
        </p>
      </div>
    </div>
  );
}
