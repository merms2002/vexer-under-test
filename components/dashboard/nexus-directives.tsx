"use client"

import { motion } from "framer-motion"
import { Brain, Target, BookOpen, Zap, ChevronRight } from "lucide-react"

const directives = [
  {
    id: 1,
    icon: Brain,
    title: "Review Game #402",
    subtitle: "vs. Magnus_Fan_2024",
    priority: "high",
  },
  {
    id: 2,
    icon: Target,
    title: "Practice Endgames",
    subtitle: "Rook + Pawn patterns",
    priority: "medium",
  },
  {
    id: 3,
    icon: BookOpen,
    title: "Study Opening Trap",
    subtitle: "Sicilian Dragon variation",
    priority: "medium",
  },
  {
    id: 4,
    icon: Zap,
    title: "Tactics Training",
    subtitle: "15 puzzles remaining",
    priority: "low",
  },
]

export function NexusDirectives() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="rounded-3xl bg-white/[0.02] border border-white/5 p-5 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold">Nexus Directives</h3>
          <span className="text-white/40 text-xs">{directives.length}</span>
        </div>
        <button className="text-white/50 text-xs hover:text-white/70 transition-colors">
          Manage
        </button>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto">
        {directives.map((directive) => (
          <motion.div
            key={directive.id}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group"
          >
            <div className="p-2 rounded-lg bg-white/[0.05]">
              <directive.icon className="w-4 h-4 text-white/60" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/90 text-sm font-medium truncate">{directive.title}</p>
              <p className="text-white/40 text-xs truncate">{directive.subtitle}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
