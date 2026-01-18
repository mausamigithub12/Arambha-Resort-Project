import React from "react";
import { detail } from "../../../data/roomdata";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const RoomSection = () => {
  const rooms = detail.slice(0, 3);
  const navigate =useNavigate()

  return (
    <section
      id="rooms"
      className="bg-sky-100/40 "
    >
      <div className="max-w-7xl mx-auto px-4 py-9">

          <div className="text-center  space-y-3 ">
            <p className="text-xs tracking-[0.3em] uppercase font-semibold font-heading  text-sky-600">
            our  <span className="text-red-600">rooms
                </span>
            </p>
          <h2 className=" md:text-4xl  capitalize font-bold font-heading text-blue-950  leading-tight">
            Comfortable stays for every guest
          </h2>
          <p className="text-gray-600  max-w-2xl mx-auto flex text-center justify-center  leading-relaxed">
           Choose from cozy single rooms, romantic couple retreats, spacious
            family rooms, and premium stays crafted for relaxed, colorful days
            at   </p>
        </div>

        

        <div className="grid gap-8  mx-5 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {rooms.map((room) => (
            <article
              key={room.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative group h-96 overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute left-0 right-0 bottom-0   bg-linear-to-t from-black/60 via-black/20 to-transparent  group:hovertranslate-y-4 transform" >
                <div className="p-6 bg-gray-900/50 space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform  duration-500">
                <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {room.title}
                </h3>

                <p className=" text-sm text-gray-300 text-justify leading-relaxed line-clamp-2 group-hover:text-white">
                  {room.desc}
                </p>

                <button onClick={()=>navigate(`/rooms/${room.slug}`)} className=" bg-black/60 border px-2 py-2 border-slate-300 rounded-2xl  inline-flex items-center gap-2 text-sm font-medium text-white group-hover:bg-red-600 cursor-pointer transition-colors">
                  View details
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div>
                </div>

                <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
                  <FaStar className="text-amber-400" />
                  {room.rating.toFixed(1)}
                </div>

                <div className="absolute top-4 right-4 rounded-full bg-red-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                  {room.price} / night
                </div>
              </div>

             
            </article>
          ))}
        </div>
         <div className="flex justify-center ">

          <Link to="/rooms"  className=" inline-flex  mt-9 items-center   gap-2 rounded-full border border-red-600 px-6 py-2  font-semibold bg-red-600 text-white hover:bg-red-700 cursor-pointer transition-all">
            View all rooms
            <FaArrowRight className="w-3 h-3" />
          </Link>
         </div>



      </div>
    </section>
  );
};

export default RoomSection;



