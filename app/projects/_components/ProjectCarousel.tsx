"use client";
import { useState } from "react";
import Image from "next/image";

import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "/images/thumbnail-decorating.jpg",
  "/images/thumbnail-decorating.jpg",
  "/images/thumbnail-decorating.jpg",
  "/images/thumbnail-decorating.jpg",
  "/images/thumbnail-decorating.jpg",
];
export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item={index === currentIndex}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                className="block w-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        {/* <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-300"
              }`}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div> */}
        {/* Slider controls */}
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none mx-2"
            data-carousel-prev
            onClick={prevSlide}
          >
            <ArrowLeft />
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none mx-2"
            data-carousel-next
            onClick={nextSlide}
          >
            <ArrowRight />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
