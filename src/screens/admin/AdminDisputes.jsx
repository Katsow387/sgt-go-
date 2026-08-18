import { AlertTriangle } from "lucide-react";
import { DISPUTES } from "../../data";

const STATUS_STYLE = {
  Open: "bg-red-50 text-red-400",
  Investigating: "bg-signal/15 text-signal",
  Resolved: "bg-sky text-route",
};

export default function AdminDisputes() {
  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <h1 className="font-display font-bold text-lg text-navy mb-5">Disputes</h1>

      <div className="space-y-3">
        {DISPUTES.map((d) => (
          <div key={d.id} className="bg-white rounded-xl2 shadow-card p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-400 shrink-0">
                <AlertTriangle size={17} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-[13px] text-ink">
                  <span className="font-mono text-[11.5px] text-slate">{d.ref}</span>
                </p>
                <p className="text-[12px] text-ink mt-0.5 leading-snug">{d.reason}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-sky-mid">
              <span className={`text-[10.5px] font-medium px-2.5 py-1 rounded-full ${STATUS_STYLE[d.status]}`}>
                {d.status}
              </span>
              <button className="text-[11.5px] font-medium text-route">Review case</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
