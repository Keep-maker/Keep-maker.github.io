import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  icon: ReactNode;
}

export function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
      <div className="p-2 bg-navy-800 text-white rounded-lg">{icon}</div>
      <h2 className="text-xl font-bold text-navy-900 tracking-tight">{title}</h2>
    </div>
  );
}
