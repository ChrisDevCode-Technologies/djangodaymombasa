"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function VolunteerPage() {
  const { t } = useLanguage()
  const page = t.volunteerPage

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-10 text-center">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold text-balance">{page.title}</h1>
              <p className="text-xl text-muted-foreground text-balance">{page.subtitle}</p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
              {page.description && (
                <p className="text-lg leading-relaxed text-foreground/80">{page.description}</p>
              )}
              <p className="text-foreground font-semibold">{page.supportMessage}</p>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground text-balance">{page.ctaLabel}</p>
              <a
                href={page.ctaLink}
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-primary font-semibold transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {page.ctaEmail}
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
