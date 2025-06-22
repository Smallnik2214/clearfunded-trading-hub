
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Protecting your private information is our priority. This Statement of Privacy applies to clearfunded.com, and governs data collection and usage. By using Clear Funded website, you consent to the data practices described in this Statement.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Collection of your Personal Information</h2>
            <p>
              In order to better provide you with products and services offered, Clear Funded may collect personally identifiable information, such as your:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>First and Last Name</li>
              <li>Home Address</li>
              <li>Mailing Address</li>
              <li>E-mail Address</li>
              <li>Phone Number</li>
              <li>Financial Information</li>
            </ul>
            <p>
              If you purchase Clear Funded products and services, we collect billing and credit card information. This information is used to complete the purchase transaction or issue payments to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Know-Your-Customer (KYC)</h2>
            <p>
              Upon request by the Company, you may be required to complete our onboarding process, which includes due diligence and client verification procedures. This process involves collecting identification documents, including non-public personal information for you (if applicable).
            </p>
            <p>
              You acknowledge that the Company shall accept you as a User only after you satisfactorily clear all the verifications required by us, including any required under the anti-money laundering and combatting financing of terrorism ("AML/CFT") laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of your Personal Information</h2>
            <p>
              Clear Funded collects and uses your personal information to operate and deliver the services you have requested. Clear Funded may also use your personally identifiable information to inform you of other products or services available from Clear Funded and its affiliates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing Information with Third Parties</h2>
            <p>
              Clear Funded may sell, rent, or lease customer information to third parties for the following reasons: We will collect this data and provide it to third parties if it is a necessary step in the User account creation process, contributes to the ease of use, reliability, or functionality of our products, or if it is of mutual interest to Clear Funded.
            </p>
            <p>
              Clear Funded may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conform to the edicts of the law or comply with legal process</li>
              <li>Protect and defend the rights or property of Clear Funded</li>
              <li>Act under exigent circumstances to protect the personal safety of users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Automatically Collected Information</h2>
            <p>
              Information about your computer hardware and software may be automatically collected by Clear Funded. This information can include your IP address, browser type, domain names, access times, and referring website addresses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Cookies</h2>
            <p>
              Clear Funded website may use cookies to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer.
            </p>
            <p>
              You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Security of your Personal Information</h2>
            <p>
              Clear Funded secures your personal information from unauthorized access, use, or disclosure. When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.
            </p>
            <p>
              We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Right to Deletion</h2>
            <p>
              Subject to certain exceptions and for those individuals who meet jurisdictional and legal requirements, on receipt of a verifiable request from you, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delete your personal information from our records</li>
              <li>Direct any service providers to delete your personal information from their records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children Under Eighteen</h2>
            <p>
              Clear Funded does not knowingly collect personally identifiable information from children under the age of eighteen. If you are under the age of 18, you must ask your parent or guardian for permission to use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">E-mail Communications</h2>
            <p>
              From time to time, Clear Funded may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication.
            </p>
            <p>
              If you would like to stop receiving marketing or promotional communications via email from Clear Funded, you may opt out of such communications by clicking on the unsubscribe button found at the bottom of each email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p>
              Clear Funded welcomes your questions or comments regarding this Statement of Privacy. If you believe that Clear Funded has not adhered to this Statement, please contact Clear Funded at support@clearfunded.com.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
