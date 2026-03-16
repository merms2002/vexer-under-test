"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import type { LucideIcon } from "lucide-react"
import { Activity, Target, Sparkles, Layers, Waves, Shield } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function EnginePulse() {
  const [dots, setDots] = useState([true, true, true, true, false])

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => prev.map(() => Math.random() > 0.15))
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2">
      {dots.map((active, i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 rounded-full ${active ? "bg-[#57f4ff]" : "bg-zinc-800"}`}
          animate={active ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.15 }}
        />
      ))}
      <span className="text-xs text-[#9aa0c1] uppercase tracking-[0.3em]">Engine live</span>
    </div>
  )
}

function EvaluationChart() {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true })
  const points = [
    { x: 0, y: 40 },
    { x: 20, y: 35 },
    { x: 40, y: 45 },
    { x: 60, y: 28 },
    { x: 80, y: 38 },
    { x: 100, y: 20 },
  ]

  const pathD = points.reduce((acc, point, i) => (i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`), "")

  return (
    <svg ref={ref} viewBox="0 0 100 70" className="w-full h-24">
      <defs>
        <linearGradient id="evaluationGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe8c7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#030310" stopOpacity="0" />
        </linearGradient>
      </defs>
      {isInView && (
        <>
          <path d={`${pathD} L 100 70 L 0 70 Z`} fill="url(#evaluationGradient)" opacity="0.6" />
          <path d={pathD} fill="none" stroke="#57f4ff" strokeWidth="2" strokeLinecap="round" className="draw-line" />
        </>
      )}
    </svg>
  )
}

const featureCards: {
  title: string
  description: string
  icon: LucideIcon
  accent: string
  tags: string[]
}[] = [
  {
    title: "Opening Explorer",
    description:
      "Cross-reference every line with master games, live engine depth, and practical move orders before your next club match.",
    icon: Target,
    accent: "#57f4ff",
    tags: ["400k+ lines", "Live depth 50+"],
  },
  {
    title: "Tactical Clarity",
    description: "Spot motifs, map forks, and package the story for post-game study that sticks.",
    icon: Sparkles,
    accent: "#ff5f51",
    tags: ["Automatic motifs", "Narrative notes"],
  },
  {
    title: "Coach Workspace",
    description: "Share annotated games, template drills, and progress reports with your students in seconds.",
    icon: Layers,
    accent: "#f6b447",
    tags: ["Shared drills", "Progress tracking"],
  },
  {
    title: "Live Signals",
    description: "Stream overlays score each move in real-time so you never miss an opportunity during commentary.",
    icon: Waves,
    accent: "#c1a7ff",
    tags: ["Broadcast ready", "< 300ms latency"],
  },
  {
    title: "Secure Vaults",
    description: "PGN vaults, SSO, and SOC2-ready safeguards keep your team’s analysis confidential.",
    icon: Shield,
    accent: "#6ef6ff",
    tags: ["SOC2", "Encrypted storage"],
  },
]

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="insights" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-instrument-sans)" }}>
            Turn every game into a coaching session
          </h2>
          <p className="text-[#c9d0ff]/80 max-w-2xl mx-auto">
            Vexer organizes your analysis, highlights the turning points, and keeps your study on point with share-ready
            stories and live coach mode.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative p-6 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-[#030310]/70 backdrop-blur-2xl shadow-2xl shadow-[#57f4ff]/10"
          >
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="p-2 rounded-2xl bg-white/10 w-fit mb-3">
                    <Activity className="w-5 h-5 text-[#57f4ff]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Deep Game Review</h3>
                  <p className="text-sm text-[#c9d0ff]/70 leading-relaxed">
                    Engine-grade evaluations meet human language notes and coaching prompts so you always understand what
                    move matters and why.
                  </p>
                </div>
                <EnginePulse />
              </div>
              <EvaluationChart />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase text-[#8a94b0] tracking-[0.3em]">Critical swings</p>
                <p className="text-2xl font-semibold text-white mt-2">+2.78</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase text-[#8a94b0] tracking-[0.3em]">Accuracy</p>
                <p className="text-2xl font-semibold text-white mt-2">98.2%</p>
              </div>
            </div>
          </motion.div>

          {featureCards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl border border-white/10 bg-zinc-900/40 hover:border-white/30 transition"
            >
              <div className="p-2 rounded-lg bg-white/10 w-fit mb-4">
                <card.icon className="w-5 h-5" style={{ color: card.accent }} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-[#c9d0ff]/70 leading-relaxed">{card.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border"
                    style={{ borderColor: card.accent, color: card.accent }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
