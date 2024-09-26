import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative bg-black">
      <Image
        src="/images/banner.JPG"
        alt="banner-img"
        className="block w-full object-cover"
        width={1080}
        height={487}
        priority={true}
      />
      <div className="absolute inset-0">
        <div className="absolute bottom-10 left-10 z-10">
          <h2 className="text-lg mb-2">Hello, I'm</h2>
          <h1 className="font-roboto text-3xl font-black mb-4">Karlie Guan</h1>
          <h2 className="text-xl">Software Developer</h2>
        </div>
      </div>
    </div>
  );
}
