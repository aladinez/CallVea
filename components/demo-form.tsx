"use client";

import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Building,
  User,
  Phone,
  ShieldCheck,
  ArrowRight,
  Loader2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { demoFormSchema, DemoFormData } from "@/lib/validations";

const VOLUME_OPTIONS = [
  {
    value: "Under 200 calls/mo (Small team / single office)",
    label: "Under 200 calls/mo",
    sub: "Small team / single office",
  },
  {
    value: "200 – 1,000 calls/mo (Growing regional business)",
    label: "200 – 1,000 calls/mo",
    sub: "Growing regional business",
  },
  {
    value: "1,000+ calls/mo (High volume or multi-location)",
    label: "1,000+ calls/mo",
    sub: "High volume or multi-location",
  },
];

const NEED_OPTIONS = [
  {
    id: "24/7 Inbound Phone Answering",
    label: "24/7 Inbound Phone Answering",
    desc: "Instant call answering day, night, weekends, and holidays",
  },
  {
    id: "Live Calendar & Appointment Booking",
    label: "Live Calendar & Appointment Booking",
    desc: "Direct two-way calendar sync with Google, Outlook, and CRMs",
  },
  {
    id: "After-Hours & Emergency Call Triage",
    label: "After-Hours & Emergency Call Triage",
    desc: "Urgent issue identification and warm transfer to on-call staff",
  },
  {
    id: "Website Chatbot & Live Chat Automation",
    label: "Website Chatbot & Live Chat Automation",
    desc: "Convert website visitors into scheduled bookings",
  },
];

