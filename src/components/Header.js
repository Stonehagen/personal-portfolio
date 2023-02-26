import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div>
        <h1>
          Hi, I'm <span>Tobias</span>
        </h1>
        <h2>
          a <span>full-stack</span> web developer
        </h2>
      </div>
    </div>
  );
};

export default Header;
