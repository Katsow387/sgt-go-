import { useState } from "react";
import { Home as HomeIcon, PackagePlus, MapPinned, User, ClipboardList, Wallet, Boxes, BarChart3, LayoutDashboard, Users, AlertTriangle } from "lucide-react";
import Logo from "./components/Logo";
import BottomNav from "./components/BottomNav";

// Customer screens
import Home from "./screens/customer/Home";
import NewDelivery from "./screens/customer/NewDelivery";
import Track from "./screens/customer/Track";
import Orders from "./screens/customer/Orders";
import Profile from "./screens/customer/Profile";

// Auth & Role
import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp";
import RoleSelect from "./screens/RoleSelect";

// Driver screens
import DriverHome from "./screens/driver/DriverHome";
import DriverDeliveries from "./screens/driver/DriverDeliveries";
import DriverDeliveryDetail from "./screens/driver/DriverDeliveryDetail";

// Merchant screens
import MerchantHome from "./screens/merchant/MerchantHome";
import MerchantOrders from "./screens/merchant/MerchantOrders";
import MerchantPayments from "./screens/merchant/MerchantPayments";

// Supplier screens
import SupplierHome from "./screens/supplier/SupplierHome";
import SupplierInventory from "./screens/supplier/SupplierInventory";
import SupplierReports from "./screens/supplier/SupplierReports";

// Admin screens
import AdminHome from "./screens/admin/AdminHome";
import AdminManage from "./screens/admin/AdminManage";
import AdminDisputes from "./screens/admin/AdminDisputes";

// Shared
import BusinessProfile from "./screens/shared/BusinessProfile";
import { MERCHANT, SUPPLIER } from "./data";

const ROLE_HOME = {
  customer: "customerHome",
  merchant: "merchantHome",
  supplier: "supplierHome",
  driver: "driverHome",
  admin: "adminHome",
};

const CUSTOMER_TABS = [
  { key: "home", label: "Home", icon: HomeIcon },
  { key: "new", label: "Send", icon: PackagePlus },
  { key: "track", label: "Track", icon: MapPinned },
  { key: "profile", label: "Profile", icon: User },
];

const MERCHANT_TABS = [
  { key: "home", label: "Home", icon: HomeIcon },
  { key: "orders", label: "Orders", icon: ClipboardList },
  { key: "payments", label: "Payments", icon: Wallet },
  { key: "profile", label: "Profile", icon: User },
];

const SUPPLIER_TABS = [
  { key: "home", label: "Home", icon: HomeIcon },
  { key: "inventory", label: "Stock", icon: Boxes },
  { key: "reports", label: "Reports", icon: BarChart3 },
  { key: "profile", label: "Profile", icon: User },
];

const ADMIN_TABS = [
  { key: "home", label: "Home", icon: LayoutDashboard },
  { key: "manage", label: "Manage", icon: Users },
  { key: "disputes", label: "Disputes", icon: AlertTriangle },
  { key: "profile", label: "Profile", icon: User },
];

