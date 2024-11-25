import { Badge, Button, Heading, Icon } from '@/modules/common/components'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/modules/common/components/card'
import {stackProjects} from '@/modules/projects/helpers'

export const MyProjects = () => {
  return (
    <section className="bg-background flex flex-col size-full px-4 py-2 bg-no-repeat max-sm:bg-pattern md:px-16 md:py-6">
      <Heading text="My Projects" className="text-4xl md:text-6xl" />
      <p className="text-accent-foreground text-pretty text-xs mt-2 md:w-2/5 md:h-auto">
        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my
        favorites.
      </p>

      <article className="size-full grid grid-cols-1 mt-5 md:grid-cols-3 gap-3">
        {stackProjects.map((project) => {
          return (
            <Card key={project.id} className='h-full flex flex-col'>
               <div className="relative w-full h-[250px] flex items-center justify-center bg-secondary px-4 py-6">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading='lazy'
                  height={150}
                  width={250}
                  className="rounded-t-lg object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Icon name='eye' className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardFooter>
            </Card>
          )
        } )}
      </article>
    </section>
  )
}
