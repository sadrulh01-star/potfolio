"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  Sparkles, 
  Users, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  BrainCircuit 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function AboutSection() {
  const PILLARS = [
    {
      title: "Project Management & Coordination",
      description: "End-to-end project leadership from conceptualization to deployment, milestone structuring, and cross-functional synchronization.",
      icon: Briefcase,
      accent: "cyan",
    },
    {
      title: "AI Integration & Automation",
      description: "Implementing practical AI-assisted workflows, conversational bots, and task automation to reduce manual operational overhead.",
      icon: BrainCircuit,
      accent: "violet",
    },
    {
      title: "Full-Stack Web Engineering",
      description: "Building responsive, modern web applications with clean design architectures, accessibility, and high performance.",
      icon: Sparkles,
      accent: "blue",
    },
    {
      title: "Cross-Functional Synergy",
      description: "Seamlessly translating business intent into technical tasks while maintaining transparent stakeholder communication.",
      icon: Users,
      accent: "cyan",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#070a18] border-t border-slate-800/60 overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT & PROFESSIONAL PROFILE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Bridging AI Technology & <span className="text-gradient-cyan-violet">Project Execution</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Combining rigorous AI/ML foundational knowledge with practical project management, structured execution, and modern product engineering.
          </p>
        </div>

        {/* Top Split: Bio Narrative & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Bio Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-5 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Who I Am & What I Do
              </h3>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Core Values Checklist */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Extreme Project Ownership",
                "Transparent Communication",
                "Agile Problem Solving",
                "Continuous Adaptive Learning"
              ].map((value, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-cyan-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Facts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Quick Fact 1 */}
            <div className="glass-card p-5 rounded-xl border border-cyan-500/20 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Academic Degree</div>
                <div className="font-semibold text-slate-100 text-sm mt-0.5">B.Tech CSE (AI & ML)</div>
              </div>
            </div>

            {/* Quick Fact 2 */}
            <div className="glass-card p-5 rounded-xl border border-violet-500/20 flex flex-col justify-between hover:border-violet-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Institution</div>
                <div className="font-semibold text-slate-100 text-sm mt-0.5">LPU, Phagwara, Punjab</div>
              </div>
            </div>

            {/* Quick Fact 3 */}
            <div className="glass-card p-5 rounded-xl border border-emerald-500/20 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Academic CGPA</div>
                <div className="font-bold text-emerald-400 text-lg mt-0.5">8.33 / 10</div>
              </div>
            </div>

            {/* Quick Fact 4 */}
            <div className="glass-card p-5 rounded-xl border border-blue-500/20 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Core Strength</div>
                <div className="font-semibold text-slate-100 text-sm mt-0.5">Project Management</div>
              </div>
            </div>

            {/* Quick Fact 5 (Full Width Span) */}
            <div className="sm:col-span-2 glass-card p-5 rounded-xl border border-cyan-500/20 flex items-center gap-4 bg-gradient-to-r from-cyan-950/30 to-violet-950/30">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Practical Focus</div>
                <div className="font-semibold text-slate-100 text-sm">AI Automation, Web Solutions & Applied Electronics</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom 4 Core Execution Pillars */}
        <div>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
            <span>Core Competencies & Execution Philosophy</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card-interactive p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
