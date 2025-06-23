
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
import { CertificatesSection } from "@/components/CertificatesSection";
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

  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <Header />
      
      {/* Modern Hero Section with Trading Chart Background */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 px-4 py-20">
        {/* Trading Chart Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')`
          }}
        />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Logo and Tagline */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <img
                src="https://i.postimg.cc/vmMv1GHf/Clear-Funded-logo-540x540-custom-green.png"
                alt="Clear Funded Logo"
                className="h-16 md:h-32 w-auto mx-auto"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Clear<span className="text-green-600">Funded</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Clear rules. Real growth.
            </p>
          </div>

          {/* Phase Selection */}
          <div className="flex justify-center gap-2 mb-8">
            <Button
              variant={selectedPhase === "1-Phase" ? "default" : "outline"}
              onClick={() => setSelectedPhase("1-Phase")}
              className={`px-8 py-3 text-lg font-semibold rounded-full transition-all ${
                selectedPhase === "1-Phase" 
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-lg" 
                  : "bg-white border-2 border-gray-300 text-gray-700 hover:border-green-600"
              }`}
            >
              1-Phase
            </Button>
            <Button
              variant={selectedPhase === "2-Phase" ? "default" : "outline"}
              onClick={() => setSelectedPhase("2-Phase")}
              className={`px-8 py-3 text-lg font-semibold rounded-full transition-all ${
                selectedPhase === "2-Phase" 
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-lg" 
                  : "bg-white border-2 border-gray-300 text-gray-700 hover:border-green-600"
              }`}
            >
              2-Phase
            </Button>
          </div>

          {/* Price Selection */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {priceOptions.map((price) => (
              <Button
                key={price}
                variant={selectedPrice === price ? "default" : "outline"}
                onClick={() => setSelectedPrice(price)}
                className={`px-6 py-2 font-semibold rounded-full transition-all ${
                  selectedPrice === price 
                    ? "bg-green-600 hover:bg-green-700 text-white shadow-md" 
                    : "bg-white border border-gray-300 text-gray-700 hover:border-green-600 hover:bg-green-50"
                }`}
              >
                ${price}
              </Button>
            ))}
          </div>

          {/* Modern Comparison Card */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Selected Phase Column */}
                  <div className="p-8 border-r border-gray-100">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-green-600 mb-2">{selectedPhase}</h3>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(challengeData[selectedPhase]).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2">
                          <span className="text-sm text-gray-600 font-medium">{key}</span>
                          <span className="font-bold text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Funded Column */}
                  <div className="p-8 border-r border-gray-100">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-green-600 mb-2">Funded</h3>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(challengeData.Funded).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2">
                          <span className="text-sm text-gray-600 font-medium">{key}</span>
                          <span className="font-bold text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Column */}
                  <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col justify-center items-center">
                    <Badge className="bg-green-600 text-white mb-4 px-4 py-2 text-sm font-semibold">
                      Special Offer
                    </Badge>
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-gray-900 mb-2">
                        ${getPriceForPhase(selectedPhase, selectedPrice)}
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
                      onClick={() => window.location.href = "/auth"}
                    >
                      Start Trading
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TradingRulesSection />
      <PricingSection />
      <CertificatesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
