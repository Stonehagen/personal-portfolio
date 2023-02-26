import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="ProjectCard">
      <img src={project.img} alt={project.name}/>
      <h2>{project.name}</h2>
      <p>{project.text}</p>
    </div>
  );
};

export default ProjectCard;
