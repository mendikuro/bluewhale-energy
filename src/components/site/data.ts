import { asset } from "@/lib/paths";

export const COMPANY = {
  name: "BlueWhale Energy Services",
  legalName: "BlueWhale Energy Services Nigeria Limited",
  tagline: "Innovating Energy Solutions",
  email: "info@blue-whale.com.ng",
  phone: "+234 (0) 803 310 6002",
  phoneHref: "+2348033106002",
  address:
    "New Road, Plot 13, Road 7, 2nd Avenue Rumuakania II, Off Ada George, Port Harcourt, Rivers State, Nigeria",
  hours: "Mon – Fri: 8:00 AM – 6:00 PM · 24/7 Emergency Response",
  incorporated: "2024",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Core Services", href: "#services" },
  { label: "Extended Capabilities", href: "#capabilities" },
  { label: "HSE", href: "#hse" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    id: "well-intervention",
    index: "01",
    title: "Well Intervention",
    short:
      "Restoring and enhancing well productivity with precision tooling, certified crews and minimal downtime.",
    images: [
      {
        src: asset("/images/well-coiled-tubing.jpg"),
        alt: "Coiled tubing unit with tubing reel rigged up at a wellsite",
        tag: "Coiled Tubing",
        pos: "object-[46%_68%]",
      },
      {
        src: asset("/images/well-slickline.jpg"),
        alt: "Slickline and electric line unit with mast rigged up over a wellhead",
        tag: "Slickline · E-Line",
        pos: "object-[55%_42%]",
      },
    ],
    items: [
      {
        name: "Wellhead Maintenance",
        desc: "Inspection, greasing, pressure testing and repair of Xmas trees and wellhead assemblies to OEM standards.",
      },
      {
        name: "Slickline Operations",
        desc: "Full-service slickline for plugging, setting, retrieving and flow control across land and swamp locations.",
      },
      {
        name: "Electric Wireline",
        desc: "Logging, perforation and downhole data acquisition with calibrated surface units and experienced engineers.",
      },
      {
        name: "Coil Tubing & Pumping",
        desc: "Cleanouts, nitrogen kickoff, acid stimulation and cement support with integrated pumping spreads.",
      },
    ],
  },
  {
    id: "drilling-completions",
    index: "02",
    title: "Drilling & Completions",
    short:
      "From spud to first oil — engineering discipline and reliable equipment at every phase of the well lifecycle.",
    images: [
      {
        src: asset("/images/rig-crew.jpg"),
        alt: "Drilling crews working on the rig floor handling drill pipe",
        pos: "object-center",
      },
    ],
    items: [
      {
        name: "Wellbore Cleanup",
        desc: "Remedial services, casing scrapes and displacement programs that de-risk completions installation.",
      },
      {
        name: "Completions Design",
        desc: "Sand control, artificial lift selection and completion hardware specification tailored to reservoir needs.",
      },
      {
        name: "Cementing Support",
        desc: "Primary and remedial cementing with lab-tested slurry design and real-time job monitoring.",
      },
      {
        name: "Fishing & Recovery",
        desc: "Specialized fishing tools and procedures to recover stuck equipment and restore well integrity fast.",
      },
    ],
  },
  {
    id: "facilities-engineering",
    index: "03",
    title: "Facilities Engineering",
    short:
      "Design, construction and lifecycle maintenance of production facilities built to international codes.",
    images: [
      {
        src: asset("/images/facilities-module.jpg"),
        alt: "Engineered process module with piping, valves and structural steel",
        pos: "object-center",
      },
    ],
    items: [
      {
        name: "Design & Engineering",
        desc: "FEED and detailed design for flowstations, manifolds and process facilities by licensed engineers.",
      },
      {
        name: "Construction & Installation",
        desc: "Civil, mechanical, electrical and instrumentation (CME&I) execution with strict QC hold points.",
      },
      {
        name: "Operations & Maintenance",
        desc: "Preventive and corrective maintenance programs that raise uptime and extend asset life.",
      },
      {
        name: "Pipeline Integrity",
        desc: "Hydrotesting, pigging, coating repair and integrity assessment for flowlines and trunklines.",
      },
    ],
  },
  {
    id: "procurement",
    index: "04",
    title: "Procurement & Supply",
    short:
      "Sourcing certainty for critical operations — genuine OEM materials with full traceability and QA.",
    images: [
      {
        src: asset("/images/procurement-supply-2.jpg"),
        alt: "Crane loading oilfield equipment onto a delivery truck",
        pos: "object-[60%_center]",
      },
    ],
    items: [
      {
        name: "OCTG & Line Pipe",
        desc: "API-certified casing, tubing and line pipe with mill certificates and third-party inspection.",
      },
      {
        name: "Valves, Pumps & Fittings",
        desc: "Actuated and manual valves, centrifugal pumps and flanges from audited global manufacturers.",
      },
      {
        name: "Industrial Chemicals",
        desc: "Production chemicals — demulsifiers, corrosion inhibitors, biocides — dosed and monitored on site.",
      },
      {
        name: "Instrumentation & Spares",
        desc: "Gauges, transmitters, control valves and critical spares with ex-stock options in Port Harcourt.",
      },
    ],
  },
];

