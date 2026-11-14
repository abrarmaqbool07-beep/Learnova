import { PLATFORM_STANDARDS } from '../data/learnovaData';

export function CourseStandardsSection() {
  return (
    <section
      id="included"
      aria-labelledby="standards-heading"
      className="border-b border-[#DCE6EC] bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-[620px]">
          <p className="font-mono text-xs font-medium tracking-wider text-[#12748D]">
            What You Can Expect
          </p>
          <h2
            id="standards-heading"
            className="mt-2 font-display text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#023047] sm:text-[2.15rem]"
          >
            Consistent standards across every course
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 divide-y divide-[#DCE6EC] border-y border-[#DCE6EC] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {PLATFORM_STANDARDS.map((item) => (
            <div key={item.label} className="py-6 lg:px-8 lg:py-8 lg:first:pl-0 lg:last:pr-0">
              <p className="font-mono text-xs font-semibold text-[#12748D]">
                {item.label}
              </p>
              <h3 className="mt-2.5 font-display text-lg font-semibold text-[#023047]">
                {item.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#485C68]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
