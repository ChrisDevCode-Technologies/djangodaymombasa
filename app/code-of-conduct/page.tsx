"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function CodeOfConductPage() {
  const { t } = useLanguage()
  const page = t.codeOfConductPage
  const introParagraphs = Array.isArray(page.introParagraphs) ? page.introParagraphs : []
  const principles = Array.isArray(page.principles) ? page.principles : []

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-balance">{page.title}</h1>
              <p className="text-xl text-muted-foreground text-balance">{page.subtitle}</p>
            </div>

            <section className="bg-card rounded-2xl p-8 border border-border space-y-4">
              <p className="text-muted-foreground leading-relaxed">{page.referenceNote}</p>
              <a
                href={page.referenceLinkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold underline underline-offset-4"
              >
                {page.referenceLinkLabel}
              </a>
            </section>

            <section className="space-y-4">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border space-y-6">
              <h2 className="text-3xl font-bold text-center">{page.principlesTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {principles.map((principle: { title: string; description: string }) => (
                  <div key={principle.title} className="space-y-2 text-left bg-muted/30 rounded-xl p-5">
                    <h3 className="text-xl font-semibold text-primary">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-primary text-primary-foreground rounded-2xl p-8 space-y-4 text-center">
              <h2 className="text-2xl font-bold">{page.reportingTitle}</h2>
              <p className="text-primary-foreground/90 leading-relaxed">{page.reportingDescription}</p>
              <div className="space-y-2 font-semibold">
                <span>{page.reportingEmailLabel}</span>
                <br />
                <a href={`mailto:${page.reportingEmail}`} className="underline underline-offset-4">
                  {page.reportingEmail}
                </a>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">{page.reportingNote}</p>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