export const CAPABILITIES = [
  {
    icon: "ship",
    title: "Marine & Offshore Support",
    desc: "Vessel chartering, crew boats, barges and offshore logistics coordinated with full DP and marine assurance.",
  },
  {
    icon: "leaf",
    title: "Environmental Services",
    desc: "Waste management, spill response, bioremediation and site restoration compliant with NOSDRA regulations.",
  },
  {
    icon: "crane",
    title: "Equipment Supply & Leasing",
    desc: "Rental of compressors, generators, welding plants, lifting gear and specialized oilfield tooling.",
  },
  {
    icon: "wrench",
    title: "Fabrication & Construction",
    desc: "Structural steel, piping skids, tank repairs and platform upgrades executed in-house or on site.",
  },
  {
    icon: "fuel",
    title: "Petroleum Products Supply",
    desc: "Reliable sourcing, storage and distribution of AGO, PMS and DPK with quality verification at every transfer.",
  },
  {
    icon: "users",
    title: "Manpower & Training",
    desc: "Certified crews, secondment and HSE training programs that raise competence across your operation.",
  },
];

export const HSE_POINTS = [
  {
    title: "Goal Zero Mindset",
    desc: "Every job starts and ends with zero harm to people, assets and the environment — no exceptions, no shortcuts.",
  },
  {
    title: "Certified Management System",
    desc: "HSE-MS aligned to ISO 9001, ISO 14001 and ISO 45001, audited annually and embedded in daily field routines.",
  },
  {
    title: "Stop Work Authority",
    desc: "Every employee and contractor holds unconditional authority to stop any task they believe is unsafe.",
  },
  {
    title: "Journey & Permit Control",
    desc: "Digital journey management, permit-to-work and toolbox talks on 100% of tasks, onshore and offshore.",
  },
];

export const WHY_US = [
  {
    title: "Local Expertise, Global Standards",
    desc: "Niger Delta know-how delivered under API, ASME and ISO frameworks — the best of both worlds on every scope.",
  },
  {
    title: "Rapid Mobilization",
    desc: "Pre-staged equipment in Port Harcourt means crews and tools on your location within 24–72 hours.",
  },
  {
    title: "Transparent Reporting",
    desc: "Daily progress reports, photo documentation and open cost tracking — you always know where your project stands.",
  },
  {
    title: "One Integrated Partner",
    desc: "Intervention, construction, marine and procurement under one contract: fewer interfaces, less risk, faster delivery.",
  },
];

export const SERVICE_OPTIONS = [
  "Well Intervention",
  "Drilling & Completions",
  "Facilities Engineering",
  "Procurement & Supply",
  "Marine & Offshore Support",
  "Environmental Services",
  "Equipment Leasing",
  "Fabrication & Construction",
  "Petroleum Products Supply",
  "Manpower & Training",
  "Other",
];
