"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = {
  Product: ["Analysis", "Insights", "Live Signals", "Pricing"],
  Resources: ["Documentation", "Coaching Playbooks", "Community", "Support"],
  Company: ["About", "Careers", "Contact", "Press"],
  Legal: ["Privacy", "Terms", "Security", "Accessibility"],
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="border-t border-white/10 bg-[#030310]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#ffc75c] via-[#ff6d6d] to-[#ff4f8b] flex items-center justify-center shadow-lg shadow-[#ff4f8b]/30">
                <span className="text-[#0b0703] font-black text-lg tracking-tighter">V</span>
              </div>
              <span className="font-semibold text-white text-lg tracking-wider">Vexer</span>
            </a>
            <p className="text-sm text-[#c9d0ff]/70 mb-4">
              Chess analysis studio that turns every game into insight, coaching, and live broadcast-ready plots.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#57f4ff] pulse-glow" />
              <span className="text-xs text-white/70 uppercase tracking-[0.4em]">Engine online</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#c9d0ff]/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-[#9aa0c1]">&copy; {new Date().getFullYear()} Vexer. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-[#c9d0ff]/70 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-[#c9d0ff]/70 hover:text-white transition-colors">
              YouTube
            </a>
            <a href="#" className="text-sm text-[#c9d0ff]/70 hover:text-white transition-colors">
              Discord
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
