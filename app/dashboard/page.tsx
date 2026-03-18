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
import { NexusCoachTerminal } from "@/components/dashboard/nexus-coach-terminal"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const displayName = user.user_metadata?.full_name || user.email?.split("@")[0] || "Commander"

  return (
    <div className="min-h-screen bg-[#000000] px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Floating Navbar */}
      <div className="mb-6 sm:mb-8">
        <FloatingNavbar />
      </div>

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">My Dashboard</h1>
        <p className="text-white/40 mt-1 text-sm sm:text-base">Welcome back, {displayName}</p>
      </div>

      {/* Bento Grid Layout - Fully Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
        
        {/* Row 1 */}
        {/* Vision Score - Hero Card */}
        <div className="sm:col-span-2 lg:col-span-5 min-h-[200px] sm:min-h-[220px]">
          <VisionScoreCard />
        </div>

        {/* Stat Cards - 2 stacked */}
        <div className="sm:col-span-1 lg:col-span-3 min-h-[200px] sm:min-h-[220px]">
          <StatCards />
        </div>

        {/* Opening Cards - Folder Style */}
        <div className="sm:col-span-1 lg:col-span-4 min-h-[200px] sm:min-h-[220px]">
          <OpeningCards />
        </div>

        {/* Row 2 */}
        {/* Match Volume Bar Chart */}
        <div className="sm:col-span-1 lg:col-span-4 min-h-[260px] sm:min-h-[280px]">
          <MatchVolumeChart />
        </div>

        {/* Outcome Split Donut */}
        <div className="sm:col-span-1 lg:col-span-4 min-h-[260px] sm:min-h-[280px]">
          <OutcomeSplitChart />
        </div>

        {/* Row 3 - NEXUS AI Coach Terminal */}
        <div className="sm:col-span-2 lg:col-span-8">
          <NexusCoachTerminal />
        </div>

        {/* Nexus Directives - Sidebar */}
        <div className="sm:col-span-2 lg:col-span-4 min-h-[260px]">
          <NexusDirectives />
        </div>

        {/* Row 4 - Full Width */}
        {/* Recent Clashes - Folder Style */}
        <div className="sm:col-span-2 lg:col-span-12">
          <RecentClashes />
        </div>
      </div>

      {/* Bottom Spacing for scroll */}
      <div className="h-8 sm:h-12" />
    </div>
  )
}
