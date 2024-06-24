import React from 'react';
import project1 from '../assets/Screenshot (58).png'
import project2 from '../assets/Screenshot (59).png'
const Projects = () => {
  return (
    <div id='projects' className='bg-slate-100  pt-14'>

      <h2 className='font-bold text-center text-blue-500 text-2xl pt-2 '>Portfolio</h2>

      <div className='w-[80%] mx-auto py-8'>
        <div className="flex flex-col justify-center items-center lg:flex-row">
          <img
            src={project2}
          className='w-full mx-auto h-full sm:h-[250px] sm:w-[400px] '
            scrolling='no'
          ></img>

          <div className="p-4 text-center sm:text-left">
            <h2 className='font-bold  my-4'>Royal Feast <span className='font-normal'>(The Restaurant Website)</span></h2>
            <p className="font-montserrat" >This restaurant website is a fully responsive platform built using HTML, CSS, JavaScript, and React. It features a dynamic user interface with React components and hooks like useState for state management and useRef for direct DOM manipulation. The site is designed to work seamlessly across various devices, offering an optimal viewing experience. This project helped me deepen my understanding of responsive design principles and modern web development practices.</p>

            <div className='flex flex-row gap-10 justify-center items-center my-4'>
              <p className='font-bold'>React</p>
              <p className='font-bold'>Vanilla CSS</p>
            </div>
            <div className='flex flex-row gap-10 justify-center items-center my-4'>
              <p className='font-bold cursor-pointer'><a href="https://github.com/Sriram-193/Royal-Feast"><i className="fa-brands fa-github"></i> Code</a></p>
              <p className='font-bold cursor-pointer'> <a href="https://royalfeast.netlify.app/"> <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[80%] mx-auto py-8'>
        <div className="flex flex-col-reverse justify-center items-center lg:flex-row">
        
          <div className="p-4 text-center sm:text-left">
            <h2 className='font-bold  my-4'>Crypto Realm</h2>
            <p className="font-montserrat" >This Crypto Realm website is a fully responsive platform built with HTML, CSS, JavaScript, and React. It showcases real-time data for the top 100 cryptocurrencies, utilizing React components and hooks like useState and useRef. The site adapts seamlessly across various devices for an optimal user experience. Through this project, I gained a comprehensive understanding of working with APIs, enabling me to fetch and display dynamic data effectively. This experience has enhanced my skills in creating dynamic, interactive web applications.</p>

            <div className='flex flex-row gap-10 justify-center items-center my-4'>
              <p className='font-bold'>React</p>
              <p className='font-bold'>Vanilla CSS</p>
            </div>
            <div className='flex flex-row gap-10 justify-center items-center my-4'>
              <p className='font-bold cursor-pointer'><a href="https://github.com/Sriram-193/Crypto-Realm"><i className="fa-brands fa-github"></i> Code</a></p>
              <p className='font-bold cursor-pointer'> <a href="https://thecryptorealm.netlify.app/"> <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo </a></p>
            </div>
          </div>
            <img
             src={project1}
             className='w-full mx-auto h-full sm:h-[250px] sm:w-[400px] '
            scrolling='no'
          ></img>
        </div>
      </div>

    </div>
  );
};

export default Projects;
