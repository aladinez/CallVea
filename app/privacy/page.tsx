import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, FileText, Mail, CheckCircle2, Globe, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy | Callvea",
  description:
    "Learn how Callvea collects, uses, protects, and retains your data in compliance with Canadian privacy legislation (PIPEDA, CASL) and international security standards.",
};

export default function PrivacyPage() {
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
              <Shield className="w-3.5 h-3.5 text-indigo-400" />
              <span>Legal & Compliance</span>
            </Badge>
            <Badge variant="emerald" className="gap-1.5 py-1 px-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Canada (PIPEDA & CASL) Compliant</span>
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <span>Effective Date: March 1, 2025</span>
            <span>•</span>
            <span>Last Updated: March 2025</span>
            <span>•</span>
            <span>Applies to: callvea.com</span>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed pt-2">
            Callvea Inc. (&ldquo;Callvea&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the Callvea conversational voice platform and autonomous receptionists available at{" "}
            <span className="text-white font-medium">callvea.com</span>. This Privacy Policy explains what information we collect, how we process and protect it, and your privacy rights under applicable Canadian and international privacy laws.
          </p>
        </div>

        {/* Quick Highlights Box */}
        <div className="mb-12 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 backdrop-blur-md">
          <h2 className="text-sm font-semibold uppercase tracking-wider font-mono text-indigo-400 mb-4 flex items-center gap-2">
            <Lock className="w-4 h-4" />
            At a Glance — Our Core Privacy Commitments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <div>
                <strong className="text-white">We Never Sell Your Data:</strong> We do not sell, broker, or rent your personal or customer data to advertisers or third-party brokers.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <div>
                <strong className="text-white">Canadian Privacy Compliant:</strong> Built in accordance with Canada&apos;s PIPEDA, CASL, and provincial privacy principles.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <div>
                <strong className="text-white">Enterprise Encryption:</strong> End-to-end TLS 1.3 encryption in transit and AES-256 encryption at rest for sensitive configurations.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <div>
                <strong className="text-white">Dedicated Privacy Officer:</strong> Direct contact channel for privacy and access requests at{" "}
                <a href="mailto:privacy@callvea.com" className="text-indigo-400 hover:underline font-mono">
                  privacy@callvea.com
                </a>.
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12 text-zinc-300 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">1</span>
              Information We Collect
            </h2>
            <p>
              To provide, configure, and maintain our voice AI agents, conversational receptionists, and booking integrations, we collect the following categories of information:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 font-bold">•</span>
                <div>
                  <strong className="text-zinc-100">Account & Business Information:</strong> Name, professional work email address, company name, phone number, website, and industry when you register, request a demonstration, or set up service.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 font-bold">•</span>
                <div>
                  <strong className="text-zinc-100">Organization & Configuration Data:</strong> Business hours, service menus, pricing schedules, FAQs, routing instructions, and telephony identifiers configured for your custom AI agent.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 font-bold">•</span>
                <div>
                  <strong className="text-zinc-100">Telephony & Voice Data:</strong> Call records (inbound/outbound caller ID, destination phone numbers, call timestamps, duration), voicemail audio recordings, and automated machine-generated speech transcripts produced during inbound or outbound interactions.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 font-bold">•</span>
                <div>
                  <strong className="text-zinc-100">Calendar & Integration Credentials:</strong> Authorized access tokens and scheduling calendar identifiers (e.g., Google Calendar, Outlook, CRM webhooks) necessary to inspect availability and book appointments.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 font-bold">•</span>
                <div>
                  <strong className="text-zinc-100">Payment & Billing Information:</strong> Payments and subscriptions are processed by our secure PCI-DSS Level 1 payment processor (Stripe). We store only your Stripe customer identifier, subscription plan details, and transaction history—we never store or retain raw payment card numbers.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 font-bold">•</span>
                <div>
                  <strong className="text-zinc-100">Technical & Diagnostic Data:</strong> IP addresses, browser specifications, device identifiers, latency metrics, and server access logs utilized for system security, performance tuning, and rate-limiting.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">2</span>
              How We Use Your Information
            </h2>
            <p>We process collected data solely for legitimate commercial business purposes, including:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="rounded-xl border border-zinc-850 bg-zinc-900/40 p-3.5 text-sm">
                <span className="text-white font-medium block mb-1">Platform Operations</span>
                Provisioning phone numbers, executing real-time conversational voice processing, and routing inbound calls.
              </div>
              <div className="rounded-xl border border-zinc-850 bg-zinc-900/40 p-3.5 text-sm">
                <span className="text-white font-medium block mb-1">Automated Booking</span>
                Synchronizing schedules, verifying availability, locking in client appointments, and triggering SMS confirmations.
              </div>
              <div className="rounded-xl border border-zinc-850 bg-zinc-900/40 p-3.5 text-sm">
                <span className="text-white font-medium block mb-1">Billing & Invoicing</span>
                Managing customer subscriptions, processing usage-based minute allocations, and delivering invoices.
              </div>
              <div className="rounded-xl border border-zinc-850 bg-zinc-900/40 p-3.5 text-sm">
                <span className="text-white font-medium block mb-1">Transactional Alerts</span>
                Delivering critical notifications such as call summaries, urgent warm-transfer briefings, and operational alerts.
              </div>
              <div className="rounded-xl border border-zinc-850 bg-zinc-900/40 p-3.5 text-sm">
                <span className="text-white font-medium block mb-1">Customer Support</span>
                Investigating technical diagnostics, resolving client tickets, and optimizing agent response accuracy.
              </div>
              <div className="rounded-xl border border-zinc-850 bg-zinc-900/40 p-3.5 text-sm">
                <span className="text-white font-medium block mb-1">Security & Abuse Defense</span>
                Preventing unauthorized access, malicious robocalling, voice phishing, spam, or telecommunications abuse.
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">3</span>
              Data Sharing &amp; Sub-processors
            </h2>
            <p>
              <strong className="text-white">We do not sell, rent, or trade your personal data.</strong> We disclose data only to trusted sub-processors and service providers bound by strict contractual confidentiality and data processing obligations:
            </p>
            <ul className="space-y-2.5 pl-2 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <div>
                  <strong className="text-zinc-100">Telephony & Carrier Networks:</strong> Licensed telecommunications carriers and providers (e.g., Twilio and Tier-1 voice networks) to route calls, manage SIP trunking, and provision local numbers.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <div>
                  <strong className="text-zinc-100">Speech & AI Processing Engines:</strong> Speech-to-text, text-to-speech, and large language model inference providers (such as OpenAI and specialized acoustic engines) to interpret conversational voice and synthesize responses in real time.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <div>
                  <strong className="text-zinc-100">Payment Processors:</strong> Stripe, for encrypted payment handling and PCI-compliant transaction processing.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <div>
                  <strong className="text-zinc-100">Cloud Infrastructure & Hosting:</strong> Enterprise cloud hosting providers (e.g., Vercel, AWS) utilizing SOC-2 Type II certified datacenters.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <div>
                  <strong className="text-zinc-100">Legal Requirements:</strong> Competent judicial, regulatory, or law enforcement authorities when mandated by applicable law, court order, or subpoena.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">4</span>
              Data Retention
            </h2>
            <p>
              Account data and organizational configurations are retained for the duration of your active subscription with Callvea. 
            </p>
            <p>
              Call audio recordings, transcripts, and detailed call logs are retained for <strong className="text-white">90 days by default</strong> (configurable per organization policy). You may request the export or permanent deletion of your account and associated data at any time by contacting our Privacy Team.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">5</span>
              Security Safeguards
            </h2>
            <p>
              We implement comprehensive technical, organizational, and physical safeguards designed to protect personal and organizational information against loss, unauthorized access, or disclosure:
            </p>
            <ul className="space-y-2 pl-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span><strong>Encryption in Transit:</strong> All web, dashboard, and API interactions are secured via TLS 1.3 protocols.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span><strong>Encryption at Rest:</strong> Database records, access credentials, and tokens are protected with AES-256 standard encryption.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span><strong>Data Isolation:</strong> Multi-tenant isolation architecture ensures your organization&apos;s business data, caller history, and prompts remain segregated.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span><strong>SOC-2 Type II Infrastructure:</strong> Hosted in world-class datacenters audited under SOC-2 Type II security guidelines.</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">6</span>
              Your Rights &amp; Canadian Privacy Compliance
            </h2>
            <p>
              Callvea is based in and primarily serves commercial clients in <strong className="text-white">Canada</strong>. We comply with applicable Canadian privacy frameworks, including the <em className="text-zinc-200">Personal Information Protection and Electronic Documents Act (PIPEDA)</em>, <em className="text-zinc-200">Canada&apos;s Anti-Spam Legislation (CASL)</em>, and substantially similar provincial legislation (such as Alberta PIPA, British Columbia PIPA, and Quebec Law 25).
            </p>
            <p>Subject to applicable law, you have the following rights regarding personal data:</p>
            <div className="space-y-2 pl-2 text-sm">
              <p><strong className="text-white">• Access &amp; Portability:</strong> Request confirmation of whether we hold personal data concerning you and obtain an accessible copy.</p>
              <p><strong className="text-white">• Rectification:</strong> Request correction of inaccurate, obsolete, or incomplete personal data.</p>
              <p><strong className="text-white">• Erasure:</strong> Request the deletion of personal information where retention is no longer necessary for operational or legal purposes.</p>
              <p><strong className="text-white">• Consent Withdrawal:</strong> Withdraw consent to future data collection or processing at any time, subject to contractual constraints.</p>
            </div>
            <p className="text-sm">
              For users in the EU/EEA, UK, or United States (CCPA/CPRA), we recognize corresponding rights of access, correction, deletion, and non-discrimination. To exercise any privacy right, email our Privacy Officer directly at{" "}
              <a href="mailto:privacy@callvea.com" className="text-indigo-400 hover:underline font-mono">
                privacy@callvea.com
              </a>.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">7</span>
              Cookies &amp; Local Storage
            </h2>
            <p>
              We use strictly necessary session cookies and local storage to preserve authentication state, security tokens, and user preferences. We do not use third-party behavioral advertising cookies or cross-site tracking pixels. You may configure your browser to reject cookies, though certain dashboard features may be impaired.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">8</span>
              Children&apos;s Privacy
            </h2>
            <p>
              Callvea is a B2B business software solution intended solely for commercial entities and individuals aged 18 and older. We do not knowingly solicit or collect personal information from individuals under the age of 16.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">9</span>
              Google API Limited Use Disclosure
            </h2>
            <p>
              Callvea&apos;s use and transfer of information received from Google APIs (such as Google Calendar synchronization for automated appointment booking) to any other application adheres to the{" "}
              <a
                href="https://developers.google.com/identity/protocols/oauth2/policies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline inline-flex items-center gap-1"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">10</span>
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect operational, regulatory, or technical changes. We will notify registered account holders by email or prominent dashboard banner of any material changes at least 30 days before they take effect. Continued use of the platform after the effective date constitutes acceptance.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4 border-t border-zinc-850 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400">11</span>
              Contact Information
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our Canadian data handling practices, please contact our designated Privacy Team:
            </p>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-3">
              <div className="text-white font-semibold flex items-center gap-2">
                <Building2 className="w-4 h-4 text-indigo-400" />
                Callvea Inc. &bull; Privacy Officer
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Privacy Inquiries:</span>
                <a href="mailto:privacy@callvea.com" className="text-indigo-400 hover:underline font-mono">
                  privacy@callvea.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>General Contact:</span>
                <a href="mailto:contact@callvea.com" className="text-indigo-400 hover:underline font-mono">
                  contact@callvea.com
                </a>
              </div>
              <div className="pt-2 text-xs text-zinc-500">
                For platform terms and usage guidelines, please review our{" "}
                <Link href="/terms" className="text-zinc-300 underline hover:text-white">
                  Terms of Use
                </Link>.
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
