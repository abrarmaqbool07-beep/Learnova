import { useState } from 'react';
import { Clock, Star } from 'lucide-react';
import type { CourseItem } from '../types/learnova';

interface CourseCardProps {
  course: CourseItem;
  onSelectCourse: (course: CourseItem) => void;
}

function EditorialGridThumbnail({ title }: { title: string }) {
  return (
    <div
      aria-label={title}
      className="relative flex h-full w-full items-center justify-center bg-[#F0F6F9] p-6"
    >
      <svg
        viewBox="0 0 320 180"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <rect x="0.5" y="0.5" width="319" height="179" rx="4" stroke="#C5DAE5" />
        <line x1="80" y1="0" x2="80" y2="180" stroke="#DCEAF1" strokeWidth="1" />
        <line x1="160" y1="0" x2="160" y2="180" stroke="#DCEAF1" strokeWidth="1" />
        <line x1="240" y1="0" x2="240" y2="180" stroke="#DCEAF1" strokeWidth="1" />
        <line x1="0" y1="60" x2="320" y2="60" stroke="#DCEAF1" strokeWidth="1" />
        <line x1="0" y1="120" x2="320" y2="120" stroke="#DCEAF1" strokeWidth="1" />
        <rect x="36" y="34" width="124" height="112" rx="4" fill="#FFFFFF" stroke="#8ECAE6" />
        <rect x="52" y="52" width="52" height="6" rx="2" fill="#219EBC" />
        <rect x="52" y="68" width="90" height="5" rx="2" fill="#023047" />
        <rect x="52" y="80" width="76" height="4" rx="2" fill="#647782" />
        <rect x="52" y="90" width="84" height="4" rx="2" fill="#647782" />
        <rect x="52" y="106" width="60" height="4" rx="2" fill="#FFB703" />
        <rect x="176" y="48" width="108" height="84" rx="4" fill="#FAFCFD" stroke="#B7D6E5" />
        <line x1="192" y1="70" x2="266" y2="70" stroke="#023047" strokeWidth="3" />
        <line x1="192" y1="86" x2="250" y2="86" stroke="#647782" strokeWidth="2" />
        <line x1="192" y1="98" x2="258" y2="98" stroke="#647782" strokeWidth="2" />
        <line x1="192" y1="110" x2="236" y2="110" stroke="#219EBC" strokeWidth="2" />
      </svg>
    </div>
  );
}

export function CourseCard({ course, onSelectCourse }: CourseCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onSelectCourse(course)}
      className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#DCE6EC] bg-white text-left cursor-pointer transition-all duration-150 hover:border-[#219EBC] hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
    >
      {/* 16:9 Course Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#F5F9FB] border-b border-[#DCE6EC]">
        {course.thumbnailSrc && !imgError ? (
          <img
            src={course.thumbnailSrc}
            alt={course.thumbnailAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <EditorialGridThumbnail title={course.title} />
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Quiet unboxed category & level metadata */}
        <div className="flex items-center gap-2 text-xs text-[#485C68]">
          <span className="font-semibold text-[#12748D]">{course.categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span>{course.level}</span>
        </div>

        {/* Title (max two lines) */}
        <h3 className="mt-2.5 line-clamp-2 min-h-[3.25rem] font-display text-lg font-semibold leading-snug text-[#023047] group-hover:text-[#12748D] transition-colors">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="mt-2 text-sm text-[#485C68]">
          {course.instructor}
          <span className="text-[#647782]"> · {course.instructorRole}</span>
        </p>

        {/* Practical Comparison Metadata: Rating / New + Duration / Lessons */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-[#DCE6EC] pt-3.5 text-xs text-[#485C68]">
          {course.rating !== undefined && course.reviewCount !== undefined ? (
            <span className="inline-flex items-center gap-1 tabular-nums">
              <Star
                className="h-3.5 w-3.5 fill-[#FFB703] text-[#FB8500]"
                aria-hidden="true"
              />
              <span className="font-semibold text-[#023047]">
                {course.rating.toFixed(1)}
              </span>
              <span>({course.reviewCount} reviews)</span>
            </span>
          ) : course.isNew ? (
            <span className="font-semibold text-[#12748D]">New release</span>
          ) : null}

          {course.duration ? (
            <span className="inline-flex items-center gap-1 tabular-nums">
              <Clock className="h-3.5 w-3.5 text-[#219EBC]" aria-hidden="true" />
              <span>{course.duration}</span>
            </span>
          ) : (
            <span className="tabular-nums">{course.lessonCount} lessons</span>
          )}
        </div>

        {/* Aligned Footer Baseline: Free / Price + Action Cue */}
        <div className="mt-auto flex items-center justify-between pt-4">
          {course.isFree ? (
            <span className="inline-flex items-center rounded-md border border-[#8ECAE6] bg-[#8ECAE6]/25 px-2.5 py-1 text-xs font-semibold text-[#023047]">
              Free
            </span>
          ) : (
            <span className="font-mono text-base font-semibold text-[#023047] tabular-nums">
              ${course.priceUsd}.00
            </span>
          )}

          <span className="text-xs font-medium text-[#485C68] transition-colors group-hover:text-[#023047]">
            View syllabus →
          </span>
        </div>
      </div>
    </button>
  );
}
