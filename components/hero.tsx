import { ArrowRight } from "lucide-react"
import Image from "next/image"

const WHATSAPP_URL =
  "https://wa.me/526142522926?text=Hola%2C%20quiero%20agendar%20un%20diagn%C3%B3stico"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[85vh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/imagenprincipallp.png"
        alt="Consulta de salud natural personalizada"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-20 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Escucha a tu cuerpo antes de que el sintoma grite
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            Diagnostico integral y tratamientos naturales con atencion humana, personalizada y profesional.
          </p>

          <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
            {"Aqui no tratamos solo sintomas. Analizamos tu estado de salud, entendemos tu historia y te guiamos con soluciones reales."}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
            >
              Agenda tu diagnostico hoy
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-1 text-base font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              {"Conoce como funciona la consulta"}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
