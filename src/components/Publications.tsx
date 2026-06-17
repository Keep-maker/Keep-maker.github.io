import { useState } from 'react';
import { publications } from '../data';
import { SectionTitle } from './SectionTitle';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Publication } from '../types';

const AUTHOR_PATTERN = /(Daojun Liang|Liang Daojun|D\. Liang|梁道君)/g;

function TagBadge({ tag }: { tag: string }) {
  const isHighlight = tag.includes('CCF A') || tag.includes('顶会') || tag.includes('一区');
  const isPending = tag.includes('返修');

  let className = 'px-2 py-0.5 rounded text-[11px] font-medium border ';
  if (isHighlight) {
    className += 'bg-amber-50 text-amber-800 border-amber-200';
  } else if (isPending) {
    className += 'bg-slate-100 text-slate-500 border-slate-200';
  } else {
    className += 'bg-slate-50 text-slate-600 border-slate-200';
  }

  return <span className={className}>{tag}</span>;
}

function PublicationItem({ pub, compact = false }: { pub: Publication; compact?: boolean }) {
  const validLinks = (pub.links ?? []).filter((link) => link.url && link.url !== '#');

  return (
    <article className={`${compact ? 'py-4' : 'py-5'} first:pt-0 print-break-inside-avoid`}>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {pub.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      {pub.url ? (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[15px] font-semibold text-navy-800 hover:text-navy-600 leading-snug mb-1.5 transition-colors"
        >
          {pub.title}
        </a>
      ) : (
        <h3 className="text-[15px] font-semibold text-navy-800 leading-snug mb-1.5">{pub.title}</h3>
      )}

      {pub.authors && (
        <p
          className="text-sm text-slate-600 leading-relaxed mb-1"
          dangerouslySetInnerHTML={{
            __html: pub.authors.replace(AUTHOR_PATTERN, '<strong class="text-slate-800">$1</strong>'),
          }}
        />
      )}

      <p className="text-sm text-slate-500 italic mb-2">{pub.venue}</p>

      {validLinks.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-1 text-xs">
          {validLinks.map((link, idx) => (
            <span key={link.label} className="inline-flex items-center">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-600 hover:text-navy-800 hover:underline font-medium"
              >
                {link.label}
              </a>
              {idx < validLinks.length - 1 && <span className="mx-1.5 text-slate-300">·</span>}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export function Publications() {
  const [showAll, setShowAll] = useState(false);
  const featured = publications.filter((p) => p.featured);
  const others = publications.filter((p) => !p.featured);

  return (
    <section
      id="publications"
      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 print-break-inside-avoid"
    >
      <SectionTitle title="代表性论文" icon={<BookOpen size={18} />} />

      <p className="text-sm text-slate-500 mb-5 -mt-2">
        精选最能体现研究能力的 {featured.length} 篇代表作，完整列表可展开查看。
      </p>

      <div className="divide-y divide-slate-100">
        {featured.map((pub) => (
          <PublicationItem key={pub.id} pub={pub} />
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-5 no-print">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-navy-700 bg-navy-50 hover:bg-navy-100 border border-navy-100 rounded-lg transition-colors"
          >
            {showAll ? (
              <>
                <ChevronUp size={16} />
                收起完整论文列表
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                查看完整论文列表（{others.length} 篇）
              </>
            )}
          </button>

          {showAll && (
            <div className="mt-4 pt-4 border-t border-slate-100 divide-y divide-slate-100">
              {others.map((pub) => (
                <PublicationItem key={pub.id} pub={pub} compact />
              ))}
            </div>
          )}
        </div>
      )}

      {others.length > 0 && (
        <div className="hidden print:block mt-4 pt-4 border-t border-slate-100 divide-y divide-slate-100">
          {others.map((pub) => (
            <PublicationItem key={pub.id} pub={pub} compact />
          ))}
        </div>
      )}
    </section>
  );
}
