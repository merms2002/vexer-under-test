"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  change: string
  isPositive: boolean
  icon: React.ReactNode
  delay?: number
}

function StatCard({ title, value, change, isPositive, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl bg-white/[0.02] border border-white/5 p-5 h-full"
    >
      <div className="flex items-center justify-between">
        <p className="text-white/50 text-sm font-medium">{title}</p>
        <div className="p-2 rounded-lg bg-white/[0.05]">
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <span className="text-3xl font-bold text-white">{value}</span>
      </div>
      <div className="mt-2 flex items-center gap-1">
        <span className={`text-sm ${isPositive ? "text-white/70" : "text-white/40"}`}>
          {change}
        </span>
        <span className="text-white/30 text-xs">vs last week</span>
      </div>
    </motion.div>
  )
}

export function StatCards() {
  return (
    <div className="grid grid-rows-2 gap-4 h-full">
      <StatCard
        title="Crush Rate"
        value="+65%"
        change="+12%"
        isPositive={true}
        icon={<TrendingUp className="w-4 h-4 text-white/60" />}
        delay={0.1}
      />
      <StatCard
        title="Avg Accuracy"
        value="82.4%"
        change="+3.2%"
        isPositive={true}
        icon={<Target className="w-4 h-4 text-white/60" />}
        delay={0.2}
      />
    </div>
  )
}
