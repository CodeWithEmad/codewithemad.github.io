import type { Metadata, Viewport } from 'next'
import { Poppins, Raleway, Open_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import AOSInit from '@/components/AOS'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-open-sans',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://codewithemad.github.io'),
  title: 'Emad Rad - Software Engineer',
  description: 'Explore my portfolio and professional journey as a software engineer.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      {
        rel: 'icon',
        media: '(prefers-color-scheme: light)',
        url: '/images/favicon-light.ico',
      },
      {
        rel: 'icon',
        media: '(prefers-color-scheme: dark)',
        url: '/images/favicon-dark.ico',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Emad Rad - Software Engineer',
    description: 'Explore my portfolio and professional journey as a software engineer.',
    url: 'https://codewithemad.github.io',
    siteName: 'Emad Rad Portfolio',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: 'https://codewithemad.github.io/images/website-social-card.png',
        width: 1200,
        height: 630,
        alt: 'Emad Rad - Software Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emad Rad - Software Engineer',
    description: 'Explore my portfolio and professional journey as a software engineer.',
    creator: '@codewithemad',
    images: ['https://codewithemad.github.io/images/website-social-card.png'],
  },
  other: {
    'msapplication-TileColor': '#da532c',
    'apple-mobile-web-app-title': 'Dr. Asadi',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <head />
      <body
        className={`${poppins.variable} ${raleway.variable} ${openSans.variable} bg-white font-sans text-gray-700 antialiased dark:bg-gray-900 dark:text-gray-200`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <AOSInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
