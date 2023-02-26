import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="ProjectCard">
      <h3>{project.name}</h3>
      <img src={project.img} alt={project.name} />
      <p>{project.text}</p>
    </div>
  );
};

export default ProjectCard;
