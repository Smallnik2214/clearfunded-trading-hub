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
    <div className="min-h-screen bg-gray-50">
      {/* Promo Banner */}
      <PromoBanner />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-40">
            <div className="cursor-pointer" onClick={() => window.location.href = "/"}>
              <img
                src="/lovable-uploads/ab62176f-dabc-4a42-85ae-f6c171796362.png"
                alt="Clear Funded"
                className="h-32 w-auto"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextElementSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'block';
                  }
                }}
              />
              <div className="hidden text-2xl font-bold">
                <span className="text-green-600">Clear</span>
                <span className="text-gray-900"> Funded</span>
              </div>
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <span className="text-green-600 font-medium">Challenge</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <span className="text-gray-600">Info</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <span className="text-gray-600">Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Challenge Details */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardContent className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Challenge Details</h1>

                {/* Challenge Type */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Challenge Type</h3>
                  <div className="flex gap-4">
                    <Button
                      variant={challengeType === "1-Phase" ? "default" : "outline"}
                      onClick={() => setChallengeType("1-Phase")}
                      className={challengeType === "1-Phase" ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      1-Phase
                    </Button>
                    <Button
                      variant={challengeType === "2-Phase" ? "default" : "outline"}
                      onClick={() => setChallengeType("2-Phase")}
                      className={challengeType === "2-Phase" ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      2-Phase
                    </Button>
                  </div>
                </div>

                {/* Trading Platform */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Trading Platform</h3>
                  <div className="flex gap-4">
                    {(["MT5", "TradeLocker", "cTrader"] as const).map((platformOption) => (
                      <Button
                        key={platformOption}
                        variant={platform === platformOption ? "default" : "outline"}
                        onClick={() => setPlatform(platformOption)}
                        className={platform === platformOption ? "bg-green-600 hover:bg-green-700" : ""}
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
                  <h3 className="text-lg font-semibold mb-4">Initial Balance</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {balanceOptions.map((option) => (
                      <Button
                        key={option.value}
                        variant={balance === option.value ? "default" : "outline"}
                        onClick={() => setBalance(option.value)}
                        className={balance === option.value ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Phase Information */}
                <div className="space-y-6">
                  {/* Phase 1 */}
                  <Card className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                        Phase 1
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span>Daily drawdown:</span>
                          <span className="font-semibold">4%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Target Profit:</span>
                          <span className="font-semibold">8% (${(parseInt(balance) * 0.08).toLocaleString()})</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Overall drawdown:</span>
                          <span className="font-semibold">8%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration (Days):</span>
                          <span className="font-semibold">Unlimited</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phase 2 (only for 2-Phase) */}
                  {challengeType === "2-Phase" && (
                    <Card className="bg-gray-50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                          Phase 2
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex justify-between">
                            <span>Daily drawdown:</span>
                            <span className="font-semibold">5%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Target Profit:</span>
                            <span className="font-semibold">5% (${(parseInt(balance) * 0.05).toLocaleString()})</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Overall drawdown:</span>
                            <span className="font-semibold">10%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Duration (Days):</span>
                            <span className="font-semibold">Unlimited</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Funded Account */}
                  <Card className="bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-green-700">Clear Funded Account</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span>Daily drawdown:</span>
                          <span className="font-semibold">4%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Revenue Share:</span>
                          <span className="font-semibold">90%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Overall drawdown:</span>
                          <span className="font-semibold">8%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Target Profit:</span>
                          <span className="font-semibold">-- (--)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Refund:</span>
                          <span className="font-semibold">100%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button
                  onClick={handleNext}
                  className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                >
                  Next
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-white sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Account Balance:</span>
                    <span className="font-semibold">${parseInt(balance).toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trading Platform:</span>
                    <span className="font-semibold flex items-center gap-1">
                      {platformIcons[platform]}
                      {platform}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Currency:</span>
                    <span className="font-semibold">USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Leverage:</span>
                    <span className="font-semibold">1:100</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="mb-4">
                    <Label htmlFor="promo" className="text-sm text-gray-600">
                      Have a discount code?
                    </Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="promo"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter Promo Code"
                        className="flex-1"
                      />
                      <Button variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                    {promoCode.toUpperCase() === "STAY CLEAR" && (
                      <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded text-sm text-green-700">
                        🎉 STAY CLEAR Special: 30% discount applied!
                      </div>
                    )}
                  </div>

                  {getDiscount() > 0 && (
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                      <span>Original Price:</span>
                      <span className="line-through">${pricing[challengeType][balance as keyof typeof pricing["1-Phase"]]}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-green-600">${getPrice()}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Taxes and fees included!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-green-600">Privacy Policy</a>
            <a href="#" className="hover:text-green-600">Terms and Conditions</a>
            <a href="#" className="hover:text-green-600">Refund Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChallengeDetails;
