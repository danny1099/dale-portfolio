import { useLocale } from 'next-intl'
import { privateRoutes, type PrivateRoute } from '@/config/routes/paths'

/*  get list of private routes per locale */
export const privateRoutesList = (langs: string[]) => {
  const locales = [...langs]
  const routes = Object.values(privateRoutes)
  const privateRoutesList: string[] = []

  routes.map((route) => {
    locales.map((locale) => {
      privateRoutesList.push(`/${locale}/${route}(.*)`)
    })
  })

  return privateRoutesList
}

/* Get private route with locale prefix  */
export const getPrivateRoute = (route: string, withLocale = true) => {
  const locale = useLocale()
  const routePath = privateRoutes[route as PrivateRoute]
  return withLocale ? `/${locale}/${routePath}` : `/${routePath}`
}
