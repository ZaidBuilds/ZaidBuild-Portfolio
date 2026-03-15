"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, useMotionValue } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<string[]>([]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // SUPPORTING MORE FRAMES (User can add up to 240+ frames)
  const totalFrames = 120; // Keep at 120 for now but logic is ready for more

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra-Smooth Spring for interactions
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const charX = useSpring(useTransform(mouseX, [0, 1], [8, -8]), springConfig);
  const charY = useSpring(useTransform(mouseY, [0, 1], [8, -8]), springConfig);

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
  }, [totalFrames]);

  // Map scroll progress to sequence frames with sub-frame interpolation logic
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const rawIndex = latest * (totalFrames - 1);
    const index = Math.floor(rawIndex);
    setFrameIndex(index);
  });

  // Animation values mapped to scrollProgress
  const bgScale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1.05, 1.15]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.6, 1, 1, 0.5]);

  // Sequential Text Opacity - Refined for "Full Neural Reveal"
  const firstTextOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.35, 0.45], [0, 1, 1, 0]);
  const firstTextY = useTransform(scrollYProgress, [0.05, 0.15, 0.35, 0.45], [30, 0, 0, -30]);

  const secondTextOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.85, 0.95], [0, 1, 1, 0]);
  const secondTextY = useTransform(scrollYProgress, [0.5, 0.6, 0.85, 0.95], [30, 0, 0, -30]);

  const ctaOpacity = useTransform(scrollYProgress, [0.94, 0.99], [0, 1]);

  // Ask Zaid (hero only): line draws + bubble appears as you scroll hero
  const askZaidLineScaleY = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const askZaidBubbleOpacity = useTransform(scrollYProgress, [0.05, 0.12], [0, 1]);
  const askZaidBubbleY = useTransform(scrollYProgress, [0.05, 0.12], [6, 0]);

  return (
    <section ref={containerRef} className="relative h-[450vh] w-full bg-[#080808]">
      <div
        className="sticky top-0 w-full overflow-hidden flex flex-col justify-end hero-sticky"
        style={{
          height: "var(--hero-height, 100vh)",
          minHeight: "100vh",
        }}
      >

        {/* ── Background: Frame Sequence ── */}
        <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
          <motion.div
            style={{
              scale: bgScale,
              opacity: bgOpacity,
              x: charX,
              y: charY
            }}
            className="relative w-full h-full flex items-end justify-center"
          >
            {images.length > 0 && (
              <img
                src={images[frameIndex]}
                alt="Zaid Builds Animation"
                className="w-full h-full object-contain object-bottom grayscale contrast-[1.05] brightness-[1.1] transition-opacity duration-300"
                style={{ filter: "drop-shadow(0 0 50px rgba(255,255,255,0.05))" }}
              />
            )}

            {/* Edge blending gradients - Improved Smoothness */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent z-10 h-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-transparent z-10 h-1/2" />
          </motion.div>
        </div>

        {/* ── Foreground: Sequential Typography ── */}
        <div className="relative z-20 w-full flex flex-col items-center justify-end pb-[12vh] px-8 pointer-events-none text-center">

          <div className="relative w-full h-[250px] flex items-center justify-center">
            {/* Step 1: AI Solutionist */}
            <motion.h1
              style={{ opacity: firstTextOpacity, y: firstTextY }}
              className="absolute font-serif italic text-[clamp(4rem,15vw,12rem)] text-[#f5f5f5] leading-none tracking-tight drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            >
              AI Solutionist
            </motion.h1>

            {/* Step 2: The Orchestrate Builder */}
            <motion.h1
              style={{ opacity: secondTextOpacity, y: secondTextY }}
              className="absolute font-serif italic text-[clamp(3rem,12vw,10rem)] text-[#f5f5f5] leading-[0.9] text-center drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            >
              The Orchestrate <br /> <span className="text-white/20">Builder.</span>
            </motion.h1>
          </div>

          <motion.div style={{ opacity: ctaOpacity }} className="mt-8 flex flex-col items-center gap-6">
            <p className="font-sans text-[1.1rem] text-white/50 max-w-[650px] leading-relaxed font-light">
              I architect <span className="text-white">autonomous systems</span> that transform
              complexity into operational elegance.
            </p>
            <div className="flex gap-4 mt-8 pointer-events-auto">
              <a href="#works" className="px-8 py-3 bg-white text-black font-mono text-[0.65rem] uppercase tracking-widest rounded-sm hover:invert transition-all">Access Archive</a>
              <a
                href="https://calendly.com/collab-zaidbuilds/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/10 text-white font-mono text-[0.65rem] uppercase tracking-widest rounded-sm bg-white/5 hover:bg-white/10 transition-all"
              >
                Book 1:1 Call
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Ask Zaid (hero only): right side, vertical, line attached — tap opens chatbot ── */}
        <div className="absolute right-6 top-[5.25rem] bottom-auto z-40 pointer-events-auto hidden sm:block">
          <button
            onClick={() => (window as any).openAskZaid?.()}
            className="group flex flex-col items-end cursor-pointer text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
            aria-label="Open Ask Zaid chatbot"
          >
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-white/90 group-hover:text-white transition-colors whitespace-nowrap mb-2">
              Ask Zaid
            </span>
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/15 group-hover:border-white/30 transition-colors mb-0.5">
              <Sparkles size={14} className="text-white" />
            </div>
            {/* Line attached below Ask Zaid — draws on hero scroll */}
            <motion.div
              style={{ scaleY: askZaidLineScaleY, originY: 0 }}
              className="w-px h-12 bg-white/60 self-center"
            />
            <motion.div
              style={{ opacity: askZaidBubbleOpacity, y: askZaidBubbleY }}
              className="mt-0.5 px-3 py-2 rounded-lg border border-white/15 bg-black/60 backdrop-blur-sm min-w-[180px] text-right"
            >
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/70 leading-snug">
                Don&apos;t scroll 6689 pixel — <span className="text-white font-semibold">askZaid!</span>
              </p>
            </motion.div>
          </button>
        </div>

      </div>
    </section>
  );
};
