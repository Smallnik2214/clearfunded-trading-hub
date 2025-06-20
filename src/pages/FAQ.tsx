
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <Header />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Clear Funded – FAQ</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Clear Funded
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 p-8 bg-green-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Support
              </button>
              <button
                onClick={() => window.location.href = "/register"}
                className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Challenge
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
