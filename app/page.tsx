import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { BentoGrid } from "@/components/bento-grid"
import { Pricing } from "@/components/pricing"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

const resourceTiles = [
  {
    title: "Documentation",
    description: "Step-by-step guides for setting up live signals, PGN imports, and automations.",
    link: "Explore Docs →",
  },
  {
    title: "Coaching Playbooks",
    description: "Curated templates, notes, and drills used by GM coaches and academies.",
    link: "See playbooks →",
  },
  {
    title: "Community",
    description: "Join the Discord and writeups channel to swap ideas and insights with other players.",
    link: "Join the community →",
  },
]

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />
        <Hero />
        <LogoMarquee />
        <BentoGrid />
        <Pricing />
        <section id="resources" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.4em] text-[#9aa0c1] mb-2">Resources</p>
              <h3 className="text-3xl sm:text-4xl font-semibold text-white">
                Everything you need to master your prep
              </h3>
              <p className="text-[#c9d0ff]/70 mt-3 max-w-3xl mx-auto">
                Dive deeper into each feature with guided docs, ready-to-share coach playbooks, or reach out to the
                Discord crew for live help.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resourceTiles.map((resource) => (
                <a
                  key={resource.title}
                  href="#"
                  className="group block rounded-2xl border border-white/5 bg-white/5 px-6 py-8 text-left transition hover:border-[#57f4ff] hover:bg-white/10"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[#9aa0c1] mb-4">{resource.title}</p>
                  <p className="text-lg text-white mb-6">{resource.description}</p>
                  <span className="text-sm font-semibold text-[#57f4ff]">{resource.link}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
