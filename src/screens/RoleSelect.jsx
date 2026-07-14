import { Truck, ShoppingBag } from "lucide-react";
import Logo from "../components/Logo";

export default function RoleSelect({ onSelectRole }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 text-center">
      <Logo size="text-4xl" />
      <h2 className="font-display font-bold text-xl text-navy mt-6">Choose your role</h2>
      <p className="text-sm text-slate mb-8">How will you use SGT GO today?</p>
      <div className="w-full space-y-4">
        <button
          onClick={() => onSelectRole("customer")}
          className="w-full bg-white rounded-xl2 shadow-card p-5 flex items-center gap-4 hover:shadow-float transition-shadow"
        >
          <div className="w-12 h-12 rounded-full bg-sky text-route flex items-center justify-center">
            <ShoppingBag size={24} />
          </div>
          <div className="text-left">
            <p className="font-display font-bold text-ink">I’m a Customer</p>
            <p className="text-sm text-slate">Send packages and track deliveries</p>
          </div>
        </button>
        <button
          onClick={() => onSelectRole("driver")}
          className="w-full bg-white rounded-xl2 shadow-card p-5 flex items-center gap-4 hover:shadow-float transition-shadow"
        >
          <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center">
            <Truck size={24} />
          </div>
          <div className="text-left">
            <p className="font-display font-bold text-ink">I’m a Driver</p>
            <p className="text-sm text-slate">Accept deliveries and earn</p>
          </div>
        </button>
      </div>
    </div>
  );
}