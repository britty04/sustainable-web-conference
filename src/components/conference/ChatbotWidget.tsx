import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useMediaQuery } from "react-use";

type Message = {
  type: "user" | "bot";
  content: string;
};

const predefinedResponses: Record<string, string> = {
  "registration": "To register for ICSDT 2025, visit our registration portal. Early bird registration is available until June 1, 2025. The registration fee includes access to all conference sessions, materials, and refreshments.",
  "deadline": "The paper submission deadline is May 2, 2025. Early submissions are encouraged to allow time for thorough review.",
  "format": "Papers should follow the IEEE conference format. Full papers should be 12-15+ pages, and short papers 6-11 pages.",
  "venue": "The conference will be held at INTI UNIVERSITY, Nilai, Malaysia on August 6, 2025.",
  "topics": "Key topics include Computing, Education, Engineering, Innovation, Technology, Interdisciplinary approaches, Sustainability, and Business transformation.",
  "accommodation": "We have partnered with several hotels near the venue. Details about accommodation options will be provided upon registration.",
  "contact": "For any queries, please contact the conference secretariat at icsdt2025@example.com",
  "schedule": "The conference begins at 9:00 AM on August 6, 2025. A detailed schedule is available on our website.",
};

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Hello! I'm your ICSDT 2025 assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const findBestMatch = (input: string): string => {
    const inputLower = input.toLowerCase();
    let bestMatch = "I apologize, but I don't have specific information about that. Please contact the conference organizers for more details.";
    
    for (const [key, value] of Object.entries(predefinedResponses)) {
      if (inputLower.includes(key)) {
        bestMatch = value;
        break;
      }
    }
    return bestMatch;
  };

  const simulateTyping = async (response: string) => {
    setIsTyping(true);
    // Simulate natural typing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setMessages((prev) => [...prev, { type: "bot", content: response }]);
    setIsTyping(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setInput("");

    const response = findBestMatch(userMessage.toLowerCase());
    simulateTyping(response);
  };

  return (
    <div className={`fixed ${isMobile ? "bottom-4 right-4 left-4" : "bottom-8 right-8"} z-50`}>
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      ) : (
        <Card className={`${isMobile ? "w-full" : "w-96"} shadow-xl`}>
          <div className="p-4 border-b flex justify-between items-center bg-primary text-primary-foreground rounded-t-lg">
            <h3 className="font-semibold">ICSDT 2025 Assistant</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary/90"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <ScrollArea className="h-[400px] p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-muted">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isTyping}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
};