"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export default function VerifyEmailPage() {
  const router = useRouter()
  const [otp, setOtp] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleVerify = async () => {
    if (otp.length !== 4) {
      setError("Please enter the complete 4-digit code")
      return
    }

    setError(null)
    setIsLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.verifyOtp({
      type: "email",
      token: otp,
      email: "", // Would need to be passed from previous page
    })

    if (error) {
      setError(error.message)
      setIsLoading(false)
      return
    }

    router.push("/dashboard")
  }

  const handleResend = async () => {
    // Resend logic would go here
    setError(null)
  }

  return (
    <div className="space-y-8">
      {/* Back button */}
      <Link 
        href="/auth/sign-up" 
        className="inline-flex items-center gap-1 text-white/50 hover:text-white transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="text-sm">Back</span>
      </Link>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          Verify<br />Your Email
        </h1>
        <p className="text-white/50 text-sm">
          Please enter the 4 digit code<br />Sent To your mail
        </p>
      </div>

      {/* Frosted glass card */}
      <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 space-y-6">
        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        <div className="flex justify-center">
          <InputOTP
            maxLength={4}
            value={otp}
            onChange={setOtp}
            className="gap-3"
          >
            <InputOTPGroup className="gap-3">
              <InputOTPSlot 
                index={0} 
                className="w-14 h-14 bg-white/5 border-white/10 text-white text-xl rounded-lg focus:border-[#FF4500]/50 focus:ring-[#FF4500]/20"
              />
              <InputOTPSlot 
                index={1} 
                className="w-14 h-14 bg-white/5 border-white/10 text-white text-xl rounded-lg focus:border-[#FF4500]/50 focus:ring-[#FF4500]/20"
              />
              <InputOTPSlot 
                index={2} 
                className="w-14 h-14 bg-white/5 border-white/10 text-white text-xl rounded-lg focus:border-[#FF4500]/50 focus:ring-[#FF4500]/20"
              />
              <InputOTPSlot 
                index={3} 
                className="w-14 h-14 bg-white/5 border-white/10 text-white text-xl rounded-lg focus:border-[#FF4500]/50 focus:ring-[#FF4500]/20"
              />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="text-center">
          <button 
            onClick={handleResend}
            className="text-sm text-[#FF4500] hover:text-[#FF4500]/80 transition-colors"
          >
            Resend Code
          </button>
        </div>

        <Button
          onClick={handleVerify}
          disabled={isLoading || otp.length !== 4}
          className="w-full bg-white text-black font-semibold h-12 hover:bg-white hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300 disabled:opacity-50"
        >
          {isLoading ? "Verifying..." : "Verify"}
        </Button>
      </div>
    </div>
  )
}
