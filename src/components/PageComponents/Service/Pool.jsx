import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';

const Pool = () => {
  const images = [
    '/src/assets/pool.webp',
    '/src/assets/Resort.avif',
    '/src/assets/about.avif',
    '/src/assets/celebrate.jpg',
  ];

  return (
    <section className="bg-sky-50 py-16" id="pool">
      <div className=" mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: COLLAGE */}
        <div className="relative">
          {/* big left image */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[380px] md:h-[420px]">
            <div className="row-span-2 rounded-3xl overflow-hidden shadow-xl">
              <img
                src={images[0]}
                alt="Arambha Resort poolside dinner"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={images[1]}
                alt="Guests relaxing in the pool"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg relative">
              <img
                src={images[2]}
                alt="Aerial view of swimming pool"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* small overlay image in corner */}
              <div className="absolute -bottom-6 -right-6 w-32 md:w-36 rounded-2xl overflow-hidden shadow-2xl hidden md:block border-4 border-sky-50">
                <img
                  src={images[3]}
                  alt="Pool at night"
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>

        

<div className=" space-y-4">
  <p className="font-bold uppercase text-sky-600 font-heading tracking-[0.2em]">
    swimming <span className="text-red-600">pool</span>
  </p>

  <h2 className="font-bold capitalize text-blue-950 text-3xl font-heading">
    A refreshing break by the pool
  </h2>

  <p className="text-gray-700">
    Arambha Resort offers a clean, blue swimming pool with calm surroundings
    where you can relax, swim and spend quality time with friends and family.
  </p>

  <ul className="space-y-3 text-gray-700">
    <li className="flex gap-3">
      <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-500 flex items-center justify-center text-xs">
<IoMdCheckmark />
      </span>
      <span>Separate areas for kids and adults with safe depth and clear water.</span>
    </li>
    <li className="flex gap-3">
      <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-500 flex items-center justify-center text-xs">
    <IoMdCheckmark />
  </span>
      <span>Comfortable sunbeds and shaded seats around the poolside deck.</span>
    </li>
    <li className="flex gap-3">
      <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-500 flex items-center justify-center text-xs">
<IoMdCheckmark />
      </span>
      <span>Snacks and cool drinks served near the pool for a relaxed time.</span>
    </li>
    <li className="flex gap-3">
      <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-500 flex items-center justify-center text-xs">
    <IoMdCheckmark />

      </span>
      <span>Morning and evening swim slots for guests and small groups.</span>
    </li>
  </ul>


</div>




      </div>
    </section>
  );
};

export default Pool;


