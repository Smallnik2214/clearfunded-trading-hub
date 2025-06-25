
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { SupportChat } from "./SupportChat";

export const SupportChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {!isChatOpen && (
        <Button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 z-40 rounded-full w-14 h-14 moving-gradient text-white shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
      
      <SupportChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </>
  );
};
