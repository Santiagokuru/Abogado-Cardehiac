import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, ChevronRight, Scale, Briefcase, Users, Building, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LawFirmLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b sticky top-0 z-10 bg-[#2a4365] text-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-white" />
            <span className="text-xl font-bold">Johnson & Asociados</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium text-white hover:underline underline-offset-4">
              Servicios
            </Link>
            <Link href="#about" className="text-sm font-medium text-white hover:underline underline-offset-4">
              Sobre Nosotros
            </Link>
            <Link href="#attorneys" className="text-sm font-medium text-white hover:underline underline-offset-4">
              Nuestros Abogados
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white hover:underline underline-offset-4">
              Contacto
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-white text-[#2a4365] hover:bg-gray-100" asChild>
            <Link href="#contact">Consulta Gratuita</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden border-white text-white hover:bg-[#3a5375]">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Menú</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Representación Legal Experta en la que Puede Confiar
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Con más de 25 años de experiencia, nuestro equipo de abogados dedicados está comprometido a
                  proporcionar servicios legales excepcionales y lograr los mejores resultados posibles para nuestros
                  clientes.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#contact">Programar una Consulta</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover">
                <Image
                  src="https://www.aliatuniversidades.com.mx/hubfs/carrera-de-abogado.jpeg"
                  alt="Abogados profesionales en una sala de tribunal"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Nuestras Áreas de Práctica
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos servicios legales integrales en una amplia gama de áreas de práctica para satisfacer todas
                  sus necesidades legales.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  title: "Derecho Corporativo",
                  description:
                    "Orientación experta para empresas de todos los tamaños en formación, cumplimiento y transacciones.",
                  icon: <Building className="h-10 w-10 mb-4 text-gray-800" />,
                },
                {
                  title: "Litigios",
                  description:
                    "Representación hábil en tribunales tanto para demandantes como para demandados en diversos conflictos.",
                  icon: <Briefcase className="h-10 w-10 mb-4 text-gray-800" />,
                },
                {
                  title: "Derecho Familiar",
                  description:
                    "Asesoramiento compasivo para divorcios, custodia y otros asuntos legales relacionados con la familia.",
                  icon: <Users className="h-10 w-10 mb-4 text-gray-800" />,
                },
              ].map((service, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="flex justify-center">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-500">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover">
                <Image
                  src="https://comercioyjusticia.info/wp-content/uploads/2022/07/abogado-1.jpg"
                  alt="Abogado profesional en su oficina"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre Nuestra Firma</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed">
                  Fundada en 1995, Johnson & Asociados ha crecido hasta convertirse en uno de los bufetes de abogados
                  más respetados de la región. Nuestro equipo de abogados experimentados está dedicado a proporcionar
                  servicios legales personalizados con integridad y excelencia.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed">
                  Nos enorgullecemos de nuestro compromiso con nuestros clientes, nuestra participación en la comunidad
                  y nuestro historial de resultados exitosos incluso en los asuntos legales más complejos.
                </p>
                <Button>Conoce a Nuestro Equipo</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contáctenos</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ¿Tiene una pregunta legal o necesita representación? Póngase en contacto con nuestro equipo hoy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <MapPin className="h-8 w-8 text-[#2a4365]" />
                      <h3 className="text-xl font-bold">Nuestra Ubicación</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Av. Corrientes 1234, Piso 5, Oficina B<br />
                      Ciudad Autónoma de Buenos Aires
                      <br />
                      Argentina, C1043AAZ
                    </p>
                    <div className="aspect-video w-full h-[200px] bg-gray-200 rounded-md overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895223!2d-58.38414532346177!3d-34.60373445749376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sAv.%20Corrientes%201234%2C%20C1043AAZ%20CABA!5e0!3m2!1ses!2sar!4v1712181867!5m2!1ses!2sar"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de Johnson & Asociados"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Horario de Oficina</h3>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo</span>
                        <span>Cerrado</span>
                      </div>
                    </div>
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="text-xl font-bold">Información de Contacto</h3>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-[#2a4365]" />
                        <a href="tel:+15551234567" className="text-gray-700 hover:text-[#2a4365]">
                          (555) 123-4567
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageSquare className="h-5 w-5 text-[#2a4365]" />
                        <a href="https://wa.me/15551234567" className="text-gray-700 hover:text-[#2a4365]">
                          WhatsApp: (555) 123-4567
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with contact information */}
      <footer className="w-full border-t bg-gray-900 text-white">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-6 w-6" />
                <span className="text-xl font-bold">Johnson & Asociados</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Proporcionando servicios legales excepcionales con integridad y dedicación desde 1995.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#services" className="text-gray-400 hover:text-white">
                  Servicios
                </Link>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  Sobre Nosotros
                </Link>
                <Link href="#attorneys" className="text-gray-400 hover:text-white">
                  Nuestros Abogados
                </Link>
                <Link href="#contact" className="text-gray-400 hover:text-white">
                  Contacto
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <a href="tel:+15551234567" className="text-gray-400 hover:text-white">
                    (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                  <a href="https://wa.me/15551234567" className="text-gray-400 hover:text-white">
                    WhatsApp: (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Johnson & Asociados Bufete de Abogados. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

