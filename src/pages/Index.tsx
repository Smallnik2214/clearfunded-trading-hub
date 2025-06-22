
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
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
      "Maximum daily loss": "4%",
      "Maximum loss": "8%",
      "Account leverage": "1:100",
      "Rewards": "Weekly",
      "Profit Split": "90%"
    },
    "2-Phase": {
      "Trading period": "Unlimited", 
      "Profit target": "8% / 5%",
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
        "5k": 30,
        "10k": 45,
        "25k": 180,
        "50k": 285,
        "100k": 500
      },
      "2-Phase": {
        "5k": 25,
        "10k": 39,
        "25k": 170,
        "50k": 270,
        "100k": 480
      }
    };
    return pricing[phase][size as keyof typeof pricing[typeof phase]];
  };

  const getOriginalPrice = (phase: "1-Phase" | "2-Phase", size: string) => {
    const originalPricing = {
      "1-Phase": {
        "5k": 30,
        "10k": 45,
        "25k": 180,
        "50k": 285,
        "100k": 500
      },
      "2-Phase": {
        "5k": 25,
        "10k": 39,
        "25k": 170,
        "50k": 270,
        "100k": 480
      }
    };
    return originalPricing[phase][size as keyof typeof originalPricing[typeof phase]];
  };

  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-4">
            <span className="text-green-600"></span> 
            <img
              src="https://i.postimg.cc/CxSPWCTj/Chat-GPT-Image-Jun-22-2025-12-56-52-PM.png"
              alt="Clear Funded Logo"
              className="h-24 md:h-24 w-auto"
            />
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
                      <Badge className="bg-green-100 text-green-800 mb-4 text-lg px-4 py-2">Special Offer</Badge>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        ${getPriceForPhase(selectedPhase, selectedPrice)}
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white py-4 px-8 text-xl font-bold shadow-lg transform hover:scale-105 transition-all"
                      onClick={() => window.location.href = "/register"}
                    >
                      Start Trading
                      <ArrowRight className="ml-2 h-6 w-6" />
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
      <Footer />
    </div>
  );
};

export default Index;
