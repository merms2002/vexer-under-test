"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Folder, FolderOpen, ChevronRight, Plus } from "lucide-react"

interface Opening {
  id: number
  name: string
  code: string
  winRate: string
  games: number
  subItems?: { name: string; games: number }[]
}

const openings: Opening[] = [
  { 
    id: 1, 
    name: "Sicilian Defense", 
    code: "B20-B99", 
    winRate: "68%", 
    games: 142,
    subItems: [
      { name: "Najdorf Variation", games: 52 },
      { name: "Dragon Variation", games: 38 },
      { name: "Scheveningen", games: 28 },
    ]
  },
  { 
    id: 2, 
    name: "Caro-Kann", 
    code: "B10-B19", 
    winRate: "72%", 
    games: 89,
    subItems: [
      { name: "Advance Variation", games: 34 },
      { name: "Classical", games: 31 },
    ]
  },
  { 
    id: 3, 
    name: "Italian Game", 
    code: "C50-C59", 
    winRate: "61%", 
    games: 67,
    subItems: [
      { name: "Giuoco Piano", games: 41 },
      { name: "Evans Gambit", games: 26 },
    ]
  },
  { 
    id: 4, 
    name: "French Defense", 
    code: "C00-C19", 
    winRate: "58%", 
    games: 45 
  },
]

export function OpeningCards() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-3xl bg-white/[0.02] border border-white/5 p-4 sm:p-5 h-full flex flex-col overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-semibold text-sm sm:text-base">Opening Repertoire</h3>
          <span className="text-white/30 text-xs bg-white/5 px-2 py-0.5 rounded-full">{openings.length}</span>
        </div>
        <button className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-white/60 hover:bg-white/[0.08] hover:text-white transition-all">
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Folder List */}
      <div className="flex-1 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {openings.map((opening, index) => {
          const isExpanded = expandedId === opening.id
          const hasSubItems = opening.subItems && opening.subItems.length > 0

          return (
            <motion.div
              key={opening.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Main Folder */}
              <motion.button
                onClick={() => setExpandedId(isExpanded ? null : opening.id)}
                className={`w-full flex items-center gap-3 p-2.5 sm:p-3 rounded-xl transition-all group ${
                  isExpanded 
                    ? "bg-white text-black" 
                    : "hover:bg-white/[0.05] text-white"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Folder Icon with 3D effect */}
                <div className="relative flex-shrink-0">
                  <div className={`relative ${isExpanded ? "text-black" : "text-white/60 group-hover:text-white/80"}`}>
                    {isExpanded ? (
                      <FolderOpen className="w-5 h-5" />
                    ) : (
                      <Folder className="w-5 h-5" />
                    )}
                  </div>
                  {/* Folder back layer for 3D effect */}
                  {!isExpanded && (
                    <div className="absolute -top-0.5 left-0.5 w-5 h-5 bg-white/10 rounded opacity-50 -z-10" />
                  )}
                </div>

                {/* Folder Name */}
                <div className="flex-1 text-left min-w-0">
                  <p className={`text-sm font-medium truncate ${isExpanded ? "text-black" : "text-white/90"}`}>
                    {opening.name}
                  </p>
                </div>

                {/* Win Rate Badge */}
                <span className={`text-xs font-mono flex-shrink-0 ${
                  isExpanded ? "text-black/60" : "text-white/40"
                }`}>
                  {opening.winRate}
                </span>

                {/* Expand Arrow */}
                {hasSubItems && (
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 ${
                      isExpanded ? "text-black/60" : "text-white/30"
                    }`} />
                  </motion.div>
                )}
              </motion.button>

              {/* Sub-items */}
              <AnimatePresence>
                {isExpanded && hasSubItems && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pl-8 pr-2 py-1 space-y-0.5">
                      {opening.subItems?.map((sub, subIndex) => (
                        <motion.button
                          key={sub.name}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: subIndex * 0.05 }}
                          className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white/[0.05] transition-colors group/sub"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-white/30" />
                            <span className="text-xs text-white/60 group-hover/sub:text-white/80 transition-colors">
                              {sub.name}
                            </span>
                          </div>
                          <span className="text-xs text-white/30 font-mono">{sub.games}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
