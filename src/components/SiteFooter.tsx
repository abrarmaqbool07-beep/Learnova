interface SiteFooterProps {
  onNavigateSection: (sectionId: string) => void;
  onSelectFilterFree: () => void;
}

export function SiteFooter({
  onNavigateSection,
  onSelectFilterFree,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-[#DCE6EC] bg-[#FAFCFD] text-[#023047]">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Summary */}
          <div className="lg:col-span-5">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-[#023047] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#219EBC]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <rect width="24" height="24" rx="5" fill="#023047" />
                <path d="M7.5 6.5V17.5H16.5V15H10.3V6.5H7.5Z" fill="#FFB703" />
              </svg>
              <span>Learnova</span>
            </a>

            <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-[#485C68]">
              Learnova helps people build useful skills through accessible, well-structured free and paid courses taught by experienced practitioners.
            </p>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h2 className="font-display text-xs font-semibold uppercase tracking-wider text-[#647782]">
              Explore
            </h2>
            <ul className="mt-3.5 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('courses')}
                  className="text-[#485C68] cursor-pointer hover:text-[#023047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
                >
                  All courses
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onSelectFilterFree}
                  className="text-[#485C68] cursor-pointer hover:text-[#023047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
                >
                  Free courses
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('categories')}
                  className="text-[#485C68] cursor-pointer hover:text-[#023047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
                >
                  Categories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('paths')}
                  className="text-[#485C68] cursor-pointer hover:text-[#023047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
                >
                  Learning paths
                </button>
              </li>
            </ul>
          </div>

          {/* Platform Links */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-xs font-semibold uppercase tracking-wider text-[#647782]">
              Platform
            </h2>
            <ul className="mt-3.5 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('why-learnova')}
                  className="text-[#485C68] cursor-pointer hover:text-[#023047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
                >
                  Why Learnova
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('included')}
                  className="text-[#485C68] cursor-pointer hover:text-[#023047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
                >
                  Course standards
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[#DCE6EC] pt-6 text-xs text-[#647782] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Learnova. Landing page preview.</p>
          <p>Course catalogue details and enrollment flows reflect landing-page scope.</p>
        </div>
      </div>
    </footer>
  );
}
