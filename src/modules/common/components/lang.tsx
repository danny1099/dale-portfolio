'use client'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { i18n, type Locale } from '@/config/i18n/config/locales'
import { Button, Icon } from '@/modules/common/components'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/modules/common/components/dropdown'

export const Lang = () => {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const [selectLocale, setLocale] = useState(locale)
  const t = useTranslations('lang')

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale

    const currentPath = segments.join('/')
    console.log(currentPath)
    router.push(currentPath)
    setLocale(locale)
  }

  const getLocalesStack = () => {
    const locales = i18n.locales
    const langs: { locale: string; name: string; description: string }[] = []

    locales.map((l: Locale) => {
      langs.push({
        locale: l,
        name: t(`${l}_locale`),
        description: t(`${l}_description`)
      })
    })
    return langs
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="size-6">
          <Icon name="translate" className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-fit">
        <DropdownMenuRadioGroup value={selectLocale} onValueChange={(value: string) => redirectedPathname(value)}>
          {getLocalesStack().map((lang) => {
            return (
              <DropdownMenuRadioItem key={lang.locale} value={lang.locale}>
                <div className="text-xs flex flex-row gap-x-2 items-center">
                  <img
                    src={`/images/img-flag-${lang.locale}.png`}
                    alt="Flag of locale selected"
                    className="w-4 h-4"
                    loading="lazy"
                  />
                  <span className="flex flex-col justify-center text-[.7rem]">
                    {lang.name}
                    <p className="text-[0.6rem] text-muted-foreground">{lang.description}</p>
                  </span>
                </div>
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
