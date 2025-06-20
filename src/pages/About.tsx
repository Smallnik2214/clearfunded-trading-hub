
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Shield, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <Header />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Clear Funded</h1>
            <p className="text-xl text-gray-600">
              Building a transparent and honest ecosystem for traders
            </p>
          </div>

          {/* Main About Content */}
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700 mb-6">
              At Clear Funded, we're building a transparent and honest ecosystem for traders. 
              No hidden rules. No restrictions that interfere with real trading. Just pure focus on what truly matters — the trades and the results.
            </p>
            
            <p className="text-gray-700 mb-6">
              Our team has worked as risk managers in some of the world's top proprietary trading firms. We've seen it all — complicated rules, unclear terms, and unnecessary limits that force traders to focus more on calculating margin levels or meeting arbitrary "trading day" requirements than on reading the chart.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">And here's the truth:</h3>
              <p className="text-gray-700">
                Most of these rules aren't made to help the trader — they're made to protect the firm. While grocery stores mark up products by 50–100%, some prop firms — through complex evaluations and hidden traps — make profits of up to 600%.
              </p>
              <p className="text-gray-700 mt-4 font-semibold">
                We're here to change that.
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              Clear Funded breaks away from this outdated model. We offer more freedom, more trust, and more opportunity. Our mission is simple: to bring back the essence of trading, without distractions, so you can focus on what you do best — trading.
            </p>
          </div>

          {/* Key Features */}
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

          {/* Why Choose Clear Funded */}
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

          {/* CTA Section */}
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
      
      <Footer />
    </div>
  );
};

export default About;
