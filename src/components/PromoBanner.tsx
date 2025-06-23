
import { useState } from "react";
import { X } from "lucide-react";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 relative overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="animate-pulse mr-2">🔥</div>
        <div className="text-sm font-semibold tracking-wide">
          <span className="animate-bounce inline-block">SPECIAL OFFER:</span>
          <span className="ml-2">Get 30% OFF on all challenges!</span>
          <span className="ml-2 bg-white text-red-600 px-2 py-1 rounded text-xs font-bold">
            Use Code: STAY CLEAR!
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
