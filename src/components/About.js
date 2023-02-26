import React from 'react';
import '../styles/About.css';
import ProfilePic from '../img/profile.jpg';

const About = () => {
  return (
    <div on className="About">
      <img src={ProfilePic} alt='Tobias Steinhagen'/>
      <h1>About me</h1>
      <p>
        My name is Tobias Steinhagen. I'm a self tought full-stack web developer
        based in Luebeck, Germany. I am also a educated mechanical engineer.
      </p>
    </div>
  );
};

export default About;
