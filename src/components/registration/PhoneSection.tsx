
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormData } from "@/types/registration";
import { countryCodes } from "@/data/countries";

interface PhoneSectionProps {
  formData: FormData;
  onFieldChange: (field: string, value: string) => void;
}

export const PhoneSection = ({ formData, onFieldChange }: PhoneSectionProps) => {
  return (
    <div>
      <Label htmlFor="phone">Phone Number</Label>
      <div className="flex gap-2 mt-1">
        <Select value={formData.countryCode} onValueChange={(value) => onFieldChange("countryCode", value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="max-h-40">
            {countryCodes.map((item) => (
              <SelectItem key={item.code} value={item.code}>
                {item.code} {item.country}
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
