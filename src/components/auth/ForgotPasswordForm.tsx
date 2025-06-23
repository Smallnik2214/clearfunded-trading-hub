
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ForgotPasswordFormProps {
  onSubmit: (email: string) => void;
  onBack: () => void;
  loading: boolean;
}

export const ForgotPasswordForm = ({ onSubmit, onBack, loading }: ForgotPasswordFormProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    
    onSubmit(email.trim());
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            autoComplete="email"
          />
        </div>

        <Button
          type="submit"
          className="w-full py-3 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Instructions"}
        </Button>

        <div className="text-center">
          <Button
            type="button"
            variant="link"
            onClick={onBack}
            className="text-green-600 hover:text-green-700"
          >
            Back to Login
          </Button>
        </div>
      </form>
    </div>
  );
};
