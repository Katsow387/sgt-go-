import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Logo from "../../components/Logo";

export default function SignIn({ onSignIn, goToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock sign‑in – just pass the email to parent
    onSignIn({ email, role: "customer" }); // default role
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <div className="mb-8">
        <Logo size="text-3xl" />
      </div>
      <h2 className="font-display font-bold text-2xl text-navy mb-2">Welcome back</h2>
      <p className="text-sm text-slate mb-6">Sign in to continue</p>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
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
        <button
          type="submit"
          className="w-full bg-navy text-white font-display font-bold rounded-full py-3 flex items-center justify-center gap-2"
        >
          Sign In <ArrowRight size={18} />
        </button>
      </form>

      <p className="text-sm text-slate mt-6">
        Don’t have an account?{" "}
        <button onClick={goToSignUp} className="text-route font-medium">
          Sign Up
        </button>
      </p>
    </div>
  );
}