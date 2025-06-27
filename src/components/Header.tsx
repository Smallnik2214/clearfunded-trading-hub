
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 space-bg border-b border-white/20 backdrop-blur-md">
      <div className="stars-header"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand - clickable to return home */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => window.location.href = "/"}
          >
            <h1 className="text-2xl font-orbitron font-bold text-space">
              MATCH-TRADER
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-white/80 hover:text-space transition-colors font-inter">
              Home
            </a>
            <a href="/about" className="text-white/80 hover:text-space transition-colors font-inter">
              About Us
            </a>
            <a href="/rules" className="text-white/80 hover:text-space transition-colors font-inter">
              Trading Rules
            </a>
            <a href="/faq" className="text-white/80 hover:text-space transition-colors font-inter">
              FAQ
            </a>
          </nav>

          {/* CTA Button with moving gradient */}
          <div className="hidden md:block">
            <Button
              className="moving-gradient text-white font-orbitron font-semibold border-0 hover:scale-105 transition-transform duration-300"
              onClick={() => window.location.href = "/auth"}
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
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-white/80 hover:text-space transition-colors font-inter">
                Home
              </a>
              <a href="/about" className="text-white/80 hover:text-space transition-colors font-inter">
                About Us
              </a>
              <a href="/rules" className="text-white/80 hover:text-space transition-colors font-inter">
                Trading Rules
              </a>
              <a href="/faq" className="text-white/80 hover:text-space transition-colors font-inter">
                FAQ
              </a>
              <Button
                className="moving-gradient text-white font-orbitron font-semibold w-full border-0"
                onClick={() => window.location.href = "/auth"}
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
