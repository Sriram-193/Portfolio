// components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, reverse = false }) => {
  return (
    <div className='w-[80%] mx-auto py-8'>
      <div className={`flex flex-col justify-center items-center lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <img
          src={project.image}
          className='w-full mx-auto h-full sm:h-[250px] sm:w-[400px]'
          alt={project.title}
        />

        <div className="p-4 text-center sm:text-left">
          <h2 className='font-bold my-4'>
            {project.title} 
            {project.subtitle && <span className='font-normal'> ({project.subtitle})</span>}
          </h2>
          <p className="font-montserrat">{project.description}</p>

          <div className='flex flex-row gap-10 justify-center items-center my-4'>
            {project.technologies.map((tech, index) => (
              <p key={index} className='font-bold'>{tech}</p>
            ))}
          </div>
          
          <div className="flex flex-row gap-10 justify-center items-center my-4">
  {project.githubLink && (
    <p className="font-bold cursor-pointer">
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i> Code
      </a>
    </p>
  )}
  {project.liveDemoLink && (
    <p className="font-bold cursor-pointer">
      <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
      </a>
    </p>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;