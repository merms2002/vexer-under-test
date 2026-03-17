"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Target, Zap } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  subtitle: string
  change: string
  trend: "up" | "down" | "neutral"
  icon: React.ReactNode
  delay?: number
}

function StatCard({ title, value, subtitle, change, trend, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="rounded-2xl bg-white/[0.02] border border-white/5 p-4 sm:p-5 h-full flex flex-col justify-between cursor-pointer hover:bg-white/[0.04] hover:border-white/10 transition-all"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-white/40 text-xs sm:text-sm font-medium truncate">{title}</p>
          <div className="mt-2 sm:mt-3">
            <span className="text-2xl sm:text-3xl font-bold text-white">{value}</span>
          </div>
          <p className="text-white/30 text-xs mt-1 truncate">{subtitle}</p>
        </div>
        <motion.div 
          className="p-2 sm:p-2.5 rounded-xl bg-white/[0.05] border border-white/5 flex-shrink-0"
          whileHover={{ rotate: 5 }}
        >
          {icon}
        </motion.div>
      </div>
      
      <div className="mt-3 sm:mt-4 flex items-center gap-2">
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
          trend === "up" 
            ? "bg-white/10 text-white" 
            : trend === "down"
            ? "bg-white/[0.03] text-white/40"
            : "bg-white/[0.05] text-white/50"
        }`}>
          {trend === "up" ? (
            <TrendingUp className="w-3 h-3" />
          ) : trend === "down" ? (
            <TrendingDown className="w-3 h-3" />
          ) : null}
          <span>{change}</span>
        </div>
        <span className="text-white/20 text-xs hidden sm:inline">vs last week</span>
      </div>
    </motion.div>
  )
}

export function StatCards() {
  return (
    <div className="grid grid-rows-2 gap-3 sm:gap-4 h-full">
      <StatCard
        title="Win Rate"
        value="65%"
        subtitle="142 of 218 games"
        change="+8%"
        trend="up"
        icon={<Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />}
        delay={0.1}
      />
      <StatCard
        title="Avg Accuracy"
        value="82.4%"
        subtitle="Last 30 games"
        change="+3.2%"
        trend="up"
        icon={<Target className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />}
        delay={0.2}
      />
    </div>
  )
}
