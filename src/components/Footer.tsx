
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Clear Funded</h3>
            <p className="text-gray-300 text-sm mb-4">
              Clear rules. Real growth.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400" />
              <Twitter className="h-5 w-5 text-gray-400" />
              <Instagram className="h-5 w-5 text-gray-400" />
              <Linkedin className="h-5 w-5 text-gray-400" />
              <Youtube className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/rules" className="text-gray-300 hover:text-white">Trading Rules</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="/register" className="text-gray-300 hover:text-white">Start Trading</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Risk Disclosure</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Street 12, Al Barsha 1</p>
              <p>80042 Dubai, UAE</p>
              <p>support@clearfunded.xyz</p>
              <p>www.clearfunded.xyz</p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-xs text-gray-400 space-y-3">
            <h5 className="font-semibold text-gray-300">Legal & Risk Disclosure (Clear Funded)</h5>
            <p>
              All accounts provided by Clear Funded operate in a simulated trading environment and are demo accounts only. All content distributed by Clear Funded and its affiliates (collectively, the "Company") is for informational purposes only. Nothing provided by the Company constitutes investment advice, an offer or solicitation, or a recommendation, endorsement, or sponsorship of any financial product or entity.
            </p>
            <p>
              Clear Funded is not a broker, custodian, or financial institution and does not accept client deposits. Fees collected for participation are not investments and are used to support operational expenses such as staff and technology. Enrolling in any program is voluntary and does not represent a financial investment.
            </p>
            <p>
              The Company is governed by the laws of the United Arab Emirates. Clear Funded is a limited liability company incorporated under the laws of the Comoros Union (Company No. HY01223081), with a registered address at Dubai. It is licensed under the International Brokerage and Clearing House License, IBC Regulation Act 2014 (License No. BFX2024004) for simulated services. Clear Funded does not serve residents of restricted jurisdictions, including those on FATF or EU/UN sanctions lists.
            </p>
            <p>
              <strong>Risk Warning:</strong> Trading derivatives and leveraged products involves high risk. Losses may exceed your initial capital. You should only trade with funds you can afford to lose. Past performance is not indicative of future results. Always consult an independent financial professional before engaging in any trading activity.
            </p>
            <p>
              Platform availability, performance, and content may vary by region. No guarantee is made regarding simulated trading results and real-market comparability.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-500">
              © Clear Funded 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
