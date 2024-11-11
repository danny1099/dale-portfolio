'use client'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export const ClientProvider = ({ children }: Children) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemeProvider>
  )
}
