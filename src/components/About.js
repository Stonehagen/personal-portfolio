import React from 'react';
import '../styles/About.css';
import ProfilePic from '../img/profile.png';

const About = () => {
  return (
    <div className="About">
      <img src={ProfilePic} alt="Tobias Steinhagen" />
      <h1>About me</h1>
      <p>
        My name is Tobias Steinhagen. I'm a self tought full-stack web developer
        based in Luebeck, Germany. I am also a educated mechanical engineer.
      </p>
      <p>
        I always had a deep passion for coding, and one year ago, I made a
        personal commitment to pursue a career as a Web Developer. I have earned
        my coding skills through various sources, such as Harvard's CS50
        program, FreeCodeCamp, The Odin Project, and self-study with books like
        "You Don't Know JS." Additionally, I have undertaken numerous personal
        projects to further strengthen my expertise.
      </p>
      <p>
        All of my portfolio projects have been developed using the MERN stack.
        So please scroll down and explore my projects.
      </p>
    </div>
  );
};

export default About;
