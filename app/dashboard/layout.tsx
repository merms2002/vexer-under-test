export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen w-full bg-black text-white font-sans antialiased">
      {children}
    </main>
  )
}
