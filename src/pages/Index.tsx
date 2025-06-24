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
import { HowToEarnSection } from "@/components/HowToEarnSection";
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
          <p className="text-xl md:text-3xl text-white/90 mb-8 font-orbitron font-light">
            Clear rules. Real growth. <span className="text-space">Infinite possibilities.</span>
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-16 font-orbitron font-light">
            Unleash your full trader potential.
          </p>
          
          {/* How to Begin Earning Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-space mb-4">
                How to Begin Earning
              </h2>
              <p className="text-lg text-white/80 font-orbitron font-light">
                From Signing Up to Scaling Your Profits with Clear Funded
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  number: "1",
                  title: "Create Your Account",
                  description: "Register with Clear Funded and select the evaluation model that matches your trading approach — choose from our 1-Phase or 2-Phase challenges to get started.",
                  icon: "👤"
                },
                {
                  number: "2", 
                  title: "Prove Your Skills",
                  description: "Demonstrate your ability to trade responsibly by meeting profit goals while respecting risk parameters. Show us you can stay consistent and in control.",
                  icon: "📊"
                },
                {
                  number: "3",
                  title: "Unlock Payouts", 
                  description: "Once you pass the challenge, receive a funded account and begin earning. Get paid up to 90% of your profits, with payout requests available in as little as 8 days.",
                  icon: "💰"
                },
                {
                  number: "4",
                  title: "Grow Your Account",
                  description: "As you trade consistently and meet objectives, you'll have the opportunity to scale your funded account and boost your earnings with Clear Funded's growth path.",
                  icon: "📈"
                }
              ].map((step, index) => (
                <Card key={index} className="glass-card border-white/20 hover:border-space/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full moving-gradient flex items-center justify-center text-white font-orbitron font-bold text-xl">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-orbitron font-bold text-space mb-3">
                          {step.number}. {step.title}
                        </h3>
                        <p className="text-white/80 font-orbitron font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="text-2xl opacity-20">
                        {step.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="moving-gradient text-white py-8 px-12 text-xl font-orbitron font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 whitespace-nowrap"
                onClick={() => window.location.href = "/auth"}
              >
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
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
