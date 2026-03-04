import React from 'react';
import { projects } from '../data';
import { SectionTitle } from './SectionTitle';
import { Layers, Calendar, Trophy } from 'lucide-react';

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/70 transform hover:-translate-y-1">
            <SectionTitle title="核心科研项目" icon={<Layers size={20} sm:size={24} />} />
            <div className="space-y-10 sm:space-y-12">
                {projects.map((project, idx) => (
                    <div key={idx} className="flex gap-6 sm:gap-8 group">
                        <div className="hidden sm:flex flex-col items-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-sm sm:text-lg shrink-0 group-hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
                                {idx + 1}
                            </div>
                            {idx !== projects.length - 1 && <div className="w-px flex-1 bg-slate-100 my-3 sm:my-4"></div>}
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 sm:mb-4">
                                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                                <span className="text-xs font-bold text-slate-400 whitespace-nowrap bg-slate-50 px-3 sm:px-4 py-1.5 rounded-full flex items-center gap-2 border border-slate-100">
                                    <Calendar size={12} sm:size={14} />
                                    {project.period}
                                </span>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-[15px] font-medium">
                                {project.responsibility}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="mt-6 sm:mt-8 p-6 sm:p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-xl shadow-blue-100">
                    <div className="flex items-start gap-3 sm:gap-4">
                        <Trophy className="shrink-0 text-blue-200 mt-1" size={20} sm:size={24} />
                        <div>
                            <h5 className="font-bold text-base sm:text-lg mb-2">产学研应用示范</h5>
                            <p className="text-blue-100/90 text-xs sm:text-sm md:text-[14px] leading-relaxed italic">
                                作为核心成员参与了海尔、威达重工等大型企业的智能制造管控平台研发，主导了大规模通信流量预测、产品质量实时检测及智能排产等关键算法的设计与落地。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
