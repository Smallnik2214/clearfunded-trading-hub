
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
        return false;
      } else {
        toast.success("Login successful!");
        window.location.href = "/dashboard";
        return true;
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (formData: {
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
  }) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phone,
            country: formData.country,
            residence: formData.residence,
            address: formData.address,
            zip_code: formData.zipCode,
            country_code: formData.countryCode,
          }
        }
      });

      if (error) {
        toast.error(error.message);
        return false;
      } else {
        toast.success("Account created successfully! Redirecting to dashboard...");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1500);
        return true;
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const requestPasswordReset = async (email: string) => {
    if (!email) {
      toast.error("Please enter your email address");
      return false;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth?mode=reset`,
      });

      if (error) {
        toast.error(error.message);
        return false;
      } else {
        toast.success("Password reset instructions sent to your email!");
        return true;
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (newPassword: string) => {
    setLoading(true);
    try {
      // Check if user is authenticated
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast.error("Authentication session expired. Please request a new password reset.");
        return false;
      }

      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) {
        toast.error(error.message);
        return false;
      } else {
        toast.success("Password updated successfully!");
        return true;
      }
    } catch (error) {
      console.error("Password update error:", error);
      toast.error("An unexpected error occurred");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    login,
    signUp,
    requestPasswordReset,
    updatePassword,
  };
};
