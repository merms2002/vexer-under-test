import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { MicroSidebar } from "@/components/dashboard/micro-sidebar"
import { ArchiveMenu } from "@/components/dashboard/archive-menu"
import { ChessboardPlaceholder } from "@/components/dashboard/chessboard-placeholder"
import { EvalChart } from "@/components/dashboard/eval-chart"
import { Scorecard } from "@/components/dashboard/scorecard"
import { NexusTerminal } from "@/components/dashboard/nexus-terminal"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <>
      {/* LEFT COLUMN: Micro-Sidebar */}
      <div className="flex-shrink-0">
        <MicroSidebar />
      </div>

      {/* MIDDLE COLUMN: Archive Menu */}
      <div className="flex-shrink-0">
        <ArchiveMenu />
      </div>

      {/* RIGHT COLUMN: Main Stage */}
      <div className="flex-1 min-w-0 flex flex-col gap-4">
        {/* Top Header */}
        <div className="flex items-baseline justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">
              Player vs Magnus_Fan_2024
            </h1>
            <p className="font-mono text-white/40 text-sm mt-1">
              Rapid • Oct 24, 2024 • ELO: 1850
            </p>
          </div>
          <div className="text-right">
            <p className="text-white/40 text-sm">Result</p>
            <p className="text-white font-bold text-lg">1 - 0</p>
          </div>
        </div>

        {/* Analysis Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
          {/* Board Area (Left) */}
          <div className="flex items-center justify-center">
            <ChessboardPlaceholder />
          </div>

          {/* Data & AI Area (Right) */}
          <div className="flex flex-col gap-4 overflow-hidden">
            {/* Eval Chart */}
            <div className="bg-black border border-white/10 rounded-xl p-4">
              <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-3">
                Evaluation Over Time
              </p>
              <EvalChart />
            </div>

            {/* Scorecard */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex-1">
              <Scorecard />
            </div>

            {/* Nexus AI Terminal */}
            <NexusTerminal />
          </div>
        </div>
      </div>
    </>
  )
}
