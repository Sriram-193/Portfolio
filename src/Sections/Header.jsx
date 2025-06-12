import React from 'react';

const Header = () => {
  return (
    <>
    <div>
    <div className="w-[80%] mx-auto flex flex-col-reverse justify-between items-center pt-36 pb-8 ">
      <div className='text-center sm:text-left'>
      <p className='text-center sm:text-left font-bold font-mono text-lg'>  Hi, I'm Sriram.</p>
        <h1 className="leading-13 hd:leading-13 transition-all duration-300 delay-300 text-3xl sm:text-6xl font-bold text-[#2e2f33]">
          Front-End React <br /> Developer👋
        </h1>
        <p className="text-[#6b6d74] leading-13 my-5  transition-all duration-300 delay-300">
         A passionate Front-end React Developer  📍
        </p>
        <div className='flex justify-center items-center sm:justify-start '>
        <div className='mr-5'> <a href="https://www.linkedin.com/in/sri-ram-443963272/"><i className="fa-brands fa-linkedin text-3xl cursor-pointer text-slate-700 "></i></a> </div>
        <div className='mr-5'>  <a href="https://github.com/Sriram-193"> <i className="fa-brands fa-github text-3xl cursor-pointer text-slate-700 "></i></a></div>
         <a target='_blank' href="https://drive.google.com/file/d/1NifgbhebI10yYetrl6jdXcXonT-Tky9B/view?usp=drive_link"><button className=' bg-slate-700 text-white px-4 py-1 rounded font-semibold'>Resume <i class="fa-regular fa-paper-plane"></i></button></a>
          
        </div>
      </div>
    </div>

    <div className='w-[80%] mx-auto flex flex-col hd:flex-row justify-center items-center '>
    <p className="border-b-2 pb-2 hd:pb-0 hd:border-b-0 hd:border-r-2 border-[#929294] hd:pr-5 hd:mr-5">Tech Stack</p>
    <div className='flex flex-wrap justify-center py-2'>
    <img className='m-2 p-2 cursor-pointer hover:-translate-y-5 transition-all duration-500 ' src="https://skillicons.dev/icons?i=html,css" alt="" />
    <img className='m-2 p-2 cursor-pointer hover:-translate-y-5 transition-all duration-500 ' src="https://skillicons.dev/icons?i=js,react" alt="" />
    <img className='m-2 p-2 cursor-pointer hover:-translate-y-5 transition-all duration-500 ' src="https://skillicons.dev/icons?i=tailwindcss,git" alt="" />
    </div>
   </div>
    </div>

    </>
    
  );
};

export default Header;
