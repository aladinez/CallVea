"use client";

import * as React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-zinc-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-300 shadow-sm backdrop-blur-md">
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

          {/* Big Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.06]">
            Never Miss a Call.{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent block mt-2">
              Never Miss a Customer.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl font-normal">
            Your AI Receptionist answers, assists, and books appointments 24/7 — even while you sleep or enjoy your vacation.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
            <Button
              size="lg"
              onClick={() => scrollTo("#demo-form")}
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 group px-8 py-6 text-base font-semibold rounded-xl"
            >
              <span>Get Custom Pricing</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollTo("#how-it-works")}
              className="w-full sm:w-auto border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 flex items-center justify-center gap-2 px-8 py-6 text-base rounded-xl"
            >
              See How It Works
            </Button>
          </div>

          {/* Key Value Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero busy signals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Keep your phone number</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Live in 48 hours</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
