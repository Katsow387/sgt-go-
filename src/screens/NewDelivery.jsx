import { useState } from "react";
import { ChevronLeft, MapPin, Circle, Package2 } from "lucide-react";

const SIZES = [
  { key: "small", label: "Small", desc: "Bag, box < 5kg", price: 85 },
  { key: "medium", label: "Medium", desc: "Appliance, < 20kg", price: 165 },
  { key: "large", label: "Large", desc: "Furniture, bulk", price: 320 },
];

export default function NewDelivery({ goTo }) {
  const [pickup, setPickup] = useState("Unit 29, Pongola River Drive, Norkem Park");
  const [dropoff, setDropoff] = useState("");
  const [size, setSize] = useState("medium");

  const selected = SIZES.find((s) => s.key === size);

  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-5">
        <button onClick={() => goTo("home")} className="text-navy">
          <ChevronLeft size={22} />
        </button>
        <h1 className="font-display font-bold text-lg text-navy">Send a package</h1>
      </div>

      {/* Route inputs */}
      <div className="bg-white rounded-xl2 shadow-card p-4 mb-5">
        <div className="flex gap-3">
          <div className="flex flex-col items-center pt-2">
            <Circle size={10} className="text-route fill-route" />
            <div className="w-[1.5px] flex-1 bg-sky-mid my-1" />
            <MapPin size={12} className="text-signal" />
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <label className="text-[10.5px] uppercase tracking-wide text-slate font-mono">
                Pickup
              </label>
              <input
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full text-[13.5px] font-medium text-ink border-b border-sky-mid pb-1.5 focus:outline-none focus:border-route"
              />
            </div>
            <div>
              <label className="text-[10.5px] uppercase tracking-wide text-slate font-mono">
                Drop-off
              </label>
              <input
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder="Enter delivery address"
                className="w-full text-[13.5px] font-medium text-ink border-b border-sky-mid pb-1.5 focus:outline-none focus:border-route placeholder:text-slate/60 placeholder:font-normal"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Package size */}
      <h3 className="font-display font-bold text-sm text-ink mb-2.5">Package size</h3>
      <div className="space-y-2.5 mb-6">
        {SIZES.map((s) => (
          <button
            key={s.key}
            onClick={() => setSize(s.key)}
            className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 border-2 transition-colors ${
              size === s.key ? "border-route bg-sky" : "border-transparent bg-white shadow-card"
            }`}
          >
            <span
              className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                size === s.key ? "bg-route text-white" : "bg-sky text-route"
              }`}
            >
              <Package2 size={16} />
            </span>
            <span className="text-left flex-1">
              <p className="font-display font-semibold text-[13px] text-ink">{s.label}</p>
              <p className="text-[11.5px] text-slate">{s.desc}</p>
            </span>
            <span className="font-mono font-semibold text-[13px] text-navy">R{s.price}</span>
          </button>
        ))}
      </div>

      <button
        disabled={!dropoff}
        onClick={() => goTo("track")}
        className="w-full bg-navy disabled:bg-slate/40 text-white font-display font-bold text-sm rounded-full py-3.5 flex items-center justify-center gap-2"
      >
        Confirm · R{selected.price}.00
      </button>
    </div>
  );
}
