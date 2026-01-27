import React from "react";
import { BiSolidParty } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdFamilyRestroom, MdPriceChange } from "react-icons/md";

const features = [
  {
    icon: <FaLocationDot />,
    title: "Prime Location",
    desc: "Peaceful nature & scenic surroundings.",
  },
  {
    icon: <BiSolidParty />,
    title: "Event Friendly",
    desc: "Perfect for celebrations & gatherings.",
  },
  {
    icon: <MdPriceChange />,
    title: "Affordable Rates",
    desc: "Luxury comfort at fair prices.",
  },
  {
    icon: <MdFamilyRestroom />,
    title: "Family Friendly",
    desc: "Fun and comfort for all ages.",
  },


];

function Choose() {
  return (
    <div className="py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => {
          const positionClass =
            index === 0 || index === 2
              ? "lg:-translate-y-6"
              : "lg:translate-y-4";

          return (
            <div
              key={index}
              className={`bg-sky-900 shadow-xl shadow-slate-300 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${positionClass}`}
            >
              {/* Icon */}
              <div className="mx-auto mb-4 w-12 h-12 rounded-full border border-red-400 flex items-center justify-center text-red-400 text-2xl bg-white">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-gray-200 font-semibold text-base mb-1">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-300">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Choose;
