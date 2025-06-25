
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countryCodes } from "@/data/countryCodes";
import { countries } from "@/data/countries";
import { getRegionsForCountry } from "@/utils/regionUtils";

interface SignUpFormProps {
  onSubmit: (formData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    country: string;
    residence: string;
    address: string;
    zipCode: string;
    countryCode: string;
  }) => void;
  onToggleMode: () => void;
  loading: boolean;
}

export const SignUpForm = ({ onSubmit, onToggleMode, loading }: SignUpFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    residence: "",
    address: "",
    zipCode: "",
    countryCode: "+1",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      if (field === 'country') {
        newData.residence = '';
      }
      return newData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const availableRegions = getRegionsForCountry(formData.country);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white/80 font-orbitron">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
          placeholder="Enter your email"
          className="glass-card border-white/20 text-white font-orbitron placeholder:text-white/50"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-white/80 font-orbitron">First Name *</Label>
          <Input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            required
            placeholder="First name"
            className="glass-card border-white/20 text-white font-orbitron placeholder:text-white/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-white/80 font-orbitron">Last Name *</Label>
          <Input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            required
            placeholder="Last name"
            className="glass-card border-white/20 text-white font-orbitron placeholder:text-white/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-white/80 font-orbitron">Password *</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          required
          placeholder="Enter your password"
          minLength={6}
          className="glass-card border-white/20 text-white font-orbitron placeholder:text-white/50"
        />
        <p className="text-sm text-white/60 font-orbitron">Minimum 6 characters</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white/80 font-orbitron">Phone Number</Label>
        <div className="flex gap-2">
          <Select value={formData.countryCode} onValueChange={(value) => handleChange('countryCode', value)}>
            <SelectTrigger className="w-32 glass-card border-white/20 text-white font-orbitron">
              <SelectValue>
                {countryCodes.find(c => c.code === formData.countryCode)?.flag} {formData.countryCode}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="max-h-40 glass-card border-white/20 bg-black/90 backdrop-blur-md z-50">
              {countryCodes.map((code) => (
                <SelectItem key={code.code} value={code.code} className="text-white font-orbitron hover:bg-white/10 focus:bg-white/10">
                  {code.flag} {code.code} {code.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="Phone number"
            className="flex-1 glass-card border-white/20 text-white font-orbitron placeholder:text-white/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="country" className="text-white/80 font-orbitron">Country</Label>
        <Select value={formData.country} onValueChange={(value) => handleChange('country', value)}>
          <SelectTrigger className="glass-card border-white/20 text-white font-orbitron">
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent className="max-h-96 glass-card border-white/20 bg-black/90 backdrop-blur-md z-50">
            {countries.map((countryName) => (
              <SelectItem key={`country-${countryName}`} value={countryName} className="text-white font-orbitron hover:bg-white/10 focus:bg-white/10">
                {countryName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="residence" className="text-white/80 font-orbitron">Place of Residence</Label>
        <Select 
          value={formData.residence} 
          onValueChange={(value) => handleChange('residence', value)}
          disabled={!formData.country}
        >
          <SelectTrigger className="glass-card border-white/20 text-white font-orbitron">
            <SelectValue placeholder={formData.country ? "Select your region/state" : "Please select a country first"} />
          </SelectTrigger>
          <SelectContent className="max-h-96 glass-card border-white/20 bg-black/90 backdrop-blur-md z-50">
            {availableRegions.map((region) => (
              <SelectItem key={`region-${formData.country}-${region}`} value={region} className="text-white font-orbitron hover:bg-white/10 focus:bg-white/10">
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-white/80 font-orbitron">Address</Label>
        <Input
          id="address"
          type="text"
          value={formData.address}
          onChange={(e) => handleChange('address', e.target.value)}
          placeholder="Street address"
          className="glass-card border-white/20 text-white font-orbitron placeholder:text-white/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="zipCode" className="text-white/80 font-orbitron">ZIP Code</Label>
        <Input
          id="zipCode"
          type="text"
          value={formData.zipCode}
          onChange={(e) => handleChange('zipCode', e.target.value)}
          placeholder="Postal code"
          className="glass-card border-white/20 text-white font-orbitron placeholder:text-white/50"
        />
      </div>

      <Button
        type="submit"
        className="w-full py-3 text-lg font-semibold moving-gradient text-white font-orbitron border-0 hover:scale-105 transition-transform duration-300"
        disabled={loading}
      >
        {loading ? "Processing..." : "Create Account & Go to Dashboard"}
      </Button>

      <div className="text-center">
        <Button
          type="button"
          variant="link"
          onClick={onToggleMode}
          className="text-space hover:text-white font-orbitron"
        >
          Already have an account? Login
        </Button>
      </div>

      <p className="text-center text-sm text-white/60 font-orbitron">
        By creating an account, you agree to our{" "}
        <a href="/terms" className="text-space hover:underline">Terms of Service</a>{" "}
        and{" "}
        <a href="/privacy" className="text-space hover:underline">Privacy Policy</a>
      </p>
    </form>
  );
};
