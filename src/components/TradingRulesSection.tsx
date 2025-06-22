
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TradingRulesSection = () => {
  const feedback = [
    {
      name: "Alex Johnson",
      role: "Professional Trader",
      text: "Clear Funded has transformed my trading career. The rules are transparent and the payouts are always on time.",
      rating: 5,
      avatar: "AJ"
    },
    {
      name: "Maria Santos",
      role: "Day Trader",
      text: "The best prop firm I've worked with. Great support team and excellent trading conditions.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Robert Chen",
      role: "Forex Trader",
      text: "Finally found a prop firm that keeps their promises. Highly recommend Clear Funded to serious traders.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Sarah Williams",
      role: "Swing Trader",
      text: "The challenge process was smooth and the funded account exceeded my expectations.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "David Brown",
      role: "Scalp Trader",
      text: "Incredible platform with fair rules. The 90% profit split is unmatched in the industry.",
      rating: 5,
      avatar: "DB"
    },
    {
      name: "Lisa Martinez",
      role: "Options Trader",
      text: "Clear Funded provides the perfect environment for consistent profitable trading.",
      rating: 5,
      avatar: "LM"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Traders Say
          </h2>
          <p className="text-gray-600">
            Real feedback from successful traders who have grown their careers with Clear Funded
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedback.map((item, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="mb-4">
                  <Quote className="h-6 w-6 text-green-600 mb-2" />
                  <p className="text-gray-700 italic">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
                    {item.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.role}
                    </div>
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
