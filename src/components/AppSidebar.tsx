
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Plus, DollarSign, TrendingUp, Settings, LogOut, MessageCircle, FileText, User, Shield, Users, Calendar, HelpCircle, Award, FileSignature } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  onSettingsClick: () => void;
}

export const AppSidebar = ({ onSettingsClick }: AppSidebarProps) => {
  const { signOut } = useAuth();
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

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

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className="glass-card border-r border-white/20">
      <SidebarContent>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="cursor-pointer" onClick={() => window.location.href = "/"}>
              <h2 className={`font-orbitron font-bold text-space ${isCollapsed ? "text-lg" : "text-xl"}`}>
                {isCollapsed ? "CF" : "CLEAR FUNDED"}
              </h2>
            </div>
          </div>

          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => window.location.href = "/dashboard"}
                    className={`w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron ${isActive("/dashboard") ? "bg-white/10 text-space" : ""}`}
                  >
                    <Home className="h-5 w-5" />
                    {!isCollapsed && <span>Dashboard</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => window.location.href = "/challenge-details"}
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron"
                  >
                    <Plus className="h-5 w-5" />
                    {!isCollapsed && <span>New Account</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    disabled
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron opacity-50 cursor-not-allowed"
                  >
                    <Shield className="h-5 w-5" />
                    {!isCollapsed && <span>Verification</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    disabled
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron opacity-50 cursor-not-allowed"
                  >
                    <Users className="h-5 w-5" />
                    {!isCollapsed && (
                      <>
                        <span>Affiliate</span>
                        <Badge className="ml-auto text-xs bg-white/20 text-white/60">Soon</Badge>
                      </>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => window.open("https://www.forexfactory.com/calendar", "_blank")}
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron"
                  >
                    <Calendar className="h-5 w-5" />
                    {!isCollapsed && <span>Economic Calendar</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => window.location.href = "/faq"}
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron"
                  >
                    <HelpCircle className="h-5 w-5" />
                    {!isCollapsed && <span>Help Centre</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    disabled
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron opacity-50 cursor-not-allowed"
                  >
                    <Award className="h-5 w-5" />
                    {!isCollapsed && <span>Certificates</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    disabled
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron opacity-50 cursor-not-allowed"
                  >
                    <FileSignature className="h-5 w-5" />
                    {!isCollapsed && <span>Contracts</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    disabled
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron opacity-50 cursor-not-allowed"
                  >
                    <DollarSign className="h-5 w-5" />
                    {!isCollapsed && <span>Payouts</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    disabled
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron opacity-50 cursor-not-allowed"
                  >
                    <TrendingUp className="h-5 w-5" />
                    {!isCollapsed && <span>Analytics</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={handleSupportClick}
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {!isCollapsed && <span>Support</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <div className="border-t border-white/20 my-4"></div>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => window.location.href = "/terms"}
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron"
                  >
                    <FileText className="h-5 w-5" />
                    {!isCollapsed && <span>Terms</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => window.location.href = "/privacy"}
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron"
                  >
                    <FileText className="h-5 w-5" />
                    {!isCollapsed && <span>Privacy</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => window.location.href = "/refund"}
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron"
                  >
                    <FileText className="h-5 w-5" />
                    {!isCollapsed && <span>Refund Policy</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <div className="border-t border-white/20 my-4"></div>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={onSettingsClick}
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-space font-orbitron"
                  >
                    <Settings className="h-5 w-5" />
                    {!isCollapsed && <span>Settings</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={handleLogout}
                    className="w-full justify-start gap-3 text-white hover:bg-white/10 hover:text-red-400 font-orbitron"
                  >
                    <LogOut className="h-5 w-5" />
                    {!isCollapsed && <span>Logout</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};
