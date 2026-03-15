"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Installer-inspired satisfying ambient track (Royalty free)
  const audioUrl = "https://cdn.pixabay.com/audio/2022/03/24/audio_347312e75e.mp3"; // High-tech ambient

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100] flex items-center gap-4">
      <audio ref={audioRef} src={audioUrl} loop />

      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/10 transition-all shadow-2xl"
      >
        <div className="relative w-8 h-8 flex items-center justify-center bg-white text-black rounded-full overflow-hidden">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <Pause size={14} fill="currentColor" />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <Play size={14} fill="currentColor" className="ml-0.5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-start pr-2">
          <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-white/40">Neural_Pulse.sys</span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-white font-bold whitespace-nowrap">
            {isPlaying ? "Syncing Logic..." : "Play Pulse"}
          </span>
        </div>

        {/* Dynamic Visualizer (Only shows when playing) */}
        {isPlaying && (
          <div className="flex gap-1 h-3 items-end ml-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [2, 8, 2] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
                className="w-[1.5px] bg-[#00FF41]"
              />
            ))}
          </div>
        )}
      </motion.button>
    </div>
  );
};
