
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - clickable to return home */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.location.href = "/"}>
            <img
              src="/lovable-uploads/ab62176f-dabc-4a42-85ae-f6c171796362.png"
              alt="Clear Funded"
              className="h-16 w-auto"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const nextSibling = target.nextElementSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'block';
                }
              }}
            />
            <div className="hidden text-2xl font-bold">
              <span className="text-green-600">Clear</span>
              <span className="text-gray-900"> Funded</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
              About Us
            </a>
            <a href="/rules" className="text-gray-700 hover:text-green-600 transition-colors">
              Trading Rules
            </a>
            <a href="/faq" className="text-gray-700 hover:text-green-600 transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.location.href = "/register"}
            >
              Start Trading
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
                About Us
              </a>
              <a href="/rules" className="text-gray-700 hover:text-green-600 transition-colors">
                Trading Rules
              </a>
              <a href="/faq" className="text-gray-700 hover:text-green-600 transition-colors">
                FAQ
              </a>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white w-full"
                onClick={() => window.location.href = "/register"}
              >
                Start Trading
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
