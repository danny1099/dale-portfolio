import { Icon } from '@/modules/common/components'

export const ContactMe = () => {
  return (
    <div className="bg-secondary rounded-xl flex flex-row gap-x-2 items-center w-fit py-1 px-4 md:px-8">
      <Icon name="inbox" className="h-5 w-5" />
      <div className="flex flex-col h-full w-full justify-center">
        <p className="text-xs text-foreground font-semibold whitespace-pre-wrap">Get in touch</p>
        <p className="text-[.7rem] text-muted-foreground -mt-[2px]">dale.softdev@gmail.com</p>
      </div>
    </div>
  )
}
