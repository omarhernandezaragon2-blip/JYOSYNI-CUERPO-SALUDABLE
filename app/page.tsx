import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import ServiceDetail from "@/components/service-detail"
import Testimonials from "@/components/testimonials"
import Benefits from "@/components/benefits"
import ContactForm from "@/components/contact-form"
import CtaFinal from "@/components/cta-final"

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <ServiceDetail />
      <Testimonials />
      <Benefits />
      <section id="contacto" className="py-20 lg:py-28">
        <div className="mx-auto max-w-xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Escríbenos
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Envíanos tu mensaje y te responderemos a la brevedad.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <CtaFinal />
    </main>
  )
}
