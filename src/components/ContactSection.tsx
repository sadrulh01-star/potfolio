"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare,
  AlertCircle,
  Loader2
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject";
    if (!formData.message.trim()) newErrors.message = "Please write your message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00f0ff", "#3b82f6", "#8b5cf6"],
        });
      } catch (err) {
        // ignore if not supported
      }

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070a1a] border-t border-slate-800/60 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Let&apos;s Build <span className="text-gradient-cyan-violet">Something Meaningful</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            I am open to collaborating on AI, automation, web development, and project-based opportunities. Reach out via the form or through direct contact channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Direct Contact Channels
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Whether you have a project idea, a hackathon collaboration, or an engineering role in mind, feel free to connect directly.
              </p>

              {/* Email Pill */}
              <div className="glass-card p-4 rounded-2xl mb-3 flex items-center justify-between border border-cyan-500/20 group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-300 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Pill */}
              <div className="glass-card p-4 rounded-2xl mb-3 flex items-center justify-between border border-violet-500/20 group hover:border-violet-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Phone / Mobile</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-violet-300 transition-colors"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Pill */}
              <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Current Base</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            {/* Social Network Buttons */}
            <div className="pt-6 border-t border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Professional Networks
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-blue-600/20 text-slate-200 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl"
          >
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill in your details and message below. I will get back to you promptly.
            </p>

            {isSuccess && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-3 animate-in fade-in">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Message Sent Successfully!</div>
                  <div className="text-xs text-emerald-300/80">Thank you for reaching out. I will respond to your inquiry soon.</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none transition-colors ${
                      errors.name ? "border-red-500 focus:border-red-400" : "border-slate-800 focus:border-cyan-400"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none transition-colors ${
                      errors.email ? "border-red-500 focus:border-red-400" : "border-slate-800 focus:border-cyan-400"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Subject <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI Automation Collaboration / Project Inquiry"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none transition-colors ${
                    errors.subject ? "border-red-500 focus:border-red-400" : "border-slate-800 focus:border-cyan-400"
                  }`}
                />
                {errors.subject && (
                  <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Your Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, or collaboration ideas..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none transition-colors ${
                    errors.message ? "border-red-500 focus:border-red-400" : "border-slate-800 focus:border-cyan-400"
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Dispatching Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
