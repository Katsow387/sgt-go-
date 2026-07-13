import { useEffect, useState } from "react";
import { Phone, MessageCircle, Star } from "lucide-react";
import { STATUS_STEPS, DRIVER } from "../data";

export default function Track() {
  const [stepIndex, setStepIndex] = useState(2); // "in transit"

  useEffect(() => {
    const id = setInterval(() => {
      setStepIndex((i) => (i < STATUS_STEPS.length - 1 ? i + 1 : i));
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-full overflow-y-auto pb-28">
      {/* Route map */}
      <div className="relative h-56 bg-navy-deep overflow-hidden">
        <svg viewBox="0 0 375 224" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mapfade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0B2A5B" />
              <stop offset="100%" stopColor="#071A3D" />
            </linearGradient>
          </defs>
          <rect width="375" height="224" fill="url(#mapfade)" />
          {[...Array(6)].map((_, i) => (
            <line key={i} x1={i * 70} y1="0" x2={i * 70} y2="224" stroke="#12397D" strokeWidth="1" opacity="0.4" />
          ))}
          {[...Array(5)].map((_, i) => (
            <line key={i} x1="0" y1={i * 56} x2="375" y2={i * 56} stroke="#12397D" strokeWidth="1" opacity="0.4" />
          ))}

          <path
            id="routePath"
            d="M40 180 C 110 190, 130 110, 190 110 S 300 60, 340 50"
            stroke="#5B84C4"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M40 180 C 110 190, 130 110, 190 110 S 300 60, 340 50"
            stroke="#EAF2FC"
            strokeWidth="2"
            strokeDasharray="6 8"
            fill="none"
            className="route-line"
          />

          <circle cx="40" cy="180" r="5" fill="#F5A623" />
          <circle cx="340" cy="50" r="5" fill="#1768D1" />
          <circle cx="340" cy="50" r="9" fill="#1768D1" opacity="0.35" className="pulse-ring" />

          <circle r="6" fill="#F5A623" stroke="#071A3D" strokeWidth="2">
            <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
              <mpath href="#routePath" />
            </animateMotion>
          </circle>
        </svg>

        <div className="absolute top-4 left-5 right-5 bg-white/95 backdrop-blur rounded-xl px-4 py-2.5 flex items-center justify-between shadow-float">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wide text-slate">Order</p>
            <p className="font-display font-bold text-[13px] text-navy">SGT-48312</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono uppercase tracking-wide text-slate">ETA</p>
            <p className="font-display font-bold text-[13px] text-route">{DRIVER.eta}</p>
          </div>
        </div>
      </div>

      <div className="px-5 pt-5">
        {/* Status timeline */}
        <div className="bg-white rounded-xl2 shadow-card p-4 mb-5">
          <div className="flex items-center">
            {STATUS_STEPS.map((step, i) => (
              <div key={step.key} className="flex-1 flex items-center last:flex-none">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      i <= stepIndex ? "bg-route" : "bg-sky-mid"
                    }`}
                  />
                  <span
                    className={`text-[9.5px] font-medium text-center w-14 leading-tight ${
                      i <= stepIndex ? "text-navy" : "text-slate/60"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < STATUS_STEPS.length - 1 && (
                  <div
                    className={`h-[2px] flex-1 -mt-4 ${
                      i < stepIndex ? "bg-route" : "bg-sky-mid"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Driver card */}
        <div className="bg-white rounded-xl2 shadow-card p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold">
            TM
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-[13.5px] text-ink">{DRIVER.name}</p>
            <p className="text-[11.5px] text-slate">{DRIVER.vehicle}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <Star size={11} className="fill-signal text-signal" />
              <span className="text-[11px] text-slate font-medium">{DRIVER.rating}</span>
            </div>
          </div>
          <button className="w-9 h-9 rounded-full bg-sky text-route flex items-center justify-center">
            <MessageCircle size={16} />
          </button>
          <button className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center">
            <Phone size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
