import { cva } from 'class-variance-authority'

export const dividerVariants = cva('bg-border', {
  variants: {
    type: {
      vertical: 'w-[1px] h-full',
      horizontal: 'h-[1px] w-full'
    }
  },
  defaultVariants: {
    type: 'vertical'
  }
})
