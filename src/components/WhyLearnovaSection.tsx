import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check, Layers, ListChecks, Clock } from 'lucide-react';
import { WHY_STORY_STEPS } from '../data/learnovaData';

gsap.registerPlugin(ScrollTrigger);

interface WhyLearnovaSectionProps {
  onNavigateSection: (sectionId: string) => void;
}

function StoryMockup({ stepIndex }: { stepIndex: number }) {
  if (stepIndex === 0) {
    return (
      <div className="flex h-full flex-col justify-between p-6 sm:p-8">
        <div>
          <div className="flex items-center justify-between border-b border-[#DCE6EC] pb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#8ECAE6]/25 text-[#023047]">
                <Layers className="h-4 w-4 text-[#12748D]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-[#023047]">
                  Curated Path Sequence
                </p>
                <p className="text-xs text-[#485C68]">
                  Product &amp; Interface Craft · 2 Courses
                </p>
              </div>
            </div>
            <span className="font-mono text-xs text-[#485C68] tabular-nums">
              12h 00m
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {[
              {
                num: '01',
                title: 'Design Systems & Editorial Interface Craft',
                meta: 'Intermediate · 18 lessons · 6h 20m',
                status: 'Stage 1',
              },
              {
                num: '02',
                title: 'Modern Frontend Architecture in TypeScript',
                meta: 'Foundations · 16 lessons · 5h 40m',
                status: 'Stage 2',
              },
              {
                num: '03',
                title: 'System Handoff & Accessibility Review',
                meta: 'Synthesis · Applied checklist',
                status: 'Stage 3',
              },
            ].map((row, idx) => (
              <div
                key={row.num}
                className={`flex items-start justify-between gap-4 rounded-lg border p-4 ${
                  idx === 0
                    ? 'border-[#219EBC] bg-[#8ECAE6]/15'
                    : 'border-[#DCE6EC] bg-[#FAFCFD]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs font-semibold text-[#12748D] pt-0.5 tabular-nums">
                    {row.num}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-[#023047]">
                      {row.title}
                    </p>
                    <p className="mt-1 text-xs text-[#485C68]">{row.meta}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#485C68] whitespace-nowrap shrink-0">
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 border-t border-[#DCE6EC] pt-4 text-xs text-[#485C68]">
          Each step builds directly on the previous module—no redundant overlap.
        </p>
      </div>
    );
  }

  if (stepIndex === 1) {
    return (
      <div className="flex h-full flex-col justify-between p-6 sm:p-8">
        <div>
          <div className="flex items-center justify-between border-b border-[#DCE6EC] pb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#FFB703]/25 text-[#023047]">
                <ListChecks className="h-4 w-4 text-[#023047]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-[#023047]">
                  Applied Curriculum Focus
                </p>
                <p className="text-xs text-[#485C68]">
                  Module 02 · Semantic Tokens &amp; Contrast
                </p>
              </div>
            </div>
            <span className="font-mono text-xs font-medium text-[#12748D]">
              Practical brief
            </span>
          </div>

          <div className="mt-6 rounded-lg border border-[#DCE6EC] bg-[#FAFCFD] p-4">
            <p className="text-xs font-medium text-[#485C68]">
              Workflow specification
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-[#023047]">
              Audit a multi-column interface card system for 4.5:1 WCAG AA text contrast, unboxed metadata separation, and responsive alignment across 360px and 1440px.
            </p>
          </div>

          <div className="mt-4 space-y-2.5">
            {[
              'Separate data models from presentation components',
              'Validate focus-visible states across keyboard navigation',
              'Compare free open foundations vs advanced implementation patterns',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-[#DCE6EC] bg-white px-4 py-3"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8ECAE6]/30 text-[#023047]">
                  <Check className="h-3.5 w-3.5 text-[#12748D]" aria-hidden="true" />
                </span>
                <span className="text-xs font-medium text-[#023047]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 border-t border-[#DCE6EC] pt-4 text-xs text-[#485C68]">
          Structured around real engineering and design deliverables.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-between p-6 sm:p-8">
      <div>
        <div className="flex items-center justify-between border-b border-[#DCE6EC] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#8ECAE6]/25 text-[#023047]">
              <Clock className="h-4 w-4 text-[#12748D]" aria-hidden="true" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-[#023047]">
                Transparent Pacing Overview
              </p>
              <p className="text-xs text-[#485C68]">
                Predictable time commitment per syllabus
              </p>
            </div>
          </div>
          <span className="font-mono text-xs text-[#485C68] tabular-nums">
            4 modules
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {[
            { label: 'Unit 1 · Core Foundations', lessons: '4 lessons', duration: '1h 15m' },
            { label: 'Unit 2 · Architecture Patterns', lessons: '5 lessons', duration: '1h 45m' },
            { label: 'Unit 3 · Edge Cases & Accessibility', lessons: '4 lessons', duration: '1h 30m' },
            { label: 'Unit 4 · Production Review', lessons: '3 lessons', duration: '1h 10m' },
          ].map((unit) => (
            <div
              key={unit.label}
              className="flex items-center justify-between gap-4 rounded-lg border border-[#DCE6EC] bg-[#FAFCFD] px-4 py-3.5"
            >
              <div>
                <p className="text-sm font-medium text-[#023047]">{unit.label}</p>
                <p className="mt-0.5 text-xs text-[#485C68] tabular-nums">
                  {unit.lessons}
                </p>
              </div>
              <span className="font-mono text-xs font-medium text-[#023047] tabular-nums">
                {unit.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 border-t border-[#DCE6EC] pt-4 text-xs text-[#485C68]">
        Clear lesson counts and durations help you plan steady weekly study.
      </p>
    </div>
  );
}

export function WhyLearnovaSection({ onNavigateSection }: WhyLearnovaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const pinStageRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeStep, setActiveStep] = useState(0);
  const [isDesktopPinned, setIsDesktopPinned] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', onChange);

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      setIsDesktopPinned(true);

      const trigger = ScrollTrigger.create({
        trigger: pinStageRef.current,
        start: 'top 84px',
        end: '+=135%',
        pin: true,
        anticipatePin: 1,
        scrub: 0.35,
        onUpdate: (self) => {
          const p = self.progress;
          if (progressFillRef.current) {
            gsap.set(progressFillRef.current, { scaleY: Math.max(0.08, p) });
          }
          if (p < 0.34) {
            setActiveStep(0);
          } else if (p < 0.68) {
            setActiveStep(1);
          } else {
            setActiveStep(2);
          }
        },
      });

      scrollTriggerRef.current = trigger;

      return () => {
        scrollTriggerRef.current = null;
        trigger.kill();
      };
    });

    mm.add('(max-width: 1023px), (prefers-reduced-motion: reduce)', () => {
      setIsDesktopPinned(false);
    });

    return () => {
      mediaQuery.removeEventListener('change', onChange);
      mm.revert();
    };
  }, []);

  const handleStepSelect = (index: number) => {
    setActiveStep(index);
    const trigger = scrollTriggerRef.current;
    if (trigger && isDesktopPinned) {
      const targetProgress = index === 0 ? 0.08 : index === 1 ? 0.5 : 0.88;
      const targetScroll =
        trigger.start + (trigger.end - trigger.start) * targetProgress;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="why-learnova"
      aria-labelledby="why-learnova-heading"
      className="border-b border-[#DCE6EC] bg-white"
    >
      {/* Desktop Pinned Storytelling Sequence (disabled on mobile & reduced-motion) */}
      <div
        ref={pinStageRef}
        className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:py-20"
      >
        <div className="max-w-[640px]">
          <p className="font-mono text-xs font-medium tracking-wider text-[#12748D]">
            Why Learnova
          </p>
          <h2
            id="why-learnova-heading"
            className="mt-2 font-display text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#023047] sm:text-[2.25rem]"
          >
            Built for clarity, not catalogue noise
          </h2>
        </div>

        {/* Desktop Interactive / Scroll-Scrubbed 2-Column Layout */}
        {!prefersReducedMotion && (
          <div className="mt-10 hidden lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-12">
            {/* Left Column: Progress Bar + 3 Editorial Steps */}
            <div className="relative col-span-5 flex flex-col justify-between pl-6">
              {/* Vertical Scroll Progress Track */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-[#DCE6EC]"
              >
                <div
                  ref={progressFillRef}
                  className="h-full w-full origin-top rounded-full bg-[#219EBC] transition-transform duration-150"
                  style={{ transform: `scaleY(${(activeStep + 1) / WHY_STORY_STEPS.length})` }}
                />
              </div>

              <div className="space-y-4">
                {WHY_STORY_STEPS.map((step, index) => {
                  const isActive = activeStep === index;
                  return (
                    <div
                      key={step.id}
                      className={`rounded-xl border p-5 transition-colors duration-200 ${
                        isActive
                          ? 'border-[#219EBC] bg-[#FAFCFD]'
                          : 'border-transparent bg-transparent opacity-65 hover:opacity-95'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => handleStepSelect(index)}
                        aria-current={isActive ? 'step' : undefined}
                        className="flex w-full items-start gap-3.5 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
                      >
                        <span
                          className={`font-mono text-xs font-semibold pt-1 tabular-nums ${
                            isActive ? 'text-[#12748D]' : 'text-[#647782]'
                          }`}
                        >
                          {step.number}
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-semibold text-[#023047]">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#485C68]">
                            {step.description}
                          </p>
                        </div>
                      </button>

                      {isActive && (
                        <div className="mt-4 flex items-center justify-between gap-4 border-t border-[#DCE6EC] pt-3 pl-7">
                          <span className="text-xs text-[#485C68]">
                            {step.detailNote}
                          </span>
                          <button
                            type="button"
                            onClick={() => onNavigateSection(step.targetSectionId)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#12748D] whitespace-nowrap shrink-0 cursor-pointer hover:text-[#023047] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
                          >
                            <span>{step.actionLabel}</span>
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Corresponding Product-Style Visual Panel */}
            <div className="col-span-7">
              <div className="h-full min-h-[430px] overflow-hidden rounded-xl border border-[#DCE6EC] bg-white">
                <StoryMockup stepIndex={activeStep} />
              </div>
            </div>
          </div>
        )}

        {/* Mobile / Tablet & Reduced-Motion Readable Static Fallback */}
        <div className={`mt-10 space-y-8 ${prefersReducedMotion ? 'block' : 'lg:hidden'}`}>
          {WHY_STORY_STEPS.map((step, index) => (
            <article
              key={step.id}
              className="overflow-hidden rounded-xl border border-[#DCE6EC] bg-[#FAFCFD]"
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#12748D] tabular-nums">
                    {step.number}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-[#023047]">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#485C68]">
                  {step.description}
                </p>
                <button
                  type="button"
                  onClick={() => onNavigateSection(step.targetSectionId)}
                  className="mt-3 inline-flex min-h-[40px] items-center gap-1.5 text-xs font-semibold text-[#12748D] cursor-pointer hover:underline"
                >
                  <span>{step.actionLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>

              <div className="border-t border-[#DCE6EC] bg-white">
                <StoryMockup stepIndex={index} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
