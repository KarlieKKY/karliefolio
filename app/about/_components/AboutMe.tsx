import Image from "next/image";
import getTechIconPath from "@/utils/techIcon-mapper";

type SkillsList = {
  [key: string]: string;
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
    <div className="bg-[#0f0f0f]  h-full py-20">
      <div className="px-4 sm:px-6 lg:px-12 3xl:px-48">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <h2 className="text-white text-base md:text-3xl font-bold uppercase pb-4">
              My skills
            </h2>
            <div className="flex flex-wrap gap-3 font-roboto ">
              {Object.entries(skillsList).map(([skill, name], idx) => {
                return (
                  <div
                    className="text-gray-400 flex flex-row items-center space-x-1.5 border-solid border-2 border-gray-600  px-2 py-2 rounded-md transition-all duration-300 hover:text-white hover:bg-gray-700 hover:shadow-[0_0_10px_3px_rgba(59,130,246,0.5)] cursor-pointer"
                    key={idx}
                  >
                    <Image
                      src={getTechIconPath(skill)}
                      alt={`${skill} logo`}
                      width={20}
                      height={20}
                      style={{
                        width: "20px",
                        height: "20px",
                        objectFit: "contain",
                      }}
                    />

                    <p>{name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>Image</div>
        </div>
      </div>
    </div>
  );
}
