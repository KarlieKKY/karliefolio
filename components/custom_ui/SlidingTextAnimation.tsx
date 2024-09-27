"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function InfiniteSlider({ children, baseVelocity = 5 }: ParallaxProps) {
  const baseX = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    const newX = baseX.get() + baseVelocity * (delta / 15000);
    baseX.set(newX);
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap tracking-tighter leading-[0.8]">
      <motion.div
        className="flex whitespace-nowrap flex-nowrap font-bold uppercase opacity-10 text-[67px] sm:text-[114px] md:text-[140px] italic"
        style={{ x }}
      >
        {[...Array(4)].map((_, index) => (
          <span key={index} className="block mr-[30px]">
            {children}{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function SlidingTextAnimation() {
  return (
    <section className="w-full overflow-hidden">
      <InfiniteSlider baseVelocity={-5}>
        software engineer software engineer
      </InfiniteSlider>
      <InfiniteSlider baseVelocity={5}>
        software engineer software engineer
      </InfiniteSlider>
      <InfiniteSlider baseVelocity={-5}>
        software engineer software engineer
      </InfiniteSlider>
    </section>
  );
}
