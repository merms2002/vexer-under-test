import { LucideIcon } from "lucide-react"

interface InfoCardProps {
  title: string
  icon?: LucideIcon
  children: React.ReactNode
}

export function InfoCard({ title, icon: Icon, children }: InfoCardProps) {
  return (
    <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        {Icon && <Icon className="w-4 h-4 text-[#FF4500]" />}
        <h3 className="text-white font-semibold text-sm">{title}</h3>
      </div>
      {children}
    </div>
  )
}

interface OpeningStatProps {
  name: string
  games: number
  winRate: number
}

export function OpeningStat({ name, games, winRate }: OpeningStatProps) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <div>
        <p className="text-white/80 text-sm">{name}</p>
        <p className="text-white/30 text-xs">{games} games</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#FF4500] rounded-full"
            style={{ width: `${winRate}%` }}
          />
        </div>
        <span className="text-white/50 text-xs w-8 text-right">{winRate}%</span>
      </div>
    </div>
  )
}

interface TimeControlStatProps {
  name: string
  rating: number
  games: number
}

export function TimeControlStat({ name, rating, games }: TimeControlStatProps) {
  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3 hover:border-white/10 transition-all">
      <p className="text-white/50 text-xs mb-1">{name}</p>
      <p className="text-white font-bold text-lg">{rating}</p>
      <p className="text-white/30 text-xs">{games} games</p>
    </div>
  )
}
