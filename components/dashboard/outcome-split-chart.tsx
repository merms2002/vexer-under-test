"use client"

import { motion } from "framer-motion"
import { Cell, Pie, PieChart } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const data = [
  { name: "Wins", value: 65, color: "rgba(255,255,255,0.9)" },
  { name: "Draws", value: 20, color: "rgba(255,255,255,0.4)" },
  { name: "Losses", value: 15, color: "rgba(255,255,255,0.15)" },
]

const chartConfig = {
  wins: { label: "Wins", color: "rgba(255,255,255,0.9)" },
  draws: { label: "Draws", color: "rgba(255,255,255,0.4)" },
  losses: { label: "Losses", color: "rgba(255,255,255,0.15)" },
}

const totalGames = data.reduce((sum, d) => sum + d.value, 0)

export function OutcomeSplitChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="rounded-3xl bg-white/[0.02] border border-white/5 p-5 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-semibold">Outcome Split</h3>
        <button className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/60 text-xs">
          All
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <ChartContainer id="outcome-split-chart" config={chartConfig} className="w-[160px] h-[160px]">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white/40 text-xs">Total</span>
            <span className="text-white text-2xl font-bold">{totalGames}</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-2 mt-4 pt-4 border-t border-white/5">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              <span className="text-white/50 text-xs">{item.name}</span>
            </div>
            <span className="text-white/70 text-xs font-mono">{Math.round((item.value / totalGames) * 100)}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
