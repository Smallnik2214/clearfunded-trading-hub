import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Plus, DollarSign, TrendingUp, Settings, LogOut, MessageCircle, FileText, User, Shield, Users, Calendar, HelpCircle, Award, FileSignature } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface DashboardSidebarProps {
  onSettingsClick: () => void;
}

export const DashboardSidebar = ({
  onSettingsClick
}: DashboardSidebarProps) => {
  const {
    signOut
  } = useAuth();
  const handleLogout = async () => {
    await signOut();
    window.location.href = "/";
  };
  const handleSupportClick = () => {
    // Open Crisp chat
    if (window.$crisp) {
      window.$crisp.push(["do", "chat:open"]);
    }
  };
  return <div className="fixed left-0 top-0 h-full w-64 glass-card border-r border-white/20 z-40">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="cursor-pointer" onClick={() => window.location.href = "/"}>
            <h2 className="text-xl font-orbitron font-bold text-space">CLEAR FUNDED</h2>
          </div>
        </div>

        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron" onClick={() => window.location.href = "/dashboard"}>
            <Home className="h-5 w-5" />
            Dashboard
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron" onClick={() => window.location.href = "/challenge-details"}>
            <Plus className="h-5 w-5" />
            New Account
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron opacity-50 cursor-not-allowed" disabled>
            <Shield className="h-5 w-5" />
            Verification
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron opacity-50 cursor-not-allowed" disabled>
            <Users className="h-5 w-5" />
            Affiliate
            <Badge className="ml-auto text-xs bg-white/20 text-white/60">Soon</Badge>
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron" onClick={() => window.open("https://www.forexfactory.com/calendar", "_blank")}>
            <Calendar className="h-5 w-5" />
            Economic Calendar
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron" onClick={() => window.location.href = "/faq"}>
            <HelpCircle className="h-5 w-5" />
            Help Centre
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron opacity-50 cursor-not-allowed" disabled>
            <Award className="h-5 w-5" />
            Certificates
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron opacity-50 cursor-not-allowed" disabled>
            <FileSignature className="h-5 w-5" />
            Contracts
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron opacity-50 cursor-not-allowed" disabled>
            <DollarSign className="h-5 w-5" />
            Payouts
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron opacity-50 cursor-not-allowed" disabled>
            <TrendingUp className="h-5 w-5" />
            Analytics
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron" onClick={handleSupportClick}>
            <MessageCircle className="h-5 w-5" />
            Support
          </Button>

          <div className="border-t border-white/20 my-4"></div>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron" onClick={() => window.location.href = "/terms"}>
            <FileText className="h-5 w-5" />
            Terms
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron" onClick={() => window.location.href = "/privacy"}>
            <FileText className="h-5 w-5" />
            Privacy
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron" onClick={() => window.location.href = "/refund"}>
            <FileText className="h-5 w-5" />
            Refund Policy
          </Button>

          <div className="border-t border-white/20 my-4"></div>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron" onClick={onSettingsClick}>
            <Settings className="h-5 w-5" />
            Settings
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-red-400 font-orbitron" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </nav>
      </div>
    </div>;
};
