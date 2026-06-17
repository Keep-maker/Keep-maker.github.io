import { projects } from '../data';
import { SectionTitle } from './SectionTitle';
import { Briefcase } from 'lucide-react';
import { Project } from '../types';

const levelLabels: Record<Project['level'], string> = {
  national: '国家级',
  provincial: '省部级',
  industry: '产学研',
};

const levelStyles: Record<Project['level'], string> = {
  national: 'bg-amber-50 text-amber-800 border-amber-200',
  provincial: 'bg-blue-50 text-blue-800 border-blue-200',
  industry: 'bg-emerald-50 text-emerald-800 border-emerald-200',
};

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 print-break-inside-avoid"
    >
      <SectionTitle title="科研项目" icon={<Briefcase size={18} />} />

      <div className="space-y-4">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="p-5 rounded-xl border border-slate-100 bg-slate-50/40 hover:bg-slate-50/70 transition-colors"
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h3 className="text-[15px] font-semibold text-slate-800 leading-snug flex-1 min-w-0">
                {project.title}
              </h3>
              <span
                className={`shrink-0 px-2 py-0.5 text-[11px] font-semibold rounded border ${levelStyles[project.level]}`}
              >
                {levelLabels[project.level]}
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-2">
              {project.source}
              <span className="mx-2 text-slate-300">｜</span>
              {project.period}
              <span className="mx-2 text-slate-300">｜</span>
              <span className="font-medium text-navy-700">{project.role}</span>
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">{project.contribution}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
