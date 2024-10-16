"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { projects } from "@/utils/project-data";
import getTechIconPath from "@/utils/techIcon-mapper";
import convertDate from "@/utils/date-converter";

import ProjectCarousel from "./ProjectCarousel";
import AllProjects from "./AllProjects";
import { CornerDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import thumbnailImage from "@/assets/images/thumbnail-decorating.JPG";

import { motion, Variants } from "framer-motion";
import clsx from "clsx";

const repeatedColors = ["#ff63b3", "#6785FF", "#FEB750"];
const getColorFn = (index: any) =>
  repeatedColors[index % repeatedColors.length];

interface ProjectsProps {
  showAll?: boolean;
}

const projectVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.8,
      ease: "easeIn",
      delay: 0.13 * index,
    },
  }),
};

export default function Projects({ showAll = false }: ProjectsProps) {
  const router = useRouter();
  const projectsToShow = showAll ? projects : projects.slice(0, 3);

  const handleViewPageClick = (projectId: string | number) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <section className="">
      <div className="">
        <div className="hidden md:block pt-20">
          <div className="flex flex-col items-center">
            <p className="text-6xl">🐻‍❄️</p>
            <h1 className="font-kanit text-6xl font-bold uppercase pt-12 pb-5 tracking-wider">
              my works
            </h1>
            <Button
              variant="outline"
              size="lg"
              className=" border-[#757575] text-2xl font-semibold px-14 py-6 bg-transparent"
            >
              <Link href="projects ">Click here to view all my works!</Link>
            </Button>
          </div>

          <div className="pt-10 space-y-8">
            {projectsToShow.map((project, index) => {
              const isEven = index % 2 === 0;
              const indexColor = getColorFn(index);
              return (
                <article key={index} className="grid grid-cols-3 gap-6">
                  <div
                    className={clsx(
                      "col-span-1 aspect-square relative overflow-hidden rounded-3xl",
                      isEven ? "order-1" : "order-2"
                    )}
                  >
                    <Image
                      src={thumbnailImage}
                      alt="thumbnail img"
                      fill
                      className="rounded-3xl"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    className={clsx(
                      "col-span-2 bg-[#303030] rounded-3xl flex flex-col justify-between px-12 pt-8 pb-10",
                      isEven ? "order-2" : "order-1"
                    )}
                  >
                    <p
                      className="text-5xl font-condensed font-bold uppercase"
                      style={{ color: indexColor }}
                    >
                      {project.name}
                    </p>
                    <p className="text-2xl font-bold text-[#A8A6A7] leading-tight">
                      {project.description}
                    </p>
                    <div className="flex flex-col gap-9">
                      <div className="flex flex-wrap gap-5">
                        {project.tech.map((tech, idx) => {
                          return (
                            <div key={idx} title={tech}>
                              <Image
                                src={getTechIconPath(tech)}
                                alt={`${tech} Icon`}
                                width={35}
                                height={35}
                                style={{
                                  width: "35px",
                                  height: "35px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          style={{ backgroundColor: indexColor }}
                        >
                          GitHub
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#A8A6A7]"
                        >
                          View Page
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* <div className="flex justify-between items-center mb-6">
          <h2 className="text-base md:text-3xl font-bold text-gray-900 uppercase">
            projects
          </h2>

          <Link
            href="/projects"
            className="text-xs md:text-base text-red-600 hover:text-red-800 flex flex-row space-x-1.5 items-center"
          >
            <div className="uppercase">GO TO PROJECTS PAGE</div>
            <CornerDownRight className="w-4 h-4" />
          </Link>
        </div> */}

        {/* <div className="hidden md:grid gap-7 md:grid-cols-3">
          {projectsToShow.map((project, index) => (
            <div className="overflow-hidden" key={project.id}>
              <div className="w-full h-48 relative">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  // priority={true}
                />
              </div>
              <div className="text-xs text-gray-500 mb-2">
                <span className="uppercase">{project.category}</span>{" "}
                &nbsp;|&nbsp; {convertDate(project.date)}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4 font-roboto">
                  {project.description}
                </p>
                <div className="flex flex-wrap space-x-1 xl:space-x-2 mb-4">
                  {project.tech.map((tech: string, idx) => (
                    <div key={idx}>
                      <Image
                        src={getTechIconPath(tech)}
                        alt={`${tech} Icon`}
                        width={23}
                        height={23}
                        style={{
                          width: "23px",
                          height: "23px",
                          objectFit: "contain",
                        }}
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
                    <Button
                      variant="outline"
                      className="font-roboto bg-transparent"
                    >
                      Github
                    </Button>
                  </a>

                  <Button
                    variant="outline"
                    className="font-roboto bg-transparent"
                    onClick={() => handleViewPageClick(project.id)}
                  >
                    View Page
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="md:hidden">
          {showAll ? (
            <AllProjects />
          ) : (
            <ProjectCarousel projectsToShow={projectsToShow} />
          )}
        </div>
      </div>
    </section>
  );
}
