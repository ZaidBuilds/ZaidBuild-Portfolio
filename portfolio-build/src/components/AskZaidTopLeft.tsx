"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

export const AskZaidTopLeft = () => {
  const { scrollYProgress } = useScroll();

  // Vertical line draws downward on scroll (first 12% of page)
  const lineScaleY = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  // Bubble appears as line draws (8% to 16%)
  const bubbleOpacity = useTransform(scrollYProgress, [0.08, 0.16], [0, 1]);
  const bubbleY = useTransform(scrollYProgress, [0.08, 0.16], [6, 0]);

  return (
    <div className="fixed right-4 md:right-6 top-[5.25rem] z-[90] pointer-events-auto">
      <button
        onClick={() => (window as any).openAskZaid?.()}
        className="group flex flex-col items-end cursor-pointer text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
        aria-label="Open Ask Zaid chatbot"
      >
        {/* Vertical stack: label → circle → line → bubble (tap opens chatbot) */}
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-white/90 group-hover:text-white transition-colors whitespace-nowrap mb-2">
          Ask Zaid
        </span>
        <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/15 group-hover:border-white/30 transition-colors mb-0.5">
          <Sparkles size={14} className="text-white" />
        </div>
        <motion.div
          style={{ scaleY: lineScaleY, originY: 0 }}
          className="w-px h-12 bg-white/60 self-center"
        />
        <motion.div
          style={{ opacity: bubbleOpacity, y: bubbleY }}
          className="hidden sm:block mt-0.5 px-3 py-2 rounded-lg border border-white/15 bg-black/60 backdrop-blur-sm min-w-[180px] text-right"
        >
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/70 leading-snug">
            Don&apos;t scroll 6689 pixel — <span className="text-white font-semibold">askZaid!</span>
          </p>
        </motion.div>
      </button>
    </div>
  );
};
