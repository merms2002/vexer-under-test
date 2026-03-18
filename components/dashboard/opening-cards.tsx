"use client"

import { motion } from "framer-motion"
import { Folder, ChevronRight, Plus } from "lucide-react"

interface Opening {
  id: number
  name: string
  winRate: string
}

const openings: Opening[] = [
  { id: 1, name: "Sicilian Defense", winRate: "68%" },
  { id: 2, name: "Caro-Kann", winRate: "72%" },
  { id: 3, name: "Italian Game", winRate: "61%" },
  { id: 4, name: "French Defense", winRate: "58%" },
]

export function OpeningCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/[0.08] p-4 sm:p-6 h-full flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-white font-semibold text-sm sm:text-base">Opening Repertoire</h3>
        <button className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Opening List */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {openings.map((opening, index) => (
          <motion.button
            key={opening.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="w-full flex items-center gap-3 p-3 sm:p-4 rounded-lg hover:bg-white/[0.05] transition-all group"
          >
            {/* Folder Icon */}
            <Folder className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400/60 group-hover:text-emerald-400 flex-shrink-0 transition-colors" />

            {/* Opening Name */}
            <span className="flex-1 text-left text-sm sm:text-base text-white/90 group-hover:text-white transition-colors font-medium">
              {opening.name}
            </span>

            {/* Win Rate */}
            <span className="text-xs sm:text-sm text-emerald-400/60 font-mono flex-shrink-0">
              {opening.winRate}
            </span>

            {/* Arrow */}
            <ChevronRight className="w-4 h-4 text-white/20 flex-shrink-0 transition-colors group-hover:text-white/40" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
