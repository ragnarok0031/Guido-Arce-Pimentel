import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/legacy/image";
import { Quote, User, Users, GraduationCap } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonios de la Comunidad',
  description: 'Lea las experiencias y historias de éxito de estudiantes, padres y exalumnos de la U.E. Guido Arce Pimentel.',
};

const testimonials = [
  { 
    id: 1, 
    name: 'Ana Pérez', 
    role: 'Madre de Familia', 
    roleIcon: User,
    quote: 'Excelente institución, mis hijos están felices y aprendiendo mucho. Los profesores son muy dedicados y la comunicación con los padres es constante y efectiva. Recomiendo totalmente la U.E. Guido Arce Pimentel.', 
    image: 'https://placehold.co/120x120.png?text=AP',
    dataAiHint: 'woman smiling'
  },
  { 
    id: 2, 
    name: 'Carlos López', 
    role: 'Exalumno (Promoción 2018)', 
    roleIcon: GraduationCap,
    quote: 'La formación que recibí en Guido Arce Pimentel fue fundamental para mi carrera profesional. No solo adquirí conocimientos sólidos, sino también valores que me guían día a día. ¡Grandes recuerdos y agradecimiento eterno!', 
    image: 'https://placehold.co/120x120.png?text=CL',
    dataAiHint: 'man professional'
  },
  { 
    id: 3, 
    name: 'Sofía Vargas', 
    role: 'Estudiante (10º Grado)', 
    roleIcon: Users,
    quote: 'Me encanta mi colegio. Los profesores son geniales y siempre están dispuestos a ayudar. He hecho muchos amigos y participo en varias actividades extracurriculares que me ayudan a crecer.', 
    image: 'https://placehold.co/120x120.png?text=SV',
    dataAiHint: 'teenager student'
  },
  { 
    id: 4, 
    name: 'Roberto Jiménez', 
    role: 'Padre de Familia', 
    roleIcon: User,
    quote: 'La calidad educativa es notable. Mi hija ha mejorado mucho académicamente y se siente motivada. Las instalaciones son adecuadas y el ambiente es seguro y acogedor.', 
    image: 'https://placehold.co/120x120.png?text=RJ',
    dataAiHint: 'man happy'
  },
  { 
    id: 5, 
    name: 'Laura Méndez', 
    role: 'Docente', 
    roleIcon: User, // Could be a specific teacher icon if available
    quote: 'Es un privilegio trabajar en U.E. Guido Arce Pimentel. El compromiso con la excelencia y el bienestar de los estudiantes es genuino. Hay un gran espíritu de colaboración entre colegas.', 
    image: 'https://placehold.co/120x120.png?text=LM',
    dataAiHint: 'woman teacher'
  },
  { 
    id: 6, 
    name: 'Pedro Gómez', 
    role: 'Exalumno (Promoción 2015)', 
    roleIcon: GraduationCap,
    quote: 'Los valores y conocimientos que adquirí aquí me abrieron puertas en la universidad y en mi vida profesional. Siempre estaré agradecido con mis maestros y la institución.', 
    image: 'https://placehold.co/120x120.png?text=PG',
    dataAiHint: 'man young'
  },
];

export default function TestimoniosPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">Voces de Nuestra Comunidad</CardTitle>
          <CardDescription className="text-lg">
            Conozca las experiencias de quienes forman parte de la gran familia Guido Arce Pimentel.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <Card key={testimonial.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6 flex flex-col items-center text-center flex-grow">
              <Image 
                src={testimonial.image} 
                alt={testimonial.name} 
                width={100} 
                height={100} 
                className="rounded-full mb-4 border-4 border-primary/20 shadow-md"
                data-ai-hint={testimonial.dataAiHint} 
              />
              <h3 className="text-xl font-semibold text-primary">{testimonial.name}</h3>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <testimonial.roleIcon className="h-4 w-4 mr-1" />
                {testimonial.role}
              </div>
              <Quote className="h-8 w-8 text-accent/50 mb-2" />
              <blockquote className="text-sm text-foreground italic flex-grow">
                "{testimonial.quote}"
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="text-center mt-8">
        <p className="text-lg">¿Quiere compartir su experiencia? <a href="/institucional/contacto" className="text-accent hover:underline font-semibold">Contáctenos</a>.</p>
      </div>
    </div>
  );
}
