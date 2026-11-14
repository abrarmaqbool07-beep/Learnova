import { ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  onExploreCourses: () => void;
  onBrowseCategories: () => void;
}

export function FinalCTASection({
  onExploreCourses,
  onBrowseCategories,
}: FinalCTASectionProps) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] rounded-2xl bg-[#023047] px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="mx-auto max-w-[660px]">
          <h2
            id="final-cta-heading"
            className="font-display text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.5rem]"
          >
            Ready to start your next course?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#CDE5F0]">
            Compare free introductory modules and specialist paid tracks across six focused disciplines.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              type="button"
              onClick={onExploreCourses}
              className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#FFB703] px-6 py-3 text-sm font-semibold text-[#023047] whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:bg-[#FB8500] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ECAE6]"
            >
              <span>Explore courses</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onBrowseCategories}
              className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center rounded-lg border border-[#8ECAE6]/45 px-6 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:border-[#8ECAE6] hover:bg-[#219EBC]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ECAE6]"
            >
              Browse categories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
