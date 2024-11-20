import { Heading } from '@/modules/common/components'

export const MyProjects = () => {
  return (
    <section className="bg-background flex flex-col size-full px-4 py-2 bg-no-repeat max-sm:bg-pattern md:px-16 md:py-6">
      <Heading text="My Projects" className="text-4xl md:text-6xl" />
      <p className="text-accent-foreground text-pretty text-xs mt-2 md:w-2/5 md:h-auto">
        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my
        favorites.
      </p>

      <article className="size-full grid grid-cols-1 md:grid-cols-2 gap-4"></article>
    </section>
  )
}
