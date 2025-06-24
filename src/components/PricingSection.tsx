
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const pricingData = {
    "1-Phase": [
      { size: "5000", price: 30 },
      { size: "10000", price: 45 },
      { size: "25000", price: 180 },
      { size: "50000", price: 285 },
      { size: "100000", price: 500 }
    ],
    "2-Phase": [
      { size: "5000", price: 25 },
      { size: "10000", price: 39 },
      { size: "25000", price: 170 },
      { size: "50000", price: 270 },
      { size: "100000", price: 480 }
    ]
  };

  return (
    <section className="py-16 px-4 space-bg relative overflow-hidden">
      <div className="stars"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold text-space mb-4">
            Challenge Pricing
          </h2>
          <p className="text-white/80 font-inter">
            Choose your challenge size and start your trading journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1-Phase Pricing */}
          <Card className="glass-card border-aurora-cyan/20 hover:border-aurora-cyan/40 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-orbitron font-bold text-space">1-Phase Challenge</CardTitle>
              <div className="flex justify-center">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-0 font-bold px-4 py-2 text-sm shadow-lg">
                  Most Popular
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {pricingData["1-Phase"].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 glass-card rounded-lg hover:border-aurora-cyan/40 border border-aurora-cyan/20 transition-all cursor-pointer hover:scale-105"
                  onClick={() => console.log(`Selected 1-Phase ${item.size}$ account`)}
                >
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-aurora-cyan" />
                    <span className="font-semibold text-white font-orbitron">{item.size}$ Account</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white font-orbitron">{item.price}$</div>
                  </div>
                </div>
              ))}
              <Button 
                className="w-full moving-gradient text-white font-bold py-3 text-lg font-orbitron border-0"
                onClick={() => window.location.href = "/register"}
              >
                Choose 1-Phase
              </Button>
            </CardContent>
          </Card>

          {/* 2-Phase Pricing */}
          <Card className="glass-card border-aurora-cyan/20 hover:border-aurora-cyan/40 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-orbitron font-bold text-space">2-Phase Challenge</CardTitle>
              <div className="flex justify-center">
                <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-black border-0 font-bold px-4 py-2 text-sm shadow-lg">
                  Best Value
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {pricingData["2-Phase"].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 glass-card rounded-lg hover:border-aurora-cyan/40 border border-aurora-cyan/20 transition-all cursor-pointer hover:scale-105"
                  onClick={() => console.log(`Selected 2-Phase ${item.size}$ account`)}
                >
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-aurora-cyan" />
                    <span className="font-semibold text-white font-orbitron">{item.size}$ Account</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white font-orbitron">{item.price}$</div>
                  </div>
                </div>
              ))}
              <Button 
                className="w-full moving-gradient text-white font-bold py-3 text-lg font-orbitron border-0"
                onClick={() => window.location.href = "/register"}
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
