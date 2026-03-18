"use client"

import { motion } from "framer-motion"
import { Zap, AlertTriangle, Target, TrendingUp, Clock } from "lucide-react"

interface EngineAlert {
  id: number
  type: "best" | "blunder" | "brilliant" | "inaccuracy"
  move: string
  evaluation: string
  timestamp: string
  game: string
}

const alerts: EngineAlert[] = [
  { id: 1, type: "brilliant", move: "Qxf7+!", evaluation: "+8.4", timestamp: "2 min ago", game: "vs Magnus_Fan" },
  { id: 2, type: "best", move: "Nf6+", evaluation: "+2.1", timestamp: "5 min ago", game: "vs ChessKing92" },
  { id: 3, type: "blunder", move: "Bxc6??", evaluation: "-3.2", timestamp: "12 min ago", game: "vs Tactical_Pro" },
  { id: 4, type: "best", move: "e4", evaluation: "+0.3", timestamp: "18 min ago", game: "vs OpeningMaster" },
  { id: 5, type: "inaccuracy", move: "h6?!", evaluation: "-0.8", timestamp: "25 min ago", game: "vs Endgame_Guru" },
]

const typeConfig = {
  brilliant: { 
    icon: Zap, 
    color: "text-emerald-400", 
    bg: "bg-emerald-500/10", 
    border: "border-emerald-500/20",
    glow: "drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
  },
  best: { 
    icon: Target, 
    color: "text-emerald-400", 
    bg: "bg-emerald-500/10", 
    border: "border-emerald-500/20",
    glow: ""
  },
  blunder: { 
    icon: AlertTriangle, 
    color: "text-red-400", 
    bg: "bg-red-500/10", 
    border: "border-red-500/20",
    glow: ""
  },
  inaccuracy: { 
    icon: TrendingUp, 
    color: "text-amber-400", 
    bg: "bg-amber-500/10", 
    border: "border-amber-500/20",
    glow: ""
  },
}

export function EngineFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-full rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/[0.08] p-5 sm:p-6 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-white font-semibold tracking-tight">Live Engine Feed</h3>
        <button className="text-emerald-400 text-xs font-medium hover:text-emerald-300 transition-colors">
          View All
        </button>
      </div>

      {/* Alerts List */}
      <div className="flex-1 space-y-3 overflow-y-auto">
        {alerts.map((alert, index) => {
          const config = typeConfig[alert.type]
          const Icon = config.icon

          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`
                group p-3 sm:p-4 rounded-2xl ${config.bg} border ${config.border}
                hover:bg-opacity-20 transition-all duration-300 cursor-pointer
              `}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className={`p-2 rounded-xl ${config.bg} ${config.glow}`}>
                  <Icon className={`w-4 h-4 ${config.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-white font-medium text-sm truncate">{alert.game}</p>
                    <span className={`text-sm font-mono font-bold ${
                      alert.evaluation.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {alert.evaluation}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-zinc-400 text-xs font-mono">{alert.move}</span>
                    <span className="text-zinc-600">•</span>
                    <div className="flex items-center gap-1 text-zinc-500 text-xs">
                      <Clock className="w-3 h-3" />
                      {alert.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
