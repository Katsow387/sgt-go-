import { useState } from "react";
import { RETAILERS, SAVED_PLACES } from "../../data";
import { ArrowLeft, MapPin, Package } from "lucide-react";

export default function NewDelivery({ goTo }) {
  const [retailer, setRetailer] = useState(RETAILERS[0].name);
  const [pickup, setPickup] = useState(SAVED_PLACES[1]?.detail || "");
  const [dropoff, setDropoff] = useState(SAVED_PLACES[0]?.detail || "");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    goTo("customerTrack");
  };

  return (
    <div className="p-5 md:p-10 max-w-3xl mx-auto fade-up pb-24 md:pb-10">
      <button
        onClick={() => goTo("customerHome")}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate hover:text-route mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <h1 className="font-display font-800 text-2xl md:text-3xl text-navy tracking-tight mb-1">
        New delivery
      </h1>
      <p className="text-sm text-slate mb-8">Tell us what to collect and where it's going.</p>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl2 shadow-card border border-sky-mid p-6 md:p-8 space-y-6">
        <div>
          <label className="block text-xs font-semibold text-ink mb-2">Retailer</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {RETAILERS.map((r) => (
              <button
                type="button"
                key={r.name}
                onClick={() => setRetailer(r.name)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-colors ${
                  retailer === r.name
                    ? "border-route bg-route/5 text-route"
                    : "border-sky-mid text-ink hover:border-route/50"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-display font-700 text-white text-xs"
                  style={{ backgroundColor: r.color }}
                >
                  {r.name.charAt(0)}
                </div>
                {r.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-ink mb-1.5">Pickup location</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-route" />
              <input
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-sky-mid bg-white text-sm focus:outline-none focus:ring-2 focus:ring-route/40 focus:border-route"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-ink mb-1.5">Drop-off location</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-signal" />
              <input
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-sky-mid bg-white text-sm focus:outline-none focus:ring-2 focus:ring-route/40 focus:border-route"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-ink mb-1.5">Package notes (optional)</label>
          <div className="relative">
            <Package className="absolute left-3.5 top-3.5 w-4 h-4 text-slate" />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="e.g. 2 boxes, fragile, ~15kg"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-sky-mid bg-white text-sm focus:outline-none focus:ring-2 focus:ring-route/40 focus:border-route resize-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-sky-mid">
          <div>
            <p className="text-xs text-slate">Estimated fare</p>
            <p className="font-display font-800 text-xl text-navy">R 185.00</p>
          </div>
          <button
            type="submit"
            className="bg-route hover:bg-navy-light transition-colors text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-card"
          >
            Confirm delivery
          </button>
        </div>
      </form>
    </div>
  );
}
