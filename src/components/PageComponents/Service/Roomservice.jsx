import React from 'react'
import { IoMdCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';
const roomImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
    alt: "Cozy resort bedroom",
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    alt: "Room with balcony view",
    className: "",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    alt: "Neat twin bedroom",
    className: "",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg",
    alt: "Modern bathroom",
    className: "",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/6444257/pexels-photo-6444257.jpeg",
    alt: "Work desk in room",
    className: "",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg",
    alt: "Room with sofa corner",
    className: "",
  },
];
function Roomservice() {
  return (
    <div>


    <section className="bg-slate-50 py-12  " id="roomservice">
      <div className="mx-auto flex max-w-6xl  flex-col gap-12 px-6 lg:flex-row lg:items-center ">
        <div className="w-full lg:w-5/12 space-y-4">
          <p className="font-bold uppercase text-sky-600 font-heading tracking-[0.2em]">
            rooms & <span className="text-red-600">suites</span>
          </p>

          <h2 className="text-3xl font-bold text-blue-950  font-heading">
            Stay in comfort at Arambha 
          </h2>

          <p className="text-gray-700">
            Bright rooms, soft beds and calm views make your stay relaxing.
            Choose from cozy deluxe rooms to spacious suites for friends,
            couples or family.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-500 flex items-center justify-center text-xs">
                <IoMdCheckmark />
                
              </span>
              <span>Clean, air‑conditioned rooms with private balcony or garden view.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-500 flex items-center justify-center text-xs">
                <IoMdCheckmark />
                
              </span>
              <span>Fresh linens, fast Wi‑Fi and 24/7 hot water.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-500 flex items-center justify-center text-xs">
                <IoMdCheckmark />
                
              </span>
              <span>Room service and easy access to pool, garden and restaurant.</span>
            </li>
          </ul>

          <div className="flex gap-4 pt-2">
            <Link to="/rooms" className="rounded-full cursor-pointer bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/30 hover:bg-red-700 transition">
              View room types
            </Link>
            <Link to="/bookroom" className="rounded-full cursor-pointer border border-slate-400 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:border-red-400 hover:text-red-500 transition">
              Book Room
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-7/12 ">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 m-2">
            {roomImages.map((img) => (
              <div
                key={img.id}
                className={`overflow-hidden rounded-2xl ${img.className}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>



    </div>
  )
}

export default Roomservice