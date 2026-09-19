export interface DialogMessage {
  id: string;
  role: "caller" | "agent";
  speaker: string;
  text: string;
  timestamp: string;
  latencyMs?: number;
  extractedEntity?: {
    label: string;
    value: string;
    type: "contact" | "urgency" | "intent" | "address" | "time";
  };
  crmAction?: {
    system: string;
    action: string;
    status: "pending" | "dispatched" | "confirmed";
  };
}

export interface Scenario {
  id: string;
  title: string;
  category: string;
  badge: string;
  caller: {
    name: string;
    phone: string;
    location: string;
    initialIssue: string;
  };
  telephonySpecs: {
    avgLatency: number;
    protocol: string;
    sentiment: string;
    confidence: string;
  };
  finalExtraction: {
    label: string;
    value: string;
    badgeColor?: string;
  }[];
  crmResult: {
    platform: string;
    recordId: string;
    actionSummary: string;
    dispatchedTo: string;
  };
  dialog: DialogMessage[];
}

export const CALL_SCENARIOS: Scenario[] = [
  {
    id: "hvac-emergency",
    title: "After-Hours HVAC Emergency",
    category: "Trades & Field Services",
    badge: "Urgent Dispatch",
    caller: {
      name: "Marcus Vance",
      phone: "+1 (415) 890-2412",
      location: "742 Evergreen Terrace, San Francisco, CA",
      initialIssue: "Water heater leaking into basement and AC compressor seized",
    },
    telephonySpecs: {
      avgLatency: 342,
      protocol: "SIP / WebRTC Opus 48kHz",
      sentiment: "High Distress / Urgent",
      confidence: "99.8%",
    },
    finalExtraction: [
      { label: "Caller", value: "Marcus Vance" },
      { label: "Phone", value: "+1 (415) 890-2412" },
      { label: "Address", value: "742 Evergreen Terrace, SF" },
      { label: "Issue Severity", value: "Level 1: Water Leakage & Electrical Risk", badgeColor: "red" },
      { label: "Dispatch Window", value: "Within 90 mins (Priority Emergency)" },
      { label: "Billing Authorization", value: "Approved $189 Emergency Diagnostic" },
    ],
    crmResult: {
      platform: "Jobber & ServiceTitan",
      recordId: "JOB-89412-EMG",
      actionSummary: "Emergency Work Order Created & On-Call Tech Paged",
      dispatchedTo: "Tech Dave M. (En Route)",
    },
    dialog: [
      {
        id: "hvac-1",
        role: "agent",
        speaker: "Callvea AI (Apex Heating & Air)",
        text: "Thank you for calling Apex Heating & Air 24/7 Emergency Line. I'm the automated intake specialist. What emergency can we help you resolve tonight?",
        timestamp: "00:02",
        latencyMs: 320,
      },
      {
        id: "hvac-2",
        role: "caller",
        speaker: "Marcus Vance",
        text: "Hi! My basement is flooding right now, water is spraying from the hot water valve and our main AC unit shut off with a burning smell. I need someone ASAP!",
        timestamp: "00:08",
      },
      {
        id: "hvac-3",
        role: "agent",
        speaker: "Callvea AI (Apex Heating & Air)",
        text: "I completely understand Marcus. First, please locate your yellow main shutoff lever on that pipe and turn it perpendicular right away to prevent further flooding. Can I confirm your address is 742 Evergreen Terrace?",
        timestamp: "00:13",
        latencyMs: 348,
        extractedEntity: {
          label: "Safety Instruction",
          value: "Main water shutoff guidance issued",
          type: "urgency",
        },
      },
      {
        id: "hvac-4",
        role: "caller",
        speaker: "Marcus Vance",
        text: "Yes, that's it! 742 Evergreen Terrace. I just shut the lever, water slowed down. How fast can a technician get here?",
        timestamp: "00:19",
        extractedEntity: {
          label: "Confirmed Address",
          value: "742 Evergreen Terrace, SF",
          type: "address",
        },
      },
      {
        id: "hvac-5",
        role: "agent",
        speaker: "Callvea AI (Apex Heating & Air)",
        text: "Great job shutting that off. Our on-call emergency technician, Dave, is currently 18 minutes away in your sector. Our standard after-hours emergency diagnostic dispatch fee is $189. May I dispatch him right to your door?",
        timestamp: "00:24",
        latencyMs: 360,
        extractedEntity: {
          label: "Dispatch Fee",
          value: "$189 Diagnostic Approved",
          type: "intent",
        },
      },
      {
        id: "hvac-6",
        role: "caller",
        speaker: "Marcus Vance",
        text: "Yes please, send him immediately. My cell phone is 415-890-2412 if he needs gate access.",
        timestamp: "00:30",
        extractedEntity: {
          label: "Direct Phone",
          value: "(415) 890-2412",
          type: "contact",
        },
      },
      {
        id: "hvac-7",
        role: "agent",
        speaker: "Callvea AI (Apex Heating & Air)",
        text: "Emergency ticket JOB-89412 is confirmed. Dave has received your gate instructions and live address in Jobber, and I've texted you a live technician GPS tracking link. Help is on the way!",
        timestamp: "00:35",
        latencyMs: 335,
        crmAction: {
          system: "Jobber + Twilio SMS",
          action: "Ticket Created, GPS Tracking Link Texted",
          status: "confirmed",
        },
      },
    ],
  },
  {
    id: "legal-intake",
    title: "Law Firm Intake & Conflict Check",
    category: "Legal & Professional Services",
    badge: "Confidential Triage",
    caller: {
      name: "Elena Rostova",
      phone: "+1 (212) 674-9031",
      location: "New York, NY",
      initialIssue: "Commercial breach of contract & partnership freeze",
    },
    telephonySpecs: {
      avgLatency: 365,
      protocol: "HIPAA / Bar Rule Compliant TLS",
      sentiment: "Professional / High Stakes",
      confidence: "99.5%",
    },
    finalExtraction: [
      { label: "Prospective Client", value: "Elena Rostova (Apex Ventures LLC)" },
      { label: "Matter Type", value: "Commercial Partnership Dispute / $1.2M Claim" },
      { label: "Opposing Party", value: "Vanguard Retail Partners Inc." },
      { label: "Conflict Check", value: "PASSED: Zero conflicts in Clio database", badgeColor: "emerald" },
      { label: "Consultation Slot", value: "Tomorrow at 10:30 AM EST with Partner David Vance" },
      { label: "Retainer Packet", value: "DocuSign E-Signature dispatched to elena@apexv.com" },
    ],
    crmResult: {
      platform: "Clio Manage & Clio Grow",
      recordId: "MAT-2026-781",
      actionSummary: "New Matter Opened, Conflict Screen Cleared & Partner Calendar Synced",
      dispatchedTo: "Partner David Vance (Calendar Reserved)",
    },
    dialog: [
      {
        id: "legal-1",
        role: "agent",
        speaker: "Callvea AI (Sterling & Croft LLP)",
        text: "Good afternoon. You've reached Sterling & Croft Legal Counsel. I am the firm's confidential client intake specialist. Are you calling regarding an existing matter or seeking new representation?",
        timestamp: "00:02",
        latencyMs: 340,
      },
      {
        id: "legal-2",
        role: "caller",
        speaker: "Elena Rostova",
        text: "Hello, I need immediate counsel. My business partner unilaterally froze our company accounts and breached our operating agreement yesterday. We have over $1.2 million at stake.",
        timestamp: "00:09",
      },
      {
        id: "legal-3",
        role: "agent",
        speaker: "Callvea AI (Sterling & Croft LLP)",
        text: "I understand the urgency and confidentiality of this commercial dispute, Elena. To immediately perform an automated conflict check against our firm registry, could you state your full legal entity and the opposing parties involved?",
        timestamp: "00:15",
        latencyMs: 382,
        extractedEntity: {
          label: "Matter Scope",
          value: "$1.2M Partnership Dispute",
          type: "intent",
        },
      },
      {
        id: "legal-4",
        role: "caller",
        speaker: "Elena Rostova",
        text: "My company is Apex Ventures LLC, and the opposing party is Vanguard Retail Partners and Arthur Pendelton.",
        timestamp: "00:22",
        extractedEntity: {
          label: "Conflict Target",
          value: "Vanguard Retail Partners / A. Pendelton",
          type: "urgency",
        },
      },
      {
        id: "legal-5",
        role: "agent",
        speaker: "Callvea AI (Sterling & Croft LLP)",
        text: "Thank you. Our database conflict verification has passed with zero active conflicts. Senior Partner David Vance specializes in expedited injunctions for commercial matters. He has an open consultation tomorrow at 10:30 AM Eastern. Shall I secure that calendar hold for you?",
        timestamp: "00:29",
        latencyMs: 395,
        crmAction: {
          system: "Clio API Conflict Engine",
          action: "Conflict Clearance: Negative Matches",
          status: "confirmed",
        },
      },
      {
        id: "legal-6",
        role: "caller",
        speaker: "Elena Rostova",
        text: "Yes, 10:30 AM tomorrow works perfectly. My email is elena@apexventures.com and phone is 212-674-9031.",
        timestamp: "00:36",
        extractedEntity: {
          label: "Contact Email",
          value: "elena@apexventures.com",
          type: "contact",
        },
      },
      {
        id: "legal-7",
        role: "agent",
        speaker: "Callvea AI (Sterling & Croft LLP)",
        text: "Your confidential strategy consultation is confirmed for tomorrow at 10:30 AM with David Vance. I have sent the intake brief and video conference link to your email. We look forward to assisting you.",
        timestamp: "00:42",
        latencyMs: 350,
        crmAction: {
          system: "Clio Grow + Google Calendar",
          action: "Matter Created, Calendar Invitation Dispatched",
          status: "confirmed",
        },
      },
    ],
  },
  {
    id: "dental-reschedule",
    title: "Dental Clinic Reschedule & Triage",
    category: "Healthcare & Dental",
    badge: "HIPAA Compliant",
    caller: {
      name: "Sarah Jenkins",
      phone: "+1 (312) 555-0199",
      location: "Chicago, IL",
      initialIssue: "Rescheduling root canal & post-op sensitivity question",
    },
    telephonySpecs: {
      avgLatency: 338,
      protocol: "HIPAA BAA Certified Voice Channel",
      sentiment: "Gentle / Reassuring",
      confidence: "99.9%",
    },
    finalExtraction: [
      { label: "Patient Record", value: "Sarah Jenkins (DOB: 04/12/1988)" },
      { label: "Current Booking", value: "Crown Seating - Thursday 2:00 PM" },
      { label: "New Reschedule Slot", value: "Friday 9:30 AM with Dr. Aris" },
      { label: "Clinical Triage", value: "Mild sensitivity managed with prescribed rinse; non-emergency" },
      { label: "PMS Sync", value: "Dentrix Enterprise Slot Updated" },
    ],
    crmResult: {
      platform: "Dentrix & NexHealth",
      recordId: "PT-88204-DNT",
      actionSummary: "Appointment Moved, Pre-Op Instructions Resent via SMS",
      dispatchedTo: "Dr. Aris Chair #2 Calendar Updated",
    },
    dialog: [
      {
        id: "dental-1",
        role: "agent",
        speaker: "Callvea AI (Northshore Dental)",
        text: "Hello, thank you for calling Northshore Modern Dental. I can assist you with appointment bookings, reschedules, or care inquiries. How may I assist you today?",
        timestamp: "00:02",
        latencyMs: 318,
      },
      {
        id: "dental-2",
        role: "caller",
        speaker: "Sarah Jenkins",
        text: "Hi, I have an appointment this Thursday at 2 PM for my crown, but I have a flight conflict. Can I move it to Friday morning instead? Also having slight sensitivity.",
        timestamp: "00:09",
      },
      {
        id: "dental-3",
        role: "agent",
        speaker: "Callvea AI (Northshore Dental)",
        text: "I can help with that right away Sarah. For security, could you confirm your date of birth, and is the sensitivity mild to cold or sharp and throbbing?",
        timestamp: "00:15",
        latencyMs: 345,
        extractedEntity: {
          label: "Symptom Triage",
          value: "Post-prep sensitivity assessment",
          type: "urgency",
        },
      },
      {
        id: "dental-4",
        role: "caller",
        speaker: "Sarah Jenkins",
        text: "Date of birth is April 12, 1988. It's just slight cold sensitivity, nothing throbbing at all.",
        timestamp: "00:22",
        extractedEntity: {
          label: "Patient DOB",
          value: "04/12/1988",
          type: "contact",
        },
      },
      {
        id: "dental-5",
        role: "agent",
        speaker: "Callvea AI (Northshore Dental)",
        text: "Thank you Sarah, verified. Minor sensitivity to cold is normal after temporary crown placement. For Friday, Dr. Aris has an opening at 9:30 AM or 11:15 AM. Would 9:30 AM work best for you?",
        timestamp: "00:28",
        latencyMs: 355,
        extractedEntity: {
          label: "Available Slots",
          value: "Friday 9:30 AM & 11:15 AM",
          type: "time",
        },
      },
      {
        id: "dental-6",
        role: "caller",
        speaker: "Sarah Jenkins",
        text: "9:30 AM on Friday is perfect. Let's do that!",
        timestamp: "00:33",
        extractedEntity: {
          label: "Selected Slot",
          value: "Friday @ 9:30 AM",
          type: "time",
        },
      },
      {
        id: "dental-7",
        role: "agent",
        speaker: "Callvea AI (Northshore Dental)",
        text: "You are all set! Your crown appointment is rescheduled to Friday at 9:30 AM with Dr. Aris. I have released your Thursday slot in Dentrix and texted your confirmation. Have a great flight!",
        timestamp: "00:39",
        latencyMs: 332,
        crmAction: {
          system: "Dentrix Enterprise PMS",
          action: "Schedule Updated & Slot Reallocated",
          status: "confirmed",
        },
      },
    ],
  },
];

