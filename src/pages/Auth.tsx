import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { countryCodes } from "@/data/countryCodes";
import { countries, regionsByCountry } from "@/data/countries";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [residence, setResidence] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Login
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Login successful!");
          window.location.href = "/dashboard";
        }
      } else {
        // Sign up without email confirmation
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: {
              first_name: firstName,
              last_name: lastName,
              phone: phone,
              country: country,
              residence: residence,
              address: address,
              zip_code: zipCode,
              country_code: countryCode,
            }
          }
        });

        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Account created successfully! Redirecting to dashboard...");
          // Redirect immediately without waiting for email confirmation
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 1500);
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth`,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Password reset email sent! Please check your inbox.");
        setShowForgotPassword(false);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PromoBanner />
        <Header />
        
        <div className="py-12 px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Reset Your Password
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Enter your email address and we'll send you a reset link
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleForgotPassword} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-3 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Reset Link"}
                  </Button>

                  <div className="text-center">
                    <Button
                      type="button"
                      variant="link"
                      onClick={() => setShowForgotPassword(false)}
                      className="text-green-600 hover:text-green-700"
                    >
                      Back to Login
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PromoBanner />
      <Header />
      
      <div className="py-12 px-4">
        <div className="max-w-md mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900">
                {isLogin ? "Login to Your Account" : "Create Your Account"}
              </CardTitle>
              <p className="text-gray-600 mt-2">
                {isLogin ? "Welcome back! Please login to continue" : "Join thousands of successful traders"}
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                {!isLogin && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required={!isLogin}
                          placeholder="First name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required={!isLogin}
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    minLength={6}
                  />
                  {!isLogin && (
                    <p className="text-sm text-gray-500">Minimum 6 characters</p>
                  )}
                </div>

                {isLogin && (
                  <div className="text-right">
                    <Button
                      type="button"
                      variant="link"
                      onClick={() => setShowForgotPassword(true)}
                      className="text-green-600 hover:text-green-700 p-0 h-auto"
                    >
                      Forgot password?
                    </Button>
                  </div>
                )}

                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="flex gap-2">
                        <Select value={countryCode} onValueChange={setCountryCode}>
                          <SelectTrigger className="w-32">
                            <SelectValue>
                              {countryCodes.find(c => c.code === countryCode)?.flag} {countryCode}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent className="max-h-40 bg-white border border-gray-300 shadow-lg z-50">
                            {countryCodes.map((code) => (
                              <SelectItem key={code.code} value={code.code}>
                                {code.flag} {code.code} {code.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone number"
                          className="flex-1"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select value={country} onValueChange={(value) => {
                        setCountry(value);
                        setResidence(""); // Reset residence when country changes
                      }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent className="max-h-96 bg-white border border-gray-300 shadow-lg z-50">
                          {countries.map((countryName) => (
                            <SelectItem key={countryName} value={countryName}>
                              {countryName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="residence">Place of Residence</Label>
                      <Select 
                        value={residence} 
                        onValueChange={setResidence}
                        disabled={!country}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={country ? "Select your region/state" : "Please select a country first"} />
                        </SelectTrigger>
                        <SelectContent className="max-h-96 bg-white border border-gray-300 shadow-lg z-50">
                          {country && regionsByCountry[country] && regionsByCountry[country].map((region) => (
                            <SelectItem key={region} value={region}>
                              {region}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="Postal code"
                      />
                    </div>
                  </>
                )}

                <Button
                  type="submit"
                  className={`w-full py-3 text-lg font-semibold ${
                    isLogin 
                      ? "bg-gray-600 hover:bg-gray-700 text-white" 
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                  disabled={loading}
                >
                  {loading ? "Processing..." : (isLogin ? "Login" : "Create Account & Go to Dashboard")}
                </Button>

                <div className="text-center">
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-green-600 hover:text-green-700"
                  >
                    {isLogin ? "Create Account" : "Already have an account? Login"}
                  </Button>
                </div>

                {!isLogin && (
                  <p className="text-center text-sm text-gray-500">
                    By creating an account, you agree to our{" "}
                    <a href="/terms" className="text-green-600 hover:underline">Terms of Service</a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-green-600 hover:underline">Privacy Policy</a>
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
