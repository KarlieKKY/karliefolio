import Link from "next/link";
import Image from "next/image";

import { projects } from "@/utils/project-data";
import getTechIconPath from "@/utils/techIcon-mapper";
import convertDate from "@/utils/date-converter";

import ProjectCarousel from "./ProjectCarousel";
import AllProjects from "./AllProjects";
import { CornerDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectsProps {
  showAll?: boolean;
}

export default function Projects({ showAll = false }: ProjectsProps) {
  const projectsToShow = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="py-8 bg-orange-50 3xl:py-16">
      <div className="px-4 sm:px-6 lg:px-12 3xl:px-48">
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
          {projectsToShow.map((project, index) => (
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
                &nbsp;|&nbsp; {convertDate(project.date)}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-row space-x-2 mb-4">
                  {project.tech.map((tech: string, idx) => (
                    <div
                      key={idx}
                      // className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded"
                    >
                      <Image
                        src={getTechIconPath(tech)}
                        alt={`${tech} Icon`}
                        width={23}
                        height={23}
                        style={{ width: "auto", height: "23px" }}
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
