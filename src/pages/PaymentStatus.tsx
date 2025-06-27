
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

  const isSuccess = status === "confirmed";
  const isFailed = status === "declined";

  return (
    <PageLayout showPromoBanner={false}>
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="glass-card border-white/20 max-w-md w-full mx-4">
          <CardContent className="p-8 text-center space-y-6">
            {/* Status Icon */}
            <div className="flex justify-center">
              {isSuccess ? (
                <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-400" />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center">
                  <XCircle className="w-12 h-12 text-red-400" />
                </div>
              )}
            </div>

            {/* Status Message */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-white font-orbitron">
                {isSuccess ? "Payment Successful!" : "Payment Failed"}
              </h1>
              <p className="text-white/70 font-orbitron">
                {isSuccess 
                  ? "Your payment has been confirmed and processed successfully."
                  : "Your payment could not be processed or was declined."
                }
              </p>
            </div>

            {/* Payment ID */}
            {paymentId && (
              <div className="glass-card border-white/20 p-4 rounded-lg">
                <p className="text-sm text-white/70 mb-1 font-orbitron">Payment ID</p>
                <p className="font-mono text-sm text-white break-all">{paymentId}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              {isSuccess ? (
                <Button 
                  onClick={() => window.location.href = "/dashboard"}
                  className="w-full moving-gradient text-white font-orbitron py-3"
                >
                  Go to Dashboard
                </Button>
              ) : (
                <>
                  <Button 
                    onClick={() => window.location.href = "/payment"}
                    className="w-full moving-gradient text-white font-orbitron py-3"
                  >
                    Try Again
                  </Button>
                  <Button 
                    onClick={() => {
                      // Open support chat or contact
                      if (window.$crisp) {
                        window.$crisp.push(["do", "chat:open"]);
                      }
                    }}
                    variant="outline"
                    className="w-full glass-card border-white/20 text-white hover:bg-white/10 font-orbitron py-3"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </>
              )}
            </div>

            {/* Additional Info */}
            <div className="text-xs text-white/50 font-orbitron">
              {isSuccess 
                ? "You will receive an email confirmation shortly."
                : "If you believe this is an error, please contact our support team."
              }
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default PaymentStatus;
