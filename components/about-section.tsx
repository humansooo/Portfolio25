import { summary, user } from '@/constants/data'
import { FadeInWhenVisible } from './animate'
import { EasterEgg } from './animations'
import HomeCom from './ui/home-com'

export default function AboutSection() {
  return (
    <section className="relative flex items-center justify-center">
      <EasterEgg />
      <FadeInWhenVisible className="z-10 w-full text-left">
        <div className="space-y-6">
          <h1 className="text-foreground text-xl  md:text-xl lg:text-2xl">
            Hey, I'm {user.name},
            <br />
            full-stack & mobile developer — 3+ years shipping
            <br />
            <span className="font-racing-sans-one sodo-half text-3xl ">
              React Native, NestJS & TypeScript
            </span>{' '}
            daily.
            <br />I own products end to end — from Play Store
            <br />
            releases to dashboards with{' '}
            <span className="font-racing-sans-one sodo-half text-3xl font-bold">
              CI/CD
            </span>
            .
          </h1>
        </div>
        <HomeCom />
      </FadeInWhenVisible>
    </section>
  )
}
