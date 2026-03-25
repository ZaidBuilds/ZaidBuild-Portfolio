"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing Systems...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300); // Trigger instantly
          return 100;
        }
        
        // Dynamic status updates
        if (prev === 20) setStatus("Syncing Neural Pathways...");
        if (prev === 50) setStatus("Calibrating LLM Nodes...");
        if (prev === 80) setStatus("Deploying Agentic Framework...");
        
        return prev + 3; // Increase progress speed
      });
    }, 15); // Decrease interval time from 30ms to 15ms

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-[#080808] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[200px]" />
      </div>

      <div className="relative flex flex-col items-center w-full max-w-[400px] px-8">
        {/* Logo/Identity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-mono text-[0.6rem] text-white/30 tracking-[0.6em] uppercase mb-24"
        >
          Zaid AI Portfolio // 2025
        </motion.div>

        {/* Big Counter */}
        <div className="relative mb-12 overflow-hidden flex items-baseline gap-2">
          <motion.span 
            className="font-serif italic text-8xl md:text-9xl text-white leading-none"
          >
            {Math.round(progress)}
          </motion.span>
          <span className="font-mono text-xl text-white/20 uppercase tracking-tighter">%</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full space-y-4">
          <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: `${progress - 100}%` }}
              className="absolute inset-0 bg-white"
            />
          </div>
          
          <div className="flex justify-between items-center text-white/30 font-mono text-[0.55rem] uppercase tracking-[0.2em]">
            <motion.span
              key={status}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full text-center"
            >
              {status}
            </motion.span>
          </div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute -left-[50vw] top-1/2 w-screen h-[1px] bg-white/5 -rotate-12" />
        <div className="absolute -right-[50vw] top-1/2 w-screen h-[1px] bg-white/5 rotate-12" />
      </div>

      {/* Footer Meta */}
      <div className="absolute bottom-12 font-mono text-[0.5rem] text-white/10 uppercase tracking-[0.4em] flex gap-8">
        <span>Latency: 12ms</span>
        <span>Environment: Production</span>
        <span>Status: 200 OK</span>
      </div>
    </motion.div>
  );
};
