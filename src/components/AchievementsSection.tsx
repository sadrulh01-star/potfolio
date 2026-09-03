"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Mic, Landmark, Sparkles, CheckCircle2, Award, Users, ArrowUpRight } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/portfolioData";

export default function AchievementsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case "Mic":
        return <Mic className="w-6 h-6 text-cyan-400" />;
      case "Landmark":
        return <Landmark className="w-6 h-6 text-violet-400" />;
      default:
        return <Award className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative bg-[#070a1a] border-t border-slate-800/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-300 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>LEADERSHIP & CO-CURRICULAR IMPACT</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Achievements & <span className="text-gradient-cyan-violet">Leadership Milestones</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Demonstrated capabilities in technical event coordination, structured public discourse, and civic debate simulations.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="glass-card-interactive p-6 sm:p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono font-medium">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-800">
                  <span className="text-cyan-400 font-sans">{item.role}</span>
                  <span>{item.timeline}</span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Impacts */}
                <div className="space-y-2 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Key Outcomes:
                  </span>
                  {item.impacts.map((imp, impIdx) => (
                    <div key={impIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Line */}
              <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Category: {item.category}</span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400/40" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
