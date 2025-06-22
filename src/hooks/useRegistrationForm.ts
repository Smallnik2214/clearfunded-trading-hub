
import { useState } from "react";
import { FormData } from "@/types/registration";
import { regionsByCountry } from "@/data/countries";
import { toast } from "sonner";

export const useRegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    country: "",
    residence: "",
    address: "",
    zipCode: "",
    countryCode: "+1"
  });

  const getAvailableRegions = () => {
    if (!formData.country) return [];
    return regionsByCountry[formData.country] || [];
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      // Reset residence when country changes
      if (field === 'country') {
        newData.residence = '';
      }
      return newData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.password) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    console.log("Registration data:", formData);
    
    // Save user info to localStorage for dashboard display
    const userInfo = {
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    
    toast.success("Registration successful! Redirecting to dashboard...");
    
    // Simulate registration and redirect to dashboard
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    getAvailableRegions
  };
};
