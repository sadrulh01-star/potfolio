"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Globe, 
  Cpu, 
  Bot, 
  Zap, 
  ShieldAlert, 
  Radio, 
  Code, 
  ChevronRight,
  Workflow
} from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";
import LaserSimulation from "./LaserSimulation";

export default function ProjectsSection() {
  const buzzBox = PROJECTS[0];
  const laserProject = PROJECTS[1];

  return (
    <section id="projects" className="py-24 relative bg-[#070a1a] border-t border-slate-800/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED CASE STUDIES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Projects & <span className="text-gradient-cyan-violet">Technical Implementations</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            In-depth explorations of web-based AI automation platforms and hardware-driven embedded security systems.
          </p>
        </div>

        <div className="space-y-16">
          {/* CASE STUDY 1: BUZZ BOX-AUTO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl border border-cyan-500/30 relative overflow-hidden group shadow-2xl"
          >
            {/* Top Tag & Timeline */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
                  {buzzBox.category}
                </span>
                <span className="px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
                  {buzzBox.role}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {buzzBox.timeline}
              </span>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Project Overview & Contributions */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {buzzBox.title}
                  </h3>
                  <p className="text-cyan-400 text-sm sm:text-base font-medium mb-4">
                    &ldquo;{buzzBox.tagline}&rdquo;
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {buzzBox.description}
                  </p>

                  {/* Key Contributions Checklist */}
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    Key Roles & Technical Contributions
                  </h4>
                  <div className="space-y-2.5 mb-6">
                    {buzzBox.keyContributions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Link Button */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={buzzBox.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 hover:scale-105"
                  >
                    <span>View Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <span className="text-xs font-mono text-slate-400">
                    Deployed at buzzbox-auto.vercel.app
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Mockup & "What It Delivers" Matrix */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                {/* Browser Mockup Window */}
                <div className="rounded-2xl bg-[#090d24] border border-cyan-500/30 overflow-hidden shadow-xl">
                  {/* Browser Bar */}
                  <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-slate-950 text-[10px] font-mono text-cyan-400/90 truncate max-w-[200px]">
                      https://buzzbox-auto.vercel.app
                    </div>
                    <Globe className="w-3.5 h-3.5 text-slate-500" />
                  </div>

                  {/* Mockup Body Preview */}
                  <div className="p-6 bg-gradient-to-b from-[#0b102e] to-[#080c20] flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[190px]">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/30 to-violet-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-3 shadow-[0_0_20px_rgba(0,240,255,0.25)]">
                      <Bot className="w-6 h-6" />
                    </div>
                    <h5 className="font-heading text-lg font-bold text-white mb-1">
                      Buzz Box-Auto
                    </h5>
                    <p className="text-xs text-slate-400 max-w-xs mb-3">
                      Intelligent Business Automation, Custom Digital Portals & AI Workflows
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-[11px] font-mono">
                      <Workflow className="w-3 h-3 text-cyan-400" />
                      <span>30+ Student Submissions Workflow Engine</span>
                    </div>
                  </div>
                </div>

                {/* "What It Delivers" Mini Grid */}
                <div className="p-5 rounded-2xl bg-[#090d24]/90 border border-slate-800">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    What It Delivers
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {buzzBox.deliverables?.map((item, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-2 rounded-lg bg-slate-900/90 border border-cyan-500/15 text-slate-200 text-xs font-medium flex items-center gap-2"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {buzzBox.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700/60 text-slate-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CASE STUDY 2: LASER-BASED HUMAN DETECTION AND ALERT SYSTEM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl border border-violet-500/30 relative overflow-hidden group shadow-2xl"
          >
            {/* Top Tag & Timeline */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider font-mono">
                  {laserProject.category}
                </span>
                <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  {laserProject.role}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {laserProject.timeline}
              </span>
            </div>

            {/* Content & Simulation */}
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {laserProject.title}
              </h3>
              <p className="text-violet-400 text-sm sm:text-base font-medium mb-4">
                &ldquo;{laserProject.tagline}&rdquo;
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {laserProject.description}
              </p>

              {/* Interactive Laser Simulation Flow */}
              <LaserSimulation />

              {/* Key Contributions Checklist */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-violet-400" />
                    Key Engineering Contributions
                  </h4>
                  <div className="space-y-2.5">
                    {laserProject.keyContributions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="p-5 rounded-2xl bg-[#090d24]/90 border border-slate-800 mb-4">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-violet-400" />
                      What It Delivers
                    </h5>
                    <div className="space-y-2">
                      {laserProject.deliverables?.map((item, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-violet-500/15 text-slate-200 text-xs font-medium flex items-center gap-2"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {laserProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700/60 text-slate-300 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
