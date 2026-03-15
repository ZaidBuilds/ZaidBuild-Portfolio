"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  
  // Position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the outer ring
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for clickable elements
      const isClickable = target.closest('a, button, .clickable');
      setIsHovering(!!isClickable);

      // Check for specific text triggers
      if (target.closest('[data-cursor]')) {
        setCursorText(target.closest('[data-cursor]')?.getAttribute('data-cursor') || "");
      } else {
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[99999] hidden md:block">
        
        {/* Main Dot - Direct Follow */}
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        />

        {/* Outer Ring - Spring Follow */}
        <motion.div
          style={{ x: ringX, y: ringY }}
          animate={{
            width: isHovering ? 80 : 36,
            height: isHovering ? 80 : 36,
            backgroundColor: isHovering ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)",
          }}
          transition={{ duration: 0.3, ease: "circOut" }}
          className="fixed top-0 left-0 border border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference flex items-center justify-center overflow-hidden"
        >
          {/* Dynamic Cursor Text (revealed on hover) */}
          {cursorText && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[10px] font-mono text-white uppercase tracking-tighter"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>

        {/* Velocity Trail / Distortion - Optional: Could add a subtle SVG filter here */}
      </div>

      <style jsx global>{`
        @media (pointer: fine) {
          body, a, button, .clickable { 
            cursor: none !important; 
          }
        }
        
        /* Ensure difference blend mode works against backgrounds */
        main {
          isolation: isolate;
        }
      `}</style>
    </>
  );
};
