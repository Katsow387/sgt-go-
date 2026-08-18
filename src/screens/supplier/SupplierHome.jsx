import { useState } from "react";
import { ClipboardList, Wallet, CheckCircle2, Check, X } from "lucide-react";
import { SUPPLIER, SUPPLIER_STATS, INCOMING_ORDERS } from "../../data";

export default function SupplierHome() {
  const [orders, setOrders] = useState(INCOMING_ORDERS);

  const decide = (id, decision) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: decision } : o))
    );
  };

  const pending = orders.filter((o) => o.status === "pending");

  return (
    <div className="px-5 pt-6 pb-28 h-full overflow-y-auto">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-slate font-mono">
            Supplier dashboard
          </p>
          <h1 className="font-display font-bold text-2xl text-navy leading-tight">
            {SUPPLIER.business}
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold text-sm">
          {SUPPLIER.contact.charAt(0)}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-xl shadow-card p-3">
          <ClipboardList size={16} className="text-signal" />
          <p className="font-display font-bold text-[15px] text-ink mt-1">{pending.length}</p>
          <p className="text-[9.5px] text-slate">Pending orders</p>
        </div>
        <div className="bg-white rounded-xl shadow-card p-3">
          <Wallet size={16} className="text-route" />
          <p className="font-display font-bold text-[15px] text-ink mt-1">{SUPPLIER_STATS.monthRevenue}</p>
          <p className="text-[9.5px] text-slate">Revenue (mo.)</p>
        </div>
        <div className="bg-white rounded-xl shadow-card p-3">
          <CheckCircle2 size={16} className="text-green-500" />
          <p className="font-display font-bold text-[15px] text-ink mt-1">{SUPPLIER_STATS.fulfilmentRate}</p>
          <p className="text-[9.5px] text-slate">Fulfilment rate</p>
        </div>
      </div>

      <h3 className="font-display font-bold text-sm text-ink mb-2.5">Incoming orders</h3>
      <div className="space-y-3">
        {orders.map((o) => (
          <div key={o.id} className="bg-white rounded-xl2 shadow-card p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky flex items-center justify-center text-route shrink-0">
                <ClipboardList size={17} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-[13px] text-ink">
                  {o.merchant} · <span className="font-mono text-[11.5px] text-slate">{o.id}</span>
                </p>
                <p className="text-[11.5px] text-slate">{o.items} items · {o.total}</p>
              </div>
              {o.status !== "pending" && (
                <span
                  className={`text-[10.5px] font-medium capitalize ${
                    o.status === "accepted" ? "text-route" : "text-red-400"
                  }`}
                >
                  {o.status}
                </span>
              )}
            </div>
            {o.status === "pending" && (
              <div className="flex gap-2 mt-3 pt-3 border-t border-sky-mid">
                <button
                  onClick={() => decide(o.id, "accepted")}
                  className="flex-1 flex items-center justify-center gap-1.5 text-[11.5px] font-medium text-white bg-navy rounded-full py-2"
                >
                  <Check size={13} /> Accept
                </button>
                <button
                  onClick={() => decide(o.id, "rejected")}
                  className="flex-1 flex items-center justify-center gap-1.5 text-[11.5px] font-medium text-red-400 bg-red-50 rounded-full py-2"
                >
                  <X size={13} /> Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
