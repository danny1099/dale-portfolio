import { forwardRef } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { Icon } from '@/modules/common/components'
import { ctaVariants } from '@/modules/common/styles'
import { cn } from '@/modules/common/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ctaVariants> {
  asChild?: boolean
  isLoading?: boolean
  icon?: string
  slot?: 'start' | 'end'
}

/* prettier-ignore */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ( { children, className, variant, size, asChild = false, icon, isLoading, slot = 'start', ...props }, ref ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(ctaVariants({ variant, size, className }))}
        disabled={isLoading}
      >
        <div className={cn('flex flex-row items-center gap-x-2', slot === "start" ? 'flex-row' : 'flex-row-reverse')}>
          { icon && (<Icon name={isLoading ? 'spinner' : icon } className={cn('size-4', isLoading && 'animate-spin')}/>)}
          { children }
        </div>
      </button>
    )
  }
)
