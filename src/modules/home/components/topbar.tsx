import { Logo, Divider, Avatar, BarIcons } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'
import { Link } from '@/modules/home/components'
import { navLinks } from '@/modules/home/helpers'

export const Topbar = () => {
  return (
    <header className="bg-background h-16 w-full px-4 flex flex-row items-center justify-between col-start-1 md:px-12">
      <Logo />

      <nav className="h-full flex items-center">
        <ul className="flex flex-row items-center gap-x-2">
          {navLinks.map((link) => {
            if (link.type === 'divider')
              return <Divider key={link.id} type="vertical" className={cn('h-8', link.className)} />

            return (
              <li key={link.id}>
                <Link
                  route={link.href}
                  icon={link.icon}
                  child={link.id === 'about' ? <Avatar src="/images/img-avatar.png" className="w-6 h-6" /> : null}
                  className={cn(link.className)}
                >
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <BarIcons />
    </header>
  )
}