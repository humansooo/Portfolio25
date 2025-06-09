'use client'

import { projects } from '@/constants/data'
import { colorRandom, randomColor } from '@/lib/random-color'
import { cn } from '@/lib/utils'
import { ArrowLeftIcon, ArrowRightIcon, Link2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function ProjectsSection() {
  return (
    <section className="py-24">
      <div className="w-full">
        <h2 className="mb-16 text-center text-2xl font-light text-foreground">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer gap-2 flex flex-col border relative border-dashed border-border p-4 "
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.image}
                  draggable={false}
                  width={500}
                  height={500}
                  className="object-cover transition-transform duration-500 rounded-sm hover:scale-105 aspect-[8/5]"
                />
              </div>
              <div className="">
                <h3 className="text-lg font-bold flex items-center justify-between text-foreground/80">
                  {project.title}
                  <Link2
                    size={18}
                    className="inline-block cursor-pointer text-foreground/30 "
                  />
                </h3>
                <p className="text-sm font-bold text-foreground flex  flex-wrap">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="mr-2 rounded-full px-0 dark:text-foreground"
                      style={{
                        color: `#000000${Math.floor(Math.random() * 70 + 30)}`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ImagesCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="flex gap-2 overflow-hidden transition-transform aspect-[7/5] h-[200px] duration-500 relative">
      <button
        onClick={handlePrev}
        className={cn(
          'absolute left-0 z-10 top-1/2 -translate-y-1/2',
          currentIndex === 0 && 'hidden'
        )}
      >
        <ArrowLeftIcon />
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className="transition-transform w-[500px] h-[200px] p-2 duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          <Image
            src={image}
            alt={image}
            draggable={false}
            width={500}
            height={200}
            className="object-cover outline flex-1 transition-transform duration-500 rounded-sm"
          />
        </div>
      ))}
      <button
        onClick={handleNext}
        className={cn(
          'absolute right-0 z-10 top-1/2 -translate-y-1/2',
          currentIndex === images.length - 1 && 'hidden'
        )}
      >
        <ArrowRightIcon />
      </button>
    </div>
  )
}
