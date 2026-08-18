import { Truck, ShoppingBag, Store, Building2, LayoutDashboard } from "lucide-react";
import Logo from "../components/Logo";

const ROLES = [
  { key: "customer", label: "I’m a Customer", desc: "Send packages and track deliveries", icon: ShoppingBag, bg: "bg-sky", fg: "text-route" },
  { key: "merchant", label: "I’m a Merchant", desc: "Order stock from suppliers", icon: Building2, bg: "bg-sky", fg: "text-route" },
  { key: "supplier", label: "I’m a Supplier", desc: "Receive orders and manage inventory", icon: Store, bg: "bg-navy", fg: "text-white" },
  { key: "driver", label: "I’m a Driver", desc: "Accept deliveries and earn", icon: Truck, bg: "bg-navy", fg: "text-white" },
  { key: "admin", label: "SGT GO Admin", desc: "Manage the platform", icon: LayoutDashboard, bg: "bg-navy-deep", fg: "text-white" },
];

export default function RoleSelect({ onSelectRole }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 text-center pt-4 pb-8 overflow-y-auto">
      <Logo size="text-4xl" />
      <h2 className="font-display font-bold text-xl text-navy mt-6">Choose your role</h2>
      <p className="text-sm text-slate mb-6">How will you use SGT GO today?</p>
      <div className="w-full space-y-3">
        {ROLES.map(({ key, label, desc, icon: Icon, bg, fg }) => (
          <button
            key={key}
            onClick={() => onSelectRole(key)}
            className="w-full bg-white rounded-xl2 shadow-card p-4 flex items-center gap-4 hover:shadow-float transition-shadow"
          >
            <div className={`w-11 h-11 rounded-full ${bg} ${fg} flex items-center justify-center shrink-0`}>
              <Icon size={20} />
            </div>
            <div className="text-left">
              <p className="font-display font-bold text-[13.5px] text-ink">{label}</p>
              <p className="text-[11.5px] text-slate">{desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
