import { useState } from "react";
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

export default function App() {
  const [user, setUser] = useState(null); // { name, email, role }
  const [screen, setScreen] = useState("signIn"); // screens: signIn, signUp, roleSelect, customerHome, customerNew, customerTrack, customerOrders, customerProfile, driverHome, driverDeliveries, driverDeliveryDetail
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
    if (role === "customer") {
      setScreen("customerHome");
    } else {
      setScreen("driverHome");
    }
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

      default:
        return <SignIn onSignIn={handleSignIn} goToSignUp={() => setScreen("signUp")} />;
    }
  };

  // BottomNav only for customer screens (you can add a driver nav too)
  const showBottomNav = screen.startsWith("customer") && screen !== "customerNew";

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
          <BottomNav
            active={screen === "customerNew" ? "new" : screen.replace("customer", "").toLowerCase()}
            onChange={(tab) => setScreen(`customer${tab.charAt(0).toUpperCase() + tab.slice(1)}`)}
          />
        )}
      </div>
    </div>
  );
}