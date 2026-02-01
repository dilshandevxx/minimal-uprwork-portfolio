"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
};

export function Spotlight({ className, fill = "white", mouseX, mouseY }: SpotlightProps) {
  const internalMouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const internalMouseY = useSpring(0, { stiffness: 500, damping: 100 });

  const x = mouseX || internalMouseX;
  const y = mouseY || internalMouseY;

  useEffect(() => {
    if (mouseX || mouseY) return;

    const handleMouseMove = (event: MouseEvent) => {
      internalMouseX.set(event.clientX);
      internalMouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [internalMouseX, internalMouseY, mouseX, mouseY]);

  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute inset-0 z-30 transition-opacity duration-300",
        className
      )}
      style={{
        background: useTransform(
          [x, y],
          ([posX, posY]) =>
            `radial-gradient(600px circle at ${posX}px ${posY}px, ${fill}, transparent 40%)`
        ),
      }}
    />
  );
}
