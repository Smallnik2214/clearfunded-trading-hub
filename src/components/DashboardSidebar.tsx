import { useState } from "react";
import { Trophy, TrendingUp, FileText, Award, Users, Calendar, Rss, Download, HelpCircle, Shield, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
interface DashboardSidebarProps {
  onSettingsClick: () => void;
}
export const DashboardSidebar = ({
  onSettingsClick
}: DashboardSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const menuItems = [{
    icon: TrendingUp,
    label: "Profit Share",
    disabled: true
  }, {
    icon: FileText,
    label: "Contracts",
    disabled: true
  }, {
    icon: Award,
    label: "Certificates",
    disabled: true
  }, {
    icon: Calendar,
    label: "Economic Calendar",
    disabled: false,
    onClick: () => window.open("https://www.forexfactory.com/calendar", "_blank")
  }, {
    icon: HelpCircle,
    label: "Help Center",
    disabled: false,
    onClick: () => window.location.href = "/faq"
  }, {
    icon: Shield,
    label: "Verification",
    disabled: true
  }, {
    icon: Settings,
    label: "Settings",
    disabled: false,
    onClick: onSettingsClick
  }];
  return <div className={`fixed left-0 top-0 h-full z-40 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <Card className="h-full glass-card border-white/20 rounded-none border-l-0 border-t-0 border-b-0">
        <div className="p-4 space-y-2">
          {/* Logo/Brand */}
          <div className="flex items-center justify-between mb-6">
            {!isCollapsed && <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-space rounded flex items-center justify-center">
                  
                </div>
                <span className="text-white font-orbitron font-bold text-sm">
                  CLEAR FUNDED
                </span>
              </div>}
            <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)} className="text-white/60 hover:text-white hover:bg-white/10 h-8 w-8">
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </div>

          {/* Menu Items */}
          <div className="space-y-1">
            {menuItems.map((item, index) => {
            const Icon = item.icon;
            return <Button key={index} variant="ghost" className={`w-full justify-start gap-3 text-left h-10 px-3 ${item.disabled ? 'text-white/40 cursor-not-allowed hover:bg-transparent' : 'text-white/80 hover:text-white hover:bg-white/10'} ${isCollapsed ? 'px-0 justify-center' : ''}`} onClick={item.onClick} disabled={item.disabled}>
                  <Icon className={`h-4 w-4 ${isCollapsed ? '' : 'flex-shrink-0'}`} />
                  {!isCollapsed && <span className="font-orbitron text-sm">{item.label}</span>}
                </Button>;
          })}
          </div>
        </div>
      </Card>
    </div>;
};