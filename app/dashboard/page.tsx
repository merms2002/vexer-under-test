import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Gamepad2, Target, TrendingUp, BookOpen, Clock } from "lucide-react"
import { StatCard } from "@/components/dashboard/stat-card"
import { RatingChart } from "@/components/dashboard/rating-chart"
import { RecentGames } from "@/components/dashboard/recent-games"
import { InfoCard, OpeningStat, TimeControlStat } from "@/components/dashboard/info-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search } from "lucide-react"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const userName = user.email?.split("@")[0] || "Player"

  return (
    <div className="h-screen flex">
      {/* Main content area */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Top header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Hello, <span className="text-[#FF4500]">{userName}</span>
            </h1>
            <p className="text-white/40 text-sm">Check & maintain your chess stats</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
              <Search className="w-5 h-5 text-white/50" />
            </button>
            <button className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors relative">
              <Bell className="w-5 h-5 text-white/50" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#FF4500] rounded-full" />
            </button>
            <Avatar className="w-10 h-10 border-2 border-white/10">
              <AvatarImage src="" />
              <AvatarFallback className="bg-white/5 text-white text-sm">
                {userName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <StatCard
            title="Games Played"
            value="247"
            subtitle="This month"
            icon={Gamepad2}
            trend="up"
            trendValue="+12%"
          />
          <StatCard
            title="Win Rate"
            value="64.8%"
            subtitle="Last 100 games"
            icon={Target}
            trend="up"
            trendValue="+3.2%"
          />
          <StatCard
            title="Current Rating"
            value="1,685"
            subtitle="Peak: 1,720"
            icon={TrendingUp}
            trend="up"
            trendValue="+35"
          />
        </div>

        {/* Rating chart */}
        <div className="mb-6">
          <RatingChart />
        </div>

        {/* Bottom info cards */}
        <div className="grid grid-cols-2 gap-4">
          <InfoCard title="Opening Repertoire" icon={BookOpen}>
            <div className="space-y-1">
              <OpeningStat name="Sicilian Defense" games={45} winRate={68} />
              <OpeningStat name="Queen's Gambit" games={38} winRate={61} />
              <OpeningStat name="Italian Game" games={32} winRate={72} />
              <OpeningStat name="King's Indian" games={28} winRate={54} />
            </div>
          </InfoCard>

          <InfoCard title="Time Controls" icon={Clock}>
            <div className="grid grid-cols-3 gap-3">
              <TimeControlStat name="Bullet" rating={1620} games={89} />
              <TimeControlStat name="Blitz" rating={1685} games={124} />
              <TimeControlStat name="Rapid" rating={1710} games={34} />
            </div>
          </InfoCard>
        </div>
      </div>

      {/* Right panel - Recent games */}
      <div className="w-80 border-l border-white/10 p-4">
        <RecentGames />
      </div>
    </div>
  )
}