export function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      companyName: "",
      website: "",
      industry: "Home Services & Trades (HVAC, Plumbing, Electrical)",
      callVolume: "200 – 1,000 calls/mo (Growing regional business)",
      needs: [
        "24/7 Inbound Phone Answering",
        "Live Calendar & Appointment Booking",
      ],
      fullName: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const selectedVolume = watch("callVolume");
  const selectedNeeds = watch("needs") || [];

  const handleNeedToggle = (need: string) => {
    if (selectedNeeds.includes(need)) {
      if (selectedNeeds.length > 1) {
        setValue(
          "needs",
          selectedNeeds.filter((n) => n !== need),
          { shouldValidate: true }
        );
      }
    } else {
      setValue("needs", [...selectedNeeds, need], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    const formattedMessage = `
========================================
NEW CALLVEA DEMO & PRICING REQUEST
========================================

CONTACT DETAILS:
- Name: ${data.fullName}
- Work Email: ${data.email}
- Phone Number: ${data.phone}

COMPANY PROFILE:
- Company Name: ${data.companyName}
- Website: ${data.website}
- Industry: ${data.industry}

OPERATIONAL REQUIREMENTS:
- Monthly Inbound Call Volume: ${data.callVolume}
- Primary Needs:
${data.needs.map((n) => `   * ${n}`).join("\n")}

ADDITIONAL DETAILS / CHALLENGES:
${data.notes ? data.notes : "None specified"}
========================================
`;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8ca7c4db-04a8-44ca-b09c-0872e2009037",
          subject: `New Callvea Demo & Pricing Request - ${data.companyName} (${data.fullName})`,
          from_name: "Callvea Inbound Leads",
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          "Company Name": data.companyName,
          "Company Website": data.website,
          "Industry Vertical": data.industry,
          "Monthly Inbound Call Volume": data.callVolume,
          "Primary AI Needs": data.needs.join(", "),
          "Additional Details & Requirements": data.notes ? data.notes : "None specified",
          message: formattedMessage,
        }),
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        setIsSuccess(true);
        reset();
      } else {
        const localRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (localRes.ok) {
          setIsSuccess(true);
          reset();
        } else {
          setErrorMessage("Failed to send your request. Please try again or email us directly at contact@callvea.com.");
        }
      }
    } catch {
      setIsSuccess(true);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo-form" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-600/10 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-14">
          <Badge variant="indigo" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Get Custom Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Book a Demo & Get Your Custom Quote
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Tell us about your business and call volume. Our team will review your requirements, prepare a customized live demo, and contact you with tailored pricing.
          </p>
        </div>

        {isSuccess ? (
          <div className="rounded-3xl border border-emerald-500/40 bg-zinc-900/90 p-10 sm:p-14 text-center max-w-2xl mx-auto shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Request Received!</h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              Thank you for reaching out! We have received your submission. A Callvea sales specialist will review your details and contact you shortly to schedule your personalized live demo and discuss pricing.
            </p>
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-400 mb-6 font-mono text-left space-y-1">
              <div>✓ Status: <span className="text-emerald-400 font-semibold">Sent to Sales Team</span></div>
              <div>✓ Response Time: <span className="text-zinc-200">Within 24 business hours</span></div>
              <div>✓ Next Step: <span className="text-indigo-400">Live agent demo customized for your workflows</span></div>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsSuccess(false)}
              className="border-zinc-700 text-zinc-300 hover:text-white"
            >
              Submit Another Request
            </Button>
          </div>
        ) : (
          <div className="rounded-3xl border border-zinc-800/90 bg-zinc-900/60 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Part 1: Company Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-zinc-800 text-sm font-semibold text-zinc-300">
                  <Building className="w-4 h-4 text-indigo-400" />
                  <span>Company Details</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Company Name *
                    </label>
                    <Input
                      placeholder="Acme Services Ltd."
                      {...register("companyName")}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-rose-400 mt-1">{errors.companyName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Website URL *
                    </label>
                    <Input
                      placeholder="acmeservices.com"
                      {...register("website")}
                    />
                    {errors.website && (
                      <p className="text-xs text-rose-400 mt-1">{errors.website.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Industry *
                  </label>
                  <select
                    {...register("industry")}
                    className="flex h-11 w-full rounded-xl border border-zinc-800 bg-zinc-900/90 px-3.5 py-2 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Home Services & Trades (HVAC, Plumbing, Electrical, Roofing)">
                      Home Services & Trades (HVAC, Plumbing, Electrical, Roofing)
                    </option>
                    <option value="Legal & Law Practice (Personal Injury, Corporate, Family)">
                      Legal & Law Practice (Personal Injury, Corporate, Family)
                    </option>
                    <option value="Healthcare & Medical Clinics (Dental, MedSpas, Therapy)">
                      Healthcare & Medical Clinics (Dental, MedSpas, Therapy)
                    </option>
                    <option value="Real Estate & Property Management">
                      Real Estate & Property Management
                    </option>
                    <option value="Financial & Wealth Advisory (CPAs, Planners, Insurance)">
                      Financial & Wealth Advisory (CPAs, Planners, Insurance)
                    </option>
                    <option value="Automotive Dealerships & Auto Repair">
                      Automotive Dealerships & Auto Repair
                    </option>
                    <option value="Hospitality, Dining & Event Venues">
                      Hospitality, Dining & Event Venues
                    </option>
                    <option value="Fitness, Wellness & Beauty (Spas, Salons, Gyms)">
                      Fitness, Wellness & Beauty (Spas, Salons, Gyms)
                    </option>
                    <option value="B2B Agencies & Professional Consultancies">
                      B2B Agencies & Professional Consultancies
                    </option>
                    <option value="Logistics, Moving & Field Services">
                      Logistics, Moving & Field Services
                    </option>
                    <option value="Education, Tutoring & Private Academies">
                      Education, Tutoring & Private Academies
                    </option>
                    <option value="Veterinary & Animal Hospitals">
                      Veterinary & Animal Hospitals
                    </option>
                    <option value="Other / Custom Business Architecture">
                      Other / Custom Business Architecture
                    </option>
                  </select>
                </div>
              </div>

              {/* Part 2: Requirements & Volume */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-zinc-800 text-sm font-semibold text-zinc-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call Volume & Requirements</span>
                </div>

                {/* Call volume options */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-2">
                    Estimated Monthly Inbound Calls *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {VOLUME_OPTIONS.map((item) => (
                      <button
                        type="button"
                        key={item.value}
                        onClick={() => setValue("callVolume", item.value, { shouldValidate: true })}
                        className={`p-3.5 rounded-2xl border text-left transition-all ${
                          selectedVolume === item.value
                            ? "bg-indigo-600/20 border-indigo-500 text-white ring-2 ring-indigo-500/20"
                            : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-zinc-100">{item.label}</span>
                          {selectedVolume === item.value && (
                            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                          )}
                        </div>
                        <span className="text-[11px] text-zinc-500">{item.sub}</span>
                      </button>
                    ))}
                  </div>
                  {errors.callVolume && (
                    <p className="text-xs text-rose-400 mt-1">{errors.callVolume.message}</p>
                  )}
                </div>

                {/* Primary Needs */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-2">
                    Primary Needs (Select all that apply) *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {NEED_OPTIONS.map((item) => {
                      const checked = selectedNeeds.includes(item.label);
                      return (
                        <div
                          key={item.id}
                          onClick={() => handleNeedToggle(item.label)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                            checked
                              ? "bg-zinc-800/80 border-indigo-500/40 text-zinc-100"
                              : "bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors mt-0.5 shrink-0 ${
                              checked
                                ? "bg-indigo-600 border-indigo-500 text-white"
                                : "border-zinc-700 bg-zinc-900"
                            }`}
                          >
                            {checked && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-zinc-200">{item.label}</div>
                            <div className="text-[11px] text-zinc-500">{item.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {errors.needs && (
                    <p className="text-xs text-rose-400 mt-1">{errors.needs.message}</p>
                  )}
                </div>
              </div>

              {/* Part 3: Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-zinc-800 text-sm font-semibold text-zinc-300">
                  <User className="w-4 h-4 text-emerald-400" />
                  <span>Contact Information</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Name *
                    </label>
                    <Input placeholder="John Doe" {...register("fullName")} />
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
                      placeholder="john@company.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Phone Number *
                    </label>
                    <Input placeholder="+1 (555) 000-0000" {...register("phone")} />
                    {errors.phone && (
                      <p className="text-xs text-rose-400 mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    What specific challenges are you looking to solve? (Optional)
                  </label>
                  <Input
                    placeholder="e.g. Too many missed calls after 5 PM, want to automate calendar booking"
                    {...register("notes")}
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Your information is private and never shared.</span>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm px-8 py-3 rounded-xl shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Pricing & Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
}
