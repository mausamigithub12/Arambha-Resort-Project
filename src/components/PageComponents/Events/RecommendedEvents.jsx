import React from "react";
import { Link } from "react-router-dom";

const RecommendedEvents = ({ events, currentSlug }) => {
  const recommended = events.filter((event) => event.slug !== currentSlug);

  return (
    <section className="bg-gray-100 rounded-2xl py-6 mt-5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold  text-blue-950 ">
          More Events
        </h2>

        <div className=" flex flex-col mt-4 gap-5">
          {recommended.slice(0, 3).map((event) => (
            <Link
              key={event.slug}
              to={`/events/${event.slug}`}
              className="group flex bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition h-20"
            >
              <div className="w-1/3 h-full overflow-hidden">
                <img
                  src={event.image || event.images?.[0]}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="w-2/3 p-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-blue-900 group-hover:text-red-600 transition line-clamp-2">
                  {event.title}
                </h3>
                {event.date && (
                  <p className="text-xs text-gray-500 mt-1">
                    {event.date}
                  </p>
                )}
                <p className="text-sm text-gray-600 mt-2">
                  View details →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedEvents;
