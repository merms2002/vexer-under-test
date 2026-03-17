"use client"

import { Sparkles, Home, Folder, BarChart3, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const icons = [
  { icon: Sparkles, label: "AI", active: true },
  { icon: Home, label: "Home" },
  { icon: Folder, label: "Archives" },
  { icon: BarChart3, label: "Stats" },
  { icon: Settings, label: "Settings" },
]

export function MicroSidebar() {
  return (
    <div className="flex flex-col items-center py-6 px-2 bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-full">
      {icons.map((item, index) => (
        <button
          key={index}
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200",
            index > 0 && "mt-2",
            item.active
              ? "bg-white text-black"
              : "text-white/40 hover:text-white hover:bg-white/5"
          )}
          title={item.label}
        >
          <item.icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  )
}
