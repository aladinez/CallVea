"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { FAQ_ITEMS } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <Badge variant="cyan" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Enterprise Due Diligence
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Everything your operations and security teams need to know about implementing Callvea.
          </p>
        </div>

        {/* Accordion List */}
        <div className="rounded-3xl border border-zinc-800/90 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-800/70 py-1">
                <AccordionTrigger className="text-sm sm:text-base font-semibold text-zinc-100 hover:text-indigo-400 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
