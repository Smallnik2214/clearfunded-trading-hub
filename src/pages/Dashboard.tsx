
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp, DollarSign, Calendar, User, Mail, FileText } from "lucide-react";
import { PromoBanner } from "@/components/PromoBanner";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface UserProfile {
  first_name?: string;
  last_name?: string;
}

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const [userProfile, setUserProfile] = useState<UserProfile>({});

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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-gray-50">
      {/* Promo Banner */}
      <PromoBanner />
      
      {/* Dashboard Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <div 
                className="flex-shrink-0 cursor-pointer" 
                onClick={() => window.location.href = "/"}
              >
                <img
                  src="https://i.postimg.cc/5ySSfG8b/Chat-GPT-Image-Jun-22-2025-12-24-31-PM.png"
                  alt="Clear Funded Logo"
                  className="h-23 w-32"
                />
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <Badge className="bg-green-100 text-green-800 text-2xl px-6 py-3">Dashboard</Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700 font-medium">
                  {displayName}
                </span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section with User Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome, {userProfile.first_name || 'Trader'}!
          </h1>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="h-4 w-4" />
            <span>{user.email}</span>
          </div>
          <p className="text-gray-600 mt-2">
            Get started by creating your first trading challenge
          </p>
        </div>

        {/* Stats Overview - All zeros for new user */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Accounts</p>
                  <p className="text-3xl font-bold text-gray-900">{userStats.activeAccounts}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Profit</p>
                  <p className="text-3xl font-bold text-gray-900">${userStats.totalProfit}</p>
                </div>
                <DollarSign className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Success Rate</p>
                  <p className="text-3xl font-bold text-gray-900">{userStats.successRate}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Trades</p>
                  <p className="text-3xl font-bold text-gray-900">{userStats.totalTrades}</p>
                </div>
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* New Challenge Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Start Your First Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm">
                Ready to begin your trading journey? Choose your account size and start your first challenge.
              </p>
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => window.location.href = "/challenge-details"}
              >
                START FIRST CHALLENGE
              </Button>
            </CardContent>
          </Card>

          {/* No Active Accounts Message */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Your Trading Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No Trading Accounts Yet
                </h3>
                <p className="text-gray-500 mb-6">
                  You don't have any active trading accounts. Start your first challenge to begin trading with us.
                </p>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => window.location.href = "/challenge-details"}
                >
                  Create Your First Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="p-6 h-auto flex flex-col items-center gap-2"
              onClick={() => window.location.href = "/challenge-details"}
            >
              <Plus className="h-8 w-8 text-green-600" />
              <span>Start Challenge</span>
            </Button>
            <Button
              variant="outline"
              className="p-6 h-auto flex flex-col items-center gap-2 opacity-50 cursor-not-allowed"
              disabled
            >
              <DollarSign className="h-8 w-8 text-gray-400" />
              <span>Request Payout</span>
              <span className="text-xs text-gray-400">No funded accounts</span>
            </Button>
            <Button
              variant="outline"
              className="p-6 h-auto flex flex-col items-center gap-2 opacity-50 cursor-not-allowed"
              disabled
            >
              <TrendingUp className="h-8 w-8 text-gray-400" />
              <span>Trading Stats</span>
              <span className="text-xs text-gray-400">No trading history</span>
            </Button>
          </div>
        </div>

        {/* Legal Information Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="h-5 w-5" />
                Important Legal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">
                Please review our legal documents to understand your rights and obligations when using Clear Funded services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center gap-2"
                  onClick={() => window.location.href = "/terms"}
                >
                  <FileText className="h-6 w-6 text-gray-600" />
                  <span className="font-medium">Terms & Conditions</span>
                  <span className="text-xs text-gray-500">Trading rules and obligations</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center gap-2"
                  onClick={() => window.location.href = "/privacy"}
                >
                  <FileText className="h-6 w-6 text-gray-600" />
                  <span className="font-medium">Privacy Policy</span>
                  <span className="text-xs text-gray-500">How we protect your data</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center gap-2"
                  onClick={() => window.location.href = "/refund"}
                >
                  <FileText className="h-6 w-6 text-gray-600" />
                  <span className="font-medium">Refund Policy</span>
                  <span className="text-xs text-gray-500">Payment and refund terms</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
