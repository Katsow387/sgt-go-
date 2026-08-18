import { ChevronLeft, MapPin, PackageCheck, Clock, CheckCircle } from "lucide-react";

const DELIVERIES = [
  { id: "SGT-48312", pickup: "Unit 29, Norkem Park", dropoff: "44 Rivonia Rd", status: "picked", eta: "14 min" },
  { id: "SGT-48305", pickup: "Makro, Midrand", dropoff: "Sandton City", status: "pending", eta: "30 min" },
  { id: "SGT-48298", pickup: "Builders, Kempton", dropoff: "Boksburg", status: "delivered", eta: "-" },
];

export default function DriverDeliveries({ goTo }) {
  const statusIcon = (status) => {
    if (status === "picked") return <PackageCheck size={16} className="text-signal" />;
    if (status === "pending") return <Clock size={16} className="text-slate" />;
    return <CheckCircle size={16} className="text-green-500" />;
  };

  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-5">
        <button onClick={() => goTo("driverHome")} className="text-navy">
          <ChevronLeft size={22} />
        </button>
        <h1 className="font-display font-bold text-lg text-navy">My deliveries</h1>
      </div>

      <div className="space-y-3">
        {DELIVERIES.map((d) => (
          <button
            key={d.id}
            onClick={() => goTo("driverDeliveryDetail", { id: d.id })}
            className="w-full text-left bg-white rounded-xl2 shadow-card p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-sky flex items-center justify-center text-route shrink-0">
              {statusIcon(d.status)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-semibold text-[13px] text-ink">
                {d.id} · {d.status}
              </p>
              <p className="text-[11.5px] text-slate truncate">
                <MapPin size={12} className="inline mr-1" />
                {d.pickup} → {d.dropoff}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-slate">ETA</p>
              <p className="font-mono font-semibold text-[13px] text-route">{d.eta}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}