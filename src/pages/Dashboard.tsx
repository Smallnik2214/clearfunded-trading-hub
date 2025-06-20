
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp, DollarSign, Calendar, User } from "lucide-react";

const Dashboard = () => {
  const [userName] = useState("John Doe"); // This would come from auth context

  const userStats = {
    activeAccounts: 2,
    totalProfit: 1250.75,
    successRate: 85,
    totalTrades: 48
  };

  const accounts = [
    {
      id: 1,
      type: "1-Phase Challenge",
      balance: "$10,000",
      profit: "$847.50",
      status: "Active",
      platform: "cTrader"
    },
    {
      id: 2,
      type: "Funded Account",
      balance: "$25,000",
      profit: "$2,150.25",
      status: "Funded",
      platform: "MT5"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-green-600">Clear Funded</div>
              <Badge className="bg-green-100 text-green-800">Dashboard</Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700 font-medium">{userName}</span>
              </div>
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userName}!
          </h1>
          <p className="text-gray-600">
            Track your progress and manage your trading accounts
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Accounts</p>
                  <p className="text-3xl font-bold text-gray-900">{userStats.activeAccounts}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Profit</p>
                  <p className="text-3xl font-bold text-green-600">${userStats.totalProfit}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Success Rate</p>
                  <p className="text-3xl font-bold text-blue-600">{userStats.successRate}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-600" />
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
                <Calendar className="h-8 w-8 text-gray-600" />
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
                Start New Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm">
                Ready to take on a new trading challenge? Choose your account size and get started.
              </p>
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => window.location.href = "/challenge-details"}
              >
                NEW CHALLENGE
              </Button>
            </CardContent>
          </Card>

          {/* Active Accounts */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Your Trading Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accounts.map((account) => (
                  <div
                    key={account.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-semibold text-gray-900">{account.type}</div>
                        <div className="text-sm text-gray-600">
                          {account.balance} • {account.platform}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-semibold text-green-600">{account.profit}</div>
                        <Badge
                          className={
                            account.status === "Funded"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }
                        >
                          {account.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
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
              <span>New Challenge</span>
            </Button>
            <Button
              variant="outline"
              className="p-6 h-auto flex flex-col items-center gap-2"
            >
              <DollarSign className="h-8 w-8 text-blue-600" />
              <span>Request Payout</span>
            </Button>
            <Button
              variant="outline"
              className="p-6 h-auto flex flex-col items-center gap-2"
            >
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <span>Trading Stats</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
