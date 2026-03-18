"use client"

import { motion } from "framer-motion"
import { Trophy, Target, Flame, Clock } from "lucide-react"

const stats = [
  { 
    label: "Win Rate", 
    value: "67%", 
    change: "+5%", 
    positive: true, 
    icon: Trophy,
    description: "Last 30 days"
  },
  { 
    label: "Accuracy", 
    value: "84.2%", 
    change: "+2.1%", 
    positive: true, 
    icon: Target,
    description: "Average"
  },
  { 
    label: "Win Streak", 
    value: "8", 
    change: "Best: 12", 
    positive: true, 
    icon: Flame,
    description: "Current"
  },
  { 
    label: "Time Played", 
    value: "24h", 
    change: "This week", 
    positive: true, 
    icon: Clock,
    description: "Total"
  },
]

export function QuickStats() {
  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl bg-zinc-900/40 backdrop-blur-xl border border-white/[0.08] p-4 flex flex-col justify-between hover:bg-zinc-900/60 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                <Icon className="w-4 h-4 text-emerald-400" />
              </div>
              <span className={`text-xs font-medium ${
                stat.positive ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{stat.label}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
