import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Newspaper, CalendarDays, Users, ArrowRight, FileText, GraduationCap, BookOpen, Award, Lightbulb } from 'lucide-react';
import { withSuppressHydration } from '@/components/ui/icon-wrapper';
import type { Metadata } from 'next';

// Metadatos específicos para la página de inicio
export const metadata: Metadata = {
  title: 'Inicio - U.E. Guido Arce Pimentel',
  description: 'Bienvenidos a la U.E. Guido Arce Pimentel. Educación técnico humanística de calidad en Los Negros, Bolivia.',
};

// Envolver los iconos con el wrapper para suprimir advertencias de hidratación
const SafeNewspaper = withSuppressHydration(Newspaper);
const SafeCalendarDays = withSuppressHydration(CalendarDays);
const SafeUsers = withSuppressHydration(Users);
const SafeArrowRight = withSuppressHydration(ArrowRight);
const SafeFileText = withSuppressHydration(FileText);
const SafeGraduationCap = withSuppressHydration(GraduationCap);
const SafeBookOpen = withSuppressHydration(BookOpen);
const SafeAward = withSuppressHydration(Award);
const SafeLightbulb = withSuppressHydration(Lightbulb);

const mockNews = [
  { id: 1, title: 'Inicio del Año Escolar 2024-2025', date: 'Agosto 15, 2024', description: 'Damos la bienvenida a todos nuestros estudiantes al nuevo año escolar lleno de aprendizaje y nuevas aventuras.' },
  { id: 2, title: 'Feria de Ciencias Anual', date: 'Septiembre 20, 2024', description: 'Invitamos a toda la comunidad a nuestra Feria de Ciencias donde los estudiantes presentarán sus innovadores proyectos.' },
  { id: 3, title: 'Celebración Día del Maestro', date: 'Octubre 5, 2024', description: 'Un día especial para honrar la dedicación y el esfuerzo de nuestros queridos docentes.' },
];

