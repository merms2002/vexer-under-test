import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Instrument_Sans, Manrope, Playfair_Display } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const calSans = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-cal-sans",
  display: "swap",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vexer | Chess Analyzer",
  description:
    "Vexer turns your games into instant insights with adaptive engine analysis, opening context, and actionable strategy notes.",
  generator: "v0.app",
  keywords: ["chess", "analysis", "Vexer", "chess analytics", "game review"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${calSans.variable} ${instrumentSans.variable} font-sans antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
