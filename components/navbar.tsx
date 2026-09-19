"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Simulator", href: "#simulator" },
    { label: "Industries", href: "#industries" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Comparison", href: "#comparison" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
            <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
              {/* Voice / Telephony Neural Mark */}
              <div className="flex items-center gap-[2.5px]">
                <span className="w-[3px] h-3 bg-indigo-400 rounded-full animate-pulse" />
                <span className="w-[3px] h-5 bg-cyan-400 rounded-full animate-pulse [animation-delay:150ms]" />
                <span className="w-[3px] h-3.5 bg-indigo-300 rounded-full animate-pulse [animation-delay:300ms]" />
                <span className="w-[3px] h-2 bg-indigo-500 rounded-full animate-pulse [animation-delay:450ms]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-zinc-100">
                Callvea
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                AI
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 px-3.5 py-1.5 rounded-full transition-all duration-150"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollTo("#simulator")}
            className="text-zinc-300 hover:text-white flex items-center gap-1.5 text-xs font-medium border border-zinc-800/60 bg-zinc-900/40 hover:bg-zinc-800"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            View Call Simulator
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={() => scrollTo("#pricing")}
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-medium text-xs shadow-md shadow-indigo-500/25 flex items-center gap-1.5"
          >
            Get Custom Pricing
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/60 border border-zinc-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left text-sm font-medium text-zinc-300 hover:text-white py-2 px-3 rounded-lg hover:bg-zinc-900"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-2.5">
            <Button
              variant="outline"
              size="default"
              onClick={() => scrollTo("#simulator")}
              className="w-full justify-center flex items-center gap-2"
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              View Call Simulator
            </Button>
            <Button
              variant="default"
              size="default"
              onClick={() => scrollTo("#pricing")}
              className="w-full justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-2"
            >
              Get Custom Pricing
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
