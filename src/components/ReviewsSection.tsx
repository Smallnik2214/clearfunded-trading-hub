import { Card, CardContent } from "@/components/ui/card";
export const ReviewsSection = () => {
  const reviews = [{
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Clear Funded helped me become a profitable trader. The rules are transparent and the support team is amazing!",
    profit: "$12,540"
  }, {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Best prop firm I've worked with. Fair rules, quick payouts, and excellent customer service.",
    profit: "$8,220"
  }, {
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "The evaluation process was smooth and the funded account gives me the capital I need to scale my trading.",
    profit: "$15,890"
  }, {
    name: "James Thompson",
    location: "London, UK",
    rating: 5,
    text: "Outstanding platform with realistic trading conditions. I've been consistently profitable for 6 months now.",
    profit: "$9,750"
  }, {
    name: "Alex Petrov",
    location: "Moscow, Russia",
    rating: 5,
    text: "Clear Funded changed my trading career. Professional support and fair profit splits make all the difference.",
    profit: "$18,300"
  }, {
    name: "Lisa Wang",
    location: "Hong Kong",
    rating: 5,
    text: "Amazing experience from evaluation to funding. The team is responsive and the platform is reliable.",
    profit: "$11,445"
  }, {
    name: "Carlos Silva",
    location: "São Paulo, Brazil",
    rating: 5,
    text: "Finally found a prop firm that actually pays. Quick withdrawals and transparent rules throughout.",
    profit: "$7,890"
  }, {
    name: "Ahmed Hassan",
    location: "Dubai, UAE",
    rating: 5,
    text: "Professional service and excellent trading conditions. I recommend Clear Funded to all serious traders.",
    profit: "$13,670"
  }, {
    name: "Sophie Martin",
    location: "Paris, France",
    rating: 5,
    text: "The evaluation was challenging but fair. Now I'm funded and making consistent profits every month.",
    profit: "$10,220"
  }, {
    name: "David Kim",
    location: "Seoul, South Korea",
    rating: 5,
    text: "Excellent risk management tools and clear guidelines. This is what a professional prop firm should be.",
    profit: "$16,500"
  }];
  return <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold text-space mb-4">They talk about us.</h2>
          <p className="text-xl text-gray-600 font-orbitron">
            We are proud of the feedback from our customers
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-[scroll-reviews_80s_linear_infinite] gap-6">
            {[...reviews, ...reviews, ...reviews].map((review, index) => <Card key={index} className="hover:shadow-lg transition-shadow flex-shrink-0 w-80">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => <span key={i}>⭐</span>)}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-900">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                      <div className="text-right">
                        
                        
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-reviews {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>;
};