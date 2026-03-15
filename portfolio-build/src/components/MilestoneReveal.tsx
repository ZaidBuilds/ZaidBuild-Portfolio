"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

export const MilestoneReveal = () => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 }); // Trigger every time it enters view for satisfaction

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 6698, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => setCount(Math.round(value))
      });
      return () => controls.stop();
    } else {
      setCount(0); // Reset when leaving view so it re-animates smoothly
    }
  }, [isInView]);

  return (
    <section ref={ref} className="bg-[#080808] py-32 flex flex-col items-center justify-center relative overflow-hidden border-t border-white/5">
      
      {/* Background Pixel Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} 
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="relative z-10 text-center"
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.5em] text-white/30 mb-8 block">
          Current Operating Cycle
        </span>
        
        <h2 className="font-serif italic text-[clamp(4.5rem,15vw,13rem)] text-white leading-none mb-4 select-none">
          {count.toLocaleString()}<span className="text-white/20 text-[0.3em] font-sans ml-4 tracking-normal font-light">Pixels.</span>
        </h2>
        
        <p className="font-sans font-black text-[clamp(1.5rem,5vw,4rem)] text-white tracking-tighter uppercase px-8 mix-blend-difference">
           Thanks for scrolling
        </p>

        <div className="mt-16 flex flex-col items-center gap-4">
           <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
           <span className="font-mono text-[0.6rem] uppercase tracking-widest text-white/10 italic">Neural Connection Stable</span>
        </div>
      </motion.div>

      {/* Side HUD Elements */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 font-mono text-[0.5rem] text-white/5 uppercase tracking-[0.4em] vertical-text">
         <span>Cycle_Alpha_01</span>
         <span>Hash_8829_X</span>
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 font-mono text-[0.5rem] text-white/5 uppercase tracking-[0.4em] vertical-text">
         <span>Status_Nominal</span>
         <span>Sync_True</span>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};
