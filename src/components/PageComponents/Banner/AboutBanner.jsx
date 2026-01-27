import React from 'react'
import { Link } from 'react-router-dom'
import { MdHome } from 'react-icons/md'
function AboutBanner() {
  return (
        
    <div
      className="relative h-[500px] bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: "url('/src/assets/about.avif')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

     <div className=' flex flex-col text-center items-center justify-center relative  z-20 gap-6 top-48  '>
      <h3 className='text-4xl text-white font-heading font-bold flex flex-row gap-4 '>ABOUT <span  className='bg-linear-to-r from-sky-600 via-white to-red-600 bg-clip-text text-transparent'>ARAMBHA</span> </h3>
      <p className='text-sm text-gray-400 tracking-wide'>A warm and friendly resort created for your comfort, relaxation, and happiness.</p>
 
          <Link to="/bookroom" className="group relative flex items-center px-5 text-center cursor-pointer bg-transparent border border-white/70 mt-3 text-white w-48 h-14 font-semibold rounded-3xl shadow-lg hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300   overflow-hidden">
            <span className="relative z-10 tracking-wide">Book  for your stay</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </div>

<div className='flex flex-row text-ceneter gap-2 px-9 relative z-20 top-64'>
 
        <Link to ="/" className=' text-white flex items-center flex-row gap-1 '> <MdHome 
 className='w-5 h-5 '/> <span className=' pt-1'> Home </span> </Link>
         <span className='text-white  pt-1'>/ About Us</span>
</div>


    </div>
  )
}

export default AboutBanner