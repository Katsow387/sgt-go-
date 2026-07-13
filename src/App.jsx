import { useState } from "react";
import Logo from "./components/Logo";
import BottomNav from "./components/BottomNav";
import Home from "./screens/Home";
import NewDelivery from "./screens/NewDelivery";
import Track from "./screens/Track";
import Orders from "./screens/Orders";
import Profile from "./screens/Profile";

export default function App() {
  const [screen, setScreen] = useState("home");
  const activeTab = screen === "new" ? "new" : screen;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#DCE6F5] font-body py-6">
      <div className="relative w-[375px] h-[780px] max-h-[92vh] bg-sky rounded-[2.4rem] shadow-float overflow-hidden border-[6px] border-navy-deep">
        {/* Status bar */}
        <div className="h-8 flex items-center justify-between px-6 bg-transparent absolute top-0 left-0 right-0 z-20">
          <span className="text-[11px] font-mono font-semibold text-navy">9:41</span>
          <div className="scale-90"><Logo size="text-sm" /></div>
        </div>

        <div className="h-full pt-8 relative">
          {screen === "home" && <Home goTo={setScreen} />}
          {screen === "new" && <NewDelivery goTo={setScreen} />}
          {screen === "track" && <Track />}
          {screen === "orders" && <Orders goTo={setScreen} />}
          {screen === "profile" && <Profile />}
        </div>

        <BottomNav
          active={activeTab === "new" ? "new" : activeTab}
          onChange={setScreen}
        />
      </div>
    </div>
  );
}
