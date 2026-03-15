"use client";

// Each card rotates through the 4 gradient variants
const GRADIENTS = [
  "linear-gradient(135deg, #0d0d0d, #1a1a1a)",
  "linear-gradient(135deg, #111111, #0a0a0a)",
  "linear-gradient(160deg, #0a0a0a, #161616)",
  "linear-gradient(120deg, #141414, #0d0d0d)",
];

const CARDS = [
  "Instagram Bot",
  "WhatsApp Messenger",
  "Hey Jarvis AI",
  "Lumina Dental",
  "Voice Lead Qualifier",
  "Content Engine",
  "Revenue OS",
  "OpenClaw Agent",
];

const GridOverlay = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ opacity: 0.05 }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="pcm-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#fff" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#pcm-grid)" />
  </svg>
);

const Card = ({ label, index }: { label: string; index: number }) => (
  <div
    className="group relative flex-shrink-0 flex items-center justify-center overflow-hidden
               border border-[#222] hover:border-white/25 cursor-default
               transition-all duration-300 hover:scale-[1.03]"
    style={{
      width: "320px",
      height: "200px",
      borderRadius: "6px",
      background: GRADIENTS[index % GRADIENTS.length],
    }}
  >
    <GridOverlay />
    <span className="relative z-10 font-mono text-[0.75rem] tracking-widest text-white/45 group-hover:text-white/75 transition-colors duration-300">
      {label}
    </span>
  </div>
);

// Build a single strip: original + duplicate for seamless loop (translateX -50%)
const Strip = ({ direction }: { direction: "left" | "right" }) => {
  // 3× repetition so gaps between repeats are invisible at any speed
  const items = [...CARDS, ...CARDS, ...CARDS];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const speed = direction === "left" ? "25s" : "32s";

  return (
    <div className="overflow-hidden w-full group/row">
      {/*
        Two identical copies sit side-by-side inside a flex row.
        The animation slides the whole row by 50% of its own width,
        which equals exactly one copy — creating a seamless loop.
      */}
      <div
        className={`flex ${animClass}`}
        style={{
          width: "max-content",
          animationDuration: speed,
        }}
      >
        {/* Copy A */}
        {items.map((label, i) => (
          <div key={`a-${i}`} className="mx-[10px]">
            <Card label={label} index={i} />
          </div>
        ))}
        {/* Copy B — identical, provides the seamless loop */}
        {items.map((label, i) => (
          <div key={`b-${i}`} className="mx-[10px]">
            <Card label={label} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProjectCardMarquee = () => (
  <section className="w-full bg-[#080808] border-y border-[#222] py-8 z-20 relative overflow-hidden">
    <div className="flex flex-col gap-5">
      <Strip direction="left" />
      <Strip direction="right" />
    </div>
  </section>
);
