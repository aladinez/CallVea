"use client";

import * as React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Activity, ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = "/" + id;
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-850">
          
          {/* Company Brand Column (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <div className="flex items-center gap-[2.5px]">
                    <span className="w-[3px] h-3 bg-indigo-400 rounded-full" />
                    <span className="w-[3px] h-5 bg-cyan-400 rounded-full" />
                    <span className="w-[3px] h-3.5 bg-indigo-300 rounded-full" />
                    <span className="w-[3px] h-2 bg-indigo-500 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight text-white group-hover:text-zinc-100">
                  Callvea
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  AI
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Autonomous enterprise voice agents, conversational receptionists, and multi-channel booking automation with sub-500ms latency and zero hallucinations.
            </p>

            {/* Live System Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-200 font-medium">All Systems Operational</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400 font-mono">P99 Latency: 362ms</span>
            </div>
          </div>

          {/* Navigation Links (2 Cols) */}
          <div className="md:col-span-2 space-y-3 text-sm">
            <div className="font-semibold text-zinc-200 uppercase tracking-wider text-xs font-mono">
              Product
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo("#solutions")}
                  className="hover:text-white transition-colors"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#industries")}
                  className="hover:text-white transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#how-it-works")}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#comparison")}
                  className="hover:text-white transition-colors"
                >
                  Comparison
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#demo-form")}
                  className="hover:text-white transition-colors"
                >
                  Book a Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#faq")}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Industries (2 Cols) */}
          <div className="md:col-span-2 space-y-3 text-sm">
            <div className="font-semibold text-zinc-200 uppercase tracking-wider text-xs font-mono">
              Industries
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo("#industries")}
                  className="hover:text-white transition-colors"
                >
                  Trades & HVAC
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#industries")}
                  className="hover:text-white transition-colors"
                >
                  Legal Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#industries")}
                  className="hover:text-white transition-colors"
                >
                  Healthcare & Dental
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#industries")}
                  className="hover:text-white transition-colors"
                >
                  Property Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#demo-form")}
                  className="hover:text-white transition-colors"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Security (3 Cols) */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <div className="font-semibold text-zinc-200 uppercase tracking-wider text-xs font-mono">
              Enterprise Trust
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Callvea adheres to strict industry compliance and data isolation standards.
            </p>
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>End-to-End Encrypted</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Lock className="w-4 h-4 text-indigo-400" />
                <span>SOC-2 Type II Certified Datacenters</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Carrier-Grade High Availability</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Callvea Inc. (callvea.com). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
