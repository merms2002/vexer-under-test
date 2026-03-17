"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", rating: 1450, games: 45 },
  { month: "Feb", rating: 1520, games: 62 },
  { month: "Mar", rating: 1480, games: 38 },
  { month: "Apr", rating: 1590, games: 71 },
  { month: "May", rating: 1620, games: 55 },
  { month: "Jun", rating: 1685, games: 48 },
]

const chartConfig = {
  rating: {
    label: "Rating",
    color: "#FF4500",
  },
  games: {
    label: "Games",
    color: "rgba(255, 255, 255, 0.3)",
  },
} satisfies ChartConfig

export function RatingChart() {
  return (
    <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-xl p-6 relative">
      {/* Brutalist corner markers */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#FF4500]" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF4500]" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#FF4500]" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#FF4500]" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-semibold">Rating Progress</h3>
          <p className="text-white/40 text-sm">Jan - Jun 2024</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF4500]" />
            <span className="text-white/50">Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white/30" />
            <span className="text-white/50">Games</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ChartContainer id="rating-chart" config={chartConfig} className="aspect-[2/1] w-full min-h-[200px]">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="ratingGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF4500" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#FF4500" stopOpacity={0} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(255,255,255,0.05)" 
              vertical={false}
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
              domain={['dataMin - 50', 'dataMax + 50']}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              cursor={{ stroke: 'rgba(255,255,255,0.1)' }}
            />
            <Area
              type="monotone"
              dataKey="games"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth={2}
              fill="rgba(255,255,255,0.05)"
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="rating"
              stroke="#FF4500"
              strokeWidth={2}
              fill="url(#ratingGradient)"
              filter="url(#glow)"
              dot={{ fill: '#FF4500', strokeWidth: 0, r: 4 }}
              activeDot={{ fill: '#FF4500', strokeWidth: 2, stroke: '#050505', r: 6 }}
            />
          </AreaChart>
      </ChartContainer>
    </div>
  )
}
