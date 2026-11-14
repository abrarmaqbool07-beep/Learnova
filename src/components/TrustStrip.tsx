import { BookOpen, CheckCircle2, Clock, Scale } from 'lucide-react';
import { TRUST_COMMITMENTS } from '../data/learnovaData';
import type { TrustCommitment } from '../types/learnova';

const ICON_MAP: Record<TrustCommitment['iconName'], typeof BookOpen> = {
  BookOpen,
  Scale,
  Clock,
  CheckCircle2,
};

export function TrustStrip() {
  return (
    <section
      aria-label="Platform commitments"
      className="border-b border-[#DCE6EC] bg-[#FAFCFD]"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-7 sm:px-8 sm:py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {TRUST_COMMITMENTS.map((item) => {
            const IconComponent = ICON_MAP[item.iconName];
            return (
              <div key={item.id} className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#DCE6EC] bg-[#8ECAE6]/20 text-[#023047]">
                  <IconComponent className="h-4 w-4 text-[#12748D]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-sm font-semibold text-[#023047]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#485C68]">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
