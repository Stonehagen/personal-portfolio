import React from 'react';
import '../styles/Projects.css';
import Project1 from '../img/projects/Project1.png';
import Project2 from '../img/projects/Project2.png';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectList = [
    {
      name: 'Clone Microsoft Landingpage',
      text: 'A clone of the Microsoft Landingpage',
      img: Project2,
      srcLink: 'https://github.com/Stonehagen/clone-microsoft-com',
      liveLink: 'https://stonehagen.github.io/clone-microsoft-com/',
    },
    {
      name: 'Windsurf Onlineshop Frontend',
      text: 'The Frontend of a windsurf online shop',
      img: Project2,
      srcLink: 'https://github.com/Stonehagen/odin-shopping-cart',
      liveLink: 'https://stonehagen.github.io/odin-shopping-cart/',
    },
    {
      name: 'Memory Game',
      text: 'A Community Memory Game',
      img: Project2,
      srcLink: 'https://github.com/Stonehagen/odin-memory-card',
      liveLink: 'https://stonehagen.github.io/odin-memory-card/',
    },
    {
      name: 'Sample project',
      text: 'And here another Sample Project',
      img: Project2,
      srcLink: 'https://github.com/Stonehagen/odin-memory-card',
      liveLink: 'https://stonehagen.github.io/odin-memory-card/',
    },
  ];

  return (
    <div className="Projects">
      <h1>My Projects</h1>
      <div className="Projects-Cont">
        {projectList.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
