import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/legacy/image";
import { BookOpen, Users, Microscope, Palette, Music, Cpu, GraduationCap } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Oferta Educativa',
  description: 'Descubra la Educación Secundaria Comunitaria Productiva y las especializaciones que ofrece la U.E. Guido Arce Pimentel.',
};

const secondaryEducationProgram = {
  level: "Educación Secundaria Comunitaria Productiva",
  description: "La U.E. Guido Arce Pimentel se dedica a la formación integral de jóvenes en el nivel de Educación Secundaria Comunitaria Productiva. Este nivel tiene una duración de seis años, generalmente para estudiantes de 12 a 18 años, y está estructurado en dos ciclos: un ciclo de formación general (primeros cuatro años) y un ciclo de formación especializada y bachillerato (últimos dos años). Nuestro currículo combina una sólida base humanística con formación técnica y tecnológica, orientada a las vocaciones productivas y las necesidades locales, preparando a los estudiantes para el bachillerato, la continuación de estudios superiores y/o su inserción en el mundo laboral.",
  icon: GraduationCap,
  image: "https://placehold.co/600x350.png",
  dataAiHint: "teenagers studying",
  // detailsLink: "/oferta-educativa/secundaria", // No detail page for now as description is comprehensive
};

const specializations = [
  {
    name: "Bachillerato en Ciencias y Humanidades",
    description: "Una formación integral que prepara a los estudiantes para la educación superior en una amplia gama de disciplinas científicas y humanísticas.",
    icon: BookOpen,
    image: "https://placehold.co/350x200.png",
    dataAiHint: "science lab"
  },
  {
    name: "Bachillerato Técnico en Informática",
    description: "Especialización enfocada en el desarrollo de software, redes, mantenimiento de hardware y nuevas tecnologías de la información.",
    icon: Cpu,
    image: "https://placehold.co/350x200.png",
    dataAiHint: "computer programming"
  },
  {
    name: "Bachillerato Técnico en Artes Plásticas",
    description: "Fomenta la creatividad y las habilidades técnicas en diversas expresiones artísticas como pintura, escultura y diseño gráfico.",
    icon: Palette,
    image: "https://placehold.co/350x200.png",
    dataAiHint: "art studio"
  },
];


export default function ProgramasPage() {
  return (
    <div className="space-y-12">
      <section>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">Nuestra Oferta Educativa</CardTitle>
            <CardDescription className="text-lg">
              Comprometidos con la formación integral de nuestros jóvenes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src={secondaryEducationProgram.image}
                  alt={secondaryEducationProgram.level}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={secondaryEducationProgram.dataAiHint}
                />
              </div>
              <div className="md:w-1/2 space-y-3">
                <div className="flex items-center mb-2">
                  <secondaryEducationProgram.icon className="h-8 w-8 mr-3 text-accent" />
                  <h3 className="text-2xl font-semibold text-primary">{secondaryEducationProgram.level}</h3>
                </div>
                <p className="text-muted-foreground text-justify">{secondaryEducationProgram.description}</p>
                {/* secondaryEducationProgram.detailsLink && (
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link href={secondaryEducationProgram.detailsLink}>Más Detalles</Link>
                  </Button>
                )*/}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">Especializaciones de Bachillerato</CardTitle>
            <CardDescription className="text-lg">
              Preparamos a nuestros estudiantes para el futuro con enfoques técnicos y humanísticos.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <Card key={index} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={spec.image}
                    alt={spec.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={spec.dataAiHint}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <spec.icon className="h-6 w-6 mr-2 text-accent" />
                    <CardTitle className="text-lg">{spec.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{spec.description}</p>
                </CardContent>
                <CardContent>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <Link href={`/oferta-educativa/especializacion/${spec.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      Conocer Plan de Estudio
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
