import { useState } from "react";
import { DRIVER_DELIVERIES, STATUS_STEPS } from "../../data";
import { ArrowLeft, Phone, MessageCircle, Check, Navigation } from "lucide-react";

export default function DriverDeliveryDetail({ goTo, deliveryId }) {
  const delivery = DRIVER_DELIVERIES.find((d) => d.id === deliveryId) || DRIVER_DELIVERIES[0];
  const [status, setStatus] = useState(delivery.status);
  const currentIndex = STATUS_STEPS.findIndex((s) => s.key === status);

  const advance = () => {
    const next = STATUS_STEPS[Math.min(currentIndex + 1, STATUS_STEPS.length - 1)];
    setStatus(next.key);
  };

  return (
    <div className="p-5 md:p-10 max-w-3xl mx-auto fade-up pb-24 md:pb-10">
      <button
        onClick={() => goTo("driverDeliveries")}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate hover:text-route mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to deliveries
      </button>

      <div className="flex items-center justify-between mb-1">
        <h1 className="font-display font-800 text-2xl md:text-3xl text-navy tracking-tight">
          {delivery.id}
        </h1>
        <span className="text-xs font-semibold text-route">{delivery.eta}</span>
      </div>
      <p className="text-sm text-slate mb-8">Customer: {delivery.customer}</p>

      <div className="bg-white rounded-xl2 shadow-card border border-sky-mid p-6 mb-6">
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
                  i <= currentIndex ? "bg-route text-white" : "bg-sky-mid text-slate"
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

      <div className="bg-white rounded-xl2 shadow-card border border-sky-mid p-6 space-y-4 mb-6">
        <div>
          <p className="text-xs text-slate">Pickup</p>
          <p className="text-sm font-medium text-ink">{delivery.pickup}</p>
        </div>
        <div>
          <p className="text-xs text-slate">Drop-off</p>
          <p className="text-sm font-medium text-ink">{delivery.dropoff}</p>
        </div>
        <div className="flex gap-3 pt-2">
          <button className="flex-1 flex items-center justify-center gap-1.5 border border-sky-mid rounded-xl py-2.5 text-sm font-semibold text-ink hover:border-route hover:text-route transition-colors">
            <Phone className="w-4 h-4" /> Call customer
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 border border-sky-mid rounded-xl py-2.5 text-sm font-semibold text-ink hover:border-route hover:text-route transition-colors">
            <MessageCircle className="w-4 h-4" /> Message
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 border border-sky-mid rounded-xl py-3.5 text-sm font-semibold text-ink hover:border-route hover:text-route transition-colors">
          <Navigation className="w-4 h-4" /> Navigate
        </button>
        <button
          onClick={advance}
          disabled={currentIndex === STATUS_STEPS.length - 1}
          className="flex-1 bg-route hover:bg-navy-light disabled:bg-sky-mid disabled:text-slate transition-colors text-white font-semibold text-sm py-3.5 rounded-xl shadow-card"
        >
          {currentIndex === STATUS_STEPS.length - 1
            ? "Delivered"
            : `Mark as ${STATUS_STEPS[currentIndex + 1].label}`}
        </button>
      </div>
    </div>
  );
}
