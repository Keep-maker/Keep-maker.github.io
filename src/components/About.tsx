import { researchProfile } from '../data';
import { SectionTitle } from './SectionTitle';
import { User } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 print-break-inside-avoid"
    >
      <SectionTitle title="研究画像" icon={<User size={18} />} />
      <p className="text-[15px] text-slate-700 leading-[1.85]">{researchProfile}</p>
    </section>
  );
}
