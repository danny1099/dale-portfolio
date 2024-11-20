import { getTranslations } from 'next-intl/server'
import { Text, Button } from '@/modules/common/components'
import { Iam } from '@/modules/home/components'

export const Landing = async () => {
  const t = await getTranslations('intro')

  return (
    <section className="bg-background flex flex-row size-full px-4 py-2 overflow-hidden bg-no-repeat max-sm:bg-pattern md:px-16">
      <article className="relative flex flex-col size-full md:w-3/5">
        <Text content={t('greeting')} className="text-lg text-muted-foreground font-medium mt-28 md:mt-28" />
        <Text content={t('description')} className="text-muted-foreground line-clamp-3" />
        <Button icon="arrow-right" slot="end" variant="rainbow" className="text-xs mt-5 w-40">
          {t('cta')}
        </Button>
        <Iam />
      </article>

      <article className="size-full px-2 py-6 flex flex-col justify-end max-sm:hidden">
        <img
          src="/images/landing-content.jpeg"
          alt="landing-content"
          className="object-cover rounded-xl transform scale-x-[-1] brightness-110"
          loading="lazy"
        />
      </article>
    </section>
  )
}
