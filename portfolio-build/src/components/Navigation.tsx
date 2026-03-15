"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Stack", href: "#stack" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-[5vw] flex items-center ${scrolled
      ? "h-16 bg-[#080808]/88 backdrop-blur-xl border-b border-[#1e1e1e]"
      : "h-20 bg-transparent"
    }`;

  return (
    <>
      <nav className={navClasses}>
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">

          {/* LEFT: Text Logo */}
          <a href="/" className="group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-mono font-bold text-sm tracking-tighter text-white uppercase italic">
              Zaid//Builds
            </span>
          </a>

          {/* CENTER: Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[rgba(245,245,245,0.45)] hover:text-[#f5f5f5] transition-colors duration-300 group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </div>

          {/* RIGHT: Mobile Toggle only */}
          <div className="flex items-center gap-6">
            {/* Mobile Hamburger toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-[#080808] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-[5vw] text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans font-bold text-4xl text-[#f5f5f5] hover:italic transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
