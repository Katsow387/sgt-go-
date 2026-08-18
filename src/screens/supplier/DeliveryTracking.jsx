// src/screens/supplier/ReportsGenerator.jsx
import { useState } from 'react';
import { 
  BarChart3, 
  Download, 
  Calendar, 
  Filter,
  TrendingUp,
  TrendingDown,
  Package,
  DollarSign,
  Users,
  FileText,
  Printer
} from 'lucide-react';

export default function ReportsGenerator() {
  const [reportType, setReportType] = useState('sales');
  const [dateRange, setDateRange] = useState('monthly');
  const [startDate, setStartDate] = useState('2026-08-01');
  const [endDate, setEndDate] = useState('2026-08-17');

  const reports = {
    sales: {
      title: 'Sales Report',
      total: 'R 345,890.00',
      growth: '+12.5%',
      data: [
        { period: 'Week 1', revenue: 84500, orders: 42 },
        { period: 'Week 2', revenue: 92200, orders: 51 },
        { period: 'Week 3', revenue: 105300, orders: 58 },
        { period: 'Week 4', revenue: 63890, orders: 35 },
      ]
    },
    inventory: {
      title: 'Inventory Report',
      total: '1,847 units',
      growth: '+8.3%',
      data: [
        { product: 'Tastic Rice 10kg', sold: 450, revenue: 65250 },
        { product: 'Tiger Brands Oats', sold: 320, revenue: 14400 },
        { product: 'Coca-Cola 2L', sold: 890, revenue: 16465 },
        { product: 'Tastic Rice 5kg', sold: 187, revenue: 14025 },
      ]
    },
    payments: {
      title: 'Payment Report',
      total: 'R 234,580.00',
      growth: '+15.2%',
      data: [
        { method: 'Bank Transfer', amount: 145200, count: 32 },
        { method: 'Credit Card', amount: 52380, count: 18 },
        { method: 'Mobile Payment', amount: 37000, count: 15 },
      ]
    }
  };

  const currentReport = reports[reportType] || reports.sales;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-bold text-xl text-navy">Reports & Analytics</h2>
          <p className="text-sm text-slate">Generate and export business reports</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-route text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-route/90 transition-colors">
            <Download size={16} />
            Export PDF
          </button>
          <button className="border border-sky-mid text-ink px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-sky transition-colors">
            <Printer size={16} />
            Print
          </button>
        </div>
      </div>

      {/* Report Controls */}
      <div className="bg-white rounded-xl2 shadow-card p-4 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-slate" />
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="bg-transparent outline-none text-sm font-medium text-ink border border-sky-mid rounded-full px-4 py-1.5"
          >
            <option value="sales">Sales Report</option>
            <option value="inventory">Inventory Report</option>
            <option value="payments">Payment Report</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-slate" />
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="bg-transparent outline-none text-sm font-medium text-ink border border-sky-mid rounded-full px-4 py-1.5"
          >
            <option value="weekly">Last 7 Days</option>
            <option value="monthly">Last 30 Days</option>
            <option value="quarterly">Last 90 Days</option>
            <option value="yearly">Last Year</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-sky-mid rounded-full px-4 py-1.5 text-sm outline-none focus:border-route"
          />
          <span className="text-slate text-sm">to</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-sky-mid rounded-full px-4 py-1.5 text-sm outline-none focus:border-route"
          />
        </div>

        <button className="bg-route text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-route/90 transition-colors">
          Generate
        </button>
      </div>

      {/* Report Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl2 shadow-card p-4">
          <BarChart3 size={20} className="text-route" />
          <p className="font-display font-bold text-2xl text-ink mt-1">{currentReport.total}</p>
          <p className="text-[11px] text-slate">Total {currentReport.title}</p>
        </div>
        <div className="bg-white rounded-xl2 shadow-card p-4">
          <TrendingUp size={20} className="text-green-500" />
          <p className="font-display font-bold text-2xl text-ink mt-1">{currentReport.growth}</p>
          <p className="text-[11px] text-slate">Growth</p>
        </div>
        <div className="bg-white rounded-xl2 shadow-card p-4">
          <Package size={20} className="text-signal" />
          <p className="font-display font-bold text-2xl text-ink mt-1">186</p>
          <p className="text-[11px] text-slate">Total Transactions</p>
        </div>
        <div className="bg-white rounded-xl2 shadow-card p-4">
          <Users size={20} className="text-route" />
          <p className="font-display font-bold text-2xl text-ink mt-1">24</p>
          <p className="text-[11px] text-slate">Active Customers</p>
        </div>
      </div>

      {/* Report Data */}
      <div className="bg-white rounded-xl2 shadow-card p-5">
        <h3 className="font-display font-bold text-sm text-ink mb-4">{currentReport.title} Details</h3>
        
        {reportType === 'sales' && (
          <div className="space-y-3">
            {currentReport.data.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-sky-mid last:border-0">
                <div>
                  <p className="text-[13px] font-medium text-ink">{item.period}</p>
                  <p className="text-[11px] text-slate">{item.orders} orders</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-semibold text-[13px] text-route">R{item.revenue.toFixed(2)}</p>
                  <div className="w-32 h-1.5 bg-sky rounded-full overflow-hidden mt-1">
                    <div 
                      className="h-full bg-route rounded-full"
                      style={{ width: `${(item.revenue / 105300) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {reportType === 'inventory' && (
          <div className="space-y-3">
            {currentReport.data.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-sky-mid last:border-0">
                <div>
                  <p className="text-[13px] font-medium text-ink">{item.product}</p>
                  <p className="text-[11px] text-slate">{item.sold} units sold</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-semibold text-[13px] text-route">R{item.revenue.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {reportType === 'payments' && (
          <div className="space-y-3">
            {currentReport.data.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-sky-mid last:border-0">
                <div>
                  <p className="text-[13px] font-medium text-ink">{item.method}</p>
                  <p className="text-[11px] text-slate">{item.count} transactions</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-semibold text-[13px] text-route">R{item.amount.toFixed(2)}</p>
                  <div className="w-32 h-1.5 bg-sky rounded-full overflow-hidden mt-1">
                    <div 
                      className="h-full bg-route rounded-full"
                      style={{ width: `${(item.amount / 145200) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}