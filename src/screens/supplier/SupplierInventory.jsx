import { useState } from "react";
import { Boxes, AlertTriangle, Pencil, Plus } from "lucide-react";
import { INVENTORY } from "../../data";

export default function SupplierInventory() {
  const [items] = useState(INVENTORY);

  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-display font-bold text-lg text-navy">Inventory & pricing</h1>
        <button className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
          <Plus size={16} />
        </button>
      </div>

      <div className="space-y-3">
        {items.map((i) => {
          const low = i.stock < 20;
          return (
            <div key={i.id} className="bg-white rounded-xl2 shadow-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky flex items-center justify-center text-route shrink-0">
                <Boxes size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-[13px] text-ink truncate">{i.name}</p>
                <p className="font-mono text-[12px] text-navy">{i.price}</p>
                <p className={`text-[11px] flex items-center gap-1 mt-0.5 ${low ? "text-red-400" : "text-slate"}`}>
                  {low && <AlertTriangle size={11} />}
                  {i.stock} units in stock{low ? " · Low stock" : ""}
                </p>
              </div>
              <button className="w-8 h-8 rounded-full bg-sky flex items-center justify-center text-route shrink-0">
                <Pencil size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
