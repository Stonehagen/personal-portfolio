import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
};

export default App;
