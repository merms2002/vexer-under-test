"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    setIsLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({
      password,
    })

    if (error) {
      setError(error.message)
      setIsLoading(false)
      return
    }

    router.push("/auth/login")
  }

  return (
    <div className="space-y-8">
      {/* Back button */}
      <Link 
        href="/auth/login" 
        className="inline-flex items-center gap-1 text-white/50 hover:text-white transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="text-sm">Back</span>
      </Link>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          Create<br />New password
        </h1>
        <p className="text-white/50 text-sm">
          Your new password must be different<br />from previously used password
        </p>
      </div>

      {/* Frosted glass card */}
      <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white/50 text-sm">New password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              required
              className="bg-white/5 border-0 text-white placeholder:text-white/30 focus:border-[#FF4500]/50 focus:ring-[#FF4500]/20 h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-white/50 text-sm">Confirm password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
              className="bg-white/5 border-0 text-white placeholder:text-white/30 focus:border-[#FF4500]/50 focus:ring-[#FF4500]/20 h-12"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-black font-semibold h-12 hover:bg-white hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300"
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </form>
      </div>
    </div>
  )
}
