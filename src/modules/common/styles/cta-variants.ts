import { cva } from 'class-variance-authority'

export const ctaVariants = cva(
  'inline-flex items-center gap-x-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-80',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        tertiary: 'bg-tertiary text-tertiary-foreground',
        danger: 'bg-red-600 text-white',
        outline: 'bg-background text-foreground border border-border',
        ghost: 'bg-transparent border-none text-foreground',
        link: 'bg-background border-none text-foreground justify-start hover:bg-secondary hover:text-secondary-foreground',
        rainbow:
          'group relative inline-flex h-10 animate-rainbow cursor-pointer items-center justify-center border-0 bg-[length:200%] font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]'
      },
      size: {
        default: 'h-10 rounded-lg px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-8 w-8 rounded-md px-0.5 py-0.5'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
)
