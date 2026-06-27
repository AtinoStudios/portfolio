import {
  BriefcaseBusiness,
  Code2,
  Gamepad2,
  Gauge,
  GitBranch,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

export const site = {
  name: "Jeevan Bohara",
  title: "Unity Game Developer",
  headline: "Top Unity Game Developer in Nepal",
  location: "Nepal",
  email: "hello@atinostudios.com",
  github: "https://github.com/AtinoStudios",
  repo: "https://github.com/AtinoStudios/portfolio.git",
  availability: "Open for Unity game projects, prototypes, and technical leadership.",
  url: "https://portfolio.atinostudios.com",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export const metrics = [
  { value: "60 FPS", label: "mobile-first performance targets" },
  { value: "Unity", label: "gameplay, tooling, UI, and optimization" },
  { value: "Nepal", label: "remote-ready development partner" },
  { value: "C#", label: "clean systems built for iteration" },
];

export const specialties = [
  {
    title: "Gameplay Engineering",
    description:
      "Responsive controllers, combat feel, camera logic, UI flow, save systems, and prototype-to-production architecture.",
    icon: Gamepad2,
  },
  {
    title: "Unity Production",
    description:
      "Practical pipelines for scenes, prefabs, ScriptableObjects, Addressables, build settings, and team handoff.",
    icon: Wrench,
  },
  {
    title: "Mobile Optimization",
    description:
      "Profiling, memory budgets, asset compression, frame pacing, device tiers, and build size control for Android releases.",
    icon: Gauge,
  },
  {
    title: "Technical Leadership",
    description:
      "Clear planning, feature scoping, code reviews, milestone delivery, and calm decisions when projects get complex.",
    icon: ShieldCheck,
  },
];

export const projects = [
  {
    slug: "himalayan-runner",
    title: "Himalayan Runner",
    category: "Mobile action prototype",
    year: "2026",
    image: "/images/project-himalayan-runner.png",
    summary:
      "A fast vertical-slice runner concept focused on readable motion, satisfying pickup loops, and Android performance.",
    description:
      "Himalayan Runner explores a sharp mobile action loop: clean movement, terrain rhythm, simple upgrade goals, and quick restarts. The build is structured around reusable player states, lightweight hazards, and mobile-friendly effects.",
    challenge:
      "The core challenge was keeping moment-to-moment action readable on small screens while preserving a premium sense of speed.",
    outcome:
      "A production-ready prototype foundation with stable frame targets, extensible level chunks, and designer-friendly tuning data.",
    stack: ["Unity", "C#", "URP", "Cinemachine", "Addressables"],
    metrics: ["60 FPS target", "Android first", "Reusable chunk system"],
    highlights: [
      "Input buffering and forgiving jump windows for better feel.",
      "Object pooling for hazards, pickups, and moment effects.",
      "Scriptable tuning assets for pace, reward density, and difficulty.",
    ],
  },
  {
    slug: "arena-combat-framework",
    title: "Arena Combat Framework",
    category: "Third-person combat systems",
    year: "2026",
    image: "/images/project-arena-combat.png",
    summary:
      "A modular action-combat framework for prototyping melee encounters, hit reactions, camera locks, and enemy waves.",
    description:
      "Arena Combat Framework is a Unity systems package for building expressive third-person combat. It separates ability data, animation events, hit detection, AI waves, and UI feedback so teams can iterate fast.",
    challenge:
      "Combat systems can become tangled quickly, especially when animation, VFX, damage windows, and camera feedback all meet.",
    outcome:
      "A clean foundation for rapid combat experiments with reusable ability definitions and predictable scene setup.",
    stack: ["Unity", "C#", "Animator", "Cinemachine", "ScriptableObjects"],
    metrics: ["Data-driven abilities", "Wave spawner", "Camera lock modes"],
    highlights: [
      "Ability timing windows modeled outside scene objects.",
      "Damage and hit-pause events separated from animation clips.",
      "Debug overlays for range, state, and active combat windows.",
    ],
  },
  {
    slug: "mobile-performance-toolkit",
    title: "Mobile Performance Toolkit",
    category: "Unity optimization",
    year: "2025",
    image: "/images/project-mobile-optimizer.png",
    summary:
      "A practical toolkit for profiling scenes, reducing build size, and keeping Unity projects smooth on low-to-mid devices.",
    description:
      "Mobile Performance Toolkit collects practical systems for Unity production: scene budget checks, texture compression guidelines, pooling templates, and runtime quality tiers.",
    challenge:
      "Mobile games need strong visual feedback while staying inside strict memory, battery, and frame-time constraints.",
    outcome:
      "A repeatable optimization workflow that helps teams find expensive content early and keep releases predictable.",
    stack: ["Unity Profiler", "C#", "URP", "Addressables", "Android"],
    metrics: ["Memory budgets", "Build-size checks", "Device tiers"],
    highlights: [
      "Frame-time checklist for CPU, GPU, physics, and UI.",
      "Addressable grouping strategy for lean installs.",
      "Quality presets mapped to actual device capability.",
    ],
  },
  {
    slug: "multiplayer-gameplay-lab",
    title: "Multiplayer Gameplay Lab",
    category: "Network-ready prototypes",
    year: "2025",
    image: "/images/project-multiplayer-lab.png",
    summary:
      "A multiplayer prototyping space for lobby flow, shared objectives, replicated actions, and clean gameplay state.",
    description:
      "Multiplayer Gameplay Lab focuses on collaboration-friendly systems for small online action games: lobby states, session flow, synchronized objectives, and resilient scene transitions.",
    challenge:
      "Networked prototypes need to prove the fun while still respecting authority, latency, and recovery from disconnects.",
    outcome:
      "A compact lab project that makes multiplayer feature decisions visible before a full production commitment.",
    stack: ["Unity", "C#", "Netcode", "Relay-ready flow", "State machines"],
    metrics: ["Lobby flow", "Shared objectives", "Reconnect planning"],
    highlights: [
      "Clear separation between local feedback and network authority.",
      "Session-state model designed for menu-to-match transitions.",
      "Test scenes for objective sync, player spawn, and match reset.",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Prototype the feel",
    text: "Start with controls, camera, pacing, and feedback so the game loop has energy before it has bulk.",
  },
  {
    step: "02",
    title: "Build clean systems",
    text: "Move proven mechanics into readable C# architecture that designers and future developers can trust.",
  },
  {
    step: "03",
    title: "Profile early",
    text: "Treat performance as a production feature: frame-time, memory, assets, loading, and device tiers.",
  },
  {
    step: "04",
    title: "Ship with clarity",
    text: "Package builds, document handoff, and keep the deployment path ready for stores, testers, or publishers.",
  },
];

export const services = [
  {
    title: "Unity Game Prototype",
    price: "Focused sprint",
    description:
      "A playable prototype or vertical slice that proves core mechanics, movement, combat, UI, and target platform direction.",
    includes: ["Gameplay loop", "Input and camera", "Prototype UI", "Build delivery"],
  },
  {
    title: "Gameplay Systems",
    price: "Feature build",
    description:
      "Production-minded systems for player controllers, combat, inventory, progression, save data, missions, or tools.",
    includes: ["C# architecture", "Unity integration", "Designer tuning", "Documentation"],
  },
  {
    title: "Mobile Optimization",
    price: "Performance pass",
    description:
      "Profiling and optimization for Android-focused Unity games that need stable frame pacing and cleaner memory usage.",
    includes: ["Profiler report", "Asset budgets", "Code fixes", "Device tiers"],
  },
  {
    title: "Technical Review",
    price: "Project audit",
    description:
      "A calm review of Unity project structure, risks, code quality, performance, build setup, and launch readiness.",
    includes: ["Risk map", "Code review", "Action plan", "Handoff call"],
  },
];

export const experience = [
  {
    period: "2026",
    title: "Unity Developer and Portfolio Lead",
    detail:
      "Building polished gameplay showcases, technical demos, and production-ready systems for mobile and action game clients.",
  },
  {
    period: "2025",
    title: "Mobile Game Systems Focus",
    detail:
      "Deepened work around Android builds, URP optimization, Addressables, scene budgets, and reusable gameplay tooling.",
  },
  {
    period: "2024",
    title: "Gameplay Prototyping",
    detail:
      "Delivered fast playable loops across movement, combat, cameras, UI, and small team development workflows.",
  },
  {
    period: "Earlier",
    title: "Foundation in Code and Game Design",
    detail:
      "Built the C#, Unity, problem-solving, and iteration habits that support reliable production work today.",
  },
];

export const toolbelt = [
  "Unity",
  "C#",
  "URP",
  "Cinemachine",
  "Addressables",
  "ScriptableObjects",
  "Android",
  "Git",
  "Profiling",
  "UI Toolkit",
  "Netcode",
  "Vercel",
];

export const contactMethods = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "AtinoStudios",
    href: site.github,
    icon: GitBranch,
  },
  {
    label: "Location",
    value: "Nepal, remote-ready",
    href: "/contact",
    icon: MapPin,
  },
];

export const proofPoints = [
  {
    title: "Production mindset",
    text: "Readable architecture, practical scopes, and handoff notes that help projects keep moving.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Game feel first",
    text: "Inputs, camera, timing, animation hooks, UI feedback, and difficulty tuning are treated as one system.",
    icon: Sparkles,
  },
  {
    title: "Team-friendly delivery",
    text: "Clear communication, Git-based collaboration, reviewable milestones, and clean builds for testers.",
    icon: Users,
  },
  {
    title: "Technical depth",
    text: "C# patterns, profiling, platform constraints, and tooling decisions are part of the creative process.",
    icon: Code2,
  },
];

export const recognition = [
  {
    icon: Trophy,
    title: "Nepal-based Unity specialist",
    text: "A focused developer profile for teams looking for senior Unity thinking from Nepal.",
  },
  {
    icon: Send,
    title: "Remote collaboration",
    text: "Prepared for async updates, milestone demos, GitHub workflows, and Vercel-ready web presentation.",
  },
];
