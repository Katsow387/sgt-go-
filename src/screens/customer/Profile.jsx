import { SAVED_PLACES } from "../../data";
import PageHeader from "../../components/PageHeader";
import { MapPin, Bell, ShieldCheck, HelpCircle, LogOut, ChevronRight, Repeat } from "lucide-react";

const LINKS = [
  { icon: Bell, label: "Notifications" },
  { icon: ShieldCheck, label: "Privacy & security" },
  { icon: HelpCircle, label: "Help centre" },
];

export default function Profile({ user, onSignOut, onSwitchRole }) {
  return (
    <div className="p-5 md:p-10 max-w-3xl mx-auto fade-up pb-24 md:pb-10">
      <PageHeader eyebrow="Account" title="Profile" />

      <div className="bg-white rounded-xl2 shadow-card border border-sky-mid p-6 flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center font-display font-700 text-white text-lg">
          {(user?.name || "U").charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-display font-700 text-navy text-lg">{user?.name || "Guest"}</p>
          <p className="text-sm text-slate">{user?.email || "—"}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl2 shadow-card border border-sky-mid p-6 mb-6">
        <h3 className="font-display font-700 text-navy text-base mb-4">Saved places</h3>
        <div className="space-y-4">
          {SAVED_PLACES.map((p) => (
            <div key={p.id} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-sky flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-route" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{p.label}</p>
                <p className="text-xs text-slate">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl2 shadow-card border border-sky-mid divide-y divide-sky-mid mb-6">
        {LINKS.map((l) => (
          <button
            key={l.label}
            className="w-full flex items-center gap-3 px-6 py-4 text-left hover:bg-sky/50 transition-colors"
          >
            <l.icon className="w-4.5 h-4.5 text-slate" />
            <span className="flex-1 text-sm font-medium text-ink">{l.label}</span>
            <ChevronRight className="w-4 h-4 text-slate" />
          </button>
        ))}
        <button
          onClick={onSwitchRole}
          className="w-full flex items-center gap-3 px-6 py-4 text-left hover:bg-sky/50 transition-colors"
        >
          <Repeat className="w-4.5 h-4.5 text-slate" />
          <span className="flex-1 text-sm font-medium text-ink">Switch to driver</span>
          <ChevronRight className="w-4 h-4 text-slate" />
        </button>
      </div>

      <button
        onClick={onSignOut}
        className="w-full flex items-center justify-center gap-2 border border-rose-200 text-rose-600 hover:bg-rose-50 transition-colors font-semibold text-sm py-3.5 rounded-xl"
      >
        <LogOut className="w-4 h-4" /> Sign out
      </button>
    </div>
  );
}
