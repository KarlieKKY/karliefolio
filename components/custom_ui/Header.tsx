import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-black text-white">
      <Image
        src="/images/banner.JPG"
        alt="header"
        className="block w-full object-cover"
        width={80}
        height={384}
      />
    </div>
  );
}
