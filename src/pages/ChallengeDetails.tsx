
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, HelpCircle, Monitor, TrendingUp, BarChart3 } from "lucide-react";
import { PromoBanner } from "@/components/PromoBanner";

const ChallengeDetails = () => {
  const [challengeType, setChallengeType] = useState<"1-Phase" | "2-Phase">("1-Phase");
  const [platform, setPlatform] = useState<"MT5" | "TradeLocker" | "cTrader">("MT5");
  const [balance, setBalance] = useState<string>("5000");
  const [promoCode, setPromoCode] = useState("STAY CLEAR");

  const balanceOptions = [
    { value: "5000", label: "$5,000.00" },
    { value: "10000", label: "$10,000.00" },
    { value: "25000", label: "$25,000.00" },
    { value: "50000", label: "$50,000.00" },
    { value: "100000", label: "$100,000.00" }
  ];

  const pricing = {
    "1-Phase": {
      "5000": 30,
      "10000": 45,
      "25000": 180,
      "50000": 285,
      "100000": 500
    },
    "2-Phase": {
      "5000": 25,
      "10000": 39,
      "25000": 170,
      "50000": 270,
      "100000": 480
    }
  };

  const getPrice = () => {
    const basePrice = pricing[challengeType][balance as keyof typeof pricing["1-Phase"]] || 0;
    // Apply 30% discount for STAY CLEAR promo code (auto-applied)
    if (promoCode.toUpperCase() === "STAY CLEAR") {
      return Math.round(basePrice * 0.7);
    }
    return basePrice;
  };

  const getDiscount = () => {
    if (promoCode.toUpperCase() === "STAY CLEAR") {
      return 30;
    }
    return 0;
  };

  const platformIcons = {
    "MT5": <Monitor className="h-5 w-5" />,
    "TradeLocker": <TrendingUp className="h-5 w-5" />,
    "cTrader": <BarChart3 className="h-5 w-5" />
  };

  const handleNext = () => {
    const orderData = {
      challengeType,
      platform,
      balance,
      price: getPrice(),
      promoCode
    };
    
    console.log("Challenge details:", orderData);
    localStorage.setItem("challengeOrder", JSON.stringify(orderData));
    window.location.href = "/personal-info";
  };

  return (
    <div className="min-h-screen space-bg">
      <div className="stars"></div>
      
      {/* Promo Banner */}
      <PromoBanner />
      
      {/* Header */}
      <div className="glass-card border-white/20 border-b backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="cursor-pointer" onClick={() => window.location.href = "/"}>
              <h1 className="text-2xl font-orbitron font-bold text-space">
                CLEAR FUNDED
              </h1>
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 moving-gradient text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <span className="text-space font-medium font-orbitron">Challenge</span>
              </div>
              <div className="w-8 h-0.5 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 text-white/60 rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <span className="text-white/60 font-orbitron">Info</span>
              </div>
              <div className="w-8 h-0.5 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 text-white/60 rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <span className="text-white/60 font-orbitron">Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Challenge Details */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-white/20">
              <CardContent className="p-8">
                <h1 className="text-3xl font-bold text-space mb-8 font-orbitron">Challenge Details</h1>

                {/* Challenge Type */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-white font-orbitron">Challenge Type</h3>
                  <div className="flex gap-4">
                    <Button
                      variant={challengeType === "1-Phase" ? "default" : "outline"}
                      onClick={() => setChallengeType("1-Phase")}
                      className={challengeType === "1-Phase" 
                        ? "moving-gradient text-white font-orbitron font-semibold hover:scale-105 transition-transform duration-300" 
                        : "space-button text-white font-orbitron hover:scale-105 transition-transform duration-300"
                      }
                    >
                      1-Phase
                    </Button>
                    <Button
                      variant={challengeType === "2-Phase" ? "default" : "outline"}
                      onClick={() => setChallengeType("2-Phase")}
                      className={challengeType === "2-Phase" 
                        ? "moving-gradient text-white font-orbitron font-semibold hover:scale-105 transition-transform duration-300" 
                        : "space-button text-white font-orbitron hover:scale-105 transition-transform duration-300"
                      }
                    >
                      2-Phase
                    </Button>
                  </div>
                </div>

                {/* Trading Platform */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-white font-orbitron">Trading Platform</h3>
                  <div className="flex gap-4">
                    {(["MT5", "TradeLocker", "cTrader"] as const).map((platformOption) => (
                      <Button
                        key={platformOption}
                        variant={platform === platformOption ? "default" : "outline"}
                        onClick={() => setPlatform(platformOption)}
                        className={platform === platformOption 
                          ? "moving-gradient text-white font-orbitron font-semibold hover:scale-105 transition-transform duration-300" 
                          : "space-button text-white font-orbitron hover:scale-105 transition-transform duration-300"
                        }
                      >
                        <span className="flex items-center gap-2">
                          {platformIcons[platformOption]}
                          {platformOption}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Initial Balance */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-white font-orbitron">Initial Balance</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {balanceOptions.map((option) => (
                      <Button
                        key={option.value}
                        variant={balance === option.value ? "default" : "outline"}
                        onClick={() => setBalance(option.value)}
                        className={balance === option.value 
                          ? "moving-gradient text-white font-orbitron font-semibold hover:scale-105 transition-transform duration-300" 
                          : "space-button text-white font-orbitron hover:scale-105 transition-transform duration-300"
                        }
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Phase Information */}
                <div className="space-y-6">
                  {/* Phase 1 */}
                  <Card className="glass-card border-white/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white font-orbitron">
                        <span className="w-6 h-6 moving-gradient text-white rounded-full flex items-center justify-center text-sm">1</span>
                        Phase 1
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between text-white/80">
                          <span>Daily drawdown:</span>
                          <span className="font-semibold text-space">4%</span>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Target Profit:</span>
                          <span className="font-semibold text-space">8% (${(parseInt(balance) * 0.08).toLocaleString()})</span>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Overall drawdown:</span>
                          <span className="font-semibold text-space">8%</span>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Duration (Days):</span>
                          <span className="font-semibold text-space">Unlimited</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phase 2 (only for 2-Phase) */}
                  {challengeType === "2-Phase" && (
                    <Card className="glass-card border-white/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-white font-orbitron">
                          <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                          Phase 2
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex justify-between text-white/80">
                            <span>Daily drawdown:</span>
                            <span className="font-semibold text-space">5%</span>
                          </div>
                          <div className="flex justify-between text-white/80">
                            <span>Target Profit:</span>
                            <span className="font-semibold text-space">5% (${(parseInt(balance) * 0.05).toLocaleString()})</span>
                          </div>
                          <div className="flex justify-between text-white/80">
                            <span>Overall drawdown:</span>
                            <span className="font-semibold text-space">10%</span>
                          </div>
                          <div className="flex justify-between text-white/80">
                            <span>Duration (Days):</span>
                            <span className="font-semibold text-space">Unlimited</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Funded Account */}
                  <Card className="glass-card border-green-500/30 bg-green-500/10">
                    <CardHeader>
                      <CardTitle className="text-evaluation font-orbitron">Clear Funded Account</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between text-white/80">
                          <span>Daily drawdown:</span>
                          <span className="font-semibold text-space">4%</span>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Revenue Share:</span>
                          <span className="font-semibold text-space">90%</span>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Overall drawdown:</span>
                          <span className="font-semibold text-space">8%</span>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Target Profit:</span>
                          <span className="font-semibold text-white/60">-- (--)</span>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Refund:</span>
                          <span className="font-semibold text-space">100%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button
                  onClick={handleNext}
                  className="w-full mt-8 moving-gradient text-white py-3 text-lg font-orbitron font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Next
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-white/20 sticky top-4">
              <CardHeader>
                <CardTitle className="text-space font-orbitron">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-white/80">
                    <span>Account Balance:</span>
                    <span className="font-semibold text-space">${parseInt(balance).toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Trading Platform:</span>
                    <span className="font-semibold flex items-center gap-1 text-space">
                      {platformIcons[platform]}
                      {platform}
                    </span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Currency:</span>
                    <span className="font-semibold text-space">USD</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Leverage:</span>
                    <span className="font-semibold text-space">1:100</span>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <div className="mb-4">
                    <Label htmlFor="promo" className="text-sm text-white/60 font-orbitron">
                      Have a discount code?
                    </Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="promo"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter Promo Code"
                        className="flex-1 glass-card border-white/20 text-white placeholder:text-white/50 font-orbitron"
                      />
                      <Button variant="outline" size="sm" className="space-button text-white font-orbitron">
                        Apply
                      </Button>
                    </div>
                    {promoCode.toUpperCase() === "STAY CLEAR" && (
                      <div className="mt-2 p-2 glass-card border-green-500/30 bg-green-500/10 rounded text-sm text-evaluation font-orbitron">
                        🎉 STAY CLEAR Special: 30% discount applied!
                      </div>
                    )}
                  </div>

                  {getDiscount() > 0 && (
                    <div className="flex justify-between items-center text-sm text-white/60 mb-2">
                      <span>Original Price:</span>
                      <span className="line-through">${pricing[challengeType][balance as keyof typeof pricing["1-Phase"]]}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-white font-orbitron">Total</span>
                    <span className="text-space font-orbitron">${getPrice()}</span>
                  </div>
                  <p className="text-xs text-white/50 mt-1 font-orbitron">Taxes and fees included!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="glass-card border-white/20 border-t mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-space transition-colors font-orbitron">Privacy Policy</a>
            <a href="#" className="hover:text-space transition-colors font-orbitron">Terms and Conditions</a>
            <a href="#" className="hover:text-space transition-colors font-orbitron">Refund Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChallengeDetails;
