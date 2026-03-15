"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, useMotionValue } from "framer-motion";

export const Hero = () => {
  const [images, setImages] = useState<string[]>([]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const totalFrames = 120;
  
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax for cards
  const springConfig = { damping: 25, stiffness: 150 };
  const cardX = useSpring(useTransform(mouseX, [0, 1], [20, -20]), springConfig);
  const cardY = useSpring(useTransform(mouseY, [0, 1], [20, -20]), springConfig);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const preloadedImages: string[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      const src = `/sequence/ezgif-frame-${paddedIndex}.png`;
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setIsLoaded(true);
        }
      };
      preloadedImages.push(src);
    }
    setImages(preloadedImages);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle scroll-based frame updates
  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollRange = 800;
    const progress = Math.min(latest / scrollRange, 1);
    const index = Math.floor(progress * (totalFrames - 1));
    setFrameIndex(index);
  });

  // Animation variants
  const slideUp = {
    hidden: { opacity: 0, y: 100, rotateX: 45 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: custom,
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as any
      }
    })
  };

  const glowOpacity = useTransform(scrollY, [0, 600], [0.06, 0.12]);
  
  return (
    <section className="relative h-screen min-h-[900px] w-full bg-[#080808] overflow-hidden perspective-1000">
      
      {/* ── 3D Floating Project Layer (Phantom Cards) ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[
          { top: '15%', left: '10%', rot: -12, scale: 0.8, delay: 0.2 },
          { top: '65%', left: '5%', rot: 8, scale: 1.1, delay: 0.4 },
          { top: '10%', left: '75%', rot: 15, scale: 0.9, delay: 0.6 },
          { top: '55%', left: '80%', rot: -5, scale: 1.2, delay: 0.8 },
          { top: '30%', left: '45%', rot: 5, scale: 0.7, delay: 1.0 },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.08, scale: card.scale }}
            transition={{ delay: card.delay, duration: 1.5 }}
            style={{ 
              top: card.top, 
              left: card.left, 
              rotateZ: card.rot,
              x: i % 2 === 0 ? cardX : useTransform(cardX, (v) => -v),
              y: i % 3 === 0 ? cardY : useTransform(cardY, (v) => -v)
            }}
            className="absolute w-[300px] aspect-[4/5] bg-white rounded-lg border border-white/20 shadow-2xl"
          />
        ))}
      </div>

      {/* ── Dynamic Neural Connector (Status Line) ── */}
      <div className="absolute top-[8%] right-[5%] z-50 flex items-start gap-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-end"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.65rem] text-white/40 uppercase tracking-[0.2em]">
              Agent Status / Online
            </span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
          </div>
          <div className="h-[100px] w-[1px] bg-gradient-to-bottom from-white to-transparent mt-4 opacity-20" />
        </motion.div>
      </div>

      <div className="relative h-full w-full px-[5vw] pt-[15vh] md:pt-0 flex flex-col items-center justify-center z-10 text-center">
        
        {/* Massive Editorial Header */}
        <div className="relative flex flex-col items-center mb-12">
          {/* Label Reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-[0.7rem] uppercase tracking-[0.4em] text-white/30 mb-6"
          >
            Agentic AI Solutionist
          </motion.div>

          <h1 className="flex flex-col items-center leading-none">
            <motion.span 
              custom={0.4} initial="hidden" animate="visible" variants={slideUp}
              className="font-serif italic text-[clamp(5rem,15vw,14rem)] text-[#f5f5f5] mb-[-0.15em] relative z-10"
            >
              // Orchestrate
            </motion.span>
            <motion.span 
              custom={0.6} initial="hidden" animate="visible" variants={slideUp}
              className="font-serif italic text-[clamp(5rem,15vw,14rem)] text-white/10 outline-text"
            >
              Intelligence.
            </motion.span>
          </h1>
        </div>

        {/* Subtext Village */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="max-w-[700px] flex flex-col items-center gap-10"
        >
          <p className="font-sans text-[1.25rem] text-white/50 leading-relaxed font-light">
            Wiring <span className="text-white font-medium">multi-agent systems</span> and 
            <span className="text-white font-medium"> automated workflows</span> into the 
            core of business growth.
          </p>

          <div className="flex items-center gap-6">
            <a 
              href="#works" 
              data-cursor="ENTER_PROJECTS"
              className="group relative px-10 py-5 bg-white text-black font-sans font-bold uppercase text-[0.7rem] tracking-[0.25em] overflow-hidden"
            >
              <span className="relative z-10">Dive into Systems →</span>
              <motion.div 
                className="absolute inset-0 bg-black/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
              />
            </a>
            <a 
              href="#contact" 
              className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
            >
              / Start a build
            </a>
          </div>
        </motion.div>

        {/* ── BENTO STATS (Hero Bottom Integrated) ── */}
        <div className="absolute bottom-[5%] left-[5vw] right-[5vw] flex items-end justify-between border-t border-white/10 pt-8 mt-auto">
          <div className="flex gap-16">
            {[
              { val: "20+", label: "Architectures Delivered" },
              { val: "95%", label: "Process Automation" },
              { val: "06+", label: "Agent Frameworks" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + (i * 0.1) }}
                className="flex flex-col gap-1"
              >
                <span className="font-serif italic text-3xl text-white">{stat.val}</span>
                <span className="font-mono text-[0.55rem] uppercase tracking-widest text-white/30">{stat.label}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="hidden md:flex flex-col items-end gap-1"
          >
            <span className="font-mono text-[0.55rem] text-white/20 uppercase tracking-[0.3em]">Latent Space Visualization</span>
            <div className="flex gap-1 h-3 items-end">
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [4, 12, 4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                  className="w-[1px] bg-white/20"
                />
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.25);
          color: transparent;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .bg-radial-mask {
          background: radial-gradient(circle at center, transparent 0%, #080808 85%);
        }
        .will-change-contents {
           will-change: contents;
        }
      `}</style>

    </section>
  );
};