const mockTestimonials = [
  { id: 1, name: 'Ana Pérez', role: 'Madre de Familia', quote: 'Excelente institución, mis hijos están felices y aprendiendo mucho. Los profesores son muy dedicados.', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=100&h=100&auto=format&fit=crop', dataAiHint: 'woman portrait' },
  { id: 2, name: 'Carlos López', role: 'Exalumno (Promoción 2018)', quote: 'La formación que recibí en Guido Arce Pimentel fue fundamental para mi carrera profesional. ¡Grandes recuerdos!', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop', dataAiHint: 'man portrait' },
];

const features = [
  {
    icon: SafeGraduationCap,
    title: "Educación Técnico Humanístico",
    description: "Formación integral que combina conocimientos teóricos con habilidades prácticas relevantes para el entorno local."
  },
  {
    icon: SafeLightbulb,
    title: "Innovación Pragmática",
    description: "Fomentamos proyectos como el 'Automóvil Automatizado' que abordan directamente los desafíos de la comunidad."
  },
  {
    icon: SafeAward,
    title: "Excelencia Educativa",
    description: "Compromiso con la calidad educativa adaptada a las necesidades de la comunidad rural de Los Negros."
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 w-full">
      {/* Hero Section */}
      <section className="relative hero-section rounded-xl shadow-xl overflow-hidden enhanced-shadow">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/70 dark:from-primary/90 dark:to-primary/80">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
            alt="Edificio principal de la U.E. Guido Arce Pimentel en Los Negros"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-30 dark:opacity-25 mix-blend-multiply dark:mix-blend-soft-light"
            data-ai-hint="school building rural"
            priority
            sizes="100vw"
            fetchPriority="high"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 text-center md:text-left bg-black/30 dark:bg-transparent p-6 rounded-xl backdrop-blur-sm">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white text-shadow-lg">
                U.E. Guido Arce Pimentel
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-white text-shadow">Forjando Futuros en Los Negros</p>
              <p className="text-base sm:text-lg mb-8 max-w-xl text-white text-shadow-sm">
                Institución educativa que integra el aprendizaje académico con la economía agrícola local, formando jóvenes con conocimientos teóricos y habilidades prácticas.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-white shadow-md rounded-full transition-all duration-300 font-semibold" asChild>
                  <Link href="/oferta-educativa/programas">
                    <SafeGraduationCap className="mr-2 h-5 w-5" /> Oferta Educativa
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 border-visible rounded-full transition-all duration-300 border-2 font-semibold" asChild>
                  <Link href="/institucional/contacto">
                    <SafeUsers className="mr-2 h-5 w-5" /> Contáctanos
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl img-light-bg">
                <Image
                  src="/Logogap.png"
                  alt="Logo UE Guido Arce Pimentel"
                  fill
                  style={{ objectFit: "cover" }}
                  className="scale-90 hover:scale-100 transition-transform duration-300"
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características destacadas */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">
            Nuestra Propuesta Educativa
          </h2>
          <div className="section-divider"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-t-4 border-primary hover-lift enhanced-shadow border-visible rounded-xl overflow-hidden dark-adaptive-bg">
              <CardHeader className="pb-2">
                <div className="icon-container w-16 h-16 mb-4 rounded-xl">
                  <feature.icon className="h-8 w-8 dark-adaptive-red" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold high-contrast-text">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="card-content-transition">
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Enlaces Rápidos */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="section-title">
            Enlaces Rápidos
          </h2>
          <div className="section-divider"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Noticias y Eventos", href: "/noticias-eventos", icon: SafeNewspaper, description: "Información actualizada sobre actividades y novedades escolares.", color: "bg-brand-50 dark:bg-brand-900/30" },
            { title: "Calendario Académico", href: "/noticias-eventos/calendario", icon: SafeCalendarDays, description: "Cronograma de fechas importantes y actividades del año escolar.", color: "bg-accent-50 dark:bg-accent-900/50" },
            { title: "Portal de Admisiones", href: "/oferta-educativa/admision", icon: SafeUsers, description: "Información sobre el proceso de admisión y requisitos de inscripción.", color: "bg-brand-50 dark:bg-brand-900/30" },
            { title: "Documentos", href: "/documentos", icon: SafeFileText, description: "Formularios, reglamentos y documentos oficiales para descargar.", color: "bg-accent-50 dark:bg-accent-900/50" },
          ].map(link => (
            <Link key={link.title} href={link.href} className="block h-full">
              <Card className="card-hover h-full hover-lift enhanced-shadow rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                <CardHeader className={`${link.color} rounded-t-lg transition-colors duration-300`}>
                  <div className="flex justify-center">
                    <link.icon className="h-10 w-10 sm:h-12 sm:w-12 text-red-600 dark:text-red-400" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 text-center card-content-transition">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-800 dark:text-gray-200">{link.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{link.description}</p>
                </CardContent>
                <CardFooter className="pt-0 pb-4 justify-center">
                  <Button variant="ghost" size="sm" className="text-red-600 dark:text-red-400 gap-1 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300">
                    Ver detalles <SafeArrowRight className="h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Noticias y Eventos Recientes */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">
            Noticias y Eventos Recientes
          </h2>
          <div className="section-divider"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {mockNews.map((item) => (
            <Card key={item.id} className="card-hover hover-lift enhanced-shadow rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="relative h-48">
                <Image
                  src={`https://source.unsplash.com/random/400x250/?school,education,${item.id}`}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent dark:from-black/90"></div>
                <div className="absolute bottom-0 left-0 p-3 flex items-center gap-2 text-sm text-white">
                  <SafeCalendarDays className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
              </div>
              <CardContent className="pt-6 card-content-transition">
                <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </CardContent>
              <CardFooter className="pt-0 pb-4">
                <Button variant="ghost" size="sm" className="text-red-600 dark:text-red-400 gap-1 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300" asChild>
                  <Link href="/noticias-eventos">
                    Leer más <SafeArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="btn-outline border-visible rounded-full shadow-sm transition-all duration-300" asChild>
            <Link href="/noticias-eventos">
              Ver todas las noticias y eventos <SafeArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-alt py-12 sm:py-16 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">
              Lo Que Dice Nuestra Comunidad
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {mockTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="card-hover hover-lift enhanced-shadow rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-accent-900/80 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start card-content-transition">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-brand-500/30 dark:border-brand-400/30 flex-shrink-0 shadow-md">
                    <Image
                      src={testimonial.image}
                      alt={`Foto de ${testimonial.name}`}
                      fill
                      style={{ objectFit: "cover" }}
                      data-ai-hint={testimonial.dataAiHint}
                      loading="lazy"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="text-red-600 dark:text-red-400 mb-2">❝</div>
                    <p className="italic text-gray-700 dark:text-gray-300 mb-4">{testimonial.quote}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="btn-outline border-visible rounded-full shadow-sm" asChild>
              <Link href="/testimonios">
                Ver más testimonios <SafeArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Banner Call to Action */}
      <section className="relative py-12 sm:py-16 rounded-xl shadow-xl overflow-hidden enhanced-shadow">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900">
          <Image
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
            alt="Estudiantes en el campus"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-20 mix-blend-multiply"
            data-ai-hint="students campus"
            loading="lazy"
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              ¿Interesado en formar parte de nuestra institución?
            </h2>
            <p className="text-base sm:text-lg mb-8 max-w-xl mx-auto text-white/90">
              Conoce nuestros programas, requisitos de admisión y proceso de matrícula para el próximo año escolar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 shadow-md rounded-full" asChild>
                <Link href="/oferta-educativa/admision">
                  <SafeUsers className="mr-2 h-5 w-5" /> Solicitar Admisión
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 border-visible rounded-full" asChild>
                <Link href="/institucional/contacto">
                  <SafeCalendarDays className="mr-2 h-5 w-5" /> Agendar Visita
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
