
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export const TradingRulesSection = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Risk Management",
      description: "Maximum daily loss: 5% | Maximum total loss: 10%"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Profit Targets", 
      description: "Achievable profit targets with unlimited time to reach them"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "No Time Limits",
      description: "Trade at your own pace with unlimited trading periods"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "90% Profit Split",
      description: "Keep 90% of your profits with weekly payouts"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Professional Support", 
      description: "24/7 support team ready to help you succeed"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Benefits
          </h2>
          <p className="text-gray-600">
            Simple, transparent rules designed to help you succeed while managing risk effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.slice(0, 3).map((benefit, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {benefits.slice(3).map((benefit, index) => (
            <Card key={index + 3} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
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
