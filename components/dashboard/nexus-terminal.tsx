"use client"

import { useEffect, useState } from "react"
import { Terminal } from "lucide-react"

const analysisLogs = [
  "> NEXUS_LOG: Initializing analysis...",
  "> NEXUS_LOG: Opening identified: Sicilian Defense, Najdorf Variation",
  "> NEXUS_LOG: Critical moment detected at move 24",
  "> NEXUS_LOG: Black lost advantage due to poor center control",
  "> NEXUS_LOG: Tactical vision required in middlegame positions",
  "> NEXUS_LOG: Recommendation: Study knight outpost patterns",
  "> NEXUS_LOG: Analysis complete. Overall: Strong opening, weak endgame technique",
]

export function NexusTerminal() {
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([])
  const [currentLogIndex, setCurrentLogIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (currentLogIndex >= analysisLogs.length) return

    const currentLog = analysisLogs[currentLogIndex]

    if (currentCharIndex < currentLog.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1)
      }, 15)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLogs(prev => [...prev, currentLog])
        setCurrentLogIndex(prev => prev + 1)
        setCurrentCharIndex(0)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [currentLogIndex, currentCharIndex])

  const currentTypingLog = currentLogIndex < analysisLogs.length 
    ? analysisLogs[currentLogIndex].slice(0, currentCharIndex) 
    : ""

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <Terminal className="w-4 h-4 text-white/40" />
        <span className="text-white/40 text-xs font-mono uppercase tracking-wider">
          Nexus AI Terminal
        </span>
      </div>

      <div className="font-mono text-sm text-white/70 space-y-1 h-32 overflow-y-auto">
        {displayedLogs.map((log, index) => (
          <p key={index} className="leading-relaxed">{log}</p>
        ))}
        {currentTypingLog && (
          <p className="leading-relaxed">
            {currentTypingLog}
            <span className="animate-pulse">█</span>
          </p>
        )}
      </div>
    </div>
  )
}
