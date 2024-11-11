'use client'
import { usePathname } from 'next/navigation'
import { Navlink, Icon } from '@/modules/common/components'
import { cn, baseColors, type BaseColors } from '@/modules/common/utils'

interface Props {
  children: React.ReactNode
  route: string
  icon?: string
  color?: string
  className?: string
  child?: React.ReactNode
}

/* prettier-ignore */
export const Link = ({ children, route, icon, color, child, className }: Props) => {
  const pathname = usePathname()

  return (
    <Navlink href={route} variant="link" className={cn('px-3 h-10 w-full hover:bg-secondary hover:text-tertiary',pathname.includes(route) && 'bg-secondary text-tertiary hover:bg-secondary hover:text-tertiary', className)}>
      {child && child}
      {icon && <Icon name={icon} className={cn('size-4', color && `${baseColors[color as BaseColors][0]}`)} />} 
      <span className="text-xs font-medium">{children}</span>
    </Navlink>
  )
}
