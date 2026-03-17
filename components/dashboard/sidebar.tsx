"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { 
  LayoutDashboard, 
  Gamepad2, 
  Brain, 
  BookOpen, 
  Target, 
  BarChart3, 
  Settings, 
  LogOut,
  Crown
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/games", label: "My Games", icon: Gamepad2 },
  { href: "/dashboard/analysis", label: "Analysis", icon: Brain },
  { href: "/dashboard/openings", label: "Openings", icon: BookOpen },
  { href: "/dashboard/training", label: "Training", icon: Target },
  { href: "/dashboard/statistics", label: "Statistics", icon: BarChart3 },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <aside className="w-64 h-screen bg-white/[0.02] backdrop-blur-2xl border-r border-white/10 flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF4500] rounded-lg flex items-center justify-center">
            <Crown className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">VEXER</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive && "text-[#FF4500]")} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Promo Card */}
      <div className="px-3 py-4">
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-4 relative overflow-hidden">
          {/* Brutalist accent marker */}
          <div className="absolute top-0 left-0 w-1 h-full bg-[#FF4500]" />
          
          <div className="pl-3">
            <p className="text-white/80 text-sm font-medium mb-1">
              Upgrade to Pro
            </p>
            <p className="text-white/40 text-xs mb-3">
              Unlock unlimited analysis and advanced features
            </p>
            <button className="text-[#FF4500] text-xs font-semibold hover:text-[#FF4500]/80 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="p-3 space-y-1 border-t border-white/10">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          Log out
        </button>
      </div>
    </aside>
  )
}
