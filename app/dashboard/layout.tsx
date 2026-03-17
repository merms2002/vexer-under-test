export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex h-screen w-screen overflow-hidden bg-black text-white p-4 gap-4 font-sans antialiased">
      {/* Subtle dot grid overlay */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex w-full h-full gap-4">
        {children}
      </div>
    </main>
  )
}
