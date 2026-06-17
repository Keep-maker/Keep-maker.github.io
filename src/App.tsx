import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ResearchDirections } from './components/ResearchDirections';
import { Publications } from './components/Publications';
import { Projects } from './components/Projects';
import { Exchanges } from './components/Exchanges';
import { Footer } from './components/Footer';

const navItems = [
  { href: '#about', label: '学术主页' },
  { href: '#publications', label: '论文' },
  { href: '#projects', label: '项目' },
  { href: '#exchanges', label: '学术动态' },
];

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="no-print border-b border-slate-200/80 bg-white/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-navy-800 tracking-wide">梁道君 · 学术主页</span>
          <nav className="hidden sm:flex items-center gap-5 text-xs font-medium text-slate-500">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-navy-700 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="mb-8">
          <Hero />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <Sidebar />
          <div className="lg:col-span-9 space-y-6">
            <About />
            <ResearchDirections />
            <Publications />
            <Projects />
            <Exchanges />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
