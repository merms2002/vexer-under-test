import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "VEXER | Stealth Chess Intelligence",
  description:
    "Monochromatic chess analysis terminal. Adaptive engine analysis, opening intelligence, and strategic directives.",
  generator: "v0.app",
  keywords: ["chess", "analysis", "VEXER", "chess analytics", "stealth terminal"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}
      >
        {/* Noise Grain Overlay - 5% opacity */}
        <div className="noise-overlay" aria-hidden="true" />
        {/* Dot-matrix Background */}
        <div className="dot-matrix" aria-hidden="true" />
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
