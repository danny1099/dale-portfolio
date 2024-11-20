import { getTranslations } from 'next-intl/server'
import { Button, Heading, Text } from '@/modules/common/components'
import { MyStack, WhoIam } from '@/modules/home/components'

export const AboutMe = async () => {
  const t = await getTranslations('about')

  return (
    <section className="bg-background flex flex-col size-full px-4 py-2 gap-y-2 bg-no-repeat md:px-16 md:py-6 md:bg-pattern">
      <article className="size-full flex flex-col-reverse py-2 gap-1 md:flex-row">
        <div className="w-full h-[35%] gap-y-1 flex flex-col md:h-full md:w-[35%] md:pr-2">
          <img
            src="/images/img-about-me.jpg"
            alt="Image of Danny A. Mosquera"
            loading="lazy"
            className="object-cover w-full h-[calc(100%-3rem)] rounded-lg md:h-[calc(100%-6rem)]"
          />
          <blockquote className="h-10 text-muted-foreground text-pretty text-[.6rem] italic flex items-center bg-secondary px-2 py-1 rounded-lg">
            {t('quote')}
          </blockquote>
        </div>

        <div className="w-full h-[65%] flex flex-col p-1 gap-y-2 md:h-full md:w-[65%] md:px-16">
          <Heading text={t('title')} className="text-4xl md:text-6xl" />
          <WhoIam />
          <MyStack />
          <Button icon="arrow-right" slot="end" className="text-sm mt-1 w-52 md:mt-3">
            {t('more_about')}
          </Button>
        </div>
      </article>
    </section>
  )
}
