import { getTranslations } from 'next-intl/server'
import { cn } from '@/modules/common/utils'

interface Props {
  className?: string
}

export const Welcome = async ({ className }: Props) => {
  const t = await getTranslations('intro')

  return (
    <p className={cn('text-sm text-muted-foreground line-clamp-2', className)}>
      {t('greeting')}
      <span className="font-semibold text-primary">Danny</span>
      {t('description')}
    </p>
  )
}
