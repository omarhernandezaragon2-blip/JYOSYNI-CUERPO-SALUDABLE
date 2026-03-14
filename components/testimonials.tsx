import Image from "next/image"
import { Star, MapPin } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/526142522926?text=Hola%2C%20quiero%20conocer%20mi%20diagn%C3%B3stico"

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Lo que nuestros pacientes experimentan
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Experiencias reales despues de una atencion personalizada.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="mx-auto mt-14 max-w-4xl rounded-2xl bg-card p-6 shadow-sm md:p-10">
          {/* Highlight quote */}
          <div className="rounded-xl bg-secondary px-5 py-3">
            <p className="flex items-center gap-2 text-base font-medium text-foreground">
              <Star className="h-5 w-5 flex-shrink-0 fill-amber-500 text-amber-500" />
              {'"Sali con mayor claridad sobre mi salud y mas energia en pocas semanas."'}
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-[240px_1fr]">
            {/* Testimonial image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-square">
              <Image
                src="/testimonio.png.png"
                alt="Paciente en consulta de iridologia"
                fill
                className="object-cover"
              />
            </div>

            {/* Testimonial content */}
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground md:text-2xl">
                {"Testimonio – Iridologia Computarizada"}
              </h3>

              <div className="mt-6 space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Antes</strong>{" "}
                  {'"Me sentia cansado todo el tiempo, con problemas digestivos y sin entender que pasaba con mi salud."'}
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Durante</strong>.{" "}
                  {'"Me senti muy bien atendido. La explicacion fue clara y me dio mucha confianza entender el origen de varios desequilibrios."'}
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Despues</strong>.{" "}
                  {'"Sali con mayor '}
                  <strong className="text-foreground">claridad</strong>
                  {' y recomendaciones practicas. Con el paso de las semanas note mas energia y mejor digestion."'}
                </p>
              </div>

              <div className="mt-6 space-y-1 text-sm text-muted-foreground">
                <p>
                  {"— "}
                  <strong className="text-foreground">Paciente</strong>
                  {", consulta de iridologia"}
                </p>
                <p className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  {"Atencion presencial"}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-border bg-card px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Quiero conocer mi diagnostico
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
