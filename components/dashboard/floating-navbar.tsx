"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LayoutDashboard, BarChart3, Brain, Archive, Menu, X } from "lucide-react"

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "nexus", label: "Nexus Coach", icon: Brain },
  { id: "vault", label: "Vault", icon: Archive },
]

export function FloatingNavbar() {
  const [active, setActive] = useState("dashboard")
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-center">
        <nav className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative px-4 lg:px-5 py-2 text-sm font-medium transition-colors"
            >
              {active === item.id && (
                <motion.div
                  layoutId="navbar-pill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={`relative z-10 flex items-center gap-2 ${
                  active === item.id ? "text-black" : "text-white/60 hover:text-white/80"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden lg:inline">{item.label}</span>
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between">
          <span className="text-white font-semibold">VEXER</span>
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-full bg-white/[0.05] border border-white/10"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
          className="overflow-hidden"
        >
          <nav className="mt-4 p-2 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id)
                  setMobileOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active === item.id 
                    ? "bg-white text-black" 
                    : "text-white/60 hover:bg-white/[0.05] hover:text-white/80"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </motion.div>
      </div>
    </>
  )
}
