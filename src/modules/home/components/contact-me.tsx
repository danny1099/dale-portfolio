'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button, Icon } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

export const ContactMe = () => {
  const [isHover, setIsHover] = useState(false)
  const [copied, setCopied] = useState(false)
  const t = useTranslations('topbar')

  /* variable for email to be copied */
  const email = 'dale.softdev@gmail.com'

  const handleEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    })
  }

  const handleHoverEnter = () => {
    if (!isHover) setIsHover(true)
    if (isHover || !copied) return
  }

  const handleHoverLeave = () => {
    if (isHover && !copied) setIsHover(false)
  }

  return (
    <div
      className="bg-secondary rounded-xl flex flex-row gap-x-2 items-center w-fit py-1 px-4"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <Icon name="envelope-at" className="h-6 w-6" />
      <div className="flex flex-col h-full w-full z-20">
        <p className="text-xs text-foreground font-semibold whitespace-pre-wrap">{t('get_in_touch')}</p>
        <p className="text-[.7rem] text-muted-foreground -mt-[2px]">{email}</p>
      </div>
      {isHover && (
        <Button
          variant="ghost"
          size="icon"
          className={cn('size-4', isHover && 'text-tertiary')}
          onClick={handleEmailToClipboard}
        >
          <Icon
            name={copied ? 'check2' : 'clipboard'}
            className={cn('h-4 w-4 mt-2', copied ? 'text-tertiary' : 'text-foreground')}
          />
        </Button>
      )}
    </div>
  )
}
