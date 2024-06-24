import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const [sideNav , setSideNav] = useState(false)
  return (<>
     <nav className="bg-[#ffffff] flex justify-between items-center p-5 px-10 shadow-lg fixed w-full">
         <h1 className='font-bold font-mono text-xl'>Sriram.dev</h1>
         <div className='sm:hidden cursor-pointer' onClick={()=>setSideNav(!sideNav)}>
         <IoMenu className='text-4xl'/>
         </div>
         <div className='hidden sm:block'>
          <ul className='flex gap-5 font-bold cursor-pointer'>
            <li className='hover:text-blue-500'><a href="#">Home</a></li>
            <li className='hover:text-blue-500'><a href="#about">About</a></li>
            <li className='hover:text-blue-500'><a href="#projects">Projects</a></li>
            <li className='hover:text-blue-500'><a href="#contact">contacts</a></li>
          </ul>
         </div>
    </nav>

    <div className={`bg-white p-8 px-0 sm:hidden fixed top-0 w-full h-[100vh] text-center transition-all duration-300 delay-300 ${sideNav ? "left-0" : "-left-full" }`}>
         <div className="text-right text-4xl mr-10 cursor-pointer" onClick={()=>setSideNav(!sideNav)}>
         <i class="fa-solid fa-xmark"></i>
         </div>
        
         <ul className=' font-bold cursor-pointer px-0 text-center sm:px-14 h-[70vh]'>
             <li className='hover:text-blue-500 m-14' onClick={()=>setSideNav(!sideNav)}><a href="#">Home</a></li>
            <li className='hover:text-blue-500 m-14' onClick={()=>setSideNav(!sideNav)}><a href="#about">About</a></li>
            <li className='hover:text-blue-500 m-14' onClick={()=>setSideNav(!sideNav)}><a href="#projects">Projects</a></li>
            <li className='hover:text-blue-500 m-14' onClick={()=>setSideNav(!sideNav)}><a href="#contact">contacts</a></li>
          </ul>
    </div>
  </>
  )
}

export default Navbar