export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: string;
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "receptionist",
    title: "24/7 Inbound Receptionist",
    tagline: "Zero hold times, instant first-ring pickup",
    description:
      "Never lose an opportunity to voicemail again. Callvea answers immediately on the first ring, handling routine inquiries, business hours, directions, and emergency calls with natural human cadence.",
    highlights: [
      "Instant pickup day, night, and holidays",
      "Human-like, ultra-low latency conversational voice",
      "Understands complex multi-turn inquiries with ease",
    ],
    icon: "PhoneCall",
  },
  {
    id: "scheduling",
    title: "Automated Scheduling",
    tagline: "Direct 2-way calendar & CRM synchronization",
    description:
      "Eliminate phone tag. Callvea checks real-time availability, verifies booking constraints, schedules appointments directly into your calendar, and sends confirmation texts.",
    highlights: [
      "Live calendar availability checking",
      "Automatic timezone and buffer time calculations",
      "Instant calendar invites and SMS reminders",
    ],
    icon: "CalendarCheck",
  },
  {
    id: "qualification",
    title: "Lead Triage & Qualification",
    tagline: "Filter out spam and prioritize high-value prospects",
    description:
      "Ask customized screening questions to determine budget, timeline, and urgency. Route critical opportunities straight to your sales team with complete call summaries.",
    highlights: [
      "Custom screening questions for your specific services",
      "Spam and robo-call deflection",
      "Instant notification via email, SMS, or Slack",
    ],
    icon: "Filter",
  },
  {
    id: "omnichannel",
    title: "Omnichannel AI Chatbots",
    tagline: "Unified conversations across phone, web, and SMS",
    description:
      "Deliver consistent answers across all customer touchpoints. Deploy our responsive web chat widget and SMS messaging assistants alongside your voice agent.",
    highlights: [
      "Synchronized context across calls and text chat",
      "Turn web visitors into scheduled appointments",
      "Seamless hand-off to human agents when needed",
    ],
    icon: "MessageSquare",
  },
];

export interface IndustryItem {
  id: string;
  name: string;
  subhead: string;
  painPoint: string;
  callveaSolution: string;
  roiStat: string;
  roiLabel: string;
  integrations: string[];
  sampleDialogue: {
    caller: string;
    ai: string;
  };
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "trades",
    name: "Home Services & Trades",
    subhead: "HVAC, Plumbing, Electrical, Roofing",
    painPoint:
      "Homeowners facing an emergency won't leave a voicemail—they call the next contractor. Missing after-hours calls costs thousands in lost revenue.",
    callveaSolution:
      "Callvea answers 24/7, identifies urgent jobs (like burst pipes or furnace outages), captures job details, quotes your call-out fee, and dispatches on-call technicians.",
    roiStat: "+$18,000",
    roiLabel: "Avg Monthly Saved in Emergency Revenue",
    integrations: ["Jobber", "ServiceTitan", "Housecall Pro", "Google Calendar"],
    sampleDialogue: {
      caller: "My AC unit just died and water is leaking everywhere in the garage!",
      ai: "I'm so sorry to hear that. Let's get an emergency tech out to you. While I dispatch someone to your address, please switch off the main breaker to the unit. Can our team arrive within 60 minutes?",
    },
  },
  {
    id: "legal",
    name: "Legal & Professional Services",
    subhead: "Personal Injury, Immigration, Family Law, Corporate",
    painPoint:
      "Prospective clients shopping for an attorney want immediate reassurance. Delaying intake means losing retainers to competing firms.",
    callveaSolution:
      "Callvea conducts empathetic intake interviews, gathers critical incident details, verifies conflicts of interest, and books qualified consultations directly on attorney calendars.",
    roiStat: "2.5x",
    roiLabel: "Increase in Qualified Consultation Bookings",
    integrations: ["Clio", "MyCase", "LawPay", "HubSpot"],
    sampleDialogue: {
      caller: "I was injured in a car accident yesterday and the insurance company is pressuring me to sign a settlement.",
      ai: "Please do not sign anything yet. Our attorneys specialize in motor vehicle claims and can protect your rights. Let me take down your details and schedule an immediate priority consultation with Partner Miller.",
    },
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    subhead: "Dental, Dermatology, Physical Therapy, Specialty Care",
    painPoint:
      "Reception desks are overwhelmed managing phones while checking in patients. Long hold times frustrate patients and increase cancellation rates.",
    callveaSolution:
      "Callvea handles routine scheduling, appointment rescheduling, directions, and pre-op instructions, freeing your staff to focus on in-person patient care.",
    roiStat: "-60%",
    roiLabel: "Front Desk Administrative Burden",
    integrations: ["AthenaHealth", "Dentrix", "NexHealth", "Kareo"],
    sampleDialogue: {
      caller: "Hi, I need to reschedule my dental cleaning from Thursday to Friday morning if possible.",
      ai: "I can take care of that for you. Looking at Dr. Patel's calendar for this Friday, I have an opening at 9:30 AM or 11:00 AM. Which one works better for your schedule?",
    },
  },
  {
    id: "realestate",
    name: "Real Estate & Property",
    subhead: "Commercial, Residential, Leasing Offices",
    painPoint:
      "Inquiries arrive at all hours. Tenants with maintenance issues need immediate response, while prospective buyers need instant viewing bookings.",
    callveaSolution:
      "Callvea pre-qualifies prospective renters and buyers, schedules automated self-guided tours, and triages emergency maintenance work orders 24/7.",
    roiStat: "100%",
    roiLabel: "After-Hours Response Rate & Lead Capture",
    integrations: ["AppFolio", "Buildium", "Yardi", "Follow Up Boss"],
    sampleDialogue: {
      caller: "Hello, I'm calling about the 2-bedroom listing on Maple Avenue. Is it still available to tour?",
      ai: "Yes, that home is available for private viewings! I can schedule an in-person or self-guided tour for you today or tomorrow. What time would be most convenient?",
    },
  },
];


