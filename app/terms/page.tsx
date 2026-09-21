import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileCheck, Scale, AlertCircle, Mail, Globe, Shield, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Terms of Use | Callvea",
  description:
    "Read the Terms of Use and Service Agreement governing access to Callvea's autonomous voice agent platform, conversational receptionists, and telephony automation.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 pt-32 pb-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-indigo-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-4 border-b border-zinc-850 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="indigo" className="gap-1.5 py-1 px-3">
              <Scale className="w-3.5 h-3.5 text-indigo-400" />
              <span>Commercial Terms of Service</span>
            </Badge>
            <Badge variant="cyan" className="gap-1.5 py-1 px-3">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Canada &amp; Global Operations</span>
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Terms of Use
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <span>Effective Date: March 1, 2025</span>
            <span>•</span>
            <span>Last Updated: March 2025</span>
            <span>•</span>
            <span>Jurisdiction: Canada</span>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed pt-2">
            These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the Callvea autonomous voice agent platform, conversational receptionists, and telephony automation services operated by{" "}
            <strong className="text-white">Callvea Inc.</strong> (&ldquo;Callvea&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), available at{" "}
            <span className="text-white font-medium">callvea.com</span>. By creating an account, provisioning telephone services, or using the platform, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Callout Notice */}
        <div className="mb-12 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-6 backdrop-blur-md">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-sm">
              <div className="font-semibold text-white">Commercial Enterprise Software Service</div>
              <p className="text-zinc-300 leading-relaxed">
                Callvea is a B2B technology provider and conversational software platform. We are not a regulated common carrier telecommunications utility. Your use of automated telephony, call forwarding, and voice recording features must comply with all applicable telecommunications, privacy, and wiretapping laws in your jurisdiction.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12 text-zinc-300 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">1</span>
              Eligibility &amp; Authority
            </h2>
            <p>
              You must be at least 18 years of age and possess the legal power and corporate authority to bind yourself or the company or organization on whose behalf you are accessing Callvea. The platform is designed and intended strictly for commercial and organizational business use.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">2</span>
              Account Registration &amp; Security
            </h2>
            <p>
              You are responsible for maintaining the confidentiality and security of your account credentials, API tokens, webhook secrets, and administrative access. You agree to notify us immediately at{" "}
              <a href="mailto:contact@callvea.com" className="text-indigo-400 hover:underline font-mono">
                contact@callvea.com
              </a>{" "}
              upon discovering any unauthorized access or compromise of your credentials. You may not sublicense, transfer, or resell direct account access to third parties without prior authorization.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">3</span>
              Acceptable Use Policy (AUP)
            </h2>
            <p>
              You agree to use Callvea strictly in compliance with all relevant federal, provincial, state, and international telecommunications regulations. You specifically agree not to:
            </p>
            <ul className="space-y-2.5 pl-2 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">&times;</span>
                <div>
                  <strong className="text-zinc-100">Unsolicited Telemarketing &amp; Robocalling:</strong> Transmit unsolicited telemarketing calls, auto-dialing campaigns without verified express consent, or bulk spam in violation of the Canadian Radio-television and Telecommunications Commission (CRTC) Unsolicited Telecommunications Rules, Canada&apos;s Anti-Spam Legislation (CASL), or the US Telephone Consumer Protection Act (TCPA).
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">&times;</span>
                <div>
                  <strong className="text-zinc-100">Caller ID Spoofing &amp; Impersonation:</strong> Falsify, spoof, or mask Caller ID transmission headers to deceive, defraud, or impersonate law enforcement, government institutions, financial agencies, or other entities.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">&times;</span>
                <div>
                  <strong className="text-zinc-100">Abusive or Unlawful Content:</strong> Generate, transmit, or promote defamatory, obscene, harassing, fraudulent, or hateful voice dialogues or messaging.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">&times;</span>
                <div>
                  <strong className="text-zinc-100">Reverse Engineering &amp; Model Extraction:</strong> Decompile, reverse engineer, extract model prompt system instructions, or probe the underlying AI architecture for replication.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">&times;</span>
                <div>
                  <strong className="text-zinc-100">System Interference:</strong> Attempt to compromise, flood, stress-test without authorization, or disrupt our telephony routing or API endpoints.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">4</span>
              Subscription Plans, Billing, &amp; Overages
            </h2>
            <p>
              Paid subscription plans are billed in advance on a recurring monthly or annual basis via Stripe. Billing currencies are denominated in CAD or USD as specified in your agreement.
            </p>
            <ul className="space-y-2 pl-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <span><strong>Minute Allocations &amp; Overages:</strong> Plans include an allocated volume of monthly telephony agent minutes. Additional minutes consumed beyond your base plan are billed at your contracted rate and invoiced at the end of each billing cycle.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <span><strong>Refund Policy:</strong> All subscription fees and usage charges are non-refundable except where explicitly required by applicable law.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <span><strong>Pricing Adjustments:</strong> We reserve the right to revise pricing upon 30 days&apos; advance written electronic notice before renewal.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">5</span>
              Free Trial &amp; Pilot Periods
            </h2>
            <p>
              When participating in an initial trial or pilot program, you are granted full feature access for the agreed promotional duration. At the conclusion of the trial, an active commercial subscription or custom enterprise agreement is required to maintain live telephone routing and active AI receptionist answering.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">6</span>
              Customer Data, Privacy, &amp; Call Recording Consent
            </h2>
            <p>
              Use of the platform is governed by our{" "}
              <Link href="/privacy" className="text-indigo-400 hover:underline font-medium">
                Privacy Policy
              </Link>
              . You retain full ownership and intellectual property rights in all customer data, caller records, appointment logs, and call audio transcripts generated through your account.
            </p>
            <div className="rounded-xl border border-zinc-850 bg-zinc-900/60 p-4 space-y-2 text-sm">
              <div className="font-semibold text-white flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                Mandatory Call Recording Disclosure Responsibility
              </div>
              <p className="text-zinc-400 leading-relaxed">
                In many jurisdictions—including under the <em className="text-zinc-200">Criminal Code of Canada</em> and various provincial and state two-party consent statutes—recording phone conversations without disclosing to the caller that the call is being recorded is strictly regulated.
              </p>
              <p className="text-zinc-300">
                <strong className="text-white">You are solely responsible</strong> for ensuring that your AI agent greeting contains an appropriate legal disclosure (e.g., &ldquo;<em>This call may be recorded for quality and scheduling purposes</em>&rdquo;) where required by applicable law.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">7</span>
              Telecommunications Compliance
            </h2>
            <p>
              You acknowledge and agree that Callvea is an enterprise software platform providing automated conversational intelligence, and is not a public telecommunications carrier. You maintain full legal responsibility for how your phone numbers are marketed, forwarded, and configured in accordance with CRTC, FCC, and local carrier regulations.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">8</span>
              Service Availability &amp; Target Uptime
            </h2>
            <p>
              We strive to deliver high-reliability service and target a <strong className="text-white">99.9% monthly platform uptime</strong>. Scheduled maintenance windows will be communicated in advance when practical. Callvea is not responsible for outages or degraded audio caused by upstream third-party failures, including cellular carrier networks, local internet service disruptions, or external API outages (e.g., calendar systems, Stripe, or telecom carriers).
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">9</span>
              Intellectual Property
            </h2>
            <p>
              The Callvea platform, including its software code, interface design, speech latency pipelines, agent orchestration frameworks, logos, and trademarks, is the exclusive proprietary property of Callvea Inc. and its licensors. You may not copy, modify, distribute, or create derivative works of any aspect of the platform without our express written permission.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">10</span>
              Limitation of Liability
            </h2>
            <p className="text-sm">
              TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT SHALL CALLVEA INC., ITS DIRECTORS, OFFICERS, EMPLOYEES, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF REVENUE, LOST SALES OPPORTUNITIES, MISSED INBOUND CALLS, OR BUSINESS INTERRUPTION ARISING FROM THE USE OF OR INABILITY TO USE THE PLATFORM.
            </p>
            <p className="text-sm">
              CALLVEA&apos;S TOTAL AGGREGATE LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNT ACTUALLY PAID BY YOU TO CALLVEA IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">11</span>
              Termination &amp; Data Deletion
            </h2>
            <p>
              You may terminate your subscription at any time via your account settings or written notice to your account manager. Callvea reserves the right to suspend or terminate service immediately and without liability if you violate our Acceptable Use Policy or fail to satisfy outstanding billing obligations. Following cancellation, your data will be preserved for thirty (30) days to allow for export, after which it will be permanently deleted from active systems.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">12</span>
              Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms and any dispute or controversy arising out of or related to them shall be governed by and construed in accordance with the laws of <strong className="text-white">Canada</strong> and the <strong className="text-white">Province of Ontario</strong>, without regard to conflict of law principles. Any legal suit, action, or proceeding arising out of or related to these Terms shall be instituted exclusively in the competent courts situated in Canada.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">13</span>
              Changes to These Terms
            </h2>
            <p>
              We reserve the right to amend these Terms from time to time. We will provide registered customers with at least 30 days&apos; advance notice of any material revisions via email or through the platform dashboard. Continued use of the platform after the effective date of updated Terms constitutes your binding acceptance.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4 border-t border-zinc-850 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">14</span>
              Contact Information
            </h2>
            <p>
              For legal questions, compliance notices, or contractual inquiries regarding these Terms, please contact our team:
            </p>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-3">
              <div className="text-white font-semibold flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-indigo-400" />
                Callvea Inc. &bull; Legal &amp; Compliance Operations
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>General Legal &amp; Operational Inquiries:</span>
                <a href="mailto:contact@callvea.com" className="text-indigo-400 hover:underline font-mono">
                  contact@callvea.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Privacy &amp; Data Rights Requests:</span>
                <a href="mailto:privacy@callvea.com" className="text-indigo-400 hover:underline font-mono">
                  privacy@callvea.com
                </a>
              </div>
              <div className="pt-2 text-xs text-zinc-500">
                To review our data processing practices, please visit our{" "}
                <Link href="/privacy" className="text-zinc-300 underline hover:text-white">
                  Privacy Policy
                </Link>.
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
