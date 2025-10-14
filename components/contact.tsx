"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Users } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const { t } = useLanguage()
  const contact = t.contact

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">{contact.title}</h2>
                <p className="text-xl text-foreground/80 dark:text-foreground leading-relaxed text-pretty">
                  {contact.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <ScrollReveal delay={100}>
                  <div className="space-y-4 p-6 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70 dark:text-foreground/85">{contact.eventLeadLabel}</p>
                        <p className="font-semibold text-foreground">{contact.eventLeadName}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={150}>
                  <div className="space-y-4 p-6 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70 dark:text-foreground/85">{contact.emailLabel}</p>
                        <a
                          href={`mailto:${contact.emailAddress}`}
                          className="font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {contact.emailAddress}
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200} className="md:col-span-2">
                  <div className="space-y-4 p-6 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70 dark:text-foreground/85">{contact.phoneLabel}</p>
                        <a
                          href={`tel:${contact.phoneNumber.replace(/\s+/g, "")}`}
                          className="font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {contact.phoneNumber}
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={250}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                    {contact.registerCta}
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    {contact.submitTalkCta}
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
