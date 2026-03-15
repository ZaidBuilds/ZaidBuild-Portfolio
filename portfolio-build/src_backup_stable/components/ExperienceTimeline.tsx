"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const EXPERIENCE = [
  {
    date: "2022 – 23",
    title: "Built Myself First",
    company: "Self-taught · Meerut, India",
    description: "Before any client, before any income — I spent a year building myself. Discovered n8n, Python, APIs, automation. No mentor. No roadmap. Just obsession, YouTube tutorials, and long nights figuring out how things connect. Zero clients. Zero income. 100% foundation."
  },
  {
    date: "2024",
    title: "12th Done. BCA Begins.",
    company: "Student · Subharti University",
    description: "Completed board exams. Got admitted into BCA. Stopped treating AI as a side interest and locked in. Started building real projects — Hey Jarvis, automation scripts, client websites. Working on skills daily. Self-improvement became the operating system."
  },
  {
    date: "2025",
    title: "Tried. Failed. Learned.",
    company: "AutomateX · YouTube · Agency Attempt",
    description: "Launched a YouTube channel. Started freelancing. Tried running an agency. All three stalled — wrong positioning, inconsistent output, unclear brand. Didn't quit. Shut things down properly. Sat with the lessons. Regrouped with clarity."
  },
  {
    date: "2026 — Now",
    title: "ZaidBuilds. For Real.",
    company: "AI Solutionist · ZaidBuilds",
    description: "Came back with a clear name, a real brand, and a sharper skill set than ever. Building Voice AI agents, WhatsApp bots, Claude Code integrations, OpenClaw systems, Instagram automation, and full-stack AI pipelines. Not starting over — starting better. Shipping every single day. Targeting $10k/month.",
    latest: true
  }
];

const ExperienceEntry = ({ item, index }: { item: typeof EXPERIENCE[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15, 
        type: "spring", 
        damping: 20, 
        stiffness: 100 
      }}
      className="relative pl-12 md:pl-20 mb-32 last:mb-0"
    >
      {/* Dot on the line */}
      <div className="absolute left-[-5px] top-[10px] z-20">
        <div className="relative">
          <div className="w-[10px] h-[10px] bg-[#f5f5f5] rounded-full shadow-[0_0_0_2px_rgba(245,245,245,0.15)]" />
          {item.latest && (
            <motion.div 
              animate={{ 
                boxShadow: ["0 0 0 0px rgba(245,245,245,0.4)", "0 0 0 12px rgba(245,245,245,0)"] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeOut" 
              }}
              className="absolute inset-0 rounded-full"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24">
        {/* Left Side (Date) */}
        <div className="md:w-32 flex-shrink-0">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[rgba(245,245,245,0.45)] block mt-1">
            {item.date}
          </span>
        </div>

        {/* Right Side (Content) */}
        <div className="flex-1 max-w-[800px]">
          <h3 className="font-sans font-bold text-[1.2rem] text-[#f5f5f5] mb-1">
            {item.title}
          </h3>
          <p className="font-mono text-[0.75rem] uppercase tracking-wide text-[rgba(245,245,245,0.3)] mb-6">
            {item.company}
          </p>
          <p className="font-sans text-[0.88rem] text-[rgba(245,245,245,0.45)] leading-[1.95]">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const ExperienceTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="bg-[#080808] py-40 border-t border-[#1e1e1e] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[5vw]">
        
        {/* Section Header */}
        <div className="mb-32">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(245,245,245,0.4)] mb-6 block"
          >
            // experience
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif italic text-[clamp(3rem,6vw,5rem)] text-[#f5f5f5] leading-none"
          >
            The Build Journey
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-[1200px] mx-auto">
          
          {/* Static Background Line */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-[rgba(245,245,245,0.04)]" />
          
          {/* Animated Scroll Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-0 top-0 w-[1px] h-full bg-[rgba(245,245,245,0.15)] z-10"
          />

          {/* Entries */}
          <div className="flex flex-col">
            {EXPERIENCE.map((item, i) => (
              <ExperienceEntry key={i} item={item} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
