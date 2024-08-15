import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-black">
      <Image
        src="/images/banner.JPG"
        alt="banner-img"
        className="block w-full object-cover"
        width={1080}
        height={487}
      />
    </div>
  );
}
