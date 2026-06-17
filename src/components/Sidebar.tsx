import { personalInfo, educations, researchKeywords } from '../data';
import { Mail, Phone, MapPin, Printer, GraduationCap } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="lg:col-span-3 space-y-5 lg:sticky lg:top-20 lg:self-start">
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 print-break-inside-avoid">
        <h2 className="text-xs font-semibold text-navy-600 uppercase tracking-wider mb-4">联系方式</h2>
        <div className="space-y-3 text-sm">
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2.5 text-slate-600 hover:text-navy-700 transition-colors"
          >
            <Phone size={15} className="shrink-0 text-slate-400" />
            <span>{personalInfo.phone}</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2.5 text-slate-600 hover:text-navy-700 transition-colors break-all"
          >
            <Mail size={15} className="shrink-0 text-slate-400" />
            <span>{personalInfo.email}</span>
          </a>
          <div className="flex items-start gap-2.5 text-slate-600">
            <MapPin size={15} className="shrink-0 text-slate-400 mt-0.5" />
            <span className="leading-relaxed">{personalInfo.location}</span>
          </div>
        </div>

        <div className="no-print mt-4 pt-4 border-t border-slate-100">
          <button
            onClick={() => window.print()}
            className="w-full flex items-center justify-center gap-2 py-2 bg-navy-800 text-white text-xs font-medium rounded-lg hover:bg-navy-900 transition-colors"
            aria-label="打印简历"
          >
            <Printer size={14} />
            打印 / 导出 PDF
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 print-break-inside-avoid">
        <h2 className="text-xs font-semibold text-navy-600 uppercase tracking-wider mb-3">研究关键词</h2>
        <div className="flex flex-wrap gap-1.5">
          {researchKeywords.map((keyword) => (
            <span
              key={keyword}
              className="px-2.5 py-1 text-xs font-medium text-navy-700 bg-slate-50 rounded-full border border-slate-200"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 print-break-inside-avoid">
        <h2 className="text-xs font-semibold text-navy-600 uppercase tracking-wider mb-4 flex items-center gap-1.5">
          <GraduationCap size={14} />
          教育背景
        </h2>
        <div className="space-y-4">
          {educations.map((edu, idx) => (
            <div key={idx} className="text-sm">
              <time className="text-xs font-semibold text-navy-600 tabular-nums">{edu.period}</time>
              <p className="mt-0.5 font-medium text-slate-800 leading-snug">
                {edu.school}，{edu.degree}，{edu.major}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
