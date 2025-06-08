import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/legacy/image";
import { Award, TrendingUp, Star } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logros y Reconocimientos',
  description: 'Conozca los logros, premios y reconocimientos de la U.E. Guido Arce Pimentel y su comunidad.',
};

const achievements = [
  {
    year: 2023,
    title: "Campeones Regionales de Debate",
    description: "Nuestro equipo de debate obtuvo el primer lugar en el torneo regional, demostrando excelencia en argumentación y oratoria.",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "debate team",
    icon: Award,
  },
  {
    year: 2023,
    title: "Mejor Puntaje Distrital en Pruebas Nacionales",
    description: "Los estudiantes de último año lograron el promedio más alto del distrito en las pruebas estandarizadas nacionales.",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "students studying",
    icon: TrendingUp,
  },
  {
    year: 2022,
    title: "Reconocimiento por Proyecto Ecológico Innovador",
    description: "El proyecto 'Guardianes del Planeta' recibió un reconocimiento especial por su impacto y creatividad en la conservación ambiental.",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "eco project",
    icon: Star,
  },
  {
    year: 2022,
    title: "Ganadores del Concurso de Arte Escolar",
    description: "Nuestros talentosos artistas destacaron en el concurso de arte, obteniendo múltiples premios en diversas categorías.",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "art students",
    icon: Award,
  },
];

export default function LogrosPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary flex items-center">
            <Award className="mr-3 h-8 w-8" /> Logros y Reconocimientos
          </CardTitle>
          <CardDescription className="text-lg">
            En la U.E. Guido Arce Pimentel, celebramos los éxitos de nuestros estudiantes, docentes y de la institución en su conjunto. Estos son algunos de nuestros orgullos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((logro, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image 
                    src={logro.image} 
                    alt={logro.title} 
                    layout="fill" 
                    objectFit="cover"
                    data-ai-hint={logro.dataAiHint}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{logro.title}</CardTitle>
                    <logro.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardDescription>{logro.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{logro.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-lg mt-8 text-center">
            Estos son solo algunos ejemplos del talento y la dedicación que caracterizan a nuestra comunidad educativa. ¡Seguimos trabajando para alcanzar nuevas metas!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
