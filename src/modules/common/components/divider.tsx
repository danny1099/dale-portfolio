import { cn } from '@/modules/common/utils'
import { type VariantProps } from 'class-variance-authority'
import { dividerVariants } from '@/modules/common/styles'

interface Props extends VariantProps<typeof dividerVariants> {
  className?: string
}

export const Divider = ({ type, className }: Props) => {
  return <span className={cn(dividerVariants({ type, className }))} />
}
