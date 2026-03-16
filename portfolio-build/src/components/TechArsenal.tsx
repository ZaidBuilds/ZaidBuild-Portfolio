"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Database, 
  Code2, 
  Cpu, 
  Cloud, 
  Globe, 
  Bot, 
  Layers, 
  Zap,
  Terminal,
  Workflow,
  Box,
  Binary
} from 'lucide-react';

const TOOLS = [
  { name: "Python", icon: Code2, color: "#3776ab" },
  { name: "TensorFlow", icon: Cpu, color: "#ff6f00" },
  { name: "Azure", icon: Cloud, color: "#008ad7" },
  { name: "Git", icon: Globe, color: "#f05032" },
  { name: "PostgreSQL", icon: Database, color: "#336791" },
  { name: "LangGraph", icon: Workflow, color: "#ffffff" },
  { name: "MySQL", icon: Database, color: "#00758f" },
  { name: "GCP", icon: Cloud, color: "#4285f4" },
  { name: "Google ADK", icon: Bot, color: "#3ddc84" },
  { name: "Flask", icon: Terminal, color: "#ffffff" },
  { name: "Django", icon: Code2, color: "#092e20" },
  { name: "Neo4j", icon: Binary, color: "#008cc1" },
];

export const TechArsenal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // ULTRA SMOOTH SPRING LOGIC
  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 25, 
    stiffness: 80, 
    mass: 1 
  });

  const spreadX = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);
  const opacity = useTransform(smoothProgress, [0.3, 0.45], [0, 1]);
  const scale = useTransform(smoothProgress, [0.3, 0.45], [0.8, 1]);

  return (
    <section id="stack" ref={containerRef} className="relative bg-[#080808] py-20 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          className="font-serif italic text-[clamp(2.5rem,7vw,5rem)] text-white uppercase tracking-[0.05em] mb-40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tech <span className="text-white/20">Arsenal.</span>
        </motion.h2>

        <div className="relative h-[500px] md:h-[700px] flex items-center justify-center">
          {TOOLS.map((tool, i) => {
            // Mobile: 3 columns, Desktop: 6 columns
            const cols = isMobile ? 3 : 6;
            const row = Math.floor(i / cols);
            const col = i % cols;
            
            const cardWidth = isMobile ? 100 : 190;
            const cardHeight = isMobile ? 140 : 280;
            const cardOffset = isMobile ? 1 : 2.5;
            
            const targetX = (col - cardOffset) * cardWidth;
            const targetY = (row - 0.5) * cardHeight;

            const x = useTransform(spreadX, [0, 1], [0, targetX]);
            const y = useTransform(spreadX, [0, 1], [i * 3, targetY]);
            const rotate = useTransform(spreadX, [0, 1], [i * 2 - 12, 0]);

            return (
              <motion.div
                key={i}
                style={{ 
                  opacity,
                  scale,
                  x,
                  y,
                  rotate,
                  zIndex: 20 - i
                }}
                className="absolute w-[90px] h-[130px] md:w-[180px] md:h-[260px] bg-[#0d0d0d] border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col items-center justify-center gap-3 md:gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-white/40 hover:bg-[#111111]"
              >
                <div className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-white/[0.05] rounded-lg md:rounded-2xl border border-white/10 shadow-inner group overflow-hidden relative">
                   <tool.icon size={isMobile ? 20 : 40} style={{ color: tool.color }} className="relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                   <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="text-center">
                   <div className="font-mono text-[0.5rem] md:text-[0.75rem] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white font-bold mb-1 md:mb-2">{tool.name}</div>
                   <motion.div 
                     className="h-[2px] mx-auto shadow-[0_0_8px]" 
                     style={{ 
                        backgroundColor: tool.color, 
                        width: "40px",
                        boxShadow: `0 0 10px ${tool.color}`
                     }} 
                   />
                </div>

                {/* Card Background Details */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center overflow-hidden">
                   <span className="font-serif italic text-4xl md:text-8xl rotate-[-20deg] whitespace-nowrap text-white">{tool.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-[150px]" />
      </div>
    </section>
  );
};
