"use client";

import * as React from "react";
import {
  PhoneCall,
  CalendarCheck2,
  Filter,
  MessageSquareText,
  UserCheck,
  Zap,
  ArrowRight,
  Shield,
  CheckCircle,
  Sparkles,
  Clock,
  Flame,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background glow */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="indigo" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Enterprise Architecture
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Complete Inbound Voice & Conversational Intelligence
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Engineered from the ground up for service businesses, law firms, and multi-location clinics. Replace rigid interactive voice response (IVR) phone trees with fluid, human-level reasoning.
          </p>
        </div>

        {/* Bento Grid Layout (HeyRosie Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: 24/7 Inbound Receptionist (Span 7) */}
          <div className="md:col-span-7 rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-8 backdrop-blur-md relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <PhoneCall className="w-6 h-6" />
              </div>
              <Badge variant="indigo" className="text-[11px] font-mono">
                Sub-500ms Turnaround
              </Badge>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              24/7 Inbound Call Receptionist
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
              Never send another lucrative caller to voicemail. Callvea answers on the first ring with zero robotic stutter, answers specific business questions, handles after-hours emergencies, and manages infinite concurrent calls during traffic spikes.
            </p>

            {/* Micro visual HUD */}
            <div className="bg-zinc-950/80 rounded-2xl p-4 border border-zinc-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Concurrent Call Load: 18 / ∞ Available
                </span>
                <span className="text-emerald-400 font-semibold font-mono">0.00% Drop Rate</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-zinc-900/70 border border-zinc-800">
                  <div className="text-[10px] text-zinc-500 uppercase">First Ring</div>
                  <div className="font-bold text-zinc-100 font-mono">100% Pickup</div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/70 border border-zinc-800">
                  <div className="text-[10px] text-zinc-500 uppercase">After Hours</div>
                  <div className="font-bold text-indigo-400 font-mono">24/7/365</div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/70 border border-zinc-800">
                  <div className="text-[10px] text-zinc-500 uppercase">Latency</div>
                  <div className="font-bold text-cyan-400 font-mono">340ms avg</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Intelligent Appointment Engine (Span 5) */}
          <div className="md:col-span-5 rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-8 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <CalendarCheck2 className="w-6 h-6" />
                </div>
                <Badge variant="cyan" className="text-[11px] font-mono">
                  2-Way Sync
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Intelligent Appointment Engine
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                Direct two-way calendar sync with Google Calendar, Outlook, ServiceTitan, Jobber, and Clio. Callvea queries technician availability, factors drive-time buffers, and locks the booking instantly.
              </p>
            </div>

            {/* Interactive Schedule Slot Preview */}
            <div className="bg-zinc-950/80 rounded-2xl p-4 border border-zinc-800/80 space-y-2 text-xs">
              <div className="flex items-center justify-between text-zinc-400 font-mono text-[11px]">
                <span>ServiceTitan Calendar API</span>
                <span className="text-emerald-400">Live Slots Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono text-xs font-semibold">
                  Tomorrow 9:30 AM
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-zinc-800/80 text-zinc-400 font-mono text-xs">
                  Tomorrow 2:00 PM
                </span>
                <span className="px-2 py-1 text-[10px] text-zinc-500 font-mono">
                  +4 more
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Lead Triage & Qualification (Span 4) */}
          <div className="md:col-span-4 rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-8 backdrop-blur-md relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
                <Filter className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Lead Triage & Qualification
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Ask targeted discovery questions, score caller budget & intent, weed out spam solicitations, and immediately notify your sales reps with caller details.
              </p>
            </div>

            <div className="bg-zinc-950/80 rounded-2xl p-3.5 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono">Lead Score</span>
                <span className="text-emerald-400 font-bold font-mono">96/100 (Tier 1 ICP)</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[96%]" />
              </div>
              <div className="text-[11px] text-zinc-400 pt-1 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Immediate SMS alert dispatched to Account Exec</span>
              </div>
            </div>
          </div>

          {/* Card 4: Omnichannel Chatbot Fallback (Span 4) */}
          <div className="md:col-span-4 rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-8 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <MessageSquareText className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Omnichannel AI Fallback
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Combine high-fidelity voice with website chatbots and WhatsApp. Callers can switch channels mid-journey without repeating their context or re-entering data.
              </p>
            </div>

            <div className="bg-zinc-950/80 rounded-2xl p-3.5 border border-zinc-800/80 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <div className="text-zinc-200 font-medium">Synced Channels</div>
                <div className="text-zinc-500 text-[11px] font-mono">Voice • Web • WhatsApp</div>
              </div>
              <Badge variant="cyan" className="text-[10px]">
                Unified Memory
              </Badge>
            </div>
          </div>

          {/* Card 5: Smart Escalation & Warm Human Transfer (Span 4) */}
          <div className="md:col-span-4 rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-8 backdrop-blur-md relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <UserCheck className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Smart Human Warm-Transfer
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                When critical severity thresholds are met or a caller requests an attorney or doctor, Callvea seamlessly patches to on-call staff with an instant whisper briefing.
              </p>
            </div>

            <div className="bg-zinc-950/80 rounded-2xl p-3.5 border border-zinc-800/80 space-y-1 text-xs">
              <div className="text-emerald-400 font-mono font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                Whisper Briefing Enabled
              </div>
              <div className="text-zinc-400 text-[11px] font-mono">
                Staff member briefed in 4s before audio patch
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
