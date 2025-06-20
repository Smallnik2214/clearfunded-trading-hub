
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const PersonalInfo = () => {
  const [orderData, setOrderData] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "Ukraine",
    region: "",
    phone: "",
    countryCode: "+380"
  });

  useEffect(() => {
    const savedOrder = localStorage.getItem("challengeOrder");
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    }
  }, []);

  const countries = [
    "Ukraine", "United States", "United Kingdom", "Germany", "France", "Italy", 
    "Spain", "Netherlands", "Poland", "Russia", "Canada", "Australia"
  ];

  const countryCodes = [
    { code: "+380", country: "UA", flag: "🇺🇦" },
    { code: "+1", country: "US", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+49", country: "DE", flag: "🇩🇪" },
    { code: "+33", country: "FR", flag: "🇫🇷" },
    { code: "+39", country: "IT", flag: "🇮🇹" }
  ];

  const handleBack = () => {
    window.location.href = "/challenge-details";
  };

  const handleNext = () => {
    if (!formData.firstName || !formData.lastName || !formData.address) {
      toast.error("Please fill in all required fields");
      return;
    }

    const updatedOrder = {
      ...orderData,
      personalInfo: formData
    };
    
    localStorage.setItem("challengeOrder", JSON.stringify(updatedOrder));
    window.location.href = "/payment";
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
                  2
                </div>
                <span className="text-green-600 font-medium">Info</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <span className="text-gray-600">Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Information */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardContent className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Personal Information</h1>

                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        placeholder="First name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        placeholder="Last name"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      placeholder="Address"
                      className="mt-1"
                    />
                  </div>

                  {/* City and ZIP */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                        placeholder="City"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP code</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleChange("zipCode", e.target.value)}
                        placeholder="ZIP code"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <Label htmlFor="country">Country of Residence</Label>
                    <Select value={formData.country} onValueChange={(value) => handleChange("country", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Region and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="region">Region</Label>
                      <Select value={formData.region} onValueChange={(value) => handleChange("region", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kyiv">Kyiv</SelectItem>
                          <SelectItem value="lviv">Lviv</SelectItem>
                          <SelectItem value="kharkiv">Kharkiv</SelectItem>
                          <SelectItem value="odesa">Odesa</SelectItem>
                          <SelectItem value="dnipro">Dnipro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <div className="flex gap-2 mt-1">
                        <Select value={formData.countryCode} onValueChange={(value) => handleChange("countryCode", value)}>
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {countryCodes.map((item) => (
                              <SelectItem key={item.code} value={item.code}>
                                {item.flag} {item.code}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="Phone number"
                          className="flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-white sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Account Balance:</span>
                    <span className="font-semibold">${parseInt(orderData.balance).toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trading Platform:</span>
                    <span className="font-semibold">{orderData.platform}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Currency:</span>
                    <span className="font-semibold">USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Leverage:</span>
                    <span className="font-semibold">1:100</span>
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="mb-4">
                    <Label className="text-sm text-gray-600">
                      Have a discount code?
                    </Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        placeholder="Enter Promo Code"
                        className="flex-1"
                      />
                      <Button variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-green-600">${orderData.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Taxes and fees included!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-green-600">Privacy Policy</a>
            <a href="#" className="hover:text-green-600">Terms and Conditions</a>
            <a href="#" className="hover:text-green-600">Refund Policy</a>
            <a href="#" className="hover:text-green-600">Cookie Policy</a>
            <a href="#" className="hover:text-green-600">Support</a>
          </div>
          <div className="text-center text-sm text-gray-500 mt-2">
            ©2023 All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalInfo;
