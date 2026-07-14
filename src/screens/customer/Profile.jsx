import { MapPin, CreditCard, ShieldCheck, LogOut, ChevronRight } from "lucide-react";

const ROWS = [
  { icon: MapPin, label: "Saved addresses" },
  { icon: CreditCard, label: "Payment methods" },
  { icon: ShieldCheck, label: "Insurance & loss claims" },
];

export default function Profile() {
  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold text-lg">
          L
        </div>
        <div>
          <p className="font-display font-bold text-[15px] text-ink">Lindiwe Khumalo</p>
          <p className="text-[12px] text-slate">lindiwe.k@gmail.com</p>
        </div>
      </div>

      <div className="bg-white rounded-xl2 shadow-card divide-y divide-sky-mid overflow-hidden mb-5">
        {ROWS.map(({ icon: Icon, label }) => (
          <button key={label} className="w-full flex items-center gap-3 px-4 py-3.5">
            <Icon size={17} className="text-route shrink-0" />
            <span className="flex-1 text-left text-[13px] font-medium text-ink">{label}</span>
            <ChevronRight size={16} className="text-slate" />
          </button>
        ))}
      </div>

      <button className="w-full flex items-center justify-center gap-2 text-[13px] font-medium text-red-400 py-3">
        <LogOut size={15} /> Sign out
      </button>

      <p className="text-center text-[10.5px] text-slate/70 mt-6 italic">
        Driven by Reliability. Built on Integrity.
      </p>
    </div>
  );
}
