"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  Users, 
  CheckCircle, 
  Sparkles, 
  Zap, 
  Terminal, 
  Layers 
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5" />;
      case "Globe":
        return <Globe className="w-5 h-5" />;
      case "Database":
        return <Database className="w-5 h-5" />;
      case "Cpu":
        return <Cpu className="w-5 h-5" />;
      case "Users":
        return <Users className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const filteredCategories = activeTab === "all"
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-[#060813] border-t border-slate-800/60 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL MATRIX & PROFICIENCIES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Skills & <span className="text-gradient-cyan-violet">Domain Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            A balanced stack combining programming languages, modern web technologies, database tools, AI frameworks, and leadership capabilities.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="glass-card-interactive p-6 sm:p-7 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.1)] group-hover:scale-110 transition-transform">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => {
                    const badgeColorClasses = 
                      skill.badgeColor === "cyan"
                        ? "bg-cyan-950/40 border-cyan-500/30 text-cyan-300 hover:border-cyan-400"
                        : skill.badgeColor === "violet"
                        ? "bg-violet-950/40 border-violet-500/30 text-violet-300 hover:border-violet-400"
                        : "bg-blue-950/40 border-blue-500/30 text-blue-300 hover:border-blue-400";

                    return (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium backdrop-blur-sm transition-all duration-200 hover:scale-105 ${badgeColorClasses}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] opacity-70 font-mono ml-0.5">
                            ({skill.level})
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Terminal Aesthetic Line */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-cyan-400/60" /> verified
                </span>
                <span className="text-slate-400 group-hover:text-cyan-300 transition-colors">
                  {category.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills & Leadership Callout Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass-card p-6 sm:p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-[#0d1433] via-[#101942] to-[#0d1433]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
                <Zap className="w-4 h-4" />
                <span>PROJECT MANAGEMENT ADVANTAGE</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                Leadership, Planning & Clear Communication
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Technical skill is amplified by clear stakeholder management, structured delivery schedules, and proactive problem solving.
              </p>
            </div>
            <div className="lg:col-span-8 flex flex-wrap gap-2.5">
              {[
                "Project Planning & Scoping",
                "Agile Coordination",
                "Stakeholder Alignment",
                "Cross-Functional Teamwork",
                "Presentation & Pitching",
                "Time & Priority Management",
                "Problem Solving",
                "Attention to Detail"
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-400/20 text-slate-200 text-xs sm:text-sm font-medium hover:border-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
