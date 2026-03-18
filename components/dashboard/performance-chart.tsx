"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { useState } from "react"

const chartData = [
  { month: "Sep", rating: 1650 },
  { month: "Oct", rating: 1720 },
  { month: "Nov", rating: 1680 },
  { month: "Dec", rating: 1750 },
  { month: "Jan", rating: 1820 },
  { month: "Feb", rating: 1850 },
]

const timeRanges = ["1 year", "6 month", "3 month", "1 month"]

export function PerformanceChart() {
  const [activeRange, setActiveRange] = useState("6 month")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/[0.08] p-5 sm:p-6 flex flex-col"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <p className="text-zinc-500 text-sm font-medium tracking-wide">Performance Rating</p>
          <div className="flex items-baseline gap-3 mt-1">
            <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">1,850</span>
            <div className="flex items-center gap-1 text-emerald-400">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+5.2%</span>
            </div>
          </div>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-800/50">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeRange === range
                  ? "bg-zinc-700 text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#71717a', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#71717a', fontSize: 12 }}
              domain={['dataMin - 50', 'dataMax + 50']}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#18181b',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
              labelStyle={{ color: '#a1a1aa', fontSize: 12 }}
              itemStyle={{ color: '#10b981', fontWeight: 600 }}
              formatter={(value: number) => [`${value} ELO`, 'Rating']}
            />
            <Area
              type="monotone"
              dataKey="rating"
              stroke="#10b981"
              strokeWidth={3}
              fill="url(#emeraldGradient)"
              dot={false}
              activeDot={{ 
                r: 6, 
                fill: '#10b981', 
                stroke: '#050505', 
                strokeWidth: 2,
                filter: 'drop-shadow(0 0 8px rgba(16,185,129,0.6))'
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Stats */}
      <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/[0.05]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs text-zinc-500">Actual rating</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-zinc-600" />
          <span className="text-xs text-zinc-500">Expected trend</span>
        </div>
      </div>
    </motion.div>
  )
}
