"use client"

import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  Search, 
  BarChart3, 
  Swords, 
  BookOpen, 
  Settings, 
  LogOut,
  Crown
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const topNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: true },
  { icon: Search, label: "Search", href: "#" },
  { icon: BarChart3, label: "Analytics", href: "#" },
  { icon: Swords, label: "Games", href: "#" },
  { icon: BookOpen, label: "Openings", href: "#" },
]

const bottomNavItems = [
  { icon: Settings, label: "Settings", href: "#" },
  { icon: LogOut, label: "Logout", href: "/" },
]

export function EmeraldSidebar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed left-0 top-0 h-screen w-16 sm:w-20 flex flex-col items-center py-6 z-50"
    >
      {/* Glass background */}
      <div className="absolute inset-2 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/[0.08]" />

      {/* Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
          <Crown className="w-5 h-5 text-emerald-400" />
        </div>
      </div>

      {/* Top Navigation */}
      <nav className="relative z-10 flex-1 flex flex-col items-center gap-2">
        {topNavItems.map((item, index) => {
          const Icon = item.icon
          const isActive = item.active
          const isHovered = hoveredIndex === index

          return (
            <Link
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300
                  ${isActive 
                    ? "bg-emerald-500/20 text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]" 
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.05]"
                  }
                `}
              >
                <Icon className="w-5 h-5" />
              </motion.div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-zinc-800 text-white text-xs font-medium whitespace-nowrap pointer-events-none"
              >
                {item.label}
              </motion.div>
            </Link>
          )
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="relative z-10 flex flex-col items-center gap-2 pt-4 border-t border-white/[0.05]">
        {bottomNavItems.map((item, index) => {
          const Icon = item.icon
          const actualIndex = topNavItems.length + index

          return (
            <Link
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(actualIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.05] transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: hoveredIndex === actualIndex ? 1 : 0, x: hoveredIndex === actualIndex ? 0 : -10 }}
                className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-zinc-800 text-white text-xs font-medium whitespace-nowrap pointer-events-none"
              >
                {item.label}
              </motion.div>
            </Link>
          )
        })}
      </div>
    </motion.aside>
  )
}
