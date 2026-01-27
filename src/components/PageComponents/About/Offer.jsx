import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Offer = () => {
  const specials = [
    {
      title: "Swimming Pool",
      img: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Take a refreshing dip or unwind by the pool with calm surroundings and gentle lighting.",
      tag: "Relax & Refresh",
    },
    {
      title: "Restaurant & Dining",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Savor delicious dishes crafted with care, blending local flavors with global favorites.",
      tag: "Excellent Dining",
    },
    {
      title: "Events & Celebrations",
      img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Create unforgettable memories with weddings, birthdays and special gatherings.",
      tag: "Perfect Moments",
    },
    {
      title: "Luxury Rooms",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Enjoy cozy, well‑appointed rooms designed for comfort, privacy and peaceful sleep.",
      tag: "Stay in Comfort",
    },
    {
      title: "Conference Hall",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Host successful meetings and conferences in a spacious and well‑equipped hall.",
      tag: "Meet & Connect",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative py-20 bg-gray-100">
      <div className=" px-4">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-4 ">
            <span className="text-sm font-bold text-sky-600 tracking-wide">PREMIUM <span className="text-red-600 px-1">FACILITIES</span> </span>
          </div>
          
          <motion.h2 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-light text-gray-800 "
          >
            What We <span className="font-bold">Offer</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Discover our range of premium amenities designed for your comfort and enjoyment
          </motion.p>
        </div>

        <div className="relative  px-4 ">
          <div className=" flex relative z-30  justify-between top-60 gap-4">
            <button className="swiper-button-prev-custom w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors">
              <FaArrowLeft />
            </button>
            <button className="swiper-button-next-custom w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-colors">
              <FaArrowRight />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className=" rounded-xl "
          >
            {specials.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group my-4 rounded-xl px-1"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      
                      {/* Tag */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        {item.desc}
                      </p>

                      <button className="w-full py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 cursor-pointer transition-colors duration-300">
                        Explore More
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {specials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;