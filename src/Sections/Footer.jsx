import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className='bg-[#2e2f33] py-16 px-14 flex justify-around'>
        <h3 className='text-white font-bold font-montserrat text-xl'>Copyright &copy; {new Date().getFullYear()}. All rights are reserved</h3>
        <div>
        <a href="https://www.linkedin.com/in/sri-ram-443963272/"> <i class="fa-brands fa-linkedin-in text-white text-xl mx-4  cursor-pointer"></i></a>
     <a href="https://github.com/Sriram-193">  <i class="fa-brands fa-github text-white text-xl mx-4  cursor-pointer"></i></a>  
        </div>
    </div>
  )
}

export default Footer