
import { Header } from "@/components/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a prop firm challenge?",
      answer: "A prop firm challenge is an evaluation process where traders demonstrate their skills by meeting specific profit targets while adhering to risk management rules. Successfully completing the challenge grants access to funded trading accounts."
    },
    {
      question: "How long do I have to complete the challenge?",
      answer: "At Clear Funded, we believe in unlimited time limits. You can take as long as you need to complete your challenge, allowing you to trade without time pressure and focus on consistent, profitable trading."
    },
    {
      question: "What happens if I fail the challenge?",
      answer: "If you don't meet the profit target or violate risk rules, you can purchase a new challenge at any time. We also offer discounted retake options for traders who want to try again."
    },
    {
      question: "How quickly can I get my payouts?",
      answer: "Funded traders receive weekly payouts every Friday, provided they have at least $100 in profits. Payouts are processed within 24-48 hours via cryptocurrency or bank transfer."
    },
    {
      question: "What trading platforms do you support?",
      answer: "We support multiple professional trading platforms including cTrader and MetaTrader 5 (MT5), giving you flexibility to trade on your preferred platform."
    },
    {
      question: "Can I use Expert Advisors (EAs) or trading bots?",
      answer: "Yes, Expert Advisors and automated trading systems are allowed on all our challenges and funded accounts, provided they comply with our risk management rules."
    },
    {
      question: "What instruments can I trade?",
      answer: "You can trade major and minor forex pairs, indices, commodities, and cryptocurrencies. Each account type has access to 100+ trading instruments with competitive spreads."
    },
    {
      question: "Is there a minimum number of trading days?",
      answer: "Yes, you must trade for a minimum of 10 days during your challenge to demonstrate consistency and proper risk management skills."
    },
    {
      question: "What is the maximum leverage available?",
      answer: "All accounts come with up to 1:100 leverage on major currency pairs, providing you with sufficient trading power while maintaining responsible risk management."
    },
    {
      question: "Do you charge any monthly fees for funded accounts?",
      answer: "No, there are no monthly fees or subscription costs for funded accounts. You only pay the initial challenge fee, and we take a small percentage of your profits (10%)."
    },
    {
      question: "Can I have multiple accounts?",
      answer: "Yes, successful traders can manage multiple funded accounts simultaneously, allowing you to scale your trading and increase your earning potential."
    },
    {
      question: "What countries do you accept traders from?",
      answer: "We accept traders from most countries worldwide. However, we cannot accept traders from certain restricted jurisdictions due to regulatory requirements. Please contact support to confirm eligibility."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
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
    </div>
  );
};

export default FAQ;
