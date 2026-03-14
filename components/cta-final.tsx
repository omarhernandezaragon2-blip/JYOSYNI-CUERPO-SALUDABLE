import { ArrowRight, CheckCircle2, Phone } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/526142522926?text=Hola%2C%20quiero%20agendar%20una%20consulta"

const checks = [
  "Atencion presencial",
  "Procedimientos no invasivos",
  "Seguimiento personalizado",
]

export default function CtaFinal() {
  return (
    <section id="cta-final" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
          Da el primer paso hacia tu bienestar
        </h2>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {"Atencion personalizada, diagnostico claro y acompanamiento natural desde la primera consulta."}
        </p>

        <p className="mt-4 text-base text-muted-foreground">
          {"Agenda hoy y comienza a entender lo que tu cuerpo te esta pidiendo."}
        </p>

        {/* Main CTA */}
        <div className="mt-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
          >
            {"Agendar consulta"}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Checks */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {checks.map((check) => (
            <span
              key={check}
              className="flex items-center gap-2 text-sm text-primary"
            >
              <CheckCircle2 className="h-4 w-4" />
              {check}
            </span>
          ))}
        </div>

        {/* WhatsApp info */}
        <div className="mt-10 flex items-center justify-center gap-2 text-muted-foreground">
          <Phone className="h-5 w-5 text-primary" />
          <span className="text-base font-medium">WhatsApp</span>
          <a
            href="tel:+526142522926"
            className="text-base font-medium text-foreground hover:underline"
          >
            +52 614 252 2926
          </a>
        </div>
      </div>
    </section>
  )
}
