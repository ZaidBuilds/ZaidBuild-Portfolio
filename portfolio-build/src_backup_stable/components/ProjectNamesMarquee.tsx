"use client";

const PROJECTS = [
  "Instagram Engagement Bot",
  "WhatsApp Bulk Messenger",
  "Hey Jarvis AI Assistant",
  "Lumina Dental Portfolio",
  "Claude Code Integration",
  "OpenClaw AI Agent",
  "Ship Daily Stack",
  "Workflows Shipped",
];

const Row = ({ reverse = false, speed }: { reverse?: boolean; speed: string }) => {
  const tripledItems = [...PROJECTS, ...PROJECTS, ...PROJECTS];
  const animClass = reverse ? "animate-marquee-right" : "animate-marquee-left";

  return (
    <div className="overflow-hidden w-full border-y border-[#1e1e1e] py-12 bg-[#080808]">
      <div 
        className={`flex items-center ${animClass} hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed, width: "max-content" }}
      >
        {tripledItems.map((name, i) => (
          <div key={i} className="flex items-center mx-16 group cursor-default">
            <span className="font-serif italic text-[clamp(4rem,10vw,8rem)] text-[#2a2a2a] group-hover:text-white transition-all duration-700 tracking-tighter">
              {name}
            </span>
            <span className="mx-16 text-[#1e1e1e] text-2xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProjectNamesMarquee = () => (
  <section className="bg-[#080808] py-0 overflow-hidden relative z-10">
    <div className="flex flex-col gap-0 border-y border-[#1e1e1e]">
      <Row speed="45s" />
      <Row reverse speed="52s" />
    </div>
  </section>
);
