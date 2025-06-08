import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/legacy/image";
import { Newspaper, CalendarDays, ArrowRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noticias y Eventos',
  description: 'Manténgase informado sobre las últimas noticias, eventos y comunicados de la U.E. Guido Arce Pimentel.',
};

const mockNewsAndEvents = [
  { id: 1, type: "Noticia", title: 'Inicio del Año Escolar 2024-2025', date: 'Agosto 15, 2024', image: 'https://placehold.co/400x250.png', dataAiHint: 'school opening', summary: 'Damos la bienvenida a todos nuestros estudiantes al nuevo año escolar lleno de aprendizaje y nuevas aventuras. Detalles sobre la jornada inaugural y horarios especiales.' },
  { id: 2, type: "Evento", title: 'Feria de Ciencias Anual', date: 'Septiembre 20, 2024', image: 'https://placehold.co/400x250.png', dataAiHint: 'science fair', summary: 'Invitamos a toda la comunidad a nuestra Feria de Ciencias donde los estudiantes presentarán sus innovadores proyectos. ¡No se lo pierdan!' },
  { id: 3, type: "Comunicado", title: 'Actualización Protocolos de Bioseguridad', date: 'Agosto 10, 2024', image: 'https://placehold.co/400x250.png', dataAiHint: 'health safety', summary: 'Informamos a la comunidad sobre las actualizaciones en nuestros protocolos de bioseguridad para garantizar un entorno seguro para todos.' },
  { id: 4, type: "Evento", title: 'Celebración Día del Maestro', date: 'Octubre 5, 2024', image: 'https://placehold.co/400x250.png', dataAiHint: 'teacher celebration', summary: 'Un día especial para honrar la dedicación y el esfuerzo de nuestros queridos docentes. Habrá un acto conmemorativo.' },
  { id: 5, type: "Noticia", title: 'Equipo de Debate Gana Torneo Regional', date: 'Noviembre 2, 2024', image: 'https://placehold.co/400x250.png', dataAiHint: 'debate team trophy', summary: 'Felicitaciones a nuestro equipo de debate por su destacada participación y victoria en el torneo regional. ¡Un orgullo para la institución!' },
  { id: 6, type: "Evento", title: 'Concierto Navideño Escolar', date: 'Diciembre 15, 2024', image: 'https://placehold.co/400x250.png', dataAiHint: 'christmas concert', summary: 'Disfrute de una noche mágica con nuestro tradicional concierto navideño presentado por los talentosos estudiantes de música.' },
];

export default function NoticiasEventosPage() {
  return (
    <div className="space-y-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary flex items-center justify-center">
            <Newspaper className="mr-3 h-8 w-8" /> Noticias y Eventos
          </CardTitle>
          <CardDescription className="text-lg">
            Aquí encontrará las últimas novedades, comunicados importantes y próximos eventos de nuestra institución.
          </CardDescription>
          <div className="mt-4">
            <Button variant="outline" asChild>
              <Link href="/noticias-eventos/calendario">
                <CalendarDays className="mr-2 h-4 w-4" /> Ver Calendario Académico
              </Link>
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockNewsAndEvents.map(item => (
          <Card key={item.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-56 w-full">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={item.dataAiHint}
              />
              <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full text-white ${item.type === "Evento" ? "bg-accent" : item.type === "Noticia" ? "bg-primary" : "bg-secondary text-secondary-foreground"}`}>
                {item.type}
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{item.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-3">{item.summary}</p>
            </CardContent>
            <CardContent>
              {/* Placeholder Link, actual detail pages not implemented */}
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <Link href={`/noticias-eventos/${item.id}`}>
                  Leer más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="default" size="lg">Cargar más noticias</Button> {/* Placeholder for pagination */}
      </div>
    </div>
  );
}
