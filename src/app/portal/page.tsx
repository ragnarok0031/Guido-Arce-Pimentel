import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/legacy/image";
import { LayoutDashboard, UserCircle, ShieldCheck } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portal de Usuario',
  description: 'Acceso al portal personalizado para estudiantes, padres y personal de la U.E. Guido Arce Pimentel.',
};

export default function PortalPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12">
      <Card className="w-full max-w-md shadow-xl text-center">
        <CardHeader>
          <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center mb-4">
            <LayoutDashboard className="h-8 w-8" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Portal ArceConnect</CardTitle>
          <CardDescription className="text-lg">
            Su espacio personalizado en la comunidad educativa.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Image
            src="https://placehold.co/400x200.png"
            alt="Ilustración del portal"
            width={400}
            height={200}
            className="rounded-lg shadow-sm mx-auto object-cover"
            data-ai-hint="dashboard interface"
          />
          <p className="text-muted-foreground">
            Bienvenido al Portal de Usuarios. Esta sección está diseñada para ofrecerle acceso rápido a información relevante según su rol (estudiante, padre, docente o administrativo).
          </p>
          <p className="font-semibold text-foreground">
            Funcionalidades como consulta de notas, asistencia, horarios y comunicados personalizados estarán disponibles aquí próximamente.
          </p>

          <div className="space-y-3">
            <Button className="w-full" disabled> {/* Placeholder Login Button */}
              <UserCircle className="mr-2 h-5 w-5" /> Iniciar Sesión (Próximamente)
            </Button>
            <p className="text-xs text-muted-foreground flex items-center justify-center">
              <ShieldCheck className="h-3 w-3 mr-1" /> Su información está protegida.
            </p>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Estamos trabajando para brindarle la mejor experiencia. ¡Gracias por su paciencia!
          </p>
          <Button variant="outline" asChild>
            <Link href="/">Volver a la Página Principal</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
