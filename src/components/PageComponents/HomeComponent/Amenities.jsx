import React from "react";
import {
  FaBed,
  FaCar,
  FaCheckCircle,
  FaChild,
  FaCocktail,
  FaConciergeBell,
  FaLeaf,
  FaSpa,
  FaSwimmer,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";

function Amenities() {
  const amenities = [
    {
      icon: <FaBed className="w-6 h-6" />,
      title: "Comfortable Rooms",
      desc: "Luxury bedding & premium comfort",
    },
    {
      icon: <FaWifi className="w-6 h-6" />,
      title: "Free Wi‑Fi",
      desc: "High-speed internet access",
    },
    {
      icon: <FaUtensils className="w-6 h-6" />,
      title: "Restaurant & Dining",
      desc: "Premium, flavorful dishes",
    },
    {
      icon: <FaSwimmer className="w-6 h-6" />,
      title: "Swimming Pool",
      desc: "Infinity pool with views",
    },
    {
      icon: <FaCar className="w-6 h-6" />,
      title: "Free Parking",
      desc: "Secure parking facility",
    },
   
    {
      icon: <FaConciergeBell className="w-6 h-6" />,
      title: "24/7 Concierge",
      desc: "Round‑the‑clock service",
    },
    {
      icon: <FaCocktail className="w-6 h-6" />,
      title: "Bar & Lounge",
      desc: "Signature cocktails & drinks",
    },
    {
      icon: <FaChild className="w-6 h-6" />,
      title: "Kids Play Area",
      desc: "Safe entertainment zone",
    },
    {
      icon: <FaLeaf className="w-6 h-6" />,
      title: "Garden & Nature",
      desc: "Serene walking paths",
    },
  ];

  return (
    <section className="bg-linear-to-b from-white to-gray-50 py-16">
      <div className=" mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-sky-700 mb-2">
            Premium <span className="text-red-600">Amenities</span>
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold font-heading text-blue-950 mb-3">
            Experience Luxury in Every Detail
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium facilities designed for your ultimate comfort and enjoyment.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid  md:grid-cols-[1fr_1.7fr] mx-5">
          {/* Left feature card */}
          <div className="bg-[#071933] text-white rounded-3xl w-96 h-96 shadow-lg shadow-blue-950 flex flex-col justify-center gap-6 px-6 hover:scale-105 transition-transform duration-200  ">
            <div className="flex  items-start gap-4 ">
              <div className="flex items-center justify-center h-11 w-11 rounded-2xl bg-amber-500 shadow-lg">
                <FaCheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold ">
                  All‑Inclusive Luxury
                </h3>
                <p className="text-xs md:text-sm text-slate-100/80">
                  Everything you need for a perfect stay.
                </p>
              </div>
            </div>

            <ul className="space-y-2 text-sm md:text-[15px] text-slate-50/90 ">
              <li className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>Premium quality service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>24/7 guest support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>Eco‑friendly practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>Accessibility features</span>
              </li>
            </ul>

            <div className="  border-t border-slate-700/60 text-xs md:text-sm text-slate-200/80 pt-5">
              Each amenity is carefully selected to enhance your experience
              and create lasting memories.
            </div>
          </div>

          {/* Right amenities grid */}
          <div className="grid gap-x-7  sm:grid-cols-2 md:grid-cols-3 mt-7">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="flex  gap-3 rounded-2xl bg-slate-50 border border-slate-200 hover:scale-105 px-4 py-4 justify-center text-center items-center h-24 shadow-lg hover:shadow-md hover:shadow-red-100 transition-all duration-200"
              >
                <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-slate-100 text-red-600 ">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold flex  text-blue-900">
                    {item.title}
                  </h4>
                  <p className="text-xs flex text-start text-gray-500 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
                  </div></div>
    </section>
    )}
export default Amenities;

