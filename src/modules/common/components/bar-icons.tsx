import { Icon, Divider, ThemeToggle, Navlink, Lang } from '@/modules/common/components'

export const BarIcons = () => {
  return (
    <div className="z-50 bg-secondary h-auto min-w-10 items-center border border-border flex flex-col px-1 py-3 gap-y-3 rounded-lg absolute right-4 top-[calc(100vh/2)] md:right-16">
      <ThemeToggle />
      <Lang />
      <Navlink href="https://github.com/danny1099" target="_blank" variant="ghost" size="icon" className="size-6">
        <Icon name="github" />
      </Navlink>
      <Divider type="horizontal" className="w-6" />
      <Icon name="menu" />
    </div>
  )
}
