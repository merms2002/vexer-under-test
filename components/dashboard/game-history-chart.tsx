"use client"

import { motion } from "framer-motion"
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"

const chartData = [
  { month: "Sep", wins: 24, losses: 12 },
  { month: "Oct", wins: 31, losses: 15 },
  { month: "Nov", wins: 28, losses: 18 },
  { month: "Dec", wins: 35, losses: 10 },
  { month: "Jan", wins: 42, losses: 14 },
  { month: "Feb", wins: 38, losses: 8 },
]

export function GameHistoryChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="h-full rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/[0.08] p-5 sm:p-6 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold tracking-tight">Games Played</h3>
          <p className="text-zinc-500 text-xs mt-0.5">Win/Loss distribution</p>
        </div>
        <select className="bg-zinc-800/50 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-500/50">
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#71717a', fontSize: 11 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#71717a', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#18181b',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
              labelStyle={{ color: '#a1a1aa', fontSize: 12 }}
            />
            <Bar dataKey="wins" radius={[4, 4, 0, 0]} maxBarSize={40}>
              {chartData.map((entry, index) => (
                <Cell key={`wins-${index}`} fill="#10b981" fillOpacity={0.8} />
              ))}
            </Bar>
            <Bar dataKey="losses" radius={[4, 4, 0, 0]} maxBarSize={40}>
              {chartData.map((entry, index) => (
                <Cell key={`losses-${index}`} fill="#52525b" fillOpacity={0.6} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/[0.05]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-emerald-500" />
          <span className="text-xs text-zinc-500">Wins</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-zinc-600" />
          <span className="text-xs text-zinc-500">Losses</span>
        </div>
      </div>
    </motion.div>
  )
}
