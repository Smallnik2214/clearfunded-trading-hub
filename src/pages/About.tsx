
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Shield, Users, Award, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen space-bg">
      <div className="stars"></div>
      <PromoBanner />
      <Header />
      
      <div className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-space mb-4">
              About Clear Funded
            </h1>
            <p className="text-xl text-white/80 font-orbitron font-light">
              Building a transparent and honest ecosystem for traders
            </p>
          </div>

          {/* Main About Content */}
          <Card className="glass-card border-white/20 mb-12">
            <CardContent className="p-8">
              <p className="text-lg text-white/90 mb-6 font-orbitron font-light leading-relaxed">
                At Clear Funded, we're building a transparent and honest ecosystem for traders. 
                No hidden rules. No restrictions that interfere with real trading. Just pure focus on what truly matters — the trades and the results.
              </p>
              
              <p className="text-white/80 mb-6 font-orbitron font-light leading-relaxed">
                Our team has worked as risk managers in some of the world's top proprietary trading firms. We've seen it all — complicated rules, unclear terms, and unnecessary limits that force traders to focus more on calculating margin levels or meeting arbitrary "trading day" requirements than on reading the chart.
              </p>

              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-lg mb-6 border border-white/10">
                <h3 className="text-xl font-orbitron font-semibold text-space mb-4">And here's the truth:</h3>
                <p className="text-white/80 font-orbitron font-light leading-relaxed">
                  Most of these rules aren't made to help the trader — they're made to protect the firm. While grocery stores mark up products by 50–100%, some prop firms — through complex evaluations and hidden traps — make profits of up to 600%.
                </p>
                <p className="text-white/90 mt-4 font-orbitron font-semibold">
                  We're here to change that.
                </p>
              </div>

              <p className="text-white/80 mb-6 font-orbitron font-light leading-relaxed">
                Clear Funded breaks away from this outdated model. We offer more freedom, more trust, and more opportunity. Our mission is simple: to bring back the essence of trading, without distractions, so you can focus on what you do best — trading.
              </p>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card border-white/20 hover:border-space/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Target className="h-12 w-12 text-space mb-4" />
                <CardTitle className="text-space font-orbitron">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-orbitron font-light leading-relaxed">
                  To provide skilled traders with the capital and support they need to achieve their financial goals through transparent, fair, and achievable trading challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/20 hover:border-space/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Shield className="h-12 w-12 text-space mb-4" />
                <CardTitle className="text-space font-orbitron">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-orbitron font-light leading-relaxed">
                  Transparency, integrity, and trader success are at the core of everything we do. We believe in clear rules and honest partnerships.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Clear Funded */}
          <Card className="glass-card border-white/20 mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-space font-orbitron">Why Choose Clear Funded?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="h-12 w-12 text-space mx-auto mb-4" />
                  <h3 className="font-orbitron font-semibold mb-2 text-white">Trader-Focused</h3>
                  <p className="text-white/70 text-sm font-orbitron font-light">
                    Built by traders, for traders. We understand your needs and challenges.
                  </p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-space mx-auto mb-4" />
                  <h3 className="font-orbitron font-semibold mb-2 text-white">Proven Results</h3>
                  <p className="text-white/70 text-sm font-orbitron font-light">
                    Thousands of successful traders have grown their careers with us.
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-space mx-auto mb-4" />
                  <h3 className="font-orbitron font-semibold mb-2 text-white">Secure & Reliable</h3>
                  <p className="text-white/70 text-sm font-orbitron font-light">
                    Your funds and data are protected with industry-leading security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-orbitron font-bold text-space mb-4">Ready to Start Your Journey?</h2>
            <p className="text-white/80 mb-6 font-orbitron font-light">
              Join thousands of traders who have chosen Clear Funded for their prop trading career.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => window.location.href = "/auth"}
                className="moving-gradient text-white px-8 py-3 font-orbitron font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                Start Trading
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => window.location.href = "/faq"}
                className="glass-card border-white/30 text-white hover:border-space/50 px-8 py-3 font-orbitron font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
