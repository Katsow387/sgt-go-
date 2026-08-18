// src/screens/supplier/PricingManager.jsx
import { useState } from 'react';
import { Edit, Save, X, TrendingUp, TrendingDown, Clock, DollarSign } from 'lucide-react';

export default function PricingManager() {
  const [editingId, setEditingId] = useState(null);
  const [prices, setPrices] = useState([
    { id: 1, product: 'Tastic Rice 10kg', currentPrice: 145.00, suggestedPrice: 150.00, margin: 35, lastUpdated: '2026-08-15' },
    { id: 2, product: 'Tiger Brands Oats 1kg', currentPrice: 45.00, suggestedPrice: 47.00, margin: 28, lastUpdated: '2026-08-14' },
    { id: 3, product: 'Coca-Cola 2L', currentPrice: 18.50, suggestedPrice: 19.50, margin: 22, lastUpdated: '2026-08-13' },
  ]);

  const [editForm, setEditForm] = useState({});

  const startEditing = (id) => {
    const product = prices.find(p => p.id === id);
    setEditForm({...product});
    setEditingId(id);
  };

  const savePrice = () => {
    setPrices(prices.map(p => p.id === editingId ? editForm : p));
    setEditingId(null);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-bold text-xl text-navy">Pricing Management</h2>
          <p className="text-sm text-slate">Manage your product pricing and margins</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-route text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-route/90 transition-colors">
            Bulk Update
          </button>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl2 shadow-card p-4">
          <DollarSign size={20} className="text-route" />
          <p className="font-display font-bold text-2xl text-ink mt-1">R 208.50</p>
          <p className="text-[11px] text-slate">Average Price</p>
        </div>
        <div className="bg-white rounded-xl2 shadow-card p-4">
          <TrendingUp size={20} className="text-green-500" />
          <p className="font-display font-bold text-2xl text-ink mt-1">28.3%</p>
          <p className="text-[11px] text-slate">Average Margin</p>
        </div>
        <div className="bg-white rounded-xl2 shadow-card p-4">
          <Clock size={20} className="text-signal" />
          <p className="font-display font-bold text-2xl text-ink mt-1">2</p>
          <p className="text-[11px] text-slate">Price Changes This Week</p>
        </div>
        <div className="bg-white rounded-xl2 shadow-card p-4">
          <TrendingDown size={20} className="text-red-400" />
          <p className="font-display font-bold text-2xl text-ink mt-1">+2.3%</p>
          <p className="text-[11px] text-slate">Price Trend (30d)</p>
        </div>
      </div>

      {/* Price Table */}
      <div className="bg-white rounded-xl2 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-sky/50">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Product</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Current Price</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Suggested Price</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Margin</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Last Updated</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Actions</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((product) => (
                <tr key={product.id} className="border-b border-sky-mid hover:bg-sky/20 transition-colors">
                  <td className="px-4 py-3 font-display font-semibold text-[13px] text-navy">{product.product}</td>
                  <td className="px-4 py-3">
                    {editingId === product.id ? (
                      <input
                        type="number"
                        value={editForm.currentPrice || ''}
                        onChange={(e) => setEditForm({...editForm, currentPrice: parseFloat(e.target.value)})}
                        className="w-24 border-b border-route py-1 outline-none text-sm font-mono font-semibold"
                      />
                    ) : (
                      <span className="font-mono font-semibold text-[13px] text-route">R{product.currentPrice.toFixed(2)}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {editingId === product.id ? (
                      <input
                        type="number"
                        value={editForm.suggestedPrice || ''}
                        onChange={(e) => setEditForm({...editForm, suggestedPrice: parseFloat(e.target.value)})}
                        className="w-24 border-b border-sky-mid py-1 outline-none text-sm"
                      />
                    ) : (
                      <span className="text-[13px] text-slate">R{product.suggestedPrice.toFixed(2)}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-green-50 text-green-500">
                      {product.margin}%
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[12px] text-slate">{product.lastUpdated}</td>
                  <td className="px-4 py-3">
                    {editingId === product.id ? (
                      <div className="flex items-center gap-2">
                        <button onClick={savePrice} className="p-1.5 rounded-full hover:bg-green-50 transition-colors">
                          <Save size={16} className="text-green-500" />
                        </button>
                        <button onClick={cancelEditing} className="p-1.5 rounded-full hover:bg-red-50 transition-colors">
                          <X size={16} className="text-red-400" />
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => startEditing(product.id)} className="p-1.5 rounded-full hover:bg-sky transition-colors">
                        <Edit size={16} className="text-route" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}