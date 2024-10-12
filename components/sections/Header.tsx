import Image from "next/image";

import bannerImage from "@/assets/images/banner.JPG";

export default function HeroSection() {
  return (
    <div className="relative px-5 pt-3.5">
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
        <div className="absolute bottom-8 left-14 flex flex-col items-start gap-1.5">
          <div className="bg-custom-gradient inline-block py-1 px-10">
            <h1 className="font-kanit text-[2.5rem] font-extrabold">
              Karlie Guan
            </h1>
          </div>
          <div className="bg-custom-gradient inline-block py-3.5 px-11">
            <h2 className="text-3xl font-bold">Software Developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
