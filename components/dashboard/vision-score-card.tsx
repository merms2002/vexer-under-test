"use client"

import { motion } from "framer-motion"
import { TrendingUp, Zap } from "lucide-react"

export function VisionScoreCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-full rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-6 overflow-hidden"
    >
      {/* Subtle gradient orb */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl" />
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <p className="text-white/50 text-sm font-medium tracking-wide uppercase">Vision Score</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-6xl font-bold text-white tracking-tight">1,850</span>
            <span className="text-white/40 text-2xl">ELO</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-white/60" />
            <span className="text-white/60 text-sm">+42 this month</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
            <Zap className="w-4 h-4" />
            Analyze
          </button>
          <button className="px-5 py-2.5 bg-white/[0.05] border border-white/10 text-white/80 rounded-full text-sm font-medium hover:bg-white/[0.08] transition-colors">
            History
          </button>
        </div>
      </div>
    </motion.div>
  )
}
