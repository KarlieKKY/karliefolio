import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-black text-white">
      <Image
        src="/images/banner.JPG"
        alt="banner-img"
        className="block w-full object-cover"
        width={1080}
        height={384}
      />
    </div>
  );
}
