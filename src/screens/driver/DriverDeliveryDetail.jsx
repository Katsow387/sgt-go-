import { useState } from "react";
import { ChevronLeft, Phone, MessageCircle, MapPin } from "lucide-react";
import { STATUS_STEPS } from "../../data";

export default function DriverDeliveryDetail({ goTo, deliveryId }) {
  const [stepIndex, setStepIndex] = useState(0); // would be fetched from data

  const handlePickup = () => setStepIndex(1);
  const handleDeliver = () => setStepIndex(3);

  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-5">
        <button onClick={() => goTo("driverDeliveries")} className="text-navy">
          <ChevronLeft size={22} />
        </button>
        <h1 className="font-display font-bold text-lg text-navy">Delivery {deliveryId}</h1>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl2 shadow-card p-4 mb-5">
        <div className="flex items-center">
          {STATUS_STEPS.map((step, i) => (
            <div key={step.key} className="flex-1 flex items-center last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <div className={`w-3 h-3 rounded-full ${i <= stepIndex ? "bg-route" : "bg-sky-mid"}`} />
                <span className={`text-[9.5px] font-medium text-center w-14 leading-tight ${i <= stepIndex ? "text-navy" : "text-slate/60"}`}>
                  {step.label}
                </span>
              </div>
              {i < STATUS_STEPS.length - 1 && (
                <div className={`h-[2px] flex-1 -mt-4 ${i < stepIndex ? "bg-route" : "bg-sky-mid"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Addresses */}
      <div className="bg-white rounded-xl2 shadow-card p-4 mb-5">
        <div className="flex gap-3">
          <div className="flex flex-col items-center pt-1">
            <MapPin size={14} className="text-route" />
            <div className="w-[1.5px] flex-1 bg-sky-mid my-1" />
            <MapPin size={14} className="text-signal" />
          </div>
          <div className="flex-1 space-y-3 text-sm">
            <div>
              <p className="text-[10px] font-mono uppercase text-slate">Pickup</p>
              <p className="font-medium text-ink">Unit 29, Pongola River Drive, Norkem Park</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase text-slate">Drop‑off</p>
              <p className="font-medium text-ink">44 Rivonia Rd, Sandton</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        {stepIndex === 0 && (
          <button
            onClick={handlePickup}
            className="w-full bg-route text-white font-display font-bold rounded-full py-3"
          >
            Mark as picked up
          </button>
        )}
        {stepIndex === 1 && (
          <button
            onClick={handleDeliver}
            className="w-full bg-green-500 text-white font-display font-bold rounded-full py-3"
          >
            Mark as delivered
          </button>
        )}
        {stepIndex < 2 && (
          <div className="flex gap-3">
            <button className="flex-1 bg-sky text-route font-medium rounded-full py-2.5 flex items-center justify-center gap-1">
              <MessageCircle size={16} /> Chat
            </button>
            <button className="flex-1 bg-navy text-white font-medium rounded-full py-2.5 flex items-center justify-center gap-1">
              <Phone size={16} /> Call
            </button>
          </div>
        )}
      </div>
    </div>
  );
}