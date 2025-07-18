import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import {
  Inter,
  Geist_Mono,
  Montserrat,
  Racing_Sans_One,
} from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/lib/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const bytesized = localFont({
  src: "../public/font/bytesized-latin-400-normal.woff2",
  variable: "--font-bytesized",
});

const bohme = localFont({
  src: "../public/font/bohme/Bohme.ttf",
  variable: "--font-bohme",
});

const racingSansOne = Racing_Sans_One({
  subsets: ["latin"],
  variable: "--font-racing-sans-one",
  weight: ["400"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700", "200", "300"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "200", "300"],
});

export const metadata: Metadata = {
  title: "Himanshu Suthar | Portfolio",
  applicationName: "Himanshu Suthar | Portfolio",
  description:
    "A full-stack developer specialized in React Native and Web Development. I help brands connect with people with a fresh and distinctive approach.",
  keywords: [
    "Himanshu Suthar",
    "Portfolio",
    "Full Stack Developer",
    "React Native",
    "Web Development",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Mobile App Development",
    "Web App Development",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  creator: "Himanshu Suthar",
  formatDetection: {
    email: true,
    telephone: true,
  },
  authors: [{ name: "Himanshu Suthar", url: "https://linkedin.com/in/hmxnsu" }],
  generator: "Next.js",
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    noarchive: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="32x32" />
      </head>
      <body
        className={`${inter.variable} ${bytesized.variable} ${geistMono.variable} ${montserrat.variable} ${bohme.variable} ${racingSansOne.variable}
            antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" duration={5000} />
          <div className="fixed bottom-4 right-4 z-50">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
