import React from 'react'
import { Link } from 'react-router-dom'
import { MdHome } from "react-icons/md";

function EventBanner() {
  return (
     <div
            className="relative h-[420px] bg-fixed bg-center bg-cover overflow-hidden"
            style={{
              backgroundImage: "url('/src/assets/events.avif')",
            }}
          >
            <div className="absolute inset-0 bg-black/80" />
    
            <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
              <h3 className="text-4xl font-heading uppercase font-bold bg-linear-to-r from-sky-400 via-white to-red-500 bg-clip-text text-transparent mb-4 tracking-wide">
                Events
              </h3>
              <p className="max-w-xl text-sm md:text-base text-gray-200 tracking-wide">
                Celebrate your special moments in a peaceful and beautiful setting surrounded by nature.
              </p>
    
              <Link
                to="/eventform"
                className="group relative mt-6 bg-transparent border border-white/80 text-white w-48 h-12 md:h-14 font-semibold rounded-3xl shadow-lg hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 overflow-hidden flex items-center justify-center"
              >
                <span className="relative z-10 tracking-wide">Book for your event</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
    
            
                    <div className='flex flex-row text-ceneter gap-2 px-9 relative z-20  bottom-12'>
             
                    <Link to ="/" className=' text-white flex items-center flex-row gap-1 '> <MdHome 
             className='w-5 h-5 '/> <span className=' pt-1'> Home </span> </Link>
                     <span className='text-white   pt-1'>/ Events</span>
            </div>
          </div>
  )
}

export default EventBanner