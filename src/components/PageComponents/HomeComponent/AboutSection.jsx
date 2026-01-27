import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import resort1 from "../../../assets/Resort1.webp";
import resort2 from "../../../assets/resort2.webp";
import pool from "../../../assets/pool.webp";

import { MdBrunchDining, MdOutlineBedroomChild } from "react-icons/md";
import { GiChestnutLeaf, GiPartyPopper } from "react-icons/gi";

const images = [resort1, resort2, pool];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12  bg-linear-to-b from-sky-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center leading-relaxed space-y-3"
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-sky-700">
            Who we <span className="text-red-600">are ?</span>
          </p>

          <h2 className="text-2xl md:text-3xl font-bold font-heading text-blue-950">
            Where Comfort Meets Tranquility
          </h2>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={images[currentIndex]}
                alt="Arambha Resort Luxury Stay"
                className="w-full h-[450px] object-cover transition-transform duration-[1000ms] hover:scale-105"
              />

              {/* FLOATING CARDS */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-6">
                <div className="bg-white rounded-2xl shadow-xl p-5 text-center min-w-[120px]">
                  <div className="text-2xl font-bold text-sky-700">24/7</div>
                  <div className="text-xs text-gray-600 font-medium">Service</div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-5 text-center min-w-[120px]">
                  <div className="text-2xl font-bold text-red-600">100%</div>
                  <div className="text-xs text-gray-600 font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5 }}
          >
            <div>
              <h2 className="text-2xl font-semibold  tracking-wide font-heading uppercase text-red-600 mb-4">
                About Arambha Resort
              </h2>

              <p className="text-gray-700 leading-relaxed text-justify">
                Arambha Resort blends modern elegance with authentic Nepali warmth
                in the serene landscape of Dhawaha, Butwal. Every space is designed
                to offer peace, comfort, and beauty.
                From intimate garden dinners to unforgettable events, we turn
                meaningful moments into lifelong memories.
              </p>
            </div>

           

<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  }}
  className="grid grid-cols-2 gap-4 pt-6"
>
  {[
    { icon: <MdOutlineBedroomChild />, title: "Luxury Rooms", desc: "Modern & elegant stays" },
    { icon: <MdBrunchDining />, title: "Fine Dining", desc: "Delicious curated meals" },
    { icon: <GiChestnutLeaf />, title: "Garden Venues", desc: "Perfect outdoor events" },
    { icon: <GiPartyPopper />, title: "Events", desc: "Celebrations & gatherings" },
  ].map((feature, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        show: { 
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        },
      }}
      className="group p-4 rounded-xl bg-white border border-gray-200 shadow-sm 
        hover:shadow-lg hover:shadow-red-100 hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="text-2xl text-red-600 p-2 rounded-lg">
          {feature.icon}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{feature.title}</h4>
          <p className="text-xs text-gray-600">{feature.desc}</p>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>






            {/* BUTTON */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 1.8 }}
              className="pt-6"
            >
              <Link
                to="/about"
                className="group inline-flex items-center justify-between w-60 bg-red-700 text-white text-sm font-semibold py-2 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Discover Our Story</span>
                <span className="text-xl transform group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
