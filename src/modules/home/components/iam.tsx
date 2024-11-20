import { getTranslations } from 'next-intl/server'
import { Title } from '@/modules/common/components'

export const Iam = async () => {
  const t = await getTranslations('intro')

  return (
    <div className="flex flex-col absolute z-30 bottom-0 md:-ml-4 md:-bottom-3">
      <p className="text-4xl text-foreground ml-2 -mb-8 md:ml-4 md:-mb-[4.5rem]">{t('iam')}</p>
      <Title text="Danny" className="text-[6.5rem] md:text-[13rem]" />
    </div>
  )
}
