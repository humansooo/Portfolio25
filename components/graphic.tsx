"use client";
import { motion, scroll, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
export default function Graphic() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div className="fixed bottom-[-300px] lg:block hidden z-0 right-[-300px]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="lg:h-[1000px] lg:w-[1000px] h-[500px] w-[500px]  rounded-full border border-dashed border-border/60 "
      />
    </div>
  );
}
