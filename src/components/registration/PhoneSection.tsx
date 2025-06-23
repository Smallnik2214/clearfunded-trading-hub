
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormData } from "@/types/registration";
import { countryCodes } from "@/data/countryCodes";

interface PhoneSectionProps {
  formData: FormData;
  onFieldChange: (field: string, value: string) => void;
}

export const PhoneSection = ({ formData, onFieldChange }: PhoneSectionProps) => {
  const selectedCountry = countryCodes.find(country => country.code === formData.countryCode);
  
  return (
    <div>
      <Label htmlFor="phone">Phone Number</Label>
      <div className="flex gap-2 mt-1">
        <Select value={formData.countryCode} onValueChange={(value) => onFieldChange("countryCode", value)}>
          <SelectTrigger className="w-48">
            <SelectValue>
              {selectedCountry ? (
                <span className="flex items-center gap-2">
                  {selectedCountry.flag} {selectedCountry.code}
                </span>
              ) : (
                "Select code"
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="max-h-60 bg-white border border-gray-300 shadow-lg z-50">
            {countryCodes.map((item) => (
              <SelectItem key={item.code} value={item.code} className="flex items-center gap-2">
                <span className="flex items-center gap-2">
                  {item.flag} {item.code} {item.name}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => onFieldChange("phone", e.target.value)}
          className="flex-1"
          placeholder="Phone number"
        />
      </div>
    </div>
  );
};
