"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-cal-sans)" }}
        >
          Ready for the next master-level analysis?
        </h2>
        <p className="text-lg sm:text-xl text-[#c9d0ff]/80 mb-10 max-w-2xl mx-auto">
          Drop a PGN, stream a live match, or plug in your club board—Vexer turns it into a narrative with tactical motifs,
          coaching prompts, and clear follow-up steps.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="shimmer-btn bg-white text-[#0b0703] hover:bg-zinc-100 rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-[#ffc75c]/30"
          >
            Analyze a game
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-14 text-base font-semibold border-white/30 text-white/80 hover:border-[#57f4ff] hover:text-[#57f4ff] bg-transparent"
          >
            Watch the dashboard
          </Button>
        </div>

        <p className="mt-8 text-sm text-[#9aa0c1]">
          Free forever for individuals. Clubs and teams start at $29/month with shared workspaces.
        </p>
      </motion.div>
    </section>
  )
}
