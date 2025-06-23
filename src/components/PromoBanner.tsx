
import { useState } from "react";
import { X } from "lucide-react";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="aurora-bg border-b border-white/20 py-2 px-4 relative overflow-hidden">
      <div className="aurora-bg::before"></div>
      <div className="flex items-center justify-center relative z-10">
        <div className="animate-pulse mr-2">⭐</div>
        <div className="text-sm font-semibold tracking-wide">
          <span className="animate-bounce inline-block text-aurora">SPECIAL OFFER:</span>
          <span className="ml-2 text-white/90">Get 30% OFF on all challenges!</span>
          <span className="ml-2 bg-gradient-to-r from-cyan-400 to-pink-400 text-black px-2 py-1 rounded text-xs font-bold">
            Use Code: STAY CLEAR!
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-300 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
