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
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=120&h=120&auto=format&fit=crop',
    dataAiHint: 'woman smiling'
  },
  {
    id: 2,
    name: 'Carlos López',
    role: 'Exalumno (Promoción 2018)',
    roleIcon: GraduationCap,
    quote: 'La formación que recibí en Guido Arce Pimentel fue fundamental para mi carrera profesional. No solo adquirí conocimientos sólidos, sino también valores que me guían día a día. ¡Grandes recuerdos y agradecimiento eterno!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&h=120&auto=format&fit=crop',
    dataAiHint: 'man professional'
  },
  {
    id: 3,
    name: 'Sofía Vargas',
    role: 'Estudiante (10º Grado)',
    roleIcon: Users,
    quote: 'Me encanta mi colegio. Los profesores son geniales y siempre están dispuestos a ayudar. He hecho muchos amigos y participo en varias actividades extracurriculares que me ayudan a crecer.',
    image: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=120&h=120&auto=format&fit=crop',
    dataAiHint: 'teenager student'
  },
  {
    id: 4,
    name: 'Roberto Jiménez',
    role: 'Padre de Familia',
    roleIcon: User,
    quote: 'La calidad educativa es notable. Mi hija ha mejorado mucho académicamente y se siente motivada. Las instalaciones son adecuadas y el ambiente es seguro y acogedor.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&h=120&auto=format&fit=crop',
    dataAiHint: 'man happy'
  },
  {
    id: 5,
    name: 'Laura Méndez',
    role: 'Docente',
    roleIcon: User, // Could be a specific teacher icon if available
    quote: 'Es un privilegio trabajar en U.E. Guido Arce Pimentel. El compromiso con la excelencia y el bienestar de los estudiantes es genuino. Hay un gran espíritu de colaboración entre colegas.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&h=120&auto=format&fit=crop',
    dataAiHint: 'woman teacher'
  },
  {
    id: 6,
    name: 'Pedro Gómez',
    role: 'Exalumno (Promoción 2015)',
    roleIcon: GraduationCap,
    quote: 'Los valores y conocimientos que adquirí aquí me abrieron puertas en la universidad y en mi vida profesional. Siempre estaré agradecido con mis maestros y la institución.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=120&h=120&auto=format&fit=crop',
    dataAiHint: 'man young'
  },
];

export default function TestimoniosPage() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-red-black text-white py-12 rounded-lg shadow-lg mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Voces de Nuestra Comunidad</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conozca las experiencias de quienes forman parte de la gran familia Guido Arce Pimentel.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <Card key={testimonial.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-600 rounded-xl overflow-hidden">
            <CardContent className="pt-6 flex flex-col items-center text-center flex-grow">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-primary/20 shadow-md"
                  data-ai-hint={testimonial.dataAiHint}
                />
              </div>
              <h3 className="text-xl font-semibold text-brand-700">{testimonial.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <testimonial.roleIcon className="h-4 w-4 mr-1 text-brand-600" />
                {testimonial.role}
              </div>
              <div className="text-brand-600 text-3xl mb-2">❝</div>
              <blockquote className="text-sm text-gray-700 italic flex-grow">
                {testimonial.quote}
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
        <p className="text-lg">¿Quiere compartir su experiencia? <a href="/institucional/contacto" className="text-brand-600 hover:underline font-semibold">Contáctenos</a>.</p>
      </div>
    </div>
  );
}
