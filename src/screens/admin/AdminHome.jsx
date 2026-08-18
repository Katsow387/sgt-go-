import { Store, Building2, Truck, Package, Wallet, AlertTriangle } from "lucide-react";
import { ADMIN_STATS, DISPUTES } from "../../data";

export default function AdminHome({ goTo }) {
  const openDisputes = DISPUTES.filter((d) => d.status !== "Resolved");

  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-[0.14em] text-slate font-mono">
          Admin dashboard
        </p>
        <h1 className="font-display font-bold text-2xl text-navy leading-tight">
          Platform overview
        </h1>
      </div>

      <div className="rounded-xl2 bg-gradient-to-br from-navy to-navy-light p-5 shadow-float mb-6">
        <p className="text-sky text-[11px] font-mono uppercase tracking-[0.14em] mb-2 flex items-center gap-1.5">
          <Wallet size={13} /> GMV this month
        </p>
        <p className="font-display font-bold text-white text-2xl">{ADMIN_STATS.gmvMonth}</p>
        <p className="text-sky text-[11.5px] mt-1">{ADMIN_STATS.deliveriesToday} deliveries today</p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-xl shadow-card p-3">
          <Store size={16} className="text-route" />
          <p className="font-display font-bold text-[15px] text-ink mt-1">{ADMIN_STATS.activeSuppliers}</p>
          <p className="text-[9.5px] text-slate">Suppliers</p>
        </div>
        <div className="bg-white rounded-xl shadow-card p-3">
          <Building2 size={16} className="text-signal" />
          <p className="font-display font-bold text-[15px] text-ink mt-1">{ADMIN_STATS.activeMerchants}</p>
          <p className="text-[9.5px] text-slate">Merchants</p>
        </div>
        <div className="bg-white rounded-xl shadow-card p-3">
          <Truck size={16} className="text-navy" />
          <p className="font-display font-bold text-[15px] text-ink mt-1">{ADMIN_STATS.activeDrivers}</p>
          <p className="text-[9.5px] text-slate">Drivers</p>
        </div>
      </div>

      <button
        onClick={() => goTo("adminManage")}
        className="w-full flex items-center gap-3 bg-white rounded-xl2 shadow-card p-4 mb-3"
      >
        <div className="w-10 h-10 rounded-full bg-sky flex items-center justify-center text-route shrink-0">
          <Package size={18} />
        </div>
        <div className="flex-1 text-left">
          <p className="font-display font-semibold text-[13px] text-ink">Manage network</p>
          <p className="text-[11.5px] text-slate">Suppliers, merchants & drivers</p>
        </div>
      </button>

      <button
        onClick={() => goTo("adminDisputes")}
        className="w-full flex items-center gap-3 bg-white rounded-xl2 shadow-card p-4"
      >
        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-400 shrink-0">
          <AlertTriangle size={18} />
        </div>
        <div className="flex-1 text-left">
          <p className="font-display font-semibold text-[13px] text-ink">Open disputes</p>
          <p className="text-[11.5px] text-slate">{openDisputes.length} awaiting resolution</p>
        </div>
      </button>
    </div>
  );
}
