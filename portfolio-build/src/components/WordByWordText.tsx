"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SENTENCE = "I wire AI agents, automation workflows, and intelligent systems into the core of how businesses operate.";
const WORDS = SENTENCE.split(" ");
const HIGHLIGHTS = ["AI", "agents", "intelligent", "systems", "core"];

export const WordByWordText = () => {
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

  // Track scroll through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"] // Triggers while the section is passing through the middle of the screen
  });

  return (
    <section ref={containerRef} className="relative bg-[#080808] z-10" style={{ height: isMobile ? "150vh" : "200vh" }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-[8vw]">
        <div className="flex flex-wrap justify-center items-center max-w-[1400px] gap-x-[0.35em] gap-y-[0.1em]">
          {WORDS.map((word, i) => {
            // Sequential reveal calculations
            const totalWords = WORDS.length;
            const step = 1 / totalWords;
            const start = i * step;
            const end = (i + 1) * step;
            
            // Clean punctuation for highlighting check
            const cleanWord = word.replace(/[.,]/g, "");
            const isHighlighted = HIGHLIGHTS.includes(cleanWord);

            return (
              <WordSpan 
                key={i} 
                word={word} 
                range={[start, end]} 
                isHighlighted={isHighlighted} 
                progress={scrollYProgress} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WordSpan = ({ word, range, isHighlighted, progress }: {
  word: string; 
  range: [number, number]; 
  isHighlighted: boolean; 
  progress: any;
}) => {
  // Sharp opacity transition for that "snap" reveal
  const opacity = useTransform(progress, [range[0], range[0] + 0.02], [0.1, 1]);
  
  // Highlighted words get full white, others are muted
  // Use useTransform for color if we want it to "light up"
  const color = useTransform(
    progress, 
    [range[0], range[0] + 0.02], 
    ["rgba(245, 245, 245, 0.1)", isHighlighted ? "#ffffff" : "rgba(245, 245, 245, 0.45)"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="font-sans font-extrabold text-[clamp(1.5rem,5vw,5.5rem)] leading-[1.1] md:leading-[1.05] tracking-tight italic"
    >
      {word}
    </motion.span>
  );
};
