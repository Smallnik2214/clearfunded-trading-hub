
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { useRegistrationForm } from "@/hooks/useRegistrationForm";
import { PersonalInfoSection } from "@/components/registration/PersonalInfoSection";
import { PhoneSection } from "@/components/registration/PhoneSection";
import { LocationSection } from "@/components/registration/LocationSection";

const Register = () => {
  const { formData, handleChange, handleSubmit, getAvailableRegions } = useRegistrationForm();

  return (
    <div className="min-h-screen bg-gray-50">
      <PromoBanner />
      <Header />
      
      <div className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900">
                Create Your Account
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Join thousands of successful traders
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <PersonalInfoSection formData={formData} onFieldChange={handleChange} />
                <PhoneSection formData={formData} onFieldChange={handleChange} />
                <LocationSection 
                  formData={formData} 
                  onFieldChange={handleChange} 
                  availableRegions={getAvailableRegions()}
                />

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                >
                  Create Account & Go to Dashboard
                </Button>

                <p className="text-center text-sm text-gray-500">
                  By creating an account, you agree to our{" "}
                  <a href="/terms" className="text-green-600 hover:underline">Terms of Service</a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-green-600 hover:underline">Privacy Policy</a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
