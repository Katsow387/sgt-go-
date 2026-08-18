// src/screens/supplier/PromotionsManager.jsx
import { useState } from 'react';
import { Plus, Edit, Trash2, Calendar, Percent, Gift, Clock, X } from 'lucide-react';

export default function PromotionsManager() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      name: 'Back to School Special',
      type: 'Discount',
      discount: 15,
      product: 'Tiger Brands Oats',
      startDate: '2026-08-15',
      endDate: '2026-08-31',
      status: 'active',
      usage: 145
    },
    {
      id: 2,
      name: 'Bulk Purchase Discount',
      type: 'Bulk Discount',
      discount: 10,
      product: 'Tastic Rice 10kg',
      startDate: '2026-08-01',
      endDate: '2026-09-30',
      status: 'active',
      usage: 320
    },
    {
      id: 3,
      name: 'New Customer Offer',
      type: 'First Order',
      discount: 20,
      product: 'All Products',
      startDate: '2026-08-10',
      endDate: '2026-08-25',
      status: 'expired',
      usage: 78
    },
  ]);

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-500/20 text-green-500',
      expired: 'bg-red-500/20 text-red-500',
      scheduled: 'bg-signal/20 text-signal'
    };
    return colors[status] || 'bg-slate/20 text-slate';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-bold text-xl text-navy">Promotions Management</h2>
          <p className="text-sm text-slate">Create and manage product promotions and discounts</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-route text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-route/90 transition-colors"
        >
          <Plus size={16} />
          Create Promotion
        </button>
      </div>

      {/* Promotion Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {promotions.map((promo) => (
          <div key={promo.id} className="bg-white rounded-xl2 shadow-card p-5 hover:shadow-float transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <Gift size={18} className="text-signal" />
                  <h3 className="font-display font-bold text-[15px] text-navy">{promo.name}</h3>
                </div>
                <p className="text-sm text-slate mt-1">{promo.product}</p>
              </div>
              <span className={`text-[10px] px-2.5 py-1 rounded-full ${getStatusColor(promo.status)}`}>
                {promo.status.charAt(0).toUpperCase() + promo.status.slice(1)}
              </span>
            </div>

            <div className="space-y-2 mt-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate">Type</span>
                <span className="font-medium text-ink">{promo.type}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate">Discount</span>
                <span className="font-display font-bold text-route">{promo.discount}%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate">Period</span>
                <span className="text-xs text-ink">
                  {promo.startDate} - {promo.endDate}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate">Usage</span>
                <span className="font-mono text-[13px] text-navy">{promo.usage} uses</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-sky-mid">
              <button className="flex-1 bg-route text-white rounded-full py-1.5 text-sm font-medium hover:bg-route/90 transition-colors">
                Edit
              </button>
              <button className="p-2 rounded-full hover:bg-red-50 transition-colors">
                <Trash2 size={16} className="text-red-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Promotion Modal */}
      {showAddModal && <AddPromotionModal onClose={() => setShowAddModal(false)} />}
    </div>
  );
}

function AddPromotionModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Discount',
    discount: '',
    product: '',
    startDate: '',
    endDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Promotion data:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl2 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="border-b border-sky-mid p-4 flex items-center justify-between">
          <h3 className="font-display font-bold text-lg text-navy">Create Promotion</h3>
          <button onClick={onClose} className="p-2 hover:bg-sky rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase text-slate mb-1">Promotion Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border-b border-sky-mid py-2 outline-none focus:border-route text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate mb-1">Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full border-b border-sky-mid py-2 outline-none focus:border-route text-sm bg-transparent"
            >
              <option>Discount</option>
              <option>Bulk Discount</option>
              <option>First Order</option>
              <option>Free Shipping</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate mb-1">Discount Percentage</label>
            <input
              type="number"
              value={formData.discount}
              onChange={(e) => setFormData({...formData, discount: e.target.value})}
              className="w-full border-b border-sky-mid py-2 outline-none focus:border-route text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate mb-1">Product</label>
            <input
              type="text"
              value={formData.product}
              onChange={(e) => setFormData({...formData, product: e.target.value})}
              className="w-full border-b border-sky-mid py-2 outline-none focus:border-route text-sm"
              placeholder="Select or enter product"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate mb-1">Start Date</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                className="w-full border-b border-sky-mid py-2 outline-none focus:border-route text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-slate mb-1">End Date</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                className="w-full border-b border-sky-mid py-2 outline-none focus:border-route text-sm"
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-route text-white rounded-full py-2.5 font-medium hover:bg-route/90 transition-colors">
            Create Promotion
          </button>
        </form>
      </div>
    </div>
  );
}