import Link, { LinkProps } from 'next/link'
import { VariantProps } from 'class-variance-authority'
import { ctaVariants } from '@/modules/common/styles'
import { cn } from '@/modules/common/utils'

interface Props extends LinkProps, VariantProps<typeof ctaVariants> {
  children: React.ReactNode
  className?: string
  target?: string
}

/* prettier-ignore */
export const Navlink = ({ children, variant, size, className, target,...props}: Props) => {
  return (
    <Link {...props} className={cn(ctaVariants({ variant, size, className }))} target={target}>
      {children}
    </Link>
  )
}
