import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bayareatimes.news"

export const metadata: Metadata = {
  title: "Bay Area Times - Independent Journalism for the Bay Area",
  description: "Your trusted source for Bay Area news, tech, business, politics, culture, and lifestyle coverage.",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Bay Area Times - Independent Journalism for the Bay Area",
    description: "Your trusted source for Bay Area news, tech, business, politics, culture, and lifestyle coverage.",
    url: siteUrl,
    siteName: "Bay Area Times",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bay Area Times - Independent Journalism for the Bay Area",
    description: "Your trusted source for Bay Area news, tech, business, politics, culture, and lifestyle coverage.",
    creator: "@bayareatimes",
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
