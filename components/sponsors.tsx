"use client"

import { Button } from "@/components/ui/button"
import { Award, Eye, Handshake, Megaphone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"

const benefitIcons = [Eye, Award, Megaphone, Handshake]

export function Sponsors() {
  const { t } = useLanguage()
  const sponsorCopy = t.sponsors

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">{sponsorCopy.title}</h2>
              <p className="text-xl text-foreground/90 dark:text-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
                {sponsorCopy.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {sponsorCopy.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index] ?? Eye
              return (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border h-full">
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{benefit.title}</h3>
                      <p className="text-foreground/80 dark:text-foreground/95 leading-relaxed text-pretty">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={200}>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 space-y-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-balance">{sponsorCopy.supportTitle}</h3>
              <ul className="space-y-3 text-lg max-w-2xl mx-auto">
                {sponsorCopy.supportBullets.map((point, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-secondary flex-shrink-0"></span>
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6"
                >
                  {sponsorCopy.ctaLabel}
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="text-center space-y-4 pt-8">
              <p className="text-sm text-foreground/70 dark:text-foreground/90">{sponsorCopy.organizedBy}</p>
              <p className="text-sm text-foreground/70 dark:text-foreground/90">{sponsorCopy.supportedBy}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
