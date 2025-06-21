
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";

export const PricingSection = () => {
  const [selected1Phase, setSelected1Phase] = useState<string | null>(null);
  const [selected2Phase, setSelected2Phase] = useState<string | null>(null);

  const pricingData = {
    "1-Phase": [
      { size: "5k", originalPrice: 35, discountPrice: 23 },
      { size: "10k", originalPrice: 45, discountPrice: 30 },
      { size: "25k", originalPrice: 180, discountPrice: 125 },
      { size: "50k", originalPrice: 285, discountPrice: 245 },
      { size: "100k", originalPrice: 500, discountPrice: 400 }
    ],
    "2-Phase": [
      { size: "5k", originalPrice: 30, discountPrice: 18 },
      { size: "10k", originalPrice: 40, discountPrice: 30 },
      { size: "25k", originalPrice: 170, discountPrice: 115 },
      { size: "50k", originalPrice: 270, discountPrice: 230 },
      { size: "100k", originalPrice: 480, discountPrice: 380 }
    ]
  };

  const handleAccountSelect = (phase: "1-Phase" | "2-Phase", size: string) => {
    if (phase === "1-Phase") {
      setSelected1Phase(size);
    } else {
      setSelected2Phase(size);
    }
  };

  const handlePhaseChoose = (phase: "1-Phase" | "2-Phase") => {
    const selectedSize = phase === "1-Phase" ? selected1Phase : selected2Phase;
    if (selectedSize) {
      // Store the selection in localStorage for the registration page
      localStorage.setItem('selectedPhase', phase);
      localStorage.setItem('selectedSize', selectedSize);
      window.location.href = "/register";
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Challenge Pricing
          </h2>
          <p className="text-gray-600">
            Choose your challenge size and start your trading journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1-Phase Pricing */}
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-700">1-Phase Challenge</CardTitle>
              <div className="flex justify-center">
                <Badge className="bg-green-600 text-white">Most Popular</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {pricingData["1-Phase"].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selected1Phase === item.size 
                      ? "bg-green-100 border-2 border-green-500 shadow-md" 
                      : "bg-white hover:bg-green-50"
                  }`}
                  onClick={() => handleAccountSelect("1-Phase", item.size)}
                >
                  <div className="flex items-center gap-3">
                    <Check className={`h-5 w-5 ${selected1Phase === item.size ? "text-green-700" : "text-green-600"}`} />
                    <span className="font-semibold">${item.size} Account</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">${item.originalPrice}</div>
                    <div className="text-lg font-bold text-green-600">${item.discountPrice}</div>
                  </div>
                </div>
              ))}
              <Button 
                className={`w-full transition-all duration-200 ${
                  selected1Phase 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={() => handlePhaseChoose("1-Phase")}
                disabled={!selected1Phase}
              >
                Choose 1-Phase
              </Button>
            </CardContent>
          </Card>

          {/* 2-Phase Pricing */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-700">2-Phase Challenge</CardTitle>
              <div className="flex justify-center">
                <Badge className="bg-blue-600 text-white">Best Value</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {pricingData["2-Phase"].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selected2Phase === item.size 
                      ? "bg-blue-100 border-2 border-blue-500 shadow-md" 
                      : "bg-white hover:bg-blue-50"
                  }`}
                  onClick={() => handleAccountSelect("2-Phase", item.size)}
                >
                  <div className="flex items-center gap-3">
                    <Check className={`h-5 w-5 ${selected2Phase === item.size ? "text-blue-700" : "text-blue-600"}`} />
                    <span className="font-semibold">${item.size} Account</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">${item.originalPrice}</div>
                    <div className="text-lg font-bold text-blue-600">${item.discountPrice}</div>
                  </div>
                </div>
              ))}
              <Button 
                className={`w-full transition-all duration-200 ${
                  selected2Phase 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={() => handlePhaseChoose("2-Phase")}
                disabled={!selected2Phase}
              >
                Choose 2-Phase
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
