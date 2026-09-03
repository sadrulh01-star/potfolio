"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { EDUCATION_TIMELINE } from "@/data/portfolioData";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative bg-[#060813] border-t border-slate-800/60 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Education & <span className="text-gradient-cyan-violet">Academic Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Consistent academic excellence in computer science engineering, AI/ML specialization, and STEM foundations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-32 space-y-12 pb-4">
          {EDUCATION_TIMELINE.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#060813] shadow-[0_0_15px_rgba(0,240,255,0.6)] group-hover:scale-125 transition-transform" />

              {/* Timeline Year Pill (Desktop Left Offset) */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-lg shadow-sm">
                  {item.timeline}
                </span>
              </div>

              {/* Education Card */}
              <div className="glass-card-interactive p-6 sm:p-7 rounded-2xl">
                {/* Mobile Timeline Label */}
                <div className="sm:hidden mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-lg">
                    {item.timeline}
                  </span>
                </div>

                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.institution}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Score Badge */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-950/60 to-violet-950/60 border border-cyan-500/30 text-cyan-300">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400">
                        {item.scoreLabel}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-cyan-200">
                        {item.scoreValue}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="font-medium text-slate-200 text-sm sm:text-base mt-2 mb-1">
                  {item.degree}
                </div>

                {item.specialization && (
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-violet-950/50 border border-violet-500/30 text-violet-300 text-xs font-mono mb-4">
                    {item.specialization}
                  </div>
                )}

                {/* Highlights */}
                <div className="mt-4 pt-4 border-t border-slate-800 space-y-1.5">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
