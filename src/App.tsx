import React from 'react';
import { PageTransition } from './components/PageTransition';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <PageTransition>
        <Hero />
        <Stats />
        <Team />
        <Footer />
      </PageTransition>
    </div>
  );
}

export default App;