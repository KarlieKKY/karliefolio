"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { projects } from "@/utils/project-data";
import getTechIconPath from "@/utils/techIcon-mapper";

import ProjectCarousel from "./ProjectCarousel";
import AllProjects from "./AllProjects";
import { Button } from "@/components/ui/button";

import thumbnailImage from "@/assets/images/thumbnail-decorating.JPG";

import clsx from "clsx";

const repeatedColors = ["#ff63b3", "#6785FF", "#FEB750"];
const getColorFn = (index: any) =>
  repeatedColors[index % repeatedColors.length];

interface ProjectsProps {
  showAll?: boolean;
}

export default function Projects({ showAll = false }: ProjectsProps) {
  const router = useRouter();
  const projectsToShow = showAll ? projects : projects.slice(0, 3);

  const handleViewPageClick = (projectId: string | number) => {
    router.push(`/projects/${projectId}`);
  };
  console.log(showAll);
  return (
    <section className="">
      <div className="">
        <div
          className={`${
            showAll ? "px-1 md:px-3 lg:px-5" : "hidden"
          } md:block pt-16 lg:pt-20`}
        >
          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-5xl lg:text-6xl">🐻‍❄️</p>
            <h1 className="font-kanit text-3xl md:text-5xl lg:text-6xl font-bold uppercase pt-9 lg:pt-12 pb-4 lg:pb-5 tracking-wider">
              projects
            </h1>
            <Button
              variant="outline"
              size="lg"
              className=" border-[#757575] text-lg md:text-xl lg:text-2xl font-semibold px-14 py-6 bg-transparent"
            >
              <Link href="projects ">Click here to view all my works!</Link>
            </Button>
          </div>

          <div className="pt-10 space-y-8">
            {projectsToShow.map((project, index) => {
              const isEven = index % 2 === 0;
              const indexColor = getColorFn(index);
              return (
                <article
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
                >
                  <div
                    className={clsx(
                      "aspect-[1/0.5] lg:aspect-square relative overflow-hidden rounded-3xl",
                      "lg:col-span-1 order-1",

                      isEven ? "lg:order-1" : "lg:order-2"
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
                      "bg-[#303030] rounded-3xl flex flex-col justify-between px-12 pt-8 pb-10 space-y-2",
                      "lg:col-span-2 order-2",
                      isEven ? "lg:order-2" : "lg:order-1",
                      "card-particle-gradient"
                    )}
                  >
                    <p
                      className="text-3xl md:text-4xl lg:text-5xl font-condensed font-bold uppercase"
                      style={{ color: indexColor }}
                    >
                      {project.name}
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#A8A6A7] leading-tight">
                      {project.description}
                    </p>
                    <div className="flex flex-col gap-7 lg:gap-9">
                      <div className="flex flex-wrap gap-3 lg:gap-5">
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
                      <div className="flex gap-1 lg:gap-2">
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
        <div className="md:hidden">
          {!showAll && <ProjectCarousel projectsToShow={projectsToShow} />}
        </div>
      </div>
    </section>
  );
}
