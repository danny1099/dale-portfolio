import { cn } from '@/modules/common/utils'

interface Props {
  src?: string
  text?: string
  className?: string
}

export const Avatar = ({ src, text, className }: Props) => {
  return (
    <div className={cn('relative inline-flex size-9 items-center justify-center rounded-full bg-secondary', className)}>
      {src ? (
        <img src={src} alt="Avatar of user" className="h-full w-full rounded-full object-cover" loading="eager" />
      ) : (
        <p className="text-xs font-medium text-foreground">{text}</p>
      )}
    </div>
  )
}
