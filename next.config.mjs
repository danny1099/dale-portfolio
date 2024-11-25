/** @type {import('next').NextConfig} */
import NextIntlPlugin from 'next-intl/plugin'

/* Request path i18n config */
const i18nPath = './src/config/i18n/config/request.ts'
const withNextIntl = NextIntlPlugin(i18nPath)

/* Nextjs Config */
const nextConfig = {}

export default withNextIntl(nextConfig)
