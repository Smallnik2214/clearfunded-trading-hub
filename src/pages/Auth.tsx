
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const { loading, login, signUp, resetPassword } = useAuth();

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
    const success = await resetPassword(email);
    if (success) {
      setShowForgotPassword(false);
    }
  };

  const getTitle = () => {
    if (showForgotPassword) return "Reset Your Password";
    return isLogin ? "Login to Your Account" : "Create Your Account";
  };

  const getSubtitle = () => {
    if (showForgotPassword) return "Enter your email address and we'll send you a reset link";
    return isLogin ? "Welcome back! Please login to continue" : "Join thousands of successful traders";
  };

  const renderForm = () => {
    if (showForgotPassword) {
      return (
        <ForgotPasswordForm
          onSubmit={handleForgotPassword}
          onBack={() => setShowForgotPassword(false)}
          loading={loading}
        />
      );
    }

    if (isLogin) {
      return (
        <LoginForm
          onSubmit={handleLogin}
          onForgotPassword={() => setShowForgotPassword(true)}
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

  return (
    <div className="min-h-screen bg-gray-50">
      <PromoBanner />
      <Header />
      
      <div className="py-12 px-4">
        <div className="max-w-md mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900">
                {getTitle()}
              </CardTitle>
              <p className="text-gray-600 mt-2">
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
