import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {detail} from "../../../data/roomdata"
const Room = () => {
  const navigate= useNavigate()
   return (
    <>
      
      <div className=" bg-linear-to-b from-gray-50 to-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-5">
            <h1 className="text-4xl font-heading font-bold text-gray-900 ">
              Our <span className="text-red-600">Luxurious</span> Rooms
            </h1>
            <p className=" text-gray-600 max-w-3xl mx-auto">
              Experience unparalleled comfort and elegance in our thoughtfully
              designed rooms, each tailored to provide a unique and memorable
              stay at Arambha Resort.
            </p>
          </div>

          {/* Room Listings */}
          <div className="space-y-20 mt-10">
            {detail.map((room, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-12 p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:bg-white/80`}
              >
                <div className="relative w-full lg:w-5/12 h-80 lg:h-96 overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={room.images[0]}
                    alt={room.alt}
                    className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg">
                    <span className="text-2xl font-bold text-red-600">
                      {room.price}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">/night</span>
                  </div>

                  <div className="absolute top-6 left-6 flex items-center bg-black/70 text-white px-3 py-1 rounded-full">
                    <svg
                      className="w-5 h-5 text-yellow-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">{room.rating}</span>
                  </div>

                  <div className="absolute bottom-6 left-8 text-white z-10">
                    <h3 className="text-3xl font-bold py-1">{room.title}</h3>
                    <div className="w-16 h-1 bg-red-500 rounded-full"></div>
                  </div>
                </div>

                {/* Room Details */}
                <div className="w-full lg:w-6/12 space-y-6">
                  <div>
                    <h3 className="text-3xl font-semibold font-heading  text-red-600 mb-3">
                      {room.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed ">
                      {room.desc}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Room Features:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {room.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    
                    <button  onClick={()=>navigate(`/rooms/${room.slug}`)} className=" relative h-12 w-48 cursor-pointer capitalize text-center bg-black hover:bg-red-700 text-white font-semibold rounded-xl ">
                      {room.button}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center rounded-2xl p-7 mt-16 bg-linear-to-r from-red-50 to-orange-50 border border-red-100 flex flex-col gap-4 justify-center items-center">
            <h3 className="text-3xl font-bold text-gray-900  font-heading">
              Ready to Book Your Stay?
            </h3>
            <p className="text-gray-700  ">
              Contact our reservation team for special packages and personalized
              service.
            </p>
            <button className="h-12 w-56 bg-linear-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Book Now & Get 10% Off
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
