
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password *</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          minLength={6}
        />
      </div>

      <div className="text-right">
        <Button
          type="button"
          variant="link"
          onClick={onForgotPassword}
          className="text-green-600 hover:text-green-700 p-0 h-auto"
        >
          Forgot password?
        </Button>
      </div>

      <Button
        type="submit"
        className="w-full py-3 text-lg font-semibold bg-gray-600 hover:bg-gray-700 text-white"
        disabled={loading}
      >
        {loading ? "Processing..." : "Login"}
      </Button>

      <div className="text-center">
        <Button
          type="button"
          variant="link"
          onClick={onToggleMode}
          className="text-green-600 hover:text-green-700"
        >
          Create Account
        </Button>
      </div>
    </form>
  );
};
