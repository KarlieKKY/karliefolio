import Image from "next/image";

import { projects } from "@/utils/project-data";
import getTechIconPath from "@/utils/techIcon-mapper";
import convertDate from "@/utils/date-converter";

import { Button } from "@/components/ui/button";

export default function AllProjects() {
  return (
    <section>
      <div className="md:grid gap-7 md:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="overflow-hidden">
            <div className="w-full h-48 relative">
              <Image
                src={project.imageUrl}
                alt={project.name}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                fill
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
    </section>
  );
}
