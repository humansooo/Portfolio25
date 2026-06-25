import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const sizeVariants = {
  xs: 'px-2 py-1 text-[10px]',
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-xs',
  lg: 'px-3 py-2 text-sm',
}

export function GlassButton({
  size = 'md',
  children,
  className,
  ...props
}: GlassButtonProps) {
  return (
    <button
      className={cn(
        ' sodo text-foreground bg-background/30 font-mono font-bold rounded-xl shadow-[inset_5px_5px_5px_#6666] transition-all duration-700 hover:shadow-[inset_7px_7px_7px_#6676]',
        sizeVariants[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
