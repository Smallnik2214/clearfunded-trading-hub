
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
      name: "Ezequiel Ignacio Yannelli",
      country: "Argentina",
      text: "From the beginning, everything worked out great!",
      rating: 5,
      avatar: "EY",
      verified: true
    },
    {
      name: "tsoomm",
      country: "Mongolia", 
      text: "fast and reliable service",
      rating: 5,
      avatar: "TS",
      verified: false
    },
    {
      name: "Zahra Masood",
      country: "Pakistan",
      text: "This firm is. Greatest of all time",
      rating: 5,
      avatar: "ZM",
      verified: false
    },
    {
      name: "Samyk Jain",
      country: "India",
      text: "Nice customer care support and great firm Tbh.",
      rating: 5,
      avatar: "SJ",
      verified: false
    },
    {
      name: "Noah Leemans",
      country: "Belgium",
      text: "best support from Umar please give him a pay raise",
      rating: 5,
      avatar: "NL",
      verified: false
    },
    {
      name: "Mima Jane Nadeak",
      country: "Indonesia",
      text: "The best prop firm out there! Payout was super fast everything sorted out within 24 hours. Kyc processing was swift, discord community is helpful, customer service always ready to serve you 24/7.",
      rating: 5,
      avatar: "MJ",
      verified: false
    },
    {
      name: "shampa sutradhar",
      country: "Bangladesh",
      text: "It is really a trustworthy and reliable company. I think it is very rare to find such an honest trading company, along with best available technology.",
      rating: 5,
      avatar: "SS",
      verified: false
    },
    {
      name: "m. yigit demirci",
      country: "Turkey",
      text: "experience and spreads are great so far, customer service may be a little slow at times due to queue's; lets see if they will pay they will tho, giant propfirm",
      rating: 5,
      avatar: "MY",
      verified: false
    },
    {
      name: "Huseyin",
      country: "Turkey",
      text: "Best Spreads. Average rules. Good contact.",
      rating: 5,
      avatar: "H",
      verified: true
    },
    {
      name: "TWT",
      country: "Lithuania",
      text: "super! Very good prop firm 👌",
      rating: 5,
      avatar: "TW",
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
          <div className="flex animate-[scroll_30s_linear_infinite] gap-6">
            {[...reviews, ...reviews].map((review, index) => (
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
    </section>
  );
};
