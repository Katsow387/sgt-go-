export default function PageHeader({ eyebrow, title, action }) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6">
      <div>
        {eyebrow && (
          <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-route mb-1">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display font-800 text-2xl md:text-3xl text-navy tracking-tight">
          {title}
        </h1>
      </div>
      {action}
    </div>
  );
}
