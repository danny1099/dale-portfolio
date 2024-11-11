import { cn } from '@/modules/common/utils'

interface Props {
  className?: string
}

export const Dot = ({ className }: Props) => {
  return <span className={cn('w-2 h-2 rounded-full bg-emerald-600 ring-1 ring-white ring-offset-1', className)} />
}
