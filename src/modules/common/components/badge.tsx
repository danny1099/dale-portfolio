import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '@/modules/common/utils'
import { badgeVariants } from '@/modules/common/styles'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
