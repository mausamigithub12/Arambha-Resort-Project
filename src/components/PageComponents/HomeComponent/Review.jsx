import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Babu Ram",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    title: "Business Traveler",
    stars: 4,
    desc: "Romantic atmosphere & delicious food from different cuisines with cocktails and mocktails. Amazing place to relax.",
    date: "2 weeks ago",
  },
  {
    name: "Zaya Np Gyawali",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    title: "Family Vacation",
    stars: 5,
    desc: "Will always be my favorite place to go with my family. Friendly staff and the best customer support you can ever get.",
    date: "1 month ago",
  },
  {
    name: "Saud Karan",
    img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=400&fit=crop&crop=face",
    title: "Gathering",
    stars: 5,
    desc: "Best restaurant, bar and swimming pool. Highly recommended for anyone visiting Butwal.",
    date: "3 weeks ago",
  },
  {
    name: "Priya Sharma",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    title: "Anniversary Celebration",
    stars: 4,
    desc: "The ambiance was perfect for our anniversary dinner. Exceptional service and exquisite cuisine.",
    date: "4 days ago",
  },
  {
    name: "Rajesh Thapa",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    title: "Weekend Getaway",
    stars: 5,
    desc: "The spa treatments were rejuvenating and the mountain view from the room was breathtaking.",
    date: "1 week ago",
  },
  {
    name: "Anjali Gurung",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    title: "Corporate Retreat",
    stars: 5,
    desc: "Perfect venue for our team building. Conference facilities were top-notch and food was excellent.",
    date: "2 months ago",
  },
];

function Review() {
  const swiperRef = useRef(null);

  return (
    <div className="   overflow-hidden bg-linear-to-b from-gray-50 via-gray-50 to-sky-50">

      <div className="relative z-10  mx-5 my-10  ">
        <div className="text-center flex flex-col gap-4   ">
          <h1 className="text-4xl font-heading uppercase font-bold text-gray-900  pt-9 tracking-tight">
            Guest <span className="text-red-600">Reviews</span>
          </h1>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto "></div>
          <p className=" text-gray-600   ">
Hear what our valued guest have to say about their experience at ARAMBHA </p>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
            simulateTouch={true}   

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="  h-[310px]  mt-9 "
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative flex flex-col gap-4 bg-white my-5 rounded-2xl p-6 shadow-lg border border-red-100 hover:shadow-xl shadow-slate-400 transition-all duration-500 hover:-translate-y-2  mx-3 "
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-red-600 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center">
                  <FaQuoteLeft className="text-white text-lg" />
                </div>

                <div className="flex  justify-end">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">
                      {i < review.stars ? (
                        <FaStar className="text-amber-300" />
                      ) : (
                        <FaStar className="text-gray-300" />
                      )}
                    </span>
                  ))}
                </div>

                <div className="">
                  <p className="text-gray-700 leading-relaxed tracking-wide font-serif text-justify italic ">
                    "{review.desc}"
                  </p>
                </div>
                <div className=" border-t border-[#E8DCCC]"></div>

                <div className="flex flex-row gap-3 items-center ">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D4A574]"
                  />
                  <div className="">
                    <h3 className=" text-gray-800 uppercase font-semibold ">
                      {review.name}
                    </h3>
                    <p className="text-red-600  text-sm">{review.title}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Review;
