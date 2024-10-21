import InfiniteSlider from "../SlidingAnimation";

export default function FooterBanner() {
  return (
    <div className="w-screen h-[500px] bg-gradient-to-r from-pink-500 from-30% to-indigo-400 to-100% relative overflow-hidden">
      <div className="absolute z-0">
        <InfiniteSlider baseVelocity={-5} fontSize="clamp(5rem, 20vw, 8.75rem)">
          software engineer
        </InfiniteSlider>
        <InfiniteSlider baseVelocity={5} fontSize="clamp(5rem, 20vw, 8.75rem)">
          software engineer
        </InfiniteSlider>
        <InfiniteSlider baseVelocity={-5} fontSize="clamp(5rem, 20vw, 8.75rem)">
          software engineer
        </InfiniteSlider>
      </div>
      <div className="relative z-10 text-black w-full h-1/3 sm:h-[45%] md:h-3/4 flex flex-col items-center justify-center">
        <h2
          className="uppercase opacity-80 font-black tracking-tighter"
          style={{ fontSize: "clamp(2rem, 16.5vw, 20rem)" }}
        >
          karlie guan
        </h2>
      </div>
    </div>
  );
}
