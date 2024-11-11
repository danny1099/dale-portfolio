import { i18n } from '@/config/i18n/config/locales'
import createMiddleware from 'next-intl/middleware'

const nextIntlMiddleware = createMiddleware({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
  localeDetection: false
})

export default nextIntlMiddleware

export const config = {
  matcher: ['/', '/(en|es)/:path*', '/((?!api|trpc|_next|_vercel|.*\\..*).*)']
}
