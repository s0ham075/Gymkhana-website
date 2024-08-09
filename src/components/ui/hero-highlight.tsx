"use client";
import React from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroHighlight = ({
  bgImage="/hero-highligh-bg.avif",
  children ,
  className,
  containerClassName,
}: {
  bgImage?: string;
  children: React.ReactNode ;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "relative flex bg-black justify-center items-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute w-full h-full flex justify-center lg:justify-end">
        <img
          src={bgImage}
          alt="placeholder"
          width={400}
          height={600}
          className="object-cover max-w-full min-w-full min-h-full block absolte"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-slate-100   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      
      <div className={cn("relative z-30", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
