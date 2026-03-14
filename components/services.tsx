import Image from "next/image"
import { ArrowRight, Leaf } from "lucide-react"

const services = [
  {
    id: "iridologia",
    title: "Iridologia Computarizada",
    description:
      "Conoce el estado general de tu salud a traves de tus ojos, en minutos.",
    image: "/cardiridologialp.png.jpg",
  },
  {
    id: "conoterapia",
    title: "Conoterapia Profesional",
    description:
      "Sensacion de claridad y bienestar auditivo con un procedimiento seguro.",
    image: "/cardvelado.png.png",
  },
  {
    id: "masajes",
    title: "Masajes Terapeuticos",
    description: "Libera el estres y alivia contracturas musculares.",
    image: "/cardmasaje.png.png",
  },
  {
    id: "nutricion",
    title: "Nutricion Consciente",
    description:
      "Tu alimentacion como herramienta de sanacion, con seguimiento personalizado.",
    image: "/cardnutricion.png.png",
  },
  {
    id: "tratamientos",
    title: "Tratamientos naturales",
    description:
      "Tratamientos naturales personalizados para acompanar tu proceso de salud.",
    image: "/cardproducto.png.png",
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            {"¿Como podemos ayudarte?"}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="text-base">
              {"Servicios disenados para acompanar tu salud"}
            </span>
          </div>
          <p className="mt-2 text-base text-muted-foreground">
            {"Diagnostico, terapias y tratamientos naturales adaptados a ti."}
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-serif text-base font-bold text-foreground lg:text-lg text-balance">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  {"Ver mas"}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
