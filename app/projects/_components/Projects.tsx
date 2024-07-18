import Link from "next/link";
import { CornerDownRight } from "lucide-react";

import { projects } from "@/utils/project-data";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCarousel from "./ProjectCarousel";

export default function Projects() {
  return (
    <section className="py-8 bg-orange-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 uppercase">
            projects
          </h2>
          <Link
            href="/projects"
            className="text-red-600 hover:text-red-800 flex flex-row space-x-1.5 items-center"
          >
            <div className="uppercase">GO TO PROJECTS PAGE</div>
            <CornerDownRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="hidden md:grid gap-7 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className="overflow-hidden">
              <div className="w-full h-48 relative">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  className="object-cover"
                  layout="fill"
                />
              </div>
              <div className="text-xs text-gray-500 mb-2">
                <span className="uppercase">{project.category}</span>{" "}
                &nbsp;|&nbsp; {project.date}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-row space-x-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <div
                      key={idx}
                      // className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded"
                    >
                      <Image
                        src="/logos/nodejs/nodejs.svg"
                        alt="Node.js Icon"
                        width={23}
                        height={23}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-row space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="bg-transparent">
                      Github
                    </Button>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="bg-transparent">
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
}
