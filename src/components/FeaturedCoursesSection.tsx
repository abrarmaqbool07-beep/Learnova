import { X } from 'lucide-react';
import { CATEGORIES, COURSES } from '../data/learnovaData';
import type {
  CourseCategorySlug,
  CourseFilterTab,
  CourseItem,
} from '../types/learnova';
import { CourseCard } from './CourseCard';

interface FeaturedCoursesSectionProps {
  activeTab: CourseFilterTab;
  activeCategory: CourseCategorySlug | null;
  onTabChange: (tab: CourseFilterTab) => void;
  onClearCategory: () => void;
  onSelectCourse: (course: CourseItem) => void;
}

const FILTER_TABS: { id: CourseFilterTab; label: string }[] = [
  { id: 'all', label: 'All courses' },
  { id: 'popular', label: 'Popular' },
  { id: 'free', label: 'Free' },
  { id: 'new', label: 'New' },
];

export function FeaturedCoursesSection({
  activeTab,
  activeCategory,
  onTabChange,
  onClearCategory,
  onSelectCourse,
}: FeaturedCoursesSectionProps) {
  const activeCategoryName = activeCategory
    ? CATEGORIES.find((c) => c.slug === activeCategory)?.name
    : null;

  const filteredCourses = COURSES.filter((course) => {
    if (activeCategory && course.categorySlug !== activeCategory) {
      return false;
    }
    if (activeTab === 'popular') return Boolean(course.isPopular);
    if (activeTab === 'free') return course.isFree;
    if (activeTab === 'new') return Boolean(course.isNew);
    return true;
  });

  return (
    <section
      id="courses"
      aria-labelledby="featured-courses-heading"
      className="border-b border-[#DCE6EC] bg-[#F5F9FB] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[600px]">
            <p className="font-mono text-xs font-medium tracking-wider text-[#12748D]">
              Catalogue
            </p>
            <h2
              id="featured-courses-heading"
              className="mt-2 font-display text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#023047] sm:text-[2.25rem]"
            >
              Explore courses worth your time
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#485C68]">
              Compare free foundations and paid specialist tracks with transparent durations, instructors, and syllabi.
            </p>
          </div>

          {/* Functional Segmented Filter Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              role="tablist"
              aria-label="Filter courses by status"
              className="inline-flex items-center gap-1 rounded-lg border border-[#DCE6EC] bg-white p-1"
            >
              {FILTER_TABS.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => onTabChange(tab.id)}
                    className={`min-h-[36px] rounded-md px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC] ${
                      isSelected
                        ? 'bg-[#023047] text-white'
                        : 'text-[#485C68] hover:text-[#023047]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {activeCategoryName && (
              <button
                type="button"
                onClick={onClearCategory}
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-[#219EBC]/45 bg-[#8ECAE6]/25 px-3 py-1.5 text-xs font-medium text-[#023047] whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:bg-[#8ECAE6]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
              >
                <span>Category: {activeCategoryName}</span>
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Responsive 3 / 2 / 1 Column Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelectCourse={onSelectCourse}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#DCE6EC] bg-white p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-base font-semibold text-[#023047]">
                No courses match this combination
              </h3>
              <p className="mt-1 text-sm text-[#485C68]">
                Reset the active category filter or switch tabs to view all available courses in {activeCategoryName}.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {activeTab !== 'all' && (
                <button
                  type="button"
                  onClick={() => onTabChange('all')}
                  className="min-h-[40px] rounded-lg border border-[#DCE6EC] bg-white px-4 py-2 text-xs font-medium text-[#023047] cursor-pointer hover:border-[#219EBC]"
                >
                  Show all tabs
                </button>
              )}
              {activeCategory && (
                <button
                  type="button"
                  onClick={onClearCategory}
                  className="min-h-[40px] rounded-lg bg-[#023047] px-4 py-2 text-xs font-medium text-white cursor-pointer hover:bg-[#034160]"
                >
                  Clear category filter
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
