"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';

const STATS_DATA = [
  { target: 50, suffix: "+", label: "Workflows Shipped" },
  { target: 8, suffix: "+", label: "Services Live" },
  { target: 13, suffix: "+", label: "Live Client Systems" },
  { target: 100, suffix: "", label: "Days Building in Public" },
];

const StatItem = ({ target, suffix, label, showDivider }: { target: number; suffix: string; label: string; showDivider: boolean }) => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      const duration = 1.8; // 1800ms
      
      const controls = animate(0, target, {
        duration: duration,
        ease: [0.33, 1, 0.68, 1], // Cubic easing similar to the request's formula
        onUpdate: (value) => {
          setCount(Math.round(value));
        },
        onComplete: () => {
          setIsFinished(true);
          setTimeout(() => setIsFinished(false), 800);
        }
      });

      return () => controls.stop();
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className={`relative flex flex-col items-center justify-center py-4 flex-1 ${showDivider ? 'border-r border-[#1e1e1e]' : ''} group`}>
      <motion.span 
        className="font-serif italic text-[clamp(3rem,6vw,5rem)] text-[#f5f5f5] leading-none mb-4 transition-all duration-700"
        style={{
          textShadow: isFinished ? "0 0 30px rgba(245,245,245,0.4)" : "none"
        }}
      >
        {count}{suffix}
      </motion.span>
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[rgba(245,245,245,0.35)] text-center">
        {label}
      </span>
    </div>
  );
};

export const StatsGrid = () => {
  return (
    <section className="bg-[#111111] border-y border-[#1e1e1e] w-full relative z-10">
      <div className="max-w-full px-[5vw] py-14 flex flex-col md:flex-row items-stretch">
        {STATS_DATA.map((stat, i) => (
          <StatItem 
            key={i} 
            target={stat.target} 
            suffix={stat.suffix} 
            label={stat.label} 
            showDivider={i < STATS_DATA.length - 1} 
          />
        ))}
      </div>
    </section>
  );
};
