import { cn } from '@/lib/utils'

interface ProgressiveBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: number[]
}

export default function ProgressiveBlur({
  blur = [1, 10, 32, 64],
  ...props
}: ProgressiveBlurProps) {
  const divElements = Array(blur.length - 2).fill(null)

  return (
    <div
      {...props}
      className={cn(
        'pointer-events-none flex rotate-180 flex-col',
        props.className,
      )}
      //   style={{ overflow: 'hidden', backgroundColor: 'var(--background)' }}
    >
      {divElements.map((_, index) => {
        // Calculate the blur for this step, distributing from 0 to blur
        const blurIndex = index
        // Calculate opacity for a smooth gradient effect
        const mask = `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 100%)`

        return (
          <div
            key={`blur-${index}`}
            className="absolute inset-0"
            style={{
              zIndex: index + 2,
              backdropFilter: `blur(${blur[blurIndex]}px)`,
              WebkitBackdropFilter: `blur(${blur[blurIndex]}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        )
      })}
    </div>
  )
}