export default function App() {
  const [user, setUser] = useState(null); // { name, email, role }
  const [screen, setScreen] = useState("signIn");
  const [deliveryId, setDeliveryId] = useState(null); // for driver detail

  const handleSignIn = (userData) => {
    setUser(userData);
    setScreen("roleSelect");
  };

  const handleSignUp = (userData) => {
    setUser(userData);
    setScreen("roleSelect");
  };

  const handleRoleSelect = (role) => {
    setUser({ ...user, role });
    setScreen(ROLE_HOME[role] || "customerHome");
  };

  const handleSignOut = () => {
    setUser(null);
    setScreen("signIn");
  };

  const goTo = (target, payload) => {
    if (target === "driverDeliveryDetail") {
      setDeliveryId(payload.id);
      setScreen("driverDeliveryDetail");
    } else {
      setScreen(target);
    }
  };

  // Determine which screen to render
  const renderScreen = () => {
    switch (screen) {
      case "signIn":
        return <SignIn onSignIn={handleSignIn} goToSignUp={() => setScreen("signUp")} />;
      case "signUp":
        return <SignUp onSignUp={handleSignUp} goToSignIn={() => setScreen("signIn")} />;
      case "roleSelect":
        return <RoleSelect onSelectRole={handleRoleSelect} />;

      // Customer screens
      case "customerHome":
        return <Home goTo={goTo} />;
      case "customerNew":
        return <NewDelivery goTo={goTo} />;
      case "customerTrack":
        return <Track />;
      case "customerOrders":
        return <Orders goTo={goTo} />;
      case "customerProfile":
        return <Profile />;

      // Driver screens
      case "driverHome":
        return <DriverHome goTo={goTo} />;
      case "driverDeliveries":
        return <DriverDeliveries goTo={goTo} />;
      case "driverDeliveryDetail":
        return <DriverDeliveryDetail goTo={goTo} deliveryId={deliveryId} />;

      // Merchant screens
      case "merchantHome":
        return <MerchantHome goTo={goTo} />;
      case "merchantOrders":
        return <MerchantOrders goTo={goTo} />;
      case "merchantPayments":
        return <MerchantPayments goTo={goTo} />;
      case "merchantProfile":
        return (
          <BusinessProfile
            business={MERCHANT.business}
            contact={MERCHANT.contact}
            subtitle={MERCHANT.tier}
            onSignOut={handleSignOut}
          />
        );

      // Supplier screens
      case "supplierHome":
        return <SupplierHome goTo={goTo} />;
      case "supplierInventory":
        return <SupplierInventory goTo={goTo} />;
      case "supplierReports":
        return <SupplierReports goTo={goTo} />;
      case "supplierProfile":
        return (
          <BusinessProfile
            business={SUPPLIER.business}
            contact={SUPPLIER.contact}
            subtitle={`Contact: ${SUPPLIER.contact}`}
            onSignOut={handleSignOut}
          />
        );

      // Admin screens
      case "adminHome":
        return <AdminHome goTo={goTo} />;
      case "adminManage":
        return <AdminManage goTo={goTo} />;
      case "adminDisputes":
        return <AdminDisputes goTo={goTo} />;
      case "adminProfile":
        return (
          <BusinessProfile
            business="SGT GO Admin"
            contact={user?.name || "Admin"}
            subtitle="Platform administrator"
            onSignOut={handleSignOut}
          />
        );

      default:
        return <SignIn onSignIn={handleSignIn} goToSignUp={() => setScreen("signUp")} />;
    }
  };

  // Bottom nav config per role
  const NAV_CONFIG = {
    customer: { prefix: "customer", tabs: CUSTOMER_TABS, exclude: ["customerNew"] },
    merchant: { prefix: "merchant", tabs: MERCHANT_TABS, exclude: [] },
    supplier: { prefix: "supplier", tabs: SUPPLIER_TABS, exclude: [] },
    admin: { prefix: "admin", tabs: ADMIN_TABS, exclude: [] },
  };

  const roleNav = user?.role ? NAV_CONFIG[user.role] : null;
  const showBottomNav =
    roleNav &&
    screen.startsWith(roleNav.prefix) &&
    !roleNav.exclude.includes(screen);

  const activeTabKey = showBottomNav
    ? screen === "customerNew"
      ? "new"
      : screen.replace(roleNav.prefix, "").toLowerCase()
    : null;

  const handleNavChange = (tab) => {
    setScreen(`${roleNav.prefix}${tab.charAt(0).toUpperCase()}${tab.slice(1)}`);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#DCE6F5] font-body py-6">
      <div className="relative w-[375px] h-[780px] max-h-[92vh] bg-sky rounded-[2.4rem] shadow-float overflow-hidden border-[6px] border-navy-deep">
        {/* Status bar */}
        <div className="h-8 flex items-center justify-between px-6 bg-transparent absolute top-0 left-0 right-0 z-20">
          <span className="text-[11px] font-mono font-semibold text-navy">9:41</span>
          <div className="scale-90"><Logo size="text-sm" /></div>
        </div>

        <div className="h-full pt-8 relative">
          {renderScreen()}
        </div>

        {showBottomNav && (
          <BottomNav active={activeTabKey} onChange={handleNavChange} tabs={roleNav.tabs} />
        )}
      </div>
    </div>
  );
}
