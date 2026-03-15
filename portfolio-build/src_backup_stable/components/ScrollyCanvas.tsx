"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export const ScrollyCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 120;

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // ezgif-frame-001.png
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${paddedIndex}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img) return;

    // Use object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      offsetY = 0;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    // Initial draw
    if (images.length > 0) {
      drawImage(0);
    }
  }, [images]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    // Map scroll progress to frame index
    const frameIndex = Math.min(
      Math.floor(latest * (frameCount - 1)),
      frameCount - 1
    );
    drawImage(frameIndex);
  });

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      if (images.length > 0) {
        // Redraw current frame
        const currentFrame = Math.min(
          Math.floor(scrollYProgress.get() * (frameCount - 1)),
          frameCount - 1
        );
        drawImage(currentFrame);
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize
    
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-40 mix-blend-screen bg-black grayscale">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
      {/* Background gradients as requested */}
      <div className="absolute inset-0 bg-[#080808]/80" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at bottom right, rgba(245, 245, 245, 0.02), transparent 60%),
            radial-gradient(ellipse at top left, rgba(245, 245, 245, 0.01), transparent 60%)
          `,
        }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 mask-radial"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(245, 245, 245, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(245, 245, 245, 0.03) 1px, transparent 1px)`,
            backgroundSize: `60px 60px`
          }}
        />
      </div>
    </div>
  );
};
