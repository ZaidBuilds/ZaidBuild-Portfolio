"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Disc, Volume2 } from 'lucide-react';

export const MusicWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Interstellar | Imperial Orchestra Style Theme
  const audioUrl = "https://cdn.pixabay.com/audio/2022/03/24/audio_7329580665.mp3"; // "Crystallize" - Satisfying Space/Tech Vibe

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Handle potential browser block on autoplay
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Playback blocked:", error);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-10 left-10 z-[100]">
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        preload="auto"
        crossOrigin="anonymous"
        onEnded={() => setIsPlaying(false)}
      />

      <motion.div
        onClick={togglePlay}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="group relative cursor-pointer flex items-center gap-4 bg-black/80 backdrop-blur-xl border border-white/10 p-2 pr-6 rounded-full shadow-2xl hover:border-white/30 transition-all active:scale-95"
      >
        {/* SimplifiedDisk Icon */}
        <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden">
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-black"
          >
            <Disc size={20} />
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            {!isPlaying && <Play size={12} className="text-black fill-current translate-x-0.5" />}
            {isPlaying && <Pause size={12} className="text-black fill-current" />}
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-white">Interstellar.msi</span>
          <span className="font-mono text-[0.45rem] text-white/40 uppercase tracking-widest mt-0.5">
            {isPlaying ? "Syncing Imperial Orchestra..." : "Standby for Launch"}
          </span>
        </div>

        {/* Mini Visualizer */}
        {isPlaying && (
          <div className="flex gap-0.5 h-3 items-end ml-2">
            {[1, 2, 3, 4].map(i => (
              <motion.div
                key={i}
                animate={{ height: ["20%", "100%", "30%", "80%", "20%"] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                className="w-[1.5px] bg-white/60"
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};
