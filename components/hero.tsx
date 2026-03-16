"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const textRevealVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
}

const stats = [
  { label: "Moves analyzed", value: "3.2M+" },
  { label: "Avg. engine depth", value: "52 ply" },
  { label: "Strategy gains", value: "+18 Elo" },
]

const moves = [
  { label: "Move 24", notation: "Ng5", comment: "+1.24 ¤", trend: "up" },
  { label: "Move 27", notation: "h5", comment: "-0.38", trend: "down" },
  { label: "Move 31", notation: "Qd4", comment: "+2.01", trend: "up" },
]

const boardSquares = Array.from({ length: 64 }, (_, index) => ({
  highlight: [18, 19, 20, 26, 27].includes(index),
  dark: ((Math.floor(index / 8) + (index % 8)) % 2) === 0,
}))

export function Hero() {
  return (
    <section
      id="analysis"
      className="relative min-h-screen flex items-center px-4 pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030310] via-[#030310]/80 to-[#05070f]" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[#5cf1ff]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#ffb548]/20 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center sm:text-left max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-[#57f4ff] pulse-glow" />
            <span className="text-sm text-[#d6dbf3]/80 tracking-wide">Live insights, synced to your PGN</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block overflow-hidden">
              <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={0}>
                Vexer reads the position,
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span className="block text-[#57f4ff]" variants={textRevealVariants} initial="hidden" animate="visible" custom={1}>
                then coaches you through it.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-[#c9d0ff]/80 mt-6 max-w-3xl"
          >
            Upload your PGNs, stream live games, or connect your favorite platform. Vexer pairs engine-grade depth with
            human language notes so you can understand every turning point and plan your follow-up training.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.45fr,1fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="shimmer-btn bg-white text-[#0b0703] hover:bg-zinc-100 rounded-full px-8 h-14 font-semibold shadow-xl shadow-[#ffc75c]/30">
                Analyze a Game
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-sm sm:text-base font-semibold border border-white/20 text-white/80 hover:border-[#57f4ff] hover:text-[#57f4ff]"
              >
                Preview the dashboard
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-[#9aa0c1] uppercase tracking-[0.2em]">{stat.label}</p>
                  <p className="text-2xl font-semibold text-white mt-2">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-[#05070f]/70 p-6 shadow-2xl shadow-[#57f4ff]/10 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between text-sm text-[#c9d0ff] mb-4 uppercase tracking-[0.3em]">
              <span>Evaluation</span>
              <span>Depth 56</span>
            </div>

            <div className="grid grid-cols-8 gap-[2px] rounded-[18px] overflow-hidden border border-white/5 mb-6">
              {boardSquares.map((square, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 ${square.dark ? "bg-zinc-900" : "bg-zinc-800"} ${
                    square.highlight ? "ring-1 ring-[#ffc068]/70 bg-[#ffc068]/50" : ""
                  }`}
                />
              ))}
            </div>

            <div className="space-y-3">
              {moves.map((move) => (
                <div key={move.label} className="flex items-center justify-between text-sm text-[#cce0ff]">
                  <div>
                    <p className="text-xs uppercase text-[#8a94b0]">{move.label}</p>
                    <p className="text-base font-semibold">{move.notation}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-semibold ${move.trend === "up" ? "text-emerald-300" : "text-[#ff6f67]"}`}>
                      {move.comment}
                    </p>
                    <p className="text-xs text-[#8a94b0]">{move.trend === "up" ? "Strong idea" : "Was risky"}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex flex-wrap items-center gap-6 text-sm text-[#c9d0ff]/70"
        >
          <span>Interface used by touring clubs, streamers, and GM coaches</span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#57f4ff]" />
            <span>Realtime accuracy checks</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}
