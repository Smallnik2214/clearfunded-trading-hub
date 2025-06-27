
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle, Clock, Search, AlertCircle, Eye } from "lucide-react";
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
  const [filterStatus, setFilterStatus] = useState<"all" | "pending" | "confirmed" | "declined">("all");
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
    },
    {
      id: "PAY-1703124001-GHI789RST",
      amount: "299",
      currency: "BTC",
      status: "pending",
      walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      timestamp: "2024-12-27 15:45:33",
      customerEmail: "trader@example.com"
    },
    {
      id: "PAY-1703124250-JKL012MNO",
      amount: "799",
      currency: "USDT",
      status: "pending",
      walletAddress: "TQn9Y2khEsLJW1ChVWFMSMeRDow5oREqbu",
      timestamp: "2024-12-27 16:20:15",
      customerEmail: "premium@example.com"
    },
    {
      id: "PAY-1703124500-PQR345STU",
      amount: "199",
      currency: "ETH",
      status: "declined",
      walletAddress: "0xc40b2e7Fd07446cA09197d5732D3a55532a27C62",
      timestamp: "2024-12-27 12:10:08",
      customerEmail: "failed@example.com"
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
    
    // Simulate customer notification by opening the status page in a new tab
    const statusUrl = `/payment-status?status=${newStatus}&paymentId=${paymentId}`;
    window.open(statusUrl, '_blank');
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

  const filteredPayments = payments.filter(payment => 
    filterStatus === "all" || payment.status === filterStatus
  );

  const pendingPayments = payments.filter(p => p.status === "pending");
  const confirmedPayments = payments.filter(p => p.status === "confirmed");
  const declinedPayments = payments.filter(p => p.status === "declined");

  return (
    <PageLayout showPromoBanner={false}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-space font-orbitron text-center mb-2">
            Admin Control Panel
          </h1>
          <p className="text-white/70 text-center font-orbitron">
            Manage and process cryptocurrency payments
          </p>
        </div>

        {/* Payment Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass-card border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-white font-orbitron">{payments.length}</div>
              <div className="text-white/70 font-orbitron">Total Payments</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-400 font-orbitron">{pendingPayments.length}</div>
              <div className="text-white/70 font-orbitron">Pending</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-400 font-orbitron">{confirmedPayments.length}</div>
              <div className="text-white/70 font-orbitron">Confirmed</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-red-400 font-orbitron">{declinedPayments.length}</div>
              <div className="text-white/70 font-orbitron">Declined</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Payment Search */}
          <Card className="glass-card border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-space font-orbitron">Search Payment</CardTitle>
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

          {/* All Payments Table */}
          <Card className="glass-card border-white/20">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-bold text-space font-orbitron">All Payments</CardTitle>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setFilterStatus("all")}
                    variant={filterStatus === "all" ? "default" : "outline"}
                    className={filterStatus === "all" ? "moving-gradient text-white font-orbitron" : "glass-card border-white/20 text-white hover:bg-white/10 font-orbitron"}
                    size="sm"
                  >
                    All
                  </Button>
                  <Button
                    onClick={() => setFilterStatus("pending")}
                    variant={filterStatus === "pending" ? "default" : "outline"}
                    className={filterStatus === "pending" ? "moving-gradient text-white font-orbitron" : "glass-card border-white/20 text-white hover:bg-white/10 font-orbitron"}
                    size="sm"
                  >
                    Pending
                  </Button>
                  <Button
                    onClick={() => setFilterStatus("confirmed")}
                    variant={filterStatus === "confirmed" ? "default" : "outline"}
                    className={filterStatus === "confirmed" ? "moving-gradient text-white font-orbitron" : "glass-card border-white/20 text-white hover:bg-white/10 font-orbitron"}
                    size="sm"
                  >
                    Confirmed
                  </Button>
                  <Button
                    onClick={() => setFilterStatus("declined")}
                    variant={filterStatus === "declined" ? "default" : "outline"}
                    className={filterStatus === "declined" ? "moving-gradient text-white font-orbitron" : "glass-card border-white/20 text-white hover:bg-white/10 font-orbitron"}
                    size="sm"
                  >
                    Declined
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="glass-card border-white/20 rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/20">
                      <TableHead className="text-white/70 font-orbitron">Payment ID</TableHead>
                      <TableHead className="text-white/70 font-orbitron">Amount</TableHead>
                      <TableHead className="text-white/70 font-orbitron">Customer</TableHead>
                      <TableHead className="text-white/70 font-orbitron">Status</TableHead>
                      <TableHead className="text-white/70 font-orbitron">Timestamp</TableHead>
                      <TableHead className="text-white/70 font-orbitron">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayments.map((payment) => (
                      <TableRow key={payment.id} className="border-white/20 hover:bg-white/5">
                        <TableCell className="font-mono text-sm text-white">
                          {payment.id}
                        </TableCell>
                        <TableCell className="text-white font-orbitron">
                          ${payment.amount} {payment.currency}
                        </TableCell>
                        <TableCell className="text-white font-orbitron">
                          {payment.customerEmail}
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(payment.status)} text-xs font-orbitron`}>
                            {getStatusIcon(payment.status)}
                            <span className="ml-1 capitalize">{payment.status}</span>
                          </Badge>
                        </TableCell>
                        <TableCell className="text-white/70 font-orbitron text-sm">
                          {payment.timestamp}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {payment.status === "pending" ? (
                              <>
                                <Button
                                  size="sm"
                                  onClick={() => updatePaymentStatus(payment.id, "confirmed")}
                                  className="text-xs bg-green-600 hover:bg-green-700 text-white font-orbitron px-3 py-2"
                                >
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Accept
                                </Button>
                                <Button
                                  size="sm"
                                  onClick={() => updatePaymentStatus(payment.id, "declined")}
                                  className="text-xs bg-red-600 hover:bg-red-700 text-white font-orbitron px-3 py-2"
                                >
                                  <XCircle className="h-3 w-3 mr-1" />
                                  Decline
                                </Button>
                              </>
                            ) : (
                              <Button
                                size="sm"
                                onClick={() => setFoundPayment(payment)}
                                className="text-xs glass-card border-white/20 text-white hover:bg-white/10 font-orbitron px-3 py-2"
                              >
                                <Eye className="h-3 w-3 mr-1" />
                                View
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default AdminControl;
