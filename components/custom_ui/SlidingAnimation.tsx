"use client";
import React, { ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import clsx from "clsx";

interface InfiniteSliderProps {
  children: ReactNode;
  baseVelocity?: number;
  fontSize?: string;
  opacity?: number;
  color?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
  italic?: boolean;
  uppercase?: boolean;
  repetitions?: number;
  className?: string;
}

export default function InfiniteSlider({
  children,
  baseVelocity = 5,
  fontSize = "140px",
  opacity = 0.2,
  color = "currentColor",
  fontWeight = "bold",
  letterSpacing = "tighter",
  lineHeight = "0.8",
  italic = true,
  uppercase = true,
  repetitions = 4,
  className,
}: InfiniteSliderProps) {
  const baseX = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    const newX = baseX.get() + baseVelocity * (delta / 15000);
    baseX.set(newX);
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  return (
    <div
      className={clsx(
        "overflow-hidden whitespace-nowrap flex flex-nowrap",
        className
      )}
    >
      <motion.div
        className={clsx(
          "flex whitespace-nowrap flex-nowrap",
          uppercase && "uppercase",
          italic && "italic"
        )}
        style={{
          x,
          fontSize,
          opacity,
          color,
          fontWeight,
          letterSpacing,
          lineHeight,
        }}
      >
        {[...Array(repetitions)].map((_, index) => (
          <span key={index} className="block mr-[30px]">
            {children}{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
