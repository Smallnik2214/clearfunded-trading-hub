
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, Search, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { PageLayout } from "@/components/PageLayout";

interface Payment {
  id: string;
  amount: string;
  currency: string;
  status: "pending" | "confirmed" | "declined";
  walletAddress: string;
  timestamp: string;
  customerEmail?: string;
}

const AdminControl = () => {
  const [searchId, setSearchId] = useState("");
  const [foundPayment, setFoundPayment] = useState<Payment | null>(null);
  const [payments, setPayments] = useState<Payment[]>([
    {
      id: "PAY-1703123456-ABC123XYZ",
      amount: "199",
      currency: "USDT",
      status: "pending",
      walletAddress: "TQn9Y2khEsLJW1ChVWFMSMeRDow5oREqbu",
      timestamp: "2024-12-27 14:30:22",
      customerEmail: "user@example.com"
    },
    {
      id: "PAY-1703123789-DEF456UVW",
      amount: "499",
      currency: "ETH",
      status: "confirmed",
      walletAddress: "0xc40b2e7Fd07446cA09197d5732D3a55532a27C62",
      timestamp: "2024-12-27 13:15:10",
      customerEmail: "customer@example.com"
    }
  ]);

  const searchPayment = () => {
    const payment = payments.find(p => p.id === searchId);
    if (payment) {
      setFoundPayment(payment);
      toast.success("Payment found!");
    } else {
      setFoundPayment(null);
      toast.error("Payment not found!");
    }
  };

  const updatePaymentStatus = (paymentId: string, newStatus: "confirmed" | "declined") => {
    setPayments(prev => prev.map(payment => 
      payment.id === paymentId 
        ? { ...payment, status: newStatus }
        : payment
    ));
    
    if (foundPayment && foundPayment.id === paymentId) {
      setFoundPayment({ ...foundPayment, status: newStatus });
    }

    toast.success(`Payment ${newStatus === "confirmed" ? "confirmed" : "declined"} successfully!`);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-400" />;
      case "confirmed":
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case "declined":
        return <XCircle className="h-4 w-4 text-red-400" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "confirmed":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "declined":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <PageLayout showPromoBanner={false}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-space font-orbitron text-center mb-2">
            Admin Control Panel
          </h1>
          <p className="text-white/70 text-center font-orbitron">
            Manage and process cryptocurrency payments
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Payment Search */}
          <Card className="glass-card border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-space font-orbitron">Search & Manage Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter Payment ID (e.g., PAY-1703123456-ABC123XYZ)"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="glass-card border-white/20 text-white font-orbitron"
                />
                <Button onClick={searchPayment} className="moving-gradient text-white font-orbitron">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </div>

              {foundPayment && (
                <div className="glass-card border-white/20 p-6 rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white font-orbitron text-xl">Payment Details</h3>
                    <Badge className={`${getStatusColor(foundPayment.status)} font-orbitron text-sm px-3 py-1`}>
                      {getStatusIcon(foundPayment.status)}
                      <span className="ml-2 capitalize">{foundPayment.status}</span>
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-1 font-orbitron">Payment ID</label>
                        <div className="glass-card border-white/20 p-3 rounded font-mono text-sm text-white break-all">
                          {foundPayment.id}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-1 font-orbitron">Amount</label>
                        <div className="glass-card border-white/20 p-3 rounded text-white font-orbitron">
                          ${foundPayment.amount} USD
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-1 font-orbitron">Currency</label>
                        <div className="glass-card border-white/20 p-3 rounded text-white font-orbitron">
                          {foundPayment.currency}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-1 font-orbitron">Timestamp</label>
                        <div className="glass-card border-white/20 p-3 rounded text-white font-orbitron">
                          {foundPayment.timestamp}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-1 font-orbitron">Customer Email</label>
                        <div className="glass-card border-white/20 p-3 rounded text-white font-orbitron">
                          {foundPayment.customerEmail || 'N/A'}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-1 font-orbitron">Wallet Address</label>
                        <div className="glass-card border-white/20 p-3 rounded font-mono text-xs text-white break-all">
                          {foundPayment.walletAddress}
                        </div>
                      </div>
                    </div>
                  </div>

                  {foundPayment.status === "pending" && (
                    <div className="flex gap-4 pt-4 border-t border-white/20">
                      <Button
                        onClick={() => updatePaymentStatus(foundPayment.id, "confirmed")}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-orbitron py-3 text-lg"
                      >
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Confirm Payment
                      </Button>
                      <Button
                        onClick={() => updatePaymentStatus(foundPayment.id, "declined")}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-orbitron py-3 text-lg"
                      >
                        <XCircle className="h-5 w-5 mr-2" />
                        Decline Payment
                      </Button>
                    </div>
                  )}

                  {foundPayment.status !== "pending" && (
                    <div className="pt-4 border-t border-white/20">
                      <div className="text-center text-white/70 font-orbitron">
                        Payment has been {foundPayment.status}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Payments */}
          <Card className="glass-card border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-space font-orbitron">Recent Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {payments.slice(0, 5).map((payment) => (
                  <div key={payment.id} className="glass-card border-white/20 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-sm text-white">{payment.id}</span>
                      <Badge className={`${getStatusColor(payment.status)} text-xs font-orbitron`}>
                        {getStatusIcon(payment.status)}
                        <span className="ml-1 capitalize">{payment.status}</span>
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-white/70 font-orbitron">${payment.amount} {payment.currency}</span>
                      <span className="text-white/70 font-orbitron">{payment.timestamp}</span>
                    </div>
                    {payment.status === "pending" && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => updatePaymentStatus(payment.id, "confirmed")}
                          className="text-xs bg-green-600 hover:bg-green-700 text-white font-orbitron px-3 py-2"
                        >
                          Confirm
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => updatePaymentStatus(payment.id, "declined")}
                          className="text-xs bg-red-600 hover:bg-red-700 text-white font-orbitron px-3 py-2"
                        >
                          Decline
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default AdminControl;
