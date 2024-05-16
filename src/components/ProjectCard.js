import React from 'react';
import '../styles/ProjectCard.css';
import { ReactComponent as Arrow } from '../img/arrow.svg';

const ProjectCard = ({ project }) => {
  return (
    <div className="ProjectCard">
      <div className="ProjectCard-Info">
        <div className="ProjectCard-Image">
          <a href={project.liveLink}>
            <img src={project.img} alt={project.name} />
          </a>
        </div>
        <div className="ProjectCard-Text">
          <h2>
            <Arrow />
            <a href={project.liveLink}>{project.name} </a>
          </h2>
          <p>{project.text}</p>
          <ul>
            {project.srcLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link}>{`Repo ${index + 1}`}</a>
                </li>
              );
            })}
            {project.liveLink ? (
              <li>
                <a href={project.liveLink}>Live</a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="ProjectCard-Web">
        <img src={project.web} alt={project.name} />
      </div>
      <div className="ProjectCard-Phone">
        <img src={project.phone} alt={project.name} />
      </div>
    </div>
  );
};

export default ProjectCard;
