export default function Logo({ size = "text-xl", light = false }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="relative w-8 h-8 rounded-lg bg-navy flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none">
          <path
            d="M4 15 L10 9 L14 13 L20 7"
            stroke="#F5A623"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="7" r="1.8" fill="#F5A623" />
        </svg>
      </div>
      <span
        className={`font-display font-800 tracking-tight ${size} ${
          light ? "text-white" : "text-navy"
        }`}
      >
        SGT <span className="text-signal">GO</span>
      </span>
    </div>
  );
}
