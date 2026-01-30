import React from 'react'
import celebrate from "../../../assets/celebrate.jpg"
import marriage from "../../../assets/marriage.jpg"
import event1 from "../../../assets/event1.jpg"
import program from "../../../assets/program.jpg"
import clg from "../../../assets/clg.jpg"
import singer from "../../../assets/singer.jpg"
import festival from "../../../assets/festival.jpg"
import wedding from "../../../assets/wedding.jpg"
import { Link } from 'react-router-dom'
import { IoMdCheckmark } from 'react-icons/io'

const eventImages = [
  {
    id: 1,
    src: celebrate,
    alt: "Birthday Celebration",
    category: "Birthday",
    rotation: "-rotate-2",
    size: "col-span-2 row-span-2"
  },
  {
    id: 2,
    src: marriage,
    alt: "Wedding Ceremony",
    category: "Wedding",
    rotation: "rotate-1",
    size: "col-span-1 row-span-1"
  },
  {
    id: 3,
    src: event1,
    alt: "Marriage Event",
    category: "Ceremony",
    rotation: "rotate-2",
    size: "col-span-1 row-span-1"
  },
  {
    id: 4,
    src: program,
    alt: "Corporate Program",
    category: "Corporate",
    rotation: "-rotate-1",
    size: "col-span-1 row-span-1"
  },
  {
    id: 5,
    src: clg,
    alt: "College Event",
    category: "College",
    rotation: "rotate-3",
    size: "col-span-1 row-span-1"
  },
  {
    id: 6,
    src: festival,
    alt: "Festival Celebration",
    category: "Festival",
    rotation: "-rotate-3",
    size: "col-span-2 row-span-1"
  },
  {
    id: 7,
    src: wedding,
    alt: "Reception Party",
    category: "Reception",
    rotation: "rotate-1",
    size: "col-span-1 row-span-1"
  },
];

function Eventservice() {
  return (
    <section className="relative  overflow-hidden bg-sky-50" id="eventservice">
     <div className=" mx- px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2  ">
          
          {/* Left: STYLISH IMAGE COLLAGE */}
          <div className="relative">
            <div className="relative perspective-1000 -left-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%]">
                <div className="relative w-full h-full group">
                  <img
                    src={celebrate}
                    alt="Main Celebration"
                    className="relative w-full h-full object-cover rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                  />

                <div className="absolute inset-0 bg-black/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>

                </div>
              </div>

              {/* Floating surrounding images */}
              <div className="relative grid grid-cols-3 grid-rows-3 gap-4 p-6">
                {eventImages.slice(0, 6).map((img, index) => {
                  const positions = [
                    "col-start-1 row-start-1 mt-8 ml-4",
                    "col-start-3 row-start-1 mt-12 mr-6",
                    "col-start-1 row-start-3 mb-6 ml-10",
                    "col-start-3 row-start-2 mr-4",
                    "col-start-2 row-start-3 mb-8",
                    "col-start-2 row-start-1 mt-4"
                  ];
                  
                  return (
                    <div
                      key={img.id}
                      className={`relative ${positions[index]} group z-10`}
                    >
                      <div className="relative">
                        <div className={`bg-white p-2 rounded-xl shadow-2xl ${img.rotation} transform group-hover:rotate-0 group-hover:scale-105 transition-all duration-500`}>
                          <div className="overflow-hidden rounded-lg">
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="w-32 h-32 object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                          <div className="mt-2 px-2 py-1 bg-linear-to-r from-sky-50 to-rose-50 rounded">
                            <p className="text-xs font-semibold text-gray-700 text-center">
                              {img.category}
                            </p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        

    <div className="space-y-6 flex  flex-col justify-center">
  <p className="font-bold uppercase text-sky-600 font-heading tracking-[0.2em]">
    events & <span className="text-red-600">celebration</span>
  </p>

  <h2 className="text-3xl font-bold text-blue-950  font-heading">
    Celebrate your special moments at Arambha 
  </h2>

  <p className="text-gray-700">
    Plan weddings, birthdays, college events and office programs in a calm,
    green space with friendly service and simple, beautiful décor.
  </p>

  <ul className="space-y-3 text-gray-700">
    <li className="flex gap-3">
      <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-400 flex items-center justify-center text-xs">
<IoMdCheckmark />
      </span>
      <span>Wedding and reception setups with stage, lights and music.</span>
    </li>
    <li className="flex gap-3">
      <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-400 flex items-center justify-center text-xs">
<IoMdCheckmark />
      </span>
      <span>Cozy birthday and family parties with cake and simple decorations.</span>
    </li>
    <li className="flex gap-3">
      <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-400 flex items-center justify-center text-xs">
<IoMdCheckmark />
      </span>
      <span>Neat halls for college programs, meetings and trainings.</span>
    </li>
    <li className="flex gap-3">
      <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-400 flex items-center justify-center text-xs">
<IoMdCheckmark />
      </span>
      <span>Special themes and menus for festivals and cultural events.</span>
    </li>
  </ul>

  <div className="flex gap-4 pt-2 ju">
    <Link to="/eventform" className="rounded-2xl bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/30 hover:bg-red-700 transition">
      Plan your event
    </Link>
    <Link to ="/contact" className="rounded-2xl border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:border-red-400 hover:text-red-500 transition">
      Contact Us
    </Link>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}

export default Eventservice