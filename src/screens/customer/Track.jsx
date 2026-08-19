import { STATUS_STEPS, DRIVER, DRIVER_DELIVERIES } from "../../data";
import { Phone, MessageCircle, Check } from "lucide-react";

export default function Track() {
  const delivery = DRIVER_DELIVERIES[0];
  const currentIndex = STATUS_STEPS.findIndex((s) => s.key === delivery.status);

  return (
    <div className="p-5 md:p-10 max-w-5xl mx-auto fade-up pb-24 md:pb-10">
      <h1 className="font-display font-800 text-2xl md:text-3xl text-navy tracking-tight mb-1">
        Track delivery
      </h1>
      <p className="text-sm text-slate mb-6">
        Order <span className="font-mono font-semibold text-ink">{delivery.id}</span> · ETA{" "}
        <span className="font-semibold text-route">{delivery.eta}</span>
      </p>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2 bg-white rounded-xl2 shadow-card border border-sky-mid overflow-hidden">
          <svg viewBox="0 0 600 320" className="w-full h-64 md:h-80 bg-sky">
            <path
              d="M60 250 C 180 250, 200 100, 320 100 S 480 60, 540 70"
              stroke="#CFE2FA"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M60 250 C 180 250, 200 100, 320 100 S 480 60, 540 70"
              stroke="#1768D1"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              className="route-line"
            />
            <circle cx="60" cy="250" r="8" fill="#0B2A5B" />
            <circle cx="320" cy="100" r="9" fill="#1768D1" className="pulse-ring" />
            <circle cx="320" cy="100" r="9" fill="#1768D1" />
            <circle cx="540" cy="70" r="8" fill="#F5A623" />
          </svg>
          <div className="p-6 border-t border-sky-mid">
            <div className="flex items-center justify-between">
              {STATUS_STEPS.map((step, i) => (
                <div key={step.key} className="flex-1 flex flex-col items-center relative">
                  {i > 0 && (
                    <div
                      className={`absolute top-3.5 right-1/2 w-full h-0.5 ${
                        i <= currentIndex ? "bg-route" : "bg-sky-mid"
                      }`}
                    />
                  )}
                  <div
                    className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      i <= currentIndex
                        ? "bg-route text-white"
                        : "bg-sky-mid text-slate"
                    }`}
                  >
                    {i < currentIndex ? <Check className="w-3.5 h-3.5" /> : i + 1}
                  </div>
                  <span
                    className={`mt-2 text-[11px] font-medium text-center ${
                      i <= currentIndex ? "text-navy" : "text-slate"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Driver + details */}
        <div className="space-y-5">
          <div className="bg-white rounded-xl2 shadow-card border border-sky-mid p-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-route mb-3">
              Your driver
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center font-display font-700 text-white">
                {DRIVER.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-ink text-sm">{DRIVER.name}</p>
                <p className="text-xs text-slate">{DRIVER.vehicle}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-1.5 border border-sky-mid rounded-xl py-2.5 text-sm font-semibold text-ink hover:border-route hover:text-route transition-colors">
                <Phone className="w-4 h-4" /> Call
              </button>
              <button className="flex-1 flex items-center justify-center gap-1.5 border border-sky-mid rounded-xl py-2.5 text-sm font-semibold text-ink hover:border-route hover:text-route transition-colors">
                <MessageCircle className="w-4 h-4" /> Chat
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl2 shadow-card border border-sky-mid p-6 space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-route mb-1">
              Delivery details
            </p>
            <div>
              <p className="text-xs text-slate">Pickup</p>
              <p className="text-sm font-medium text-ink">{delivery.pickup}</p>
            </div>
            <div>
              <p className="text-xs text-slate">Drop-off</p>
              <p className="text-sm font-medium text-ink">{delivery.dropoff}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
