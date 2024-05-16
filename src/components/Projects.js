import React from 'react';
import '../styles/Projects.css';
import Project1 from '../img/projects/Project1_1.png';
import Project1Phone from '../img/projects/Project1_Phone.png';
import Project1Web from '../img/projects/Project1_Web.png';
import Project2 from '../img/projects/Project2_1.png';
import Project2Phone from '../img/projects/Project2_Phone.png';
import Project2Web from '../img/projects/Project2_Web.png';
import Project3 from '../img/projects/Project3_1.png';
import Project3Phone from '../img/projects/Project3_Phone.png';
import Project3Web from '../img/projects/Project3_Web.png';
import Project4Phone from '../img/projects/Project4_Phone.png';
import Project4Web from '../img/projects/Project4_Web.png';
import Project4 from '../img/projects/Project4.png';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectList = [
    {
      name: 'Windmate',
      text: 'A Wind Forecast App. You can search for a spot and get the wind forecast for the next 5 days. The app is still in development and will be released soon. Windmate does not realy on a Weather API. Instead, i download the date from the DWD and NOAA and calculate the forecast myself. This way i can be indipedent from a Weather API and can provide the forecast for any spot in the world. There is one Backend API that provides the data and one Frontend App that displays the forecast. There is also a Backend Service that downloads the data from the DWD and NOAA and calculates the forecast that is then stored in a MongoDB database and an CDN.',
      img: Project4,
      phone: Project4Phone,
      web: Project4Web,
      srcLinks: [
        'https://github.com/Stonehagen/windspotter-backend',
        'https://github.com/Stonehagen/windspotter-frontend',
      ],
      liveLink: 'https://windmate.de/',
    },
    {
      name: 'Social Network',
      text: 'A Social Network with 2000 fake profiles. You have to create a profile to get access to the network or use the test account. Its possible to make private or global posts, make friend requests, send private messages and many more. To facilitate these functionalities, I have developed an Express backend API with socketIO for the chat function that interacts with a MongoDB database. The fully responsible frontend is a React application that makes API calls for all CRUD (Create, Read, Update, Delete) operations.',
      img: Project2,
      phone: Project2Phone,
      web: Project2Web,
      srcLinks: [
        'https://github.com/Stonehagen/social-network-backend',
        'https://github.com/Stonehagen/social-network-frontend',
      ]
    },
    {
      name: 'Blog',
      text: 'A fictitious travel blog featuring AI-generated posts, where users can sign up to create, edit, publish, and delete their own posts. Additionally, visitors can leave comments on posts without registering, and authors have the ability to delete comments. To facilitate these functionalities, I have developed an Express backend API that interacts with a MongoDB database. The frontend is a React application that makes API calls for all CRUD (Create, Read, Update, Delete) operations.',
      img: Project1,
      phone: Project1Phone,
      web: Project1Web,
      srcLinks: [
        'https://github.com/Stonehagen/odin-blog-api-backend',
        'https://github.com/Stonehagen/odin-blog-frontend',
      ]
    },
    {
      name: 'Personal Portfolio',
      text: 'This personal portfolio website. You can learn something about me, explore some projects of mine and contact me. Its a fully responsive react application.',
      img: Project3,
      phone: Project3Phone,
      web: Project3Web,
      srcLinks: ['https://github.com/Stonehagen/personal-portfolio'],
      liveLink: 'https://stonehagen.com/',
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
