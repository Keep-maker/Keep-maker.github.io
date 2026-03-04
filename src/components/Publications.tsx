import React from 'react';
import { publications } from '../data';
import { SectionTitle } from './SectionTitle';
import { Award } from 'lucide-react';
import { Publication } from '../types';

const PublicationItem: React.FC<{ pub: Publication }> = ({ pub }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 group">
      {/* Thumbnail */}
      <div className="flex-shrink-0">
        {pub.image ? (
          <div className="w-full sm:w-40 h-32 rounded-lg overflow-hidden border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow">
            <img 
              src={pub.image} 
              alt={pub.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full sm:w-40 h-32 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 border border-slate-200">
            <span className="text-xs">No Preview</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 font-serif">
        {/* Title */}
        {pub.url ? (
          <a 
            href={pub.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <h4 className="text-lg sm:text-xl font-bold text-blue-700 leading-tight hover:underline mb-2">
              {pub.title}
            </h4>
          </a>
        ) : (
          <h4 className="text-lg sm:text-xl font-bold text-blue-700 leading-tight mb-2">
            {pub.title}
          </h4>
        )}

        {/* Authors */}
        <div className="text-slate-800 text-sm sm:text-[15px] leading-relaxed mb-1">
          {pub.authors ? (
            <span dangerouslySetInnerHTML={{ 
              __html: pub.authors.replace(
                /(Daojun Liang|Liang Daojun|D. Liang|梁道君)/g, 
                '<span class="font-bold text-slate-900">$1</span>'
              ) 
            }} />
          ) : (
            <span className="text-slate-500 italic">Authors not listed</span>
          )}
        </div>

        {/* Venue */}
        <div className="text-slate-600 text-sm sm:text-[15px] italic mb-3">
          {pub.venue}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-1.5 gap-y-1 text-sm font-sans">
          {pub.links && pub.links.length > 0 ? (
            pub.links.map((link, idx) => (
              <React.Fragment key={idx}>
                <a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                >
                  {link.label}
                </a>
                {idx < pub.links!.length - 1 && <span className="text-slate-300">/</span>}
              </React.Fragment>
            ))
          ) : (
            // Fallback tags if no links are provided
             pub.tags.map((tag, tIdx) => (
              <span key={tIdx} className={`px-2 py-0.5 rounded text-[10px] border ${
                tag.includes('CCF A') ? 'bg-rose-50 text-rose-600 border-rose-100' :
                'bg-slate-50 text-slate-500 border-slate-200'
              }`}>
                {tag}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export const Publications: React.FC = () => {
  return (
    <section id="publications" className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/70 transform hover:-translate-y-1">
      <SectionTitle title="代表性学术论文" icon={<Award size={20} sm:size={24} />} />

      <div className="space-y-2 divide-y divide-slate-100">
        {publications.map((pub, idx) => (
          <div key={pub.id} className={idx > 0 ? "pt-8" : ""}>
            <PublicationItem pub={pub} />
          </div>
        ))}
      </div>
    </section>
  );
};
