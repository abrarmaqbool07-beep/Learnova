import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Compass,
  Cpu,
  FileText,
  Layers,
} from 'lucide-react';
import { CATEGORIES } from '../data/learnovaData';
import type { CategoryItem, CourseCategorySlug } from '../types/learnova';

interface CategorySectionProps {
  activeCategory: CourseCategorySlug | null;
  onSelectCategory: (slug: CourseCategorySlug) => void;
  onViewAllCourses: () => void;
}

const CATEGORY_ICON_MAP: Record<CategoryItem['iconName'], typeof Compass> = {
  Compass,
  Code2,
  BarChart3,
  Layers,
  Cpu,
  FileText,
};

export function CategorySection({
  activeCategory,
  onSelectCategory,
  onViewAllCourses,
}: CategorySectionProps) {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="border-b border-[#DCE6EC] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[600px]">
            <p className="font-mono text-xs font-medium tracking-wider text-[#12748D]">
              Disciplines
            </p>
            <h2
              id="categories-heading"
              className="mt-2 font-display text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#023047] sm:text-[2.25rem]"
            >
              Browse by subject area
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#485C68]">
              Select a category to filter the featured catalogue and compare free and paid options side by side.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewAllCourses}
            className="inline-flex min-h-[44px] items-center gap-1.5 self-start text-sm font-medium text-[#023047] underline decoration-[#8ECAE6] underline-offset-4 cursor-pointer transition-colors hover:text-[#12748D] hover:decoration-[#219EBC] sm:self-end whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#219EBC]"
          >
            <span>Explore all courses</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {CATEGORIES.map((category) => {
            const IconComponent = CATEGORY_ICON_MAP[category.iconName];
            const isSelected = activeCategory === category.slug;

            return (
              <button
                key={category.slug}
                type="button"
                onClick={() => onSelectCategory(category.slug)}
                aria-pressed={isSelected}
                className={`group flex w-full flex-col justify-between rounded-xl border p-6 text-left cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC] ${
                  isSelected
                    ? 'border-[#219EBC] bg-[#8ECAE6]/18'
                    : 'border-[#DCE6EC] bg-[#FAFCFD] hover:border-[#219EBC] hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
                        isSelected
                          ? 'border-[#023047] bg-[#023047] text-[#FFB703]'
                          : 'border-[#DCE6EC] bg-white text-[#12748D] group-hover:border-[#219EBC]/50 group-hover:bg-[#8ECAE6]/15'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <span className="font-mono text-xs text-[#485C68] tabular-nums">
                      {category.courseCount}{' '}
                      {category.courseCount === 1 ? 'course' : 'courses'}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-[#023047]">
                    {category.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#485C68]">
                    {category.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-[#12748D] group-hover:text-[#023047]">
                  <span>{isSelected ? 'Filtered below' : 'Filter courses'}</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
