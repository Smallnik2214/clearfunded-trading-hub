
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { supabase } from "@/integrations/supabase/client";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [isSessionReady, setIsSessionReady] = useState(false);
  const { loading, login, signUp, requestPasswordReset, updatePassword } = useAuth();

  useEffect(() => {
    // Check if we're in password reset mode from URL and handle the session
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');

    if (mode === 'reset' && accessToken && refreshToken) {
      // Set the session from URL parameters
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      }).then(({ data, error }) => {
        if (error) {
          console.error('Error setting session:', error);
        } else if (data.session) {
          setShowResetPassword(true);
          setShowForgotPassword(false);
          setIsLogin(false);
          setIsSessionReady(true);
        }
      });
    } else if (mode === 'reset') {
      // If mode is reset but no tokens, show reset form anyway
      setShowResetPassword(true);
      setShowForgotPassword(false);
      setIsLogin(false);
    } else {
      setIsSessionReady(true);
    }
  }, []);

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);
  };

  const handleSignUp = async (formData: {
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
    await signUp(formData);
  };

  const handleForgotPassword = async (email: string) => {
    const success = await requestPasswordReset(email);
    if (success) {
      // Stay on forgot password form but show success message
      // User will get email with reset link
    }
  };

  const handleResetPassword = async (password: string) => {
    const success = await updatePassword(password);
    if (success) {
      setShowResetPassword(false);
      setShowForgotPassword(false);
      setIsLogin(true);
      // Clear URL parameters
      window.history.replaceState({}, document.title, "/auth");
    }
  };

  const getTitle = () => {
    if (showResetPassword) return "Set New Password";
    if (showForgotPassword) return "Reset Your Password";
    return isLogin ? "Login to Your Account" : "Create Your Account";
  };

  const getSubtitle = () => {
    if (showResetPassword) return "Enter your new password below";
    if (showForgotPassword) return "We'll send you instructions to reset your password";
    return isLogin ? "Welcome back! Please login to continue" : "Join thousands of successful traders";
  };

  const renderForm = () => {
    if (showResetPassword) {
      return (
        <ResetPasswordForm
          onSubmit={handleResetPassword}
          onBack={() => {
            setShowResetPassword(false);
            setIsLogin(true);
            window.history.replaceState({}, document.title, "/auth");
          }}
          loading={loading}
        />
      );
    }

    if (showForgotPassword) {
      return (
        <ForgotPasswordForm
          onSubmit={handleForgotPassword}
          onBack={() => {
            setShowForgotPassword(false);
            setIsLogin(true);
          }}
          loading={loading}
        />
      );
    }

    if (isLogin) {
      return (
        <LoginForm
          onSubmit={handleLogin}
          onForgotPassword={() => {
            setShowForgotPassword(true);
            setIsLogin(false);
          }}
          onToggleMode={() => setIsLogin(false)}
          loading={loading}
        />
      );
    }

    return (
      <SignUpForm
        onSubmit={handleSignUp}
        onToggleMode={() => setIsLogin(true)}
        loading={loading}
      />
    );
  };

  // Show loading while setting up session for password reset
  if (!isSessionReady && showResetPassword) {
    return (
      <div className="min-h-screen space-bg flex items-center justify-center">
        <div className="stars"></div>
        <div className="text-center relative z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-space mx-auto"></div>
          <p className="mt-4 text-white/80 font-orbitron">Setting up password reset...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen space-bg">
      <div className="stars"></div>
      <PromoBanner />
      <Header />
      
      <div className="py-12 px-4 relative z-10">
        <div className="max-w-md mx-auto">
          <Card className="glass-card border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-orbitron font-bold text-space">
                {getTitle()}
              </CardTitle>
              <p className="text-white/80 mt-2 font-orbitron font-light">
                {getSubtitle()}
              </p>
            </CardHeader>
            <CardContent>
              {renderForm()}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
