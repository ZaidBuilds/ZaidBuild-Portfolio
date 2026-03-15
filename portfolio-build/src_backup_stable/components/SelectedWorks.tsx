"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    number: "01",
    year: "2025",
    category: "Agentic AI",
    title: "OpenClaw — WhatsApp AI Agent",
    description: "Persistent-memory WhatsApp agent with contextual multi-turn reasoning. Runs entirely on free LLM layer — Ollama locally, no OpenAI costs. Handles conversations like a human assistant.",
    stack: ["n8n", "WhatsApp API", "LangChain", "Ollama"],
    href: "https://github.com/ZaidBuilds",
    image: "/projects/openclaw.png"
  },
  {
    number: "02",
    year: "2025",
    category: "Developer Tool",
    title: "Claude Code Integration Setup",
    description: "Local Claude Code environment configured with Ollama for free AI inference. Full setup including environment variables, auth conflict resolution, and MCP server integration.",
    stack: ["Claude Code", "Ollama", "MCP", "Windows", "PowerShell"],
    href: "https://github.com/ZaidBuilds",
    image: "/projects/claude_setup.png"
  },
  {
    number: "03",
    year: "2025",
    category: "Social AI",
    title: "Instagram Engagement Bot",
    description: "AI-powered bot that automates Instagram engagement — likes, follows, smart interaction logic to grow accounts on autopilot without triggering bans.",
    stack: ["Python", "Instagram API", "Automation"],
    href: "https://github.com/ZaidBuilds/Instagram-Engagement-Bot",
    image: "/projects/instagram_bot.png"
  },
  {
    number: "04",
    year: "2025",
    category: "Messaging Automation",
    title: "WhatsApp Bulk Messenger",
    description: "Sends bulk WhatsApp messages at scale for outreach, announcements, and marketing. Built to handle large contact lists with rate limiting and delivery tracking.",
    stack: ["Python", "WhatsApp API", "Automation"],
    href: "https://github.com/ZaidBuilds/Whatsapp-Bulk-Messenger",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" // Real automation UI style
  },
  {
    number: "05",
    year: "2025",
    category: "Agentic AI",
    title: "Hey Jarvis — AI Personal Assistant",
    description: "Voice-activated AI personal assistant. Answers questions, sets reminders, runs tasks on command, and integrates with daily tools. Built on OpenAI + Voice API.",
    stack: ["HTML", "JavaScript", "OpenAI", "Voice API"],
    href: "https://github.com/ZaidBuilds/Hey-Jarvis",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800" // Clean AI interface feel
  },
  {
    number: "06",
    year: "2025",
    category: "Web Development",
    title: "Lumina Dental Portfolio",
    description: "Production-ready animated portfolio website for a dental client. Scroll animations, mobile-first design, deployed live on Vercel. Built in Next.js and TypeScript.",
    stack: ["TypeScript", "Next.js", "React", "Vercel"],
    href: "https://github.com/ZaidBuilds/lumina-dental-portfolio-",
    image: "/projects/lumina_dental.png"
  },
  {
    number: "07",
    year: "2025",
    category: "AI / Automation",
    title: "University AI Helpdesk",
    description: "WhatsApp AI bot for Subharti University. Handles admissions queries, course info, and fee details 24/7 — zero staff needed, fully automated.",
    stack: ["n8n", "WhatsApp API", "OpenAI", "Webhooks"],
    href: "https://github.com/ZaidBuilds",
    image: "/projects/university_bot.png"
  },
  {
    number: "08",
    year: "2025",
    category: "Voice AI",
    title: "Voice Lead Qualifier",
    description: "Outbound voice AI agent that cold-calls leads, runs a qualification script, and pushes qualified data directly into CRM — no human needed.",
    stack: ["VAPI", "n8n", "OpenRouter", "Python"],
    href: "https://github.com/ZaidBuilds",
    image: "/projects/voice_ai.png"
  },
  {
    number: "09",
    year: "2025",
    category: "Productivity",
    title: "Revenue OS / CRM",
    description: "Self-built CRM in Notion with automated lead capture, follow-up sequences, pipeline tracking, and Google Sheets sync.",
    stack: ["Notion", "n8n", "Google Sheets", "Make.com"],
    href: "https://github.com/ZaidBuilds",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800" // Clean workspace/process style
  },
  {
    number: "10",
    year: "2025",
    category: "Content AI",
    title: "Content Repurposing Engine",
    description: "Raw idea goes in — formatted scripts for LinkedIn, Twitter/X, and YouTube Shorts come out automatically. Ready to post, zero manual effort.",
    stack: ["n8n", "OpenAI", "Make.com", "Google Docs"],
    href: "https://github.com/ZaidBuilds",
    image: "https://images.unsplash.com/photo-1454165833767-02a6ed8a687a?auto=format&fit=crop&q=80&w=800" // Professional editing/workflow
  },
];

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full border-b border-[#1e1e1e] flex flex-col md:flex-row items-stretch transition-all duration-500 hover:bg-[rgba(245,245,245,0.02)]"
      data-cursor="VIEW"
    >
      {/* Selection Left Border Hover */}
      <div className="absolute left-0 top-0 w-[1px] h-full bg-transparent group-hover:bg-[rgba(245,245,245,0.4)] transition-all duration-500" />

      {/* Content Container */}
      <div className={`flex-1 flex flex-col p-10 md:p-16 justify-center ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        
        {/* Large Watermark Number */}
        <span className="absolute top-8 left-10 md:left-16 font-mono text-[3rem] md:text-[4rem] text-[rgba(245,245,245,0.06)] leading-none -z-10 select-none">
          {project.number}
        </span>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[rgba(245,245,245,0.35)]">{project.year}</span>
          <span className="hidden md:block text-[rgba(245,245,245,0.15)]">•</span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] border border-[rgba(245,245,245,0.15)] text-[rgba(245,245,245,0.45)] px-2.5 py-1 rounded-sm">
            {project.category}
          </span>
        </div>

        <h3 className="font-sans font-bold text-2xl md:text-3xl text-[#f5f5f5] mb-6 group-hover:translate-x-1.5 transition-transform duration-500">
          {project.title}
        </h3>

        <p className="font-sans text-[0.9rem] text-[rgba(245,245,245,0.5)] leading-[1.85] mb-8 max-w-[500px]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.stack.map((item, i) => (
            <span key={i} className="font-mono text-[0.65rem] text-[rgba(245,245,245,0.4)] border border-[#1e1e1e] px-2.5 py-1 rounded-sm group-hover:border-[rgba(245,245,245,0.5)] transition-colors duration-300">
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          View Project <span className="text-xl">→</span>
        </div>
      </div>

      {/* Image Container */}
      <div className={`w-full md:w-[45%] h-[350px] md:h-auto overflow-hidden relative ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#080808]/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>
    </motion.a>
  );
};

export const SelectedWorks = () => {
  return (
    <section id="works" className="bg-[#080808] pt-32 pb-20">
      <div className="px-[5vw] mb-20 max-w-[1400px] mx-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(245,245,245,0.4)] mb-8 block"
        >
          // selected works
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-[clamp(3rem,6vw,5rem)] text-[#f5f5f5]"
        >
          What I've Built
        </motion.h2>
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>

      <div className="mt-32 text-center">
        <a 
          href="https://github.com/ZaidBuilds" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-mono text-[0.8rem] text-[rgba(245,245,245,0.5)] uppercase tracking-[0.2em] group hover:text-[#f5f5f5] transition-colors"
        >
          → View All on GitHub — <span className="group-hover:underline">github.com/ZaidBuilds</span>
        </a>
      </div>
    </section>
  );
};