export const SOLUTIONS_DATA = [
  {
    title: "24/7 Inbound Call Receptionist",
    tagline: "Zero Busy Signals. First-Ring Resolution.",
    description:
      "Eliminate missed calls and expensive after-hours answering bureaus. Callvea answers instantly with human-natural inflection, understands complex inquiries, and resolves caller needs 24 hours a day, 365 days a year.",
    metrics: "< 400ms turnaround · 100% pickup rate",
    iconName: "PhoneCall",
    badge: "Core Telephony",
    highlight: "Never sends high-intent callers to voicemail purgatory.",
  },
  {
    title: "Intelligent Appointment Engine",
    tagline: "Direct 2-Way Calendar & CRM Synchronization",
    description:
      "Native calendar integration with ServiceTitan, Jobber, Clio, Athena, HubSpot, and Google Calendar. Callvea queries live capacity, enforces travel buffers, collects deposits, and writes confirmed bookings in real time.",
    metrics: "2-way slot locking · 0 double bookings",
    iconName: "CalendarCheck2",
    badge: "Scheduling",
    highlight: "Autonomous rescheduling, cancellations, and pre-op reminders.",
  },
  {
    title: "Inbound Lead Triage & Qualification",
    tagline: "Instant Scoring & Real-Time Deal Routing",
    description:
      "Ask bespoke discovery questions, filter out unsolicited solicitations, score prospect budgets, and immediately alert your revenue team via Slack, SMS, or webhook when an enterprise-tier lead calls.",
    metrics: "99.4% intent accuracy · Instant Slack alerts",
    iconName: "Filter",
    badge: "Pipeline Protection",
    highlight: "Custom scoring algorithms tailored to your exact ICP.",
  },
  {
    title: "Omnichannel Chatbot Fallback",
    tagline: "Synchronized Voice, Webchat & WhatsApp",
    description:
      "Give your customers the flexibility to switch seamlessly between a phone call, website widget, and WhatsApp. Context is unified so callers never repeat themselves across touchpoints.",
    metrics: "Unified session memory · Multi-platform",
    iconName: "MessageSquareText",
    badge: "Omnichannel",
    highlight: "Automatic SMS follow-up if a voice call drops or requires links.",
  },
  {
    title: "Human Warm-Transfer Escalation",
    tagline: "Fail-Safe Routing With Instant Context Briefing",
    description:
      "When a conversation hits critical thresholds or caller requests a human manager, Callvea performs a whisper-transfer to your on-call team, briefing them in 5 seconds with caller name, issue, and history before connecting.",
    metrics: "Zero-drop warm transfer · Whisper briefing",
    iconName: "UserCheck",
    badge: "Fail-Safe Safety",
    highlight: "Configurable urgency rules prevent unnecessary off-hours awakenings.",
  },
];

