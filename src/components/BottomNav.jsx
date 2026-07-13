import { Home, PackagePlus, MapPinned, User } from "lucide-react";

const TABS = [
  { key: "home", label: "Home", icon: Home },
  { key: "new", label: "Send", icon: PackagePlus },
  { key: "track", label: "Track", icon: MapPinned },
  { key: "profile", label: "Profile", icon: User },
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-sky-mid px-2 pt-2 pb-[max(10px,env(safe-area-inset-bottom))] rounded-b-[2.2rem]">
      <div className="grid grid-cols-4">
        {TABS.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className="flex flex-col items-center gap-1 py-1.5 group"
            >
              <Icon
                size={20}
                strokeWidth={2.2}
                className={isActive ? "text-route" : "text-slate group-hover:text-navy-light"}
              />
              <span
                className={`text-[10.5px] font-medium ${
                  isActive ? "text-route" : "text-slate"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
