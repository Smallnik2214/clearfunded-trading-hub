import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle, Clock, AlertCircle, CreditCard, Wallet, QrCode } from "lucide-react";
import { toast } from "sonner";
import { PageLayout } from "@/components/PageLayout";

const Payment = () => {
  const [orderData, setOrderData] = useState<any>(null);
  const [paymentType, setPaymentType] = useState<"card" | "crypto" | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("USDT");
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "confirmed" | "failed">("pending");
  const [orderGenerated, setOrderGenerated] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  // Wallet addresses for different cryptocurrencies
  const walletAddresses = {
    USDT: "TLXsC9ZbC44kbAJa6roMxDZGurL3ULf6Pr",
    "USDC-TRC20": "TLXsC9ZbC44kbAJa6roMxDZGurL3ULf6Pr",
    BTC: "bc1qtga7dv6tf0zmhx38wg9gcfdjvhls6xpp360uuj",
    ETH: "0xc40b2e7Fd07446cA09197d5732D3a55532a27C62",
    SOL: "7xKXtg2CW87d97TXRuJosgHU",
    "USDT-ETH": "0xc40b2e7Fd07446cA09197d5732D3a55532a27C62",
    "USDC-ETH": "0xc40b2e7Fd07446cA09197d5732D3a55532a27C62",
    BNB: "0xc40b2e7Fd07446cA09197d5732D3a55532a27C62",
    POL: "0xc40b2e7Fd07446cA09197d5732D3a55532a27C62"
  };

  // Network information for each cryptocurrency
  const networkInfo = {
    USDT: "Tron (TRC20)",
    "USDC-TRC20": "Tron (TRC20)",
    BTC: "Bitcoin Network",
    ETH: "Ethereum (ERC20)",
    SOL: "Solana Network",
    "USDT-ETH": "Ethereum (ERC20)",
    "USDC-ETH": "Ethereum (ERC20)",
    BNB: "Binance Smart Chain (BEP20)",
    POL: "Polygon Network"
  };

  useEffect(() => {
    const savedOrder = localStorage.getItem("challengeOrder");
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    }
  }, []);

  // Timer countdown effect
  useEffect(() => {
    if (orderGenerated && paymentStatus === "pending" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            setPaymentStatus("failed");
            toast.error("Payment time expired");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [orderGenerated, paymentStatus, timeLeft]);

  const generatePaymentId = () => {
    return 'PAY-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleProceedPayment = () => {
    const newPaymentId = generatePaymentId();
    setPaymentId(newPaymentId);
    setOrderGenerated(true);
    setWalletAddress(walletAddresses[paymentMethod as keyof typeof walletAddresses]);
    setTimeLeft(30 * 60); // Reset timer to 30 minutes
    toast.success("Payment order generated! Please send the exact amount to the wallet address.");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Address copied to clipboard!");
  };

  const generateQRCode = (address: string) => {
    // Using a public QR code API
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(address)}`;
  };

  const getStatusIcon = () => {
    switch (paymentStatus) {
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-400" />;
      case "confirmed":
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case "failed":
        return <AlertCircle className="h-5 w-5 text-red-400" />;
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
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "confirmed":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "failed":
        return "bg-red-500/20 text-red-300 border-red-500/30";
    }
  };

  if (!orderData) {
    return <PageLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-white font-orbitron text-xl">Loading...</div>
        </div>
      </PageLayout>;
  }

  return <PageLayout showPromoBanner={false}>
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 moving-gradient text-white rounded-full flex items-center justify-center text-sm font-bold font-orbitron">
                ✓
              </div>
              <span className="text-space font-orbitron font-medium">Challenge</span>
            </div>
            <div className="w-12 h-1 moving-gradient rounded"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 moving-gradient text-white rounded-full flex items-center justify-center text-sm font-bold font-orbitron">
                ✓
              </div>
              <span className="text-space font-orbitron font-medium">Info</span>
            </div>
            <div className="w-12 h-1 moving-gradient rounded"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 moving-gradient text-white rounded-full flex items-center justify-center text-sm font-bold font-orbitron">
                3
              </div>
              <span className="text-space font-orbitron font-medium">Payment</span>
            </div>
          </div>
        </div>

        <Card className="glass-card border-white/20 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-space font-orbitron">Payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!paymentType ? <>
                {/* Payment Type Selection */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6 font-orbitron text-center">Choose Payment Method</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Card Payment Option */}
                    <div className="glass-card border-white/20 p-6 rounded-lg opacity-60">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <CreditCard className="h-12 w-12 text-white/50" />
                        <h4 className="text-lg font-semibold text-white/70 font-orbitron">Card Payment</h4>
                        <p className="text-sm text-red-300 font-orbitron">Currently unavailable for your country</p>
                        <Button disabled className="w-full glass-card border-white/20 text-white/50 cursor-not-allowed font-orbitron">
                          Unavailable
                        </Button>
                      </div>
                    </div>

                    {/* Crypto Payment Option */}
                    <div className="glass-card border-white/20 p-6 rounded-lg hover:border-white/40 transition-colors">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <Wallet className="h-12 w-12 text-space" />
                        <h4 className="text-lg font-semibold text-white font-orbitron">Crypto Payment</h4>
                        <p className="text-sm text-white/70 font-orbitron">Pay with cryptocurrency</p>
                        <Button onClick={() => setPaymentType("crypto")} className="w-full moving-gradient text-white font-semibold font-orbitron hover:scale-105 transition-transform duration-300">Pay with Crypto</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </> : !orderGenerated ? <>
                {/* Payment Method Selection */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2 font-orbitron">
                    Cryptocurrency
                  </label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger className="glass-card border-white/20 text-white font-orbitron">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-white/20">
                      <SelectItem value="USDT" className="text-white font-orbitron">USDT (Tether - TRC20)</SelectItem>
                      <SelectItem value="USDC-TRC20" className="text-white font-orbitron">USDC (Tron - TRC20)</SelectItem>
                      <SelectItem value="USDT-ETH" className="text-white font-orbitron">USDT (Ethereum - ERC20)</SelectItem>
                      <SelectItem value="USDC-ETH" className="text-white font-orbitron">USDC (Ethereum - ERC20)</SelectItem>
                      <SelectItem value="ETH" className="text-white font-orbitron">ETH (Ethereum)</SelectItem>
                      <SelectItem value="BNB" className="text-white font-orbitron">BNB (Binance Smart Chain)</SelectItem>
                      <SelectItem value="POL" className="text-white font-orbitron">POL (Polygon)</SelectItem>
                      <SelectItem value="BTC" className="text-white font-orbitron">BTC (Bitcoin)</SelectItem>
                      <SelectItem value="SOL" className="text-white font-orbitron">SOL (Solana)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Order Summary */}
                <div className="glass-card border-white/20 p-6 rounded-lg">
                  <h3 className="font-semibold text-white mb-4 font-orbitron text-lg">Order Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70 font-orbitron">Challenge Type:</span>
                      <span className="font-medium text-white font-orbitron">{orderData.challengeType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70 font-orbitron">Account Size:</span>
                      <span className="font-medium text-white font-orbitron">${parseInt(orderData.balance).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70 font-orbitron">Platform:</span>
                      <span className="font-medium text-white font-orbitron">{orderData.platform}</span>
                    </div>
                    <div className="border-t border-white/20 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-white font-orbitron">Total Amount:</span>
                        <span className="font-bold text-xl text-space font-orbitron">${orderData.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button onClick={handleProceedPayment} className="w-full moving-gradient text-white py-6 text-lg font-semibold font-orbitron hover:scale-105 transition-transform duration-300">
                  Proceed Payment
                </Button>

                <Button onClick={() => setPaymentType(null)} variant="outline" className="w-full glass-card border-white/20 text-white hover:bg-white/10 font-orbitron">
                  Back to Payment Methods
                </Button>
              </> : <>
                {/* Payment Status with Timer */}
                <div className="text-center space-y-3">
                  <Badge className={`${getStatusColor()} px-4 py-2 text-sm font-medium font-orbitron`}>
                    {getStatusIcon()}
                    <span className="ml-2">{getStatusText()}</span>
                  </Badge>
                  {paymentStatus === "pending" && <div className="glass-card border-orange-400/30 p-3 rounded-lg bg-orange-500/10">
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="h-5 w-5 text-orange-300" />
                        <span className="text-orange-300 font-orbitron font-semibold">
                          Time remaining: {formatTime(timeLeft)}
                        </span>
                      </div>
                    </div>}
                </div>

                {/* Payment ID */}
                <div className="glass-card border-white/20 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-white/70 mb-2 font-orbitron">
                    Payment ID
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 glass-card border-white/20 p-3 rounded font-mono text-sm text-white">
                      {paymentId}
                    </div>
                    <Button variant="outline" size="sm" onClick={() => copyToClipboard(paymentId)} className="flex-shrink-0 glass-card border-white/20 text-white hover:bg-white/10">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="glass-card border-white/20 p-6 rounded-lg">
                  <h3 className="font-semibold text-white mb-4 font-orbitron text-lg">Payment Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2 font-orbitron">
                        Amount to Send
                      </label>
                      <div className="flex items-center justify-between glass-card border-white/20 p-4 rounded">
                        <span className="font-bold text-xl text-space font-orbitron">${orderData.price} USD</span>
                        <Badge variant="outline" className="border-white/20 text-white font-orbitron">{paymentMethod}</Badge>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2 font-orbitron">
                        Send to Wallet Address
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 glass-card border-white/20 p-3 rounded font-mono text-sm break-all text-white">
                          {walletAddress}
                        </div>
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard(walletAddress)} className="flex-shrink-0 glass-card border-white/20 text-white hover:bg-white/10">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* QR Code - Always Visible */}
                    <div className="glass-card border-white/20 p-4 rounded-lg text-center">
                      <label className="block text-sm font-medium text-white/70 mb-3 font-orbitron">
                        QR Code
                      </label>
                      <div className="flex justify-center">
                        <img src={generateQRCode(walletAddress)} alt="Wallet Address QR Code" className="border border-white/20 rounded-lg bg-white p-2" />
                      </div>
                      <p className="text-xs text-white/60 mt-2 font-orbitron">Scan to copy wallet address</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2 font-orbitron">
                        Network
                      </label>
                      <div className="glass-card border-white/20 p-3 rounded text-white font-orbitron">
                        {networkInfo[paymentMethod as keyof typeof networkInfo]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="glass-card border-blue-400/30 p-4 rounded-lg bg-blue-500/10">
                  <h4 className="font-semibold text-blue-300 mb-2 font-orbitron">Payment Instructions</h4>
                  <ul className="text-sm text-blue-200 space-y-1 font-orbitron">
                    <li>• Send the exact amount to the wallet address above</li>
                    <li>• Use the correct network to avoid losing funds</li>
                    <li>• Payment will be confirmed within 10-30 minutes</li>
                    <li>• You'll receive an email confirmation once payment is processed</li>
                    <li>• Keep your Payment ID for reference</li>
                  </ul>
                </div>

                
              </>}
          </CardContent>
        </Card>
      </div>
    </PageLayout>;
};

export default Payment;
