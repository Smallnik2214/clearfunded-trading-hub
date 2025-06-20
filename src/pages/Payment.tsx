
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const Payment = () => {
  const [orderData, setOrderData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("USDT");
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "confirmed" | "failed">("pending");
  const [orderGenerated, setOrderGenerated] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // Wallet addresses for different cryptocurrencies
  const walletAddresses = {
    USDT: "TQn9Y2khEsLJW1ChVWFMSMeRDow5oREqbu",
    BTC: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    ETH: "0x742C4B9b75bB6B86B1Ca6cF74B0BbcE2B0B5a8a3",
    SOL: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgHU"
  };

  useEffect(() => {
    const savedOrder = localStorage.getItem("challengeOrder");
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    }
  }, []);

  const handleProceedPayment = () => {
    setOrderGenerated(true);
    setWalletAddress(walletAddresses[paymentMethod as keyof typeof walletAddresses]);
    toast.success("Payment order generated! Please send the exact amount to the wallet address.");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Address copied to clipboard!");
  };

  const getStatusIcon = () => {
    switch (paymentStatus) {
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "confirmed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "failed":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusText = () => {
    switch (paymentStatus) {
      case "pending":
        return "Waiting for payment...";
      case "confirmed":
        return "Payment confirmed!";
      case "failed":
        return "Payment failed or not received";
    }
  };

  const getStatusColor = () => {
    switch (paymentStatus) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "failed":
        return "bg-red-100 text-red-800";
    }
  };

  if (!orderData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-green-600">Clear Funded</div>
            
            {/* Progress Steps */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  ✓
                </div>
                <span className="text-green-600 font-medium">Challenge</span>
              </div>
              <div className="w-8 h-0.5 bg-green-600"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  ✓
                </div>
                <span className="text-green-600 font-medium">Info</span>
              </div>
              <div className="w-8 h-0.5 bg-green-600"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <span className="text-green-600 font-medium">Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-white shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">Payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!orderGenerated ? (
              <>
                {/* Payment Method Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USDT">USDT (Tether)</SelectItem>
                      <SelectItem value="BTC">BTC (Bitcoin)</SelectItem>
                      <SelectItem value="ETH">ETH (Ethereum)</SelectItem>
                      <SelectItem value="SOL">SOL (Solana)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Challenge Type:</span>
                      <span className="font-medium">{orderData.challengeType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Account Size:</span>
                      <span className="font-medium">${parseInt(orderData.balance).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform:</span>
                      <span className="font-medium">{orderData.platform}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total Amount:</span>
                        <span className="font-bold text-lg text-green-600">${orderData.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleProceedPayment}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                >
                  Proceed Payment
                </Button>
              </>
            ) : (
              <>
                {/* Payment Status */}
                <div className="text-center">
                  <Badge className={`${getStatusColor()} px-4 py-2 text-sm font-medium`}>
                    {getStatusIcon()}
                    <span className="ml-2">{getStatusText()}</span>
                  </Badge>
                </div>

                {/* Payment Details */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Payment Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Amount to Send
                      </label>
                      <div className="flex items-center justify-between bg-white p-3 rounded border">
                        <span className="font-bold text-lg">${orderData.price} USD</span>
                        <Badge variant="outline">{paymentMethod}</Badge>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Send to Wallet Address
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-white p-3 rounded border font-mono text-sm break-all">
                          {walletAddress}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(walletAddress)}
                          className="flex-shrink-0"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Network
                      </label>
                      <div className="bg-white p-3 rounded border">
                        {paymentMethod === "USDT" && "Tron (TRC20)"}
                        {paymentMethod === "BTC" && "Bitcoin Network"}
                        {paymentMethod === "ETH" && "Ethereum (ERC20)"}
                        {paymentMethod === "SOL" && "Solana Network"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Payment Instructions</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Send the exact amount to the wallet address above</li>
                    <li>• Use the correct network to avoid losing funds</li>
                    <li>• Payment will be confirmed within 10-30 minutes</li>
                    <li>• You'll receive an email confirmation once payment is processed</li>
                  </ul>
                </div>

                {/* Admin Controls (Demo) */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-3">Admin Controls (Demo)</h4>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setPaymentStatus("confirmed");
                        toast.success("Payment confirmed by admin!");
                        setTimeout(() => {
                          window.location.href = "/dashboard";
                        }, 2000);
                      }}
                      className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                    >
                      Confirm Payment
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setPaymentStatus("failed");
                        toast.error("Payment declined by admin");
                      }}
                      className="bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
                    >
                      Decline Payment
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Payment;
