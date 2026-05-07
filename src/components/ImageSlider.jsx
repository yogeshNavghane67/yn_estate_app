"use client"
import { useState, useEffect } from "react";

const images = [
"https://i.ibb.co/Vpzmx4hp/homepage-about.jpg",
"https://i.ibb.co/Q3jCvZ6n/Gemini-Generated-Image-tfz4uztfz4uztfz4.png",
"https://i.ibb.co/1YRGK9Pk/f5f87e6b67-residential-projects-gurgaon.jpg",
"https://i.ibb.co/FLyLgXV7/unnamed.jpg",
"https://i.ibb.co/yFmVYmjD/Amenities-for-Modern-Real-Estate-Projects.jpg"
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative justify-center w-full max-w-7xl lg:h-96 mx-auto overflow-hidden rounded-1xl shadow-lg">
      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2  text-black px-3 py-1 rounded-full hover:bg-white shadow-md"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 text-black px-3 py-1 rounded-full hover:bg-white shadow-md"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
