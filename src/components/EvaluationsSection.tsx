import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, TrendingUp, CheckCircle, Target, Zap } from "lucide-react";
export const EvaluationsSection = () => {
  const evaluations = [{
    icon: <Star className="h-8 w-8 text-aurora-cyan" />,
    title: "Phase 1 Evaluation",
    description: "Achieve 10% profit target with proper risk management and trading discipline"
  }, {
    icon: <Award className="h-8 w-8 text-aurora-cyan" />,
    title: "Phase 2 Evaluation",
    description: "Demonstrate consistency with 5% profit target while maintaining risk parameters"
  }, {
    icon: <TrendingUp className="h-8 w-8 text-aurora-cyan" />,
    title: "Funded Account",
    description: "Trade with real capital and keep 90% of your profits with weekly payouts"
  }, {
    icon: <CheckCircle className="h-8 w-8 text-aurora-cyan" />,
    title: "No Time Pressure",
    description: "Take your time to reach targets - unlimited trading periods for all phases"
  }, {
    icon: <Target className="h-8 w-8 text-aurora-cyan" />,
    title: "Clear Objectives",
    description: "Transparent rules and achievable targets designed for trader success"
  }, {
    icon: <Zap className="h-8 w-8 text-aurora-cyan" />,
    title: "Fast Verification",
    description: "Quick evaluation process to get you funded and trading live accounts faster"
  }];
  return <section className="py-16 px-4 space-bg relative overflow-hidden">
      <div className="stars"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold text-space mb-4">
            Our Evaluations
          </h2>
          <p className="text-xl font-orbitron text-slate-100">
            Structured evaluation process designed to identify skilled traders and provide them with capital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {evaluations.slice(0, 3).map((evaluation, index) => <Card key={index} className="glass-card border-aurora-cyan/20 hover:border-aurora-cyan/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {evaluation.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold text-space mb-4">
                  {evaluation.title}
                </h3>
                <p className="text-evaluation font-inter text-base leading-relaxed drop-shadow-lg" style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
                  {evaluation.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {evaluations.slice(3).map((evaluation, index) => <Card key={index + 3} className="glass-card border-aurora-cyan/20 hover:border-aurora-cyan/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {evaluation.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold text-space mb-4">
                  {evaluation.title}
                </h3>
                <p className="text-evaluation font-inter text-base leading-relaxed drop-shadow-lg" style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
                  {evaluation.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};