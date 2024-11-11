import { getTranslations } from 'next-intl/server'
import { Title, Text } from '@/modules/common/components'

export default async function Home() {
  const t = await getTranslations('intro')

  return (
    <section className="bg-background size-full px-4 py-2 md:px-12">
      <article className="flex flex-row justify-between h-full py-6">
        <div className="flex flex-col justify-end">
          <Text content={t('welcome')} />
          <Title text="Danny" className="text-8xl -ml-4 md:text-[12rem] z-30" />
        </div>

        <div></div>
      </article>
    </section>
  )
}
