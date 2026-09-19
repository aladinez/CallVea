"use client";

import * as React from "react";
import { PhoneCall, CalendarCheck, Filter, MessageSquare, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Solutions() {
  const solutions = [
    {
      title: "24/7 Receptionist",
      tagline: "Instant call answering day and night",
      description:
        "Eliminate hold times and missed opportunities. Callvea answers immediately on the first ring, handling routine inquiries, business hours, directions, and emergency calls with natural human cadence.",
      icon: PhoneCall,
      badge: "Inbound Voice",
      benefits: [
        "Zero busy signals and zero hold times",
        "Handles unlimited simultaneous calls",
        "Trained on your business knowledge and FAQs",
      ],
    },
    {
      title: "Automated Scheduling",
      tagline: "Direct calendar & CRM booking",
      description:
        "Say goodbye to endless phone tag. Your AI agent checks your real-time availability, verifies scheduling rules, locks in appointments, and sends calendar invites and SMS confirmations.",
      icon: CalendarCheck,
      badge: "Scheduling",
      benefits: [
        "Two-way sync with Google Calendar, Outlook, and CRMs",
        "Automatic travel buffers and conflict prevention",
        "Instant booking reminders reducing no-shows",
      ],
    },
    {
      title: "Lead Qualification",
      tagline: "Identify, score, and route high-value leads",
      description:
        "Ask customizable screening questions to qualify caller intent, service scope, and budget. High-priority callers are instantly escalated or transferred to your team with a complete summary.",
      icon: Filter,
      badge: "Lead Triage",
      benefits: [
        "Filters out unwanted spam and sales robocalls",
        "Captures caller contact details and service requirements",
        "Real-time SMS and email alerts for high-value prospects",
      ],
    },
    {
      title: "Omnichannel Chatbots",
      tagline: "Voice, web chat, and messaging in one place",
      description:
        "Provide a unified customer experience across phone lines, website chat, and SMS. Conversations retain context so clients never have to repeat themselves.",
      icon: MessageSquare,
      badge: "Omnichannel",
      benefits: [
        "Embeddable high-converting website chat widget",
        "SMS follow-up after calls with booking links",
        "Centralized lead capture across all channels",
      ],
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="indigo" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Core Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Automate Inbound Communications
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Purpose-built conversational AI that captures revenue, streamlines front-office operations, and delights your customers.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-8 backdrop-blur-md hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="font-mono text-[11px]">
                      {item.badge}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1.5">{item.title}</h3>
                  <div className="text-xs font-mono text-cyan-400 mb-4">{item.tagline}</div>
                  
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-zinc-800/80">
                  {item.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
