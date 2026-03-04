import React from 'react';
import { exchanges } from '../data';
import { SectionTitle } from './SectionTitle';
import { Calendar, ChevronRight } from 'lucide-react';

export const Exchanges: React.FC = () => {
  return (
    <section id="exchanges" className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/70 transform hover:-translate-y-1">
      <SectionTitle title="学术交流与会议" icon={<Calendar size={20} sm:size={24} />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {exchanges.map((exchange, idx) => (
          <div key={idx} className="p-4 sm:p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all bg-white flex flex-col gap-3 group border-l-4 border-l-slate-200 hover:border-l-blue-600">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-black text-blue-600 px-2 sm:px-3 py-1 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors tracking-widest uppercase">
                {exchange.date}
              </span>
              <ChevronRight size={14} sm:size={16} className="text-slate-300 group-hover:text-blue-600 transition-all transform group-hover:translate-x-1" />
            </div>
            <p className="text-slate-700 text-xs sm:text-sm font-bold leading-relaxed">
              {exchange.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
