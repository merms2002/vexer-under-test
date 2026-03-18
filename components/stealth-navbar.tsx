"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Archive, LayoutDashboard, Cpu, Settings } from "lucide-react"

const navItems = [
  { label: "Vault", href: "/vault", icon: Archive },
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Nexus", href: "/nexus", icon: Cpu },
  { label: "Settings", href: "/settings", icon: Settings },
]

export function StealthNavbar() {
  const pathname = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getActiveIndex = () => {
    const idx = navItems.findIndex((item) => pathname.startsWith(item.href))
    return idx >= 0 ? idx : -1
  }

  const activeIndex = getActiveIndex()

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-0 px-1.5 py-1.5 glass-refractive rounded-full">
        {navItems.map((item, index) => {
          const isActive = activeIndex === index
          const isHovered = hoveredIndex === index
          const Icon = item.icon

          return (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 flex items-center gap-2 rounded-full transition-colors"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Active / Hover Background Pill */}
              {(isActive || isHovered) && (
                <motion.div
                  layoutId="stealth-nav-pill"
                  className={`absolute inset-0 rounded-full ${
                    isActive ? "bg-white" : "bg-white/[0.06]"
                  }`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              {/* Icon */}
              <Icon
                className={`relative z-10 w-4 h-4 transition-colors ${
                  isActive
                    ? "text-black"
                    : isHovered
                    ? "text-white/80"
                    : "text-white/40"
                }`}
              />

              {/* Label */}
              <span
                className={`relative z-10 text-xs font-medium tracking-tight transition-colors ${
                  isActive
                    ? "text-black"
                    : isHovered
                    ? "text-white/80"
                    : "text-white/40"
                }`}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}
