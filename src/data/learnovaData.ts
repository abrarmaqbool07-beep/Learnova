import heroEditorialImg from '../assets/images/hero_learnova_editorial_1794666194314.jpg';
import designSystemsImg from '../assets/images/course_design_systems_1794666194702.jpg';
import frontendArchImg from '../assets/images/course_frontend_arch_1794666194210.jpg';
import dataModelingImg from '../assets/images/course_data_modeling_1794666194887.jpg';
import productStrategyImg from '../assets/images/course_product_strategy_1794666195492.jpg';
import aiEngineeringImg from '../assets/images/course_ai_engineering_1794666196199.jpg';
import type {
  CategoryItem,
  CourseItem,
  LearningPathItem,
  TrustCommitment,
  WhyStoryStep,
} from '../types/learnova';

export const HERO_MEDIA = {
  src: heroEditorialImg,
  alt: 'Quiet architectural study library with walnut reading tables and warm recessed lighting',
};

export const TRUST_COMMITMENTS: TrustCommitment[] = [
  {
    id: 'practitioner-led',
    title: 'Practitioner-led instruction',
    detail: 'Courses authored and taught by active specialists',
    iconName: 'BookOpen',
  },
  {
    id: 'free-and-paid',
    title: 'Free & paid tracks side by side',
    detail: 'Open foundational courses alongside deep paid curricula',
    iconName: 'Scale',
  },
  {
    id: 'clear-pacing',
    title: 'Transparent duration & scope',
    detail: 'Every module lists clear lesson counts and pacing',
    iconName: 'Clock',
  },
  {
    id: 'structured-disciplines',
    title: 'Six focused disciplines',
    detail: 'Curated tracks across design, engineering, data, and strategy',
    iconName: 'CheckCircle2',
  },
];

export const CATEGORIES: CategoryItem[] = [
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    description: 'Interface systems, editorial layout, and usability craft',
    courseCount: 1,
    iconName: 'Compass',
  },
  {
    slug: 'frontend-engineering',
    name: 'Frontend Engineering',
    description: 'Component architecture, accessibility, and web performance',
    courseCount: 1,
    iconName: 'Code2',
  },
  {
    slug: 'data-analytics',
    name: 'Data Analytics',
    description: 'Quantitative modeling, SQL patterns, and clear reporting',
    courseCount: 1,
    iconName: 'BarChart3',
  },
  {
    slug: 'product-strategy',
    name: 'Product Strategy',
    description: 'Problem framing, roadmap prioritization, and scope discipline',
    courseCount: 1,
    iconName: 'Layers',
  },
  {
    slug: 'ai-systems',
    name: 'AI Systems',
    description: 'Applied evaluation, retrieval pipelines, and prompt reliability',
    courseCount: 1,
    iconName: 'Cpu',
  },
  {
    slug: 'technical-writing',
    name: 'Technical Writing',
    description: 'Architecture specs, API reference design, and clear prose',
    courseCount: 1,
    iconName: 'FileText',
  },
];

