"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Industries", href: "#industries" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Comparison", href: "#comparison" },
    { label: "Pricing / Demo", href: "#demo-form" },
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
          ? "bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl py-3.5"
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
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800/90 rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-[14px] font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 px-4 py-2 rounded-full transition-all duration-150"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="default"
            size="default"
            onClick={() => scrollTo("#demo-form")}
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-md shadow-indigo-500/25 flex items-center gap-1.5 px-5 py-2.5 rounded-xl"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left text-base font-semibold text-zinc-200 hover:text-white py-2.5 px-3 rounded-lg hover:bg-zinc-900"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-4 border-t border-zinc-800/80">
            <Button
              variant="default"
              size="default"
              onClick={() => scrollTo("#demo-form")}
              className="w-full justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-2"
            >
              Get a Quote & Book Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
