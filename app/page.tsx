import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <span className="text-xl font-bold">Madera y Clavos</span>
          <span className="sr-only">Madera y Clavos</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#proyectos" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Proyectos
          </Link>
          <Link href="#servicios" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Servicios
          </Link>
          <Link
            href="#sobre-nosotros"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Sobre Nosotros
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 text-gray-900">
          {" "}
          {/* Fondo más claro */}
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Madera y Clavos: Tu Visión en Madera, Hecha Realidad
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl">
                    En Madera y Clavos, transformamos tus ideas en muebles y soluciones de madera personalizadas.
                    Permítenos ayudarte a visualizar y construir la cocina, el closet o el espacio que siempre has
                    soñado.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#proyectos"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Ver Proyectos
                  </Link>
                  <Link
                    href="#contacto"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Solicitar Cotización
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width="550"
                height="550"
                alt="Mueble de madera artesanal"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section id="sobre-nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col items-start space-y-4 text-left">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Sobre Nosotros
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">La Pasión de Max por la Madera</h2>
                <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Max no es solo un carpintero, es un artesano con una dedicación inquebrantable a la madera. Cada
                  corte, cada unión, cada acabado es realizado con una precisión y un cuidado que reflejan su amor por
                  el oficio. Su meticulosidad asegura que cada pieza no solo sea hermosa, sino también duradera y
                  funcional, diseñada para enriquecer su hogar o espacio de trabajo.
                  <br />
                  <br />
                  Con años de experiencia y un ojo para el detalle, Max se enorgullece de transformar ideas en realidad,
                  creando piezas que no solo cumplen una función, sino que también cuentan una historia.
                </p>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=800" // Placeholder para una foto de Max o su taller
                width="800"
                height="600"
                alt="Max trabajando en su taller"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="proyectos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Nuestros Proyectos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Galería de Obras Maestras</h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explora algunos de nuestros trabajos recientes, desde muebles personalizados hasta restauraciones
                  detalladas. Cada proyecto es un testimonio de la calidad y el arte de Madera y Clavos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="/images/coffee-table.png"
                    width="600"
                    height="400"
                    alt="Mesa de centro de madera rústica con patas de metal"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold">Mesa de Comedor Rústica</CardTitle>
                  <CardDescription className="text-sm text-gray-700">
                    Una mesa robusta y elegante, perfecta para reuniones familiares.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="/images/built-in-closet.png"
                    width="600"
                    height="400"
                    alt="Armario empotrado modular con estantes y cajones"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold">Estantería Modular Personalizada</CardTitle>
                  <CardDescription className="text-sm text-gray-700">
                    Diseñada para maximizar el espacio y la funcionalidad en cualquier habitación.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="/images/modern-kitchen.png"
                    width="600"
                    height="400"
                    alt="Cocina moderna con gabinetes de madera y encimeras oscuras"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold">Armario de Cocina a Medida</CardTitle>
                  <CardDescription className="text-sm text-gray-700">
                    Solución de almacenamiento elegante y eficiente para su cocina.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="/images/closet-render.png"
                    width="600"
                    height="400"
                    alt="Diseño 3D de un armario moderno"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold">Diseño de Armario 3D</CardTitle>
                  <CardDescription className="text-sm text-gray-700">
                    Visualización detallada de un armario moderno antes de su construcción.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="/images/kitchen-island.png"
                    width="600"
                    height="400"
                    alt="Isla de cocina con base de madera y encimera de granito"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold">Isla de Cocina Contemporánea</CardTitle>
                  <CardDescription className="text-sm text-gray-700">
                    Diseño funcional y estético para el corazón de tu hogar.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="/images/built-in-closet.png"
                    width="600"
                    height="400"
                    alt="Armario empotrado con iluminación interior"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold">Solución de Almacenamiento Integrada</CardTitle>
                  <CardDescription className="text-sm text-gray-700">
                    Optimización de espacio con un diseño elegante y funcional.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Link
                href="#" // Podría ser una página /proyectos dedicada
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Ver Todos los Proyectos
              </Link>
            </div>
          </div>
        </section>

        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Nuestros Servicios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Creando con Madera para Ti</h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una amplia gama de servicios de carpintería, desde la creación de piezas únicas hasta la
                  restauración de tesoros antiguos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center p-6 text-center shadow-sm">
                <img
                  src="/icons/table.png"
                  width="100"
                  height="100"
                  alt="Icono de mesa para muebles a medida"
                  className="mb-4 rounded-full bg-blue-200 p-3"
                />
                <CardTitle className="text-xl font-semibold">Muebles a Medida</CardTitle>
                <CardDescription className="text-gray-700 mt-2">
                  Diseñamos y construimos muebles únicos que se adaptan perfectamente a tu espacio y estilo.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-sm">
                <img
                  src="/icons/wood-grain-outline.png"
                  width="100"
                  height="100"
                  alt="Icono de restauración de muebles"
                  className="mb-4 rounded-full bg-blue-200 p-3"
                />
                <CardTitle className="text-xl font-semibold">Restauración de Muebles</CardTitle>
                <CardDescription className="text-gray-700 mt-2">
                  Devolvemos la vida y el esplendor a tus muebles antiguos o dañados con técnicas expertas.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center shadow-sm">
                <img
                  src="/icons/kitchen-counter.png"
                  width="100"
                  height="100"
                  alt="Icono de cocina para diseño y asesoramiento"
                  className="mb-4 rounded-full bg-blue-200 p-3"
                />
                <CardTitle className="text-xl font-semibold">Diseño y Asesoramiento</CardTitle>
                <CardDescription className="text-gray-700 mt-2">
                  Te asesoramos en el diseño de tus proyectos, garantizando soluciones funcionales y estéticas.
                </CardDescription>
              </Card>
            </div>
            <div className="text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas una Cotización?</h3>
              <p className="text-gray-800 max-w-2xl mx-auto mb-6">
                Cuéntanos sobre tu proyecto y te enviaremos una cotización detallada y sin compromiso.
              </p>
              <Link
                href="#contacto"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </section>
        <section id="opciones-cocina" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Diseño de Cocinas
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explora tus Opciones de Diseño de Cocina
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Entiende los materiales, acabados y tipos de madera para crear la cocina de tus sueños.
                </p>
              </div>
            </div>

            <div className="py-12 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
              {/* Materiales Base */}
              <Card className="p-6 bg-white shadow-sm">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">Materiales Base</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-gray-700 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-blue-700">Madera Sólida</h3>
                    <p>
                      Ofrece durabilidad, belleza natural y la posibilidad de restauraciones. Ideal para un aspecto
                      clásico y atemporal.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-700">MDF (Tablero de Fibra de Densidad Media)</h3>
                    <p>
                      Material versátil y económico, ideal para acabados lacados o pintados. Ofrece una superficie lisa
                      y uniforme.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-700">Contrachapado (Plywood)</h3>
                    <p>
                      Compuesto por capas de madera, es estable y resistente a la humedad. Excelente para estructuras
                      internas y frentes con chapa de madera.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Calidad de Acabado */}
              <Card className="p-6 bg-white shadow-sm">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">Calidad de Acabado</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-gray-700 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-blue-700">Natural / Aceitado</h3>
                    <p>
                      Resalta la veta y el color natural de la madera, ofreciendo un tacto suave y un aspecto orgánico.
                      Requiere mantenimiento periódico.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-700">Barnizado</h3>
                    <p>
                      Crea una capa protectora brillante o satinada que sella la madera, ofreciendo alta resistencia a
                      la humedad y al desgaste.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-700">Lacado / Pintado</h3>
                    <p>
                      Proporciona un acabado uniforme y opaco en una amplia gama de colores. Ideal para diseños modernos
                      y minimalistas.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Tipos de Madera */}
              <Card className="p-6 bg-white shadow-sm xl:col-span-1 lg:col-span-2">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">Tipos de Madera</CardTitle>
                </CardHeader>
                <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/icons/wood-grain-colored.png"
                      width="200"
                      height="150"
                      alt="Muestra de madera de Parota"
                      className="rounded-md mb-2 object-cover aspect-[4/3] border border-gray-300"
                    />
                    <h3 className="font-semibold text-lg text-blue-700">Parota</h3>
                    <p className="text-sm">Madera tropical con vetas pronunciadas y tonos cálidos.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/icons/wood-grain-colored.png"
                      width="200"
                      height="150"
                      alt="Muestra de madera de Teka"
                      className="rounded-md mb-2 object-cover aspect-[4/3] border border-gray-300"
                    />
                    <h3 className="font-semibold text-lg text-blue-700">Teka</h3>
                    <p className="text-sm">Extremadamente duradera y resistente a la humedad, ideal para exteriores.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/icons/wood-grain-colored.png"
                      width="200"
                      height="150"
                      alt="Muestra de madera de Roble"
                      className="rounded-md mb-2 object-cover aspect-[4/3] border border-gray-300"
                    />
                    <h3 className="font-semibold text-lg text-blue-700">Roble</h3>
                    <p className="text-sm">Clásico y robusto, con una veta distintiva y gran resistencia.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/icons/wood-grain-colored.png"
                      width="200"
                      height="150"
                      alt="Muestra de madera de Caoba"
                      className="rounded-md mb-2 object-cover aspect-[4/3] border border-gray-300"
                    />
                    <h3 className="font-semibold text-lg text-blue-700">Caoba</h3>
                    <p className="text-sm">Madera fina de color rojizo, muy valorada por su elegancia.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/icons/wood-grain-colored.png"
                      width="200"
                      height="150"
                      alt="Muestra de madera de Encino"
                      className="rounded-md mb-2 object-cover aspect-[4/3] border border-gray-300"
                    />
                    <h3 className="font-semibold text-lg text-blue-700">Encino</h3>
                    <p className="text-sm">Similar al roble, con buena dureza y una veta atractiva.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/icons/wood-grain-colored.png"
                      width="200"
                      height="150"
                      alt="Muestra de madera de Pino"
                      className="rounded-md mb-2 object-cover aspect-[4/3] border border-gray-300"
                    />
                    <h3 className="font-semibold text-lg text-blue-700">Pino</h3>
                    <p className="text-sm">Madera clara y versátil, ideal para proyectos con presupuesto.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sección para la herramienta de diseño con IA (futura) */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Innovación</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Diseña tu Espacio Ideal con Inteligencia Artificial (Próximamente)
              </h2>
              <p className="max-w-[900px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Imagina poder visualizar tu próxima cocina, armario o mueble personalizado antes de que sea construido.
                Estamos desarrollando una herramienta innovadora impulsada por Inteligencia Artificial que te permitirá
                diseñar tus espacios en 3D, experimentar con diferentes tipos de madera y acabados, y obtener una vista
                previa realista de tu proyecto. ¡Transforma tus ideas en planos detallados y prepárate para el futuro
                del diseño en madera!
              </p>
              <Button
                variant="outline"
                className="mt-6 bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                disabled
              >
                Más Información (Próximamente)
              </Button>
            </div>
          </div>
        </section>

        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Contacto</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hablemos de tu Proyecto</h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ¿Listo para transformar tu espacio con la belleza de la madera? Contáctanos hoy mismo.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-3xl grid gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:madera1clavos@gmail.com" className="text-gray-800 hover:underline">
                    madera1clavos@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <a href="tel:+527771798868" className="text-gray-800 hover:underline">
                    777 179 8868
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <p className="text-gray-800">
                    Calle del Carpintero, 123 <br />
                    Ciudad de la Madera, País
                  </p>
                </div>
              </div>
              <Card className="p-6 shadow-sm">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold">Envíanos un Mensaje</CardTitle>
                  <CardDescription>Nos pondremos en contacto contigo lo antes posible.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <form className="grid gap-4">
                    <Input id="name" placeholder="Tu Nombre" type="text" />
                    <Input id="email" placeholder="Tu Correo Electrónico" type="email" />
                    <Input id="subject" placeholder="Asunto" type="text" />
                    <Textarea id="message" placeholder="Tu Mensaje" className="min-h-[120px]" />
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-white">
        <p className="text-xs text-gray-100">&copy; 2024 Madera y Clavos. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="https://www.instagram.com/madera1clavos/"
            className="text-xs hover:underline underline-offset-4 text-gray-100"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-100" prefetch={false}>
            Política de Privacidad
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-100" prefetch={false}>
            Términos de Servicio
          </Link>
        </nav>
      </footer>
    </div>
  )
}
