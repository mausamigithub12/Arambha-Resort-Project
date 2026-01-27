import React from "react";
import SlotCounter from "react-slot-counter";
import { useInView } from "react-intersection-observer";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";
import { MdRoomService } from "react-icons/md";

const Counter = () => {
  const stats = [
    {
      value: 1000,
      suffix: "+",
      label: "Happy Guests",
      icon: <BsPersonArmsUp />,
    },
    {
      value: 100,
      suffix: "%",
      label: "Guest Satisfaction",
      icon: <FaHeartCircleCheck />,
    },
    {
      value: 100,
      suffix: "+",
      label: "Events Hosted",
      icon: <GiPartyPopper />,
    },
    {
      value: 24,
      suffix: "/7",
      label: "Room Service",
      icon: <MdRoomService />,
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="py-10 px-4 bg-sky-50  relative z-30"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative bg-sky-50 backdrop-blur-md rounded-2xl p-6 shadow-md shadow-slate-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0  h-full w-1.5 bg-sky-100 rounded-l-2xl " />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sky-100 text-red-600 flex items-center justify-center text-xl">
                {stat.icon}
              </div>

              <div>
                <div className="flex items-end">
                  {inView ? (
                    <SlotCounter
                      value={stat.value}
                      duration={2}
                      digitClassName="text-3xl font-bold text-gray-800"
                    />
                  ) : (
                    <span className="text-3xl font-bold text-gray-800">0</span>
                  )}
                  <span className="ml-1 text-lg font-bold text-red-600">
                    {stat.suffix}
                  </span>
                </div>

                <p className="text-sm text-gray-600">
                  {stat.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
