"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function HomePage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navbar with Sticky Glassmorphism */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section with 3D WebGL Neural Core */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* About Section & Quick Facts */}
      <AboutSection />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Projects Case Studies (Buzz Box-Auto & Laser Alert System) */}
      <ProjectsSection />

      {/* Certifications with Preview Modals */}
      <CertificationsSection />

      {/* Achievements & Leadership */}
      <AchievementsSection />

      {/* Education Timeline */}
      <EducationSection />

      {/* Contact Section with Interactive Form & Confetti */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
