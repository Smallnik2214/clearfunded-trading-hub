
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, DollarSign, Clock, Shield, TrendingUp } from "lucide-react";

const Rules = () => {
  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <Header />
      
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Clear Funded – Simplified Trading Rules</h1>
            <p className="text-xl text-gray-600">
              Clear, transparent rules designed for your success
            </p>
          </div>

          {/* Evaluation Phases */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                1. Evaluation Phases (Phase 1 & 2)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Each phase has 0 trading days before you can complete it</li>
                <li>• Maximum total funded allocation across all your accounts at any one time is $200,000</li>
              </ul>
            </CardContent>
          </Card>

          {/* Profit Targets */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-green-600" />
                2. Profit Targets & Transition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                After hitting the target in the first phase, you'll receive Phase 2 access within 24 hours.
              </p>
            </CardContent>
          </Card>

          {/* Daily Loss Limit */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                3. Daily Loss Limit (Evaluation & Funded)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• The "daily loss" is measured from the day's highest equity value</li>
                <li>• Exceeding this daily ceiling results in immediate account closure</li>
              </ul>
            </CardContent>
          </Card>

          {/* Overall Loss Cap */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-red-600" />
                4. Overall Loss Cap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                You cannot breach the 10% maximum drawdown relative to the initial account value.
              </p>
            </CardContent>
          </Card>

          {/* News & Weekend Trading */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-blue-600" />
                5. News & Weekend Trading
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">During Evaluation phases:</h4>
                  <p className="text-gray-700">You can trade through news events free on phases</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">On Funded accounts:</h4>
                  <p className="text-gray-700">
                    Trading around "red news" (per Forex Factory) is NOT allowed — positions must NOT be opened or closed within 1 minutes before or after high-impact events.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profit Sharing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-green-600" />
                6. Profit Sharing & Withdrawals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Withdrawals are processed every two weeks</li>
                <li>• Profit split is 90% to you, 10% to ClearFunded</li>
                <li>• Withdrawal requests are typically processed within 2–3 business days</li>
                <li>• There's no withdraw limit on Funded accounts</li>
              </ul>
            </CardContent>
          </Card>

          {/* Demo Environment */}
          <Card className="mb-8 bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-700">Demo Environment Only</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                All accounts operate in a fully simulated demo environment. ClearFunded is not a broker but provides access for training and evaluation.
              </p>
            </CardContent>
          </Card>

          {/* Legal */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Legal & Jurisdiction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                ClearFunded operations comply with relevant international laws. Services may be restricted in certain jurisdictions.
              </p>
            </CardContent>
          </Card>

          {/* Account Rules Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* 1-Step Rules */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600">1-Step</Badge>
                  <CardTitle>1-Step Account Rules</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">🎯 Profit Target</h4>
                  <p className="text-sm text-gray-600">Reach 10% profit without breaking any rules to qualify for funding</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📉 Drawdown</h4>
                  <p className="text-sm text-gray-600">Max Daily Loss: 4% of initial balance</p>
                  <p className="text-sm text-gray-600">Total Loss: 8% max from initial balance</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🕒 Trading Days</h4>
                  <p className="text-sm text-gray-600">No minimum trading days required</p>
                </div>
              </CardContent>
            </Card>

            {/* 2-Step Rules */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600">2-Step</Badge>
                  <CardTitle>2-Step Account Rules</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">🎯 Profit Targets</h4>
                  <p className="text-sm text-gray-600">Phase 1: Reach 8% profit</p>
                  <p className="text-sm text-gray-600">Phase 2: Reach 5% profit</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📉 Loss Limits</h4>
                  <p className="text-sm text-gray-600">Daily Loss: 5% of initial balance</p>
                  <p className="text-sm text-gray-600">Total Loss: 10% max from initial balance</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🕒 Trading Days</h4>
                  <p className="text-sm text-gray-600">No minimum trading days required</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Platform Rules */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Platform Rules</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Tradable Instruments</h4>
                <p className="text-gray-700">You can trade Forex, FX Exotics, Indices, Gold & Commodities, and Crypto.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">💸 Spreads & Commissions</h4>
                <p className="text-gray-700">Accounts use Raw spreads. Per-lot commissions:</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>FX: $3</li>
                  <li>Indices: $0</li>
                  <li>Commodities: $3</li>
                  <li>Crypto: $0</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">⚖️ Leverage</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-green-600">Evaluation & Funded Accounts:</p>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      <li>FX: 1:100</li>
                      <li>Indices & Commodities: 1:30</li>
                      <li>Crypto: 1:2</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">💻 Platforms</h4>
                <p className="text-gray-700">Clear Funded offers: MetaTrader 5, Tradelocker, Ctrader</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Challenge?</h2>
            <button
              onClick={() => window.location.href = "/register"}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Trading Challenge
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rules;
