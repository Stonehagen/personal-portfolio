import React from 'react';
import '../styles/Projects.css';
import Project1 from '../img/projects/Project1.png';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectList = [
    {
      name: 'Blog',
      text: 'A fictitious travel blog with AI generated posts. You can sign-up to create, edit, publish and delete your posts. You can comment every posts without registration and its possible to delete comments if your are the author of the post. I created an express backend API, wich interacts with my mongoDB Database. The Frontend is a react application wich makes the api calls for all the CRUD operations.',
      img: Project1,
      srcLinks: [
        'https://github.com/Stonehagen/odin-blog-api-backend',
        'https://github.com/Stonehagen/odin-blog-frontend',
      ],
      liveLink: 'http://blog.stonehagen.com/',
    },
  ];

  return (
    <div className="Projects">
      <h1>My Projects</h1>
      <div className="Projects-Cont">
        {projectList.map((project, index) => (
          <ProjectCard project={project} key={`project${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
