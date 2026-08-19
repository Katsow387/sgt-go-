import { useState } from "react";
import { DRIVER_DELIVERIES, DRIVER, PAST_ORDERS } from "../../data";
import PageHeader from "../../components/PageHeader";
import { Power, Navigation, ChevronRight, Wallet, Star, Truck } from "lucide-react";

export default function DriverHome({ goTo, user }) {
  const [online, setOnline] = useState(true);
  const active = DRIVER_DELIVERIES[0];

  const stats = [
    { icon: Wallet, label: "Today's earnings", value: "R 640.00" },
    { icon: Truck, label: "Deliveries done", value: "3" },
    { icon: Star, label: "Rating", value: DRIVER.rating },
  ];

  return (
    <div className="p-5 md:p-10 max-w-6xl mx-auto fade-up pb-24 md:pb-10">
      <PageHeader
        eyebrow="Driver"
        title={`Hey ${user?.name?.split(" ")[0] || DRIVER.name.split(" ")[0]}`}
        action={
          <button
            onClick={() => setOnline(!online)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              online ? "bg-emerald-500 text-white" : "bg-sky-mid text-slate"
            }`}
          >
            <Power className="w-4 h-4" />
            {online ? "Online" : "Offline"}
          </button>
        }
      />

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl2 p-5 shadow-card border border-sky-mid">
            <s.icon className="w-5 h-5 text-route mb-3" />
            <p className="font-display font-800 text-xl text-navy">{s.value}</p>
            <p className="text-xs text-slate mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {active && (
        <button
          onClick={() => goTo("driverDeliveryDetail", { id: active.id })}
          className="w-full text-left bg-navy rounded-xl2 p-6 md:p-7 text-white shadow-float hover:bg-navy-light transition-colors flex items-center justify-between gap-6 mb-6"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-signal mb-2">
              Active delivery
            </p>
            <p className="font-display font-700 text-lg mb-1">{active.id}</p>
            <p className="text-sm text-sky-mid/80">{active.dropoff}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Navigation className="w-5 h-5" />
            <ChevronRight className="w-5 h-5" />
          </div>
        </button>
      )}

      <div className="bg-white rounded-xl2 p-6 shadow-card border border-sky-mid">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-700 text-navy text-base">Delivery queue</h3>
          <button
            onClick={() => goTo("driverDeliveries")}
            className="text-xs font-semibold text-route hover:underline"
          >
            View all
          </button>
        </div>
        <div className="space-y-3">
          {DRIVER_DELIVERIES.map((d) => (
            <button
              key={d.id}
              onClick={() => goTo("driverDeliveryDetail", { id: d.id })}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-sky/50 transition-colors text-left"
            >
              <div className="w-9 h-9 rounded-full bg-sky flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4 text-route" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-ink truncate">{d.customer}</p>
                <p className="text-xs text-slate truncate">{d.dropoff}</p>
              </div>
              <span className="text-xs font-semibold text-route shrink-0">{d.eta}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
