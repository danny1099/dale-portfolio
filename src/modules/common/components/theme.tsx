'use client'
import { useTheme } from 'next-themes'
import { Button, Icon } from '@/modules/common/components'

/* prettier-ignore */
export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      className='size-6'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
       <Icon name="sun" className="text-foreground size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
       <Icon name="moon" className="absolute text-foreground size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
