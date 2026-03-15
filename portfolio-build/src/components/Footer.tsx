"use client";
import React, { useEffect, useState } from 'react';

export const Footer = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const measure = () => setScrollHeight(document.body.scrollHeight);
    measure();
    // Re-measure after a delay to account for dynamic content loading
    const timer = setTimeout(measure, 1500);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <footer className="bg-[#080808] border-t border-[#1e1e1e] relative z-20">
      <div className="max-w-[1400px] mx-auto px-[5vw] py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-sans font-black text-xl text-[#f5f5f5] tracking-tight">
                ZaidBuilds
              </h2>
              <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[rgba(245,245,245,0.3)] mt-2 block">
                I orchestrate intelligence.
              </span>
            </div>
            <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[rgba(245,245,245,0.15)]">
              © 2026 ZaidBuilds — All systems running.
            </p>
          </div>

          {/* CENTER COLUMN */}
          <div className="flex flex-col md:items-center">
            <div className="flex flex-col gap-3">
              {['About', 'Works', 'Stack', 'Experience', 'Contact'].map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[rgba(245,245,245,0.3)] hover:text-[#f5f5f5] transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col md:items-end gap-6 text-left md:text-right">
            <div>
              <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[rgba(245,245,245,0.3)] block mb-4">
                Built with
              </span>
              <div className="flex flex-wrap md:justify-end gap-2">
                {['n8n', 'Claude Code', 'Next.js', 'Vercel'].map((tool) => (
                  <span 
                    key={tool}
                    className="font-mono text-[0.65rem] border border-[#1e1e1e] text-[rgba(245,245,245,0.35)] px-[0.6rem] py-[0.25rem] rounded-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-[rgba(245,245,245,0.2)]">
              Designed & Developed by Mohd Zaid
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="w-full bg-[#050505] border-t border-[#1e1e1e] py-3 text-center">
        <p className="font-mono text-[0.75rem] uppercase tracking-widest text-[rgba(245,245,245,0.4)]">
          Thanks for Scrolling <span className="text-white">{scrollHeight.toLocaleString()}</span> Pixels 🚀
        </p>
      </div>
    </footer>
  );
};
