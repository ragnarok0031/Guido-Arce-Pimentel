import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/legacy/image";
import { Users, Link as LinkIcon, Briefcase } from "lucide-react";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Comunidad de Exalumnos',
  description: 'Conéctese con la red de exalumnos de la U.E. Guido Arce Pimentel. Próximamente más funcionalidades.',
};

export default function ExalumnosPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary flex items-center justify-center">
            <Users className="mr-3 h-8 w-8" /> Comunidad de Exalumnos
          </CardTitle>
          <CardDescription className="text-lg max-w-2xl mx-auto">
            ¡Bienvenidos de nuevo, graduados de la U.E. Guido Arce Pimentel! Este espacio es para ustedes.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="my-8 relative h-64 md:h-80 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://placehold.co/800x400.png"
              alt="Grupo de exalumnos"
              layout="fill"
              objectFit="cover"
              data-ai-hint="alumni group"
            />
            <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center p-4 bg-black/60 rounded">Manteniendo Viva la Conexión</h2>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-4">
            Estamos trabajando en construir una plataforma vibrante para nuestra comunidad de exalumnos.
            Muy pronto, aquí podrás:
          </p>
          <ul className="list-disc list-inside inline-block text-left space-y-2 mb-8 text-foreground">
            <li>Conectarte con antiguos compañeros de clase.</li>
            <li>Enterarte de eventos y reuniones de exalumnos.</li>
            <li>Compartir tus logros profesionales y personales.</li>
            <li>Participar en programas de mentoría para estudiantes actuales.</li>
            <li>Acceder a noticias y oportunidades exclusivas.</li>
          </ul>

          <p className="text-lg text-muted-foreground mb-6">
            Mientras tanto, te invitamos a mantenerte en contacto a través de nuestras redes sociales y a actualizar tus datos si lo deseas.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="default" asChild>
              <Link href="/institucional/contacto?asunto=ActualizacionExalumno">
                <LinkIcon className="mr-2 h-5 w-5" /> Actualizar Mis Datos
              </Link>
            </Button>
            <Button size="lg" variant="outline" disabled> {/* Placeholder */}
              <Briefcase className="mr-2 h-5 w-5" /> Próximamente: Red Profesional
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
