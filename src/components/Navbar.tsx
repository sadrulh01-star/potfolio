"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Sparkles, Send } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060813]/85 backdrop-blur-md border-b border-cyan-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/30 to-violet-600/30 border border-cyan-400/40 flex items-center justify-center font-heading font-bold text-lg text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:scale-105 transition-transform duration-300">
            {PERSONAL_INFO.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors text-sm sm:text-base tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider">AI / ML CSE</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_12px_rgba(0,240,255,0.15)]"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-800/80 hover:bg-slate-700/80 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] group cursor-pointer"
          >
            <FileText className="w-4 h-4 text-cyan-400 group-hover:rotate-6 transition-transform" />
            <span>View Resume</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.05] border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 px-4 py-6 bg-[#090d24]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl transition-all duration-300">
          <div className="flex flex-col gap-2 max-w-md mx-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-700/50 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded-lg text-sm font-medium text-cyan-300 bg-slate-800/90 border border-cyan-500/30 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                View Resume / CV
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
