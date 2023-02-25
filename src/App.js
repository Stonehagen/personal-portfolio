import React from 'react';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='About-Me'>About Me</div>
      <div className='Projects'>My Projects</div>
      <div className='Contact'>Contact Me</div>
    </div>
  );
};

export default App;
