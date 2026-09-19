"use client";

import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Calculator,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingDown,
  Clock,
  Sparkles,
  ShieldCheck,
  Building,
  Phone,
  Calendar,
  Mail,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { fullQuoteSchema, QuoteFormData } from "@/lib/validations";

export function PricingCalculator() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(fullQuoteSchema),
    defaultValues: {
      companyName: "",
      website: "",
      industry: "trades",
      callVolume: "200 - 1,000",
      channels: ["inbound_voice"],
      crm: "jobber",
      primaryGoal: "after_hours",
      fullName: "",
      workEmail: "",
      phone: "",
      notes: "",
    },
    mode: "onChange",
  });

  const watchedVolume = watch("callVolume");
  const watchedChannels = watch("channels") || [];
  const watchedIndustry = watch("industry");

  // Dynamic ROI calculation based on volume
  const calculateROI = (vol: string) => {
    switch (vol) {
      case "< 200":
        return {
          hoursSaved: 48,
          annualSavings: 28800,
          tier: "Starter Voice",
          tierBadge: "Boutique",
          costEstimate: "$490 / mo",
          humanCostEq: "$2,800 / mo",
        };
      case "200 - 1,000":
        return {
          hoursSaved: 160,
          annualSavings: 54200,
          tier: "Growth Pro",
          tierBadge: "Most Popular",
          costEstimate: "$1,190 / mo",
          humanCostEq: "$5,500 / mo",
        };
      case "1,000 - 5,000":
        return {
          hoursSaved: 420,
          annualSavings: 96000,
          tier: "Scale Enterprise",
          tierBadge: "High Volume",
          costEstimate: "$2,890 / mo",
          humanCostEq: "$11,000 / mo",
        };
      case "5,000+":
        return {
          hoursSaved: 1100,
          annualSavings: 185000,
          tier: "Custom Carrier Tier",
          tierBadge: "Dedicated Cluster",
          costEstimate: "Custom Bespoke SLA",
          humanCostEq: "$25,000+ / mo",
        };
      default:
        return {
          hoursSaved: 160,
          annualSavings: 54200,
          tier: "Growth Pro",
          tierBadge: "Most Popular",
          costEstimate: "$1,190 / mo",
          humanCostEq: "$5,500 / mo",
        };
    }
  };

  const roi = calculateROI(watchedVolume);

  const toggleChannel = (channel: string) => {
    const current = watchedChannels || [];
    if (current.includes(channel)) {
      if (current.length > 1) {
        setValue(
          "channels",
          current.filter((c) => c !== channel),
          { shouldValidate: true }
        );
      }
    } else {
      setValue("channels", [...current, channel], { shouldValidate: true });
    }
  };

  const handleNext = async () => {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ["companyName", "website", "industry"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["callVolume", "channels"];
    } else if (currentStep === 3) {
      fieldsToValidate = ["crm", "primaryGoal"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(4, prev + 1));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const onSubmit = (data: QuoteFormData) => {
    setSubmittedData(data);
    setIsSubmitted(true);
  };

  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-14">
          <Badge variant="indigo" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Interactive Cost & ROI Calculator
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tailored Enterprise Quote in 60 Seconds
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Tell us about your call volume and tech stack. We calculate your exact estimated hours saved and deploy a customized proposal.
          </p>
        </div>

        {/* Wizard Layout: Left Step Form (7 Cols) + Right Real-Time ROI Panel (5 Cols) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Multi-Step Form Wizard */}
          <div className="lg:col-span-7 rounded-3xl border border-zinc-800/90 bg-zinc-900/70 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            
            {/* Step Stepper Indicator */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800/80">
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4].map((stepNum) => (
                  <div key={stepNum} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        currentStep === stepNum
                          ? "bg-indigo-600 text-white ring-4 ring-indigo-500/20"
                          : currentStep > stepNum
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-zinc-800 text-zinc-500 border border-zinc-700"
                      }`}
                    >
                      {currentStep > stepNum ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        stepNum
                      )}
                    </div>
                    {stepNum < 4 && (
                      <span className="w-6 sm:w-10 h-[2px] bg-zinc-800 hidden sm:inline-block" />
                    )}
                  </div>
                ))}
              </div>

              <span className="text-xs font-mono text-zinc-400">
                Step {currentStep} of 4
              </span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* STEP 1: Business Profile */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-in fade-in-50 duration-200">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Step 1: Your Business Profile
                    </h3>
                    <p className="text-xs text-zinc-400">
                      We calibrate voice models and compliance guardrails based on your domain.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Company or Practice Name *
                      </label>
                      <Input
                        placeholder="e.g. Apex Mechanical Services LLC"
                        {...register("companyName")}
                      />
                      {errors.companyName && (
                        <p className="text-xs text-rose-400 mt-1">{errors.companyName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Website or Domain *
                      </label>
                      <Input
                        placeholder="e.g. apexmechanical.com"
                        {...register("website")}
                      />
                      {errors.website && (
                        <p className="text-xs text-rose-400 mt-1">{errors.website.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Primary Industry Vertical *
                      </label>
                      <select
                        {...register("industry")}
                        className="flex h-11 w-full rounded-xl border border-zinc-800 bg-zinc-900/90 px-3.5 py-2 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="trades">Trades & Field Services (HVAC, Plumbing, Electrical)</option>
                        <option value="legal">Legal & Law Practice (PI, Family, Corporate)</option>
                        <option value="healthcare">Healthcare & Dental Clinics</option>
                        <option value="realestate">Real Estate & Property Management</option>
                        <option value="financial">Financial & Insurance Advisory</option>
                        <option value="other">B2B SaaS / General Inbound</option>
                      </select>
                      {errors.industry && (
                        <p className="text-xs text-rose-400 mt-1">{errors.industry.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Volume & Channels */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-in fade-in-50 duration-200">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Step 2: Monthly Call Volume & Channels
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Select your estimated inbound traffic to calculate exact cost savings.
                    </p>
                  </div>

                  {/* Volume Pills */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">
                      Estimated Monthly Inbound Inquiries *
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {(["< 200", "200 - 1,000", "1,000 - 5,000", "5,000+"] as const).map((vol) => (
                        <button
                          type="button"
                          key={vol}
                          onClick={() => setValue("callVolume", vol, { shouldValidate: true })}
                          className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all text-left flex items-center justify-between ${
                            watchedVolume === vol
                              ? "bg-indigo-600/20 border-indigo-500 text-white ring-2 ring-indigo-500/30"
                              : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                          }`}
                        >
                          <span>{vol} calls/mo</span>
                          {watchedVolume === vol && (
                            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                          )}
                        </button>
                      ))}
                    </div>
                    {errors.callVolume && (
                      <p className="text-xs text-rose-400 mt-1">{errors.callVolume.message}</p>
                    )}
                  </div>

                  {/* Multichannel checkboxes */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">
                      Target Deployment Channels *
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: "inbound_voice", title: "Inbound Telephony (Voice Agent)", desc: "Direct phone line answering & SIP forwarding" },
                        { id: "outbound_followup", title: "Automated Outbound Confirmation & Follow-ups", desc: "Appointment reminders, missed-call re-engagement" },
                        { id: "webchat_whatsapp", title: "Website Chatbot & WhatsApp Bridge", desc: "Omnichannel fallback widget and text messaging" },
                      ].map((ch) => {
                        const isChecked = watchedChannels.includes(ch.id);
                        return (
                          <div
                            key={ch.id}
                            onClick={() => toggleChannel(ch.id)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                              isChecked
                                ? "bg-zinc-800/80 border-cyan-500/40 text-zinc-100"
                                : "bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              readOnly
                              className="mt-1 h-4 w-4 rounded border-zinc-700 text-indigo-600 focus:ring-indigo-500 pointer-events-none"
                            />
                            <div>
                              <div className="text-xs font-semibold text-zinc-200">{ch.title}</div>
                              <div className="text-[11px] text-zinc-500">{ch.desc}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {errors.channels && (
                      <p className="text-xs text-rose-400 mt-1">{errors.channels.message}</p>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 3: CRM & Primary Objective */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-in fade-in-50 duration-200">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Step 3: Tech Stack & Objectives
                    </h3>
                    <p className="text-xs text-zinc-400">
                      We sync directly into your existing software without disrupting your team.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Current CRM or Scheduling Tool *
                      </label>
                      <select
                        {...register("crm")}
                        className="flex h-11 w-full rounded-xl border border-zinc-800 bg-zinc-900/90 px-3.5 py-2 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="jobber">Jobber</option>
                        <option value="servicetitan">ServiceTitan</option>
                        <option value="hubspot">HubSpot CRM</option>
                        <option value="salesforce">Salesforce</option>
                        <option value="clio">Clio Manage / Clio Grow</option>
                        <option value="athenahealth">AthenaHealth / EHR</option>
                        <option value="google_calendar">Google Calendar / Outlook</option>
                        <option value="custom_api">Custom REST API / Webhooks</option>
                      </select>
                      {errors.crm && (
                        <p className="text-xs text-rose-400 mt-1">{errors.crm.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Primary Operational Objective *
                      </label>
                      <select
                        {...register("primaryGoal")}
                        className="flex h-11 w-full rounded-xl border border-zinc-800 bg-zinc-900/90 px-3.5 py-2 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="after_hours">24/7 After-Hours & Emergency Call Coverage</option>
                        <option value="staff_offload">Front Desk Offloading & Zero Hold Times</option>
                        <option value="calendar_booking">Autonomous Calendar Booking & Deposit Collection</option>
                        <option value="lead_qualification">Lead Scoring & Warm Human Transfer</option>
                      </select>
                      {errors.primaryGoal && (
                        <p className="text-xs text-rose-400 mt-1">{errors.primaryGoal.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Contact & Submission */}
              {currentStep === 4 && (
                <div className="space-y-5 animate-in fade-in-50 duration-200">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Step 4: Contact & Delivery
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Where should we deliver your tailored ROI report and voice agent demo line?
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Full Name *
                      </label>
                      <Input placeholder="Elena Rostova" {...register("fullName")} />
                      {errors.fullName && (
                        <p className="text-xs text-rose-400 mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Work Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="elena@company.com"
                        {...register("workEmail")}
                      />
                      {errors.workEmail && (
                        <p className="text-xs text-rose-400 mt-1">{errors.workEmail.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Direct Phone Number *
                      </label>
                      <Input
                        placeholder="+1 (555) 019-2834"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-400 mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Optional Notes or Edge Cases
                      </label>
                      <Input
                        placeholder="e.g. Bilingual Spanish requirement, multi-location office"
                        {...register("notes")}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Wizard Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-zinc-800/80">
                {currentStep > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="text-xs gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold gap-1.5 px-5"
                  >
                    Continue
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold gap-2 px-6 shadow-xl shadow-cyan-500/20"
                  >
                    <Sparkles className="w-4 h-4" />
                    Calculate Plan & Book Demo
                  </Button>
                )}
              </div>

            </form>
          </div>

          {/* RIGHT: Dynamic Real-Time ROI Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* ROI Live Projection Card */}
            <Card className="bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border-zinc-800 p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5" />
                  Live Dynamic Projection
                </span>
                <Badge variant="indigo" className="text-[10px]">
                  {roi.tierBadge}
                </Badge>
              </div>

              {/* Recommended Tier Name */}
              <div className="mb-6">
                <div className="text-xs text-zinc-500 uppercase font-mono">Recommended Tier</div>
                <div className="text-2xl font-black text-white">{roi.tier}</div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  Calibrated for {watchedVolume} monthly calls
                </div>
              </div>

              {/* Big KPI Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-800">
                  <div className="text-[11px] text-zinc-500 uppercase font-mono mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-indigo-400" />
                    Hours Saved
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-indigo-300 font-mono">
                    {roi.hoursSaved}+
                  </div>
                  <div className="text-[10px] text-zinc-400">hours/month offloaded</div>
                </div>

                <div className="bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-800">
                  <div className="text-[11px] text-zinc-500 uppercase font-mono mb-1 flex items-center gap-1">
                    <TrendingDown className="w-3 h-3 text-emerald-400" />
                    Cost Reduction
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                    ${(roi.annualSavings / 1000).toFixed(0)}k
                  </div>
                  <div className="text-[10px] text-zinc-400">projected annual savings</div>
                </div>
              </div>

              {/* Comparison vs Full Time Front Desk */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-2 mb-6 text-xs">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Traditional Front Desk Cost:</span>
                  <span className="text-rose-400 font-mono line-through">{roi.humanCostEq}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-200 font-semibold">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Callvea AI Enterprise Rate:
                  </span>
                  <span className="text-cyan-400 font-mono">{roi.costEstimate}</span>
                </div>
              </div>

              {/* Included SLA features */}
              <div className="space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Sub-500ms voice latency SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Dedicated CRM webhook engineer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Deterministic guardrails (0 hallucinations)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>SOC-2 & HIPAA audit logging</span>
                </div>
              </div>

            </Card>

            {/* Support guarantee pill */}
            <div className="p-3.5 rounded-2xl bg-zinc-900/50 border border-zinc-800/70 flex items-center gap-3 text-xs text-zinc-400">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>
                <strong>14-Day Pilot Guarantee:</strong> Test simulated calls with your team before pointing customer phone traffic.
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Confirmation Dialog / Modal */}
      <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
        <DialogContent className="max-w-md bg-zinc-900 border-zinc-800 text-zinc-100">
          <DialogHeader className="text-left space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <DialogTitle className="text-xl font-bold text-white">
              Plan Configured & Consultation Queued!
            </DialogTitle>
            <DialogDescription className="text-zinc-400 text-xs leading-relaxed">
              Thank you, {submittedData?.fullName}. We have compiled your custom ROI report and provisioned a sandbox voice agent model for {submittedData?.companyName}.
            </DialogDescription>
          </DialogHeader>

          {submittedData && (
            <div className="space-y-3 py-2 text-xs">
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1.5 font-mono">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Recommended Plan:</span>
                  <span className="text-indigo-400 font-bold">{roi.tier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Projected Hours Saved:</span>
                  <span className="text-emerald-400 font-bold">{roi.hoursSaved} hrs/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Target CRM Integration:</span>
                  <span className="text-zinc-200 capitalize">{submittedData.crm}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Confirmation Sent To:</span>
                  <span className="text-zinc-300">{submittedData.workEmail}</span>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400">
                A Callvea enterprise voice architect will reach out within 2 business hours with your private test call link.
              </p>
            </div>
          )}

          <Button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold py-2.5 rounded-xl"
          >
            Close & Return to Overview
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
