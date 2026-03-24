"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const analysisMessages = [
  {
    id: 1,
    timestamp: "2024.03.18 // 14:32:07",
    systemId: "NEXUS_CORE_v2.0",
    message: "> ANALYSIS_COMPLETE: User meta is aggressive but lacks endgame precision. Recommendation: Initialize endgame drills.",
  },
  {
    id: 2,
    timestamp: "2024.03.18 // 14:32:15",
    systemId: "NEXUS_CORE_v2.0",
    message: "> PATTERN_DETECTED: Recurring weakness in isolated pawn structures. Suggest: Study Carlsen's technique in IQP positions.",
  },
  {
    id: 3,
    timestamp: "2024.03.18 // 14:32:28",
    systemId: "NEXUS_CORE_v2.0",
    message: "> TACTICAL_SCAN: Vision score indicates missed knight fork opportunities. Priority: Fork pattern recognition training.",
  },
  {
    id: 4,
    timestamp: "2024.03.18 // 14:32:41",
    systemId: "NEXUS_CORE_v2.0",
    message: "> STRATEGIC_NOTE: Opening repertoire solid. Middlegame transitions require refinement. Deploy positional puzzles.",
  },
]

export function NexusCoachTerminal() {
  const [currentMessage, setCurrentMessage] = useState(analysisMessages[0])
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isGlitching, setIsGlitching] = useState(false)
  const [statusText, setStatusText] = useState("CALIBRATING")

  // Typewriter effect
  useEffect(() => {
    if (!isTyping || isGlitching) return

    const message = currentMessage.message
    if (displayedText.length < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(message.slice(0, displayedText.length + 1))
      }, 18)
      return () => clearTimeout(timeout)
    } else {
      setStatusText("ACTIVE")
    }
  }, [displayedText, currentMessage.message, isTyping, isGlitching])

  const summonNexus = useCallback(() => {
    // Start glitch effect
    setIsGlitching(true)
    setStatusText("PROCESSING")

    // Glitch duration
    setTimeout(() => {
      // Pick a new random message
      const newMessage = analysisMessages[Math.floor(Math.random() * analysisMessages.length)]
      setCurrentMessage(newMessage)
      setDisplayedText("")
      setIsGlitching(false)
      setIsTyping(true)
      setStatusText("CALIBRATING")
    }, 800)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-white/[0.01] border border-white/[0.05] backdrop-blur-3xl rounded-3xl p-6 sm:p-8"
    >
      {/* Corner Markers - White squares */}
      <div className="absolute top-3 left-3 w-1 h-1 bg-white" />
      <div className="absolute top-3 right-3 w-1 h-1 bg-white" />
      <div className="absolute bottom-3 left-3 w-1 h-1 bg-white" />
      <div className="absolute bottom-3 right-3 w-1 h-1 bg-white" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
          NEXUS_SYSTEM // v2.0
        </span>
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
            STATUS: {statusText}
          </span>
        </div>
      </div>

      {/* Terminal Display */}
      <div className="relative bg-[#050505] p-4 sm:p-6 rounded-xl border border-white/[0.03] mb-6 min-h-[160px] overflow-hidden">
        {/* Glitch Overlay */}
        <AnimatePresence>
          {isGlitching && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10"
            >
              {/* Glitch lines */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{
                    x: ["−100%", "200%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.15,
                    delay: i * 0.08,
                    ease: "linear",
                  }}
                  className="absolute h-[2px] w-full bg-white/20"
                  style={{ top: `${20 + i * 15}%` }}
                />
              ))}
              {/* Scrambled text effect */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 0.1, repeat: 8 }}
                className="font-mono text-sm text-white/30 p-4 sm:p-6"
              >
                {"> ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓"}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Metadata */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[10px] text-white/20 tracking-wide">
            {currentMessage.timestamp}
          </span>
          <span className="font-mono text-[10px] text-white/20 tracking-wide">
            [{currentMessage.systemId}]
          </span>
        </div>

        {/* Terminal Text */}
        <div className={`font-mono text-sm sm:text-base leading-relaxed ${isGlitching ? "opacity-0" : "opacity-100"} transition-opacity`}>
          <span className="text-white">{displayedText}</span>
          {isTyping && displayedText.length < currentMessage.message.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-white"
            >
              █
            </motion.span>
          )}
        </div>
      </div>

      {/* Action Button */}
      <motion.button
        onClick={summonNexus}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isGlitching}
        className="w-full py-4 bg-white text-black font-semibold text-sm tracking-wide uppercase rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        SUMMON NEXUS
      </motion.button>
    </motion.div>
  )
}
