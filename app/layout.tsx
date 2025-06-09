import type React from 'react'
import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/lib/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ThemeToggle } from '@/components/theme-toggle'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

const bytesized = localFont({
  src: '../public/font/bytesized-latin-400-normal.woff2',
  variable: '--font-bytesized',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  weight: ['400', '500', '600', '700', '200', '300'],
})

export const metadata: Metadata = {
  title: 'Himanshu Suthar | Portfolio',
  description:
    'A full-stack developer specialized in React Native and Web Development. I help brands connect with people with a fresh and distinctive approach.',
  keywords: [
    'Himanshu Suthar',
    'Portfolio',
    'Full Stack Developer',
    'React Native',
    'Web Development',
    'Software Engineer',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'Mobile App Development',
    'Web App Development',
  ],
  // generator: 'v0.dev',
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
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        <body
          className={`${inter.variable} ${bytesized.variable} ${geistMono.variable}
            antialiased`}
        >
          {/* <CustomCursor /> */}
          {children}
          <Toaster
            position="top-right"
            duration={5000}
          />
          <div className="fixed bottom-4 right-4 z-50">
            <ThemeToggle />
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}
