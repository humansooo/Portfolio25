import { user } from '@/constants/data'
import { motion } from 'motion/react'
import { FadeInWhenVisible } from './animate'
import { EasterEgg } from './animations'
import HomeCom from './ui/home-com'
export default function AboutSection() {
  return (
    <section className="relative flex items-center justify-center">
      <EasterEgg />
      <FadeInWhenVisible className="z-10 w-full text-left">
        <div className="space-y-6">
          <h1 className="text-foreground text-xl font-light md:text-xl lg:text-2xl">
            Hey, I'm {user.name},
            <br />
            a full-Stack developer specialized in
            <br />
            <span className="font-racing-sans-one sodo-half text-3xl font-light">
              React Native & Web Development
            </span>
            .
            <br />I help brands
            <br />
            connect with people with
            <br />
            <span className="font-racing-sans-one sodo-half text-3xl font-bold">
              fresh and distinctive
            </span>{' '}
            approach.
          </h1>
        </div>
        <HomeCom />
      </FadeInWhenVisible>
    </section>
  )
}
