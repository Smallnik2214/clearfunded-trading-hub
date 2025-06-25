
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Minimize2, Maximize2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

interface SupportChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportChat = ({ isOpen, onClose }: SupportChatProps) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to Clear Funded support. How can I help you today?',
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate support response
    setTimeout(() => {
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message. Our support team will respond shortly. For immediate assistance, please call our 24/7 hotline.',
        sender: 'support',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, supportMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`glass-card border-white/20 ${isMinimized ? 'w-80 h-16' : 'w-80 h-96'} transition-all duration-300`}>
        <CardHeader className="p-4 border-b border-white/20">
          <div className="flex items-center justify-between">
            <CardTitle className="text-space font-orbitron text-lg flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Support Chat
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white/60 hover:text-white hover:bg-white/10 h-8 w-8"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white/60 hover:text-white hover:bg-white/10 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'moving-gradient text-white'
                        : 'bg-white/10 text-white border border-white/20'
                    }`}
                  >
                    <p className="text-sm font-orbitron">{message.text}</p>
                    <p className="text-xs text-white/60 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/20">
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="glass-card border-white/20 text-white placeholder:text-white/50 font-orbitron"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="moving-gradient text-white font-orbitron"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};
