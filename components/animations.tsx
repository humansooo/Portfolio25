"use client";

import { motion } from "motion/react";

export const EasterEgg = (props: { rotate?: number }) => {
  return (
    <motion.div
      className="text-[300px] absolute z-0 font-bytesized text-foreground  dark:opacity-[0.05] opacity-[0.2] pointer-events-none"
      style={{
        top: "50%",
        left: "50%",
        filter: "blur(20px)",
        rotate: `${props.rotate ? props.rotate : 0}deg`,
        scale: 10,
      }}
      // initial={{
      //   scale: 20,
      // }}
      // animate={{
      //   scale: 10,
      //   rotate: [
      //     `${props.rotate ? props.rotate : 0}deg`,
      //     `${props.rotate ? props.rotate + 10 : 10}deg`,
      //   ],
      // }}
      // transition={{
      //   type: "spring",
      //   duration: 2000,
      //   ease: "easeInOut",
      //   repeat: Infinity,
      //   repeatType: "reverse",
      // }}
    >
      (*)
    </motion.div>
  );
};
