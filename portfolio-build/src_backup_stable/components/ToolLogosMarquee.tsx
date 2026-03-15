"use client";
import React from 'react';

const TOOL_ICONS = ["Figma", "Chrome", "VS Code", "GitHub", "Appwrite", "Google Colab", "Hugging Face"];

export const ToolLogosMarquee = () => (
  <section className="bg-[#080808] py-24 px-[5vw] z-20 relative border-y border-[#1e1e1e]">
    <div className="max-w-[1400px] mx-auto">
      
      {/* Bento Grid Layout (from reference screenshots) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left: Tool icons grid */}
        <div className="md:col-span-2 bg-[#111111] border border-[#1e1e1e] rounded-2xl p-8">
          <div className="flex flex-wrap gap-4 mb-6">
            {TOOL_ICONS.map(tool => (
              <div key={tool} className="w-14 h-14 rounded-xl bg-[#2a2a2a] border border-[#1e1e1e] 
                                         flex items-center justify-center hover:border-white 
                                         hover:bg-[#f5f5f5] hover:text-black transition-all duration-300 cursor-default">
                <span className="font-sans font-bold text-lg text-[rgba(245,245,245,0.45)] hover:text-black">{tool.charAt(0)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right top: Personal photo */}
        <div className="bg-[#111111] border border-[#1e1e1e] rounded-2xl overflow-hidden relative h-[250px]">
          <div className="absolute inset-0 bg-[#080808] opacity-50" />
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#2a2a2a] border border-[#1e1e1e] 
                          flex items-center justify-center cursor-pointer hover:bg-white transition-all group">
            <span className="text-[rgba(245,245,245,0.45)] group-hover:text-black text-sm">🔇</span>
          </div>
        </div>

        {/* Bottom: Music Player card (from reference) */}
        <div className="md:col-span-2 bg-[#111111] border border-[#1e1e1e] rounded-2xl p-6 flex items-center gap-6">
          <div className="w-16 h-16 rounded-xl bg-[#2a2a2a] border border-[#1e1e1e] flex items-center justify-center">
            <span className="text-2xl">🎵</span>
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <span className="font-sans font-bold text-white text-base">Best of Me</span>
            <span className="font-sans text-[rgba(245,245,245,0.45)] text-sm">NEFFEX</span>
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-1 rounded-full bg-[#2a2a2a]" style={{ height: `${4 + Math.random() * 12}px` }} />
            ))}
          </div>
          <div className="w-12 h-12 rounded-full bg-[#2a2a2a] border border-[#1e1e1e] flex items-center justify-center cursor-pointer hover:bg-white transition-all group">
            <span className="text-[rgba(245,245,245,0.45)] group-hover:text-black">▶</span>
          </div>
        </div>

        {/* Right bottom: Another personal photo */}
        <div className="bg-[#111111] border border-[#1e1e1e] rounded-2xl overflow-hidden relative h-[200px]">
          <div className="absolute inset-0 bg-[#080808] opacity-50" />
        </div>
      </div>
    </div>
  </section>
);
