import { LucideIcon, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: LucideIcon
  trend?: "up" | "down" | "neutral"
  trendValue?: string
}

export function StatCard({ title, value, subtitle, icon: Icon, trend, trendValue }: StatCardProps) {
  return (
    <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-xl p-5 relative group hover:border-white/20 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-white/50 text-sm font-medium">{title}</p>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
            {subtitle && (
              <p className="text-white/30 text-xs">{subtitle}</p>
            )}
          </div>
          {trend && trendValue && (
            <div className={cn(
              "inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
              trend === "up" && "bg-emerald-500/10 text-emerald-400",
              trend === "down" && "bg-red-500/10 text-red-400",
              trend === "neutral" && "bg-white/10 text-white/50"
            )}>
              {trend === "up" && <ArrowUpRight className="w-3 h-3" />}
              {trendValue}
            </div>
          )}
        </div>
        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#FF4500]/10 transition-colors">
          <Icon className="w-5 h-5 text-white/50 group-hover:text-[#FF4500] transition-colors" />
        </div>
      </div>
    </div>
  )
}
