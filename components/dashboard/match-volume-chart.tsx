"use client"

import { motion } from "framer-motion"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp } from "lucide-react"

const chartData = [
  { month: "Apr", games: 24, wins: 16 },
  { month: "May", games: 32, wins: 22 },
  { month: "Jun", games: 28, wins: 19 },
  { month: "Jul", games: 18, wins: 12 },
  { month: "Aug", games: 35, wins: 26 },
]

const chartConfig = {
  games: {
    label: "Games",
    color: "rgba(255,255,255,0.3)",
  },
  wins: {
    label: "Wins",
    color: "rgba(255,255,255,0.9)",
  },
}

export function MatchVolumeChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-3xl bg-white/[0.02] border border-white/5 p-4 sm:p-5 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div>
          <h3 className="text-white font-semibold text-sm sm:text-base">Match Volume</h3>
          <div className="flex items-center gap-2 mt-1">
            <TrendingUp className="w-3 h-3 text-white/50" />
            <span className="text-white/50 text-xs">+16%</span>
          </div>
        </div>
        <button className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/60 text-xs">
          Monthly
        </button>
      </div>

      <div className="flex-1 mt-2 min-h-0">
        <ChartContainer id="match-volume-chart" config={chartConfig} className="w-full h-full min-h-[120px] sm:min-h-[140px]">
          <BarChart data={chartData} barGap={2}>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }}
            />
            <YAxis hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="games" fill="rgba(255,255,255,0.15)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="wins" fill="rgba(255,255,255,0.8)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2 h-2 rounded-full bg-white/80" />
          <span className="text-white/50 text-xs">Wins</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-white/50 text-xs">Total</span>
        </div>
      </div>
    </motion.div>
  )
}
