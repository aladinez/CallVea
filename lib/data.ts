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
  trades: string;
  badge: string;
  image: string;
  shortDescription: string;
  stat: string;
  iconName: string;
  accent: {
    color: string;
    border: string;
    bg: string;
    glow: string;
    tag: string;
  };
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "trades",
    name: "Home Services & Trades",
    trades: "HVAC • Plumbing • Electrical • Roofing • Restoration",
    badge: "24/7 Emergency Dispatch",
    image: "/images/industries/trades.jpg",
    shortDescription: "Picks up emergency calls instantly, gathers job symptoms, quotes standard call-out fees, and books appointments directly into Jobber or ServiceTitan.",
    stat: "Zero missed after-hours jobs",
    iconName: "Wrench",
    accent: {
      color: "text-amber-400",
      border: "border-amber-500/30 group-hover:border-amber-500/60",
      bg: "bg-amber-500/10",
      glow: "from-amber-500/20 via-orange-500/5 to-transparent",
      tag: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    },
  },
  {
    id: "legal",
    name: "Legal & Law Practice",
    trades: "Personal Injury • Family Law • Criminal • Corporate",
    badge: "Client Intake & Screening",
    image: "/images/industries/legal.jpg",
    shortDescription: "Conducts confidential intake interviews, verifies jurisdiction and conflict criteria, and books qualified consultations directly on attorney calendars.",
    stat: "100% confidential intake",
    iconName: "Scale",
    accent: {
      color: "text-indigo-400",
      border: "border-indigo-500/30 group-hover:border-indigo-500/60",
      bg: "bg-indigo-500/10",
      glow: "from-indigo-500/20 via-blue-500/5 to-transparent",
      tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    },
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical Clinics",
    trades: "Dental • MedSpas • Physical Therapy • Optometry",
    badge: "HIPAA-Ready Architecture",
    image: "/images/industries/healthcare.jpg",
    shortDescription: "Answers patient calls without hold times, books and reschedules appointments, answers clinic FAQs, and routes urgent triage to on-call providers.",
    stat: "60% less front-desk phone load",
    iconName: "Stethoscope",
    accent: {
      color: "text-cyan-400",
      border: "border-cyan-500/30 group-hover:border-cyan-500/60",
      bg: "bg-cyan-500/10",
      glow: "from-cyan-500/20 via-teal-500/5 to-transparent",
      tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    },
  },
  {
    id: "realestate",
    name: "Real Estate & Property Management",
    trades: "Residential • Commercial • Property Managers • HOA",
    badge: "Showing Tours & Maintenance",
    image: "/images/industries/realestate.jpg",
    shortDescription: "Schedules property walkthroughs on the spot, qualifies buyer and renter timelines, and captures after-hours emergency maintenance work orders.",
    stat: "Instant showing booking",
    iconName: "Building2",
    accent: {
      color: "text-purple-400",
      border: "border-purple-500/30 group-hover:border-purple-500/60",
      bg: "bg-purple-500/10",
      glow: "from-purple-500/20 via-pink-500/5 to-transparent",
      tag: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    },
  },
  {
    id: "financial",
    name: "Financial & Wealth Advisory",
    trades: "CPAs • Tax Advisors • Wealth Managers • Insurance",
    badge: "Client Reviews & Tax Intake",
    image: "/images/industries/financial.jpg",
    shortDescription: "Pre-screens client portfolios, schedules annual tax and investment reviews, answers documentation FAQs, and routes VIP accounts directly.",
    stat: "Flawless client scheduling",
    iconName: "LineChart",
    accent: {
      color: "text-emerald-400",
      border: "border-emerald-500/30 group-hover:border-emerald-500/60",
      bg: "bg-emerald-500/10",
      glow: "from-emerald-500/20 via-green-500/5 to-transparent",
      tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    },
  },
  {
    id: "automotive",
    name: "Automotive Dealerships & Repair",
    trades: "Auto Repair • Body Shops • Dealerships • Detailing",
    badge: "Service Bay Bookings",
    image: "/images/industries/automotive.jpg",
    shortDescription: "Schedules vehicle drop-offs, gathers year/make/model and symptoms, and provides rapid status updates to customers waiting on repair progress.",
    stat: "Maximized shop bay capacity",
    iconName: "Car",
    accent: {
      color: "text-rose-400",
      border: "border-rose-500/30 group-hover:border-rose-500/60",
      bg: "bg-rose-500/10",
      glow: "from-rose-500/20 via-red-500/5 to-transparent",
      tag: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    },
  },
  {
    id: "hospitality",
    name: "Hospitality, Dining & Venues",
    trades: "Restaurants • Boutique Hotels • Event Spaces • Catering",
    badge: "Reservations & Buyouts",
    image: "/images/industries/hospitality.jpg",
    shortDescription: "Takes table reservations during rush periods, answers dietary and private dining requests, and coordinates private buyout inquiries smoothly.",
    stat: "Zero lost reservations",
    iconName: "Utensils",
    accent: {
      color: "text-yellow-400",
      border: "border-yellow-500/30 group-hover:border-yellow-500/60",
      bg: "bg-yellow-500/10",
      glow: "from-yellow-500/20 via-amber-500/5 to-transparent",
      tag: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
    },
  },
  {
    id: "fitness",
    name: "Fitness, Wellness & Beauty",
    trades: "Gyms • Day Spas • Hair Salons • Wellness Studios",
    badge: "Appointments & Memberships",
    image: "/images/industries/fitness.jpg",
    shortDescription: "Books treatment sessions and stylist appointments, coordinates trial passes, and answers membership questions around the clock.",
    stat: "100% automated booking",
    iconName: "Sparkles",
    accent: {
      color: "text-fuchsia-400",
      border: "border-fuchsia-500/30 group-hover:border-fuchsia-500/60",
      bg: "bg-fuchsia-500/10",
      glow: "from-fuchsia-500/20 via-pink-500/5 to-transparent",
      tag: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
    },
  },
  {
    id: "professional",
    name: "B2B Agencies & Consultancies",
    trades: "Marketing • IT Services • Architecture • Staffing",
    badge: "Discovery Call Qualification",
    image: "/images/industries/professional.jpg",
    shortDescription: "Qualifies prospect project budgets and timelines, answers service capabilities, and schedules discovery meetings on team calendars.",
    stat: "Instant enterprise routing",
    iconName: "Briefcase",
    accent: {
      color: "text-blue-400",
      border: "border-blue-500/30 group-hover:border-blue-500/60",
      bg: "bg-blue-500/10",
      glow: "from-blue-500/20 via-sky-500/5 to-transparent",
      tag: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    },
  },
  {
    id: "logistics",
    name: "Logistics, Moving & Field Services",
    trades: "Movers • Freight • Couriers • Field Technicians",
    badge: "Instant Quotes & Dispatch",
    image: "/images/industries/logistics.jpg",
    shortDescription: "Collects move dates and inventory scope, delivers preliminary rate estimates, and coordinates urgent driver or route dispatch calls.",
    stat: "24/7 quote generation",
    iconName: "Truck",
    accent: {
      color: "text-teal-400",
      border: "border-teal-500/30 group-hover:border-teal-500/60",
      bg: "bg-teal-500/10",
      glow: "from-teal-500/20 via-emerald-500/5 to-transparent",
      tag: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    },
  },
  {
    id: "education",
    name: "Education, Tutoring & Academies",
    trades: "Private Schools • Tutoring • Test Prep • Daycares",
    badge: "Enrollment & Campus Tours",
    image: "/images/industries/education.jpg",
    shortDescription: "Answers parent inquiries regarding tuition and curricula, schedules campus tours, and automates trial session registration.",
    stat: "Streamlined student intake",
    iconName: "GraduationCap",
    accent: {
      color: "text-violet-400",
      border: "border-violet-500/30 group-hover:border-violet-500/60",
      bg: "bg-violet-500/10",
      glow: "from-violet-500/20 via-indigo-500/5 to-transparent",
      tag: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    },
  },
  {
    id: "veterinary",
    name: "Veterinary & Pet Care Hospitals",
    trades: "Animal Hospitals • Vet Clinics • Boarding • Grooming",
    badge: "Emergency & Routine Triage",
    image: "/images/industries/veterinary.jpg",
    shortDescription: "Triages life-threatening pet distress calls for immediate transfer while booking routine wellness visits, vaccinations, and grooming slots.",
    stat: "Priority emergency routing",
    iconName: "HeartPulse",
    accent: {
      color: "text-rose-400",
      border: "border-rose-500/30 group-hover:border-rose-500/60",
      bg: "bg-rose-500/10",
      glow: "from-rose-500/20 via-red-500/5 to-transparent",
      tag: "bg-rose-500/10 text-rose-300 border-rose-500/20",
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
