import Logo from "../components/Logo";
import { Package, Truck, ArrowRight } from "lucide-react";

const ROLES = [
  {
    key: "customer",
    icon: Package,
    title: "I'm a customer",
    desc: "Book deliveries, track drivers in real time, and manage your order history.",
  },
  {
    key: "driver",
    icon: Truck,
    title: "I'm a driver",
    desc: "Receive delivery jobs, navigate with GPS, and track your earnings.",
  },
];

export default function RoleSelect({ onSelectRole }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-sky px-6 py-12">
      <Logo size="text-xl" />
      <div className="max-w-2xl w-full text-center mt-10 mb-10">
        <h1 className="font-display font-800 text-2xl md:text-3xl text-navy mb-2">
          How will you use SGT GO?
        </h1>
        <p className="text-sm text-slate">You can switch roles later from your profile.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 w-full max-w-2xl">
        {ROLES.map((role) => (
          <button
            key={role.key}
            onClick={() => onSelectRole(role.key)}
            className="group text-left bg-white rounded-xl2 p-7 shadow-card border border-sky-mid hover:border-route hover:-translate-y-0.5 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center mb-5 group-hover:bg-route/10">
              <role.icon className="w-6 h-6 text-route" strokeWidth={2.2} />
            </div>
            <h3 className="font-display font-700 text-lg text-navy mb-1.5">{role.title}</h3>
            <p className="text-sm text-slate leading-relaxed mb-4">{role.desc}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-route">
              Continue <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
