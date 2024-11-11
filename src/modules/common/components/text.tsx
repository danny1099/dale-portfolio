import { cn } from '@/modules/common/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  content: string
}

/* prettier-ignore */
export const Text = ({ content, ...props }: Props) => {
  return (
    <p {...props} className={cn('text-xs text-accent-foreground', props.className)}>
      {content}
    </p>
  )
}
