"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const recentGames = [
  {
    id: 1,
    opponent: "GrandMaster_X",
    result: "Win",
    accuracy: "94.2%",
    date: "Today, 2:30 PM",
    ratingChange: "+12",
  },
  {
    id: 2,
    opponent: "ChessNinja99",
    result: "Loss",
    accuracy: "78.1%",
    date: "Today, 11:15 AM",
    ratingChange: "-8",
  },
  {
    id: 3,
    opponent: "SilentKnight",
    result: "Draw",
    accuracy: "86.4%",
    date: "Yesterday",
    ratingChange: "+1",
  },
  {
    id: 4,
    opponent: "Pawn_Storm_42",
    result: "Win",
    accuracy: "91.7%",
    date: "Yesterday",
    ratingChange: "+15",
  },
]

export function RecentClashes() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="rounded-3xl bg-white/[0.02] border border-white/5 p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-white font-semibold">Recent Clashes</h3>
          <span className="text-white/30 text-xs">{recentGames.length}</span>
        </div>
        <button className="flex items-center gap-1 text-white/50 text-xs hover:text-white/70 transition-colors">
          See All
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-white/30 text-xs font-medium pb-3">Opponent</th>
              <th className="text-left text-white/30 text-xs font-medium pb-3">Result</th>
              <th className="text-left text-white/30 text-xs font-medium pb-3">Accuracy</th>
              <th className="text-left text-white/30 text-xs font-medium pb-3">Date</th>
              <th className="text-right text-white/30 text-xs font-medium pb-3">Rating</th>
            </tr>
          </thead>
          <tbody>
            {recentGames.map((game) => (
              <tr
                key={game.id}
                className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors cursor-pointer"
              >
                <td className="py-3">
                  <span className="text-white/80 text-sm">{game.opponent}</span>
                </td>
                <td className="py-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      game.result === "Win"
                        ? "bg-white/10 text-white"
                        : game.result === "Loss"
                        ? "bg-white/[0.03] text-white/40"
                        : "bg-white/[0.05] text-white/60"
                    }`}
                  >
                    {game.result}
                  </span>
                </td>
                <td className="py-3">
                  <span className="text-white/60 text-sm font-mono">{game.accuracy}</span>
                </td>
                <td className="py-3">
                  <span className="text-white/40 text-sm">{game.date}</span>
                </td>
                <td className="py-3 text-right">
                  <span
                    className={`text-sm font-mono ${
                      game.ratingChange.startsWith("+") ? "text-white/70" : "text-white/40"
                    }`}
                  >
                    {game.ratingChange}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
