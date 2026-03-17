"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })

    if (error) {
      setError(error.message)
      setIsLoading(false)
      return
    }

    setSuccess(true)
    setIsLoading(false)
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
          Forget<br />Password?
        </h1>
      </div>

      {/* Frosted glass card */}
      <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 space-y-6">
        {success ? (
          <div className="space-y-4">
            <div className="p-4 bg-[#FF4500]/10 border border-[#FF4500]/20 rounded-lg">
              <p className="text-white/80 text-sm">
                Check your email for a password reset link. If you don't see it, check your spam folder.
              </p>
            </div>
            <Link href="/auth/login">
              <Button className="w-full bg-white text-black font-semibold h-12 hover:bg-white hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300">
                Back to Login
              </Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <p className="text-white/50 text-sm">
              Enter your email address
            </p>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/50 text-sm">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-white/5 border-0 text-white placeholder:text-white/30 focus:border-[#FF4500]/50 focus:ring-[#FF4500]/20 h-12"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black font-semibold h-12 hover:bg-white hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300"
            >
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
