import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, CreditCard } from "lucide-react";
export const PayoutsInfoSection = () => {
  return <section className="py-16 px-4 space-bg relative overflow-hidden">
      <div className="stars"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-space mb-4">
            Clear Funded | Payouts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Generous Profit Split */}
          <Card className="glass-card border-space/30 hover:border-space/50 transition-all duration-300 hover:scale-105 p-8">
            <CardContent className="p-0">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full moving-gradient flex items-center justify-center mb-4">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-space mb-4">
                  Generous Profit Split
                </h3>
                <p className="text-white/80 font-orbitron font-light leading-relaxed">Maximize your earnings! We start you at a 90% profit split, allowing you to grow to a 90% share as your consistent trading performance is recognized, ensuring you keep more of what you earn</p>
              </div>
            </CardContent>
          </Card>

          {/* Flexibility in Payouts */}
          <Card className="glass-card border-space/30 hover:border-space/50 transition-all duration-300 hover:scale-105 p-8">
            <CardContent className="p-0">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full moving-gradient flex items-center justify-center mb-4">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-space mb-4">
                  Flexibility in Payouts
                </h3>
                <p className="text-white/80 font-orbitron font-light leading-relaxed">
                  Choose the payout method that suits you best. Whether you prefer traditional 
                  bank transfers or the convenience of cryptocurrencies, we've got you covered.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};