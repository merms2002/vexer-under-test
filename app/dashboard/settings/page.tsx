"use client"

import { motion } from "framer-motion"
import { 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Link2, 
  CreditCard, 
  Cpu, 
  Palette, 
  Bell, 
  Globe,
  LayoutDashboard,
  BarChart3,
  Gamepad2,
  UserCircle,
  Sparkles,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface SettingItem {
  icon: React.ReactNode
  label: string
  value?: string
  hasChevron?: boolean
  hasToggle?: boolean
  defaultToggle?: boolean
}

function ToggleSwitch({ defaultChecked = false }: { defaultChecked?: boolean }) {
  const [isOn, setIsOn] = useState(defaultChecked)
  
  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
        isOn ? "bg-emerald-500" : "bg-zinc-700"
      }`}
    >
      <motion.div
        initial={false}
        animate={{ x: isOn ? 20 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
      />
    </button>
  )
}

function SettingRow({ item }: { item: SettingItem }) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className="w-full flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors"
    >
      <div className="flex items-center gap-3">
        <span className="text-zinc-400">{item.icon}</span>
        <span className="text-white text-sm font-medium tracking-tight">{item.label}</span>
      </div>
      <div className="flex items-center gap-2">
        {item.value && (
          <span className="text-zinc-500 text-sm">{item.value}</span>
        )}
        {item.hasToggle && <ToggleSwitch defaultChecked={item.defaultToggle} />}
        {item.hasChevron && <ChevronRight className="w-4 h-4 text-zinc-600" />}
      </div>
    </motion.button>
  )
}

const accountSettings: SettingItem[] = [
  { icon: <User className="w-5 h-5" />, label: "Profile Information", hasChevron: true },
  { icon: <Link2 className="w-5 h-5" />, label: "Linked Accounts", value: "Chess.com", hasChevron: true },
  { icon: <CreditCard className="w-5 h-5" />, label: "Subscription", hasChevron: true },
]

const preferencesSettings: SettingItem[] = [
  { icon: <Cpu className="w-5 h-5" />, label: "Analysis Depth", value: "Depth 20", hasChevron: true },
  { icon: <Palette className="w-5 h-5" />, label: "Theme Preferences", hasChevron: true },
  { icon: <Bell className="w-5 h-5" />, label: "Notifications", hasToggle: true, defaultToggle: true },
  { icon: <Globe className="w-5 h-5" />, label: "Language", value: "English", hasChevron: true },
]

const navItems = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", href: "/dashboard", active: false },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Analysis", href: "/dashboard", active: false },
  { icon: <Gamepad2 className="w-5 h-5" />, label: "Games", href: "/dashboard", active: false },
  { icon: <UserCircle className="w-5 h-5" />, label: "Account", href: "/dashboard/settings", active: true },
]

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="flex items-center gap-4 px-4 py-4">
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-white/[0.05] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </motion.button>
          </Link>
          <h1 className="text-white text-lg font-semibold tracking-tight">Account</h1>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 pb-24 overflow-y-auto">
        {/* Vexer Pro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/[0.08] p-5 mb-6"
        >
          {/* Subtle grid background */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "20px 20px"
            }}
          />
          
          {/* Emerald glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-semibold tracking-tight">Vexer Pro</span>
              <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                PRO
              </span>
            </div>
            <p className="text-zinc-400 text-sm mb-4">
              Upgrade your plan to unlock unlimited analysis depth and premium features.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black font-semibold text-sm rounded-xl hover:bg-zinc-100 transition-colors tracking-tight"
            >
              Upgrade
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Account Settings Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl bg-zinc-900/50 border border-white/[0.08] overflow-hidden mb-4"
        >
          {accountSettings.map((item, index) => (
            <div key={item.label}>
              <SettingRow item={item} />
              {index < accountSettings.length - 1 && (
                <div className="mx-4 h-px bg-white/[0.05]" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Preferences Settings Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl bg-zinc-900/50 border border-white/[0.08] overflow-hidden"
        >
          {preferencesSettings.map((item, index) => (
            <div key={item.label}>
              <SettingRow item={item} />
              {index < preferencesSettings.length - 1 && (
                <div className="mx-4 h-px bg-white/[0.05]" />
              )}
            </div>
          ))}
        </motion.div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/[0.05] px-4 py-2 safe-area-pb">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-colors ${
                  item.active 
                    ? "text-emerald-400" 
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
                style={item.active ? { 
                  filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))" 
                } : {}}
              >
                {item.icon}
                <span className="text-[10px] font-medium tracking-tight">{item.label}</span>
              </motion.button>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
