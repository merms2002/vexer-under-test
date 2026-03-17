"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface Game {
  id: string
  opponent: string
  opponentRating: number
  result: "win" | "loss" | "draw"
  opening: string
  date: string
  timeControl: string
}

const recentGames: Game[] = [
  {
    id: "1",
    opponent: "Magnus_Fan_92",
    opponentRating: 1720,
    result: "win",
    opening: "Sicilian Defense",
    date: "Today",
    timeControl: "10+0"
  },
  {
    id: "2",
    opponent: "ChessMaster_Pro",
    opponentRating: 1695,
    result: "loss",
    opening: "Queen's Gambit",
    date: "Today",
    timeControl: "5+3"
  },
  {
    id: "3",
    opponent: "BlitzKing99",
    opponentRating: 1650,
    result: "win",
    opening: "Italian Game",
    date: "Yesterday",
    timeControl: "3+0"
  },
  {
    id: "4",
    opponent: "PositionalPro",
    opponentRating: 1710,
    result: "draw",
    opening: "Ruy Lopez",
    date: "Yesterday",
    timeControl: "15+10"
  },
  {
    id: "5",
    opponent: "TacticsWizard",
    opponentRating: 1680,
    result: "win",
    opening: "King's Indian",
    date: "2 days ago",
    timeControl: "10+0"
  },
  {
    id: "6",
    opponent: "EndgameExpert",
    opponentRating: 1740,
    result: "loss",
    opening: "French Defense",
    date: "2 days ago",
    timeControl: "5+3"
  },
]

export function RecentGames() {
  return (
    <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-xl h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-semibold">Recent Games</h3>
        <p className="text-white/40 text-sm">Your latest matches</p>
      </div>

      {/* Games list */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-3">
          {recentGames.map((game) => (
            <div
              key={game.id}
              className="bg-white/[0.02] border border-white/5 rounded-lg p-3 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium text-sm">{game.opponent}</span>
                  <span className="text-white/30 text-xs">({game.opponentRating})</span>
                </div>
                <span className={cn(
                  "text-xs font-semibold px-2 py-0.5 rounded",
                  game.result === "win" && "bg-emerald-500/10 text-emerald-400",
                  game.result === "loss" && "bg-red-500/10 text-red-400",
                  game.result === "draw" && "bg-white/10 text-white/50"
                )}>
                  {game.result === "win" && "W"}
                  {game.result === "loss" && "L"}
                  {game.result === "draw" && "D"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40 text-xs">{game.opening}</span>
                <span className="text-white/30 text-xs">{game.timeControl}</span>
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                <span className="text-white/30 text-xs">{game.date}</span>
                <button className="text-[#FF4500] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Analyze
                </button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
