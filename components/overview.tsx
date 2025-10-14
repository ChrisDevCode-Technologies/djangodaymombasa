"use client"

import { Code2, Users, Rocket } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

const cardIcons = [Code2, Users, Rocket] as const

export function Overview() {
  const { t } = useLanguage()
  const milestone = t.milestone
  const milestoneCards = milestone.cards ?? []

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">{milestone.title}</h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{milestone.intro}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-6">
              <p className="text-lg">{milestone.bodyOne}</p>

              <p className="text-lg">{milestone.bodyTwo}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {milestoneCards.map((card, index) => {
              const Icon = cardIcons[index] ?? Code2
              const delay = index * 100
              const isSecondary = index === 1
              const bgClass = isSecondary ? "bg-secondary/10" : "bg-primary/10"
              const textClass = isSecondary ? "text-secondary" : "text-primary"

              return (
                <ScrollReveal key={card.title} delay={delay}>
                  <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-card border border-border">
                    <div className={`h-14 w-14 rounded-full flex items-center justify-center ${bgClass}`}>
                      <Icon className={`h-7 w-7 ${textClass}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-muted-foreground text-pretty">{card.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
