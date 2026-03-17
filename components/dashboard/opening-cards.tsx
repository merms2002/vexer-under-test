"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus } from "lucide-react"

const openings = [
  { id: 1, name: "Sicilian Defense", code: "B20-B99", winRate: "68%", games: 142 },
  { id: 2, name: "Caro-Kann", code: "B10-B19", winRate: "72%", games: 89 },
  { id: 3, name: "Italian Game", code: "C50-C59", winRate: "61%", games: 67 },
]

export function OpeningCards() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-3xl bg-white/[0.02] border border-white/5 p-5 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold">Top Openings</h3>
          <span className="text-white/40 text-xs">{openings.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/60 text-xs hover:bg-white/[0.08] transition-colors">
            Add
          </button>
          <button className="p-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/60 hover:bg-white/[0.08] transition-colors">
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Stacked Cards with 3D effect */}
      <div
        className="relative flex-1 min-h-[180px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {openings.map((opening, index) => (
          <motion.div
            key={opening.id}
            className="absolute inset-x-0 rounded-2xl p-4 cursor-pointer"
            style={{
              background: index === 0 
                ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
                : index === 1
                ? "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)"
                : "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            initial={false}
            animate={{
              y: isHovered ? index * 70 : index * 20,
              scale: isHovered ? 1 : 1 - index * 0.05,
              zIndex: openings.length - index,
              rotateX: isHovered ? 0 : index * 2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/40 text-xs font-mono">{opening.code}</p>
                <h4 className="text-white font-semibold mt-1">{opening.name}</h4>
              </div>
              <div className="text-right">
                <p className="text-white text-lg font-bold">{opening.winRate}</p>
                <p className="text-white/40 text-xs">{opening.games} games</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
