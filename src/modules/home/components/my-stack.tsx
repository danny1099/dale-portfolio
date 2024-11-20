import { getTranslations } from 'next-intl/server'
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill, RiNodejsFill } from 'react-icons/ri'
import { SiTypescript, SiGit, SiMongodb, SiPostgresql } from 'react-icons/si'
import { Badge } from '@/modules/common/components'

const stacks = [
  {
    name: 'Next.js',
    icon: <RiNextjsFill size={20} />
  },
  {
    name: 'React',
    icon: <RiReactjsFill size={20} />
  },
  {
    name: 'Tailwind CSS',
    icon: <RiTailwindCssFill size={20} />
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={16} />
  },
  {
    name: 'Git',
    icon: <SiGit size={16} />
  },
  { name: 'Node.js', icon: <RiNodejsFill size={20} /> },
  { name: 'MongoDB', icon: <SiMongodb size={20} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={16} /> }
]

export const MyStack = async () => {
  const t = await getTranslations('about')

  return (
    <div className="flex flex-col bg-background rounded-lg mt-1.5 h-fit w-full md:mt-10">
      <h3 className="text-foreground text-xl font-medium">{t('stack')}</h3>
      <div className="flex flex-wrap gap-2 mt-1.5 md:mt-2">
        {stacks.map(({ name, icon }) => (
          <Badge key={name} variant="outline" className="gap-x-2 text-xs hover:text-tertiary">
            {icon} {name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
