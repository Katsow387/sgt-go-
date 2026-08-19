export default function BottomNav({ items, active, onChange }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur border-t border-sky-mid px-2 pt-2 pb-[calc(env(safe-area-inset-bottom)+8px)]">
      <div className="flex items-stretch justify-between max-w-md mx-auto">
        {items.map((item) => {
          const isActive = active === item.key;
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              onClick={() => onChange(item.key)}
              className="flex-1 flex flex-col items-center gap-1 py-1.5 rounded-xl"
            >
              <Icon
                className={`w-5 h-5 ${isActive ? "text-route" : "text-slate"}`}
                strokeWidth={isActive ? 2.4 : 2}
              />
              <span
                className={`text-[10.5px] font-medium ${
                  isActive ? "text-route" : "text-slate"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
