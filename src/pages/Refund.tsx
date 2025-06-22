
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Refund = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            In this Refund Policy, "us,", "our", and "we" shall mean CLEAR FUNDED ("Clear Funded").
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refunds Post-Purchase</h2>
            <p>
              Once a purchase has been made and the evaluation credentials have been emailed to the customer, no refunds under any circumstances will be accepted. Customers have the ability to "try before you buy" as noted above and can clearly have a full experience and know what to expect prior to purchasing a trading challenge. All sales are final.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refunds Upon Completion of the Evaluation Program</h2>
            <p>
              After you have successfully completed the Clear Funded Evaluation and have entered into a written agreement with us in relation to the proprietary trading phase, you will receive a refund of the initial evaluation fee you paid when you purchased a Clear Funded Evaluation via our website upon traders fourth successful profit split payment. The traders evaluation fee will not be refunded until trader has reached the fourth profit split.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of this Policy</h2>
            <p>
              It is the traders responsibility to familiarize themselves with this Refund Policy. The terms of this Refund Policy, together with our Evaluation Terms and Conditions, are incorporated into the traders contract with us for the purchase of Clear Funded Evaluations.
            </p>
            <p>
              By placing an order for the purchase of any Clear Funded Evaluation, the trader indicates they have read this Refund Policy and they agree with and fully accept the terms of this Refund Policy. If trader does not agree with or fully accept the terms of this Refund Policy, trader is prohibited from placing an order with Clear Funded.
            </p>
            <p>
              Please contact us at support@clearfunded.com for any questions regarding our refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Chargebacks</h2>
            <p>
              Trader expressly agrees not to make any chargeback claims on any payments made to Clear Funded whether by way of credit card or any other payment channel without first contacting Clear Funded. In any such situation, trader expressly agrees to provide Clear Funded with full details relating to the intended chargeback claim.
            </p>
            <p>
              If trader makes a chargeback claim, Clear Funded shall at all times be entitled to suspend any Membership Accounts or Evaluation Accounts that trader may hold and suspend the payments of any profit split payments from such accounts to trader.
            </p>
            <p>
              If trader makes a chargeback claim, Clear Funded shall be entitled to recover from trader any amounts paid by Clear Funded to trader in respect of any Membership Accounts or Evaluation Accounts trader may hold, including but not limited to any and all profit split payments.
            </p>
            <p>
              If trader makes a chargeback claim whether successful or not, trader expressly agrees to pay for all costs incurred by Clear Funded in respect of defending such chargeback claims, including but not limited to all legal fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to this Policy</h2>
            <p>
              We reserve the right to update or change this Refund Policy at any time. Any changes will be effective immediately upon posting on our website. By shopping with Clear Funded, trader agrees to abide by this Refund Policy.
            </p>
            <p>
              Please contact our Customer Support team with all questions regarding this Refund Policy.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Refund;
