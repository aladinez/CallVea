"use client";

import * as React from "react";
import { CheckCircle2, PhoneForwarded, BrainCircuit, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WORKFLOW_STEPS, INTEGRATIONS_LIST } from "@/lib/data";

export function HowItWorks() {
  const icons = [
    <PhoneForwarded key="1" className="w-5 h-5 text-indigo-400" />,
    <BrainCircuit key="2" className="w-5 h-5 text-cyan-400" />,
    <Rocket key="3" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="how-it-works" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-72 bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="indigo" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Simple 3-Step Setup
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Callvea Works
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Seamlessly plug conversational AI into your business without changing carriers, phone systems, or workflows.
          </p>
        </div>

        {/* 3 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {WORKFLOW_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-8 backdrop-blur-md hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-zinc-800 font-mono group-hover:text-indigo-400/60 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center">
                    {icons[index]}
                  </div>
                </div>

                <Badge variant="secondary" className="text-[10px] uppercase font-mono mb-3">
                  {item.badge}
                </Badge>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero downtime guarantee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Integration Marquee */}
        <div className="pt-8 border-t border-zinc-900">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 font-semibold">
              Connects seamlessly with your favorite business software
            </span>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 animate-marquee whitespace-nowrap py-2">
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
