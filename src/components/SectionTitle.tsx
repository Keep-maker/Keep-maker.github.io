import React from 'react';

interface SectionTitleProps {
  title: string;
  icon: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = React.memo(({ title, icon }) => (
  <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-4">
    <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-blue-200 shadow-lg">
      {icon}
    </div>
    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h2>
  </div>
));

SectionTitle.displayName = 'SectionTitle';
