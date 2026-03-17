"use client"

import { Star, HelpCircle, AlertTriangle } from "lucide-react"

const moveStats = [
  { 
    label: "BEST MOVE", 
    symbol: "★", 
    count: 18, 
    style: "text-white font-bold",
    icon: Star 
  },
  { 
    label: "INACCURACY", 
    symbol: "?!", 
    count: 4, 
    style: "text-white/50",
    icon: HelpCircle 
  },
  { 
    label: "BLUNDER", 
    symbol: "??", 
    count: 1, 
    style: "text-zinc-700 line-through",
    icon: AlertTriangle 
  },
]

export function Scorecard() {
  return (
    <div className="space-y-4">
      {/* Move quality stats */}
      <div className="space-y-2">
        {moveStats.map((stat) => (
          <div 
            key={stat.label}
            className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
          >
            <div className="flex items-center gap-3">
              <stat.icon className={`w-4 h-4 ${stat.style}`} />
              <span className={`text-sm font-mono ${stat.style}`}>
                {stat.label} [{stat.symbol}]
              </span>
            </div>
            <span className={`text-lg font-mono ${stat.style}`}>
              {stat.count}
            </span>
          </div>
        ))}
      </div>

      {/* Accuracy score */}
      <div className="pt-4 border-t border-white/10">
        <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">
          Game Accuracy
        </p>
        <p className="text-6xl font-bold text-white tracking-tighter">
          86.4<span className="text-2xl text-white/50">%</span>
        </p>
      </div>
    </div>
  )
}
