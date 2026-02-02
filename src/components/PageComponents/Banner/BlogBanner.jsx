import React from 'react'
import { MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'

function BlogBanner() {
  return (
<div className="relative h-[490px] bg-fixed bg-center bg-cover" 
           style={{backgroundImage: "url('/src/assets/about.avif')"}}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 text-white">
          <h1 className="text-4xl  font-heading font-bold mb-4 drop-shadow-2xl">
            Arambha Stories
          </h1>
          <p className="text- max-w-2xl mx-auto mb-8 opacity-90">
            Event memories, local adventures and insider tips from Butwal's favorite resort
          </p>
          <Link to="/bookroom" className="group relative flex items-center px-5 text-center cursor-pointer bg-transparent border border-white/70 mt-5 text-white w-48 h-14 font-semibold rounded-3xl shadow-lg hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300   overflow-hidden">
            <span className="relative z-10 tracking-wide">Book for your stay</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>

        <div className='flex flex-row text-ceneter gap-2 px-9 relative z-20  bottom-12'>
 
        <Link to ="/" className=' text-white flex items-center flex-row gap-1  '> <MdHome 
 className='w-5 h-5 '/> <span className=' pt-1'> Home </span> </Link>
         <span className='text-white   pt-1'>/ Blogs</span>
</div>
      </div>  )
}

export default BlogBanner