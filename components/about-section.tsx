import { user } from '@/constants/data'
export default function AboutSection() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="w-full text-center">
        <div className="mb-8">
          <span className="text-xl font-bytesized text-foreground">(*)</span>
        </div>
        <div className="space-y-6">
          <h1 className="text-xl font-light  text-foreground md:text-xl lg:text-2xl">
            Hey, I'm {user.name},
            <br />
            a full-Stack developer specialized in
            <br />
            <em className="font-serif">React Native & Web Development</em>.
            <br />I help brands
            <br />
            connect with people with
            <br />a <em className="font-serif">fresh and distinctive</em>{' '}
            approach.
          </h1>
        </div>
        <div className="absolute right-8 top-1/2">
          <div className="h-2 w-2 rounded-full bg-foreground"></div>
        </div>
      </div>
    </section>
  )
}
