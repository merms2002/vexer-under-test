"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Folder, FolderOpen, ChevronRight, Clock, Target, Trophy, X, Minus } from "lucide-react"

interface Game {
  id: number
  opponent: string
  result: "Win" | "Loss" | "Draw"
  accuracy: string
  date: string
  ratingChange: string
  opening: string
  moves: number
}

interface GameFolder {
  id: string
  title: string
  count: number
  games: Game[]
}

const gameFolders: GameFolder[] = [
  {
    id: "today",
    title: "Today",
    count: 2,
    games: [
      { id: 1, opponent: "GrandMaster_X", result: "Win", accuracy: "94.2%", date: "2:30 PM", ratingChange: "+12", opening: "Sicilian Defense", moves: 42 },
      { id: 2, opponent: "ChessNinja99", result: "Loss", accuracy: "78.1%", date: "11:15 AM", ratingChange: "-8", opening: "Caro-Kann", moves: 38 },
    ]
  },
  {
    id: "yesterday",
    title: "Yesterday",
    count: 3,
    games: [
      { id: 3, opponent: "SilentKnight", result: "Draw", accuracy: "86.4%", date: "8:45 PM", ratingChange: "+1", opening: "Italian Game", moves: 56 },
      { id: 4, opponent: "Pawn_Storm_42", result: "Win", accuracy: "91.7%", date: "6:20 PM", ratingChange: "+15", opening: "Queen's Gambit", moves: 31 },
      { id: 5, opponent: "RookieMove", result: "Win", accuracy: "88.3%", date: "2:10 PM", ratingChange: "+9", opening: "French Defense", moves: 45 },
    ]
  },
  {
    id: "this-week",
    title: "This Week",
    count: 8,
    games: [
      { id: 6, opponent: "DarkBishop", result: "Win", accuracy: "92.1%", date: "Mon", ratingChange: "+11", opening: "Sicilian Najdorf", moves: 48 },
      { id: 7, opponent: "KnightRider", result: "Loss", accuracy: "74.5%", date: "Mon", ratingChange: "-13", opening: "King's Indian", moves: 35 },
      { id: 8, opponent: "QueenSlayer", result: "Win", accuracy: "89.8%", date: "Sun", ratingChange: "+14", opening: "Ruy Lopez", moves: 52 },
    ]
  },
]

const ResultIcon = ({ result }: { result: string }) => {
  if (result === "Win") return <Trophy className="w-3.5 h-3.5 text-white" />
  if (result === "Loss") return <X className="w-3.5 h-3.5 text-white/40" />
  return <Minus className="w-3.5 h-3.5 text-white/60" />
}

export function RecentClashes() {
  const [expandedFolder, setExpandedFolder] = useState<string | null>("today")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="rounded-3xl bg-white/[0.02] border border-white/5 p-4 sm:p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <h3 className="text-white font-semibold text-base sm:text-lg">Recent Matches</h3>
          <span className="text-white/30 text-xs bg-white/5 px-2.5 py-1 rounded-full">
            {gameFolders.reduce((acc, f) => acc + f.count, 0)} games
          </span>
        </div>
        <button className="flex items-center gap-1 text-white/50 text-xs hover:text-white/70 transition-colors self-end sm:self-auto">
          View Archive
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Folder Structure */}
      <div className="space-y-2">
        {gameFolders.map((folder, folderIndex) => {
          const isExpanded = expandedFolder === folder.id

          return (
            <motion.div
              key={folder.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: folderIndex * 0.1 }}
              className="rounded-2xl overflow-hidden"
            >
              {/* Folder Header */}
              <motion.button
                onClick={() => setExpandedFolder(isExpanded ? null : folder.id)}
                className={`w-full flex items-center gap-3 p-3 sm:p-4 rounded-xl transition-all ${
                  isExpanded 
                    ? "bg-white text-black" 
                    : "bg-white/[0.03] hover:bg-white/[0.05] text-white"
                }`}
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                {/* 3D Folder Icon */}
                <div className="relative">
                  <motion.div
                    animate={{ rotateY: isExpanded ? 15 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={isExpanded ? "text-black" : "text-white/60"}
                  >
                    {isExpanded ? (
                      <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <Folder className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </motion.div>
                  {/* Shadow layer for 3D effect */}
                  {!isExpanded && (
                    <div className="absolute -top-0.5 left-0.5 w-5 h-5 sm:w-6 sm:h-6 bg-white/10 rounded -z-10" />
                  )}
                </div>

                {/* Folder Title */}
                <div className="flex-1 text-left">
                  <p className={`text-sm sm:text-base font-medium ${isExpanded ? "text-black" : "text-white/90"}`}>
                    {folder.title}
                  </p>
                </div>

                {/* Count Badge */}
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  isExpanded 
                    ? "bg-black/10 text-black/70" 
                    : "bg-white/5 text-white/40"
                }`}>
                  {folder.count} games
                </span>

                {/* Expand Arrow */}
                <motion.div
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    isExpanded ? "text-black/60" : "text-white/30"
                  }`} />
                </motion.div>
              </motion.button>

              {/* Games List */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 pb-1 space-y-1">
                      {folder.games.map((game, gameIndex) => (
                        <motion.div
                          key={game.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: gameIndex * 0.05 }}
                          whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.03)" }}
                          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl cursor-pointer transition-all ml-2 sm:ml-4 border-l border-white/10"
                        >
                          {/* Result Icon */}
                          <div className={`p-2 rounded-lg flex-shrink-0 w-fit ${
                            game.result === "Win" 
                              ? "bg-white/10" 
                              : game.result === "Loss"
                              ? "bg-white/[0.03]"
                              : "bg-white/[0.05]"
                          }`}>
                            <ResultIcon result={game.result} />
                          </div>

                          {/* Game Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-white font-medium text-sm truncate">{game.opponent}</span>
                              <span className={`px-1.5 py-0.5 rounded text-xs ${
                                game.result === "Win" 
                                  ? "bg-white/10 text-white" 
                                  : game.result === "Loss"
                                  ? "bg-white/[0.03] text-white/40"
                                  : "bg-white/[0.05] text-white/50"
                              }`}>
                                {game.result}
                              </span>
                            </div>
                            <p className="text-white/40 text-xs mt-0.5">{game.opening}</p>
                          </div>

                          {/* Stats */}
                          <div className="flex items-center gap-4 sm:gap-6 text-xs flex-wrap">
                            <div className="flex items-center gap-1.5">
                              <Target className="w-3 h-3 text-white/30" />
                              <span className="text-white/60 font-mono">{game.accuracy}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3 h-3 text-white/30" />
                              <span className="text-white/40">{game.date}</span>
                            </div>
                            <span className={`font-mono font-medium ${
                              game.ratingChange.startsWith("+") ? "text-white/80" : "text-white/40"
                            }`}>
                              {game.ratingChange}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
