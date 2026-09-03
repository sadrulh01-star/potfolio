"use client";

import React, { useEffect } from "react";
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Cpu, 
  ExternalLink,
  Sparkles
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS, CERTIFICATES, ACHIEVEMENTS, EDUCATION_TIMELINE } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#090d24] border border-cyan-500/30 rounded-3xl flex flex-col shadow-[0_0_60px_rgba(0,240,255,0.25)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="px-6 py-4 bg-[#0c1230] border-b border-slate-800 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-white">
                Sadrul Haque — Official Curriculum Vitae
              </h3>
              <p className="text-[11px] font-mono text-cyan-400">
                Verified B.Tech CSE (AI & ML) | Lovely Professional University
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-slate-200">
          {/* Header & Bio */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-heading text-3xl font-extrabold text-white tracking-tight text-gradient-cyan-violet">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-medium text-cyan-300 mt-1">
                B.Tech Computer Science & Engineering (AI & ML Specialization)
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Lovely Professional University, Phagwara, Punjab | Current CGPA: 8.33
              </p>
            </div>

            {/* Quick Contact Box */}
            <div className="flex flex-col gap-1.5 text-xs font-mono text-slate-300 sm:text-right bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center sm:justify-end gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={PERSONAL_INFO.socials.email} className="hover:text-cyan-300">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href={PERSONAL_INFO.socials.phone} className="hover:text-cyan-300">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-2">
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                  linkedin.com/in/sadrulhaque
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-2">
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                  github.com/sadrulh01-star
                </a>
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Technical & Professional Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1">Languages:</span>
                <span className="text-slate-300">Python, JavaScript, C, C++</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1">Web & Frontend:</span>
                <span className="text-slate-300">HTML5, CSS3, Next.js, React, Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1">Databases & Tools:</span>
                <span className="text-slate-300">MySQL, MongoDB, Git, GitHub, Figma</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1">Management & Soft Skills:</span>
                <span className="text-slate-300">Problem Solving, Team Collaboration, Time Management, Adaptability, Project Planning</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Project Experience
            </h2>
            <div className="space-y-4">
              {/* Project 1 */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <div className="font-heading text-sm font-bold text-white flex items-center gap-2">
                    <span>Buzz Box-Auto — AI Automation & Web Solutions</span>
                    <a
                      href="https://buzzbox-auto.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-0.5 text-xs"
                    >
                      [Live <ExternalLink className="w-3 h-3" />]
                    </a>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Dec 2025 – Jan 2026</span>
                </div>
                <p className="text-xs text-slate-300 mb-2">
                  Co-founded and developed Buzz Box-Auto, a digital platform delivering AI-driven business automation and custom website solutions.
                </p>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                  <li>Engineered assignment workflow handling 30+ student submissions per course with file uploads and review tracking.</li>
                  <li>Designed and implemented client-focused digital tools to streamline operations and enhance online presence.</li>
                  <li>Led end-to-end project execution from concept to deployment, including UI/UX design and business strategy alignment.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <div className="font-heading text-sm font-bold text-white">
                    Laser-Based Human Detection and Alert System
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Feb 2026 – May 2026</span>
                </div>
                <p className="text-xs text-slate-300 mb-2">
                  Designed and implemented a laser-based optical sensing system for real-time unauthorized presence detection with automated alert mechanisms.
                </p>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                  <li>Applied embedded systems concepts, optical sensors, and microcontroller logic to build a reliable security device.</li>
                  <li>Conducted testing and optimization to ensure dependable performance across varying ambient conditions.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_TIMELINE.map((edu) => (
                <div key={edu.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">{edu.institution}</div>
                    <div className="text-slate-300">{edu.degree}</div>
                    {edu.specialization && (
                      <div className="text-cyan-400 font-mono text-[11px]">{edu.specialization}</div>
                    )}
                  </div>
                  <div className="text-right font-mono">
                    <div className="text-slate-400">{edu.timeline}</div>
                    <div className="font-bold text-emerald-400">{edu.scoreLabel}: {edu.scoreValue}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <Award className="w-4 h-4" /> Certifications (2025–2026)
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                <li>Programming Fundamentals using Python (Part 1 & 2) — Infosys Springboard</li>
                <li>Introduction to Python — Infosys Springboard</li>
                <li>Introduction to Cyber Security — Infosys Springboard</li>
                <li>Science Graduates Foundation Program — Infosys Springboard</li>
                <li>Indian Laws: Know Your Rights — Learning Foundation Online</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-violet-400 font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Achievements & Leadership
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                <li>Coordinated collegiate hackathon event (Operations & logistics)</li>
                <li>Collegiate debate competition participant (Public speaking)</li>
                <li>Youth Parliament event delegate (Civic leadership & policy)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-[#0c1230] border-t border-slate-800 flex items-center justify-between flex-shrink-0">
          <span className="text-xs font-mono text-slate-400">
            Open for AI, Automation & Project Management Roles
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              Close
            </button>
            <a
              href="mailto:sadrulh01@gmail.com?subject=Inquiry regarding Sadrul Haque Resume"
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact via Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
