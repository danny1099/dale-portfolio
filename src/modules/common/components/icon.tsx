import { cn } from '@/modules/common/utils'

interface Props {
  name: string
  className?: string
}

export const Icon = ({ name, className = 'h-4 w-4' }: Props) => {
  return (
    <svg className={cn('bi', className)} fill="currentColor">
      <use xlinkHref={`/images/img-icons_sprite.svg#${name}`} />
    </svg>
  )
}
