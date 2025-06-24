
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
import { EvaluationsSection } from "@/components/EvaluationsSection";
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
      
      {/* Hero Section with Space Background */}
      <section className="relative space-bg py-20 px-4 min-h-screen flex items-center pt-20">
        <div className="stars"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-space mb-6">
            CLEAR FUNDED
          </h1>
          
          <p className="text-xl md:text-3xl text-white/90 mb-16 font-inter font-light">
            Clear rules. Real growth. <span className="text-space">Infinite possibilities.</span>
          </p>
          
          {/* Challenge Selection */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant={selectedPhase === "1-Phase" ? "default" : "outline"}
                onClick={() => setSelectedPhase("1-Phase")}
                className={selectedPhase === "1-Phase" 
                  ? "space-button text-white font-orbitron font-semibold px-8 py-4 text-lg" 
                  : "glass-card text-white border-white/30 hover:border-white/50 font-orbitron font-semibold px-8 py-4 text-lg"}
              >
                <span className="moving-gradient-text">Choose 1-Phase</span>
              </Button>
              <Button
                variant={selectedPhase === "2-Phase" ? "default" : "outline"}
                onClick={() => setSelectedPhase("2-Phase")}
                className={selectedPhase === "2-Phase" 
                  ? "space-button text-white font-orbitron font-semibold px-8 py-4 text-lg" 
                  : "glass-card text-white border-white/30 hover:border-white/50 font-orbitron font-semibold px-8 py-4 text-lg"}
              >
                <span className="moving-gradient-text">Choose 2-Phase</span>
              </Button>
            </div>

            {/* Price Selection */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {priceOptions.map((price) => (
                <Button
                  key={price}
                  variant={selectedPrice === price ? "default" : "outline"}
                  onClick={() => setSelectedPrice(price)}
                  className={selectedPrice === price 
                    ? "space-button text-white font-inter font-medium px-6 py-3" 
                    : "glass-card text-white border-white/30 hover:border-white/50 font-inter font-medium px-6 py-3"}
                >
                  ${price}
                </Button>
              ))}
            </div>

            {/* Challenge Table */}
            <Card className="glass-card border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Selected Phase Column */}
                  <div className="text-center">
                    <h3 className="text-2xl font-orbitron font-bold mb-6 text-space">{selectedPhase}</h3>
                    {Object.entries(challengeData[selectedPhase]).map(([key, value]) => (
                      <div key={key} className="py-3 border-b border-white/10 last:border-b-0">
                        <div className="text-sm text-white/70 font-inter mb-1">{key}</div>
                        <div className="font-semibold text-white font-inter text-lg">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Funded Column */}
                  <div className="text-center">
                    <h3 className="text-2xl font-orbitron font-bold mb-6 text-space">Funded Account</h3>
                    {Object.entries(challengeData.Funded).map(([key, value]) => (
                      <div key={key} className="py-3 border-b border-white/10 last:border-b-0">
                        <div className="text-sm text-white/70 font-inter mb-1">{key}</div>
                        <div className="font-semibold text-white font-inter text-lg">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="text-center flex flex-col justify-center">
                    <div className="mb-8">
                      <Badge className="glass-card border-white/30 text-space text-lg px-6 py-3 mb-6 font-orbitron font-semibold">
                        Limited Time Offer
                      </Badge>
                      <div className="text-5xl font-orbitron font-bold text-white mb-2">
                        ${getPriceForPhase(selectedPhase, selectedPrice)}
                      </div>
                      <div className="text-white/70 font-inter">Get started today</div>
                    </div>
                    <Button
                      size="lg"
                      className="moving-gradient text-white py-6 px-12 text-xl font-orbitron font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 whitespace-nowrap"
                      onClick={() => window.location.href = "/auth"}
                    >
                      Begin Your Journey
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TradingRulesSection />
      <EvaluationsSection />
      <PricingSection />
      <CertificatesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
