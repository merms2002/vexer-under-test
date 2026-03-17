import Link from "next/link"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SignUpSuccessPage() {
  return (
    <div className="space-y-8 text-center">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-full flex items-center justify-center">
          <Mail className="w-10 h-10 text-[#FF4500]" />
        </div>
      </div>

      {/* Heading */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Check your email
        </h1>
        <p className="text-white/50 text-sm max-w-xs mx-auto">
          We've sent you a confirmation link. Please check your inbox and click the link to verify your account.
        </p>
      </div>

      {/* Frosted glass card */}
      <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 space-y-4">
        <p className="text-white/30 text-xs">
          Didn't receive the email? Check your spam folder or try again.
        </p>
        
        <Link href="/auth/login" className="block">
          <Button className="w-full bg-white text-black font-semibold h-12 hover:bg-white hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300">
            Back to Login
          </Button>
        </Link>
      </div>
    </div>
  )
}
