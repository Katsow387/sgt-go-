// src/screens/supplier/PaymentTracking.jsx
import { useState } from 'react';
import { 
  Wallet, 
  Download, 
  Filter, 
  Search,
  CheckCircle,
  Clock,
  XCircle,
  DollarSign,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export default function PaymentTracking() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const payments = [
    { id: 'PAY-4821', orderId: 'ORD-4821', amount: 3450.00, status: 'completed', date: '2026-08-17', method: 'Bank Transfer' },
    { id: 'PAY-4820', orderId: 'ORD-4820', amount: 2180.00, status: 'pending', date: '2026-08-17', method: 'Credit Card' },
    { id: 'PAY-4819', orderId: 'ORD-4819', amount: 5620.00, status: 'completed', date: '2026-08-16', method: 'Bank Transfer' },
    { id: 'PAY-4818', orderId: 'ORD-4818', amount: 4350.00, status: 'completed', date: '2026-08-15', method: 'Mobile Payment' },
    { id: 'PAY-4817', orderId: 'ORD-4817', amount: 925.00, status: 'failed', date: '2026-08-15', method: 'Credit Card' },
  ];

  const stats = [
    { label: 'Total Revenue', value: 'R 16,525.00', icon: DollarSign, color: 'text-route' },
    { label: 'Completed', value: 'R 13,420.00', icon: CheckCircle, color: 'text-green-500' },
    { label: 'Pending', value: 'R 2,180.00', icon: Clock, color: 'text-signal' },
    { label: 'Failed', value: 'R 925.00', icon: XCircle, color: 'text-red-400' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      completed: 'bg-green-500/20 text-green-500',
      pending: 'bg-signal/20 text-signal',
      failed: 'bg-red-500/20 text-red-500'
    };
    return colors[status] || 'bg-slate/20 text-slate';
  };

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          payment.orderId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || payment.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-bold text-xl text-navy">Payment Tracking</h2>
          <p className="text-sm text-slate">Track and manage your payment transactions</p>
        </div>
        <button className="bg-route text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-route/90 transition-colors">
          <Download size={16} />
          Export Payments
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl2 shadow-card p-4">
            <stat.icon size={20} className={stat.color} />
            <p className="font-display font-bold text-xl text-ink mt-1">{stat.value}</p>
            <p className="text-[11px] text-slate">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl2 shadow-card p-4 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[200px] flex items-center bg-sky rounded-full px-4 py-2">
          <Search size={18} className="text-slate" />
          <input
            type="text"
            placeholder="Search payments..."
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
            <option value="all">All Payments</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-xl2 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-sky/50">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Payment ID</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Order ID</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Amount</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Method</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Status</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Date</th>
                <th className="text-left px-4 py-3 text-xs font-mono uppercase text-slate">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-b border-sky-mid hover:bg-sky/20 transition-colors">
                  <td className="px-4 py-3 font-display font-semibold text-[13px] text-navy">{payment.id}</td>
                  <td className="px-4 py-3 text-[13px] text-slate">{payment.orderId}</td>
                  <td className="px-4 py-3 font-mono font-semibold text-[13px] text-route">R{payment.amount.toFixed(2)}</td>
                  <td className="px-4 py-3 text-[12px] text-slate">{payment.method}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full ${getStatusColor(payment.status)}`}>
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[12px] text-slate">{payment.date}</td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 rounded-full hover:bg-sky transition-colors">
                      <ArrowUpRight size={16} className="text-route" />
                    </button>
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