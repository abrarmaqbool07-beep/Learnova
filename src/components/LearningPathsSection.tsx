import { ArrowRight } from 'lucide-react';
import { LEARNING_PATHS } from '../data/learnovaData';
import type { CourseCategorySlug } from '../types/learnova';

interface LearningPathsSectionProps {
  onSelectPathCategory: (categorySlug: CourseCategorySlug) => void;
}

export function LearningPathsSection({
  onSelectPathCategory,
}: LearningPathsSectionProps) {
  return (
    <section
      id="paths"
      aria-labelledby="paths-heading"
      className="border-b border-[#DCE6EC] bg-[#F5F9FB] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-[640px]">
          <p className="font-mono text-xs font-medium tracking-wider text-[#12748D]">
            Structured Sequences
          </p>
          <h2
            id="paths-heading"
            className="mt-2 font-display text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#023047] sm:text-[2.25rem]"
          >
            Curated learning paths
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#485C68]">
            Follow a connected sequence of courses designed to build complementary skills together rather than picking topics at random.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {LEARNING_PATHS.map((path) => (
            <article
              key={path.id}
              className="flex flex-col justify-between rounded-xl border border-[#DCE6EC] bg-white p-6 sm:p-7"
            >
              <div>
                {/* Distinct Path Header with unboxed tabular metadata */}
                <div className="flex items-center justify-between gap-4 border-b border-[#DCE6EC] pb-4">
                  <span className="font-mono text-xs font-semibold text-[#12748D]">
                    {path.index}
                  </span>
                  <span className="font-mono text-xs text-[#485C68] tabular-nums">
                    {path.courseCount} courses · {path.estimatedDuration}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-[#023047]">
                  {path.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#485C68]">
                  {path.description}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-medium text-[#647782]">
                    Included sequence
                  </p>
                  <ol className="mt-2.5 space-y-2">
                    {path.includedCourses.map((courseTitle, idx) => (
                      <li
                        key={courseTitle}
                        className="flex items-baseline gap-2.5 text-xs text-[#023047]"
                      >
                        <span className="font-mono text-[11px] font-semibold text-[#219EBC] tabular-nums">
                          0{idx + 1}
                        </span>
                        <span className="leading-snug">{courseTitle}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-7 border-t border-[#DCE6EC] pt-4">
                <button
                  type="button"
                  onClick={() => onSelectPathCategory(path.categorySlug)}
                  className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#023047] cursor-pointer transition-colors hover:text-[#12748D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
                >
                  <span>View courses in this path</span>
                  <ArrowRight className="h-4 w-4 text-[#219EBC]" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
