"use client"

import { Area, AreaChart, YAxis } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const evalData = [
  { move: 1, eval: 0.2 },
  { move: 5, eval: 0.5 },
  { move: 10, eval: 1.2 },
  { move: 15, eval: 0.8 },
  { move: 20, eval: 2.1 },
  { move: 24, eval: 0.4 },
  { move: 28, eval: -0.3 },
  { move: 32, eval: 0.1 },
  { move: 36, eval: 1.5 },
  { move: 40, eval: 3.2 },
]

const chartConfig = {
  eval: {
    label: "Evaluation",
    color: "#ffffff",
  },
} satisfies ChartConfig

export function EvalChart() {
  return (
    <div className="h-32 w-full">
      <ChartContainer id="eval-chart" config={chartConfig} className="h-full w-full">
        <AreaChart data={evalData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="evalGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis hide domain={[-5, 5]} />
          <Area
            type="monotone"
            dataKey="eval"
            stroke="#ffffff"
            strokeWidth={2}
            fill="url(#evalGradient)"
            dot={false}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}
