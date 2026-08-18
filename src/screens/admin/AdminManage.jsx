import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { SUPPLIERS_LIST, MERCHANTS_LIST, DRIVER } from "../../data";

const DRIVERS_LIST = [
  { id: "drv1", name: DRIVER.name, region: "Kempton Park", status: "Active" },
  { id: "drv2", name: "Nomvula P.", region: "Tembisa", status: "Active" },
  { id: "drv3", name: "Sizwe D.", region: "Kempton Park", status: "Offline" },
];

const TABS = [
  { key: "suppliers", label: "Suppliers", data: SUPPLIERS_LIST },
  { key: "merchants", label: "Merchants", data: MERCHANTS_LIST },
  { key: "drivers", label: "Drivers", data: DRIVERS_LIST },
];

export default function AdminManage() {
  const [tab, setTab] = useState("suppliers");
  const active = TABS.find((t) => t.key === tab);

  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <h1 className="font-display font-bold text-lg text-navy mb-4">Manage network</h1>

      <div className="grid grid-cols-3 gap-2 mb-5 bg-sky rounded-full p-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`text-[12px] font-display font-semibold py-2 rounded-full transition-colors ${
              tab === t.key ? "bg-white text-navy shadow-card" : "text-slate"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="space-y-2.5">
        {active.data.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 shadow-card"
          >
            <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold text-[12px] shrink-0">
              {item.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="font-display font-semibold text-[13px] text-ink truncate">{item.name}</p>
              <p className="text-[11.5px] text-slate">{item.region}</p>
            </div>
            <span
              className={`text-[10.5px] font-medium ${
                item.status === "Active" ? "text-route" : "text-slate"
              }`}
            >
              {item.status}
            </span>
            <ChevronRight size={15} className="text-slate shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
}
