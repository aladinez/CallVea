"use client";

import * as React from "react";
import {
  ArrowRight,
  PhoneCall,
  CalendarCheck,
  CheckCircle2,
  Bot,
  User,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  Layers,
} from "lucide-react";
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
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-semibold text-cyan-400 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-cyan-400" /> Sub-500ms Turnaround
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-300">24/7 AI Receptionists</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Never Miss Another{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent">
                High-Value Call.
              </span>{" "}
              24/7 AI Voice & Chat Solutions for Your Business.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl">
              Callvea answers incoming calls, qualifies prospective clients, books appointments into your calendar, and routes urgent requests — 24/7 at an <strong className="text-zinc-200 font-semibold">80% lower cost</strong> than traditional call centers.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <Button
                size="lg"
                onClick={() => scrollTo("#demo-form")}
                className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 group px-6 text-sm sm:text-base font-semibold"
              >
                Get Custom Pricing
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollTo("#how-it-works")}
                className="border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                See How It Works
              </Button>
            </div>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 pt-4 text-xs text-zinc-400">
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
                <span>Live in 48 hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Call-Flow Visual Card (Caller -> AI Agent -> Calendar Booked) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Card top badge */}
              <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
                    Live Call Automation Flow
                  </span>
                </div>
                <Badge variant="cyan" className="text-[10px] font-mono">
                  340ms Latency
                </Badge>
              </div>

              {/* Step 1: Caller Ringing */}
              <div className="py-6 space-y-4">
                
                {/* 1. Inbound Caller Node */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-zinc-200">1. Inbound Customer Call</span>
                      <span className="text-[10px] text-zinc-500 font-mono">Ring 1</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 italic">
                      &ldquo;Hi, our air conditioning stopped working and we need an appointment today.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-2">
                  <div className="w-0.5 h-5 bg-gradient-to-b from-blue-500 to-indigo-500" />
                </div>

                {/* 2. Callvea AI Processing */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-indigo-300">2. Callvea AI Agent</span>
                      <span className="text-[10px] text-indigo-400 font-mono">Instant Response</span>
                    </div>
                    <p className="text-xs text-zinc-300 mt-1">
                      Identifies urgency, checks live technician availability, quotes pricing & confirms booking.
                    </p>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-2">
                  <div className="w-0.5 h-5 bg-gradient-to-b from-indigo-500 to-emerald-500" />
                </div>

                {/* 3. Booked on Calendar & CRM Sync */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <CalendarCheck className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-300">3. Synced to Calendar & CRM</span>
                      <span className="text-[10px] text-emerald-400 font-mono">Dispatched</span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">Jobber / ServiceTitan</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">SMS Sent</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom footer bar */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Outcome: 100% Automated</span>
                <span>Zero Human Delay</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