export const INDUSTRIES_DATA = [
  {
    id: "trades",
    name: "Trades & Field Service",
    subhead: "HVAC, Plumbing, Electrical, Roofing",
    painPoint:
      "Contractors lose up to $18,000 every month because emergency calls at 9 PM go to voicemail while homeowners call the next contractor down the Google list.",
    callveaSolution:
      "Answers within 2 rings, classifies emergency vs routine requests, quotes diagnostic pricing, books emergency jobs directly into Jobber/ServiceTitan, and alerts on-call technicians.",
    roiStat: "+$21,400",
    roiLabel: "Avg Monthly Recovered Revenue",
    integrations: ["Jobber", "ServiceTitan", "Housecall Pro", "Zapier"],
    sampleDialogue: {
      caller: "My water heater broke and it's leaking through my living room ceiling!",
      ai: "I'm alerting our on-call tech right now. While I confirm your address at 410 Oak St, please turn off the valve above the heater. Can our emergency team dispatch in 30 minutes?",
    },
  },
  {
    id: "legal",
    name: "Legal & Law Offices",
    subhead: "Personal Injury, Criminal, Family, Corporate",
    painPoint:
      "Prospective high-value retainers call 3 attorneys at once. The first firm that answers, verifies conflicts, and locks the consultation wins the client.",
    callveaSolution:
      "Conducts confidential multi-point intake questionnaires, screens for conflicts of interest against your Clio registry, and places retainer consultations directly on partner calendars.",
    roiStat: "2.4x",
    roiLabel: "Increase in Lead-to-Retained Rate",
    integrations: ["Clio", "MyCase", "LawPay", "Salesforce"],
    sampleDialogue: {
      caller: "I was in an auto collision this afternoon and the other driver's insurer is calling me.",
      ai: "First and foremost, do not sign any release forms. Let's capture the date and precinct number so Partner Vance can review your case during an expedited consultation tomorrow morning.",
    },
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    subhead: "Dental, Specialty Clinics, Urgent Care",
    painPoint:
      "Front desks spend 40% of their workday handling routine rescheduling, insurance inquiries, and directions while in-clinic patients wait at the desk.",
    callveaSolution:
      "Full HIPAA-compliant voice receptionist that triages symptoms, answers prep questions, confirms appointments in Dentrix/Athena, and routes acute clinical emergencies to triage nurses.",
    roiStat: "-65%",
    roiLabel: "Front Desk Administrative Burden",
    integrations: ["AthenaHealth", "Dentrix", "NexHealth", "Kareo"],
    sampleDialogue: {
      caller: "I need to reschedule my Friday crown prep and check if you take MetLife Dental.",
      ai: "Northshore Dental is in-network with MetLife PPO. I can move your crown prep to Monday at 10:00 AM with Dr. Aris. Shall I update your chart?",
    },
  },
  {
    id: "realestate",
    name: "Real Estate & Property",
    subhead: "Property Managers, Brokers, Commercial Portfolios",
    painPoint:
      "Property managers drown in midnight lockouts and minor repair calls while prospective tenant viewing leads get buried in shared inboxes.",
    callveaSolution:
      "Filters genuine emergency maintenance (burst pipes, gas leaks) from routine requests, verifies lease IDs, schedules self-guided property showings, and syncs work orders to AppFolio/Buildium.",
    roiStat: "100%",
    roiLabel: "After-Hours Inbound Coverage",
    integrations: ["AppFolio", "Buildium", "Yardi", "Follow Up Boss"],
    sampleDialogue: {
      caller: "I'm standing outside Unit 304 and I'd like to tour the 2-bedroom unit today.",
      ai: "Welcome! Unit 304 is available. I've just sent a temporary smart lock PIN code to your phone so you can conduct a verified tour immediately.",
    },
  },
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Forward Your Existing Number",
    description:
      "No need to port or change your business telephone line. Keep your primary carrier (AT&T, Verizon, RingCentral, Vonage) and simply set conditional or after-hours call forwarding to Callvea.",
    badge: "15-Min Setup",
  },
  {
    step: "02",
    title: "Ingest Your Business Knowledge",
    description:
      "Upload your service pricing, technician territories, FAQs, doctor schedules, and intake questions. Our enterprise LLM orchestrator indexes your operational rules with strict accuracy guardrails.",
    badge: "Zero-Hallucination RAG",
  },
  {
    step: "03",
    title: "Configure Guardrails & Routing",
    description:
      "Define exactly when the AI acts autonomously, when appointments are booked, and when emergency calls trigger an immediate warm phone transfer to on-call staff with whisper context.",
    badge: "Deterministic Logic",
  },
  {
    step: "04",
    title: "Go Live in 48 Hours",
    description:
      "Deploy with 24/7 coverage. Access your client dashboard to view live analytics, structured JSON entity feeds, call transcripts, audio recordings, and direct CRM sync verification.",
    badge: "Full Production SLA",
  },
];

