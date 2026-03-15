"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Github, Twitter } from 'lucide-react';

const SOCIALS = [
  { icon: Instagram, href: "https://www.instagram.com/thezaidbuilds" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/zaidbuilds" },
  { icon: Youtube, href: "https://youtube.com/@zaidbuilds" },
  { icon: Twitter, href: "https://x.com/BuildWithZaid" }, // X is often represented by Twitter icon or custom SVG
  { icon: Github, href: "https://github.com/ZaidBuilds" },
];

export const About = () => {
  return (
    <section id="about" className="bg-[#080808] py-32 px-[5vw] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Label */}
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(245,245,245,0.4)] mb-12 block"
        >
          // about me
        </motion.span>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif italic text-[clamp(2.5rem,5vw,4rem)] text-[#f5f5f5] leading-[1.1] mb-24 max-w-[800px]"
        >
          I don't just build automations. I design systems that <span className="text-white font-bold">think.</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-20">
          
          {/* LEFT COLUMN: Bio (60%) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full md:w-[60%]"
          >
            <div className="flex flex-col gap-10">
              <p className="font-sans text-[0.9rem] text-[rgba(245,245,245,0.5)] leading-[2]">
                I'm Mohd Zaid — an AI Solutionist operating under ZaidBuilds, based in Meerut, India. 
                I design and ship AI-powered systems for founders and operators who want results — 
                not slide decks, not demos. Working systems.
              </p>
              
              <p className="font-sans text-[0.9rem] text-[rgba(245,245,245,0.5)] leading-[2]">
                My work spans the full stack — LLM orchestration, RAG pipelines, n8n automations, 
                WhatsApp and Telegram bots, Voice AI agents, Claude Code integrations, and React 
                frontends deployed on self-hosted infrastructure. I wire intelligence into the 
                core of how businesses run.
              </p>

              <p className="font-sans text-[0.9rem] text-[rgba(245,245,245,0.5)] leading-[2]">
                Currently building in public — 100 days of real systems, real workflows, no fluff. 
                Documenting everything on @zaidbuilds.
              </p>

              {/* Social Icons Row */}
              <div className="flex items-center gap-4 mt-8">
                {SOCIALS.map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center border border-[#1e1e1e] rounded-[4px] text-[rgba(245,245,245,0.5)] hover:border-white hover:text-white transition-all duration-300"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Quote (40%) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full md:w-[40%] relative pt-12"
          >
            <span className="absolute top-0 left-0 font-serif text-[8rem] leading-none text-[rgba(245,245,245,0.06)] pointer-events-none -translate-y-4">
              “
            </span>
            <div className="relative z-10">
              <p className="font-serif italic text-[1.4rem] text-[#f5f5f5] leading-[1.7] mb-8">
                I orchestrate systems. I don't execute tasks — I architect the layer that makes tasks execute themselves.
              </p>
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-[rgba(245,245,245,0.35)]">
                — Mohd Zaid, ZaidBuilds
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
