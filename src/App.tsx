import React from 'react';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Projects } from './components/Projects';
import { Exchanges } from './components/Exchanges';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfe] selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          <About />
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
