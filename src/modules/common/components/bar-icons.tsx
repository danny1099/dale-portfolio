import { Icon, Divider } from '@/modules/common/components'

export const BarIcons = () => {
  return (
    <div className="z-50 bg-secondary h-auto min-w-10 items-center border border-border flex flex-col px-1 py-3 gap-y-4 rounded-lg absolute right-4 top-[calc(100vh/2)] md:right-20">
      <Icon name="sun" />
      <Icon name="translate" />
      <Icon name="github" />
      <Divider type="horizontal" className="w-6" />
      <Icon name="menu" />
    </div>
  )
}
