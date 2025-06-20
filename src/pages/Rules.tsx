
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, DollarSign, Clock } from "lucide-react";

const Rules = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Trading Rules</h1>
            <p className="text-xl text-gray-600">
              Clear, transparent rules designed for your success
            </p>
          </div>

          {/* Challenge Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600">1-Phase</Badge>
                  <CardTitle>Single Phase Challenge</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Profit Target:</span>
                  <span className="font-semibold">10%</span>
                </div>
                <div className="flex justify-between">
                  <span>Maximum Daily Loss:</span>
                  <span className="font-semibold text-red-600">5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Maximum Total Loss:</span>
                  <span className="font-semibold text-red-600">10%</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Limit:</span>
                  <span className="font-semibold text-green-600">Unlimited</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600">2-Phase</Badge>
                  <CardTitle>Two Phase Challenge</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-blue-600">Phase 1:</div>
                  <div className="flex justify-between text-sm">
                    <span>Profit Target:</span>
                    <span>10%</span>
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mt-2">Phase 2:</div>
                  <div className="flex justify-between text-sm">
                    <span>Proof of Consistency:</span>
                    <span>5%</span>
                  </div>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span>Max Daily Loss:</span>
                    <span className="font-semibold text-red-600">5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Max Total Loss:</span>
                    <span className="font-semibold text-red-600">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Rules */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-red-700">Risk Management Rules</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Daily Drawdown (5%)</h4>
                    <p className="text-gray-600 text-sm">
                      You cannot lose more than 5% of your initial balance in a single trading day. This limit resets at 00:00 GMT.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Maximum Drawdown (10%)</h4>
                    <p className="text-gray-600 text-sm">
                      Your account equity cannot fall below 90% of the initial account balance at any time during the challenge.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-green-700">Trading Guidelines</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Allowed Trading Styles</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Scalping (with minimum 3-second hold time)</li>
                      <li>• Day trading</li>
                      <li>• Swing trading</li>
                      <li>• Position trading</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Leverage</h4>
                    <p className="text-gray-600 text-sm">
                      Maximum leverage of 1:100 is available on all major currency pairs, indices, and commodities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-green-700">Profit Split & Payouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Profit Share</h4>
                    <p className="text-gray-600 text-sm">
                      Keep 90% of all profits you generate. We take only 10% as our fee.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Payout Frequency</h4>
                    <p className="text-gray-600 text-sm">
                      Weekly payouts every Friday for funded accounts with minimum $100 profit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-blue-700">Time Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Trading Period</h4>
                    <p className="text-gray-600 text-sm">
                      Unlimited time to complete your challenge. Trade at your own pace without pressure.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Minimum Trading Days</h4>
                    <p className="text-gray-600 text-sm">
                      Minimum 10 trading days required to pass the challenge and demonstrate consistency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
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
    </div>
  );
};

export default Rules;
