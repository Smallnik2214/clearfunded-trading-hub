
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const ReviewsSection = () => {
  const reviews = [
    {
      name: "Marco Schmidt",
      country: "Germany",
      text: "Excellent platform with transparent rules. Got my payout within 24 hours!",
      rating: 5
    },
    {
      name: "Pierre Dubois",
      country: "France", 
      text: "Very professional service. The trading conditions are exactly as advertised.",
      rating: 5
    },
    {
      name: "Sofia Andersson",
      country: "Sweden",
      text: "Clear Funded lives up to its name - everything is crystal clear and fair.",
      rating: 5
    },
    {
      name: "Alessandro Rossi",
      country: "Italy",
      text: "Best prop firm I've worked with. Highly recommend to serious traders.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Traders Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=100&h=50&q=80"
              alt="PropFirmMatch"
              className="h-8"
            />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">4.6</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm">
                  "{review.text}"
                </p>
                <div className="border-t pt-3">
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.country}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
