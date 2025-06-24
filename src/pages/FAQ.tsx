
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I get funded by ClearFunded?",
      answer: "To trade a funded account, you must complete our Evaluation process. Just select an account size and start the challenge. Upon success, you'll receive a funded account."
    },
    {
      question: "What is the Evaluation?",
      answer: "It's a demo-based trading challenge with rules and profit targets. We offer: 1-Step, 2-Step challenges."
    },
    {
      question: "What account sizes are available?",
      answer: "Choose from: $5K, $10K, $25K, $50K, $100K, $200K"
    },
    {
      question: "When does it start?",
      answer: "Your Evaluation begins when you place your first trade."
    },
    {
      question: "How many accounts can I trade?",
      answer: "You may hold multiple evaluations. Max total funded capital: $200K"
    },
    {
      question: "Can I grow my account?",
      answer: "Yes. Our scaling plan lets you grow up to $500,000"
    },
    {
      question: "Do I need experience?",
      answer: "No fixed level required. Clear Funded created for those who want to learn and practice trading. You won't become profitable if you don't practice your skills."
    },
    {
      question: "Free trial or retry?",
      answer: "No free trial. No retries needed — there's no time limit to pass."
    },
    {
      question: "Do I pay for losses?",
      answer: "No. ClearFunded covers all losses — accounts use simulated capital."
    },
    {
      question: "Passed Evaluation. What's next?",
      answer: "Once your objectives are completed: Submit KYC verification, Receive trader agreement & funded account within 24–48 business hours."
    },
    {
      question: "Is the Evaluation fee refundable?",
      answer: "Yes — after receiving your 1st payout."
    },
    {
      question: "How do payouts work?",
      answer: "First payout: 7 days after first funded trade. Next payouts: every 14 calendar days. Minimum withdrawal: $50. Payouts processed in 1–2 business days. Method: Crypto. Profit Split: 90% standard"
    },
    {
      question: "What happens if I break the rules?",
      answer: "During Evaluation: ineligible for funded account. During Funded: account terminated, agreement voided. Some rule violations are detected manually during account reviews."
    },
    {
      question: "Is there an inactivity rule?",
      answer: "There's no inactivity rule on Clear Funded, you can not place trades as many days as you want."
    },
    {
      question: "Am I trading with real money?",
      answer: "No — ClearFunded accounts are demo-based, but use live market data."
    },
    {
      question: "Can I leave profits in my account?",
      answer: "Yes. Profits can remain, but drawdown is still based on the initial balance."
    },
    {
      question: "What is the legal relationship?",
      answer: "A ClearFunded Trader signs a contract agreement after passing the evaluation. This legally defines the relationship between you and ClearFunded."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Crypto (BTC, ETH, USDC, USDT, LTC)."
    },
    {
      question: "Which countries are restricted?",
      answer: "Clear Funded services are not available in: Afghanistan, Iran, North Korea, Vietnam, Pakistan, Cuba, etc."
    },
    {
      question: "Do I get a certificate?",
      answer: "Yes — certificates for passed challenges and payouts are downloadable from your dashboard once you passed account."
    }
  ];

  return (
    <div className="min-h-screen space-bg">
      <div className="stars"></div>
      <PromoBanner />
      <Header />
      
      <div className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-space mb-4">
              Clear Funded – FAQ
            </h1>
            <p className="text-xl text-white/80 font-orbitron font-light">
              Find answers to common questions about Clear Funded
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-white/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-orbitron font-semibold text-white">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/80 pt-2 pb-4 font-orbitron font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 p-8 glass-card border-white/20 rounded-lg">
            <h2 className="text-2xl font-orbitron font-bold text-space mb-4">Still Have Questions?</h2>
            <p className="text-white/80 mb-6 font-orbitron font-light">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="moving-gradient text-white px-6 py-3 font-orbitron font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                Contact Support
              </Button>
              <Button
                onClick={() => window.location.href = "/auth"}
                className="glass-card border-white/30 text-white hover:border-space/50 px-6 py-3 font-orbitron font-semibold transition-all duration-300"
              >
                Start Your Challenge
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
