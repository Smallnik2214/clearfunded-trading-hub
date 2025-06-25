
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormData } from "@/types/registration";
import { countries } from "@/data/countries";
import { getRegionsForCountry } from "@/utils/regionUtils";

interface LocationSectionProps {
  formData: FormData;
  onFieldChange: (field: string, value: string) => void;
}

export const LocationSection = ({ formData, onFieldChange }: LocationSectionProps) => {
  const availableRegions = getRegionsForCountry(formData.country);

  return (
    <>
      {/* Country */}
      <div>
        <Label htmlFor="country" className="text-white/80 font-orbitron">Country</Label>
        <Select value={formData.country} onValueChange={(value) => onFieldChange("country", value)}>
          <SelectTrigger className="mt-1 glass-card border-white/20 text-white font-orbitron">
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent className="max-h-96 glass-card border-white/20 bg-black/90 backdrop-blur-md z-50">
            {countries.map((country) => (
              <SelectItem key={`country-${country}`} value={country} className="text-white font-orbitron hover:bg-white/10 focus:bg-white/10">
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Residence - Filtered based on selected country */}
      <div>
        <Label htmlFor="residence" className="text-white/80 font-orbitron">Place of Residence</Label>
        <Select 
          value={formData.residence} 
          onValueChange={(value) => onFieldChange("residence", value)}
          disabled={!formData.country}
        >
          <SelectTrigger className="mt-1 glass-card border-white/20 text-white font-orbitron">
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

      {/* Address */}
      <div>
        <Label htmlFor="address" className="text-white/80 font-orbitron">Address</Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => onFieldChange("address", e.target.value)}
          className="mt-1 glass-card border-white/20 text-white font-orbitron placeholder:text-white/50"
          placeholder="Street address"
        />
      </div>

      {/* ZIP Code */}
      <div>
        <Label htmlFor="zipCode" className="text-white/80 font-orbitron">ZIP Code</Label>
        <Input
          id="zipCode"
          value={formData.zipCode}
          onChange={(e) => onFieldChange("zipCode", e.target.value)}
          className="mt-1 glass-card border-white/20 text-white font-orbitron placeholder:text-white/50"
          placeholder="Postal code"
        />
      </div>
    </>
  );
};
