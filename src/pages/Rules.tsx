import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, DollarSign, Clock, Shield, TrendingUp } from "lucide-react";
const Rules = () => {
  return <div className="min-h-screen space-bg">
      <div className="stars"></div>
      <PromoBanner />
      <Header />
      
      <div className="page-container py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-orbitron font-bold text-space mb-4">Clear Funded – Simplified Trading Rules</h1>
            <p className="text-xl text-white/80 font-inter">
              Clear, transparent rules designed for your success
            </p>
          </div>

          {/* Evaluation Phases */}
          <Card className="glass-card border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white font-orbitron">
                <TrendingUp className="h-6 w-6 text-space" />
                1. Evaluation Phases (Phase 1 & 2)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-white/80 font-inter">
                <li>• Each phase has 0 trading days before you can complete it</li>
                <li>• Maximum total funded allocation across all your accounts at any one time is $200,000</li>
              </ul>
            </CardContent>
          </Card>

          {/* Profit Targets */}
          <Card className="glass-card border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white font-orbitron">
                <DollarSign className="h-6 w-6 text-space" />
                2. Profit Targets & Transition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 font-inter">
                After hitting the target in the first phase, you'll receive Phase 2 access within 24 hours.
              </p>
            </CardContent>
          </Card>

          {/* Daily Loss Limit */}
          <Card className="glass-card border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white font-orbitron">
                <AlertTriangle className="h-6 w-6 text-red-400" />
                3. Daily Loss Limit (Evaluation & Funded)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-white/80 font-inter">
                <li>• The "daily loss" is measured from the day's highest equity value</li>
                <li>• Exceeding this daily ceiling results in immediate account closure</li>
              </ul>
            </CardContent>
          </Card>

          {/* Overall Loss Cap */}
          <Card className="glass-card border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white font-orbitron">
                <Shield className="h-6 w-6 text-red-400" />
                4. Overall Loss Cap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 font-inter">
                You cannot breach the 10% maximum drawdown relative to the initial account value.
              </p>
            </CardContent>
          </Card>

          {/* News & Weekend Trading */}
          <Card className="glass-card border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white font-orbitron">
                <Clock className="h-6 w-6 text-space" />
                5. News & Weekend Trading
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-400 mb-2 font-orbitron">During Evaluation phases:</h4>
                  <p className="text-white/80 font-inter">You can trade through news events free on phases</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-400 mb-2 font-orbitron">On Funded accounts:</h4>
                  <p className="text-white/80 font-inter">
                    Trading around "red news" (per Forex Factory) is NOT allowed — positions must NOT be opened or closed within 1 minutes before or after high-impact events.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profit Sharing */}
          <Card className="glass-card border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white font-orbitron">
                <DollarSign className="h-6 w-6 text-space" />
                6. Profit Sharing & Withdrawals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-white/80 font-inter">
                <li>• Withdrawals are processed every two weeks</li>
                <li>• Profit split is 90% to you, 10% to ClearFunded</li>
                <li>• Withdrawal requests are typically processed within 2–3 business days</li>
                <li>• There's no withdraw limit on Funded accounts</li>
              </ul>
            </CardContent>
          </Card>

          {/* Demo Environment */}
          <Card className="glass-card border-yellow-400/50 mb-8 bg-yellow-500/10">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-orbitron">Demo Environment Only</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 font-inter">
                All accounts operate in a fully simulated demo environment. ClearFunded is not a broker but provides access for training and evaluation.
              </p>
            </CardContent>
          </Card>

          {/* Legal */}
          <Card className="glass-card border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white font-orbitron">Legal & Jurisdiction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 font-inter">
                ClearFunded operations comply with relevant international laws. Services may be restricted in certain jurisdictions.
              </p>
            </CardContent>
          </Card>

          {/* Account Rules Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* 1-Step Rules */}
            <Card className="glass-card border-green-400/50 bg-green-500/10">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600">1-Step</Badge>
                  <CardTitle className="text-white font-orbitron">1-Step Account Rules</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-space font-orbitron">🎯 Profit Target</h4>
                  <p className="text-sm text-white/70 font-inter">Reach 10% profit without breaking any rules to qualify for funding</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-space font-orbitron">📉 Drawdown</h4>
                  <p className="text-sm text-white/70 font-inter">Max Daily Loss: 4% of initial balance</p>
                  <p className="text-sm text-white/70 font-inter">Total Loss: 8% max from initial balance</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-space font-orbitron">🕒 Trading Days</h4>
                  <p className="text-sm text-white/70 font-inter">No minimum trading days required</p>
                </div>
              </CardContent>
            </Card>

            {/* 2-Step Rules */}
            <Card className="glass-card border-blue-400/50 bg-blue-500/10">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600">2-Step</Badge>
                  <CardTitle className="text-white font-orbitron">2-Step Account Rules</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-space font-orbitron">🎯 Profit Targets</h4>
                  <p className="text-sm text-white/70 font-inter">Phase 1: Reach 8% profit</p>
                  <p className="text-sm text-white/70 font-inter">Phase 2: Reach 5% profit</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-space font-orbitron">📉 Loss Limits</h4>
                  <p className="text-sm text-white/70 font-inter">Daily Loss: 5% of initial balance</p>
                  <p className="text-sm text-white/70 font-inter">Total Loss: 10% max from initial balance</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-space font-orbitron">🕒 Trading Days</h4>
                  <p className="text-sm text-white/70 font-inter">No minimum trading days required</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Platform Rules */}
          <Card className="glass-card border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white font-orbitron">Platform Rules</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-space font-orbitron">Tradable Instruments</h4>
                <p className="text-white/80 font-inter">You can trade Forex, FX Exotics, Indices, Gold & Commodities, and Crypto.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-space font-orbitron">💸 Spreads & Commissions</h4>
                <p className="text-white/80 font-inter">Accounts use Raw spreads. Per-lot commissions:</p>
                <ul className="list-disc list-inside text-white/70 mt-2 font-inter">
                  <li>FX: $3</li>
                  <li>Indices: $0</li>
                  <li>Commodities: $3</li>
                  <li>Crypto: $0</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-space font-orbitron">⚖️ Leverage</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-green-400 font-orbitron">Evaluation & Funded Accounts:</p>
                    <ul className="list-disc list-inside text-white/70 text-sm font-inter">
                      <li>FX: 1:100</li>
                      <li>Indices & Commodities: 1:30</li>
                      <li>Crypto: 1:2</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-space font-orbitron">💻 Platforms</h4>
                <p className="text-white/80 font-inter">Clear Funded offers: MetaTrader 5, Tradelocker, Match-Trader</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-space mb-4 font-orbitron">Ready to Start Your Challenge?</h2>
            <button onClick={() => window.location.href = "/register"} className="moving-gradient text-white px-8 py-3 rounded-lg font-semibold transition-colors font-orbitron">
              Start Trading Challenge
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};
export default Rules;