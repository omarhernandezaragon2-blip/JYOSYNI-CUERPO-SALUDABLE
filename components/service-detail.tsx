import Image from "next/image"
import { ArrowRight } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/526142522926?text=Hola%2C%20quiero%20agendar%20un%20diagn%C3%B3stico%20de%20iridolog%C3%ADa"

export default function ServiceDetail() {
  return (
    <section id="iridologia" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
            <Image
              src="/cardiridologialp.png.jpg"
              alt="Procedimiento de iridologia computarizada"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Iridologia Computarizada
            </h2>
            <p className="mt-2 font-serif text-lg text-muted-foreground">
              El mapa de tu salud en una mirada
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {"Que es"}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {"La iridologia "}
                  <strong className="text-foreground">computarizada</strong>
                  {" es una herramienta de observacion no invasiva que analiza los patrones del iris para obtener informacion sobre el estado general de tu organismo."}
                </p>
              </div>

              <div>
                <p className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">
                    {"Para que sirve (beneficios)"}
                  </strong>{" "}
                  {"Permite identificar desequilibrios, areas de atencion y tendencias de tu salud actual, ayudandote a tomar decisiones preventivas y conscientes."}
                </p>
              </div>

              <div>
                <p className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">{"Para quien es"}</strong>
                  {". Ideal para personas que desean conocer su estado de salud de forma natural, preventiva y sin procedimientos invasivos."}
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {"Agendar diagnostico"}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
