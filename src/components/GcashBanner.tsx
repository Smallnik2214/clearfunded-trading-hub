
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export const GcashBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 200;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isScrolled]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-in-bottom">
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-4 px-6 shadow-lg">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-full p-2">
              <span className="text-green-600 font-bold text-lg">₱</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Gcash cashout available here!</h3>
              <p className="text-green-100 text-sm">Fast and secure cashout process</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-green-200 transition-colors p-1 rounded-full hover:bg-green-700"
            aria-label="Close banner"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
