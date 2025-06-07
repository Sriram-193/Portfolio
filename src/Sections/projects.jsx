// components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import project1 from '../assets/Screenshot (58).png';
import project2 from '../assets/Screenshot (59).png';
import project3 from "../assets/Screenshot (11).png"

const Projects = () => {
  const projectsData = [
    {
      title: 'Royal Feast',
      subtitle: 'The Restaurant Website',
      description: 'This restaurant website is a fully responsive platform built using HTML, CSS, JavaScript, and React. It features a dynamic user interface with React components and hooks like useState for state management and useRef for direct DOM manipulation. The site is designed to work seamlessly across various devices, offering an optimal viewing experience. This project helped me deepen my understanding of responsive design principles and modern web development practices.',
      technologies: ['React', 'Vanilla CSS'],
      githubLink: 'https://github.com/Sriram-193/Royal-Feast',
      liveDemoLink: 'https://royalfeast.netlify.app/',
      image: project2
    },
    {
      title: 'Crypto Realm',
      description: 'This Crypto Realm website is a fully responsive platform built with HTML, CSS, JavaScript, and React. It showcases real-time data for the top 100 cryptocurrencies, utilizing React components and hooks like useState and useRef. The site adapts seamlessly across various devices for an optimal user experience. Through this project, I gained a comprehensive understanding of working with APIs, enabling me to fetch and display dynamic data effectively. This experience has enhanced my skills in creating dynamic, interactive web applications.',
      technologies: ['React', 'Vanilla CSS'],
      githubLink: 'https://github.com/Sriram-193/Crypto-Realm',
      liveDemoLink: 'https://thecryptorealm.netlify.app/',
      image: project1
    },
    {
    title: 'Jewellery Catalogue',
    description: 'The Jewellery Catalogue website is a fully responsive web application built using React and Firebase. It showcases a curated collection of jewellery items with real-time data updates powered by Firebase Firestore. The platform includes an admin panel that allows authorized users to upload and delete products and categories, enabling easy content management. The project uses React hooks like useState and useEffect to build dynamic components, and it helped me strengthen my skills in integrating Firebase for backend services such as real-time database operations and image hosting.',
    technologies: ['React', 'Firebase', 'Vanilla CSS'],
    liveDemoLink: 'https://sree-balajiandco-catalogue.web.app/',
    image: project3

    }
  ];

  return (
    <div id='projects' className='bg-slate-100 pt-14'>
      <h2 className='font-bold text-center text-blue-500 text-2xl pt-2'>Portfolio</h2>
      
      {projectsData.map((project, index) => (
        <ProjectCard 
          key={index}
          project={project}
          reverse={index % 2 !== 0} // Alternate layout for even-indexed projects
        />
      ))}
    </div>
  );
};

export default Projects;