"use client";

import React, { useEffect } from "react";
import { X, Award, CheckCircle2, ExternalLink, Calendar, ShieldCheck, Sparkles, Building } from "lucide-react";
import { CertificateItem } from "@/types";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#090e24] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Top Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Certificate of Completion</span>
            </div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white mt-1">
              {certificate.title}
            </h3>
          </div>
        </div>

        {/* Certificate Display Board */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0e163b] to-[#0a102b] border border-cyan-500/20 relative overflow-hidden my-4">
          {/* Subtle watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] font-heading font-extrabold text-cyan-400/[0.03] select-none pointer-events-none">
            INFOSYS
          </div>

          <div className="text-center mb-6">
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-cyan-400">
              Course Completion Certificate
            </span>
            <div className="text-xs text-slate-400 mt-1">Awarded to</div>
            <div className="font-heading text-2xl font-extrabold text-white mt-0.5 text-gradient-cyan-violet">
              {PERSONAL_INFO.name}
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <p className="text-slate-300 text-center leading-relaxed">
              {certificate.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-700/60">
              <div className="flex items-center gap-2 text-slate-300">
                <Building className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono">Issuer: {certificate.issuer}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-mono">Issued: {certificate.issueDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Competencies Covered */}
        <div className="mt-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Skills & Competencies Validated
          </h4>
          <div className="flex flex-wrap gap-2">
            {certificate.skillsLearned.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Verification Link Action */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {certificate.verifyUrl ? (
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(0,240,255,0.25)]"
            >
              <span>Verify on Wingspan Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Certificate from Learning Foundation Online</span>
            </div>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
