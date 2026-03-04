import React from 'react';
import { personalInfo, educations } from '../data';
import { Mail, Phone, GraduationCap, MapPin, Layers, Printer, BookOpen } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <div className="lg:col-span-4 space-y-8">
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/70 transform hover:-translate-y-1">
        {/* 头部渐变背景 */}
        <div className="relative h-36 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800">
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-3xl border-4 border-white overflow-hidden shadow-2xl bg-slate-50">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="pt-16 pb-10 px-6 sm:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">{personalInfo.name}</h1>
          <p className="text-blue-600 font-semibold text-base sm:text-lg mb-4">{personalInfo.title}</p>

          <div className="flex flex-col items-center gap-2 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-bold max-w-full sm:max-w-none">
              <GraduationCap size={14} />
              <span className="whitespace-nowrap sm:whitespace-normal">{personalInfo.school}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs sm:text-sm font-bold max-w-full sm:max-w-none">
              <GraduationCap size={14} />
              <span className="whitespace-nowrap sm:whitespace-normal">{personalInfo.center}</span>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-400 text-xs font-medium">
              <MapPin size={14} />
              山东 · 济南
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 text-left border-t border-slate-50 pt-6 sm:pt-8">
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 sm:gap-4 text-slate-600 hover:text-blue-600 transition-colors group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                <Phone size={16} />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">{personalInfo.phone}</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 sm:gap-4 text-slate-600 hover:text-blue-600 transition-colors group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                <Mail size={16} />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">{personalInfo.email}</span>
            </a>
          </div>

          <div className="mt-8 p-4 sm:p-5 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl text-left border border-blue-100/50">
            <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <Layers size={14} />
              Research Interest
            </h3>
            <p className="text-slate-800 text-xs sm:text-sm font-bold leading-relaxed">
              {personalInfo.researchInterest}
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="mt-6 sm:mt-8 w-full flex items-center justify-center gap-2 py-3 sm:py-4 bg-slate-900 text-white rounded-2xl hover:bg-black hover:shadow-lg transition-all active:scale-95 no-print font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="导出专业版 PDF"
          >
            <Printer size={16} sm:size={18} />
            <span>导出专业版 PDF</span>
          </button>
        </div>
      </div>

      {/* 教育背景卡片 */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/70 transform hover:-translate-y-1">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 sm:mb-8 flex items-center gap-3">
          <BookOpen size={20} sm:size={22} className="text-blue-600" />
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
                <div className="font-bold text-slate-900 text-base sm:text-lg leading-tight mb-1">{edu.school}</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">{edu.degree} · {edu.major}</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-tight">{edu.college}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
