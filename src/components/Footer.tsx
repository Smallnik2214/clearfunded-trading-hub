
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative space-bg py-12 px-4 overflow-hidden">
      <div className="stars"></div>
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-orbitron font-bold mb-4 text-space">Clear Funded</h3>
            <p className="text-white/80 text-sm mb-4 font-orbitron">
              Clear rules. Real growth.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-white/60 hover:text-space transition-colors cursor-pointer" />
              <Twitter className="h-5 w-5 text-white/60 hover:text-space transition-colors cursor-pointer" />
              <Instagram className="h-5 w-5 text-white/60 hover:text-space transition-colors cursor-pointer" />
              <Linkedin className="h-5 w-5 text-white/60 hover:text-space transition-colors cursor-pointer" />
              <Youtube className="h-5 w-5 text-white/60 hover:text-space transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold mb-4 text-space">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-white/80 hover:text-space transition-colors font-orbitron">About Us</a></li>
              <li><a href="/rules" className="text-white/80 hover:text-space transition-colors font-orbitron">Trading Rules</a></li>
              <li><a href="/faq" className="text-white/80 hover:text-space transition-colors font-orbitron">FAQ</a></li>
              <li><a href="/register" className="text-white/80 hover:text-space transition-colors font-orbitron">Start Trading</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-orbitron font-semibold mb-4 text-space">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/terms" className="text-white/80 hover:text-space transition-colors font-orbitron">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-white/80 hover:text-space transition-colors font-orbitron">Privacy Policy</a></li>
              <li><a href="/refund" className="text-white/80 hover:text-space transition-colors font-orbitron">Refund Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-space transition-colors font-orbitron">Risk Disclosure</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron font-semibold mb-4 text-space">Contact</h4>
            <div className="text-sm text-white/80 space-y-2 font-orbitron">
              <p>Street 12, Al Barsha 1</p>
              <p>80042 Dubai, UAE</p>
              <p>support@clearfunded.xyz</p>
              <p>www.clearfunded.xyz</p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-xs text-white/60 space-y-3 font-orbitron">
            <h5 className="font-semibold text-space">Legal & Risk Disclosure (Clear Funded)</h5>
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
          <div className="mt-6 pt-6 border-t border-white/20 text-center">
            <p className="text-xs text-white/40 font-orbitron">
              © Clear Funded 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
