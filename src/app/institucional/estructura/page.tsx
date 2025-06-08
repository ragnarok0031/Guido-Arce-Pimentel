import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/legacy/image";
import { Users, Briefcase, ShieldCheck } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estructura Organizativa',
  description: 'Conozca la estructura organizativa y los principales departamentos de la U.E. Guido Arce Pimentel.',
};

const departments = [
  { name: "Dirección General",负责人: "Lic. Nombre Apellido", icon: Briefcase, description: "Encargada de la gestión global y representación de la institución." },
  { name: "Subdirección Académica",负责人: "MSc. Nombre Apellido", icon: Briefcase, description: "Coordina los planes de estudio, el personal docente y el rendimiento académico." },
  { name: "Subdirección Administrativa",负责人: "Ing. Nombre Apellido", icon: Briefcase, description: "Gestiona los recursos financieros, humanos y materiales de la escuela." },
  { name: "Secretaría General",负责人: "Sra. Nombre Apellido", icon: ShieldCheck, description: "Responsable de la documentación oficial, matrículas y archivos." },
  { name: "Departamento de Orientación Estudiantil",负责人: "Psic. Nombre Apellido", icon: Users, description: "Brinda apoyo psicológico y vocacional a los estudiantes." },
  { name: "Coordinación de Convivencia Escolar",负责人: "Lic. Nombre Apellido", icon: ShieldCheck, description: "Promueve un ambiente escolar seguro y respetuoso." },
];

export default function EstructuraPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary flex items-center">
            <Users className="mr-3 h-8 w-8" /> Estructura Organizativa
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">
            La U.E. Guido Arce Pimentel cuenta con una estructura organizativa diseñada para asegurar una gestión eficiente y un ambiente propicio para el aprendizaje. Nuestro organigrama refleja la distribución de responsabilidades y la coordinación entre los diferentes niveles y departamentos.
          </p>
          
          <div className="my-6 p-4 border rounded-lg bg-muted/30">
            <h3 className="text-xl font-semibold mb-4 text-primary">Organigrama Institucional</h3>
            <Image 
              src="https://placehold.co/900x500.png?text=Organigrama+Institucional" 
              alt="Organigrama de la U.E. Guido Arce Pimentel" 
              width={900} 
              height={500} 
              className="rounded-md shadow-sm mx-auto"
              data-ai-hint="organization chart" 
            />
            <p className="text-center text-sm text-muted-foreground mt-2">Diagrama de la estructura jerárquica y funcional de la institución.</p>
          </div>

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Principales Departamentos y Responsables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Card key={dept.name} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <dept.icon className="mr-2 h-5 w-5 text-accent" /> {dept.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-muted-foreground">Responsable: {dept.负责人}</p>
                  <p className="text-sm mt-1">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-lg mt-6">
            Cada departamento trabaja en estrecha colaboración para cumplir con los objetivos institucionales y brindar el mejor servicio a nuestra comunidad educativa. La comunicación fluida y el trabajo en equipo son pilares fundamentales de nuestra gestión.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
