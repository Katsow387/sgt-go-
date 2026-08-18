// src/screens/supplier/SupplierDashboard.jsx
import { useState, useEffect } from 'react';
import { 
  Package, 
  TrendingUp, 
  Users, 
  ShoppingCart,
  ChevronLeft,
  Plus,
  X,
  Eye,
  Check,
  XCircle,
  AlertCircle,
  Download,
  Filter,
  Search,
  Clock,
  DollarSign,
  BarChart3,
  Truck,
  Calendar,
  Star,
  Settings,
  LogOut,
  Menu,
  Bell,
  User,
  Home,
  ClipboardList,
  Wallet,
  Gift,
  FileText,
  Settings2,
  ChevronDown,
  Edit,
  Trash2,
  Save
} from 'lucide-react';

// Sub-components
import OrdersManagement from './OrdersManagement';
import InventoryManagement from './InventoryManagement';
import PricingManager from './PricingManager';
import PromotionsManager from './PromotionsManager';
import PaymentTracking from './PaymentTracking';
import DeliveryTracking from './DeliveryTracking';
import ReportsGenerator from './ReportsGenerator';

export default function SupplierDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState([]);
  
  // Mock supplier data
  const supplierData = {
    name: 'Tiger Brands',
    email: 'supplier@tigerbrands.co.za',
    rating: 4.8,
    totalOrders: 245,
    revenue: 'R 345,890',
    pendingOrders: 12,
    activeProducts: 184,
    deliveryRate: 98.5,
    joinedDate: 'Jan 2024'
  };

  // Mock notifications
  useEffect(() => {
    setNotifications([
      { id: 1, message: 'New order #ORD-4821 from Builders Warehouse', time: '5 min ago', read: false },
      { id: 2, message: 'Payment of R 12,450.00 processed', time: '1 hour ago', read: false },
      { id: 3, message: 'Inventory alert: Tastic Rice below threshold', time: '3 hours ago', read: true },
    ]);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'orders', label: 'Orders', icon: ClipboardList },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'promotions', label: 'Promotions', icon: Gift },
    { id: 'payments', label: 'Payments', icon: Wallet },
    { id: 'deliveries', label: 'Deliveries', icon: Truck },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-[#DCE6F5] flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-navy-deep text-white transition-all duration-300 flex flex-col fixed h-full z-30`}>
        {/* Logo */}
        <div className="p-4 border-b border-navy-light">
          <div className="font-display font-extrabold text-xl tracking-tight flex items-center gap-2">
            <span className="text-white">SGT</span>
            <span className="text-signal">GO</span>
            <span className="text-[10px] text-sky ml-2 font-mono">Supplier</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                activeTab === tab.id 
                  ? 'bg-navy-light text-white border-r-4 border-signal' 
                  : 'text-slate hover:bg-navy-light/50'
              }`}
            >
              <tab.icon size={20} />
              {sidebarOpen && <span className="text-sm font-medium">{tab.label}</span>}
            </button>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="border-t border-navy-light p-4">
          <button className="w-full flex items-center gap-3 text-slate hover:text-white transition-colors">
            <Settings2 size={20} />
            {sidebarOpen && <span className="text-sm">Settings</span>}
          </button>
          <button className="w-full flex items-center gap-3 text-slate hover:text-white transition-colors mt-2">
            <LogOut size={20} />
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className={`${sidebarOpen ? 'ml-64' : 'ml-20'} flex-1 transition-all duration-300`}>
        {/* Top bar */}
        <div className="bg-white/95 backdrop-blur border-b border-sky-mid px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-navy hover:text-route transition-colors"
            >
              <Menu size={22} />
            </button>
            <div>
              <h1 className="font-display font-bold text-xl text-navy">
                {tabs.find(t => t.id === activeTab)?.label || 'Dashboard'}
              </h1>
              <p className="text-sm text-slate">{supplierData.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center bg-sky rounded-full px-4 py-2">
              <Search size={18} className="text-slate" />
              <input 
                type="text" 
                placeholder="Search orders, products..." 
                className="bg-transparent outline-none text-sm text-ink ml-2 w-48"
              />
            </div>

            {/* Notifications */}
            <div className="relative">
              <button className="p-2 rounded-full bg-sky text-navy hover:bg-sky-mid transition-colors">
                <Bell size={20} />
              </button>
              {notifications.filter(n => !n.read).length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-signal text-white text-[10px] rounded-full flex items-center justify-center">
                  {notifications.filter(n => !n.read).length}
                </span>
              )}
            </div>

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold text-sm">
                TB
              </div>
              {sidebarOpen && (
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-ink">{supplierData.name}</p>
                  <p className="text-xs text-slate">{supplierData.email}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6">
          {activeTab === 'overview' && <Overview supplierData={supplierData} notifications={notifications} />}
          {activeTab === 'orders' && <OrdersManagement />}
          {activeTab === 'inventory' && <InventoryManagement />}
          {activeTab === 'pricing' && <PricingManager />}
          {activeTab === 'promotions' && <PromotionsManager />}
          {activeTab === 'payments' && <PaymentTracking />}
          {activeTab === 'deliveries' && <DeliveryTracking />}
          {activeTab === 'reports' && <ReportsGenerator />}
        </div>
      </div>
    </div>
  );
}

// Overview Component
function Overview({ supplierData, notifications }) {
  const stats = [
    { label: 'Total Revenue', value: supplierData.revenue, icon: TrendingUp, color: 'text-route' },
    { label: 'Total Orders', value: supplierData.totalOrders, icon: ShoppingCart, color: 'text-navy' },
    { label: 'Pending Orders', value: supplierData.pendingOrders, icon: Clock, color: 'text-signal' },
    { label: 'Active Products', value: supplierData.activeProducts, icon: Package, color: 'text-green-500' },
    { label: 'Delivery Rate', value: `${supplierData.deliveryRate}%`, icon: Truck, color: 'text-purple-500' },
    { label: 'Rating', value: `${supplierData.rating} ⭐`, icon: Star, color: 'text-yellow-500' },
  ];

  const recentOrders = [
    { id: 'ORD-4821', customer: 'Builders Warehouse', items: 12, total: 'R 3,450.00', status: 'pending', date: '2 hours ago' },
    { id: 'ORD-4820', customer: 'Makro', items: 8, total: 'R 2,180.00', status: 'processing', date: '5 hours ago' },
    { id: 'ORD-4819', customer: 'Game', items: 24, total: 'R 5,620.00', status: 'shipped', date: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl2 shadow-card p-4">
            <stat.icon size={20} className={stat.color} />
            <p className="font-display font-bold text-xl text-ink mt-1">{stat.value}</p>
            <p className="text-[11px] text-slate">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl2 shadow-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-sm text-ink">Recent Orders</h3>
            <button className="text-route text-sm font-medium hover:underline">View all</button>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between py-2 border-b border-sky-mid last:border-0">
                <div>
                  <p className="text-[13px] font-medium text-ink">{order.id}</p>
                  <p className="text-[11px] text-slate">{order.customer} · {order.items} items</p>
                </div>
                <div className="text-right">
                  <p className="text-[13px] font-mono font-semibold text-route">{order.total}</p>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    order.status === 'pending' ? 'bg-signal/20 text-signal' :
                    order.status === 'processing' ? 'bg-route/20 text-route' :
                    'bg-green-500/20 text-green-500'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications & Alerts */}
        <div className="bg-white rounded-xl2 shadow-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-sm text-ink">Notifications</h3>
            <button className="text-route text-sm font-medium hover:underline">Mark all read</button>
          </div>
          <div className="space-y-3">
            {notifications.slice(0, 5).map((notif) => (
              <div key={notif.id} className={`flex items-start gap-3 p-2 rounded-xl ${!notif.read ? 'bg-sky' : ''}`}>
                <div className={`w-2 h-2 rounded-full mt-1.5 ${!notif.read ? 'bg-route' : 'bg-slate/30'}`} />
                <div className="flex-1">
                  <p className="text-[13px] text-ink">{notif.message}</p>
                  <p className="text-[10px] text-slate mt-0.5">{notif.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}