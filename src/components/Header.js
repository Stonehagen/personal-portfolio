import React from 'react';
import '../styles/Header.css';
import { ReactComponent as Cursor } from '../img/cursor.svg';

const Header = () => {
  return (
    <div className="Header">
      <div>
        <h1>
          Hi, I'm <span>Tobias</span>
        </h1>
        <h2>
          A <span>FULL-STACK</span> WEB DEVELOPER
          <Cursor />
        </h2>
      </div>
    </div>
  );
};

export default Header;
