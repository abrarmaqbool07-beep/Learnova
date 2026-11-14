import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_MEDIA } from '../data/learnovaData';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onBrowsePaths: () => void;
}

export function HeroSection({ onExploreCourses, onBrowsePaths }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[580px] sm:min-h-[640px] lg:h-[740px] w-full items-center justify-center overflow-hidden bg-[#023047]"
    >
      {/* Full-bleed background photograph (eager LCP load, fallback resilient) */}
      {!imgError ? (
        <img
          src={HERO_MEDIA.src}
          alt={HERO_MEDIA.alt}
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
          onError={() => setImgError(true)}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#023047]"
        />
      )}

      {/* Measured deep #023047 navy scrim for WCAG AAA white & #8ECAE6 text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#023047]/80 via-[#023047]/64 to-[#023047]/88"
      />

      {/* Centered editorial hero copy */}
      <div className="relative z-10 mx-auto flex max-w-[840px] flex-col items-center px-5 pt-16 text-center sm:px-8">
        <h1
          id="hero-heading"
          className="font-display text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[3.35rem] lg:text-[4.25rem]"
        >
          Build skills that move you forward.
        </h1>

        <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[#E3F2F8] sm:text-lg">
          Practical learning for the next step in your journey.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <button
            type="button"
            onClick={onExploreCourses}
            className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#FFB703] px-6 py-3 text-sm font-semibold text-[#023047] whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150 hover:bg-[#FB8500] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ECAE6]"
          >
            <span>Explore courses</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={onBrowsePaths}
            className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center rounded-lg border border-[#8ECAE6]/55 bg-[#023047]/55 px-6 py-3 text-sm font-medium text-white backdrop-blur-xs whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150 hover:border-[#8ECAE6] hover:bg-[#023047]/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ECAE6]"
          >
            Discover learning paths
          </button>
        </div>
      </div>
    </section>
  );
}
