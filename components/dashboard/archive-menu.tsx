"use client"

import { useState } from "react"
import { Folder, Star, ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ArchiveFolder {
  name: string
  count?: number
  active?: boolean
  children?: ArchiveFolder[]
}

const archives: ArchiveFolder[] = [
  { 
    name: "October 2024", 
    count: 12, 
    active: true,
    children: [
      { name: "Rapid Games", count: 6 },
      { name: "Blitz Games", count: 4 },
      { name: "Analyzed", count: 2 },
    ]
  },
  { name: "September 2024", count: 18 },
  { name: "August 2024", count: 24 },
  { name: "July 2024", count: 15 },
]

const favorites = [
  { name: "Best Wins", count: 8 },
  { name: "Tactical Puzzles", count: 5 },
  { name: "Opening Prep", count: 12 },
]

export function ArchiveMenu() {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["October 2024"])

  const toggleFolder = (name: string) => {
    setExpandedFolders(prev => 
      prev.includes(name) 
        ? prev.filter(n => n !== name)
        : [...prev, name]
    )
  }

  return (
    <div className="w-64 bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 flex flex-col h-full">
      {/* Header */}
      <h2 className="text-white font-semibold text-lg mb-6">Archives</h2>

      {/* Archive folders */}
      <div className="space-y-1 flex-1">
        {archives.map((folder) => {
          const isExpanded = expandedFolders.includes(folder.name)
          const hasChildren = folder.children && folder.children.length > 0

          return (
            <div key={folder.name}>
              <button
                onClick={() => hasChildren && toggleFolder(folder.name)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                  folder.active
                    ? "bg-white text-black"
                    : "text-white/50 hover:bg-white/5 hover:text-white"
                )}
              >
                {hasChildren ? (
                  isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )
                ) : (
                  <Folder className="w-4 h-4" />
                )}
                <span className="flex-1 text-left">{folder.name}</span>
                {folder.count && (
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    folder.active 
                      ? "bg-black/10 text-black/60" 
                      : "bg-white/5 text-white/40"
                  )}>
                    {folder.count}
                  </span>
                )}
              </button>

              {/* Children */}
              {hasChildren && isExpanded && (
                <div className="ml-4 mt-1 space-y-1">
                  {folder.children?.map((child) => (
                    <button
                      key={child.name}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-full text-sm text-white/40 hover:bg-white/5 hover:text-white transition-all duration-200"
                    >
                      <Folder className="w-3.5 h-3.5" />
                      <span className="flex-1 text-left">{child.name}</span>
                      {child.count && (
                        <span className="text-xs text-white/30">{child.count}</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Favorites section */}
      <div className="mt-6 pt-6 border-t border-white/5">
        <h3 className="text-white/30 text-xs font-medium uppercase tracking-wider mb-3">
          Favorites
        </h3>
        <div className="space-y-1">
          {favorites.map((fav) => (
            <button
              key={fav.name}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-full text-sm text-white/50 hover:bg-white/5 hover:text-white transition-all duration-200"
            >
              <Star className="w-4 h-4" />
              <span className="flex-1 text-left">{fav.name}</span>
              <span className="text-xs bg-white/5 px-2 py-0.5 rounded-full text-white/40">
                {fav.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
