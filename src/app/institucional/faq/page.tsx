
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes (FAQ)',
  description: 'Encuentre respuestas a las preguntas más comunes sobre la U.E. Guido Arce Pimentel.',
};

const faqItems = [
  {
    question: "¿Cuál es el proceso de admisión?",
    answer: "El proceso de admisión generalmente se abre en [Mes]. Requiere completar un formulario en línea, presentar la documentación solicitada (certificado de nacimiento, notas anteriores, etc.) y, en algunos casos, una entrevista o examen de admisión. Consulte la sección de 'Admisiones' para detalles actualizados.",
  },
  {
    question: "¿Qué niveles educativos ofrece la escuela?",
    answer: "La U.E. Guido Arce Pimentel ofrece exclusivamente Educación Secundaria Comunitaria Productiva. Este nivel tiene una duración de seis años (generalmente para estudiantes de 12 a 18 años), culminando con el bachillerato y ofreciendo especializaciones tanto humanísticas como técnicas.",
  },
  {
    question: "¿Cuáles son los horarios de clase?",
    answer: "Los horarios para Educación Secundaria son generalmente de [Hora Inicio] a [Hora Fin]. Se publican horarios detallados al inicio de cada año escolar y pueden variar ligeramente según el curso y especialización.",
  },
  {
    question: "¿Qué actividades extracurriculares se ofrecen?",
    answer: "Ofrecemos una variedad de actividades extracurriculares, incluyendo clubes de deportes (fútbol, baloncesto, voleibol), arte, música, debate, y más. La oferta puede variar cada año y está diseñada para complementar la formación integral de nuestros estudiantes de secundaria.",
  },
  {
    question: "¿Cómo puedo contactar a un docente?",
    answer: "Puede contactar a los docentes a través del portal de padres/estudiantes (si está implementado), por correo electrónico institucional (generalmente nombre.apellido@guidarcepimentel.edu), o solicitando una cita a través de la secretaría del colegio.",
  },
  {
    question: "¿Cuál es la política de uniformes?",
    answer: "Sí, contamos con un uniforme escolar obligatorio para nuestros estudiantes de secundaria. Los detalles sobre el uniforme diario y el de educación física se proporcionan en el manual del estudiante y en la secretaría.",
  },
  {
    question: "¿Cómo se maneja la comunicación entre la escuela y los padres?",
    answer: "Utilizamos múltiples canales: este sitio web (sección de noticias y circulares), correos electrónicos, reuniones de padres y maestros, y el portal ArceConnect para comunicaciones específicas. En caso de emergencias, se contactará telefónicamente.",
  },
];

export default function FaqPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary flex items-center">
            <HelpCircle className="mr-3 h-8 w-8" /> Preguntas Frecuentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg hover:no-underline text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground text-left">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-8 text-lg">
            ¿No encontró respuesta a su pregunta? Por favor, <a href="/institucional/contacto" className="text-accent hover:underline font-semibold">contáctenos</a> directamente.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
