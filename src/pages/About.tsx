
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Shield, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Clear Funded</h1>
            <p className="text-xl text-gray-600">
              Empowering traders with transparent rules and real growth opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-green-700">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To provide skilled traders with the capital and support they need to achieve their financial goals through transparent, fair, and achievable trading challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-blue-700">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Transparency, integrity, and trader success are at the core of everything we do. We believe in clear rules and honest partnerships.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Why Choose Clear Funded?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Trader-Focused</h3>
                  <p className="text-gray-600 text-sm">
                    Built by traders, for traders. We understand your needs and challenges.
                  </p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Proven Results</h3>
                  <p className="text-gray-600 text-sm">
                    Thousands of successful traders have grown their careers with us.
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Secure & Reliable</h3>
                  <p className="text-gray-600 text-sm">
                    Your funds and data are protected with industry-leading security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-600 mb-6">
              Join thousands of traders who have chosen Clear Funded for their prop trading career.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => window.location.href = "/register"}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Trading
              </button>
              <button
                onClick={() => window.location.href = "/faq"}
                className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