export const COURSES: CourseItem[] = [
  {
    id: 'design-systems-architecture',
    slug: 'design-systems-architecture',
    title: 'Design Systems & Editorial Interface Craft',
    categorySlug: 'ui-ux-design',
    categoryLabel: 'UI/UX Design',
    level: 'Intermediate',
    instructor: 'Hannah Lindqvist',
    instructorRole: 'Staff Product Designer',
    thumbnailSrc: designSystemsImg,
    thumbnailAlt: 'Grid notebook with geometric layout sketches, brass ruler, and drafting pen on stone desk',
    rating: 4.9,
    reviewCount: 142,
    duration: '6h 20m',
    lessonCount: 18,
    isFree: false,
    priceUsd: 49,
    isPopular: true,
    summary:
      'Build scalable typographic scales, token architectures, and accessible UI primitives without relying on decorative clutter.',
    syllabus: [
      '01. Visual hierarchy, spacing rhythm, and grid math',
      '02. Semantic color tokens and WCAG AA contrast validation',
      '03. Component API design and state-matrix documentation',
      '04. Handoff specifications for engineering teams',
    ],
  },
  {
    id: 'frontend-architecture-typescript',
    slug: 'frontend-architecture-typescript',
    title: 'Modern Frontend Architecture in TypeScript',
    categorySlug: 'frontend-engineering',
    categoryLabel: 'Frontend Engineering',
    level: 'Foundations',
    instructor: 'Daniel Okafor',
    instructorRole: 'Principal Web Engineer',
    thumbnailSrc: frontendArchImg,
    thumbnailAlt: 'Pale oak workstation with matte laptop and open linen notebook beside window',
    rating: 4.8,
    reviewCount: 218,
    duration: '5h 40m',
    lessonCount: 16,
    isFree: true,
    isPopular: true,
    summary:
      'Learn how to structure modular React applications, separate data from presentation, and maintain predictable state at scale.',
    syllabus: [
      '01. Strict TypeScript modeling for UI state',
      '02. Composable hooks and zero-prop-drilling boundaries',
      '03. Accessible keyboard navigation and focus management',
      '04. Asset loading, bundle budgets, and Core Web Vitals',
    ],
  },
  {
    id: 'analytical-data-modeling',
    slug: 'analytical-data-modeling',
    title: 'Analytical Data Modeling & Decision Metrics',
    categorySlug: 'data-analytics',
    categoryLabel: 'Data Analytics',
    level: 'Intermediate',
    instructor: 'Priya Subramanian',
    instructorRole: 'Lead Analytics Engineer',
    thumbnailSrc: dataModelingImg,
    thumbnailAlt: 'Printed geometric charts, grid sheets, graphite calipers, and field journal on alabaster table',
    rating: 4.8,
    reviewCount: 96,
    duration: '7h 15m',
    lessonCount: 21,
    isFree: false,
    priceUsd: 59,
    isPopular: true,
    summary:
      'Move from raw event tables to clean dimensional models and trustworthy decision metrics without vanity dashboards.',
    syllabus: [
      '01. Event taxonomy and clean schema normalization',
      '02. Cohort retention, funnel conversion, and SQL window patterns',
      '03. Eliminating reporting drift across product teams',
      '04. Presenting quantitative findings with precision',
    ],
  },
  {
    id: 'product-framing-roadmaps',
    slug: 'product-framing-roadmaps',
    title: 'Product Framing & Scope Discipline',
    categorySlug: 'product-strategy',
    categoryLabel: 'Product Strategy',
    level: 'Foundations',
    instructor: 'Tomasz Kowalski',
    instructorRole: 'Director of Product',
    thumbnailSrc: productStrategyImg,
    thumbnailAlt: 'Minimalist studio table with arranged paper index cards, wooden blocks, and fountain pen',
    rating: 4.7,
    reviewCount: 84,
    duration: '4h 10m',
    lessonCount: 12,
    isFree: true,
    isNew: true,
    summary:
      'A practical guide to turning ambiguous stakeholder requests into testable requirements, clear milestones, and focused releases.',
    syllabus: [
      '01. Separating root user problems from feature wishes',
      '02. Writing unambiguous requirements specifications',
      '03. Scoping MVPs without sacrificing core reliability',
      '04. Post-launch evaluation and iteration criteria',
    ],
  },
  {
    id: 'applied-ai-evaluation',
    slug: 'applied-ai-evaluation',
    title: 'Applied AI Systems & Evaluation Rigor',
    categorySlug: 'ai-systems',
    categoryLabel: 'AI Systems',
    level: 'Advanced',
    instructor: 'Dr. Mei-Ling Chen',
    instructorRole: 'Applied ML Architect',
    thumbnailSrc: aiEngineeringImg,
    thumbnailAlt: 'Precision brushed aluminum geometric blocks and optical prism refracting natural light on stone',
    duration: '8h 05m',
    lessonCount: 24,
    isFree: false,
    priceUsd: 79,
    isNew: true,
    summary:
      'Design deterministic workflows around language models, build reproducible evaluation harnesses, and control latency and cost.',
    syllabus: [
      '01. Structured outputs, grounding, and failure modes',
      '02. Golden dataset curation and automated regression suites',
      '03. Retrieval precision vs recall trade-offs',
      '04. Production guardrails and human-in-the-loop review',
    ],
  },
  {
    id: 'technical-documentation-craft',
    slug: 'technical-documentation-craft',
    title: 'Technical Writing & Architecture Specs',
    categorySlug: 'technical-writing',
    categoryLabel: 'Technical Writing',
    level: 'Foundations',
    instructor: 'Claire Beaumont',
    instructorRole: 'Principal Technical Writer',
    thumbnailAlt: 'Editorial architectural grid illustration representing technical documentation structure',
    lessonCount: 10,
    isFree: true,
    isNew: true,
    summary:
      'Write concise RFCs, developer guides, and API documentation that help engineering and design teams align quickly.',
    syllabus: [
      '01. Structuring documents for rapid scanning',
      '02. Writing clear RFCs and architecture decision records',
      '03. Editing prose for precision and brevity',
      '04. Maintaining living documentation alongside code',
    ],
  },
];

