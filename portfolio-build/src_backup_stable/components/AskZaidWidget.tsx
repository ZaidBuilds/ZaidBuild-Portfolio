"use client";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
};

export const AskZaidWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Zaid's AI orchestrator active. Ask me about services, projects, or technical consulting. ⚡",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    setTimeout(() => {
      const lower = userMsg.text.toLowerCase();
      let reply = "Processing request. For a direct human response, message Zaid at @thezaidbuilds on Instagram.";

      if (lower.includes("service") || lower.includes("what do you do") || lower.includes("offer")) {
        reply = "Available Services: Agentic AI Systems, n8n Orchestration, Voice AI Agents, and Custom WhatsApp Automation. Solutions start at $79. Interested?";
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("how much")) {
        reply = "Workflows start at $79. Advanced Voice Agents start at $149. Projects are quoted based on architectural complexity.";
      } else if (lower.includes("contact") || lower.includes("hire") || lower.includes("work")) {
        reply = "Primary Channel: Instagram @thezaidbuilds. Secondary: LinkedIn /in/zaidbuilds. Current lead time: ~3 days.";
      } else if (lower.includes("project") || lower.includes("portfolio")) {
        reply = "Recent Builds: OpenClaw (WhatsApp Agent), Voice Lead Qualifier, Revenue OS. Check the 'Works' section for details.";
      } else if (lower.includes("youtube") || lower.includes("content")) {
        reply = "Deployment documentation available at youtube.com/@zaidbuilds. 100 days of building in public.";
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: "ai", text: reply },
      ]);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center z-[9999] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-110 active:scale-95 transition-all"
        title="Ask Zaid AI"
      >
         <MessageSquare size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 w-[340px] h-[460px] bg-[#0b0b0b] border border-[#1e1e1e] rounded-lg shadow-[0_30px_90px_rgba(0,0,0,0.9)] z-[9999] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 bg-[#0b0b0b] border-b border-[#1e1e1e]">
              <div className="flex flex-col gap-1">
                <h3 className="font-sans font-black text-xs uppercase tracking-[0.2em] text-white">Ask Zaid</h3>
                <div className="flex items-center gap-1.5 font-mono text-[0.55rem] uppercase tracking-widest text-[rgba(245,245,245,0.35)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Orchestrator Online
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[rgba(245,245,245,0.3)] hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-[#0b0b0b] p-5 overflow-y-auto flex flex-col gap-5 scrollbar-hide">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[90%] p-3.5 rounded-md text-[0.75rem] font-sans leading-relaxed tracking-wide ${
                      msg.sender === "user"
                        ? "bg-white text-black font-semibold"
                        : "bg-[#111] border border-[#1e1e1e] text-[rgba(245,245,245,0.8)]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSend}
              className="p-4 bg-[#0b0b0b] border-t border-[#1e1e1e] flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="INPUT COMMAND..."
                className="flex-1 bg-transparent text-white font-mono text-[0.65rem] tracking-widest placeholder:text-[rgba(245,245,245,0.1)] focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-8 h-8 flex items-center justify-center text-white disabled:opacity-20 hover:bg-white/5 rounded-full transition-colors"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
