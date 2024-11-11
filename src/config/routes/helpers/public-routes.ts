import { useLocale } from 'next-intl'
import { PublicRoute, publicRoutes } from '@/config/routes/paths'

export const getPublicRoute = (route: PublicRoute, withLocale = true) => {
  const locale = useLocale()
  const routePath = publicRoutes[route]
  return withLocale ? `/${locale}/${routePath}` : `/${routePath}`
}
