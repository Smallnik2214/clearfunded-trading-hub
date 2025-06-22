
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormData } from "@/types/registration";
import { countries } from "@/data/countries";

interface LocationSectionProps {
  formData: FormData;
  onFieldChange: (field: string, value: string) => void;
  availableRegions: string[];
}

export const LocationSection = ({ formData, onFieldChange, availableRegions }: LocationSectionProps) => {
  return (
    <>
      {/* Country */}
      <div>
        <Label htmlFor="country">Country</Label>
        <Select value={formData.country} onValueChange={(value) => onFieldChange("country", value)}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent className="max-h-40">
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Residence - Filtered based on selected country */}
      <div>
        <Label htmlFor="residence">Place of Residence</Label>
        <Select 
          value={formData.residence} 
          onValueChange={(value) => onFieldChange("residence", value)}
          disabled={!formData.country}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder={formData.country ? "Select your region/state" : "Please select a country first"} />
          </SelectTrigger>
          <SelectContent className="max-h-40">
            {availableRegions.map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Address */}
      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => onFieldChange("address", e.target.value)}
          className="mt-1"
          placeholder="Street address"
        />
      </div>

      {/* ZIP Code */}
      <div>
        <Label htmlFor="zipCode">ZIP Code</Label>
        <Input
          id="zipCode"
          value={formData.zipCode}
          onChange={(e) => onFieldChange("zipCode", e.target.value)}
          className="mt-1"
          placeholder="Postal code"
        />
      </div>
    </>
  );
};
