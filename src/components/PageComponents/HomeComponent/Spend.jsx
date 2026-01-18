import React from "react";
import { Link } from "react-router-dom";
function Spend() {
  return (
    <section
      className="relative bg-fixed bg-cover h-[380px] bg-center"
      style={{
        backgroundImage: "url('src/assets/resturant.avif')",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/70 to-slate-900/80" />


      <div className="relative z-10 px-4 sm:px-6 lg:px-8  ">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6 justify-center  items-center pt-16 ">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md ">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/80">
              Arambha Moments
            </span>
          </div>

          <div className="space-y-5">
            <p className="text-sm sm:text-base text-white/70 uppercase tracking-[0.2em]">
              Spend your quality time
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              In the heart of{" "}
              <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-sky-300 via-white to-red-300">
                ARAMBHA
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/75 ">
            We are here for you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/bookroom" className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-linear-to-r from-red-500 to-red-600 text-white text-sm font-medium shadow-lg shadow-red-900/40 hover:from-red-600 hover:to-red-700 hover:shadow-red-900/60 transition-all duration-200">
              Book Your Room
            </Link>

            <Link to ="/contact" className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-white/40 bg-white/5 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white transition-all duration-200">
              Ask us anything
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spend;




