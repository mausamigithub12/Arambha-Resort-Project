import React, { useEffect, useState } from "react";
import {  FaHotel, FaSwimmingPool, FaStar } from "react-icons/fa";
import { FaHandshakeSimple, FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 150);
  }, []);

  return (
    <>
    <section className="relative  min-h-screen mt-10 bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617] overflow-hidden">
      
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/Resort1.avif')" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28">

          <div
            className={`text-white transition-all px-4 duration-1000 
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <span className="inline-block  px-2 text-xs font-bold tracking-widest text-sky-300 uppercase">
              Premium Resort in Nepal
            </span>

            <h1
              className="text-5xl  font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Luxury Retreat for <br />
              <span className="text-sky-400">Unforgettable Stays</span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-300  leading-relaxed">
              Experience refined hospitality, elegant rooms, and scenic beauty
              at Arambha Resort — designed for comfort, celebrations, and peace.
            </p>

           

            <div className="flex gap-5 mt-10">
              <Link
                to="/bookroom"
                className="w-42 h-14  flex text-center items-center justify-center  rounded-xl bg-red-600 border border-red-700 text-white font-semibold shadow shadow-red-300 hover:bg-red-700 transition"
              >
                Book a Stay
              </Link>

              <Link
                to="/contact"
                className="w-42 h-14  flex text-center items-center justify-center rounded-xl border shadow shadow-slate-100 border-white/40 text-white hover:bg-white/10 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          

        
      </div>

    </section>  

   
   
   </>


  );
};

// const InfoCard = ({ icon, title, text }) => (
//   <div className="bg-white/10  backdrop-blur-xl border border-white/10 rounded-xl p-4 text-white shadow-lg">
//     <div className="text-slate-900 text-2xl mb-3">{icon}</div>
//     <h4 className="font-semibold  text-red-600 mb-2">{title}</h4>
//     <p className="text-sm text-blue-900">{text}</p>
//   </div>
// );

export default HomeBanner;
