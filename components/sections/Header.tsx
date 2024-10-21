import Image from "next/image";

import bannerImage from "@/assets/images/banner.JPG";

export default function HeroSection() {
  return (
    <div className="relative pt-3.5">
      <div>
        <Image
          src={bannerImage}
          alt="banner-img"
          className="rounded-3xl"
          priority={true}
          style={{
            objectFit: "cover",
          }}
        />
        <div className="text-xs absolute bottom-2 md:bottom-5 lg:bottom-8 left-1 md:left-8 lg:left-14 flex flex-col items-start gap-1 md:gap-1.5">
          <div className="bg-custom-gradient inline-block py-1 lg:py-7 px-5 md:px-10">
            <h1 className="font-kanit md:text-base lg:text-[2.5rem] font-extrabold">
              Karlie Guan
            </h1>
          </div>
          <div className="bg-custom-gradient inline-block py-1.5 lg:py-3.5 px-6 md:px-11">
            <h2 className="md:text-base lg:text-3xl font-bold">
              Software Engineer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
