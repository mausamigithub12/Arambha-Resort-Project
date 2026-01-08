

import { useEffect, useState } from "react";
import img1 from "../../assets/resort1.avif";
import img2 from "../../assets/resort2.webp";
import img3 from "../../assets/resort3.jpg";

import "./Home.css"; 
import "@fontsource/playfair-display"; 
export default function Home() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden font-serif bg-black">

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] 
            ${index === current ? "opacity-100" : "opacity-0"}`}
          alt="resort"
        />
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full px-4 text-center max-w-4xl mx-auto">

        <h1 className="text-6xl md:text-7xl font-playfair-display drop-shadow-lg animate-fadeInDown">
          Welcome to Our Resort
        </h1>

        <p className="text-2xl mt-4 italic tracking-wider drop-shadow-md animate-fadeInUp ">
          Relax • Refresh • Rejuvenate
        </p>

        <p className="mt-8 text-lg max-w-xl leading-relaxed  text-justify animate-fadeIn  text-gray-200">
          Nestled in the heart of breathtaking nature, our resort offers the perfect escape from everyday life. Experience unparalleled luxury, serene surroundings, and rejuvenating amenities tailored to your every desire.
        </p>

      </div>
    </div>
  );
}
