import { type ItemLink } from '@/modules/home/types'
import { publicRoutes } from '@/config/routes'

export const navLinks: ItemLink[] = [
  {
    id: 'projects',
    text: 'Projects',
    href: publicRoutes.WORK,
    icon: 'code-slash',
    type: 'link',
    className: 'max-sm:hidden'
  },
  {
    id: 'blog',
    text: 'Blog',
    href: publicRoutes.BLOG,
    icon: 'bookmark',
    type: 'link',
    className: 'max-sm:hidden'
  },
  { id: 'separator', type: 'divider', href: '', text: '', className: 'max-sm:hidden' },
  {
    id: 'about',
    text: 'About Me',
    href: publicRoutes.ABOUT,
    type: 'link'
  }
]
