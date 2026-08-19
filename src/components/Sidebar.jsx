import Logo from "./Logo";
import { LogOut } from "lucide-react";

export default function Sidebar({ items, active, onChange, user, onSignOut }) {
  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 h-screen sticky top-0 bg-navy-deep text-white">
      <div className="h-20 flex items-center px-6 border-b border-white/10">
        <Logo size="text-lg" light />
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {items.map((item) => {
          const isActive = active === item.key;
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              onClick={() => onChange(item.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-white text-navy shadow-card"
                  : "text-sky-mid/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-2 mb-3">
          <div className="w-9 h-9 rounded-full bg-signal/90 flex items-center justify-center font-display font-700 text-navy-deep text-sm">
            {(user?.name || "U").charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate">{user?.name || "Guest"}</p>
            <p className="text-[11px] text-sky-mid/70 capitalize">{user?.role || ""} account</p>
          </div>
        </div>
        <button
          onClick={onSignOut}
          className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-sky-mid/80 hover:bg-white/10 hover:text-white transition-colors"
        >
          <LogOut className="w-4 h-4" strokeWidth={2.2} />
          Sign out
        </button>
      </div>
    </aside>
  );
}
