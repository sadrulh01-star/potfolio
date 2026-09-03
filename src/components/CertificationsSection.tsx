"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Calendar, Eye, Sparkles, Building, ShieldCheck } from "lucide-react";
import { CERTIFICATES } from "@/data/portfolioData";
import { CertificateItem } from "@/types";
import CertificateModal from "./CertificateModal";

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredCerts =
    filterCategory === "all"
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.category === filterCategory);

  return (
    <section id="certifications" className="py-24 relative bg-[#060813] border-t border-slate-800/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC CREDENTIALS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Certifications & <span className="text-gradient-cyan-violet">Specializations</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Professional certifications from Infosys Springboard and foundational learning institutions covering Python development, cybersecurity, and legal frameworks.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {[
              { id: "all", label: "All Certifications (6)" },
              { id: "programming", label: "Python Programming (3)" },
              { id: "security", label: "Cybersecurity (1)" },
              { id: "foundational", label: "Foundation Program (1)" },
              { id: "legal", label: "Legal Framework (1)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filterCategory === tab.id
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card-interactive p-6 rounded-2xl flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.1)] group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>

                <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                  {cert.title}
                </h3>

                <div className="space-y-1 text-xs font-mono text-slate-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{cert.issueDate}</span>
                  </div>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">
                  {cert.description}
                </p>

                {/* Skill Badges Preview */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {cert.skillsLearned.slice(0, 3).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-[10px] text-slate-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skillsLearned.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-[10px] text-cyan-400 font-mono">
                      +{cert.skillsLearned.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" /> View Certificate Preview
                </span>
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  Click to inspect
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
