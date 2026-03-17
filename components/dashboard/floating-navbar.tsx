"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "analytics", label: "Analytics" },
  { id: "nexus", label: "Nexus Coach" },
  { id: "vault", label: "Vault" },
]

export function FloatingNavbar() {
  const [active, setActive] = useState("dashboard")

  return (
    <div className="flex justify-center">
      <nav className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="relative px-5 py-2 text-sm font-medium transition-colors"
          >
            {active === item.id && (
              <motion.div
                layoutId="navbar-pill"
                className="absolute inset-0 bg-white rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span
              className={`relative z-10 ${
                active === item.id ? "text-black" : "text-white/60 hover:text-white/80"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  )
}
