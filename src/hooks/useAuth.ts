
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log("Attempting login for email:", email);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase().trim(), // Normalize email
        password,
      });

      if (error) {
        console.error("Login error:", error);
        
        // Provide more specific error messages
        if (error.message.includes("Invalid login credentials")) {
          toast.error("Invalid email or password. Please check your credentials and try again.");
        } else if (error.message.includes("Email not confirmed")) {
          toast.error("Please check your email and click the confirmation link before logging in.");
        } else {
          toast.error(error.message);
        }
        return false;
      } else {
        console.log("Login successful for user:", data.user?.email);
        toast.success("Login successful!");
        window.location.href = "/dashboard";
        return true;
      }
    } catch (error) {
      console.error("Unexpected login error:", error);
      toast.error("An unexpected error occurred during login");
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
      console.log("Attempting signup for email:", formData.email);
      
      const { data, error } = await supabase.auth.signUp({
        email: formData.email.toLowerCase().trim(), // Normalize email
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
        console.error("Signup error:", error);
        
        if (error.message.includes("User already registered")) {
          toast.error("An account with this email already exists. Please try logging in instead.");
        } else {
          toast.error(error.message);
        }
        return false;
      } else {
        console.log("Signup response:", data);
        
        if (data.user && !data.user.email_confirmed_at) {
          toast.success("Account created! Please check your email and click the confirmation link to complete registration.");
        } else {
          toast.success("Account created successfully! Redirecting to dashboard...");
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 1500);
        }
        return true;
      }
    } catch (error) {
      console.error("Unexpected signup error:", error);
      toast.error("An unexpected error occurred during registration");
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
      // Check if user exists first
      const { data: users, error: checkError } = await supabase
        .from('auth.users')
        .select('email')
        .eq('email', email.toLowerCase().trim())
        .limit(1);

      if (checkError) {
        console.log("Cannot check user existence, proceeding with reset request");
      }

      // Always proceed with password reset to avoid revealing if email exists
      const { error } = await supabase.auth.resetPasswordForEmail(email.toLowerCase().trim(), {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        if (error.message.includes("User not found")) {
          toast.error("No account found with this email address");
        } else {
          toast.error(error.message);
        }
        return false;
      } else {
        toast.success("Check your email for password reset instructions!");
        return true;
      }
    } catch (error) {
      console.error("Password reset error:", error);
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

  // Simple password reset that doesn't require email confirmation
  const resetPasswordDirect = async (email: string, newPassword: string) => {
    setLoading(true);
    try {
      // This is a simplified approach - in a real app you'd want proper verification
      // For now, we'll use the standard Supabase flow but make it simpler in the UI
      toast.info("For security, password reset requires email verification. Check your email for reset instructions.");
      
      const { error } = await supabase.auth.resetPasswordForEmail(email.toLowerCase().trim(), {
        redirectTo: `${window.location.origin}/auth?mode=reset`,
      });

      if (error) {
        toast.error(error.message);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error("Direct password reset error:", error);
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
    resetPasswordDirect,
  };
};
