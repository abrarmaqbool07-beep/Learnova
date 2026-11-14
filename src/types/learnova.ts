export type CourseCategorySlug =
  | 'ui-ux-design'
  | 'frontend-engineering'
  | 'data-analytics'
  | 'product-strategy'
  | 'ai-systems'
  | 'technical-writing';

export type CourseLevel = 'Foundations' | 'Intermediate' | 'Advanced';

export type CourseFilterTab = 'all' | 'popular' | 'free' | 'new';

export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  categorySlug: CourseCategorySlug;
  categoryLabel: string;
  level: CourseLevel;
  instructor: string;
  instructorRole: string;
  thumbnailSrc?: string;
  thumbnailAlt: string;
  rating?: number;
  reviewCount?: number;
  duration?: string;
  lessonCount: number;
  isFree: boolean;
  priceUsd?: number;
  isPopular?: boolean;
  isNew?: boolean;
  summary: string;
  syllabus: string[];
}

export interface CategoryItem {
  slug: CourseCategorySlug;
  name: string;
  description: string;
  courseCount: number;
  iconName:
    | 'Compass'
    | 'Code2'
    | 'BarChart3'
    | 'Layers'
    | 'Cpu'
    | 'FileText';
}

export interface TrustCommitment {
  id: string;
  title: string;
  detail: string;
  iconName: 'BookOpen' | 'Scale' | 'Clock' | 'CheckCircle2';
}

export interface WhyStoryStep {
  number: string;
  id: string;
  title: string;
  description: string;
  detailNote: string;
  actionLabel: string;
  targetSectionId: string;
}

export interface LearningPathItem {
  id: string;
  index: string;
  title: string;
  categorySlug: CourseCategorySlug;
  description: string;
  courseCount: number;
  estimatedDuration: string;
  includedCourses: string[];
}
