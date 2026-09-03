"use client";

import React, { useState } from "react";
import { Radio, ShieldAlert, Cpu, BellRing, ArrowRight, ShieldCheck, Activity } from "lucide-react";

export default function LaserSimulation() {
  const [isInterrupted, setIsInterrupted] = useState(false);

  const steps = [
    {
      id: "transmitter",
      label: "Laser Transmitter",
      detail: "Continuous Optical Beam Emitter",
      icon: Radio,
      activeColor: "border-cyan-400 text-cyan-300 bg-cyan-950/40",
      status: "Emitting Beam",
    },
    {
      id: "zone",
      label: "Protected Zone",
      detail: "Monitored Security Perimeter",
      icon: ShieldCheck,
      activeColor: isInterrupted 
        ? "border-red-500 text-red-300 bg-red-950/40 shadow-[0_0_20px_rgba(239,68,68,0.3)]" 
        : "border-cyan-400 text-cyan-300 bg-cyan-950/40",
      status: isInterrupted ? "⚠️ Path Broken (Obstacle)" : "Secure Path",
    },
    {
      id: "receiver",
      label: "Sensor Receiver",
      detail: "Optical Signal Collector",
      icon: Activity,
      activeColor: isInterrupted 
        ? "border-amber-400 text-amber-300 bg-amber-950/40" 
        : "border-cyan-400 text-cyan-300 bg-cyan-950/40",
      status: isInterrupted ? "Signal Drop Detected" : "Signal Intact",
    },
    {
      id: "logic",
      label: "Detection Logic",
      detail: "Embedded Threshold Processing",
      icon: Cpu,
      activeColor: isInterrupted 
        ? "border-red-400 text-red-300 bg-red-950/40" 
        : "border-cyan-400 text-cyan-300 bg-cyan-950/40",
      status: isInterrupted ? "Trigger State: HIGH" : "Trigger State: LOW",
    },
    {
      id: "alert",
      label: "Alert Notification",
      detail: "Automated Incident Dispatch",
      icon: BellRing,
      activeColor: isInterrupted 
        ? "border-red-500 text-red-300 bg-red-950/60 shadow-[0_0_25px_rgba(239,68,68,0.4)] animate-pulse" 
        : "border-slate-700 text-slate-400 bg-slate-900/40",
      status: isInterrupted ? "🚨 SIREN & ALERT ACTIVE" : "Standby (Armed)",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#090e24] border border-cyan-500/20 p-5 sm:p-6 my-6">
      {/* Simulation Controls & Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Interactive System Flow Architecture
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-[11px] font-mono text-slate-400">Hardware & Logic Sequence</span>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-white mt-1">
            Laser Beam Propagation & Interruption Response
          </h4>
        </div>

        {/* Interactive Simulation Toggle */}
        <button
          onClick={() => setIsInterrupted(!isInterrupted)}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md ${
            isInterrupted
              ? "bg-red-500 text-white hover:bg-red-600 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
              : "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          }`}
        >
          {isInterrupted ? (
            <>
              <ShieldAlert className="w-4 h-4" />
              <span>Reset Laser Path</span>
            </>
          ) : (
            <>
              <Radio className="w-4 h-4 animate-pulse" />
              <span>Simulate Beam Interruption</span>
            </>
          )}
        </button>
      </div>

      {/* Interactive 5-Step Flow Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mt-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="relative flex flex-col">
              <div
                className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-full ${step.activeColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono opacity-70">STEP 0{idx + 1}</span>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="font-heading text-xs sm:text-sm font-bold leading-tight">
                    {step.label}
                  </div>
                  <div className="text-[11px] opacity-80 mt-1 leading-snug">
                    {step.detail}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/10 text-[10px] font-mono font-semibold">
                  {step.status}
                </div>
              </div>

              {/* Connecting Arrow for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Real-time System Message Banner */}
      <div
        className={`mt-4 px-4 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center justify-between ${
          isInterrupted
            ? "bg-red-950/60 border border-red-500/40 text-red-200"
            : "bg-slate-900/80 border border-slate-800 text-slate-400"
        }`}
      >
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              isInterrupted ? "bg-red-400 animate-ping" : "bg-emerald-400"
            }`}
          />
          <span>
            {isInterrupted
              ? "STATUS: Optical path interrupted. Alert circuit active. Signal logged."
              : "STATUS: Optical perimeter secure. Signal nominal."}
          </span>
        </div>
        <span className="text-[10px] text-slate-400 hidden sm:inline font-sans">
          Click button above to test trigger
        </span>
      </div>
    </div>
  );
}
