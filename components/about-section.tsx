import { user } from '@/constants/data'
import { motion } from 'motion/react'
import { FadeInWhenVisible } from './animate'
import { EasterEgg } from './animations'
export default function AboutSection() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <FadeInWhenVisible className="w-full text-left">
        <div className="mb-8">
          <EasterEgg />
        </div>
        <div className="space-y-6">
          <h1 className="text-xl font-light  text-foreground md:text-xl lg:text-2xl">
            Hey, I'm {user.name},
            <br />
            a full-Stack developer specialized in
            <br />
            <span
              role="button"
              className="font-geist-mono font-black"
            >
              React Native & Web Development
            </span>
            .
            <br />I help brands
            <br />
            connect with people with
            <br />
            <span
              role="button"
              className="font-geist-mono font-bold"
            >
              fresh and distinctive
            </span>{' '}
            approach.
          </h1>
        </div>
        {/* <div className=" hidden lg:block absolute right-8 top-1/2">
          <div className="h-2 w-2 rounded-full bg-foreground"></div>
        </div> */}
      </FadeInWhenVisible>
    </section>
  )
}
