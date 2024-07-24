import Image from "next/image";
import { socialMediaIcons } from "@/utils/socialMedia-icons";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white w-full">
      <div className="bg-zinc-800 py-3 flex justify-center">
        <Button className="font-semibold uppercase" variant="ghost">
          download cv
        </Button>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
        <div className="flex flex-col justify-between items-center h-16">
          <div className="flex flex-row space-x-2">
            {Object.keys(socialMediaIcons).map((icon) => {
              return (
                <Image
                  key={icon}
                  src={socialMediaIcons[icon]}
                  alt={`${icon} icon`}
                  width={25}
                  height={25}
                  style={{ width: "25px", height: "25px" }}
                />
              );
            })}
          </div>
          <p>© 2024 Karlie Guan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
