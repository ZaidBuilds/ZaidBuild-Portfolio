"use client";
import React from "react";

const PROJECT_NAMES = [
  "Instagram Bot", 
  "WhatsApp Messenger", 
  "Hey Jarvis AI", 
  "Lumina Dental Site", 
  "University Helpdesk", 
  "Voice Lead Qualifier", 
  "Revenue OS", 
  "AI Trading Bot", 
  "Content Engine", 
  "OpenClaw Agent", 
  "Planning Test AI", 
  "Telegram Automation"
];

const Row = ({ reverse = false }: { reverse?: boolean }) => {
  const items = [...PROJECT_NAMES, ...PROJECT_NAMES];
  const direction = reverse ? "flex-row-reverse animate-marquee-right" : "flex-row animate-marquee-left";

  return (
    <div className={`flex w-[400vw] lg:w-[200vw] shrink-0 ${reverse ? 'ml-[-200vw] lg:ml-[-100vw]' : ''}`}>
      <div className={`flex items-center min-w-full justify-around ${direction}`} style={{ animationDuration: reverse ? '32s' : '25s' }}>
        {items.map((project, i) => (
          <div key={i} className="flex items-center group cursor-default">
            <span className="font-serif italic text-[2.5rem] md:text-[3.5rem] text-[#333] hover:text-[#fff] transition-colors duration-300 px-8 whitespace-nowrap">
              {project}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#333]"></span>
          </div>
        ))}
      </div>
      <div className={`flex items-center min-w-full justify-around ${direction}`} style={{ animationDuration: reverse ? '32s' : '25s' }}>
        {items.map((project, i) => (
          <div key={`dup-${i}`} className="flex items-center group cursor-default">
            <span className="font-serif italic text-[2.5rem] md:text-[3.5rem] text-[#333] hover:text-[#fff] transition-colors duration-300 px-8 whitespace-nowrap">
              {project}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#333]"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ImageMarquee = () => {
  // Named ImageMarquee historically, but now it's a Project Names Marquee
  return (
    <section className="w-full bg-[#080808] py-32 z-20 relative overflow-hidden pause-on-hover border-y border-[#1e1e24]">
      <div className="flex flex-col gap-6">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
};
