"use client";

import * as React from "react";
import Image from "next/image";
import {
  Wrench,
  Scale,
  Stethoscope,
  Building2,
  LineChart,
  Car,
  Utensils,
  Sparkles,
  Briefcase,
  Truck,
  GraduationCap,
  HeartPulse,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { INDUSTRIES_DATA, IndustryItem } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Wrench,
  Scale,
  Stethoscope,
  Building2,
  LineChart,
  Car,
  Utensils,
  Sparkles,
  Briefcase,
  Truck,
  GraduationCap,
  HeartPulse,
};

function getTooltipPositionClasses(index: number) {
  const col2 = index % 2; // 0 = left, 1 = right (mobile)
  const col3 = index % 3; // 0 = left, 1 = mid, 2 = right (tablet)
  const col4 = index % 4; // 0 = left, 1 = mid-left, 2 = mid-right, 3 = right (desktop)

  let posClasses = "";

  // Mobile (2 cols)
  if (col2 === 0) {
    posClasses += "left-0 translate-x-0 ";
  } else {
    posClasses += "right-0 left-auto translate-x-0 ";
  }

  // Tablet sm: (3 cols)
  if (col3 === 0) {
    posClasses += "sm:left-0 sm:right-auto sm:translate-x-0 ";
  } else if (col3 === 1) {
    posClasses += "sm:left-1/2 sm:right-auto sm:-translate-x-1/2 ";
  } else {
    posClasses += "sm:left-auto sm:right-0 sm:translate-x-0 ";
  }

  // Desktop lg: (4 cols)
  if (col4 === 0) {
    posClasses += "lg:left-0 lg:right-auto lg:translate-x-0";
  } else if (col4 === 3) {
    posClasses += "lg:left-auto lg:right-0 lg:translate-x-0";
  } else {
    posClasses += "lg:left-1/2 lg:right-auto lg:-translate-x-1/2";
  }

  return posClasses;
}

export function Industries() {
  const scrollToQuote = (industryName: string) => {
    const element = document.querySelector("#demo-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      const select = document.querySelector('select[name="industry"]') as HTMLSelectElement;
      if (select) {
        const keyword = industryName.split(" ")[0];
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text.toLowerCase().includes(keyword.toLowerCase())) {
            select.selectedIndex = i;
            select.dispatchEvent(new Event("change", { bubbles: true }));
            break;
          }
        }
      }
    }
  };

  return (
    <section id="industries" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-600/10 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Bespoke Industry Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trained on the Exact Nuances of Your Industry
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Every trade has unique emergencies, terminology, and scheduling rules. Hover over any industry to view its dedicated 24/7 AI capabilities.
          </p>
        </div>

        {/* 12 Industries Grid - Pure Images & Industry Names with Floating Tooltips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {INDUSTRIES_DATA.map((ind: IndustryItem, index: number) => {
            const IconComponent = ICON_MAP[ind.iconName] || Wrench;
            const posClasses = getTooltipPositionClasses(index);

            return (
              <div
                key={ind.id}
                className="group relative z-10 hover:z-40 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700/90 hover:bg-zinc-900/80 p-3 text-left transition-all duration-200 flex flex-col items-center justify-start cursor-pointer shadow-lg hover:shadow-cyan-950/20"
                onClick={() => scrollToQuote(ind.name)}
              >
                {/* Pure Photo - No Badges or overlays */}
                <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/60 shadow-inner">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* ONLY the industry name under each image */}
                <div className="pt-3 pb-1 w-full text-center">
                  <h3 className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors line-clamp-2">
                    {ind.name}
                  </h3>
                </div>

                {/* Floating Creative Tooltip on Hover */}
                <div
                  className={`absolute bottom-[calc(100%+14px)] z-50 w-[290px] sm:w-[330px] max-w-[calc(100vw-32px)] pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-out ${posClasses}`}
                >
                  <div className="rounded-2xl border border-zinc-700/90 bg-zinc-900/98 p-4 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
                    {/* Top accent glow line */}
                    <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${ind.accent.glow}`} />

                    {/* Header: Icon + Title */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center border shadow-sm ${ind.accent.bg} ${ind.accent.border} ${ind.accent.color}`}
                        >
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-white tracking-tight">
                          {ind.name}
                        </span>
                      </div>
                    </div>

                    {/* Specialization Badge */}
                    <div className="mb-2.5">
                      <span
                        className={`inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border ${ind.accent.tag}`}
                      >
                        {ind.badge}
                      </span>
                    </div>

                    {/* Description - Clear, visible font size */}
                    <p className="text-xs sm:text-[13px] text-zinc-200 font-normal leading-relaxed mb-3">
                      {ind.shortDescription}
                    </p>

                    {/* Verified Benchmark Stat */}
                    <div className="pt-2.5 border-t border-zinc-800 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-xs font-mono font-semibold text-emerald-400">
                          {ind.stat}
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono">24/7 AI</span>
                    </div>
                  </div>
                </div>

                {/* Downward Pointer Beak / Arrow */}
                <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-zinc-900 border-r border-b border-zinc-700/90 rotate-45 z-50 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-out shadow-sm" />

              </div>
            );
          })}
        </div>

        {/* Bottom CTA Helper */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-400 font-mono">
            Don&apos;t see your exact trade? Callvea trains custom knowledge models for any phone-reliant business.
          </p>
          <div className="mt-6">
            <Button
              size="lg"
              onClick={() => {
                const element = document.querySelector("#demo-form");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-indigo-500/20 px-8 py-3 rounded-xl inline-flex items-center gap-2"
            >
              <span>Request Custom Industry Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
