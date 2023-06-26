import React from 'react';
import '../styles/Menu.css';
import Moon from '../img/moon.svg';
import MoonFill from '../img/moonFill.svg';
import Sun from '../img/sun.svg';
import SunFill from '../img/sunFill.svg';

const Menu = ({ lightMode, setLightMode }) => {
  return (
    <div className="Menu">
      <div>
        <img
          onClick={() => setLightMode(!lightMode)}
          className=""
          onMouseOver={(e) =>
            (e.currentTarget.src = lightMode ? MoonFill : SunFill)
          }
          onMouseOut={(e) => (e.currentTarget.src = lightMode ? Moon : Sun)}
          src={lightMode ? Moon : Sun}
          alt={lightMode ? 'dark mode' : 'light mode'}
        />
      </div>
    </div>
  );
};

export default Menu;
