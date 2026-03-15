"use client";

/* Reference: Photo cards are actual project screenshots with gradient overlays,
   not color gradients. Using dark placeholders until user provides real photos. */

const PHOTO_CARDS = [
  { label: "Instagram Bot UI" },
  { label: "Jarvis Dashboard" },
  { label: "Revenue OS Panel" },
  { label: "Lumina Landing" },
  { label: "Workflow Builder" },
  { label: "Agent Monitor" },
  { label: "Voice Pipeline" },
  { label: "Analytics View" },
];

const PhotoCard = ({ label }: { label: string }) => (
  <div className="flex-shrink-0 mx-3 rounded-2xl overflow-hidden border border-[#1e1e1e]
                  hover:border-white/30 hover:scale-[1.03] transition-all duration-500
                  bg-[#111111] relative"
    style={{ width: "320px", height: "200px" }}
  >
    <div className="absolute inset-0 bg-black/60" />
    <div className="absolute bottom-4 left-5 font-mono text-[0.6rem] text-[rgba(245,245,245,0.45)] uppercase tracking-wider">
      {label}
    </div>
  </div>
);

const PhotoRow = ({ reverse = false, speed }: { reverse?: boolean; speed: string }) => {
  const items = [...PHOTO_CARDS, ...PHOTO_CARDS, ...PHOTO_CARDS];
  const animClass = reverse ? "animate-marquee-right" : "animate-marquee-left";

  return (
    <div className="overflow-hidden w-full py-3">
      <div 
        className={`flex items-center ${animClass} hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed, width: "max-content" }}
      >
        {items.map((card, i) => (
          <PhotoCard key={i} label={card.label} />
        ))}
      </div>
    </div>
  );
};

export const ProjectPhotoMarquee = () => (
  <section className="bg-[#080808] py-12 overflow-hidden border-y border-[#1e1e1e]">
    <div className="flex flex-col gap-6">
      <PhotoRow speed="30s" />
      <PhotoRow reverse speed="38s" />
    </div>
  </section>
);