export const INTEGRATIONS_LIST = [
  { name: "ServiceTitan", category: "Field Service" },
  { name: "Jobber", category: "Field Service" },
  { name: "HubSpot", category: "CRM" },
  { name: "Salesforce", category: "Enterprise CRM" },
  { name: "Clio", category: "Legal Practice" },
  { name: "AthenaHealth", category: "EHR / Medical" },
  { name: "Google Calendar", category: "Scheduling" },
  { name: "Microsoft Outlook", category: "Scheduling" },
  { name: "Dentrix", category: "Dental PMS" },
  { name: "AppFolio", category: "Property Tech" },
  { name: "Slack", category: "Team Alerts" },
  { name: "WhatsApp", category: "Messaging" },
  { name: "Zapier", category: "Automation" },
  { name: "Twilio", category: "Telephony Backbone" },
];

export const COMPARISON_ROWS = [
  {
    feature: "Average Response Time",
    voicemail: "Hours or never (80% hang up)",
    answeringBureau: "30 - 90 seconds hold time",
    callvea: "Sub-500ms first ring pickup",
  },
  {
    feature: "24/7/365 After-Hours Availability",
    voicemail: "Passive recording only",
    answeringBureau: "Expensive surcharges ($2+/min)",
    callvea: "Native 24/7 unlimited concurrent calls",
  },
  {
    feature: "Deep 2-Way CRM & Calendar Sync",
    voicemail: "None (manual transcription)",
    answeringBureau: "Messy emails or unformatted notes",
    callvea: "Direct real-time API booking & updates",
  },
  {
    feature: "Complex Knowledge & FAQ Handling",
    voicemail: "None",
    answeringBureau: "Basic scripted operators reading rigid cards",
    callvea: "Context-aware enterprise knowledge reasoning",
  },
  {
    feature: "Emergency Warm Transfer with Whisper Briefing",
    voicemail: "Impossible",
    answeringBureau: "Cold blind transfer or generic paging",
    callvea: "Smart whisper transfer with live issue summary",
  },
  {
    feature: "Cost Efficiency",
    voicemail: "$0 upfront (lost $10k+ in leads)",
    answeringBureau: "$3,000 - $6,000 / month",
    callvea: "80% lower cost per handled call",
  },
  {
    feature: "Concurrency (Simultaneous Callers)",
    voicemail: "Busy signal or queued voicemail",
    answeringBureau: "Limited staff, caller hold queues",
    callvea: "Infinite scale — handles 100 calls at once",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Do we have to change or port our existing business phone number?",
    answer:
      "Not at all. You keep your existing carrier, phone lines, and hardware. We simply provide you with a dedicated forwarding target. You can set conditional forwarding (e.g. forward after 3 rings during business hours) or full schedule-based forwarding (e.g. all nights and weekends automatically route to Callvea).",
  },
  {
    question: "How does Callvea prevent hallucinations or quoting wrong pricing?",
    answer:
      "Callvea operates on a dual-engine architecture: an enterprise Retrieval-Augmented Generation (RAG) system paired with deterministic rule guardrails. If a caller asks about a service or price not in your verified knowledge base, Callvea is hard-coded to state that human approval is required and seamlessly captures their contact info or initiates a warm staff transfer.",
  },
  {
    question: "What is the typical turn-taking response latency?",
    answer:
      "Our telephony stack delivers turn-taking latency between 320ms and 450ms over SIP and WebRTC. Callers experience natural, immediate human cadence without the robotic 2-3 second awkward pauses common in naive AI wrappers.",
  },
  {
    question: "How does human warm-transfer work in an emergency?",
    answer:
      "When a caller exhibits severe urgency (e.g., burst pipes, commercial legal freeze, acute symptoms), Callvea dials your on-call phone in seconds. Before connecting the caller, Callvea whispers a 4-second audio summary to your staff member: 'Marcus Vance calling regarding active basement flooding at 742 Evergreen.' Once you press 1, the caller is patched through seamlessly.",
  },
  {
    question: "Is Callvea compliant with HIPAA and legal confidentiality standards?",
    answer:
      "Yes. For healthcare practices, we provide signed Business Associate Agreements (BAAs), SOC-2 Type II audited data transmission, and end-to-end encryption for voice payloads and transcription archives. Sensitive patient identifiers and legal conflict records are never used for model training.",
  },
  {
    question: "How long does onboarding and rollout take?",
    answer:
      "Standard deployments go live in 48 to 72 hours. Our team ingests your documents, sets up your CRM webhooks, and runs simulated test calls with your staff before flipping the live switch.",
  },
];
