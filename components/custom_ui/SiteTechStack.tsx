import { Icons } from "@/assets";
import SlidingTextAnimation from "./SlidingAnimation";
import { Heart } from "lucide-react";

const SiteTechUsed = [
  "nextjs",
  "reactjs",
  "typescript",
  "emailjs",
  "nodejs",
  "shadcn",
  "matterjs",
  "framermotion",
  "tailwindcss",
  "clsx",
  "zod",
];

export default function SiteTechStack() {
  return (
    <section className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="w-full overflow-hidden space-y-9">
        <SlidingTextAnimation
          baseVelocity={5}
          fontSize="clamp(2rem, 8vw, 3.75rem)"
          opacity={1}
          repetitions={5}
          className="bg-gradient-to-r from-[#E73FC8] to-[#A43DF9] p-10"
          italic={false}
        >
          <div className="flex items-center gap-6">
            {SiteTechUsed.map((tech, index) => {
              //   const IconComponent = Icons[tech as keyof typeof Icons];
              return (
                <div key={index} className="flex items-center gap-6">
                  {/* {IconComponent && <IconComponent width={40} height={40} />} */}
                  <Heart fill="white" />
                  <span className="uppercase font-condensed font-medium">
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </SlidingTextAnimation>
        <SlidingTextAnimation
          fontSize="clamp(2rem, 8vw, 3.75rem)"
          baseVelocity={-5}
          opacity={1}
          repetitions={5}
          className="bg-gradient-to-r from-[#A43DF9] to-[#553EFE] p-10"
          italic={false}
        >
          <div className="flex items-center gap-6">
            {SiteTechUsed.map((tech, index) => {
              // const IconComponent = Icons[tech as keyof typeof Icons];
              return (
                <div key={index} className="flex items-center gap-6">
                  <Heart fill="white" />
                  {/* {IconComponent && <IconComponent width={40} height={40} />} */}
                  <span className="uppercase font-condensed font-medium">
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </SlidingTextAnimation>
      </div>
    </section>
  );
}
