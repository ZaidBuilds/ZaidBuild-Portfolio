"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "Zaid automated our entire client onboarding. What used to take 3 hours now runs itself.",
    name: "Rahul S.",
    role: "Agency Owner",
    initials: "RS"
  },
  {
    quote: "The WhatsApp bot he built handles 80% of our support tickets. Zero manual replies needed.",
    name: "Priya M.",
    role: "E-commerce Founder",
    initials: "PM"
  },
  {
    quote: "Best ROI I've had — a voice agent that qualifies leads while I sleep.",
    name: "Amir K.",
    role: "Business Consultant",
    initials: "AK"
  },
  {
    quote: "Incredibly fast delivery. The n8n workflow worked perfectly from day one.",
    name: "Sara T.",
    role: "SaaS Founder",
    initials: "ST"
  },
];

const TestimonialCard = ({ item }: { item: typeof TESTIMONIALS[0] }) => (
  <div className="w-[320px] bg-[#111111] border border-[#1e1e1e] rounded-md p-6 mx-3 flex flex-col relative group shrink-0 transition-all duration-300 hover:border-[rgba(245,245,245,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
    <span className="absolute top-0 left-2 font-serif italic text-7xl text-[rgba(245,245,245,0.06)] pointer-events-none select-none">"</span>
    
    <p className="relative z-10 font-serif italic text-[0.95rem] text-[rgba(245,245,245,0.7)] leading-[1.85] mb-6 pt-4">
      {item.quote}
    </p>

    <div className="w-full h-[1px] bg-[#1e1e1e] mb-6" />

    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-[rgba(245,245,245,0.08)] border border-[#1e1e1e] flex items-center justify-center">
        <span className="font-mono text-[0.65rem] text-[#f5f5f5] tracking-widest uppercase">{item.initials}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-sans font-semibold text-[0.85rem] text-[#f5f5f5]">{item.name}</span>
        <span className="font-mono text-[0.7rem] text-[rgba(245,245,245,0.35)] uppercase tracking-widest">{item.role}</span>
      </div>
    </div>
  </div>
);

const Row = ({ quotes, speed, reverse = false }: { quotes: typeof TESTIMONIALS, speed: string, reverse?: boolean }) => {
  // Triple the items for seamless infinite scroll
  const tripledItems = [...quotes, ...quotes, ...quotes];
  const animClass = reverse ? "animate-marquee-right" : "animate-marquee-left";

  return (
    <div className="overflow-hidden w-full group py-2">
      <div 
        className={`flex w-fit ${animClass} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed }}
      >
        {tripledItems.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-[#0d0d0d] py-32 overflow-hidden border-t border-b border-[#1e1e1e] relative z-20">
      <div className="max-w-[1400px] mx-auto px-[5vw] mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(245,245,245,0.4)] mb-8 block"
        >
          // what clients say
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-[clamp(2.5rem,5vw,4rem)] text-[#f5f5f5] leading-none"
        >
          Delivered. Not just built.
        </motion.h2>
      </div>

      <div className="flex flex-col gap-6">
        <Row quotes={TESTIMONIALS} speed="35s" />
      </div>
    </section>
  );
};
