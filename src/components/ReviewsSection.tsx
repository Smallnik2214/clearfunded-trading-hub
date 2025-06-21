import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const ReviewsSection = () => {
  const reviews = [
    {
      name: "Michael Thompson",
      country: "United States",
      text: "Excellent service and fast payouts. The support team is very responsive and helpful.",
      rating: 5,
      avatar: "MT",
      verified: true
    },
    {
      name: "Sarah Johnson",
      country: "Canada",
      text: "Best prop firm I've worked with. Clear rules and fair profit splits.",
      rating: 5,
      avatar: "SJ",
      verified: true
    },
    {
      name: "David Wilson",
      country: "United Kingdom",
      text: "Professional platform with great trading conditions. Highly recommended!",
      rating: 5,
      avatar: "DW",
      verified: false
    },
    {
      name: "Emma Davis",
      country: "Australia",
      text: "Fast verification process and excellent customer support. Very satisfied!",
      rating: 5,
      avatar: "ED",
      verified: true
    },
    {
      name: "Carlos Rodriguez",
      country: "Spain",
      text: "Great spreads and reliable platform. The challenge rules are very clear.",
      rating: 5,
      avatar: "CR",
      verified: false
    },
    {
      name: "Lisa Chen",
      country: "Singapore",
      text: "Outstanding prop firm with competitive pricing. Payment was processed quickly.",
      rating: 5,
      avatar: "LC",
      verified: true
    },
    {
      name: "Ahmed Hassan",
      country: "UAE",
      text: "Professional service and transparent rules. The trading environment is excellent.",
      rating: 5,
      avatar: "AH",
      verified: false
    },
    {
      name: "Sophie Martin",
      country: "France",
      text: "Impressed with the platform's reliability and the support team's expertise.",
      rating: 5,
      avatar: "SM",
      verified: true
    },
    {
      name: "John Smith",
      country: "Germany",
      text: "Clear Funded provides excellent trading conditions and fair profit sharing.",
      rating: 5,
      avatar: "JS",
      verified: false
    },
    {
      name: "Maria Garcia",
      country: "Mexico",
      text: "Very professional firm with great customer service. Highly recommend to all traders.",
      rating: 5,
      avatar: "MG",
      verified: true
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We are proud of the feedback from our customers
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <img
              src="/lovable-uploads/c33029af-8028-41c8-8565-35b941304e5f.png"
              alt="Trustpilot Rating"
              className="h-8"
            />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">4.8</span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-[scroll-left_40s_linear_infinite] gap-6">
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-80">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 flex items-center gap-2">
                        {review.name}
                        {review.verified && (
                          <span className="text-green-600 text-xs">✓ Verified</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">{review.country}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};
