"use client";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WordByWordText } from "@/components/WordByWordText";
import { About } from "@/components/About";
import { AskZaidWidget } from "@/components/AskZaidWidget";
import { StatsGrid } from "@/components/StatsGrid";
import { SelectedWorks } from "@/components/SelectedWorks";
import { TechArsenal } from "@/components/TechArsenal";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MusicWidget } from "@/components/MusicWidget";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#f5f5f5] scroll-smooth relative z-[1]">
      <CustomCursor />
      <Navigation />
      
      {/* ── SECTIONS (order matches reference) ── */}
      <Hero />
      <WordByWordText />
      <SelectedWorks />
      <StatsGrid />
      <TechArsenal />
      <About />
      <ExperienceTimeline />
      <Testimonials />
      <Contact />
      
      <Footer />
      
      {/* ── WIDGETS ── */}
      <MusicWidget />
      <AskZaidWidget />
    </main>
  );
}
