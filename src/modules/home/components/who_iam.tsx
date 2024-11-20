import { getTranslations } from 'next-intl/server'
import { Text } from '@/modules/common/components'

export const WhoIam = async () => {
  const t = await getTranslations('about')

  return (
    <div className=" flex flex-col h-auto w-full gap-y-4">
      <p className="text-accent-foreground text-pretty text-xs">
        {t('iam')} <span className="text-foreground font-semibold">{t('name')}</span> {t('who_iam')}
      </p>
      <Text content={t('now_as')} className="text-accent-foreground text-pretty text-xs line-clamp-4" />
    </div>
  )
}
