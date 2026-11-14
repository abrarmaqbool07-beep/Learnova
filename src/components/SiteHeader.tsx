import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface SiteHeaderProps {
  onNavigateSection: (sectionId: string) => void;
}

const NAV_LINKS = [
  { label: 'Courses', targetId: 'courses' },
  { label: 'Categories', targetId: 'categories' },
  { label: 'Why Learnova', targetId: 'why-learnova' },
  { label: 'Learning Paths', targetId: 'paths' },
];

export function SiteHeader({ onNavigateSection }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstDrawerLinkRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      firstDrawerLinkRef.current?.focus();
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (targetId: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(targetId);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md border-b border-[#DCE6EC] text-[#023047]'
          : 'bg-transparent border-b border-transparent text-white'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight whitespace-nowrap shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#219EBC]"
          aria-label="Learnova Home"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect
              width="24"
              height="24"
              rx="5"
              fill={scrolled || mobileMenuOpen ? '#023047' : '#FFB703'}
            />
            <path
              d="M7.5 6.5V17.5H16.5V15H10.3V6.5H7.5Z"
              fill={scrolled || mobileMenuOpen ? '#FFB703' : '#023047'}
            />
          </svg>
          <span>Learnova</span>
        </a>

        {/* Zone 2: Concise single-line Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 text-sm font-medium"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.targetId}
              type="button"
              onClick={() => handleLinkClick(link.targetId)}
              className={`relative py-1 whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#219EBC] ${
                scrolled
                  ? 'text-[#485C68] hover:text-[#023047]'
                  : 'text-white/90 hover:text-[#8ECAE6]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('courses')}
            className={`hidden md:inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC] ${
              scrolled
                ? 'bg-[#023047] text-white hover:bg-[#034160]'
                : 'bg-[#FFB703] text-[#023047] hover:bg-[#FB8500]'
            }`}
          >
            Explore courses
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC] ${
              scrolled || mobileMenuOpen
                ? 'text-[#023047] hover:bg-[#F5F9FB]'
                : 'text-white hover:bg-white/15'
            }`}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#DCE6EC] bg-white px-5 pb-6 pt-4 text-[#023047] shadow-lg"
        >
          <nav aria-label="Mobile primary" className="flex flex-col gap-1">
            {NAV_LINKS.map((link, idx) => (
              <button
                key={link.targetId}
                ref={idx === 0 ? firstDrawerLinkRef : undefined}
                type="button"
                onClick={() => handleLinkClick(link.targetId)}
                className="flex min-h-[44px] w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-base font-medium text-[#023047] hover:bg-[#F5F9FB] focus-visible:outline-2 focus-visible:outline-[#219EBC]"
              >
                <span>{link.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-4 border-t border-[#DCE6EC] pt-4">
            <button
              type="button"
              onClick={() => handleLinkClick('courses')}
              className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#023047] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#034160] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#219EBC]"
            >
              Explore courses
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
