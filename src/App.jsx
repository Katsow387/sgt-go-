import { useState } from "react";
import { Home as HomeIcon, PlusCircle, Navigation, Package, User, LayoutGrid, Truck } from "lucide-react";
import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";
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

const CUSTOMER_NAV = [
  { key: "customerHome", label: "Home", icon: HomeIcon },
  { key: "customerNew", label: "New", icon: PlusCircle },
  { key: "customerTrack", label: "Track", icon: Navigation },
  { key: "customerOrders", label: "Orders", icon: Package },
  { key: "customerProfile", label: "Profile", icon: User },
];

const DRIVER_NAV = [
  { key: "driverHome", label: "Home", icon: LayoutGrid },
  { key: "driverDeliveries", label: "Deliveries", icon: Truck },
];

const FULL_BLEED_SCREENS = ["signIn", "signUp", "roleSelect"];

export default function App() {
  const [user, setUser] = useState(null); // { name, email, role }
  const [screen, setScreen] = useState("signIn");
  const [deliveryId, setDeliveryId] = useState(null);

  const handleSignIn = (userData) => {
    setUser(userData);
    setScreen("roleSelect");
  };

  const handleSignUp = (userData) => {
    setUser(userData);
    setScreen("roleSelect");
  };

  const handleRoleSelect = (role) => {
    setUser((prev) => ({ ...prev, role }));
    setScreen(role === "customer" ? "customerHome" : "driverHome");
  };

  const handleSignOut = () => {
    setUser(null);
    setScreen("signIn");
  };

  const handleSwitchRole = () => {
    const nextRole = user?.role === "customer" ? "driver" : "customer";
    setUser((prev) => ({ ...prev, role: nextRole }));
    setScreen(nextRole === "customer" ? "customerHome" : "driverHome");
  };

  const goTo = (target, payload) => {
    if (target === "driverDeliveryDetail") {
      setDeliveryId(payload.id);
      setScreen("driverDeliveryDetail");
    } else {
      setScreen(target);
    }
  };

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
        return <Home goTo={goTo} user={user} />;
      case "customerNew":
        return <NewDelivery goTo={goTo} />;
      case "customerTrack":
        return <Track />;
      case "customerOrders":
        return <Orders goTo={goTo} />;
      case "customerProfile":
        return <Profile user={user} onSignOut={handleSignOut} onSwitchRole={handleSwitchRole} />;

      // Driver screens
      case "driverHome":
        return <DriverHome goTo={goTo} user={user} />;
      case "driverDeliveries":
        return <DriverDeliveries goTo={goTo} />;
      case "driverDeliveryDetail":
        return <DriverDeliveryDetail goTo={goTo} deliveryId={deliveryId} />;

      default:
        return <SignIn onSignIn={handleSignIn} goToSignUp={() => setScreen("signUp")} />;
    }
  };

  // Full-bleed auth/onboarding screens render with no chrome at all.
  if (FULL_BLEED_SCREENS.includes(screen)) {
    return renderScreen();
  }

  const isDriver = screen.startsWith("driver");
  const navItems = isDriver ? DRIVER_NAV : CUSTOMER_NAV;
  const activeKey = screen;

  return (
    <div className="min-h-screen w-full bg-sky flex">
      <Sidebar
        items={navItems}
        active={activeKey}
        onChange={(key) => setScreen(key)}
        user={user}
        onSignOut={handleSignOut}
      />

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Mobile top bar */}
        <div className="md:hidden h-16 flex items-center justify-between px-5 bg-white border-b border-sky-mid sticky top-0 z-20">
          <Logo size="text-base" />
          <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center font-display font-700 text-white text-xs">
            {(user?.name || "U").charAt(0).toUpperCase()}
          </div>
        </div>

        <main className="flex-1 min-w-0">{renderScreen()}</main>
      </div>

      <BottomNav items={navItems} active={activeKey} onChange={(key) => setScreen(key)} />
    </div>
  );
}
