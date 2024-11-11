export {}

type EN = typeof import('@/config/i18n/langs/en.json')
type ES = typeof import('@/config/i18n/langs/es.json')

declare global {
  interface IntlMessages extends EN, ES {}
}
