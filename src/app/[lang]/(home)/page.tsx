import { getTranslations } from 'next-intl/server'
import { Title, Button } from '@/modules/common/components'
import { Welcome } from '@/modules/home/components'

export default async function Home() {
  const t = await getTranslations('intro')

  return (
    <section className="bg-background flex flex-row size-full px-4 py-2 overflow-hidden  md:px-16">
      <article className="bg-background relative flex flex-col size-full md:w-3/5">
        <Welcome className="mt-48 md:mt-32" />
        <Button icon="arrow-right" slot="end" variant="rainbow" className="text-xs mt-5 w-40">
          {t('cta')}
        </Button>
        <Title text="Danny" className="absolute z-30 bottom-0 text-[6.5rem] md:text-[13rem] md:-ml-4 md:-bottom-3" />
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
