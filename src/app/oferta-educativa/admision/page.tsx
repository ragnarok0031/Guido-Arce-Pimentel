import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/legacy/image";
import { FileText, UserPlus, CalendarCheck, HelpCircle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proceso de Admisión',
  description: 'Información sobre el proceso de admisión, requisitos y fechas importantes para unirse a la U.E. Guido Arce Pimentel.',
};

const admissionSteps = [
  {
    step: 1,
    title: "Consulta de Información",
    description: "Explore nuestro sitio web y conozca nuestra propuesta educativa. Visite la sección de 'Oferta Educativa' para más detalles.",
    icon: HelpCircle
  },
  {
    step: 2,
    title: "Periodo de Postulación",
    description: "Las postulaciones se abren generalmente en [Mes de inicio de postulación]. Esté atento a las fechas publicadas en la sección de 'Noticias y Eventos'.",
    icon: CalendarCheck
  },
  {
    step: 3,
    title: "Entrega de Documentos",
    description: "Prepare y presente la documentación requerida. Usualmente incluye: partida de nacimiento, certificado de notas, fotos, etc. La lista completa estará disponible durante el periodo de postulación.",
    icon: FileText
  },
  {
    step: 4,
    title: "Evaluación y Entrevista",
    description: "Dependiendo del nivel, podría haber una evaluación diagnóstica y/o una entrevista con el estudiante y sus representantes.",
    icon: UserPlus
  },
  {
    step: 5,
    title: "Publicación de Resultados y Matrícula",
    description: "Los resultados serán comunicados en las fechas establecidas. De ser admitido, se procederá con el proceso de matrícula.",
    icon: CalendarCheck
  },
];

const requiredDocuments = [
  "Formulario de solicitud de admisión debidamente completado.",
  "Copia de la partida de nacimiento del estudiante.",
  "Certificados de estudios de los últimos dos años (si aplica).",
  "Fotografías tamaño carnet recientes.",
  "Copia de cédula de identidad de los padres o representantes.",
  "Certificado de buena conducta del colegio anterior (si aplica).",
  "Constancia de no adeudo del colegio anterior (si aplica).",
];

export default function AdmisionPage() {
  return (
    <div className="space-y-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">Proceso de Admisión</CardTitle>
          <CardDescription className="text-lg max-w-2xl mx-auto">
            ¡Gracias por su interés en formar parte de la familia Guido Arce Pimentel! Aquí encontrará la información necesaria para el proceso de admisión.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-8 relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
            <Image
              src="https://placehold.co/1000x400.png"
              alt="Estudiantes sonrientes"
              layout="fill"
              objectFit="cover"
              data-ai-hint="happy students"
            />
            <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white text-center p-4 bg-black/50 rounded">Únete a Nuestra Comunidad Educativa</h2>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary">Pasos para la Admisión</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {admissionSteps.map(item => (
            <div key={item.step} className="flex items-start p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 flex items-center"><item.icon className="h-5 w-5 mr-2 text-primary" /> {item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
          <p className="text-sm text-muted-foreground pt-4">
            <strong>Nota:</strong> Las fechas y requisitos específicos pueden variar. Por favor, consulte siempre la información oficial publicada para el ciclo de admisión correspondiente o contáctenos.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary">Requisitos y Documentación</CardTitle>
          <CardDescription>Documentos generalmente requeridos para la postulación (sujetos a confirmación para cada ciclo):</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {requiredDocuments.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="text-center space-y-4">
        <p className="text-lg">
          ¿Tiene preguntas sobre el proceso de admisión?
        </p>
        <Button size="lg" variant="default" asChild>
          <Link href="/institucional/contacto">
            Contactar Oficina de Admisiones
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/institucional/faq">
            Ver Preguntas Frecuentes
          </Link>
        </Button>
      </div>
    </div>
  );
}
