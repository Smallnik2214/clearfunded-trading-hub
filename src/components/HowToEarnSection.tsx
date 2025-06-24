
import { Card, CardContent } from "@/components/ui/card";

export const HowToEarnSection = () => {
  const steps = [
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
  ];

  return (
    <section className="py-16 px-4 space-bg relative overflow-hidden">
      <div className="stars"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-space mb-4">
            How to Begin Earning
          </h2>
          <p className="text-lg text-white/80 font-orbitron font-light">
            From Signing Up to Scaling Your Profits with Clear Funded
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
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
      </div>
    </section>
  );
};
