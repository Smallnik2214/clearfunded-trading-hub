
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="animate-[scroll_20s_linear_infinite]">
            {[...reviews, ...reviews].map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow h-full">
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
