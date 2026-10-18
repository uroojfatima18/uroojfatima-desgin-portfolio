export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  gradient: string;
  previewImage: string;
  featured: boolean;
  liveUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  timeline: string;
  deliverables: string;
  badge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  highlights: string[];
  popular?: boolean;
  ctaText: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
  metric?: string;
}

export interface SlideDeck {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  tagline: string;
  description: string;
  totalSlides: number;
  stats?: {
    impressions: string;
    reactions: string;
    comments: string;
    reposts: string;
    screenshot: string;
  };
  slides: {
    number: number;
    title: string;
    image: string;
    caption?: string;
  }[];
  tags: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Urooj Fatima",
    role: "Product & UI/UX Designer",
    status: "Available for freelance projects",
    statusAvailable: true,
    location: "Remote / Worldwide",
    bio: "Crafting distinct digital experiences, intuitive interfaces, and high-conversion design systems with relentless attention to craft and detail.",
    email: "uroojf199@gmail.com",
    avatar: "/assets/urooj.jpg",
    stats: [
      { label: "Years Experience", value: "6+" },
      { label: "Completed Projects", value: "48+" },
      { label: "Client Satisfaction", value: "100%" },
      { label: "Design Systems", value: "12+" },
    ],
    socials: [
      { name: "Twitter / X", url: "https://twitter.com", handle: "@uroojfatima" },
      { name: "Dribbble", url: "https://dribbble.com", handle: "uroojfatima" },
      { name: "GitHub", url: "https://github.com", handle: "urooj-design" },
      { name: "LinkedIn", url: "https://linkedin.com", handle: "/in/uroojfatima" },
    ],
  },

  projects: [
    {
      id: "ai-agents-buzzword",
      title: "I Was Building AI Agents Before It Was a Buzzword",
      client: "Urooj Fatima • Personal Brand",
      category: "Social Poster & Brand Story",
      year: "2026",
      tagline: "Bold typography and 3D character design highlighting early AI engineering roots.",
      description:
        "Designed by Urooj Fatima. A high-engagement poster combining bold editorial typography, vibrant 3D character art, and personal brand positioning.",
      overview:
        "This poster was designed to cut through social media noise with bold typography and a playful, confident 3D character persona.",
      challenge:
        "Communicating years of hands-on Agentic AI development without sounding generic or dry.",
      solution:
        "Paired massive display typography with a tactile purple mascot and high-contrast comic accents to maximize viral stop-the-scroll rate.",
      deliverables: ["Graphic Design", "Social Media Poster", "Canva & Figma Typography", "Character Integration"],
      metrics: [
        { label: "Engagement", value: "High Viral" },
        { label: "Style", value: "3D + Editorial" },
        { label: "Platform", value: "LinkedIn / X" },
      ],
      accentColor: "#A855F7",
      gradient: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
      previewImage: "/assets/posters/poster-1.png",
      featured: true,
    },
    {
      id: "ai-agent-7-things",
      title: "Your AI Agent Isn't Broken — It's Missing 7 Things",
      client: "Urooj Fatima • Agentic AI Developer",
      category: "Educational Carousel & Poster",
      year: "2026",
      tagline: "High-contrast purple tech aesthetic addressing critical multi-agent architecture gaps.",
      description:
        "Designed by Urooj Fatima. A hook-driven social poster and carousel cover addressing the top 7 failure points in production AI agents.",
      overview:
        "Created to educate founders and developers on memory, evaluation, guardrails, and tool design in Agentic workflows.",
      challenge:
        "Creating an immediate visual hook that stops technical developers and executives from scrolling.",
      solution:
        "Used a deep purple gradient, oversized cut-out numeral '7', and friendly robot avatar to convey high technical authority with visual polish.",
      deliverables: ["Infographic Cover", "Visual Hierarchy", "Tech Brand Palette", "Social Optimization"],
      metrics: [
        { label: "Topic", value: "Agent Architecture" },
        { label: "Color Tone", value: "Deep Violet" },
        { label: "Format", value: "Carousel Cover" },
      ],
      accentColor: "#7C3AED",
      gradient: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
      previewImage: "/assets/posters/poster-2.jpg",
      featured: true,
    },
    {
      id: "ai-agents-saved-company",
      title: "This Is How AI Agents Saved Your Company",
      client: "Urooj Fatima • Client Acquisition",
      category: "B2B Marketing & Metaphor Art",
      year: "2026",
      tagline: "Powerful visual metaphor illustrating AI agents rescuing businesses from bottlenecks.",
      description:
        "Designed by Urooj Fatima. A sleek 3D metaphor poster demonstrating automated agents lifting business teams out of repetitive manual work.",
      overview:
        "A conversion-focused visual explaining how autonomous automation safeguards company revenue, speed, and accuracy.",
      challenge:
        "Visualizing abstract business concepts (automation, rescue, efficiency) in a dramatic, memorable scene.",
      solution:
        "Crafted a dramatic dark stage with vivid purple chrome figures depicting the rescue metaphor, backed by a direct CTA.",
      deliverables: ["3D Metaphor Design", "B2B Campaign Poster", "Dark Mode Palette", "Conversion Copy Layout"],
      metrics: [
        { label: "Audience", value: "Founders & Execs" },
        { label: "Theme", value: "Dark Chrome 3D" },
        { label: "Goal", value: "Inbound DMs" },
      ],
      accentColor: "#C026D3",
      gradient: "linear-gradient(135deg, #C026D3 0%, #9333EA 100%)",
      previewImage: "/assets/posters/poster-3.png",
      featured: true,
    },
    {
      id: "what-is-jev",
      title: "What is JEV? 400x Cheaper, 200x Faster",
      client: "Urooj Fatima • Tech Breakdown",
      category: "Tech Infographic & Breakdown",
      year: "2026",
      tagline: "Electric purple 3D bot explaining breakthrough token economics and speed benchmarks.",
      description:
        "Designed by Urooj Fatima. Vibrant social tech poster breaking down the revolutionary JEV benchmark with clean metrics.",
      overview:
        "Explaining high-speed, cost-effective agent runtime architectures with energetic 3D aesthetics and clear statistics.",
      challenge:
        "Making complex technical benchmarks (400x cheaper, 200x faster) digestible at a single glance.",
      solution:
        "Contrasting black high-contrast metric pills against electric neon violet curves and an expressive 3D robot character.",
      deliverables: ["Typography Hierarchy", "Tech Infographic", "3D Bot Art Direction", "Viral Post Layout"],
      metrics: [
        { label: "Cost Saving", value: "400x Cheaper" },
        { label: "Speed Uplift", value: "200x Faster" },
        { label: "Aesthetic", value: "Neon Violet" },
      ],
      accentColor: "#9333EA",
      gradient: "linear-gradient(135deg, #9333EA 0%, #A855F7 100%)",
      previewImage: "/assets/posters/poster-4.jpg",
      featured: true,
    },
    {
      id: "ai-voice-notes",
      title: "Still Listening To Your Own Voice Notes? Let AI Turn Them Into Tasks",
      client: "Urooj Fatima • AI Productivity",
      category: "AI Tool Branding & Social Post",
      year: "2026",
      tagline: "Futuristic robot in suit demonstrating audio-to-action agent workflows.",
      description:
        "Designed by Urooj Fatima. Clean futuristic grid aesthetic showcasing AI transforming unorganized voice memos into structured task boards.",
      overview:
        "Designed to communicate voice-to-action automation with a crisp corporate-AI character and high-conversion call-to-action.",
      challenge:
        "Making personal voice note chaos feel instantly solvable through autonomous AI task agents.",
      solution:
        "Juxtaposed a sleek headphone-wearing business robot with a clean blue-lit grid and sharp dual-tone headline typography.",
      deliverables: ["Graphic Design", "Social Media Poster", "3D Bot Character", "Futuristic Grid Layout"],
      metrics: [
        { label: "CTA", value: "Dm 'AI'" },
        { label: "Tone", value: "Futuristic Clean" },
        { label: "Platform", value: "Instagram / LinkedIn" },
      ],
      accentColor: "#2563EB",
      gradient: "linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)",
      previewImage: "/assets/posters/poster-voice-notes.png",
      featured: true,
    },
    {
      id: "octopus-multi-agent",
      title: "You Don't Have To Carry It All — Let Your Agent Hold Some",
      client: "Urooj Fatima • Agentic Workflows",
      category: "Multi-Agent Automation & 3D Metaphor",
      year: "2026",
      tagline: "Eight arms, one brain. 3D character demonstrating autonomous multi-task execution.",
      description:
        "Designed by Urooj Fatima. High-impact dark blue 3D visual featuring an octopus handling multi-threaded workloads simultaneously.",
      overview:
        "Visualizing multi-agent parallel execution where one agent coordinates research, files, messaging, and reporting at once.",
      challenge:
        "Explaining asynchronous multi-tool execution in a visually memorable and instantly relatable manner.",
      solution:
        "Designed a tactile 3D blue octopus holding a laptop, folders, stylus, smartphone, and tablet with hand-drawn annotations.",
      deliverables: ["3D Mascot Design", "Dark Stage Lighting", "Feature Mapping", "Conversion Poster"],
      metrics: [
        { label: "CTA", value: "Dm 'OCTOPUS'" },
        { label: "Theme", value: "Multi-Agent 3D" },
        { label: "Focus", value: "Parallel Automation" },
      ],
      accentColor: "#1D4ED8",
      gradient: "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)",
      previewImage: "/assets/posters/poster-octopus.jpg",
      featured: true,
    },
    {
      id: "lead-ghosted-followup",
      title: "Lead Ghosted You? Let AI Follow Up",
      client: "Urooj Fatima • Sales Automation",
      category: "Conversion Marketing & CRM Automation",
      year: "2026",
      tagline: "Glowing UI timeline depicting automated multi-touch lead recovery.",
      description:
        "Designed by Urooj Fatima. Neon blue glowing dashboard cards showcasing Day 1, Day 3, and Day 7 follow-up sequences.",
      overview:
        "Demonstrating autonomous lead nurturing pipelines that revive cold leads and book meetings without manual outreach.",
      challenge:
        "Illustrating an automated follow-up schedule without making the graphic feel like an administrative spreadsheet.",
      solution:
        "Combined a dynamic levitating 3D bot with glowing glassmorphism status cards connected by electric blue energy trails.",
      deliverables: ["SaaS Product Marketing", "Glowing UI Badges", "3D Tech Mascot", "B2B Social Campaign"],
      metrics: [
        { label: "CTA", value: "Dm 'LEAD'" },
        { label: "Style", value: "Glowing Glass UI" },
        { label: "Channel", value: "Sales Pipeline" },
      ],
      accentColor: "#0284C7",
      gradient: "linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)",
      previewImage: "/assets/posters/poster-lead-followup.jpg",
      featured: true,
    },
    {
      id: "shape-ai-future",
      title: "Don't Just Follow AI Trends — Be The One Shaping The Future",
      client: "Urooj Fatima • Thought Leadership",
      category: "Editorial Concept & Personal Branding",
      year: "2026",
      tagline: "Stand out from the crowd: contrasting blue umbrella visual metaphor.",
      description:
        "Designed by Urooj Fatima. Striking contrast between monochromatic conformity and vibrant AI innovation leadership.",
      overview:
        "An inspirational brand identity visual reinforcing proactive leadership in AI adoption rather than passive trend following.",
      challenge:
        "Creating an emotive, editorial-grade visual metaphor that inspires action and reinforces authority.",
      solution:
        "Rendered a smiling robot holding a vibrant cobalt blue umbrella standing out against an ocean of rainy black umbrellas.",
      deliverables: ["Visual Metaphor", "Grid Composition", "Editorial Brand Direction", "Leadership Campaign"],
      metrics: [
        { label: "Theme", value: "Future Leadership" },
        { label: "Composition", value: "Color Contrast" },
        { label: "Impact", value: "Viral Resonance" },
      ],
      accentColor: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
      previewImage: "/assets/posters/poster-ai-trends.jpg",
      featured: true,
    },
  ],

  services: [
    {
      id: "product-design",
      title: "Product (UI/UX) Design",
      description:
        "End-to-end design for web & mobile apps. From user research and wireframing to high-fidelity clickable prototypes that ship.",
      features: [
        "Product architecture & user flows",
        "Interactive prototypes in Figma & Framer",
        "Usability testing & feedback synthesis",
        "Developer-ready production specs",
      ],
      timeline: "2 - 6 weeks",
      deliverables: "Figma files, interactive prototypes, design specs",
      badge: "Core Service",
    },
    {
      id: "design-systems",
      title: "Scalable Design Systems",
      description:
        "Atomic, tokenized design systems that unite product managers, designers, and frontend engineers into one high-velocity team.",
      features: [
        "Tokenized color, typography & spacing primitives",
        "Modular components with accessible variants",
        "Documentation & maintenance guidelines",
        "Figma-to-React token mapping",
      ],
      timeline: "3 - 5 weeks",
      deliverables: "Figma library, token JSON files, component guidelines",
      badge: "Enterprise",
    },
    {
      id: "websites-framer",
      title: "Interactive Web & Motion",
      description:
        "Conversion-focused marketing websites and portfolio experiences crafted with modern animations, scroll physics, and sleek typography.",
      features: [
        "Editorial layout and visual direction",
        "Scroll-triggered micro-animations & transitions",
        "Mobile-first responsive engineering",
        "SEO optimization & lightning-fast speed",
      ],
      timeline: "1 - 3 weeks",
      deliverables: "Production Next.js or Framer site, responsive assets",
      badge: "Popular",
    },
    {
      id: "design-advisory",
      title: "Design Advisory & Audits",
      description:
        "Direct guidance for early-stage founders and product teams looking to elevate visual appeal, clarify UX bottlenecks, and drive conversions.",
      features: [
        "Full UX heuristic evaluation",
        "Conversion rate optimization (CRO) reviews",
        "Design team hiring & leveling roadmap",
        "Weekly asynchronous design critiques",
      ],
      timeline: "Flexible / Monthly",
      deliverables: "Video teardown Loom audits, actionable Figma boards",
    },
  ],

  pricing: [
    {
      id: "starter",
      name: "Sprint",
      price: "$3,800",
      period: "per sprint",
      description: "Ideal for early startups needing a polished MVP, high-converting landing page, or urgent design overhaul.",
      highlights: [
        "1 dedicated design focus (Web or App)",
        "Turnaround in 10 business days",
        "High-fidelity Figma files & components",
        "Interactive prototype with animations",
        "Two rounds of revisions included",
        "Direct Slack channel communication",
      ],
      ctaText: "Book Sprint",
    },
    {
      id: "standard",
      name: "Partner",
      price: "$7,500",
      period: "per month",
      description: "Full-stack senior design power embedded in your team. Continuous velocity without the overhead of full-time hiring.",
      highlights: [
        "Ongoing product & feature roadmap design",
        "Complete design system creation & upkeep",
        "Unlimited requests (handled one at a time)",
        "Daily async updates & Figma Loom reviews",
        "Frontend engineering handoff & QA support",
        "Pause or cancel anytime",
      ],
      popular: true,
      ctaText: "Start Partnership",
    },
    {
      id: "custom",
      name: "Bespoke / Advisory",
      price: "Custom",
      period: "project-based",
      description: "Tailored engagements for enterprise migrations, comprehensive rebrands, or executive design leadership.",
      highlights: [
        "Multi-platform system architecture",
        "Full brand overhaul & art direction",
        "Custom 3D / motion web development",
        "Dedicated executive design reviews",
        "Custom SLA & contract terms",
      ],
      ctaText: "Inquire Now",
    },
  ],

  experience: [
    {
      period: "2023 — Present",
      role: "Lead Product Designer",
      company: "Studio Vanguard",
      location: "Berlin / Remote",
      description: "Directing product design for Series A to C SaaS clients across North America and Europe.",
      tags: ["Design Systems", "Web App UX", "Motion", "Leadership"],
    },
    {
      period: "2021 — 2023",
      role: "Senior UI/UX Designer",
      company: "Apex Technologies",
      location: "London, UK",
      description: "Led core dashboard experience and rebuilt token architecture for flagship fintech platform.",
      tags: ["Fintech", "Data Viz", "Figma", "Design Tokens"],
    },
    {
      period: "2019 — 2021",
      role: "Digital Product Designer",
      company: "Monolith Interactive",
      location: "San Francisco / Remote",
      description: "Crafted interactive web applications and award-winning marketing sites for tech innovators.",
      tags: ["Framer", "Interactive Web", "Brand Identity"],
    },
    {
      period: "2017 — 2019",
      role: "Visual Designer",
      company: "Form & Function Lab",
      location: "Hamburg, Germany",
      description: "Designed responsive web interfaces, brand identities, and design guidelines for digital products.",
      tags: ["Typography", "Visual Design", "UI Design"],
    },
  ],

  faq: [
    {
      question: "How does the design process work from kick-off to delivery?",
      answer:
        "We start with a concise discovery session to align on product goals, user personas, and technical constraints. From there, we work in iterative milestones: wireframes & structure -> visual design exploratory -> interactive prototype -> design token handover with detailed engineer specs.",
    },
    {
      question: "What tools do you use for design and prototyping?",
      answer:
        "My primary stack is Figma for core product design, token systems, and collaboration, paired with Framer and Next.js / React for animated high-fidelity prototypes and live production web builds.",
    },
    {
      question: "Can you collaborate directly with our engineering team?",
      answer:
        "Absolutely. I treat developer handoff with the same care as user experience. You'll receive clean token definitions, documented component variants, responsive autolayout, and active QA support in GitHub or Figma.",
    },
    {
      question: "How fast can you start on a new project?",
      answer:
        "Depending on current bandwidth, sprint kick-offs usually happen within 3 to 7 business days. You can submit the project inquiry form to reserve your slot.",
    },
    {
      question: "Do you offer web development alongside design?",
      answer:
        "Yes! For marketing websites and portfolio experiences, I build fast, accessible frontend applications in Next.js, Framer Motion, and modern CSS so the exact animations and aesthetic vision are preserved.",
    },
    {
      question: "What is your revision and feedback policy?",
      answer:
        "Transparent and collaborative. Sprints include structured feedback rounds, while monthly partnership retainers allow continuous adjustments until you are completely satisfied.",
    },
  ],

  testimonials: [
    {
      quote:
        "Lukas completely transformed our product from a messy MVP into a sleek, premium SaaS that our enterprise prospects fall in love with. The attention to detail is world-class.",
      author: "Elena Rostova",
      title: "Co-Founder & CEO",
      company: "Lumina Labs",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      metric: "42% retention uplift",
    },
    {
      quote:
        "Working with Lukas was the best decision we made for our rebrand. The design system he built cut our feature deployment time in half and brought instant visual consistency.",
      author: "Marcus Chen",
      title: "VP of Engineering",
      company: "Hyperion Inc.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      metric: "3x dev velocity",
    },
    {
      quote:
        "His ability to balance complex data density with intuitive, minimalist aesthetics is unmatched. Our investors were blown away by the clarity of the interface.",
      author: "Sophia Lindqvist",
      title: "Chief Product Officer",
      company: "Strata Global",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      metric: "$1.4B managed volume",
    },
  ],

  slideDecks: [
    {
      id: "learn-agentic-ai-2026",
      title: "Want to Learn Agentic AI Before 2026 Ends?",
      subtitle: "Complete 3-Month Roadmap from Foundations to Production",
      category: "Agentic AI & Education",
      date: "October 2026",
      tagline: "A structured 12-week roadmap covering Python, LLMs, Multi-Agent Frameworks & Production MCP.",
      description:
        "Designed by Urooj Fatima. A visual learning breakdown breaking down Agentic AI development into manageable, weekly actionable steps.",
      totalSlides: 5,
      stats: {
        impressions: "1,401 impressions",
        reactions: "27 reactions",
        comments: "8 comments",
        reposts: "2 reposts",
        screenshot: "/assets/stats/slide-stats-2.png",
      },
      slides: [
        {
          number: 1,
          title: "Want to learn Agentic AI Before 2026 end?",
          image: "/assets/slides/agentic-ai/slide-1.png",
          caption: "Cover Slide • Overview of modern frameworks (Claude Code, OpenAI Agent SDK, Google ADK)",
        },
        {
          number: 2,
          title: "Month 1 — Foundations (Weeks 1-4)",
          image: "/assets/slides/agentic-ai/slide-2.png",
          caption: "Python Core, LLM Fundamentals, Tool Use / Function Calling, and RAG Basics",
        },
        {
          number: 3,
          title: "Month 2 — Framework + Core Skills (Weeks 5-8)",
          image: "/assets/slides/agentic-ai/slide-3.png",
          caption: "Agent SDKs, Multi-Agent Systems, Memory & Skills, Guardrails & Evaluation",
        },
        {
          number: 4,
          title: "Month 3 — Advanced + Production (Weeks 9-12)",
          image: "/assets/slides/agentic-ai/slide-4.png",
          caption: "MCP Integration, Deployment, Tracing + Streaming, Portfolio Showcase",
        },
        {
          number: 5,
          title: "Start Today — Small Steps Beat Big Plans",
          image: "/assets/slides/agentic-ai/slide-5.png",
          caption: "Call to Action • Consistency & daily practice roadmap",
        },
      ],
      tags: ["Agentic AI", "Roadmap", "Slide Design", "Canva", "AI Education"],
    },
    {
      id: "ai-agent-myths-or-facts",
      title: "AI Agent: Myth OR Facts",
      subtitle: "Everything You Think You Know About AI Agents is Wrong!",
      category: "AI Insights & Infographics",
      date: "October 2026",
      tagline: "Collaborative carousel by Umm e Habiba & Urooj Fatima busting top misconceptions around AI Agents.",
      description:
        "Designed by Urooj Fatima. A 7-slide visual carousel breaking down 5 major myths around AI agents, human replacement, cost, coding barriers, and accuracy.",
      totalSlides: 7,
      stats: {
        impressions: "1,299 impressions",
        reactions: "32 reactions",
        comments: "24 comments",
        reposts: "3 reposts",
        screenshot: "/assets/stats/slide-stats-1.png",
      },
      slides: [
        {
          number: 1,
          title: "AI Agent: Myth OR Facts (Cover)",
          image: "/assets/slides/ai-agent-myths/slide-1.png",
          caption: "Cover • Umm e Habiba X Urooj Fatima • Everything You Think You Know About AI Agents is Wrong!",
        },
        {
          number: 2,
          title: "Myth 01: AI Agents will replace all human jobs",
          image: "/assets/slides/ai-agent-myths/slide-2.png",
          caption: "Fact 01: AI Agents replace repetitive tasks, not human creativity and decision-making.",
        },
        {
          number: 3,
          title: "Myth 02: AI Automation is only for big companies",
          image: "/assets/slides/ai-agent-myths/slide-3.png",
          caption: "Fact 02: Small businesses save the most time and money with AI Automation.",
        },
        {
          number: 4,
          title: "Myth 03: You need to know coding to use AI Agents",
          image: "/assets/slides/ai-agent-myths/slide-4.png",
          caption: "Fact 03: Modern AI tools require zero coding — just the right prompts and setup.",
        },
        {
          number: 5,
          title: "Myth 04: AI Automation is too expensive to implement",
          image: "/assets/slides/ai-agent-myths/slide-5.png",
          caption: "Fact 04: Manual work costs more in time, errors, and salaries.",
        },
        {
          number: 6,
          title: "Myth 05: AI Agents make mistakes too often to trust",
          image: "/assets/slides/ai-agent-myths/slide-6.png",
          caption: "Fact 05: AI Agents are more consistent than humans on repetitive tasks, with fewer errors and faster output.",
        },
        {
          number: 7,
          title: "Closing: Still believing these myths?",
          image: "/assets/slides/ai-agent-myths/slide-7.png",
          caption: "Drop the one that surprised you most • Follow Urooj Fatima & Umm e Habiba",
        },
      ],
      tags: ["AI Agents", "Myth vs Fact", "Infographic Design", "Canva", "Automation"],
    },
  ],
};
