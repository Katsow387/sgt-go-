import { DRIVER_DELIVERIES } from "../../data";
import PageHeader from "../../components/PageHeader";
import { ChevronRight, MapPin } from "lucide-react";

const STATUS_STYLES = {
  pending: "bg-amber-50 text-amber-600",
  picked: "bg-sky text-route",
  delivered: "bg-emerald-50 text-emerald-600",
};

export default function DriverDeliveries({ goTo }) {
  return (
    <div className="p-5 md:p-10 max-w-4xl mx-auto fade-up pb-24 md:pb-10">
      <PageHeader eyebrow="Driver" title="Deliveries" />

      <div className="bg-white rounded-xl2 shadow-card border border-sky-mid divide-y divide-sky-mid">
        {DRIVER_DELIVERIES.map((d) => (
          <button
            key={d.id}
            onClick={() => goTo("driverDeliveryDetail", { id: d.id })}
            className="w-full flex items-center gap-4 p-5 text-left hover:bg-sky/50 transition-colors"
          >
            <div className="w-11 h-11 rounded-full bg-sky flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-route" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-ink text-sm">{d.customer}</p>
                <span className="text-[11px] font-mono text-slate">{d.id}</span>
              </div>
              <p className="text-xs text-slate truncate">{d.dropoff}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs font-semibold text-route mb-1">{d.eta}</p>
              <span
                className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${
                  STATUS_STYLES[d.status] || "bg-sky text-navy"
                }`}
              >
                {d.status}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
}
