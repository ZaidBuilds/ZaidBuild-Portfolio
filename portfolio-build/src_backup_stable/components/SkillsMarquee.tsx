"use client";

const SKILLS = [
  "AI AGENTS", "AUTOMATION", "GENERATIVE AI", "LLMs", "RAG",
  "LANGCHAIN", "DATA SCIENCE", "AGENTIC AI", "WORKFLOWS", "PYTHON", "TYPESCRIPT",
];

const HIGHLIGHTED_WORDS = ["LLMs", "RAG", "AGENTIC AI"];

export const SkillsMarquee = () => {
  const tripled = [...SKILLS, ...SKILLS, ...SKILLS];
  return (
    <section className="bg-[#080808] py-0 overflow-hidden relative z-10 border-y border-[#1e1e1e]">
      <div className="overflow-hidden w-full py-5">
        <div
          className="flex items-center animate-marquee-left hover:[animation-play-state:paused]"
          style={{ animationDuration: "40s", width: "max-content" }}
        >
          {tripled.map((skill, i) => (
            <div key={i} className="flex items-center">
              <span className={`font-sans font-bold text-[clamp(2.5rem,5vw,4rem)] tracking-tight whitespace-nowrap mx-8 ${
                HIGHLIGHTED_WORDS.includes(skill) ? "text-white" : "text-[#2a2a2a]"
              }`}>
                {skill}
              </span>
              <span className="text-[#1e1e1e] text-2xl mx-2">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
