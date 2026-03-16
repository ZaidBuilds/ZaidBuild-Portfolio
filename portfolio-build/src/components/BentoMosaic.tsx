"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Github, Twitter, Music, Play, Pause, Database, Cpu, Layers, Bot, Zap, Code } from 'lucide-react';

const SOCIALS = [
  { icon: Instagram, href: "https://www.instagram.com/thezaidbuilds" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/zaidbuilds" },
  { icon: Youtube, href: "https://youtube.com/@zaidbuilds" },
  { icon: Twitter, href: "https://x.com/BuildWithZaid" },
  { icon: Github, href: "https://github.com/ZaidBuilds" },
];

const LOGOS = [
  { icon: Github, label: "GitHub", color: "#ffffff" },
  { icon: Database, label: "Airtable", color: "#18BFFF" },
  { icon: Bot, label: "Ollama", color: "#FF4B4B" },
  { icon: Code, label: "Claude", color: "#D97757" },
  { icon: Zap, label: "n8n", color: "#FF6D5A" },
  { icon: Layers, label: "Docker", color: "#2496ED" },
  { icon: Cpu, label: "LLMs", color: "#00FF41" }
];

const STATS = [
  { val: "50+", label: "Workflows" },
  { val: "13+", label: "Client Systems" },
  { val: "100", label: "Days Building" }
];

export const BentoMosaic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          // Force load and play to bypass stuck buffering
          audioRef.current.load();
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            await playPromise;
            setIsPlaying(true);
          }
        }
      } catch (error) {
        console.error("Audio Playback Error:", error);
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="about" className="bg-[#080808] py-16 md:py-32 px-[5vw]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto md:auto-rows-[200px]">

        {/* ── CARD 1: THE IDENTITY (Large) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-8 md:row-span-2 bg-[#0d0d0d] border border-white/5 p-6 md:p-10 flex flex-col justify-between group overflow-hidden relative py-10 md:py-0"
        >
          <div className="absolute top-0 right-0 p-8 font-mono text-[0.5rem] text-white/10 uppercase tracking-[0.4em]">
            Identity / V.01
          </div>
          <div>
            <span className="font-mono text-[0.6rem] text-white/30 uppercase tracking-[0.3em] mb-4 block">// Agent_001</span>
            <h2 className="font-serif italic text-[clamp(1.75rem,4vw,3.5rem)] text-white leading-[1.1] max-w-[500px]">
              I design systems that <span className="text-white font-bold underline decoration-white/20 underline-offset-8">think.</span>
            </h2>
            <p className="mt-4 md:mt-6 font-sans text-white/40 text-sm md:text-[0.95rem] leading-relaxed max-w-[450px]">
              Operating from Meerut, India, I architect AI layers that make tasks execute themselves. No fluff, just pure utility.
            </p>
          </div>
          <div className="flex gap-3 md:gap-4 mt-6 md:mt-8">
            {SOCIALS.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all rounded-sm grayscale opacity-50 hover:opacity-100"
              >
                <social.icon size={14} className="text-white md:w-4 md:h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── CARD 2: NEURAL SYNC (Chat Box) ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 md:row-span-1 bg-[#111111] border border-white/5 p-4 md:p-6 flex flex-col justify-between py-6 md:py-6"
        >
          <div className="flex justify-between items-center">
            <span className="font-mono text-[0.5rem] text-white/30 uppercase tracking-widest">Neural Sync</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 bg-white/40 rounded-full" />)}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-3 rounded-sm">
            <span className="font-mono text-[0.6rem] text-white/40 block mb-2">Incoming Transmission...</span>
            <p className="font-mono text-[0.65rem] text-white/80 animate-pulse">SYSTEM: Architecting your next workflow...</p>
          </div>

          <div className="mt-4 flex gap-2">
            <div className="flex-1 bg-white/5 border border-white/10 h-8 rounded-sm px-3 flex items-center">
              <span className="font-mono text-[0.6rem] text-white/20">Ask anything...</span>
            </div>
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
              <Zap size={14} fill="black" stroke="black" />
            </div>
          </div>
        </motion.div>

        {/* ── CARD 3: TECH DOCK (Vertical Animated Logos) ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 md:row-span-1 bg-[#0d0d0d] border border-white/5 p-4 md:p-6 overflow-hidden relative group py-6 md:py-6"
        >
          <div className="font-mono text-[0.5rem] text-white/20 uppercase tracking-[0.3em] mb-4 z-10 relative">System Arsenal</div>

          <div className="relative h-[100px] md:h-[120px] overflow-hidden pointer-events-none">
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex flex-col gap-2"
            >
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-2 px-3 rounded-sm">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-sm">
                    <logo.icon size={14} style={{ color: logo.color }} className="opacity-80" />
                  </div>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/40">{logo.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Fade effect */}
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#0d0d0d] to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0d0d0d] to-transparent z-10" />
          </div>
        </motion.div>

        {/* ── CARD 4: MUSIC WIDGET (Compact & Functional) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-4 md:row-span-1 bg-[#0d0d0d] border border-white/5 p-4 md:p-6 flex flex-col justify-between relative overflow-hidden py-6 md:py-6"
        >
          <audio ref={audioRef} loop preload="auto">
            <source src="/audio/installer-theme.mp3" type="audio/mpeg" />
          </audio>

          <div className="flex gap-3 md:gap-4 items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 flex items-center justify-center relative flex-shrink-0">
              <motion.div
                animate={isPlaying ? { scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 bg-white rounded-full blur-xl"
              />
              <Music size={18} className="text-white/40 z-10" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-sans text-[0.7rem] md:text-[0.8rem] text-white font-medium truncate">Interstellar — Imperial Orchestra</span>
              <span className="font-mono text-[0.5rem] text-white/30 uppercase tracking-widest leading-none mt-1">
                {isPlaying ? 'System Syncing...' : 'Idle'}
              </span>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 mt-4 items-center">
            <button onClick={togglePlay} className="flex-1 h-8 md:h-9 bg-white text-black font-mono text-[0.55rem] md:text-[0.6rem] uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
              {isPlaying ? <Pause size={12} fill="black" /> : <Play size={12} fill="black" />}
              {isPlaying ? 'Pause' : 'Initialize Pulse'}
            </button>
          </div>
        </motion.div>

        {/* ── CARD 5: STATS BOX (Dynamic) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="md:col-span-8 md:row-span-1 border border-white/10 bg-white/[0.02] flex items-center justify-around px-4 md:px-8 py-6 md:py-0"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-serif italic text-2xl md:text-4xl text-white mb-1">{stat.val}</span>
              <span className="font-mono text-[0.45rem] md:text-[0.5rem] uppercase tracking-[0.2em] text-white/20 text-center">{stat.label}</span>
            </div>
          ))}
          <div className="h-8 md:h-12 w-[1px] bg-white/10 mx-2 md:mx-4" />
          <div className="flex flex-col items-start gap-1">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => <div key={i} className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/10'}`} />)}
            </div>
            <span className="font-mono text-[0.5rem] md:text-[0.55rem] text-white/30 uppercase">Neural Sync Active</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
