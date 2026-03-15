"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  
  // Position values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for high-end feel
  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, .clickable');
      setIsHovering(!!isClickable);

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
      {/* ── Neural Flashlight Effect ── */}
      <motion.div 
        style={{ 
          left: smoothX, 
          top: smoothY,
          backgroundColor: isHovering ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.03)"
        }}
        className="fixed w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none z-[1] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="fixed inset-0 pointer-events-none z-[99999] hidden md:block">
        
        {/* Main Dot */}
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        />

        {/* Outer Ring – no text inside to avoid N/letter circles */}
        <motion.div
          style={{ x: smoothX, y: smoothY }}
          animate={{
            width: isHovering ? 90 : 40,
            height: isHovering ? 90 : 40,
            border: isHovering ? "1px solid rgba(255,255,255,0.5)" : "1px solid rgba(255,255,255,0.2)",
          }}
          className="fixed top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference flex items-center justify-center overflow-hidden"
        >
          {/* Interactive Pulse inside ring */}
          {isHovering && (
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-2 bg-white rounded-full"
            />
          )}
        </motion.div>
      </div>

      <style jsx global>{`
        @media (pointer: fine) {
          body, a, button, .clickable { 
            cursor: none !important; 
          }
        }
        
        main {
          isolation: isolate;
        }
      `}</style>
    </>
  );
};
