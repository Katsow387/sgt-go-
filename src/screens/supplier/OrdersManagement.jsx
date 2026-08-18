// src/screens/supplier/OrdersManagement.jsx
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  Check, 
  XCircle, 
  Clock,
  ChevronDown,
  Download,
  Printer
} from 'lucide-react';

export default function OrdersManagement() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    { 
      id: 'ORD-4821', 
      customer: 'Builders Warehouse', 
      items: [
        { name: 'Tastic Rice 10kg', quantity: 50, price: 145.00 },
        { name: 'Coca-Cola 2L', quantity: 100, price: 18.50 },
      ],
      total: 3450.00,
      status: 'pending',
      date: '2026-08-17',
      deliveryDate: '2026-08-19',
      specialInstructions: 'Urgent delivery - construction site'
    },
    { 
      id: 'ORD-4820', 
      customer: 'Makro', 
      items: [
        { name: 'Tiger Brands Oats', quantity: 80, price: 45.00 },
      ],
      total: 2180.00,
      status: 'processing',
      date: '2026-08-17',
      deliveryDate: '2026-08-18'
    },
    { 
      id: 'ORD-4819', 
      customer: 'Game', 
      items: [
        { name: 'Tastic Rice 10kg', quantity: 120, price: 145.00 },
        { name: 'Coca-Cola 2L', quantity: 200, price: 18.50 },
        { name: 'Tiger Brands Oats', quantity: 150, price: 45.00 },
      ],
      total: 5620.00,
      status: 'shipped',
      date: '2026-08-16',
      deliveryDate: '2026-08-17'
    },
    { 
      id: 'ORD-4818', 
      customer: 'Walmart', 
      items: [
        { name: 'Tastic Rice 10kg', quantity: 30, price: 145.00 },
      ],
      total: 4350.00,
      status: 'completed',
      date: '2026-08-15',
      deliveryDate: '2026-08-16'
    },
    { 
      id: 'ORD-4817', 
      customer: 'Builders Warehouse', 
      items: [
        { name: 'Coca-Cola 2L', quantity: 50, price: 18.50 },
      ],
      total: 925.00,
      status: 'cancelled',
      date: '2026-08-15',
      deliveryDate: '2026-08-16'
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-signal/20 text-signal',
      processing: 'bg-route/20 text-route',
      shipped: 'bg-blue-500/20 text-blue-500',
      completed: 'bg-green-500/20 text-green-500',
      cancelled: 'bg-red-500/20 text-red-500'
    };
    return colors[status] || 'bg-slate/20 text-slate';
  };

  const getStatusIcon = (status) => {
    const icons = {
      pending: <Clock size={14} />,
      processing: <Clock size={14} />,
      shipped: <Check size={14} />,
      completed: <Check size={14} />,
      cancelled: <XCircle size={14} />
    };
    return icons[status] || null;
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || order.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-bold text-xl text-navy">Orders Management</h2>
          <p className="text-sm text-slate">Manage incoming orders and track fulfillment</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-route text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-route/90 transition-colors">
            <Download size={16} />
            Export Orders
          </button>
          <button className="border border-sky-mid text-ink px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-sky transition-colors">
            <Printer size={16} />
            Print
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl2 shadow-card p-4 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[200px] flex items-center bg-sky rounded-full px-4 py-2">
          <Search size={18} className="text-slate" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-sm text-ink ml-2 w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-slate" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-transparent outline-none text-sm font-medium text-ink border border-sky-mid rounded-full px-4 py-1.5"
          >
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl2 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-sky/50">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Order ID</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Customer</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Items</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Total</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Status</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Date</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-sky-mid hover:bg-sky/20 transition-colors">
                  <td className="px-4 py-3 font-display font-semibold text-[13px] text-navy">{order.id}</td>
                  <td className="px-4 py-3 text-[13px] text-ink">{order.customer}</td>
                  <td className="px-4 py-3 text-[13px] text-slate">{order.items.reduce((sum, i) => sum + i.quantity, 0)} items</td>
                  <td className="px-4 py-3 font-mono font-semibold text-[13px] text-route">R{order.total.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[12px] text-slate">{order.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedOrder(order)}
                        className="p-1.5 rounded-full hover:bg-sky transition-colors"
                      >
                        <Eye size={16} className="text-route" />
                      </button>
                      {order.status === 'pending' && (
                        <>
                          <button className="p-1.5 rounded-full hover:bg-green-50 transition-colors">
                            <Check size={16} className="text-green-500" />
                          </button>
                          <button className="p-1.5 rounded-full hover:bg-red-50 transition-colors">
                            <XCircle size={16} className="text-red-400" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 py-3 border-t border-sky-mid flex items-center justify-between">
          <p className="text-sm text-slate">Showing {filteredOrders.length} of {orders.length} orders</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-sky-mid rounded-full text-sm text-slate hover:bg-sky transition-colors">Previous</button>
            <button className="px-3 py-1 bg-route text-white rounded-full text-sm">1</button>
            <button className="px-3 py-1 border border-sky-mid rounded-full text-sm text-slate hover:bg-sky transition-colors">2</button>
            <button className="px-3 py-1 border border-sky-mid rounded-full text-sm text-slate hover:bg-sky transition-colors">3</button>
            <button className="px-3 py-1 border border-sky-mid rounded-full text-sm text-slate hover:bg-sky transition-colors">Next</button>
          </div>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <OrderDetailModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
      )}
    </div>
  );
}

// Order Detail Modal
function OrderDetailModal({ order, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl2 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-sky-mid p-4 flex items-center justify-between">
          <div>
            <h3 className="font-display font-bold text-lg text-navy">Order {order.id}</h3>
            <p className="text-sm text-slate">{order.customer}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-sky rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* Status */}
          <div className="bg-sky rounded-xl p-4 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(order.status)}`}>
              {getStatusIcon(order.status)}
            </div>
            <div>
              <p className="font-display font-semibold text-ink">Status: {order.status.charAt(0).toUpperCase() + order.status.slice(1)}</p>
              <p className="text-sm text-slate">Order placed on {order.date}</p>
            </div>
          </div>

          {/* Items */}
          <div>
            <h4 className="font-display font-bold text-sm text-ink mb-3">Order Items</h4>
            <div className="space-y-2">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-sky-mid">
                  <div>
                    <p className="text-[13px] font-medium text-ink">{item.name}</p>
                    <p className="text-[11px] text-slate">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-mono font-semibold text-[13px] text-route">R{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-sky-mid">
              <p className="font-display font-bold text-ink">Total</p>
              <p className="font-display font-bold text-xl text-route">R{order.total.toFixed(2)}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {order.status === 'pending' && (
              <>
                <button className="flex-1 bg-route text-white rounded-full py-2.5 font-medium hover:bg-route/90 transition-colors">
                  Accept Order
                </button>
                <button className="flex-1 border border-red-400 text-red-400 rounded-full py-2.5 font-medium hover:bg-red-50 transition-colors">
                  Reject Order
                </button>
              </>
            )}
            {order.status === 'processing' && (
              <button className="w-full bg-route text-white rounded-full py-2.5 font-medium hover:bg-route/90 transition-colors">
                Mark as Shipped
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}