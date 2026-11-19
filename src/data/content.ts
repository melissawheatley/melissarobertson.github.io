export const profile = {
  name: 'Melissa Robertson',
  role: `Design Engineer, Design Systems`,
  tagline:
    'I build thoughtful design systems for better, more consistent experiences for designers, developers, and end users.',
  email: 'melissa@melissarobertson.com',
  location: 'Nashville, Tennessee',
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/melissa-robertson-nashville',
      icon: 'linkedin' as const,
    },
    {
      label: 'Email',
      href: 'mailto:melissa@melissarobertson.com',
      icon: 'mail' as const,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/melissawheatley',
      icon: 'github' as const,
    },
  ],
  resumeHref: '/MelissaRobertson_Resume2026.pdf',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects (coming soon)' },
] as const

export const about = {
  paragraphs: [
    `I'm a Nashville-based UI engineer with 8+ years of experience who can sit confidently at the crossroads of front-end engineering and product design. I care about the connective tissue between design and code — the components, patterns, and design infrastructure that help teams ship consistent interfaces at scale.`,
    `I move easily from Cursor to Figma and back again, leaning more and more into the world of AI-assisted development. I know that well-documented context is the backbone of a system that leaves no room for AI slop.`,
    `I get excited about thorough documentation, improving accessibility, understanding the "why" behind the design, and seeing how people (and agents) use what I build.`
  ],
}

export type ExperienceItem = {
  id: string
  range: string
  title: string
  company: string
  href?: string
  description: string
  technologies: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'hearst',
    range: '2022 — Present',
    title: 'Design Systems Engineer',
    company: 'Hearst Magazines',
    href: 'https://www.hearst.com/magazines',
    description:
      'Plan, develop, and refactor a React.js UI kit and Figma component library that delivers a consistent experience for designers, developers, and readers across 40+ brands. Champion WCAG accessibility throughout the lifecycle, migrate documentation across Storybook, Supernova, and Figma, and automate component library file generation with templated standards.',
    technologies: [
      'React',
      'TypeScript',
      'Figma',
      'Storybook',
      'Supernova',
      'Tokens Studio',
      'Figma Variables',
      'Tailwind',
      'Theming'
    ],
  },
  {
    id: 'healthstream',
    range: '2018 — 2022',
    title: 'UX Front-End Developer',
    company: 'HealthStream',
    href: 'https://www.healthstream.com/',
    description:
      'Designed and evolved UI component standards across the HealthStream ecosystem using Figma, React, Sketch, and Zeroheight. Built accessible semantic HTML, modular CSS, and JavaScript for front-end applications used by more than 10 million healthcare professionals. Led a UX Design/Development staff resource group and shipped a Resuscitation training iPad app that drove 340,000+ certifications.',
    technologies: [
      'React',
      'JavaScript',
      'SASS',
      'Figma',
      'Sketch',
      'Zeroheight',
    ],
  },
  {
    id: 'discipleship',
    range: '2015 — 2017',
    title: 'Digital Content Manager',
    company: 'Discipleship Ministries, The United Methodist Church',
    description:
      'Built and optimized web pages for a primary site receiving 9 million+ pageviews from 2 million+ users each year. Planned multi-platform campaigns and collaborated with external agencies on web design and development projects.',
    technologies: ['HTML', 'CSS', 'SEO', 'Content Strategy', 'Facebook Business Manager'],
  },
  {
    id: 'fms',
    range: '2014 — 2015',
    title: 'Digital Marketing',
    company: 'Financial Marketing Solutions',
    description:
      'Produced sitemaps and wireframes for multiple projects. Configured analytics dashboards, created custom reports, and structured content for search — bridging editorial strategy with digital experience design.',
    technologies: ['Google Analytics', 'Web Design'],
  },
]

export type ProjectItem = {
  id: string
  title: string
  description: string
  href?: string
  image?: string
  technologies: string[]
}

export const projects: ProjectItem[] = [
  {
    id: 'hearst-ds',
    title: 'Hearst Magazines Design System',
    description:
      'A shared React UI kit and Figma component library powering consistent brand experiences across 40+ magazine sites — with accessibility baked into review, tooling, and docs.',
    technologies: ['React', 'Figma', 'Storybook', 'WCAG'],
  },
  {
    id: 'resuscitation',
    title: 'Resuscitation Training App',
    description:
      'iPad training experience and admin interface informed by user research and iterative testing — resulting in 340,000+ certifications for healthcare professionals.',
    technologies: ['React', 'User Research', 'iPad'],
  },
  {
    id: 'component-docs',
    title: 'Component Documentation Platform',
    description:
      'Documentation and release workflows spanning Storybook, Supernova, and Figma — plus automation for component library file generation and iconography review.',
    technologies: ['Storybook', 'Supernova', 'Figma', 'Automation'],
  },
]

export const education = [
  {
    school: 'Nashville Software School',
    detail: 'Web Development Certificate — interaction design & front-end focus',
    year: '2018',
  },
  {
    school: 'Belmont University',
    detail:
      'Bachelor of Arts, cum laude — Audio Engineering Technology; Religion and Arts',
    year: 'Nashville, TN',
  },
]
