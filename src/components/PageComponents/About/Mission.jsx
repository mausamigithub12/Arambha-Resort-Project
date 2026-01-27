import React from "react";
import { FaBullseye, FaEye, FaMountain } from "react-icons/fa";

const cards = [
  {
    tag: "Mission",
    title: "Peaceful, heartfelt stays",
    desc: "To offer a calm, nature-connected resort experience where every guest feels genuinely welcomed, relaxed, and cared for.",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: <FaBullseye />,
    gradient: "from-red-500/90 to-red-600/90",
  },
  {
    tag: "Vision",
    title: "Loved resort of Lumbini–Butwal",
    desc: "To become a trusted escape for families, couples, and groups seeking greenery, comfort, and meaningful celebrations.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: <FaEye />,
    gradient: "from-sky-500/90 to-sky-600/90",
  },
  {
    tag: "Our Place",
    title: "Nature, comfort & celebration",
    desc: "Surrounded by fresh air, trees, and open views, Arambha Resort blends cozy rooms, open lawns, and event spaces in one destination.",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: <FaMountain />,
    gradient: "from-emerald-500/90 to-emerald-600/90",
  },
];

const Mission = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h1 className=" font-bold text-sky-600 font-heading uppercase mb-4">
            Our <span className="text-red-600 px-1">mission</span> & vision
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover what makes Arambha Resort a special destination for relaxation and celebration
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 mx-5 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-linear-to-t ${card.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              <div className="absolute inset-4 flex flex-col justify-end p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="text-lg text-gray-700">
                      {card.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl h-12 font-bold text-gray-800 mb-3">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-sky-500 rounded-full group-hover:w-24 transition-all duration-500" />
                </div>
              </div>

              <div className="absolute top-6 right-6">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-xs font-medium text-white">Arambha</span>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Mission;