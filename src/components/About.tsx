import React from 'react';
import { personalInfo, educations } from '../data';
import { Mail, Phone, GraduationCap, MapPin, Layers, Printer, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/70 transform hover:-translate-y-1">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-40 h-40 rounded-3xl border-4 border-white overflow-hidden shadow-2xl bg-slate-50 flex-shrink-0">
            <img
              src="/images/dafc5bd0cfff3aeaa1abf4f14c11b1f1.jpg"
              alt={personalInfo.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">{personalInfo.name}</h1>
            <p className="text-blue-600 font-semibold text-lg sm:text-xl mb-4">{personalInfo.title}</p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold">
                <GraduationCap size={16} />
                <span>{personalInfo.school}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold">
                <GraduationCap size={16} />
                <span>{personalInfo.center}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-600">
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone size={16} />
                <span className="font-semibold">{personalInfo.phone}</span>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail size={16} />
                <span className="font-semibold">{personalInfo.email}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="font-semibold">山东 · 济南</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 p-6 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl border border-blue-100/50">
          <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
            <Layers size={16} />
            Research Interest
          </h3>
          <p className="text-slate-800 text-base font-bold leading-relaxed">{personalInfo.researchInterest}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <BookOpen size={22} className="text-blue-600" />
            教育背景
          </h3>
          <div className="space-y-8 sm:space-y-10 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
            {educations.map((edu, idx) => (
              <div key={idx} className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 w-[24px] h-[24px] bg-white border-2 border-slate-200 rounded-full flex items-center justify-center z-10 group-hover:border-blue-600 transition-colors">
                  <div className="w-2.5 h-2.5 bg-slate-200 rounded-full group-hover:bg-blue-600 transition-colors"></div>
                </div>
                <div className="relative z-10">
                  <div className="text-xs font-black text-blue-600 mb-1 tracking-wider">{edu.period}</div>
                  <div className="font-bold text-slate-900 text-lg leading-tight mb-1">{edu.school}</div>
                  <div className="text-sm font-semibold text-slate-500">{edu.degree} · {edu.major}</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-tight">{edu.college}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => window.print()}
          className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl hover:bg-black hover:shadow-lg transition-all active:scale-95 no-print font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label="导出专业版 PDF"
        >
          <Printer size={18} />
          <span>导出专业版 PDF</span>
        </button>
      </div>
    </section>
  );
};
