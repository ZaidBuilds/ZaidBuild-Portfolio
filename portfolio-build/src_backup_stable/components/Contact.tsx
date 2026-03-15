"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Twitter, Github } from "lucide-react";

export const Contact = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const measure = () => setScrollHeight(document.body.scrollHeight);
    measure();
    // Re-measure after a delay to account for dynamic content loading
    const timer = setTimeout(measure, 1500);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    
    // Construct mailto
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${email}`);
    window.location.href = `mailto:hello@zaidbuilds.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-[#080808] py-40 px-[5vw] border-t border-[#1e1e1e] relative z-20">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between gap-20">
          
          {/* Left Column: Text Content */}
          <div className="w-full md:w-[45%]">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(245,245,245,0.4)] mb-8 block"
            >
              // contact
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif italic text-[clamp(2.5rem,5vw,4.5rem)] text-[#f5f5f5] leading-none mb-10"
            >
              Ready to Automate?
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-[rgba(245,245,245,0.45)] text-[1.1rem] leading-relaxed max-w-[480px] mb-12"
            >
              Got a process eating your time? Let's turn it into a self-running system. Drop a message — I respond fast.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-mono text-[0.8rem] text-[rgba(245,245,245,0.5)] bg-[rgba(245,245,245,0.03)] border border-[#1e1e1e] p-6 rounded-sm inline-block"
            >
              Don't scroll <span className="text-[#f5f5f5]">{scrollHeight.toLocaleString()}</span> pixels — just message me instead.
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full md:w-[50%]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="NAME" 
                  required
                  className="w-full bg-[#111111] border border-[#1e1e1e] rounded-[3px] px-4 py-[0.85rem] font-mono text-[0.85rem] text-[#f5f5f5] placeholder:text-[rgba(245,245,245,0.2)] focus:border-[rgba(245,245,245,0.5)] focus:ring-3 focus:ring-[rgba(245,245,245,0.05)] focus:outline-none transition-all duration-300"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="EMAIL" 
                  required
                  className="w-full bg-[#111111] border border-[#1e1e1e] rounded-[3px] px-4 py-[0.85rem] font-mono text-[0.85rem] text-[#f5f5f5] placeholder:text-[rgba(245,245,245,0.2)] focus:border-[rgba(245,245,245,0.5)] focus:ring-3 focus:ring-[rgba(245,245,245,0.05)] focus:outline-none transition-all duration-300"
                />
              </div>
              <textarea 
                name="message" 
                placeholder="YOUR MESSAGE..." 
                rows={6}
                required
                className="w-full bg-[#111111] border border-[#1e1e1e] rounded-[3px] px-4 py-[0.85rem] font-mono text-[0.85rem] text-[#f5f5f5] placeholder:text-[rgba(245,245,245,0.2)] focus:border-[rgba(245,245,245,0.5)] focus:ring-3 focus:ring-[rgba(245,245,245,0.05)] focus:outline-none transition-all duration-300 resize-none"
              />
              <button 
                type="submit"
                className="w-full bg-[#f5f5f5] text-[#080808] font-sans font-bold uppercase py-4 rounded-sm tracking-[0.08em] hover:bg-[rgba(245,245,245,0.88)] transition-all duration-300 active:scale-[0.98] mt-2 group"
              >
                Send Message <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </form>

            {/* Social Links Sub-section */}
            <div className="mt-20">
              <span className="font-mono text-[0.75rem] text-[rgba(245,245,245,0.3)] block mb-10">Or find me here —</span>
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {[
                  { icon: Instagram, label: "@thezaidbuilds", href: "https://www.instagram.com/thezaidbuilds" },
                  { icon: Linkedin, label: "/in/zaidbuilds", href: "https://www.linkedin.com/in/zaidbuilds" },
                  { icon: Youtube, label: "@zaidbuilds", href: "https://youtube.com/@zaidbuilds" },
                  { icon: Twitter, label: "@BuildWithZaid", href: "https://x.com/BuildWithZaid" },
                  { icon: Github, label: "ZaidBuilds", href: "https://github.com/ZaidBuilds" },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-[0.75rem] text-[rgba(245,245,245,0.4)] hover:text-[#f5f5f5] transition-all group"
                  >
                    <social.icon size={14} className="text-[rgba(245,245,245,0.2)] group-hover:text-white transition-colors" />
                    <span className="group-hover:underline underline-offset-4">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
