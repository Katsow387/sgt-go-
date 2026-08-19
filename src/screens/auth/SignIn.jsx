import { useState } from "react";
import Logo from "../../components/Logo";
import { ArrowRight, MapPin, Truck, Gauge } from "lucide-react";

const PERKS = [
  { icon: Truck, text: "Real-time driver tracking on every delivery" },
  { icon: MapPin, text: "Deliveries across Tembisa, Kempton Park & Gauteng" },
  { icon: Gauge, text: "Live ETAs from pickup to your door" },
];

export default function SignIn({ onSignIn, goToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn({ name: email.split("@")[0] || "Guest", email });
  };

  return (
    <div className="min-h-screen w-full grid md:grid-cols-2 bg-sky">
      {/* Brand panel */}
      <div className="hidden md:flex flex-col justify-between bg-navy-deep text-white p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_60%,white,transparent_30%)]" />
        <Logo size="text-xl" light />
        <div className="relative z-10 max-w-sm">
          <p className="font-mono text-[11px] uppercase tracking-wider text-signal mb-3">
            Segwata Holdings
          </p>
          <h2 className="font-display font-800 text-3xl leading-tight mb-6">
            Driven by reliability. Built on integrity.
          </h2>
          <ul className="space-y-4">
            {PERKS.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-sky-mid/90">
                <p.icon className="w-4.5 h-4.5 mt-0.5 shrink-0 text-signal" strokeWidth={2.2} />
                {p.text}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative z-10 text-xs text-sky-mid/50">
          © {new Date().getFullYear()} Segwata Holdings. All rights reserved.
        </p>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-sm">
          <div className="md:hidden mb-10 flex justify-center">
            <Logo size="text-xl" />
          </div>

          <h1 className="font-display font-800 text-2xl text-navy mb-1">Welcome back</h1>
          <p className="text-sm text-slate mb-8">Sign in to manage or track your deliveries.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-ink mb-1.5">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-sky-mid bg-white text-sm focus:outline-none focus:ring-2 focus:ring-route/40 focus:border-route"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-ink mb-1.5">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-sky-mid bg-white text-sm focus:outline-none focus:ring-2 focus:ring-route/40 focus:border-route"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-route hover:bg-navy-light transition-colors text-white font-semibold text-sm py-3.5 rounded-xl shadow-card"
            >
              Sign in
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-sm text-slate mt-8">
            Don&apos;t have an account?{" "}
            <button onClick={goToSignUp} className="text-route font-semibold hover:underline">
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
