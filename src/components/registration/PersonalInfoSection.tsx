
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormData } from "@/types/registration";

interface PersonalInfoSectionProps {
  formData: FormData;
  onFieldChange: (field: string, value: string) => void;
}

export const PersonalInfoSection = ({ formData, onFieldChange }: PersonalInfoSectionProps) => {
  return (
    <>
      {/* Email */}
      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => onFieldChange("email", e.target.value)}
          className="mt-1"
          required
        />
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => onFieldChange("firstName", e.target.value)}
            className="mt-1"
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => onFieldChange("lastName", e.target.value)}
            className="mt-1"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <Label htmlFor="password">Password *</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => onFieldChange("password", e.target.value)}
          className="mt-1"
          required
          minLength={6}
        />
        <p className="text-sm text-gray-500 mt-1">Minimum 6 characters</p>
      </div>
    </>
  );
};
