"use client";

import * as React from "react";
import { ArrowRight, PhoneIncoming, Zap, CheckCircle2, ShieldCheck, Clock, Server, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-zinc-950">
      {/* Ambient background glow & radial gradient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-[10%] w-[350px] h-[350px] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Latency & Enterprise Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-semibold text-cyan-400 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-cyan-400" /> Sub-500ms Turnaround
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-300">Enterprise Conversational Agents</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Never Miss Another{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent">
                High-Value Call.
              </span>{" "}
              24/7 AI Receptionists Built for Your Business.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal">
              Callvea picks up on the first ring, answers customer inquiries, qualifies high-intent leads, and syncs directly into your CRM — at an <strong className="text-zinc-200 font-semibold">80% lower cost</strong> than traditional call centers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <Button
                size="lg"
                onClick={() => scrollTo("#pricing")}
                className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 group px-6 text-sm sm:text-base font-semibold"
              >
                Calculate Custom Pricing
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollTo("#simulator")}
                className="border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <PhoneIncoming className="w-4 h-4 text-cyan-400" />
                See Live Call Flow
              </Button>
            </div>

            {/* Trust Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-4 pt-4 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero busy signals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Keep your phone number</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>48-hour deployment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>HIPAA & SOC-2 ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Server className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Native 2-way CRM sync</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>340ms avg latency</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Live Telephony HUD */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing frame */}
            <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/90 p-5 backdrop-blur-xl shadow-2xl shadow-indigo-950/40">
              
              {/* Header Telephony Status Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <div className="text-xs font-semibold text-zinc-200">INBOUND SIP TRUNK #104</div>
                    <div className="text-[10px] text-zinc-500 font-mono">STATUS: ACTIVE IN-CALL</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800/90 border border-zinc-700/60 text-[11px] font-mono text-cyan-400">
                  <Zap className="w-3 h-3" />
                  <span>348ms latency</span>
                </div>
              </div>

              {/* Caller Identification */}
              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">
                      MV
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-zinc-100">Marcus Vance</div>
                      <div className="text-xs text-zinc-400">+1 (415) 890-2412 • San Francisco, CA</div>
                    </div>
                  </div>
                  <Badge variant="rose" className="text-[10px] py-0.5">
                    Critical Emergency
                  </Badge>
                </div>

                {/* Real-time Voice Stream Visualizer (Purely visual SVG) */}
                <div className="bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800/70 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1 font-mono">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      Live Audio Stream
                    </span>
                    <span className="font-mono text-indigo-300">Natural Voice Synthesis</span>
                  </div>

                  {/* Animated Waveform Visualizer Bars */}
                  <div className="flex items-center justify-center gap-1 h-10 px-2">
                    {[40, 65, 85, 45, 95, 70, 30, 80, 100, 50, 75, 90, 60, 45, 70, 85, 60, 40, 90, 55, 35].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-gradient-to-t from-indigo-500 to-cyan-400 rounded-full transition-all duration-300"
                        style={{
                          height: `${h}%`,
                          animation: `pulseGlow ${1.2 + (i % 5) * 0.2}s ease-in-out infinite`,
                          animationDelay: `${i * 70}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Live Dialog Snippet */}
                <div className="space-y-2 text-xs">
                  <div className="bg-zinc-800/50 p-2.5 rounded-lg border border-zinc-700/40 text-zinc-300">
                    <span className="text-[10px] uppercase font-mono font-semibold text-zinc-500 block mb-0.5">Caller (00:08)</span>
                    &ldquo;My basement is flooding right now from the main water valve!&rdquo;
                  </div>
                  <div className="bg-indigo-950/30 p-2.5 rounded-lg border border-indigo-500/30 text-zinc-200">
                    <span className="text-[10px] uppercase font-mono font-semibold text-cyan-400 block mb-0.5">Callvea AI (00:13)</span>
                    &ldquo;Please turn the yellow main shutoff lever perpendicular immediately. I am dispatching technician Dave right now.&rdquo;
                  </div>
                </div>

                {/* Instant Action Dispatch Notification */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/40 to-zinc-900 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-emerald-300">Synced to Jobber CRM</div>
                      <div className="text-[10px] text-zinc-400">Emergency Dispatch #JOB-89412 Dispatched</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                    AUTO-ACTION
                  </span>
                </div>

              </div>

              {/* Bottom HUD bar */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>RAG Guardrail: 100% Deterministic</span>
                <span>Clio / Jobber / HubSpot</span>
              </div>
            </div>

            {/* Decorative back-floating badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-zinc-900/90 border border-zinc-800 p-3 rounded-xl shadow-xl backdrop-blur-md items-center gap-3 z-20">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-zinc-100">Zero Hallucinations</div>
                <div className="text-[10px] text-zinc-400">Strict enterprise boundary logic</div>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 md:mt-16">
          <button
            onClick={() => scrollTo("#simulator")}
            className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors group"
          >
            <span className="text-[11px] font-medium tracking-wide uppercase">Experience Live Call HUD</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-indigo-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
