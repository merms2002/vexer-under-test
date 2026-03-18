import { EmeraldSidebar } from "@/components/dashboard/emerald-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen w-full bg-[#050505] text-white font-sans antialiased">
      {/* Mesh gradient corners */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top left emerald glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-600/15 rounded-full blur-[120px]" />
        {/* Bottom right subtle glow */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
        {/* Center subtle gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/20 rounded-full blur-[150px]" />
      </div>

      {/* Sidebar */}
      <EmeraldSidebar />
      
      {/* Content with sidebar offset */}
      <div className="relative z-10 pl-16 sm:pl-20">
        {children}
      </div>
    </main>
  )
}
