import Link from "next/link";
import { Icons } from "@/assets";

const socialMediaLinks = [
  { name: "github", url: "https://github.com/KarlieKKY" },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/karlie-guan-b22875221/",
  },
  { name: "medium", url: "https://medium.com/@karlieguan" },
];

export default function FooterDesktopContent() {
  return (
    <footer className="uppercase text-center font-flex mt-6 mb-10 md:mb-14">
      <div className="space-y-3 md:space-y-4">
        <div className="">
          <nav aria-label="Social media links">
            <ul className="flex gap-5 md:gap-7 justify-center">
              {socialMediaLinks.map(({ name, url }, idx) => {
                const IconComponent = Icons[name as keyof typeof Icons];
                return (
                  <li key={idx} title={name}>
                    <a
                      href={url}
                      aria-label={`Visit ${name} page`}
                      target="_blank"
                    >
                      <IconComponent
                        className="w-8 h-8 md:w-10 md:h-10"
                        fill="white"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="space-y-2 md:space-y-3">
          <Link href="https://framer-toolbox.vercel.app/" target="_blank">
            <p className="underline">motion demo</p>
          </Link>
          <p>download cv</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">all works</Link>
            </li>
            <li>
              <Link href="#toolset">tool set</Link>
            </li>
            <li>
              <Link href="#siteinfo">site technologies</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="font-thin text-[0.5rem] pt-1 text-[#71717A]">
        © 2024 Karlie Guan. All rights reserved.
      </p>
    </footer>
  );
}