export const WHY_STORY_STEPS: WhyStoryStep[] = [
  {
    number: '01',
    id: 'learn-with-direction',
    title: 'Learn with direction',
    description:
      'Curated courses and coherent learning paths help you choose what to study next without sorting through thousands of redundant listings.',
    detailNote: 'Clear prerequisites, level labels, and structured module sequencing.',
    actionLabel: 'Browse learning paths',
    targetSectionId: 'paths',
  },
  {
    number: '02',
    id: 'build-practical-skills',
    title: 'Build practical skills',
    description:
      'Every curriculum focuses on real-world workflows, structured reference examples, and applied problem solving you can transfer directly to your work.',
    detailNote: 'Free open foundations paired with in-depth paid specialist tracks.',
    actionLabel: 'Compare free & paid courses',
    targetSectionId: 'courses',
  },
  {
    number: '03',
    id: 'keep-moving-forward',
    title: 'Keep moving forward',
    description:
      'Transparent lesson counts and realistic time estimates let you plan steady weekly study sessions without inflated promises or urgency gimmicks.',
    detailNote: 'Consistent metadata across every discipline so comparing courses stays effortless.',
    actionLabel: 'Explore all categories',
    targetSectionId: 'categories',
  },
];

export const LEARNING_PATHS: LearningPathItem[] = [
  {
    id: 'product-interface-foundation',
    index: 'Path 01',
    title: 'Product & Interface Craft',
    categorySlug: 'ui-ux-design',
    description:
      'Bridge visual systems design with production frontend implementation for cohesive digital products.',
    courseCount: 2,
    estimatedDuration: '12h total',
    includedCourses: [
      'Design Systems & Editorial Interface Craft',
      'Modern Frontend Architecture in TypeScript',
    ],
  },
  {
    id: 'analytical-product-leadership',
    index: 'Path 02',
    title: 'Analytical Product Decisions',
    categorySlug: 'data-analytics',
    description:
      'Combine clean quantitative modeling with disciplined problem framing and written product specifications.',
    courseCount: 3,
    estimatedDuration: '14h+ total',
    includedCourses: [
      'Product Framing & Scope Discipline',
      'Analytical Data Modeling & Decision Metrics',
      'Technical Writing & Architecture Specs',
    ],
  },
  {
    id: 'modern-systems-engineering',
    index: 'Path 03',
    title: 'Modern Systems & AI Engineering',
    categorySlug: 'ai-systems',
    description:
      'Build resilient web architectures and evaluate applied AI pipelines with rigorous engineering standards.',
    courseCount: 2,
    estimatedDuration: '13h 45m total',
    includedCourses: [
      'Modern Frontend Architecture in TypeScript',
      'Applied AI Systems & Evaluation Rigor',
    ],
  },
];

export const PLATFORM_STANDARDS = [
  {
    label: 'Open & Paid Clarity',
    heading: 'Free foundations, paid depth',
    body: 'Start with full-length free courses in engineering, product framing, and technical writing, or enroll in specialist paid tracks with transparent flat pricing.',
  },
  {
    label: 'Honest Metadata',
    heading: 'Verified details, zero clutter',
    body: 'Ratings appear only where verified learner reviews exist, and unrated new releases are labeled honestly as New—never padded with synthetic scores.',
  },
  {
    label: 'Curriculum Focus',
    heading: 'Built for steady study',
    body: 'Each syllabus breaks complex topics into focused, scannable modules with realistic durations so you know the exact commitment before starting.',
  },
];
