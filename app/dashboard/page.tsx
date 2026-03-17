import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { FloatingNavbar } from "@/components/dashboard/floating-navbar"
import { VisionScoreCard } from "@/components/dashboard/vision-score-card"
import { StatCards } from "@/components/dashboard/stat-cards"
import { OpeningCards } from "@/components/dashboard/opening-cards"
import { MatchVolumeChart } from "@/components/dashboard/match-volume-chart"
import { OutcomeSplitChart } from "@/components/dashboard/outcome-split-chart"
import { NexusDirectives } from "@/components/dashboard/nexus-directives"
import { RecentClashes } from "@/components/dashboard/recent-clashes"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const displayName = user.user_metadata?.full_name || user.email?.split("@")[0] || "Commander"

  return (
    <div className="min-h-screen bg-[#000000] p-6">
      {/* Floating Navbar */}
      <div className="mb-8">
        <FloatingNavbar />
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">My Dashboard</h1>
        <p className="text-white/40 mt-1">Welcome back, {displayName}</p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-4">
        {/* Row 1 */}
        {/* Vision Score - Hero Card (spans 5 cols) */}
        <div className="col-span-12 lg:col-span-5 h-[220px]">
          <VisionScoreCard />
        </div>

        {/* Stat Cards - 2 stacked (spans 3 cols) */}
        <div className="col-span-6 lg:col-span-3 h-[220px]">
          <StatCards />
        </div>

        {/* Opening Cards - 3D Stack (spans 4 cols) */}
        <div className="col-span-6 lg:col-span-4 h-[220px]">
          <OpeningCards />
        </div>

        {/* Row 2 */}
        {/* Match Volume Bar Chart (spans 4 cols) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 h-[280px]">
          <MatchVolumeChart />
        </div>

        {/* Outcome Split Donut (spans 4 cols) */}
        <div className="col-span-6 md:col-span-3 lg:col-span-4 h-[280px]">
          <OutcomeSplitChart />
        </div>

        {/* Nexus Directives List (spans 4 cols) */}
        <div className="col-span-6 md:col-span-3 lg:col-span-4 h-[280px]">
          <NexusDirectives />
        </div>

        {/* Row 3 - Full Width */}
        {/* Recent Clashes Table */}
        <div className="col-span-12">
          <RecentClashes />
        </div>
      </div>
    </div>
  )
}
