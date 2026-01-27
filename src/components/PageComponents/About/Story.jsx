import React from "react";
import mainResort from "../../../assets/resort2.webp";
import resort1 from "../../../assets/resort1.avif";
import resort3 from "../../../assets/resort3.jpg";

const Story = () => {
  return (
    <section className="bg-linear-to-b from-blue-100 via-white to-sky-50 py-12 px-6 ">
      <div className=" mx-4 grid md:grid-cols-2 gap-10 items-center">


          <div className="grid grid-row-2 gap-4 h-[380px] md:h-[430px]">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img
              src={mainResort}
              alt="Main view of Arambha Resort"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/90 text-xs font-medium text-red-600 shadow">
              Dhawaha · Butwal
            </div>
          </div>

          <div className=" flex flex-row gap-5">
            <div className="relative flex-1 rounded-xl overflow-hidden shadow-lg">
              <img
                src={resort1}
                alt="Resort rooms"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
              {/* <span className="absolute bottom-3 left-3 text-[11px] px-3 py-1 rounded-full bg-white/90 text-sky-700 font-medium shadow">
                Luxury Rooms
              </span> */}
            </div>
            <div className="relative flex-1 rounded-xl overflow-hidden shadow-lg">
              <img
                src={resort3}
                alt="Resort pool & garden"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
              {/* <span className="absolute bottom-3 left-3 text-[11px] px-3 py-1 rounded-full bg-white/90 text-red-600 font-medium shadow">
                Pool & Gardens
              </span> */}
            </div>
          </div>
        </div>
        <div className="space-y-5 text-justify ">
          <p className="text-sm tracking-[0.3em]  uppercase font-bold font-heading text-sky-600 ">
            Our  <span className="text-red-600">Story</span>
          </p>
          <h2 className="text-3xl md:text-4xl  capitalize font-semibold font-heading text-blue-950 ">
            A New Beginning at Arambha
          </h2>

          <p className="text-gray-600 leading-relaxed ">
            Arambha Resort was born from a simple idea - to create a peaceful
            space where guests could reconnect with nature, culture, and
            themselves in the heart of Butwal.
          </p>

          <p className="text-gray-600 leading-relaxed ">
            The word <span className="font-semibold">“Arambha”</span> means
            <span className="font-semibold"> “beginning”</span> in Nepali,
            symbolizing a fresh start - whether it is a relaxing getaway,
            a family celebration, or a quiet retreat.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Every detail, from architecture inspired by local heritage to warm,
            personalized service, is crafted to make each stay feel
            authentic, calm, and unforgettable.
          </p>
        </div>

      
      </div>
    </section>
  );
};

export default Story;
