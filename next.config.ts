import NextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const i18nPath = './src/config/i18n/config/request.ts'
const withNextIntl = NextIntlPlugin(i18nPath)

const nextConfig: NextConfig = {
  /* config options here */
}

export default withNextIntl(nextConfig)
