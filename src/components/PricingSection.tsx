
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const pricingData = {
    "1-Phase": [
      { size: "5k", price: 23 },
      { size: "10k", price: 30 },
      { size: "25k", price: 125 },
      { size: "50k", price: 245 },
      { size: "100k", price: 400 }
    ],
    "2-Phase": [
      { size: "5k", price: 18 },
      { size: "10k", price: 30 },
      { size: "25k", price: 115 },
      { size: "50k", price: 230 },
      { size: "100k", price: 380 }
    ]
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Evaluations
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
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="font-semibold">${item.size} Account</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">${item.price}</div>
                  </div>
                </div>
              ))}
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => window.location.href = "/register"}
              >
                Choose 1-Phase
              </Button>
            </CardContent>
          </Card>

          {/* 2-Phase Pricing - Highlighted */}
          <Card className="bg-blue-50 border-blue-200 ring-2 ring-blue-400 shadow-lg transform scale-105">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-700">2-Phase Challenge</CardTitle>
              <div className="flex justify-center">
                <Badge className="bg-blue-600 text-white animate-pulse">Best Value</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {pricingData["2-Phase"].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold">${item.size} Account</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">${item.price}</div>
                  </div>
                </div>
              ))}
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-lg shadow-lg animate-pulse"
                onClick={() => window.location.href = "/register"}
              >
                Choose 2-Phase ⭐
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
