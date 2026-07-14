import { useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import Logo from "../../components/Logo";

export default function SignUp({ onSignUp, goToSignIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ name, email, role });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <div className="mb-6">
        <Logo size="text-3xl" />
      </div>
      <h2 className="font-display font-bold text-2xl text-navy mb-2">Create account</h2>
      <p className="text-sm text-slate mb-6">Join SGT GO today</p>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wide text-slate mb-1">
            Full name
          </label>
          <div className="flex items-center border-b border-sky-mid focus-within:border-route pb-1">
            <User size={18} className="text-slate mr-2" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-ink placeholder:text-slate/60"
              placeholder="Thabo Mokoena"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wide text-slate mb-1">
            Email
          </label>
          <div className="flex items-center border-b border-sky-mid focus-within:border-route pb-1">
            <Mail size={18} className="text-slate mr-2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-ink placeholder:text-slate/60"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wide text-slate mb-1">
            Password
          </label>
          <div className="flex items-center border-b border-sky-mid focus-within:border-route pb-1">
            <Lock size={18} className="text-slate mr-2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-ink placeholder:text-slate/60"
              placeholder="••••••••"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wide text-slate mb-1">
            I am a
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setRole("customer")}
              className={`flex-1 py-2 text-center rounded-full border-2 text-sm font-medium ${
                role === "customer"
                  ? "border-route bg-sky text-route"
                  : "border-sky-mid text-slate"
              }`}
            >
              Customer
            </button>
            <button
              type="button"
              onClick={() => setRole("driver")}
              className={`flex-1 py-2 text-center rounded-full border-2 text-sm font-medium ${
                role === "driver"
                  ? "border-route bg-sky text-route"
                  : "border-sky-mid text-slate"
              }`}
            >
              Driver
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-navy text-white font-display font-bold rounded-full py-3 flex items-center justify-center gap-2"
        >
          Sign Up <ArrowRight size={18} />
        </button>
      </form>

      <p className="text-sm text-slate mt-6">
        Already have an account?{" "}
        <button onClick={goToSignIn} className="text-route font-medium">
          Sign In
        </button>
      </p>
    </div>
  );
}