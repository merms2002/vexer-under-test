import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { EngineFeed } from "@/components/dashboard/engine-feed"
import { AnalyzeCard } from "@/components/dashboard/analyze-card"
import { QuickStats } from "@/components/dashboard/quick-stats"
import { GameHistoryChart } from "@/components/dashboard/game-history-chart"
import { OpeningCards } from "@/components/dashboard/opening-cards"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const displayName = user.user_metadata?.full_name || user.email?.split("@")[0] || "Commander"

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Header */}
      <header className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-zinc-500 text-sm">Welcome back,</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              {displayName}
            </h1>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder="Search games..."
              className="w-full px-4 py-2.5 pl-10 rounded-xl bg-zinc-900/60 backdrop-blur-xl border border-white/[0.08] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </header>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
        
        {/* Row 1 */}
        {/* Performance Chart - Large */}
        <div className="lg:col-span-8 min-h-[320px] sm:min-h-[360px]">
          <PerformanceChart />
        </div>

        {/* Engine Feed - Right Panel */}
        <div className="lg:col-span-4 min-h-[320px] sm:min-h-[360px]">
          <EngineFeed />
        </div>

        {/* Row 2 */}
        {/* Analyze Card - CTA */}
        <div className="sm:col-span-1 lg:col-span-3 min-h-[260px]">
          <AnalyzeCard />
        </div>

        {/* Quick Stats Grid */}
        <div className="sm:col-span-1 lg:col-span-3 min-h-[260px]">
          <QuickStats />
        </div>

        {/* Game History Chart */}
        <div className="lg:col-span-3 min-h-[260px]">
          <GameHistoryChart />
        </div>

        {/* Opening Repertoire */}
        <div className="lg:col-span-3 min-h-[260px]">
          <OpeningCards />
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-8" />
    </div>
  )
}
