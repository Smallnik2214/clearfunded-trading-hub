
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countryCodes } from "@/data/countryCodes";
import { countries, regionsByCountry } from "@/data/countries";

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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            required
            placeholder="First name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            required
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password *</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          required
          placeholder="Enter your password"
          minLength={6}
        />
        <p className="text-sm text-gray-500">Minimum 6 characters</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <div className="flex gap-2">
          <Select value={formData.countryCode} onValueChange={(value) => handleChange('countryCode', value)}>
            <SelectTrigger className="w-32">
              <SelectValue>
                {countryCodes.find(c => c.code === formData.countryCode)?.flag} {formData.countryCode}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="max-h-40 bg-white border border-gray-300 shadow-lg z-50">
              {countryCodes.map((code) => (
                <SelectItem key={code.code} value={code.code}>
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
            className="flex-1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select value={formData.country} onValueChange={(value) => handleChange('country', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent className="max-h-96 bg-white border border-gray-300 shadow-lg z-50">
            {countries.map((countryName) => (
              <SelectItem key={countryName} value={countryName}>
                {countryName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="residence">Place of Residence</Label>
        <Select 
          value={formData.residence} 
          onValueChange={(value) => handleChange('residence', value)}
          disabled={!formData.country}
        >
          <SelectTrigger>
            <SelectValue placeholder={formData.country ? "Select your region/state" : "Please select a country first"} />
          </SelectTrigger>
          <SelectContent className="max-h-96 bg-white border border-gray-300 shadow-lg z-50">
            {formData.country && regionsByCountry[formData.country] && regionsByCountry[formData.country].map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          type="text"
          value={formData.address}
          onChange={(e) => handleChange('address', e.target.value)}
          placeholder="Street address"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="zipCode">ZIP Code</Label>
        <Input
          id="zipCode"
          type="text"
          value={formData.zipCode}
          onChange={(e) => handleChange('zipCode', e.target.value)}
          placeholder="Postal code"
        />
      </div>

      <Button
        type="submit"
        className="w-full py-3 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white"
        disabled={loading}
      >
        {loading ? "Processing..." : "Create Account & Go to Dashboard"}
      </Button>

      <div className="text-center">
        <Button
          type="button"
          variant="link"
          onClick={onToggleMode}
          className="text-green-600 hover:text-green-700"
        >
          Already have an account? Login
        </Button>
      </div>

      <p className="text-center text-sm text-gray-500">
        By creating an account, you agree to our{" "}
        <a href="/terms" className="text-green-600 hover:underline">Terms of Service</a>{" "}
        and{" "}
        <a href="/privacy" className="text-green-600 hover:underline">Privacy Policy</a>
      </p>
    </form>
  );
};
