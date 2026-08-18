// src/screens/supplier/InventoryManagement.jsx
import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  AlertCircle,
  Package,
  TrendingUp,
  TrendingDown,
  Filter
} from 'lucide-react';

export default function InventoryManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const inventory = [
    { id: 1, name: 'Tastic Rice 10kg', category: 'Grains', price: 145.00, stock: 450, minStock: 100, sold: 1250, revenue: 181250 },
    { id: 2, name: 'Tiger Brands Oats 1kg', category: 'Breakfast', price: 45.00, stock: 320, minStock: 80, sold: 890, revenue: 40050 },
    { id: 3, name: 'Coca-Cola 2L', category: 'Beverages', price: 18.50, stock: 150, minStock: 200, sold: 2400, revenue: 44400 },
    { id: 4, name: 'Tastic Rice 5kg', category: 'Grains', price: 75.00, stock: 280, minStock: 60, sold: 720, revenue: 54000 },
    { id: 5, name: 'Coca-Cola 1.5L', category: 'Beverages', price: 14.50, stock: 90, minStock: 150, sold: 1800, revenue: 26100 },
  ];

  const categories = ['all', 'Grains', 'Breakfast', 'Beverages'];

  const getStockStatus = (stock, minStock) => {
    if (stock < minStock) return { label: 'Low Stock', color: 'text-red-400 bg-red-50' };
    if (stock < minStock * 1.5) return { label: 'Moderate', color: 'text-signal bg-signal/20' };
    return { label: 'In Stock', color: 'text-green-500 bg-green-50' };
  };

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-bold text-xl text-navy">Inventory Management</h2>
          <p className="text-sm text-slate">Track and manage your product inventory</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-route text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-route/90 transition-colors"
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl2 shadow-card p-4">
          <Package size={20} className="text-route" />
          <p className="font-display font-bold text-2xl text-ink mt-1">{inventory.length}</p>
          <p className="text-[11px] text-slate">Total Products</p>
        </div>
        <div className="bg-white rounded-xl2 shadow-card p-4">
          <TrendingUp size={20} className="text-green-500" />
          <p className="font-display font-bold text-2xl text-ink mt-1">R 345,800</p>
          <p className="text-[11px] text-slate">Total Inventory Value</p>
        </div>
        <div className="bg-white rounded-xl2 shadow-card p-4">
          <AlertCircle size={20} className="text-signal" />
          <p className="font-display font-bold text-2xl text-ink mt-1">3</p>
          <p className="text-[11px] text-slate">Low Stock Items</p>
        </div>
        <div className="bg-white rounded-xl2 shadow-card p-4">
          <TrendingUp size={20} className="text-route" />
          <p className="font-display font-bold text-2xl text-ink mt-1">1,847</p>
          <p className="text-[11px] text-slate">Units Sold This Month</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl2 shadow-card p-4 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[200px] flex items-center bg-sky rounded-full px-4 py-2">
          <Search size={18} className="text-slate" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-sm text-ink ml-2 w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-slate" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-transparent outline-none text-sm font-medium text-ink border border-sky-mid rounded-full px-4 py-1.5"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl2 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-sky/50">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Product</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Category</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Price</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Stock</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Status</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Sold</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Revenue</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item) => {
                const status = getStockStatus(item.stock, item.minStock);
                return (
                  <tr key={item.id} className="border-b border-sky-mid hover:bg-sky/20 transition-colors">
                    <td className="px-4 py-3 font-display font-semibold text-[13px] text-navy">{item.name}</td>
                    <td className="px-4 py-3 text-[12px] text-slate">{item.category}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-[13px] text-route">R{item.price.toFixed(2)}</td>
                    <td className="px-4 py-3 text-[13px] text-ink">{item.stock}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full ${status.color}`}>
                        {status.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-ink">{item.sold}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-[13px] text-route">R{item.revenue.toFixed(2)}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 rounded-full hover:bg-sky transition-colors">
                          <Edit size={16} className="text-route" />
                        </button>
                        <button className="p-1.5 rounded-full hover:bg-red-50 transition-colors">
                          <Trash2 size={16} className="text-red-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddModal && <AddProductModal onClose={() => setShowAddModal(false)} />}
    </div>
  );
}

// Add Product Modal
function AddProductModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Grains',
    price: '',
    stock: '',
    minStock: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle product creation
    console.log('Product data:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl2 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="border-b border-sky-mid p-4 flex items-center justify-between">
          <h3 className="font-display font-bold text-lg text-navy">Add New Product</h3>
          <button onClick={onClose} className="p-2 hover:bg-sky rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase text-slate mb-1">Product Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border-b border-sky-mid py-2 outline-none focus:border-route text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate mb-1">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full border-b border-sky-mid py-2 outline-none focus:border-route text-sm bg-transparent"
            >
              <option>Grains</option>
              <option>Breakfast</option>
              <option>Beverages</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate mb-1">Price (R)</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="w-full border-b border-sky-mid py-2 outline-none focus:border-route text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate mb-1">Stock Quantity</label>
            <input
              type="number"
              value={formData.stock}
              onChange={(e) => setFormData({...formData, stock: e.target.value})}
              className="w-full border-b border-sky-mid py-2 outline-none focus:border-route text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate mb-1">Minimum Stock Alert</label>
            <input
              type="number"
              value={formData.minStock}
              onChange={(e) => setFormData({...formData, minStock: e.target.value})}
              className="w-full border-b border-sky-mid py-2 outline-none focus:border-route text-sm"
              required
            />
          </div>

          <button type="submit" className="w-full bg-route text-white rounded-full py-2.5 font-medium hover:bg-route/90 transition-colors">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}