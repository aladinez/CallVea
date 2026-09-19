"use client";

import * as React from "react";
import { CheckCircle2, XCircle, Minus, Sparkles, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { COMPARISON_ROWS } from "@/lib/data";

export function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="indigo" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Competitive Advantage
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Callvea Compares to Legacy Alternatives
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Stop losing 80% of after-hours callers to voicemail hang-ups, and replace expensive $4,000/month human answering bureaus with instant AI intelligence.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-3xl border border-zinc-800/90 bg-zinc-900/60 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/80 text-xs uppercase font-mono tracking-wider">
                  <th className="py-5 px-6 text-zinc-400 font-semibold w-1/3">
                    Evaluation Metric
                  </th>
                  <th className="py-5 px-5 text-zinc-500 font-medium w-1/5">
                    Traditional Voicemail
                  </th>
                  <th className="py-5 px-5 text-zinc-400 font-medium w-1/5">
                    Legacy Human Answering
                  </th>
                  <th className="py-5 px-6 text-indigo-400 font-bold w-1/4 bg-indigo-950/30 border-l border-r border-indigo-500/20">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>Callvea Enterprise AI</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-zinc-800/30 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-zinc-200">
                      {row.feature}
                    </td>

                    {/* Voicemail */}
                    <td className="py-4 px-5 text-zinc-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500/70 shrink-0 mt-0.5" />
                        <span>{row.voicemail}</span>
                      </div>
                    </td>

                    {/* Legacy Answering */}
                    <td className="py-4 px-5 text-zinc-400">
                      <div className="flex items-start gap-2">
                        <Minus className="w-4 h-4 text-amber-500/70 shrink-0 mt-0.5" />
                        <span>{row.humanCenter}</span>
                      </div>
                    </td>

                    {/* Callvea */}
                    <td className="py-4 px-6 font-semibold text-white bg-indigo-950/20 border-l border-r border-indigo-500/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-zinc-100">{row.callvea}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
