import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';

import './App.css';

import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="App">
      <MatrixBackground />
      <Navbar />
      <Hero />
      <main id="main">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
      </main>
    </div>
  );
}

export default App;
