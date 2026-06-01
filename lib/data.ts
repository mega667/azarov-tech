export type NavItem = { label: string; href: string };

export type HeroMetric = {
  title: string;
  subtitle: string;
  icon: "calendar" | "cart" | "layers";
};

export type ExperienceEntry = {
  period: string;
  mode: string;
  title: string;
  company: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
  bullets: string[];
  tags: string[];
};

export type ProjectEntry = {
  title: string;
  description: string;
  tags: string[];
  icon: "cart" | "layers" | "shield";
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroSkillTags = [
  "Node.js",
  "TypeScript",
  "GraphQL",
  "REST APIs",
  "AWS",
  "Redis",
  "Salesforce Commerce Cloud",
  "SFCC/SFRA",
  "Adobe Commerce / Magento 2",
  "Okta OIDC",
  "PostgreSQL",
];

export const heroMetrics: HeroMetric[] = [
  { title: "10+ years", subtitle: "Professional Experience", icon: "calendar" },
  { title: "E-commerce", subtitle: "Domain Expertise", icon: "cart" },
  { title: "Platform / Backend", subtitle: "Core Focus", icon: "layers" },
];

export const profilePanelData = {
  glance:
    "Senior Backend and Platform Engineer focused on high-traffic commerce platforms, APIs, integrations, and secure distributed systems.",
  strengths: [
    "Backend Architecture",
    "Platform Services",
    "Commerce Systems",
    "Authentication and SSO",
    "API Integrations",
  ],
  techFocus: [
    "Node.js, TypeScript",
    "Express, NestJS",
    "Apollo GraphQL, REST",
    "AWS SQS, SNS, S3",
    "Redis, PostgreSQL, MySQL",
  ],
  currently: "Building scalable commerce platform services, multi-region integrations, and AI-assisted developer tooling.",
  location: "Miami, FL. Remote-friendly.",
  connectText: "Interested in collaboration or have a project in mind?",
};

export const experienceEntries: ExperienceEntry[] = [
  {
    period: "Sep 2022 - Present",
    mode: "Miami, FL / Remote",
    title: "Senior Software Engineer - Commerce Platform",
    company: "Under Armour",
    logoSrc: "/company-logos/under-armour-logo.png",
    logoAlt: "Under Armour logo",
    description:
      "Architected Node.js and TypeScript backend services with Express and Apollo GraphQL across NA, EMEA, and APAC. Delivered secure JWT/JWKS and Okta OIDC authentication, Redis-backed sessions, API integrations, SFCC/SFRA features, and reliable product feed workflows.",
    bullets: [
      "Architected and delivered Node.js / TypeScript backend services (Express, Apollo GraphQL), powering shared platform capabilities across 3 regions (NA, EMEA, APAC) and improving reliability and consistency across the platform.",
      "Implemented secure multi-provider JWT / JWKS authentication with Redis-backed session management, strengthening distributed service security across 3 environments and reducing recurring authentication-related production issues by 30%.",
      "Integrated Okta OIDC into platform authentication flows, enabling a unified and secure login experience across multiple environments and storefronts spanning 10+ countries in 3 regions.",
      "Designed and integrated internal and third-party APIs with clear versioned contracts, improving cross-service communication, stability, and data quality across 10+ integrations.",
      "Developed and optimized SFCC / SFRA features supporting global storefront operations and led multi-environment releases across 3 regions, supporting 20+ releases per quarter.",
      "Contributed to frontend and storefront work using React, Next.js, and SFRA, supporting customer-facing flows, internal tools, and API-driven UI integrations.",
      "Built and improved ETL / product feed workflows using DataFeedWatch, increasing export reliability across 8 regional catalogs and raising feed success rates from 70% to 99%.",
      "Supported high-availability production systems through incident response, root-cause analysis, and durable engineering fixes, helping reduce repeat incidents and improve operational stability.",
      "Used AI-assisted engineering tools to speed up debugging, implementation planning, documentation, and prototyping, improving developer productivity while maintaining code quality.",
    ],
    tags: ["Node.js", "TypeScript", "GraphQL", "Okta", "Redis", "SFCC"],
  },
  {
    period: "Feb 2016 - Aug 2022",
    mode: "Miami, FL / On-site",
    title: "Senior Software Development Engineer",
    company: "Absolute Web",
    logoSrc: "/company-logos/absolute-web-logo.png",
    logoAlt: "Absolute Web logo",
    description:
      "Built Magento 2 backend features, custom modules, and enterprise commerce integrations. Led Magento 1 to Magento 2 and Magento to Shopify migrations, improved caching and SQL performance, and integrated payment, shipping, ERP, and CRM systems.",
    bullets: [
      "Developed and maintained Magento 2 backend features, modules, and custom extensions for mid-market and enterprise commerce clients, improving platform functionality and long-term maintainability.",
      "Led multiple Magento 1 to Magento 2 and Magento to Shopify migration projects, overseeing full data transfer, extension rewrites, and integration rebuilding to ensure smooth cutovers with minimal downtime.",
      "Conducted code reviews and helped establish consistent development standards across teams, improving code quality, onboarding consistency, and engineering efficiency.",
      "Integrated payment gateways, shipping providers, ERP / CRM systems, and other third-party services via REST / SOAP APIs, improving operational reliability and reducing integration-related incidents.",
      "Improved production stability through caching enhancements, SQL query optimization, and refactoring of legacy modules, reducing bottlenecks and improving storefront performance and uptime.",
    ],
    tags: ["Adobe Commerce", "Magento 2", "Shopify", "PHP", "MySQL", "REST/SOAP"],
  },
  {
    period: "Sep 2013 - Feb 2016",
    mode: "Remote",
    title: "Senior Web Developer",
    company: "Absolute Web",
    logoSrc: "/company-logos/absolute-web-logo.png",
    logoAlt: "Absolute Web logo",
    description:
      "Built custom administrative tools, optimized storefront features, and extended commerce platforms through scalable API integrations. Collaborated with designers, project managers, and engineers in fast-paced client delivery environments.",
    bullets: [
      "Built custom administrative tools to improve merchant workflows, streamline backend operations, and enhance internal platform usability for e-commerce clients.",
      "Developed and optimized storefront features with a focus on maintainability, performance, and clean extensible code to support long-term scalability.",
      "Extended platform capabilities through scalable API integrations, enabling smoother communication between storefronts, backend systems, and third-party services.",
      "Collaborated with designers, project managers, and engineers to deliver reliable, high-quality features in fast-paced client project environments.",
    ],
    tags: ["PHP", "JavaScript", "MySQL", "API Integrations"],
  },
];

export const projectEntries: ProjectEntry[] = [
  {
    title: "Commerce Platform Services",
    description:
      "Shared Node.js and TypeScript backend services powering platform capabilities across NA, EMEA, and APAC commerce environments.",
    tags: ["Node.js", "TypeScript", "Express", "Apollo GraphQL", "AWS"],
    icon: "cart",
    href: "#projects",
  },
  {
    title: "Multi-Region Authentication",
    description:
      "JWT/JWKS and Okta OIDC authentication with Redis-backed session management for secure storefront access across 10+ countries.",
    tags: ["JWT", "JWKS", "Okta OIDC", "Redis", "OAuth2"],
    icon: "shield",
    href: "#projects",
  },
  {
    title: "Product Feed Reliability",
    description:
      "ETL and product feed workflows using DataFeedWatch, raising feed success rates from 70% to 99% across 8 regional catalogs.",
    tags: ["DataFeedWatch", "ETL", "Catalogs", "Validation", "Monitoring"],
    icon: "layers",
    href: "#projects",
  },
];

export const footerData = {
  connect:
    "I’m open to new opportunities and interesting projects.",
  email: "konstantin@azarov.tech",
  emailHref: "mailto:konstantin@azarov.tech?subject=Website%20inquiry",
  location: "Miami, FL",
  availability: "Remote-friendly",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/konstantin-azarov" },
    { label: "Credly", href: "https://credly.com/users/konstantin-azarov" },
    { label: "GitHub", href: "https://github.com/mega667" },
  ],
  copyright: "© 2026 Konstantin Azarov. All rights reserved.",
  tagline: "Built with Next.js, TypeScript, and strong coffee.",
};
