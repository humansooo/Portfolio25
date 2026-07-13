import type React from 'react'
import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter, Instrument_Serif, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ThemeToggle } from '@/components/theme-toggle'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-face',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif-face',
  weight: ['400'],
  style: ['normal', 'italic'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono-face',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Himanshu Suthar | Full Stack Developer',
  applicationName: 'Himanshu Suthar | Full Stack Developer',
  description:
    'Full Stack and Mobile Developer with 3+ years building scalable web and mobile applications across healthtech, mobility, and SaaS. React, React Native, NestJS, TypeScript.',
  keywords: [
    'Himanshu Suthar',
    'Full Stack Developer',
    'Mobile Developer',
    'React Native',
    'NestJS',
    'TypeScript',
    'FastAPI',
    'Next.js',
    'CI/CD',
    'Healthtech',
    'SaaS',
  ],
  icons: {
    icon: '/icon.svg',
  },
  creator: 'Himanshu Suthar',
  formatDetection: {
    email: true,
    telephone: true,
  },
  authors: [
    {
      name: 'Himanshu Suthar',
      url: 'https://linkedin.com/in/hmxnsu',
    },
  ],
  generator: 'Next.js',
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    noarchive: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      noarchive: true,
    },
  },
  openGraph: {
    title: 'Himanshu Suthar | Full Stack Developer',
    description:
      'Full Stack and Mobile Developer with 3+ years building scalable web and mobile applications across healthtech, mobility, and SaaS.',
    url: 'https://himanshu.com',
    siteName: 'Himanshu Suthar | Full Stack Developer',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="32x32" />
      </head>
      <body className="overflow-x-hidden antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" duration={5000} />
          <div className="fixed right-4 bottom-4 z-50">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
