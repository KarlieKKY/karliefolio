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

import { motion, Variants } from "framer-motion";

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
    <section className="py-8 bg-orange-50 3xl:py-16">
      <div className="px-4 sm:px-6 lg:px-12 3xl:px-48">
        <div className="flex justify-between items-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-base md:text-3xl font-bold text-gray-900 uppercase">
              projects
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link
              href="/projects"
              className="text-xs md:text-base text-red-600 hover:text-red-800 flex flex-row space-x-1.5 items-center"
            >
              <div className="uppercase">GO TO PROJECTS PAGE</div>
              <CornerDownRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <div className="hidden md:grid gap-7 md:grid-cols-3">
            {projectsToShow.map((project, index) => (
              <motion.div
                variants={projectVariants}
                custom={index}
                key={project.id}
              >
                <div className="overflow-hidden">
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
                    <h3 className="text-lg font-semibold mb-2">
                      {project.name}
                    </h3>
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
                      {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                      <Button
                        variant="outline"
                        className="font-roboto bg-transparent"
                        onClick={() => handleViewPageClick(project.id)}
                      >
                        View Page
                      </Button>
                      {/* </a> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
