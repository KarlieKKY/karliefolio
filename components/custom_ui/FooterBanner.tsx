import SlidingTextAnimation from "./SlidingTextAnimation";

export default function FooterBanner() {
  return (
    <div className="w-screen h-[500px] bg-gradient-to-r from-pink-500 from-30% to-indigo-400 to-100% relative overflow-hidden">
      <div className="absolute z-0">
        <SlidingTextAnimation />
      </div>
      <div className="relative z-10 text-black w-full h-1/3 sm:h-3/5 md:h-3/4 flex flex-col items-center justify-center">
        <h2 className="italic uppercase opacity-80 text-6xl sm:text-8xl md:text-9xl lg:text-[150px] xl:text-[180px] font-black tracking-tighter">
          karlie guan
        </h2>
        <p className="font-light text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          © 2024 Karlie Guan. All rights reserved.
        </p>
      </div>
    </div>
  );
}
