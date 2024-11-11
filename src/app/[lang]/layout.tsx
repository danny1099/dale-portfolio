import type { Metadata } from 'next'
import { globalFont } from '@/config/fonts'
import { ServerProviders, ClientProvider } from '@/lib/providers'
import '@/globals.css'

interface Props extends Children {
  params: { lang: string }
}

export default async function RootLayout({ children, params }: Readonly<Props>) {
  const { lang } = await params
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${globalFont.className} antialiased min-h-screen`}>
        <ServerProviders>
          <ClientProvider>{children}</ClientProvider>
        </ServerProviders>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "I'am Danny | Software Developer",
  description: 'Portfolio site for Danny A. Mosquera | Dale',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/dale-logo.png',
        href: '/images/dale-logo.png'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/dale-logo-dark.png',
        href: '/images/dale-logo-dark.png'
      }
    ]
  }
}
