import { Icons } from "@/assets";

const socialMediaLinks = [
  { name: "github", url: "https://github.com/yourusername" },
  { name: "linkedin", url: "https://www.linkedin.com/in/yourprofile" },
  { name: "medium", url: "https://medium.com/@yourusername" },
];

export default function FooterDesktopContent() {
  return (
    <footer className="uppercase text-center font-flex mt-6 mb-14 ">
      <div className="space-y-4">
        <div className="">
          <nav aria-label="Social media links">
            <ul className="flex gap-7 justify-center">
              {socialMediaLinks.map(({ name, url }, idx) => {
                const IconComponent = Icons[name as keyof typeof Icons];
                return (
                  <li key={idx} title={name}>
                    <a href={url} aria-label={`Visit ${name} page`}>
                      <IconComponent className="w-10 h-10" fill="white" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="space-y-3">
          <p className="underline">motion demo</p>
          <p>download cv</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-col md:flex-row gap-5">
            <li>Home</li>
            <li>all works</li>
            <li>about me</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>
      <p className="font-thin text-[0.5rem] pt-1 text-[#71717A]">
        © 2024 Karlie Guan. All rights reserved.
      </p>
    </footer>
  );
}
