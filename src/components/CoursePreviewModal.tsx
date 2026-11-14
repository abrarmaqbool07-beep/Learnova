import { useEffect, useRef } from 'react';
import { Clock, Star, X, BookOpen } from 'lucide-react';
import type { CourseItem } from '../types/learnova';

interface CoursePreviewModalProps {
  course: CourseItem | null;
  onClose: () => void;
}

export function CoursePreviewModal({ course, onClose }: CoursePreviewModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!course) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#023047]/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-[640px] overflow-y-auto rounded-2xl border border-[#DCE6EC] bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#485C68]">
              <span className="font-semibold text-[#12748D]">
                {course.categoryLabel}
              </span>
              <span aria-hidden="true">·</span>
              <span>{course.level}</span>
            </div>
            <h2
              id="course-modal-title"
              className="mt-2 font-display text-xl font-semibold leading-snug text-[#023047] sm:text-2xl"
            >
              {course.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close course syllabus preview"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#DCE6EC] text-[#485C68] cursor-pointer transition-colors hover:border-[#219EBC] hover:text-[#023047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-3 text-sm text-[#485C68]">
          Taught by{' '}
          <span className="font-medium text-[#023047]">{course.instructor}</span>{' '}
          ({course.instructorRole})
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-[#DCE6EC] py-3.5 text-xs text-[#485C68]">
          {course.rating !== undefined && course.reviewCount !== undefined ? (
            <span className="inline-flex items-center gap-1.5 tabular-nums">
              <Star
                className="h-3.5 w-3.5 fill-[#FFB703] text-[#FB8500]"
                aria-hidden="true"
              />
              <span className="font-semibold text-[#023047]">
                {course.rating.toFixed(1)}
              </span>
              <span>({course.reviewCount} reviews)</span>
            </span>
          ) : (
            <span className="font-semibold text-[#12748D]">New release</span>
          )}

          {course.duration && (
            <span className="inline-flex items-center gap-1.5 tabular-nums">
              <Clock className="h-3.5 w-3.5 text-[#219EBC]" aria-hidden="true" />
              <span>{course.duration}</span>
            </span>
          )}

          <span className="inline-flex items-center gap-1.5 tabular-nums">
            <BookOpen className="h-3.5 w-3.5 text-[#219EBC]" aria-hidden="true" />
            <span>{course.lessonCount} lessons</span>
          </span>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-[#023047]">
          {course.summary}
        </p>

        <div className="mt-6">
          <h3 className="font-display text-sm font-semibold text-[#023047]">
            Syllabus outline
          </h3>
          <ul className="mt-3 space-y-2.5">
            {course.syllabus.map((module) => (
              <li
                key={module}
                className="rounded-lg border border-[#DCE6EC] bg-[#FAFCFD] px-4 py-3 text-xs font-medium text-[#023047]"
              >
                {module}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-[#DCE6EC] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {course.isFree ? (
              <span className="inline-flex items-center rounded-md border border-[#8ECAE6] bg-[#8ECAE6]/25 px-3 py-1 text-xs font-semibold text-[#023047]">
                Free course
              </span>
            ) : (
              <div>
                <span className="font-mono text-lg font-semibold text-[#023047] tabular-nums">
                  ${course.priceUsd}.00
                </span>
                <span className="ml-2 text-xs text-[#485C68]">
                  Full syllabus access
                </span>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#023047] px-5 py-2.5 text-sm font-semibold text-white cursor-pointer transition-colors hover:bg-[#034160] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
          >
            {course.isFree ? 'Close free preview' : 'Close syllabus preview'}
          </button>
        </div>

        <p className="mt-3 text-[11px] leading-relaxed text-[#647782]">
          {course.isFree
            ? 'Full lesson playback and learner sign-in are scheduled for the next phase beyond this landing page.'
            : 'Full course detail pages and checkout are outside this landing-page preview scope.'}
        </p>
      </div>
    </div>
  );
}
