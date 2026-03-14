import { Eye, Heart, HandHeart, ShieldCheck, Leaf, CheckCircle2 } from "lucide-react"

const mainBenefits = [
  {
    icon: Eye,
    title: "Diagnostico claro y personalizado",
    description:
      "No tratamos sintomas aislados. Observamos tu cuerpo como un todo para ayudarte a tomar decisiones conscientes.",
    extras: [
      "Atencion presencial",
      "Procesos seguros y naturales",
      "Experiencia en terapias integrales",
    ],
  },
  {
    icon: Heart,
    title: "Procedimientos no invasivos",
    description:
      "Sin agujas, sin dolor y sin procesos agresivos. Tu bienestar es prioridad en cada sesion.",
    extras: null,
  },
  {
    icon: HandHeart,
    title: "Atencion humana y cercana",
    description:
      "Escuchamos tu historia, resolvemos tus dudas y te acompanamos paso a paso.",
    extras: null,
  },
]

const secondaryBenefits = [
  {
    icon: ShieldCheck,
    title: "Enfoque preventivo y natural",
    description:
      "Detectar a tiempo es clave. Trabajamos para equilibrar tu salud antes de que el problema avance.",
  },
  {
    icon: Leaf,
    title: "Acompanamiento integral",
    description:
      "Diagnostico, terapias, nutricion y tratamientos naturales alineados a un mismo objetivo: tu bienestar.",
  },
]

const trustBadges = [
  "Atencion presencial",
  "Procesos seguros y naturales",
  "Seguimiento personalizado",
]

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            {"Por que confiar en nuestro enfoque de salud"}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {"Atencion humana, diagnosticos claros y acompanamiento real."}
          </p>
        </div>

        {/* Top row — 3 main cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {mainBenefits.map((b) => (
            <div
              key={b.title}
              className="rounded-xl bg-secondary/60 p-6"
            >
              <b.icon className="h-10 w-10 text-primary/70" />
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.description}
              </p>
              {b.extras && (
                <ul className="mt-4 space-y-2">
                  {b.extras.map((e) => (
                    <li
                      key={e}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                      {e}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom row — 2 secondary cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 md:ml-[calc(100%/3+0.75rem)]">
          {secondaryBenefits.map((b) => (
            <div
              key={b.title}
              className="rounded-xl bg-secondary/60 p-6"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">
                  {b.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
