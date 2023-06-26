import React, { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Menu from './components/Menu';

const App = () => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('lightmode', lightMode);
  }, [lightMode]);

  return (
    <div className="App">
      <Menu lightMode={lightMode} setLightMode={setLightMode} />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
