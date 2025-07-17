import { user } from "@/constants/data";
import { motion } from "motion/react";
import { FadeInWhenVisible } from "./animate";
import { EasterEgg } from "./animations";
import HomeCom from "./ui/home-com";
export default function AboutSection() {
  return (
    <section className="flex min-h-screen items-center relative justify-center">
      <EasterEgg />
      <FadeInWhenVisible className="w-full text-left">
        <div className="space-y-6">
          <h1 className="text-xl font-light  text-foreground md:text-xl lg:text-2xl">
            Hey, I'm {user.name},
            <br />
            a full-Stack developer specialized in
            <br />
            <span
              role="button"
              className="font-geist-mono font-black sodo-half"
            >
              React Native & Web Development
            </span>
            .
            <br />I help brands
            <br />
            connect with people with
            <br />
            <span role="button" className="font-geist-mono font-bold sodo-half">
              fresh and distinctive
            </span>{" "}
            approach.
          </h1>
        </div>
        <HomeCom />
      </FadeInWhenVisible>
    </section>
  );
}
