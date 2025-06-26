import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { SupportChat } from "./SupportChat";
export const SupportChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return <>
      {!isChatOpen}
      
      <SupportChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>;
};