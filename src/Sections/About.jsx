import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-[80%] mx-auto pt-20 xl:flex justify-between py-6'>
      <img className='w-80 mx-auto xl:w-[400px] xl:h-[300px] xl:mr-5 rounded-lg' src="https://img.freepik.com/fotos-gratis/laptop-e-notebook-na-mesa-de-madeira_23-2147768818.jpg?t=st=1717607689~exp=1717611289~hmac=03ad527500a0523f132b877bfc01cdce49da7091ac35f67fa5ccd6a8eb62e02e&w=900" alt="" />
      <div className='text-center xl:w-[100%] xl:text-left'>
        <h3 className='font-bold text-blue-500 text-lg'>ABOUT ME</h3>
        <h2 className='font-bold font-mono text-4xl'>Front-end Developer</h2>
        <p className="my-4 xl:w-[80%] text-[#757575]   md:max-xl:w-[60%] md:max-xl:mx-auto">
          Hello! I’m Sriram, currently pursuing a B.Sc. in Information Technology. I am passionate about web development and proficient in React, HTML, CSS, JavaScript, and Tailwind CSS.
        </p>
        <p className="my-4 xl:w-[80%] text-[#757575]  md:max-xl:w-[60%] md:max-xl:mx-auto">
          I specialize in creating dynamic, responsive websites that provide a smooth user experience. My expertise lies in developing user-friendly interfaces and ensuring optimal performance across devices.
        </p>
        <p className="my-4 xl:w-[80%] text-[#757575]  md:max-xl:w-[60%] md:max-xl:mx-auto">
          With a solid foundation in front-end development, I am eager to contribute to real-time projects and actively seeking job opportunities to apply my skills and grow professionally. I thrive on solving complex problems and staying updated with the latest industry trends.
        </p>
      </div>
    </div>
  )
}

export default About
