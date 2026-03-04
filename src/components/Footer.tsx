import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 sm:mt-24 text-center pb-10 sm:pb-12">
      <div className="flex justify-center gap-8 sm:gap-10 mb-4 sm:mb-6">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
      </div>
      <p className="text-slate-400 text-xs sm:text-sm font-medium tracking-wide">© 2026 梁道君 · 个人学术简历 · 齐鲁工业大学（山东省科学院）</p>
    </footer>
  );
};
