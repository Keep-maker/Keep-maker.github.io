import { academicActivities } from '../data';
import { SectionTitle } from './SectionTitle';
import { CalendarDays, Mic2 } from 'lucide-react';

function Timeline({ items, emptyText }: { items: typeof academicActivities; emptyText: string }) {
  if (items.length === 0) {
    return <p className="text-sm text-slate-400">{emptyText}</p>;
  }

  return (
    <div className="relative pl-4 before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
      {items.map((item, idx) => (
        <div key={idx} className="relative pb-5 last:pb-0 pl-5">
          <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full bg-white border-2 border-navy-500" />
          <time className="text-xs font-semibold text-navy-600 tabular-nums">{item.date}</time>
          <p className="mt-1 text-sm text-slate-700 leading-relaxed">{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export function Exchanges() {
  const conferences = academicActivities.filter((a) => a.type === 'conference');
  const services = academicActivities.filter((a) => a.type === 'service');

  return (
    <section
      id="exchanges"
      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 print-break-inside-avoid"
    >
      <SectionTitle title="学术交流与服务" icon={<CalendarDays size={18} />} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-navy-800 mb-4 flex items-center gap-2">
            <CalendarDays size={15} className="text-navy-600" />
            会议报告 / 参会经历
          </h3>
          <Timeline items={conferences} emptyText="暂无记录" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-navy-800 mb-4 flex items-center gap-2">
            <Mic2 size={15} className="text-navy-600" />
            审稿 / Session Chair / 学术服务
          </h3>
          <Timeline items={services} emptyText="暂无记录" />
        </div>
      </div>
    </section>
  );
}
