"use client";

import * as React from "react";
import { ArrowRight, PhoneCall, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CTABanner() {
  const scrollToPricing = () => {
    const el = document.querySelector("#pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSimulator = () => {
    const el = document.querySelector("#simulator");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/40 via-zinc-900 to-zinc-950 p-8 sm:p-14 backdrop-blur-2xl shadow-2xl overflow-hidden text-center flex flex-col items-center">
          
          {/* Glowing orb in center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 blur-[120px] pointer-events-none rounded-full" />

          <Badge variant="indigo" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold mb-6">
            Ready For 24/7 Voice Intelligence?
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mb-6">
            Never Let Another Inbound Lead Slip Away To Your Competitor.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mb-8 leading-relaxed">
            Deploy your custom AI receptionist in 48 hours. Keep your existing phone line, integrate your CRM, and achieve sub-500ms turn-taking latency.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              onClick={scrollToPricing}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base px-8 shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2"
            >
              Get Custom Pricing & Plan
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToSimulator}
              className="w-full sm:w-auto border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 text-sm sm:text-base px-6 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              Re-inspect Live Call HUD
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-zinc-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>&lt; 500ms Turnaround</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>Zero-Hallucination Guardrails</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>14-Day Pilot Sandbox</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
