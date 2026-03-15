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

export const ExperienceTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <section id="experience" ref={containerRef} className="relative bg-[#080808] h-[400vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Header (Stay fixed) */}
        <div className="px-[5vw] mb-12 relative z-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-white/20 mb-4 block"
          >
            // The Build Journey
          </motion.p>
          <h2 className="font-serif italic text-[clamp(2.5rem,5vw,5rem)] text-white leading-none">
            Evolution <span className="text-white/20">Archive.</span>
          </h2>
        </div>

        {/* Horizontal Container */}
        <motion.div style={{ x }} className="flex gap-8 px-[5vw] items-stretch">
          {EXPERIENCE.map((item, i) => (
            <motion.div 
              key={i}
              className="min-w-[400px] md:min-w-[600px] bg-[#0d0d0d] border border-white/5 p-12 relative group"
            >
              <span className="absolute top-8 right-12 font-mono text-[4rem] text-white/[0.03] leading-none select-none">
                {item.date.split(' ')[0]}
              </span>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/30 block mb-8">
                    Phase_{i.toString().padStart(2, '0')}
                  </span>
                  <h3 className="font-serif italic text-4xl text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[0.55rem] uppercase tracking-widest text-white/20 mb-8">
                    {item.company}
                  </p>
                  <p className="font-sans text-[1.1rem] text-white/40 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${item.latest ? 'bg-white animate-pulse shadow-[0_0_8px_white]' : 'bg-white/10'}`} />
                  <span className="font-mono text-[0.5rem] uppercase tracking-[0.3em] text-white/30 truncate">
                    {item.latest ? 'Current Deployment' : 'Archive Complete'}
                  </span>
                </div>
              </div>

              {/* Decorative Line */}
              <div className="absolute top-1/2 left-full w-8 h-[1px] bg-white/5" />
            </motion.div>
          ))}
          
          {/* End of Line card */}
          <div className="min-w-[400px] flex items-center justify-center">
             <div className="text-center">
                <span className="font-serif italic text-white/20 text-2xl">To be continued...</span>
             </div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute bottom-20 left-[5vw] right-[5vw] h-[1px] bg-white/5">
          <motion.div 
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="h-full bg-white/20"
          />
        </div>
      </div>
    </section>
  );
};
