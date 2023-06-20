import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import WriterProjects from './WriterProjects';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <WriterProjects />
      <Contact />
    
    </div>
  );
};

export default App;
