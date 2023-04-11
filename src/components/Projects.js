import React from 'react';
import '../styles/Projects.css';
import Project1 from '../img/projects/Project1.png';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectList = [
    {
      name: 'Blog',
      text: 'A fictitious travel blog featuring AI-generated posts, where users can sign up to create, edit, publish, and delete their own posts. Additionally, visitors can leave comments on posts without registering, and authors have the ability to delete comments. To facilitate these functionalities, I have developed an Express backend API that interacts with a MongoDB database. The frontend is a React application that makes API calls for all CRUD (Create, Read, Update, Delete) operations.',
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
