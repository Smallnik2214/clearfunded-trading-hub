
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export const TradingRulesSection = () => {
  const rules = [
    {
      icon: Shield,
      title: "Risk Management",
      description: "Maximum daily loss: 5% | Maximum total loss: 10%"
    },
    {
      icon: TrendingUp,
      title: "Profit Targets",
      description: "Achievable profit targets with unlimited time to reach them"
    },
    {
      icon: Clock,
      title: "No Time Limits",
      description: "Trade at your own pace with unlimited trading periods"
    },
    {
      icon: DollarSign,
      title: "90% Profit Split",
      description: "Keep 90% of your profits with weekly payouts"
    },
    {
      icon: Users,
      title: "Professional Support",
      description: "24/7 support team ready to help you succeed"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Core Trading Rules
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple, transparent rules designed to help you succeed while managing risk effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {rules.slice(0, 3).map((rule, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <rule.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">{rule.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{rule.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {rules.slice(3).map((rule, index) => (
            <Card key={index + 3} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <rule.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">{rule.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{rule.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
