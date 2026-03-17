"use client"

import { motion } from "framer-motion"
import { TrendingUp, Zap } from "lucide-react"

export function VisionScoreCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-full rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-4 sm:p-6 overflow-hidden"
    >
      {/* Subtle gradient orb */}
      <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-white/[0.03] rounded-full blur-3xl" />
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <p className="text-white/50 text-xs sm:text-sm font-medium tracking-wide uppercase">Vision Score</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">1,850</span>
            <span className="text-white/40 text-lg sm:text-xl lg:text-2xl">ELO</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-white/60" />
            <span className="text-white/60 text-xs sm:text-sm">+42 this month</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
          {/* Animated Analyze Button */}
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-1.5 sm:gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold overflow-hidden"
          >
            {/* Base background */}
            <div className="absolute inset-0 bg-white rounded-full" />
            
            {/* Animated shimmer sweep */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-black/10 to-transparent" />
            </div>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_40px_rgba(255,255,255,0.3)]" />
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-black">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.span>
              Analyze
            </span>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.98 }}
            className="px-4 sm:px-5 py-2.5 sm:py-3 bg-white/[0.05] border border-white/10 text-white/80 rounded-full text-xs sm:text-sm font-medium transition-colors"
          >
            History
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
