export default function Logo({ light = false, size = "text-xl" }) {
  return (
    <div className={`font-display font-extrabold ${size} tracking-tight flex items-baseline gap-[2px]`}>
      <span className={light ? "text-white" : "text-navy"}>SGT</span>
      <span className="text-signal">GO</span>
    </div>
  );
}
