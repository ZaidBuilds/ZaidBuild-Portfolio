"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music2, Play, Pause } from 'lucide-react';

export const MusicWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-[100] flex items-end">
      <div 
        className="flex items-center gap-3 bg-[#111111] border border-[#1e1e1e] rounded-full p-2 pr-6 hover:border-[rgba(245,245,245,0.45)] transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {/* Album Art / Icon */}
        <div className="w-10 h-10 bg-[#2a2a2a] rounded-full flex items-center justify-center overflow-hidden border border-[#1e1e1e] relative group">
          {isPlaying ? <Pause size={14} className="text-white z-10" /> : <Play size={14} className="text-white z-10 translate-x-0.5" />}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
        </div>

        {/* Animated Equalizer Bars */}
        <div className="flex items-end gap-1 h-4 px-1">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={isPlaying ? { height: [8, 16, i === 2 ? 10 : 14, 8] } : { height: 4 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
              className="w-[3px] bg-[rgba(245,245,245,0.45)] rounded-full"
            />
          ))}
        </div>

        {/* Track Info */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="flex flex-col ml-1 whitespace-nowrap overflow-hidden"
            >
              <span className="text-[#f5f5f5] font-mono text-[0.65rem] uppercase tracking-widest">Lo-fi Focus</span>
              <span className="text-[rgba(245,245,245,0.45)] font-mono text-[0.55rem] uppercase tracking-[0.2em]">Zaid Builds Playlist</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
