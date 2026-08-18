import { BarChart3, Wallet, Truck, Tag } from "lucide-react";
import { SUPPLIER_STATS } from "../../data";

export default function SupplierReports() {
  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <h1 className="font-display font-bold text-lg text-navy mb-5">Reports & payments</h1>

      <div className="rounded-xl2 bg-gradient-to-br from-navy to-navy-light p-5 shadow-float mb-6">
        <p className="text-sky text-[11px] font-mono uppercase tracking-[0.14em] mb-2 flex items-center gap-1.5">
          <Wallet size={13} /> Revenue this month
        </p>
        <p className="font-display font-bold text-white text-2xl">{SUPPLIER_STATS.monthRevenue}</p>
        <p className="text-sky text-[11.5px] mt-1">Fulfilment rate {SUPPLIER_STATS.fulfilmentRate}</p>
      </div>

      <h3 className="font-display font-bold text-sm text-ink mb-2.5">Quick actions</h3>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button className="bg-white rounded-xl shadow-card p-4 flex flex-col items-start gap-2">
          <span className="w-8 h-8 rounded-lg bg-sky flex items-center justify-center text-route">
            <BarChart3 size={16} />
          </span>
          <span className="font-display font-semibold text-[12.5px] text-ink text-left">
            Generate sales report
          </span>
        </button>
        <button className="bg-white rounded-xl shadow-card p-4 flex flex-col items-start gap-2">
          <span className="w-8 h-8 rounded-lg bg-sky flex items-center justify-center text-route">
            <Truck size={16} />
          </span>
          <span className="font-display font-semibold text-[12.5px] text-ink text-left">
            Track outbound deliveries
          </span>
        </button>
        <button className="bg-white rounded-xl shadow-card p-4 flex flex-col items-start gap-2 col-span-2">
          <span className="w-8 h-8 rounded-lg bg-sky flex items-center justify-center text-route">
            <Tag size={16} />
          </span>
          <span className="font-display font-semibold text-[12.5px] text-ink text-left">
            Manage promotions for merchants
          </span>
        </button>
      </div>

      <p className="text-[11.5px] text-slate">
        Payouts are settled weekly to your linked business account. Detailed statements are
        available for download once a report is generated.
      </p>
    </div>
  );
}
