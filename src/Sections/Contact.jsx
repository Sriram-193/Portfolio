import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='py-16 px-0 sm:px-28'>
        <h2 className='text-center sm:text-left font-bold text-blue-500 text-3xl mb-10'>Contact</h2>
        
        <div className='flex flex-col sm:flex-row '>
        <a href="mailto:sriramp19.2005@gmail.com" target='_blank' className='font-montserrat text-slate-500'>
        <div className='flex justify-center sm:justify-start flex-col items-center gap-3 sm:flex-row mb-8 sm:mr-8 cursor-pointer'>
        <div>
        <i class="fa-regular fa-envelope text-blue-500 text-xl bg-slate-100 p-3 rounded-full shadow-xl"></i>
        </div>
        <div className='text-center sm:text-left'>
            <p className='font-bold text-xl text-slate-800'>Mail</p>
            sriramp19.2005@gmail.com
        </div>
        </div>
      </a>
        <a href='https://www.linkedin.com/in/sri-ram-443963272/' target='_blank' className='font-montserrat text-slate-500'>
        <div className='flex justify-center sm:justify-start flex-col items-center gap-3 sm:flex-row mb-8 sm:mr-8 cursor-pointer'>
        
        <div>
        <i class="fa-brands fa-linkedin-in text-blue-500 text-xl bg-slate-100 p-3 rounded-full shadow-xl"></i>
        </div>
        <div className='text-center sm:text-left'>
            <p className='font-bold text-xl text-slate-800'>LinkedIn</p>
           sri-ram-443963272
        </div>
        </div>
        </a>

        </div>
       
    </div>
  )
}

export default Contact