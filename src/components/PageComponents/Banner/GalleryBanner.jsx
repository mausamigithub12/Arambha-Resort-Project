import React from 'react'
import { MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'

function GalleryBanner() {
  return (
<div
        className="relative h-[420px] mt-16 bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: "url('/src/assets/about.avif')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
          <h3 className="text-4xl  font-heading  uppercase font-bold bg-linear-to-r from-sky-400 via-white to-red-500 bg-clip-text text-transparent mb-4 tracking-wide">
            Gallery
          </h3>
          <p className="max-w-xl text-sm md:text-base text-gray-200 tracking-wide">
A collection of joyful moments and unforgettable celebrations that reflect happiness, togetherness, and special memories         </p>

          
        </div>
        
        <div className='flex flex-row text-ceneter gap-2 px-9 relative z-20  bottom-12'>
 
        <Link to ="/" className=' text-white flex items-center flex-row gap-1 '> <MdHome 
 className='w-5 h-5 '/> <span className=' pt-1'> Home </span> </Link>
         <span className='text-white   pt-1'>/ Gallery</span>
</div>
      </div>  )
}

export default GalleryBanner