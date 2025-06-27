
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle, XCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageLayout } from "@/components/PageLayout";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "pending";
  const paymentId = searchParams.get("paymentId") || "";

  const isSuccess = status === "confirmed" || status === "success";
  const isFailed = status === "declined" || status === "failed";

  const openLiveChat = () => {
    // Open Tawk.to live chat
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    } else {
      // Fallback to show a message if Tawk.to is not loaded
      console.log("Live chat is loading...");
    }
  };

  return (
    <PageLayout showPromoBanner={false}>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-space-dark via-space to-space-dark">
        {/* Full Screen Success/Failure Display */}
        <div className="text-center space-y-8">
          {/* Large Status Icon */}
          <div className="flex justify-center">
            {isSuccess ? (
              <div className="w-48 h-48 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                <CheckCircle className="w-32 h-32 text-green-400" />
              </div>
            ) : (
              <div className="w-48 h-48 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
                <XCircle className="w-32 h-32 text-red-400" />
              </div>
            )}
          </div>

          {/* Status Message */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white font-orbitron">
              {isSuccess ? "Payment Successful!" : "Payment Failed"}
            </h1>
            <p className="text-2xl text-white/70 font-orbitron max-w-2xl mx-auto">
              {isSuccess 
                ? "Your payment has been confirmed and processed successfully. Welcome to Match-Trader!"
                : "Your payment could not be processed. Please contact our support team for assistance."
              }
            </p>
          </div>

          {/* Payment ID */}
          {paymentId && (
            <Card className="glass-card border-white/20 max-w-md mx-auto">
              <CardContent className="p-6">
                <p className="text-sm text-white/70 mb-2 font-orbitron">Payment ID</p>
                <p className="font-mono text-lg text-white break-all">{paymentId}</p>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col items-center space-y-4">
            {isSuccess ? (
              <Button 
                onClick={() => window.location.href = "/dashboard"}
                className="moving-gradient text-white font-orbitron py-4 px-8 text-xl hover:scale-105 transition-transform duration-300"
                size="lg"
              >
                Go to Dashboard
              </Button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = "/payment"}
                  className="moving-gradient text-white font-orbitron py-4 px-8 text-xl hover:scale-105 transition-transform duration-300"
                  size="lg"
                >
                  Try Again
                </Button>
                <Button 
                  onClick={openLiveChat}
                  variant="outline"
                  className="glass-card border-white/20 text-white hover:bg-white/10 font-orbitron py-4 px-8 text-xl hover:scale-105 transition-transform duration-300"
                  size="lg"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Contact Support
                </Button>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="text-lg text-white/50 font-orbitron max-w-xl mx-auto">
            {isSuccess 
              ? "You will receive an email confirmation shortly with your account details."
              : "Our support team is available 24/7 to help resolve any payment issues."
            }
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PaymentStatus;
