import Image from "next/image";

import getTechIconPath from "@/utils/techIcon-mapper";
import convertDate from "@/utils/date-converter";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import clsx from "clsx";

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
  return (
    <div className="my-12 lg:my-16 pb-8">
      <Carousel className="relative">
        <CarouselContent>
          {projectsToShow.map((project, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-none bg-[#303030] rounded-3xl overflow-hidden card-particle-gradient">
                <CardContent className="p-0">
                  <div className="space-y-4">
                    {/* Image Frame */}
                    <div className="relative h-64 md:h-96 overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.name}
                        fill
                        className="rounded-3xl"
                        style={{
                          objectFit: "cover",
                        }}
                        priority
                      />
                    </div>

                    {/* Project Info */}
                    <div className="space-y-2.5 px-3">
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span className="uppercase">{project.category}</span>
                        <span>{convertDate(project.date)}</span>
                      </div>

                      <h3
                        className={clsx(
                          "text-xl font-kanit font-semibold uppercase",
                          {
                            "text-[#ff63b3]": index % 3 === 0,
                            "text-[#6785FF]": index % 3 === 1,
                            "text-[#FEB750]": index % 3 === 2,
                          }
                        )}
                      >
                        {project.name}
                      </h3>
                      <p className="text-sm text-[#A5A0A5]">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <div key={idx} className="h-5 w-5">
                            <Image
                              src={getTechIconPath(tech)}
                              alt={`${tech} Icon`}
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pb-2 text-white">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className={clsx({
                              "bg-[#ff63b3]": index % 3 === 0,
                              "bg-[#6785FF]": index % 3 === 1,
                              "bg-[#FEB750]": index % 3 === 2,
                            })}
                          >
                            Github
                          </Button>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="ghost" size="sm">
                            Demo
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Buttons */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4">
          <CarouselPrevious
            className="relative translate-x-0 translate-y-0 h-10 w-10"
            variant="ghost"
          />
          <CarouselNext
            className="relative translate-x-0 translate-y-0 h-10 w-10"
            variant="ghost"
          />
        </div>
      </Carousel>
    </div>
  );
}
