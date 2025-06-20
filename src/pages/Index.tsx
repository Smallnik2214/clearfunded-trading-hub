
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { ReviewsSection } from "@/components/ReviewsSection";
import { PricingSection } from "@/components/PricingSection";
import { TradingRulesSection } from "@/components/TradingRulesSection";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [selectedPhase, setSelectedPhase] = useState<"1-Phase" | "2-Phase">("1-Phase");
  const [selectedPrice, setSelectedPrice] = useState("5k");

  const challengeData = {
    "1-Phase": {
      "Trading period": "Unlimited",
      "Profit target": "10%",
      "Maximum daily loss": "5%",
      "Maximum loss": "10%",
      "Account leverage": "1:100",
      "Rewards": "Weekly",
      "Profit Split": "90%"
    },
    "2-Phase": {
      "Trading period": "Unlimited", 
      "Profit target": "10%",
      "Maximum daily loss": "5%",
      "Maximum loss": "10%",
      "Account leverage": "1:100",
      "Rewards": "Weekly",
      "Profit Split": "90%"
    },
    "Funded": {
      "Trading period": "Unlimited",
      "Profit target": "-",
      "Maximum daily loss": "5%",
      "Maximum loss": "10%",
      "Account leverage": "1:100",
      "Rewards": "Weekly",
      "Profit Split": "90%"
    }
  };

  const priceOptions = ["5k", "10k", "25k", "50k", "100k"];

  const getPriceForPhase = (phase: "1-Phase" | "2-Phase", size: string) => {
    const pricing = {
      "1-Phase": {
        "5k": 23,
        "10k": 30,
        "25k": 125,
        "50k": 245,
        "100k": 400
      },
      "2-Phase": {
        "5k": 18,
        "10k": 30,
        "25k": 115,
        "50k": 230,
        "100k": 380
      }
    };
    return pricing[phase][size as keyof typeof pricing[typeof phase]];
  };

  const getOriginalPrice = (phase: "1-Phase" | "2-Phase", size: string) => {
    const originalPricing = {
      "1-Phase": {
        "5k": 35,
        "10k": 45,
        "25k": 180,
        "50k": 285,
        "100k": 500
      },
      "2-Phase": {
        "5k": 30,
        "10k": 40,
        "25k": 170,
        "50k": 270,
        "100k": 480
      }
    };
    return originalPricing[phase][size as keyof typeof originalPricing[typeof phase]];
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Clear Funded
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12">
            Clear rules. Real growth.
          </p>
          
          {/* Challenge Selection */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant={selectedPhase === "1-Phase" ? "default" : "outline"}
                onClick={() => setSelectedPhase("1-Phase")}
                className={selectedPhase === "1-Phase" ? "bg-green-600 hover:bg-green-700 text-white" : ""}
              >
                1-Phase
              </Button>
              <Button
                variant={selectedPhase === "2-Phase" ? "default" : "outline"}
                onClick={() => setSelectedPhase("2-Phase")}
                className={selectedPhase === "2-Phase" ? "bg-green-600 hover:bg-green-700 text-white" : ""}
              >
                2-Phase
              </Button>
            </div>

            {/* Price Selection */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {priceOptions.map((price) => (
                <Button
                  key={price}
                  variant={selectedPrice === price ? "default" : "outline"}
                  onClick={() => setSelectedPrice(price)}
                  className={selectedPrice === price ? "bg-green-600 hover:bg-green-700 text-white" : ""}
                >
                  ${price}
                </Button>
              ))}
            </div>

            {/* Challenge Table */}
            <Card className="bg-white/95 backdrop-blur shadow-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Selected Phase Column */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 text-green-600">{selectedPhase}</h3>
                    {Object.entries(challengeData[selectedPhase]).map(([key, value]) => (
                      <div key={key} className="py-2 border-b border-gray-100 last:border-b-0">
                        <div className="text-sm text-gray-600">{key}</div>
                        <div className="font-semibold">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Funded Column */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 text-green-600">Funded</h3>
                    {Object.entries(challengeData.Funded).map(([key, value]) => (
                      <div key={key} className="py-2 border-b border-gray-100 last:border-b-0">
                        <div className="text-sm text-gray-600">{key}</div>
                        <div className="font-semibold">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="text-center flex flex-col justify-center">
                    <div className="mb-6">
                      <Badge className="bg-green-100 text-green-800 mb-2">Special Offer</Badge>
                      <div className="text-2xl font-bold text-gray-900">
                        ${getPriceForPhase(selectedPhase, selectedPrice)}
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        ${getOriginalPrice(selectedPhase, selectedPrice)}
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.location.href = "/register"}
                    >
                      Start Trading
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <PricingSection />
      <TradingRulesSection />
    </div>
  );
};

export default Index;
