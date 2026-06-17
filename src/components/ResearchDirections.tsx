import { researchDirections } from '../data';
import { SectionTitle } from './SectionTitle';
import { Compass } from 'lucide-react';

export function ResearchDirections() {
  return (
    <section
      id="research"
      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 print-break-inside-avoid"
    >
      <SectionTitle title="研究方向" icon={<Compass size={18} />} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {researchDirections.map((direction, idx) => (
          <article
            key={direction.title}
            className="p-5 rounded-xl border border-slate-100 bg-gradient-to-b from-slate-50/80 to-white hover:border-navy-100 transition-colors"
          >
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-navy-800 text-white text-xs font-bold mb-3">
              {idx + 1}
            </span>
            <h3 className="text-sm font-semibold text-navy-900 leading-snug mb-2">{direction.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{direction.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
