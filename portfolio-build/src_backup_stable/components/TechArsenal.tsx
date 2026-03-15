"use client";
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const TECH_GROUPS = [
  {
    category: "AI / LLM",
    tools: ["OpenAI API", "Ollama", "LangChain", "Whisper", "RAG Systems", "AI Agents", "Claude Code", "OpenRouter"]
  },
  {
    category: "Automation",
    tools: ["n8n", "Make.com", "Zapier", "Webhooks", "Business Process Automation", "Workflow Design"]
  },
  {
    category: "Languages",
    tools: ["Python", "JavaScript", "TypeScript", "SQL", "Bash", "JSON"]
  },
  {
    category: "Backend",
    tools: ["Node.js", "Express.js", "REST APIs", "Webhooks"]
  },
  {
    category: "Databases",
    tools: ["Firebase", "Supabase", "Vector DBs", "PostgreSQL", "Notion DB"]
  },
  {
    category: "Infrastructure",
    tools: ["Docker", "Linux", "Nginx", "VPS", "Oracle Cloud", "AWS Free Tier", "CI/CD", "Self-hosted Systems"]
  },
  {
    category: "Integrations",
    tools: ["WhatsApp API", "Telegram Bots", "Slack API", "Email Automation", "Google APIs", "Stripe", "Razorpay", "VAPI"]
  },
  {
    category: "Frontend",
    tools: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Vercel"]
  }
];

const ALL_TOOLS = TECH_GROUPS.flatMap(g => g.tools);

const TechCard = ({ group, index }: { group: typeof TECH_GROUPS[0], index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    once: true, 
    margin: "-10% 0px -20% 0px" 
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.05, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="relative w-full bg-[#111111] border border-[#1e1e1e] rounded-sm overflow-hidden group"
      data-cursor="EXPAND"
    >
      {/* Top Accent Bar - Animates Width */}
      <motion.div 
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : {}}
        transition={{ 
          duration: 0.8, 
          delay: (index * 0.05) + 0.3, 
          ease: "circOut" 
        }}
        className="absolute top-0 left-0 h-[2px] bg-[#f5f5f5] z-30"
      />

      {/* Card Content Wrapper */}
      <div className="flex flex-col">
        {/* Category Header - Always Visible */}
        <div className="h-[60px] flex items-center px-6 border-b border-[#1e1e1e]/40 z-20 bg-[#111]">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[rgba(245,245,245,0.3)]">
            {group.category}
          </span>
          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Tools Body - Expands on Scroll */}
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "auto" } : { height: 0 }}
          transition={{ 
            duration: 0.65, 
            delay: (index * 0.05) + 0.2, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="overflow-hidden bg-[#111]"
        >
          <div className="p-8 pt-6 flex flex-wrap gap-2.5">
            {group.tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, x: -5 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: (index * 0.05) + 0.4 + (i * 0.03) 
                }}
                className="font-mono text-[0.68rem] border border-[#2a2a2a] text-[rgba(245,245,245,0.45)] px-3 py-1.5 rounded-[2px] hover:border-[rgba(245,245,245,0.6)] hover:text-white transition-all cursor-crosshair whitespace-nowrap"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle Hover Reveal */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.01] transition-colors pointer-events-none" />
    </motion.div>
  );
};

const ToolMarquee = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-16 opacity-20 border-t border-[#1e1e1e]/20">
      <div className="flex animate-marquee-left" style={{ animationDuration: '60s' }}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-20 items-center px-10">
            {ALL_TOOLS.map((tool, idx) => (
              <span key={idx} className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[#f5f5f5]">
                {tool}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const TechArsenal = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="stack" ref={containerRef} className="bg-[#080808] py-40 pb-0 relative z-10 border-t border-[#1e1e1e]">
      <div className="max-w-[1400px] mx-auto px-[5vw] mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(245,245,245,0.4)] mb-8 block"
        >
          // tech arsenal
        </motion.span>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif italic text-[clamp(3.5rem,7vw,6rem)] text-[#f5f5f5] leading-[0.9]"
          >
            Tools I <br /> Orchestrate.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans text-[0.95rem] text-[rgba(245,245,245,0.4)] max-w-[320px] leading-relaxed"
          >
            A curated stack optimized for speed, autonomy, and scalable enterprise intelligence.
          </motion.p>
        </div>
      </div>

      {/* Grid of Expanding Cards */}
      <div className="max-w-[1400px] mx-auto px-[5vw] grid grid-cols-1 md:grid-cols-2 gap-4 mb-40">
        {TECH_GROUPS.map((group, i) => (
          <TechCard key={group.category} group={group} index={i} />
        ))}
      </div>

      <ToolMarquee />
    </section>
  );
};
