"use client";
import { useState } from "react";
import Image from "next/image";

import getTechIconPath from "@/utils/techIcon-mapper";
import convertDate from "@/utils/date-converter";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  name: string;
  category: string;
  date: string;
  description: string;
  tech: string[];
  imageUrl: string;
  github: string;
  demo: string;
};

interface ProjectCarouselProps {
  projectsToShow: Project[];
}

export default function ProjectCarousel({
  projectsToShow,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsToShow.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsToShow.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden md:h-96">
          {projectsToShow.map((project, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item={index === currentIndex}
            >
              <Image
                src={project.imageUrl}
                alt={`Slide ${index + 1}`}
                className="block w-full object-cover"
                fill
                priority={true}
              />
            </div>
          ))}
        </div>
        {/* Project Info */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs">
              <span className="text-red-500 uppercase">
                {projectsToShow[currentIndex].category}
              </span>
              &nbsp;|&nbsp; {convertDate(projectsToShow[currentIndex].date)}
            </div>
          </div>
          <h3 className="text-lg font-semibold">
            {projectsToShow[currentIndex].name}
          </h3>
          <p className="text-sm">{projectsToShow[currentIndex].description}</p>
          <div className="flex flex-row space-x-2 mb-4">
            {projectsToShow[currentIndex].tech.map((tech, index) => (
              <div key={index}>
                <Image
                  src={getTechIconPath(tech)}
                  alt={`${tech} Icon`}
                  width={18}
                  height={18}
                  style={{
                    width: "18px",
                    height: "18px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row space-x-2">
            <a
              href={projectsToShow[currentIndex].github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="bg-transparent">
                Github
              </Button>
            </a>
            <a
              href={projectsToShow[currentIndex].demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="bg-transparent">
                Demo
              </Button>
            </a>
          </div>
        </div>
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
