import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuthErrorPage() {
  return (
    <div className="space-y-8 text-center">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center">
          <AlertCircle className="w-10 h-10 text-red-400" />
        </div>
      </div>

      {/* Heading */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Something went wrong
        </h1>
        <p className="text-white/50 text-sm max-w-xs mx-auto">
          We encountered an error during authentication. Please try again or contact support if the problem persists.
        </p>
      </div>

      {/* Frosted glass card */}
      <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 space-y-4">
        <Link href="/auth/login" className="block">
          <Button className="w-full bg-white text-black font-semibold h-12 hover:bg-white hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300">
            Try Again
          </Button>
        </Link>
        
        <Link href="/" className="block">
          <Button 
            variant="outline" 
            className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-[#FF4500]/30 h-12 transition-all duration-300"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
