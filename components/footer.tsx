"use client";

import * as React from "react";
import { ShieldCheck, Lock, Activity, ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
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
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-zinc-950 rounded-[7px] flex items-center justify-center">
                  <div className="flex items-center gap-0.5">
                    <span className="w-[2px] h-2.5 bg-indigo-400 rounded-full" />
                    <span className="w-[2px] h-4 bg-cyan-400 rounded-full" />
                    <span className="w-[2px] h-2 bg-indigo-300 rounded-full" />
                  </div>
                </div>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">Callvea</span>
            </div>
            
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
                  onClick={() => scrollTo("#simulator")}
                  className="hover:text-white transition-colors"
                >
                  Call Simulator
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
                  onClick={() => scrollTo("#pricing")}
                  className="hover:text-white transition-colors"
                >
                  ROI Calculator
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
                <span>HIPAA BAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Lock className="w-4 h-4 text-indigo-400" />
                <span>SOC-2 Type II Certified Datacenters</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>99.99% Guaranteed Telephony SLA</span>
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
            <a href="#privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-zinc-300 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
