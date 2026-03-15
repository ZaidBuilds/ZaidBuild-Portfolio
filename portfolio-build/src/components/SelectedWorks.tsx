"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PROJECTS = [
  {
    number: "01",
    year: "2025",
    category: "AI Solution",
    title: "AI Desk — University",
    description: "Multi-agent university helpdesk. Handles complex student queries with automated reasoning.",
    stack: ["n8n", "LangGraph", "Azure"],
    href: "https://github.com/ZaidBuilds",
    image: "/projects/university_bot.png"
  },
  {
    number: "02",
    year: "2025",
    category: "Voice AI",
    title: "Hey Jarvis — Personal",
    description: "Real-time voice assistant with low-latency tool calling and terminal control.",
    stack: ["OpenAI", "Python", "Eel"],
    href: "https://github.com/ZaidBuilds/Hey-Jarvis",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f"
  },
  {
    number: "03",
    year: "2025",
    category: "Automation",
    title: "WhatsApp Bot — Pro",
    description: "Enterprise-grade WhatsApp automation with document processing and CRM sync.",
    stack: ["WhatsApp API", "LangChain", "Node.js"],
    href: "https://github.com/ZaidBuilds",
    image: "/projects/openclaw.png"
  },
  {
    number: "04",
    year: "2025",
    category: "Agentic AI",
    title: "OpenClaw — Reasoning",
    description: "Sovereign AI agent capable of recursive task execution on local hardware.",
    stack: ["Ollama", "Python", "Mistral"],
    href: "https://github.com/ZaidBuilds",
    image: "/projects/openclaw.png"
  },
  {
    number: "05",
    year: "2025",
    category: "Neural Tools",
    title: "Revenue OS — AI",
    description: "Automated sales pipeline that qualifies leads and generates personalized outreach.",
    stack: ["Make.com", "GPT-4o", "Clay"],
    href: "https://github.com/ZaidBuilds",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    number: "06",
    year: "2025",
    category: "Infrastructure",
    title: "Nexus Core — MCP",
    description: "Custom Model Context Protocol servers for bridging local tools with LLM reasoning.",
    stack: ["TypeScript", "Docker", "Go"],
    href: "https://github.com/ZaidBuilds",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  }
];

// Replaced by horizontal scroll container below

// Replaced by horizontal scroll container below

export const SelectedWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-180%"]);

  return (
    <section id="works" ref={containerRef} className="relative bg-[#080808] h-[400vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-start pt-[10vh] overflow-visible">
        
        {/* Section Header */}
        <div className="px-[5vw] mb-20 relative z-30">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-white/20 mb-6 block"
          >
            // Selected Archives
          </motion.span>
          <div className="flex justify-between items-end">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-serif italic text-[clamp(2.5rem,5vw,5rem)] text-white leading-[1.1]"
            >
              Selected <span className="text-white/20">Works.</span>
            </motion.h2>

            <motion.a 
              href="https://github.com/ZaidBuilds"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-white/40 hover:text-white flex items-center gap-3 pb-4 transition-colors group px-4"
            >
              All Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </div>
        </div>

        {/* Horizontal Container */}
        <motion.div style={{ x }} className="flex gap-12 px-[5vw] items-stretch">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              className="min-w-[600px] md:min-w-[900px] bg-[#0d0d0d] border border-white/5 flex flex-col md:flex-row items-center relative group overflow-hidden"
            >
              {/* Phantom Title */}
              <div className="absolute inset-0 z-0 opacity-[0.03] select-none pointer-events-none flex items-center justify-center">
                 <span className="font-serif italic text-[20rem] whitespace-nowrap">{project.title.split(' ')[0]}</span>
              </div>

              {/* Content Side - Now Full Width */}
              <div className="w-full p-12 md:p-24 relative z-10 flex flex-col justify-center">
                 <div className="flex gap-3 mb-8">
                    <span className="font-mono text-[0.6rem] uppercase tracking-widest text-white/30">{project.category}</span>
                    <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#00FF41]/40 px-3 py-1 border border-[#00FF41]/10 rounded-full">System Active</span>
                 </div>
                 
                 <h3 className="font-serif italic text-6xl md:text-8xl text-white mb-8 leading-tight">
                    {project.title}
                 </h3>
                 
                 <p className="font-sans text-lg text-white/40 leading-relaxed mb-12 max-w-[600px]">
                    {project.description}
                 </p>

                 <div className="flex flex-wrap gap-3 mb-16">
                    {project.stack.map((item, si) => (
                       <span key={si} className="font-mono text-xs text-white/20 border border-white/5 p-2 px-4 rounded-sm bg-white/[0.02]">{item}</span>
                    ))}
                 </div>

                 <a href={project.href} className="flex items-center gap-6 font-mono text-[0.7rem] uppercase tracking-[0.4em] text-white/60 hover:text-white transition-all group/link">
                    Access Neural Repository <span className="text-2xl group-hover/link:translate-x-2 transition-transform">↗</span>
                 </a>
              </div>
            </motion.div>
          ))}
          
          {/* End Card - Highly Visible with All Projects Prompt */}
          <div className="min-w-[800px] flex items-center justify-center h-full pr-[10vw]">
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="bg-[#111] border border-white/10 p-24 rounded-3xl text-center backdrop-blur-md group relative overflow-hidden"
             >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF41]/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />
                
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.5em] text-[#00FF41] mb-8 block font-bold">// END OF ARCHIVE</span>
                
                <h3 className="font-serif italic text-6xl md:text-7xl text-white mb-12 leading-tight">
                  Discover the<br/>Full Repository
                </h3>

                <div className="flex flex-col items-center gap-8">
                  <a 
                    href="https://github.com/ZaidBuilds" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-6 bg-white text-black font-mono text-sm uppercase tracking-[0.3em] px-12 py-6 rounded-full hover:bg-[#00FF41] transition-all group-hover:px-16"
                  >
                    View All Projects <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                  </a>

                  <div className="flex items-center gap-3 font-mono text-[0.55rem] uppercase tracking-widest text-white/20">
                     <span>Explore 50+ repositories</span>
                     <span className="w-1 h-1 rounded-full bg-white/20" />
                     <span>Sovereign AI Agents</span>
                  </div>
                </div>
             </motion.div>
          </div>
        </motion.div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-20 left-[5vw] right-[5vw] h-[1px] bg-white/5">
          <motion.div 
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="h-full bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          />
        </div>
      </div>
    </section>
  );
};
