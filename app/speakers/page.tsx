"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function SpeakersPage() {
  const { t } = useLanguage()
  const page = t.speakersPage
  const introParagraphs = Array.isArray(page.introParagraphs) ? page.introParagraphs : []
  const guidelines = Array.isArray(page.guidelines) ? page.guidelines : []
  const submissionItems = Array.isArray(page.submissionItems) ? page.submissionItems : []
  const reviewBullets = Array.isArray(page.reviewBullets) ? page.reviewBullets : []
  const reminderParagraphs = Array.isArray(page.reminderParagraphs) ? page.reminderParagraphs : []

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-balance">{page.title}</h1>
              <p className="text-xl text-muted-foreground text-balance">{page.subtitle}</p>
            </div>

            <section className="bg-card rounded-2xl p-8 border border-border space-y-4">
              <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <div className="flex justify-center text-foreground/40 text-2xl" aria-hidden="true">
              ⸻
            </div>

            <section className="bg-card rounded-2xl p-8 border border-border space-y-6">
              <h2 className="text-3xl font-bold">{page.guidelinesTitle}</h2>
              <div className="space-y-6">
                {guidelines.map((section: any) => (
                  <div key={section.title} className="space-y-3">
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                    {section.description && (
                      <p className="text-muted-foreground leading-relaxed">{section.description}</p>
                    )}
                    {Array.isArray(section.bullets) && section.bullets.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {section.bullets.map((bullet: string) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {section.note && <p className="text-sm text-muted-foreground/80 italic">{section.note}</p>}
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border space-y-4">
              <h2 className="text-3xl font-bold">{page.submissionsTitle}</h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                {submissionItems.map((item, index) => (
                  <li key={`${index}-${item}`}>{item}</li>
                ))}
              </ol>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-3xl font-bold">{page.reviewTitle}</h2>
              <ul className="mt-4 list-disc list-inside space-y-2 text-muted-foreground">
                {reviewBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <div className="flex justify-center text-foreground/40 text-2xl" aria-hidden="true">
              ⸻
            </div>

            <section className="bg-card rounded-2xl p-8 border border-border space-y-3 text-center">
              <h2 className="text-3xl font-bold">{page.howToApplyTitle}</h2>
              <p className="text-muted-foreground italic">{page.howToApplyDescription}</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border space-y-4">
              <h2 className="text-3xl font-bold">{page.reminderTitle}</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                {reminderParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="text-lg font-semibold text-primary">{page.closingNote}</p>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
