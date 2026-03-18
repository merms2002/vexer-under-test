"use client"

import { motion } from "framer-motion"
import { Upload, Zap, Users } from "lucide-react"

export function AnalyzeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="h-full rounded-3xl bg-gradient-to-br from-emerald-600/20 to-emerald-900/10 backdrop-blur-xl border border-emerald-500/20 p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative"
    >
      {/* Decorative mesh gradient */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl" />

      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Improve Your Game
        </h3>
        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
          Upload your PGN and get AI-powered analysis with precision insights.
        </p>

        {/* User avatars */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-900 flex items-center justify-center"
              >
                <Users className="w-4 h-4 text-zinc-400" />
              </div>
            ))}
          </div>
          <span className="text-xs text-zinc-500">+2.4k analyzing today</span>
        </div>
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(16,185,129,0.4)" }}
        whileTap={{ scale: 0.98 }}
        className="relative z-10 mt-6 w-full py-3.5 rounded-xl bg-emerald-500 text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-all group"
      >
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <Upload className="w-4 h-4" />
        </motion.span>
        Analyze PGN
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </motion.button>
    </motion.div>
  )
}
