"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, PhoneForwarded, BrainCircuit, ShieldAlert, Rocket, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WORKFLOW_STEPS, INTEGRATIONS_LIST } from "@/lib/data";

export function Workflow() {
  const stepIcons = [
    <PhoneForwarded key="1" className="w-5 h-5" />,
    <BrainCircuit key="2" className="w-5 h-5" />,
    <ShieldAlert key="3" className="w-5 h-5" />,
    <Rocket key="4" className="w-5 h-5" />,
  ];

  return (
    <section id="how-it-works" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-72 bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="indigo" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Onboarding Velocity
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Live in 48 Hours. Zero Telephony Headaches.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            You don&apos;t need to change carriers or purchase expensive PBX hardware. We configure Callvea as an intelligent forwarding target in 4 simple steps.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {WORKFLOW_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 backdrop-blur-md hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-zinc-700 font-mono group-hover:text-indigo-400 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    {stepIcons[index]}
                  </div>
                </div>

                <div className="mb-2">
                  <Badge variant="secondary" className="text-[10px] uppercase font-mono mb-2">
                    {item.badge}
                  </Badge>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-1 text-[11px] text-zinc-500 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Deployment Check</span>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Infinite Integration Marquee */}
        <div className="pt-10 border-t border-zinc-900">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 font-semibold">
              Deep Two-Way Native Integrations & Telephony Backbones
            </span>
          </div>

          {/* Marquee Wrapper */}
          <div className="relative w-full overflow-hidden mask-fade">
            {/* Left and right gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 animate-marquee whitespace-nowrap py-2">
              {/* First loop */}
              {INTEGRATIONS_LIST.map((tool, i) => (
                <div
                  key={`marq1-${i}`}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 text-zinc-300 backdrop-blur-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-sm font-semibold text-zinc-100">{tool.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                    {tool.category}
                  </span>
                </div>
              ))}
              {/* Repeated loop for seamless continuous scrolling */}
              {INTEGRATIONS_LIST.map((tool, i) => (
                <div
                  key={`marq2-${i}`}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 text-zinc-300 backdrop-blur-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-sm font-semibold text-zinc-100">{tool.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                    {tool.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
