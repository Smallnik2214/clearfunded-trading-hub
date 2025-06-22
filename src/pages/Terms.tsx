
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p>
              This website, Clear Funded (also referred to as "The Company"), offers this website, including all information, tools and services available from this site to you, the user, conditional to your acceptance of all terms, conditions, policies and notices stated here.
            </p>
            <p>
              By using our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
            </p>
            <p>
              Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Age Requirements</h2>
            <p>
              The Services are only intended for persons over the age of 18 residing in the country for which the Services are available. By registering on the Website, you confirm that you are over 18 years of age. If you are under 18 years of age, you may not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Disclaimer</h2>
            <p className="font-semibold">
              NONE OF THE SERVICES PROVIDED TO YOU BY THE PROVIDER CAN BE CONSIDERED INVESTMENT SERVICES IN ACCORDANCE WITH APPLICABLE LAWS. THE PROVIDER DOES NOT GIVE OR PROVIDE TO YOU ANY GUIDANCE, INSTRUCTIONS, OR INFORMATION ABOUT HOW OR IN WHICH MANNER YOU SHOULD PERFORM TRANSACTIONS WHEN USING THE SERVICES OR OTHERWISE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Evaluation Fee & Refunds</h2>
            <p>
              All payments are final and for evaluation purposes only. The registration fees are paid to allow you to access the Clear Funded platform, models and services. The Customer is not entitled to a refund of the registration fees as the service is directly delivered after purchase. No refund applies to the service that Clear Funded offers, except the evaluation fee is refundable after receiving your 1st payout.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Registration Terms</h2>
            <p>By agreeing to these Terms of Service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are at least the age of majority in your state or province of residence and in no event less than 18 years of age</li>
              <li>You have provided us with accurate, true and complete information about yourself</li>
              <li>You may not use our services for any illegal or unauthorized purpose</li>
              <li>A breach or violation of any of the Terms will result in an immediate termination of your Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Clear Funded Evaluation Stage and Funded Accounts</h2>
            <p>
              To trade a funded account, you must complete our Evaluation process, which is a demo-based trading challenge with rules and profit targets. Upon success, you'll receive a funded account.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Account Sizes</h3>
            <p>Choose from: $5K, $10K, $25K, $50K, $100K, $200K. Your Evaluation begins when you place your first trade.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1-Step Account Rules</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Profit Target:</strong> Reach 10% profit without breaking any rules to qualify for funding</li>
              <li><strong>Daily Loss:</strong> 4% of initial balance</li>
              <li><strong>Drawdown Type:</strong> Static</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2-Step Account Rules</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Profit Targets:</strong> Phase 1: 8% profit, Phase 2: 5% profit</li>
              <li><strong>Daily Loss:</strong> 5% of initial balance</li>
              <li><strong>Total Loss:</strong> 10% max from initial balance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Profit Sharing & Withdrawals</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Withdrawals are processed every two weeks</li>
              <li>Profit split is 90% to you, 10% to Clear Funded</li>
              <li>Withdrawal requests are typically processed within 2-3 business days</li>
              <li>First payout: 7 days after first funded trade</li>
              <li>Next payouts: every 14 calendar days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trading Rules</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Tradable Instruments</h3>
            <p>You can trade Forex, FX Exotics, Indices, Gold & Commodities, and Crypto.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Leverage</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>FX: 1:100</li>
              <li>Indices & Commodities: 1:30</li>
              <li>Crypto: 1:2</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Prohibited Strategies</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Exploiting demo server freezes or delays</li>
              <li>Using delayed data feeds or charts</li>
              <li>Tick scalping, HFT bots, arbitrage systems</li>
              <li>Any emulators or unfair automation methods</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p>
              In no case shall Clear Funded be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p>Questions about the Terms of Service should be sent to us at support@clearfunded.com.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Applicable Law</h2>
            <p>
              Any legal relations established by these Terms and Conditions shall be subject to the laws of Dubai, where applicable.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
