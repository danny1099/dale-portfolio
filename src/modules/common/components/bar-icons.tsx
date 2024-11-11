import { Icon, Divider } from '@/modules/common/components'

export const BarIcons = () => {
  return (
    <div className="bg-secondary h-auto w-10 items-center shadow shadow-neutral-300 flex flex-col px-1 py-3 gap-y-4 rounded-lg absolute right-4 top-[calc(100vh/3)] md:right-10">
      <Icon name="sun" />
      <Icon name="translate" />
      <Icon name="github" />
      <Divider type="horizontal" className="w-6" />
      <Icon name="menu" />
    </div>
  )
}
