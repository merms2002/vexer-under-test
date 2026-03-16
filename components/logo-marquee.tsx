"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const logos = [
  { name: "Chess.com" },
  { name: "Lichess" },
  { name: "FIDE" },
  { name: "Kasparov Academy" },
  { name: "Chessable" },
  { name: "Improv Chess" },
  { name: "Grandmaster League" },
  { name: "NakamuraCast" },
]

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-[#c9d0ff]/80 uppercase tracking-[0.5em] font-semibold">
          Trusted by coaching teams and clubs worldwide
        </p>
      </motion.div>

      <div className="relative flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030310] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030310] to-transparent pointer-events-none" />
        <div className="flex animate-marquee gap-6">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px] h-16 rounded-2xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-[#57f4ff]/50 transition"
            >
              <span className="font-semibold text-base tracking-wide" style={{ fontFamily: "var(--font-instrument-sans)" }}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
