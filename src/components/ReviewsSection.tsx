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
  }];
  return <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold text-space mb-4 ">They talk about us.</h2>
          <p className="text-xl text-gray-600 font-orbitron">
            We are proud of the feedback from our customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
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
    </section>;
};