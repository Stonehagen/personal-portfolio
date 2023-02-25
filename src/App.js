import React from 'react';
import About from './components/About';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <div className='Projects'>My Projects</div>
      <div className='Contact'>Contact Me</div>
    </div>
  );
};

export default App;
