
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export const TradingRulesSection = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-aurora-cyan" />,
      title: "Risk Management",
      description: "Maximum daily loss: 5% | Maximum total loss: 10%"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-aurora-cyan" />,
      title: "Profit Targets", 
      description: "Achievable profit targets with unlimited time to reach them"
    },
    {
      icon: <Clock className="h-8 w-8 text-aurora-cyan" />,
      title: "No Time Limits",
      description: "Trade at your own pace with unlimited trading periods"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-aurora-cyan" />,
      title: "90% Profit Split",
      description: "Keep 90% of your profits with weekly payouts"
    },
    {
      icon: <Users className="h-8 w-8 text-aurora-cyan" />,
      title: "Professional Support", 
      description: "24/7 support team ready to help you succeed"
    }
  ];

  return (
    <section className="py-16 px-4 aurora-bg relative overflow-hidden">
      <div className="stars"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold text-aurora mb-4">
            Our Benefits
          </h2>
          <p className="text-white/80 font-inter">
            Simple, transparent rules designed to help you succeed while managing risk effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.slice(0, 3).map((benefit, index) => (
            <Card key={index} className="glass-card border-aurora-cyan/20 hover:border-aurora-cyan/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold text-aurora mb-4">
                  {benefit.title}
                </h3>
                <p className="text-space font-inter text-base leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {benefits.slice(3).map((benefit, index) => (
            <Card key={index + 3} className="glass-card border-aurora-cyan/20 hover:border-aurora-cyan/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold text-aurora mb-4">
                  {benefit.title}
                </h3>
                <p className="text-space font-inter text-base leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
