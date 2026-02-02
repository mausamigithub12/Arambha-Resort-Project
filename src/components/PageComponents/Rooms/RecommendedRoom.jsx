 import React from "react";
import { useNavigate } from "react-router-dom";

const RecommendedRoom = ({ allRooms, currentSlug }) => {
  const navigate = useNavigate();

  const filteredRooms = allRooms.filter(
    (item) => item.slug !== currentSlug
  );

  return (
    <section className="bg-slate-900 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-heading font-bold text-white text-center mb-10">
          You May Also Like
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((rec) => (
            <div
              key={rec.id}
              onClick={() => navigate(`/rooms/${rec.slug}`)}
              className="cursor-pointer bg-slate-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <img
                src={rec.images[0]}
                alt={rec.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5 space-y-2">
                <h4 className="text-xl font-semibold text-white">
                  {rec.title}
                </h4>

                <p className="text-sm text-gray-300 line-clamp-2">
                  {rec.desc}
                </p>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-red-400 font-bold">
                    {rec.price}
                  </span>
                  <span className="text-yellow-400 text-sm">
                    ⭐ {rec.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedRoom;
