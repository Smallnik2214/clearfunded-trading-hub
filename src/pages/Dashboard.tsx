
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp, DollarSign, Calendar, User, Mail, FileText, ArrowRight } from "lucide-react";
import { PromoBanner } from "@/components/PromoBanner";
import { AppSidebar } from "@/components/AppSidebar";
import { SettingsModal } from "@/components/SettingsModal";
import { SupportChatButton } from "@/components/SupportChatButton";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

interface UserProfile {
  first_name?: string;
  last_name?: string;
}

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const [userProfile, setUserProfile] = useState<UserProfile>({});
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    if (user) {
      // Get user profile from Supabase
      const fetchProfile = async () => {
        const { data, error } = await supabase
          .from('profiles')
          .select('first_name, last_name')
          .eq('id', user.id)
          .single();
        
        if (data) {
          setUserProfile(data);
        }
      };
      
      fetchProfile();
    }
  }, [user]);

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      window.location.href = "/auth";
    }
  }, [user, loading]);

  const handleLogout = async () => {
    await signOut();
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div className="min-h-screen space-bg flex items-center justify-center">
        <div className="stars"></div>
        <div className="text-center relative z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-space mx-auto"></div>
          <p className="mt-4 text-white/80 font-orbitron">Loading...</p>
        </div>
      </div>
    );
  };

  if (!user) {
    return null;
  }

  const userStats = {
    activeAccounts: 0,
    totalProfit: 0,
    successRate: 0,
    totalTrades: 0
  };

  const displayName = userProfile.first_name && userProfile.last_name 
    ? `${userProfile.first_name} ${userProfile.last_name}`
    : user.email;

  return (
    <SidebarProvider>
      <div className="min-h-screen space-bg w-full">
        <div className="stars"></div>
        
        {/* Sidebar */}
        <AppSidebar onSettingsClick={() => setIsSettingsOpen(true)} />
        
        {/* Settings Modal */}
        <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
        
        {/* Support Chat Button */}
        <SupportChatButton />
        
        {/* Promo Banner */}
        <PromoBanner />
        
        {/* Main Content */}
        <SidebarInset>
          {/* Dashboard Header */}
          <div className="glass-card border-white/20 border-b relative z-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center gap-4">
                  <SidebarTrigger className="text-white hover:bg-white/10" />
                  <div 
                    className="flex-shrink-0 cursor-pointer" 
                    onClick={() => window.location.href = "/"}
                  >
                    <h1 className="text-2xl font-orbitron font-bold text-space">
                      CLEAR FUNDED
                    </h1>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <Badge className="moving-gradient text-white text-2xl px-6 py-3 font-orbitron font-bold border-0">Dashboard</Badge>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-white/80" />
                    <span className="text-white font-orbitron font-medium">
                      {displayName}
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleLogout}
                    className="glass-card border-white/30 text-white hover:border-space/50 font-orbitron"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-8 relative z-10">
            {/* Welcome Section with User Info */}
            <div className="mb-8">
              <h1 className="text-3xl font-orbitron font-bold text-space mb-2">
                Welcome, {userProfile.first_name || 'Trader'}!
              </h1>
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="h-4 w-4" />
                <span className="font-orbitron">{user.email}</span>
              </div>
              <p className="text-white/80 mt-2 font-orbitron font-light">
                Get started by creating your first trading challenge
              </p>
            </div>

            {/* Stats Overview - All zeros for new user */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="glass-card border-white/20 hover:border-space/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-orbitron font-medium text-white/60">Active Accounts</p>
                      <p className="text-3xl font-orbitron font-bold text-space">{userStats.activeAccounts}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-white/40" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20 hover:border-space/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-orbitron font-medium text-white/60">Total Profit</p>
                      <p className="text-3xl font-orbitron font-bold text-space">${userStats.totalProfit}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-white/40" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20 hover:border-space/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-orbitron font-medium text-white/60">Success Rate</p>
                      <p className="text-3xl font-orbitron font-bold text-space">{userStats.successRate}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-white/40" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20 hover:border-space/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-orbitron font-medium text-white/60">Total Trades</p>
                      <p className="text-3xl font-orbitron font-bold text-space">{userStats.totalTrades}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-white/40" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Actions */}
            <div className="grid grid-cols-1 gap-8">
              {/* New Account Card - Wide Layout */}
              <Card className="glass-card border-white/20 hover:border-space/40 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div>
                      <h3 className="text-2xl font-orbitron font-bold text-space mb-2">
                        Start Your Trading Journey
                      </h3>
                      <p className="text-white/70 font-orbitron font-light">
                        Start your first trading challenge and begin your path to funded trading
                      </p>
                    </div>
                    <div className="w-full">
                      <Button
                        className="w-full moving-gradient text-white font-orbitron font-bold text-lg py-4 h-auto max-w-md mx-auto"
                        onClick={() => window.location.href = "/challenge-details"}
                      >
                        <Plus className="mr-3 h-6 w-6" />
                        NEW ACCOUNT
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* No Active Accounts Message */}
              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle className="text-space font-orbitron">Your Trading Accounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="mx-auto w-24 h-24 glass-card border-white/20 rounded-full flex items-center justify-center mb-4">
                      <TrendingUp className="h-12 w-12 text-white/40" />
                    </div>
                    <h3 className="text-lg font-orbitron font-semibold text-space mb-2">
                      No Trading Accounts Yet
                    </h3>
                    <p className="text-white/70 mb-6 font-orbitron font-light">
                      You don't have any active trading accounts. Start your first challenge to begin trading with us.
                    </p>
                    <Button
                      className="moving-gradient text-white font-orbitron font-semibold"
                      onClick={() => window.location.href = "/challenge-details"}
                    >
                      Create Your First Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h2 className="text-xl font-orbitron font-semibold text-space mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="p-6 h-auto flex flex-col items-center gap-2 glass-card border-white/20 text-white hover:border-space/40 font-orbitron"
                  onClick={() => window.location.href = "/challenge-details"}
                >
                  <Plus className="h-8 w-8 text-space" />
                  <span>Start Challenge</span>
                </Button>
                <Button
                  variant="outline"
                  className="p-6 h-auto flex flex-col items-center gap-2 opacity-50 cursor-not-allowed glass-card border-white/20 text-white font-orbitron"
                  disabled
                >
                  <DollarSign className="h-8 w-8 text-white/40" />
                  <span>Request Payout</span>
                  <span className="text-xs text-white/40">No funded accounts</span>
                </Button>
                <Button
                  variant="outline"
                  className="p-6 h-auto flex flex-col items-center gap-2 opacity-50 cursor-not-allowed glass-card border-white/20 text-white font-orbitron"
                  disabled
                >
                  <TrendingUp className="h-8 w-8 text-white/40" />
                  <span>Trading Stats</span>
                  <span className="text-xs text-white/40">No trading history</span>
                </Button>
              </div>
            </div>

            {/* Legal Information Section */}
            <div className="mt-12 border-t border-white/20 pt-8">
              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-space font-orbitron">
                    <FileText className="h-5 w-5" />
                    Important Legal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-sm mb-4 font-orbitron font-light">
                    Please review our legal documents to understand your rights and obligations when using Clear Funded services.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-center gap-2 glass-card border-white/20 text-white hover:border-space/40 font-orbitron"
                      onClick={() => window.location.href = "/terms"}
                    >
                      <FileText className="h-6 w-6 text-white/60" />
                      <span className="font-medium">Terms & Conditions</span>
                      <span className="text-xs text-white/50">Trading rules and obligations</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-center gap-2 glass-card border-white/20 text-white hover:border-space/40 font-orbitron"
                      onClick={() => window.location.href = "/privacy"}
                    >
                      <FileText className="h-6 w-6 text-white/60" />
                      <span className="font-medium">Privacy Policy</span>
                      <span className="text-xs text-white/50">How we protect your data</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-center gap-2 glass-card border-white/20 text-white hover:border-space/40 font-orbitron"
                      onClick={() => window.location.href = "/refund"}
                    >
                      <FileText className="h-6 w-6 text-white/60" />
                      <span className="font-medium">Refund Policy</span>
                      <span className="text-xs text-white/50">Payment and refund terms</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
