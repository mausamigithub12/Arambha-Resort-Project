import React from "react";
import { useParams, Link } from "react-router-dom";
import { detail} from "../../../data/roomdata"
import {
  FireIcon,
  MoonIcon,
  TvIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { FaLongArrowAltRight } from "react-icons/fa";
import RecommendedRoom from "./RecommendedRoom";
import { BiLeftArrowAlt } from "react-icons/bi";


const roomFacilities = [
  "Air Conditioning / Heater",
  "Comfortable Bedding",
  "Flat-Screen TV",
  "Wardrobe / Closet",
  "Bedside Table & Lamp",
  "Mirror & Dressing Area",
  "Clean Towels & Linens",
  "Hot & Cold Water",
  "Daily Housekeeping",
];

function RoomDetail() {
  const { slug } = useParams();

  const room = detail.find((item) => item.slug === slug);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center space-y-4">
          <p className="text-white text-lg font-semibold">Room not found.</p>
          <Link
            to="/rooms"
            className="inline-block px-6 py-2 rounded-full bg-red-600 text-white font-semibold"
          >
            Back to rooms
          </Link>
        </div>
      </div>
    );
  }

  return (
     

      <div className="bg-slate-900 mt-14">
        <div className="px-6 mx-5  pt-14 space-y-6">
          <div className="space-y-4">
            <div className=" flex  justify-between items-center">

           
            <div className="flex flex-col gap-2">

            <h2 className="font-heading font-bold text-4xl text-white capitalize">
              {room.title}
            </h2>
            <div className="flex flex-row gap-6 ">
            <p className="text-red-500 tracking-wide">{room.price}</p>
            
</div>
            </div>

            <div className=" flex flex-row gap-5">
             <Link
          to="/rooms"
          className=" flex  gap-2 bg-transparent border-2 border-gray-700 font-semibold font-heading  rounded-2xl w-32 h-12 text-center items-center justify-center text-white  "
        >
        <BiLeftArrowAlt
 className="text-lg" />   Go Back

        </Link>

         <Link
          to="/bookroom"
          className=" flex  gap-3 bg-red-600 border-2 border-red-700 font-semibold font-heading  rounded-2xl w-32 h-12 text-center items-center justify-center text-white  "
        >
        Book Now 

        </Link>
        </div>
 </div>

            <div className="w-full h-1 bg-amber-50" />

            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <p className="text-white text-justify max-w-2xl">{room.desc}</p>
              <p className="text-white flex flex-row items-center gap-2">
                {room.rating}
                <svg
                  className="w-5 h-5 text-yellow-400 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </p>
            </div>
          </div>

          <div className="my-10 bg-white space-y-3 rounded-2xl">
            <h3 className="text-3xl font-heading text-red-600  text-center pt-6">
              Room Overview
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mx-3 py-3">
              {room.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={room.title}
                  className="h-64 w-full object-cover rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
         <section className="bg-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="space-y-6">
            
              <h3 className='text-2xl font-heading font-bold text-white text-center'>Room Special Feature</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-5 flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15 text-red-400">
                  <FireIcon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">
                    Air Conditioning & Heater
                  </h3>
                  <p className="text-xs text-slate-300">
                    Control the room temperature to stay cozy in winter and cool in summer.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-5 flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300">
                  <MoonIcon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">
                    Comfortable Bedding
                  </h3>
                  <p className="text-xs text-slate-300">
                    Soft mattress, pillows and fresh linens prepared for deep, restful sleep.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-5 flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                  <TvIcon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">
                    Entertainment & Storage
                  </h3>
                  <p className="text-xs text-slate-300">
                    Flat-screen TV, wardrobe/closet and bedside table to keep things handy.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-5 flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/15 text-yellow-300">
                  <SparklesIcon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">
                    Fresh & Well‑kept
                  </h3>
                  <p className="text-xs text-slate-300">
                    Clean towels, hot & cold water and daily housekeeping for a neat space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 md:p-7 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
other service            </p>
            <div className="flex flex-wrap gap-3">
              {roomFacilities.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs text-slate-100"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

       
       <section className="bg-slate-900 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6 text-center">
           
            <h3 className="text-2xl  font-heading font-bold text-white mt-1">
              What guests say about this room
            </h3>
          </div>

          {room.reviews && room.reviews.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {room.reviews.map((rev, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 md:p-6 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">


                      <div className="h-8 w-8  rounded-full bg-red-500/20 flex items-center justify-center text-xs font-semibold text-red-300">
                        {rev.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm capitalize font-semibold text-white">
                        {rev.name}</p>
                        <p className="text-[11px] text-slate-400">
                          Stayed in {room.title}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-yellow-400">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{room.rating}/5</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    “{rev.review}”
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-center text-slate-400">
              No reviews yet for this room.
            </p>
          )}
        </div>
      </section>


      <RecommendedRoom 
      allRooms={detail}
      currentSlug={room.slug}
      />



      </div>
  );
}

export default RoomDetail;



