
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  onForgotPassword: () => void;
  onToggleMode: () => void;
  loading: boolean;
}

export const LoginForm = ({ onSubmit, onForgotPassword, onToggleMode, loading }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!password) {
      toast.error("Please enter your password");
      return;
    }
    
    console.log("Form submission - Email:", email.trim());
    onSubmit(email.trim(), password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white font-orbitron">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          autoComplete="email"
          className="glass-card border-white/30 text-white placeholder:text-white/50 font-orbitron"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-white font-orbitron">Password *</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          minLength={6}
          autoComplete="current-password"
          className="glass-card border-white/30 text-white placeholder:text-white/50 font-orbitron"
        />
      </div>

      <div className="text-right">
        <Button
          type="button"
          variant="link"
          onClick={onForgotPassword}
          className="text-space hover:text-space/80 p-0 h-auto font-orbitron"
        >
          Forgot password?
        </Button>
      </div>

      <Button
        type="submit"
        className="w-full py-3 text-lg font-orbitron font-semibold moving-gradient text-white shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
        disabled={loading}
      >
        {loading ? "Processing..." : "Login"}
      </Button>

      <div className="text-center">
        <p className="text-sm text-white/60 mb-2 font-orbitron">
          Don't have an account?
        </p>
        <Button
          type="button"
          variant="link"
          onClick={onToggleMode}
          className="text-space hover:text-space/80 font-orbitron"
        >
          Create Account
        </Button>
      </div>
    </form>
  );
};
