"use client";

import * as React from "react";
import { useState } from "react";
import {
  Wrench,
  Scale,
  Stethoscope,
  Building,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { INDUSTRIES_DATA } from "@/lib/data";

export function Industries() {
  const [activeTab, setActiveTab] = useState<string>("trades");

  const current = INDUSTRIES_DATA.find((item) => item.id === activeTab) || INDUSTRIES_DATA[0];

  const iconsMap: Record<string, React.ReactNode> = {
    trades: <Wrench className="w-4 h-4" />,
    legal: <Scale className="w-4 h-4" />,
    healthcare: <Stethoscope className="w-4 h-4" />,
    realestate: <Building className="w-4 h-4" />,
  };

  return (
    <section id="industries" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Glow background */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-14">
          <Badge variant="cyan" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Industry Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trained on the Exact Nuances of Your Industry
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            No generic prompts. Callvea deploys bespoke conversational models fine-tuned on trade terminology, legal confidentiality, and clinical triage rules.
          </p>
        </div>

        {/* Tab Selector Pills */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-2xl gap-1">
            {INDUSTRIES_DATA.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === ind.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
              >
                {iconsMap[ind.id]}
                <span>{ind.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Industry Active Card */}
        <div className="rounded-3xl border border-zinc-800/90 bg-zinc-900/60 p-8 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                  {current.subhead}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {current.name}
                </h3>
              </div>

              {/* The Costly Bottleneck vs Callvea Fix */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 text-xs sm:text-sm">
                  <div className="font-semibold text-rose-400 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
                    The Costly Bottleneck
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{current.painPoint}</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-xs sm:text-sm">
                  <div className="font-semibold text-emerald-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    The Callvea AI Solution
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{current.callveaSolution}</p>
                </div>
              </div>

              {/* Native Integrations Pill List */}
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono mb-2">
                  Pre-Configured Integrations
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.integrations.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-xs font-medium text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content: Dialogue Preview & ROI KPI (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Measurable ROI Stat Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-zinc-900 to-zinc-950 border border-indigo-500/30">
                <div className="flex items-center justify-between text-xs text-indigo-300 mb-2">
                  <span className="uppercase font-mono font-medium flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                    Verified Benchmark
                  </span>
                  <span className="text-[10px] bg-indigo-500/20 px-2 py-0.5 rounded text-indigo-300">
                    Client Average
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1 font-mono">
                  {current.roiStat}
                </div>
                <div className="text-sm text-zinc-400 font-medium">
                  {current.roiLabel}
                </div>
              </div>

              {/* Sample Dialogue Box */}
              <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>Conversational Inbound Script</span>
                  <span className="text-cyan-400">Deterministic Guardrails</span>
                </div>

                {/* Caller bubble */}
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <span className="text-[10px] font-mono text-zinc-500 block mb-1 uppercase">Customer Inquiry</span>
                  &ldquo;{current.sampleDialogue.caller}&rdquo;
                </div>

                {/* AI bubble */}
                <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-xs text-zinc-200">
                  <span className="text-[10px] font-mono text-cyan-400 block mb-1 uppercase">Callvea AI Autonomous Response</span>
                  &ldquo;{current.sampleDialogue.ai}&rdquo;
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
