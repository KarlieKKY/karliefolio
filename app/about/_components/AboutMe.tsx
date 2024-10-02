import getTechIconPath from "@/utils/techIcon-mapper";
import Image from "next/image";

type SkillsList = {
  nextjs: string;
  ts: string;
  javascript: string;
  python: string;
  reactjs: string;
  nodejs: string;
  html: string;
  css: string;
  aws: string;
  postgresql: string;
  mongodb: string;
  tailwind: string;
};

const skillsList: SkillsList = {
  nextjs: "Next.js",
  ts: "TypeScript",
  javascript: "JavasScript",
  python: "Python",
  reactjs: "React",
  tailwind: "TailwindCSS",
  nodejs: "Node.js",
  html: "HTML",
  css: "CSS",
  aws: "AWS",
  postgresql: "PostgreSQL",
  mongodb: "MongoDB",
};

export default function AboutMe() {
  return (
    <div className="bg-[#0f0f0f] text-white h-[600px] py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <h2 className="uppercase">My skills</h2>
            <div className="space-y-2">
              {Object.keys(skillsList).map((skill, idx) => {
                return (
                  <div
                    className="flex flex-row items-center space-x-2"
                    key={idx}
                  >
                    <Image
                      src={getTechIconPath(skill)}
                      alt={`${skill} logo`}
                      width={30}
                      height={30}
                    />{" "}
                    <p>{skill}</p>
                  </div>
                );
              })}
            </div>
            <p>
              Next.js, TypeScript, JavasScript, Python React, Node.js, HTML,
              CSS, AWS, PostgreSQL, MongoDB, TailwindCSS
            </p>
          </div>
          <div>Image</div>
        </div>
      </div>
    </div>
  );
}
