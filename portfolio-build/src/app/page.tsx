"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Loader } from "@/components/Loader";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WordByWordText } from "@/components/WordByWordText";
import { BentoMosaic } from "@/components/BentoMosaic";
import { AskZaidWidget } from "@/components/AskZaidWidget";
import { SelectedWorks } from "@/components/SelectedWorks";
import { TechArsenal } from "@/components/TechArsenal";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { MilestoneReveal } from "@/components/MilestoneReveal";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Disable scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Ensure starting from the top
      window.scrollTo(0, 0);
      // Fallback for some browsers
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    }
  }, [isLoading]);

  return (
    <main className="min-h-screen bg-[#080808] text-[#f5f5f5] scroll-smooth relative z-[1]">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <CustomCursor />
      <Navigation />

      {/* ── SECTIONS (order matches reference) ── */}
      <Hero />
      <WordByWordText />
      <BentoMosaic />
      <SelectedWorks />
      <TechArsenal />
      <ExperienceTimeline />
      <Testimonials />
      <Contact />
      <MilestoneReveal />
      
      <Footer />
      
      {/* ── WIDGETS ── */}
      <AskZaidWidget />
    </main>
  );
}
