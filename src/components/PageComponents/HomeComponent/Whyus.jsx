import React from "react";
// import woman from "../../assets/why-choose-us1.jpg"
import girl from "../../../assets/mission3.png";

import Choose from "./Choose";
import Counter from "../About/Counter";
function WhyUs() {
  return (
    <section className="w-full   ">
      <div className="relative    grid grid-cols-1 lg:grid-cols-[1.7fr_0.6fr]  gap-7 ">
        <div className="space-y-2 pt-16 px-8 flex flex-col">
          <h3 className="text-4xl font-bold  pt-5   uppercase tracking-widest">
            why <span className=" text-red-600">Choose</span> us ?
          </h3>
          <p className="text-gray-600  text-justify  pt-6  ">
            At Arambha Resort, we focus on comfort, care, and unforgettable
            experiences. Our team is dedicated to making every guest feel
            special with premium service and beautiful surroundings. Whether
            you’re relaxing or celebrating, we ensure every moment becomes a
            happy memory
          </p>

          <div className="my-4">
            <Choose />
          </div>
        </div>

        <div className="relative  mt-7">
          <img
            src={girl}
            alt="Arambha Resort mission"
            className=" h-[540px]  object-cover  hover:scale-105 transition-transform duration-500"
          />

          <div className="   "></div>
        </div>
      </div>

      <div className=" ">
        <Counter />
      </div>
    </section>
  );
}

export default WhyUs;
