import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Publications } from './components/Publications';
import { Projects } from './components/Projects';
import { Exchanges } from './components/Exchanges';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfe] py-12 px-4 sm:px-6 lg:px-8 selection:bg-blue-100 selection:text-blue-900">
      {/* 顶部装饰条 */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 z-50"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* 左侧栏：个人核心信息 */}
        <Sidebar />

        {/* 右侧主内容区 */}
        <div className="lg:col-span-8 space-y-8 sm:space-y-10">
          <Publications />
          <Projects />
          <Exchanges />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
