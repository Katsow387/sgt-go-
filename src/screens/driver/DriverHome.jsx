import { Package, CheckCircle, Clock, TrendingUp } from "lucide-react";

export default function DriverHome({ goTo }) {
  const stats = [
    { label: "Today’s deliveries", value: "4", icon: Package, color: "text-route" },
    { label: "Completed", value: "2", icon: CheckCircle, color: "text-green-500" },
    { label: "Pending", value: "2", icon: Clock, color: "text-signal" },
    { label: "Earnings", value: "R 340", icon: TrendingUp, color: "text-navy" },
  ];
                                                                                         
  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-slate font-mono">
            Driver dashboard
          </p>
          <h1 className="font-display font-bold text-2xl text-navy leading-tight">
            Good morning, Thabo
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold text-sm">
          TM
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl shadow-card p-3">
            <s.icon size={18} className={s.color} />
            <p className="font-display font-bold text-lg text-ink mt-1">{s.value}</p>
            <p className="text-[10px] text-slate">{s.label}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => goTo("driverDeliveries")}
        className="w-full bg-navy text-white font-display font-bold rounded-full py-3 flex items-center justify-center gap-2"
      >
        View all deliveries
      </button>
    </div>
  );
}