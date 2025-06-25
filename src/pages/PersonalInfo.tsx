import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { countries } from "@/data/countries";
import { countryCodes } from "@/data/countryCodes";
import { getRegionsForCountry } from "@/utils/regionUtils";
const PersonalInfo = () => {
  const [orderData, setOrderData] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    region: "",
    phone: "",
    countryCode: "+380"
  });
  const [availableRegions, setAvailableRegions] = useState<string[]>([]);
  useEffect(() => {
    const savedOrder = localStorage.getItem("challengeOrder");
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    }
  }, []);
  useEffect(() => {
    if (formData.country) {
      const regions = getRegionsForCountry(formData.country);
      setAvailableRegions(regions);
      // Reset region when country changes
      if (formData.region && !regions.includes(formData.region)) {
        setFormData(prev => ({
          ...prev,
          region: ""
        }));
      }
    } else {
      setAvailableRegions([]);
    }
  }, [formData.country]);
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
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  if (!orderData) {
    return <div>Loading...</div>;
  }
  return <div className="min-h-screen space-bg">
      <div className="stars"></div>
      
      {/* Header */}
      <div className="glass-card border-white/20 border-b backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="cursor-pointer" onClick={() => window.location.href = "/"}>
              <h1 className="text-2xl font-orbitron font-bold text-space">
                CLEAR FUNDED
              </h1>
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 moving-gradient text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  ✓
                </div>
                <span className="text-space font-medium font-orbitron">Challenge</span>
              </div>
              <div className="w-8 h-0.5 bg-space"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 moving-gradient text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <span className="text-space font-medium font-orbitron">Info</span>
              </div>
              <div className="w-8 h-0.5 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 text-white/60 rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <span className="text-white/60 font-orbitron">Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Information */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-white/20">
              <CardContent className="p-8">
                <h1 className="text-3xl font-bold text-space mb-8 font-orbitron">Personal Information</h1>

                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-white font-orbitron">First name</Label>
                      <Input id="firstName" value={formData.firstName} onChange={e => handleChange("firstName", e.target.value)} placeholder="First name" className="mt-1 glass-card border-white/20 text-white placeholder:text-white/50 font-orbitron" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white font-orbitron">Last name</Label>
                      <Input id="lastName" value={formData.lastName} onChange={e => handleChange("lastName", e.target.value)} placeholder="Last name" className="mt-1 glass-card border-white/20 text-white placeholder:text-white/50 font-orbitron" />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <Label htmlFor="address" className="text-white font-orbitron">Address</Label>
                    <Input id="address" value={formData.address} onChange={e => handleChange("address", e.target.value)} placeholder="Address" className="mt-1 glass-card border-white/20 text-white placeholder:text-white/50 font-orbitron" />
                  </div>

                  {/* City and ZIP */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-white font-orbitron">City</Label>
                      <Input id="city" value={formData.city} onChange={e => handleChange("city", e.target.value)} placeholder="City" className="mt-1 glass-card border-white/20 text-white placeholder:text-white/50 font-orbitron" />
                    </div>
                    <div>
                      <Label htmlFor="zipCode" className="text-white font-orbitron">ZIP code</Label>
                      <Input id="zipCode" value={formData.zipCode} onChange={e => handleChange("zipCode", e.target.value)} placeholder="ZIP code" className="mt-1 glass-card border-white/20 text-white placeholder:text-white/50 font-orbitron" />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <Label htmlFor="country" className="text-white font-orbitron">Country of Residence</Label>
                    <Select value={formData.country} onValueChange={value => handleChange("country", value)}>
                      <SelectTrigger className="mt-1 glass-card border-white/20 text-white font-orbitron">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent className="max-h-96 bg-gray-900 border border-white/20 shadow-lg z-50">
                        {countries.map(country => <SelectItem key={country} value={country} className="text-white hover:bg-white/10">
                            {country}
                          </SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Region and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="region" className="text-white font-orbitron">Region</Label>
                      <Select value={formData.region} onValueChange={value => handleChange("region", value)} disabled={!formData.country}>
                        <SelectTrigger className="mt-1 glass-card border-white/20 text-white font-orbitron">
                          <SelectValue placeholder={formData.country ? "Select region" : "Please select a country first"} />
                        </SelectTrigger>
                        <SelectContent className="max-h-96 bg-gray-900 border border-white/20 shadow-lg z-50">
                          {availableRegions.map(region => <SelectItem key={region} value={region} className="text-white hover:bg-white/10">
                              {region}
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white font-orbitron">Phone</Label>
                      <div className="flex gap-2 mt-1">
                        <Select value={formData.countryCode} onValueChange={value => handleChange("countryCode", value)}>
                          <SelectTrigger className="w-48 glass-card border-white/20 text-white font-orbitron">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="max-h-60 bg-gray-900 border border-white/20 shadow-lg z-50">
                            {countryCodes.map(item => <SelectItem key={item.code} value={item.code} className="text-white hover:bg-white/10">
                                <span className="flex items-center gap-2">
                                  {item.flag} {item.code} {item.name}
                                </span>
                              </SelectItem>)}
                          </SelectContent>
                        </Select>
                        <Input id="phone" value={formData.phone} onChange={e => handleChange("phone", e.target.value)} placeholder="Phone number" className="flex-1 glass-card border-white/20 text-white placeholder:text-white/50 font-orbitron" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={handleBack} className="flex items-center gap-2 space-button text-white font-orbitron hover:scale-105 transition-transform duration-300">
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNext} className="moving-gradient text-white flex items-center gap-2 font-orbitron font-semibold hover:scale-105 transition-transform duration-300">
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-white/20 sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-space font-orbitron">Order Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-white/80">
                    <span className="font-orbitron">Account Balance:</span>
                    <span className="font-semibold text-space font-orbitron">${parseInt(orderData.balance).toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span className="font-orbitron">Trading Platform:</span>
                    <span className="font-semibold text-space font-orbitron">{orderData.platform}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span className="font-orbitron">Currency:</span>
                    <span className="font-semibold text-space font-orbitron">USD</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span className="font-orbitron">Leverage:</span>
                    <span className="font-semibold text-space font-orbitron">1:100</span>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4 mt-4">
                  <div className="mb-4">
                    <Label className="text-sm text-white/60 font-orbitron">
                      Have a discount code?
                    </Label>
                    <div className="flex gap-2 mt-1">
                      <Input placeholder="Enter Promo Code" value="STAY CLEAR" readOnly className="flex-1 glass-card border-white/20 text-white font-orbitron bg-green-500/10" />
                      <Button variant="outline" size="sm" className="space-button text-white font-orbitron">
                        Applied
                      </Button>
                    </div>
                    <div className="mt-2 p-2 glass-card border-green-500/30 bg-green-500/10 rounded text-sm text-evaluation font-orbitron">
                      🎉 STAY CLEAR Special: 30% discount applied!
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-white font-orbitron">Total</span>
                    <span className="text-space font-orbitron">${orderData.price}</span>
                  </div>
                  <p className="text-xs text-white/50 mt-1 font-orbitron">Taxes and fees included!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="glass-card border-white/20 border-t mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-space transition-colors font-orbitron">Privacy Policy</a>
            <a href="#" className="hover:text-space transition-colors font-orbitron">Terms and Conditions</a>
            <a href="#" className="hover:text-space transition-colors font-orbitron">Refund Policy</a>
            
            <a href="#" className="hover:text-space transition-colors font-orbitron">Support</a>
          </div>
          <div className="text-center text-sm text-white/50 mt-2 font-orbitron">
            ©2023 All rights reserved.
          </div>
        </div>
      </footer>
    </div>;
};
export default PersonalInfo;