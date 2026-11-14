import { useCallback, useState } from 'react';
import { CategorySection } from './components/CategorySection';
import { CoursePreviewModal } from './components/CoursePreviewModal';
import { CourseStandardsSection } from './components/CourseStandardsSection';
import { FeaturedCoursesSection } from './components/FeaturedCoursesSection';
import { FinalCTASection } from './components/FinalCTASection';
import { HeroSection } from './components/HeroSection';
import { LearningPathsSection } from './components/LearningPathsSection';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { TrustStrip } from './components/TrustStrip';
import { WhyLearnovaSection } from './components/WhyLearnovaSection';
import type {
  CourseCategorySlug,
  CourseFilterTab,
  CourseItem,
} from './types/learnova';

export default function App() {
  const [activeTab, setActiveTab] = useState<CourseFilterTab>('all');
  const [activeCategory, setActiveCategory] =
    useState<CourseCategorySlug | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    element.scrollIntoView({
      behavior: prefersReduced ? 'auto' : 'smooth',
      block: 'start',
    });
  }, []);

  const handleSelectCategory = useCallback(
    (slug: CourseCategorySlug) => {
      setActiveCategory((prev) => (prev === slug ? null : slug));
      setActiveTab('all');
      scrollToSection('courses');
    },
    [scrollToSection],
  );

  const handleSelectPathCategory = useCallback(
    (slug: CourseCategorySlug) => {
      setActiveCategory(slug);
      setActiveTab('all');
      scrollToSection('courses');
    },
    [scrollToSection],
  );

  const handleViewAllCourses = useCallback(() => {
    setActiveCategory(null);
    setActiveTab('all');
    scrollToSection('courses');
  }, [scrollToSection]);

  const handleSelectFreeFilter = useCallback(() => {
    setActiveCategory(null);
    setActiveTab('free');
    scrollToSection('courses');
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-white text-[#023047]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#023047] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>

      <SiteHeader onNavigateSection={scrollToSection} />

      <main id="main-content">
        <HeroSection
          onExploreCourses={() => scrollToSection('courses')}
          onBrowsePaths={() => scrollToSection('paths')}
        />

        <TrustStrip />

        <CategorySection
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          onViewAllCourses={handleViewAllCourses}
        />

        <FeaturedCoursesSection
          activeTab={activeTab}
          activeCategory={activeCategory}
          onTabChange={setActiveTab}
          onClearCategory={() => setActiveCategory(null)}
          onSelectCourse={setSelectedCourse}
        />

        <WhyLearnovaSection onNavigateSection={scrollToSection} />

        <LearningPathsSection
          onSelectPathCategory={handleSelectPathCategory}
        />

        <CourseStandardsSection />

        <FinalCTASection
          onExploreCourses={handleViewAllCourses}
          onBrowseCategories={() => scrollToSection('categories')}
        />
      </main>

      <SiteFooter
        onNavigateSection={scrollToSection}
        onSelectFilterFree={handleSelectFreeFilter}
      />

      <CoursePreviewModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </div>
  );
}
