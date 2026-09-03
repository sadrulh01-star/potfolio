"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, FileText, Sparkles, Code2, Bot, Layers } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import ThreeCanvas from "./ThreeCanvas";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern bg-radial-glow">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>B.Tech CSE — Artificial Intelligence & Machine Learning</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Hi, I&apos;m{" "}
              <span className="text-gradient-cyan-violet">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Dynamic Headline */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 mb-6 leading-snug">
              {PERSONAL_INFO.headline}
            </h2>

            {/* Short Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              {PERSONAL_INFO.shortIntro}
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-400/50 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.1)]"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View CV / Resume</span>
              </button>
            </div>

            {/* Social Links & Quick Reach */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-4">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400">
                Connect Directly:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-blue-600/20 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.email}
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-cyan-600/20 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Verified CGPA Badge */}
              <div className="ml-auto hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-violet-950/40 border border-violet-500/30 text-violet-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>CGPA 8.33 / 10 (LPU)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive WebGL Orb & Floating Pillars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]"
          >
            {/* 3D Canvas */}
            <ThreeCanvas />

            {/* Floating Info Cards */}
            <div className="absolute -bottom-4 -left-2 sm:left-4 z-20 px-3.5 py-2.5 rounded-xl bg-[#0b1029]/90 border border-cyan-500/30 backdrop-blur-md shadow-xl flex items-center gap-3 animate-float-slow">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Core Capability</div>
                <div className="text-xs font-semibold text-slate-200">End-to-End Project Management</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-2 sm:right-4 z-20 px-3.5 py-2.5 rounded-xl bg-[#0b1029]/90 border border-violet-500/30 backdrop-blur-md shadow-xl flex items-center gap-3 animate-float-slow [animation-delay:2s]">
              <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Specialization</div>
                <div className="text-xs font-semibold text-slate-200">AI / ML & Digital Automation</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