export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Forward Your Existing Number",
    description:
      "Keep your phone number and existing carrier. Simply turn on call-forwarding whenever you're busy, on another line, or closed for the day.",
    badge: "15-Minute Setup",
  },
  {
    step: "02",
    title: "We Train Your Custom AI",
    description:
      "We feed your business FAQs, services, pricing, and calendar rules into our secure agent engine. It learns your brand voice and exact workflows.",
    badge: "Tailored to You",
  },
  {
    step: "03",
    title: "Go Live & Scale Seamlessly",
    description:
      "Your AI starts taking calls immediately. Qualified leads and appointments drop straight into your CRM, calendar, or inbox with full transcripts.",
    badge: "Immediate ROI",
  },
];

export const INTEGRATIONS_LIST = [
  { name: "ServiceTitan", category: "Field Service" },
  { name: "Jobber", category: "Field Service" },
  { name: "HubSpot", category: "CRM" },
  { name: "Salesforce", category: "Enterprise CRM" },
  { name: "Clio", category: "Legal Practice" },
  { name: "AthenaHealth", category: "Healthcare EHR" },
  { name: "Google Calendar", category: "Scheduling" },
  { name: "Outlook Calendar", category: "Scheduling" },
  { name: "Slack", category: "Team Alerts" },
  { name: "Intercom", category: "Web Chat" },
  { name: "Zapier", category: "Integrations" },
  { name: "Twilio", category: "Voice Network" },
];

export const COMPARISON_ROWS = [
  {
    feature: "Pickup Speed",
    voicemail: "No pickup (voicemail prompt)",
    humanCenter: "Often 1–3 minute hold times",
    callvea: "Instant pickup on the 1st ring (< 500ms)",
  },
  {
    feature: "24/7/365 Availability",
    voicemail: "Passive voicemail recording",
    humanCenter: "High nighttime/weekend surcharges",
    callvea: "Always on, 24/7/365 included",
  },
  {
    feature: "Direct Calendar & CRM Sync",
    voicemail: "None (manual follow-up)",
    humanCenter: "Unformatted notes or basic emails",
    callvea: "Native 2-way real-time calendar & CRM write",
  },
  {
    feature: "Business & Pricing Knowledge",
    voicemail: "None",
    humanCenter: "Rigid scripts, frequent errors",
    callvea: "Intelligent, conversational Q&A on your services",
  },
  {
    feature: "Urgent Call Transfers",
    voicemail: "Not possible",
    humanCenter: "Cold transfer or delayed callback",
    callvea: "Smart warm-transfer with instant context briefing",
  },
  {
    feature: "Monthly Investment",
    voicemail: "Lost revenue on missed leads",
    humanCenter: "$3,000 – $6,000+ / mo",
    callvea: "Fraction of the cost with guaranteed ROI",
  },
  {
    feature: "Concurrency (Simultaneous Callers)",
    voicemail: "1 at a time (busy tone)",
    humanCenter: "Subject to staffing bottlenecks",
    callvea: "Unlimited simultaneous callers",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Do I have to switch my phone company or get a new number?",
    answer:
      "No. You keep your existing business phone number and current phone carrier (AT&T, Verizon, RingCentral, Vonage, etc.). You simply set up conditional or unconditional call forwarding to the private routing number we provide for your AI agent.",
  },
  {
    question: "How does the AI know how to answer questions about my business?",
    answer:
      "During onboarding, we ingest your website, price sheets, FAQs, scheduling rules, and guidelines. The AI is restricted by strict guardrails to answer only what you've approved. If a caller asks something outside its knowledge base, it politely offers to take a message or transfer the call to your team.",
  },
  {
    question: "How fast does the AI respond on the phone?",
    answer:
      "Callvea operates with sub-500 millisecond response latency. This provides a natural, human-speed conversational rhythm without awkward pauses or delays.",
  },
  {
    question: "How does the AI book appointments into our calendar?",
    answer:
      "We connect directly to your calendar or CRM (Google Calendar, Outlook, Jobber, ServiceTitan, Clio, Calendly, etc.). The AI checks for open slots in real time, offers those times to the caller, and books the event directly onto your schedule.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "Our pricing is tailored to your business size, expected call volume, and the specific integrations you require. Fill out our short request form below, and a specialist will provide an exact, transparent quote within 24 hours.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most clients go live within 48 to 72 hours. We handle the full technical setup, system integration, and test calls before your agent begins handling live customer traffic.",
  },
];
