import SlidingTextAnimation from "./SlidingTextAnimation";

export default function FooterBanner() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-pink-500 to-cyan-500">
      {/* <div className="max-w-[1920px] w-full">
        <div className="flex flex-col items-center text-white">
          <h2 className="text-3xl">dokidoki</h2>
          <p>© 2024 dokidoki. All rights reserved.</p>
        </div>
      </div> */}
      <SlidingTextAnimation />
    </div>
  );
}
