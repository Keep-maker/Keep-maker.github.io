import { personalInfo, heroStats } from '../data';

export function Hero() {
  return (
    <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden print-break-inside-avoid">
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex items-start gap-5 sm:gap-6 flex-1 min-w-0">
            <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="min-w-0 pt-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-navy-700 font-medium leading-relaxed">
                {personalInfo.title}
                <span className="mx-2 text-slate-300">｜</span>
                {personalInfo.school} · {personalInfo.department}
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                <span className="font-medium text-slate-700">研究方向：</span>
                {personalInfo.researchAreas}
              </p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-2xl">
                {personalInfo.tagline}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 lg:w-72 shrink-0">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="text-center py-4 px-3 bg-gradient-to-b from-navy-50/80 to-white rounded-xl border border-navy-100/70"
              >
                <p className="text-2xl font-bold text-navy-800 tabular-nums">
                  {stat.value}
                  <span className="text-xs font-medium text-navy-600 ml-0.5">{stat.unit}</span>
                </p>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
