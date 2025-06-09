"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, Calendar } from "@/components/ui";
import Image from "next/legacy/image";
import { CalendarDays, CheckCircle, AlertTriangle } from "lucide-react";
// import type { Metadata } from 'next'; // Metadata should be in a Server Component (e.g., layout.tsx) if this is a Client Component
import { es } from 'date-fns/locale'; // Import Spanish locale

// export const metadata: Metadata = { // If this page is "use client", metadata should be in layout.tsx or a parent server component
//   title: 'Calendario Académico',
//   description: 'Consulte el calendario académico oficial de la U.E. Guido Arce Pimentel con fechas importantes, feriados y eventos.',
// };

const importantDates = [
  { date: "2024-08-15", event: "Inicio del Año Escolar", type: "Academico" },
  { date: "2024-09-20", event: "Feria de Ciencias", type: "Evento" },
  { date: "2024-10-05", event: "Día del Maestro (Asueto)", type: "Feriado" },
  { date: "2024-11-15", event: "Entrega de Calificaciones - Primer Parcial", type: "Academico" },
  { date: "2024-12-20", event: "Inicio de Vacaciones de Navidad", type: "Feriado" },
  { date: "2025-01-06", event: "Reinicio de Clases", type: "Academico" },
  { date: "2025-02-28", event: "Exámenes Finales - Segundo Parcial", type: "Academico" },
  { date: "2025-03-15", event: "Acto de Graduación", type: "Evento" },
];

export default function CalendarioPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary flex items-center justify-center">
            <CalendarDays className="mr-3 h-8 w-8" /> Calendario Académico
          </CardTitle>
          <CardDescription className="text-lg">
            Planifique su año con nuestro calendario oficial. Aquí encontrará todas las fechas clave.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Interactive Calendar */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Calendario Interactivo</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            {/* This calendar is for display; events are not dynamically marked. For a real app, this would need more logic. */}
            <Calendar
              mode="single"
              locale={es} // Set the locale to Spanish
              // selected={new Date()} // Example: select today's date
              className="rounded-md border"
            />
          </CardContent>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Este es un calendario de referencia. Para eventos específicos, consulte la lista de "Fechas Importantes".
            </p>
          </CardContent>
        </Card>

        {/* Important Dates List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">Fechas Importantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 max-h-[600px] overflow-y-auto">
            {importantDates.map(item => (
              <div key={item.event} className="p-3 border rounded-lg flex items-start">
                {item.type === "Feriado" ?
                  <AlertTriangle className="h-5 w-5 mr-3 mt-1 text-destructive flex-shrink-0" /> :
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-green-600 flex-shrink-0" />
                }
                <div>
                  <p className="font-semibold">{item.event}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(item.date + 'T00:00:00').toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} - {item.type}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Placeholder for image/graphic */}
      <Card className="mt-8">
        <CardContent className="pt-6">
          <Image
            src="https://placehold.co/1000x300.png?text=Eventos+Destacados+del+Año"
            alt="Banner de eventos escolares"
            width={1000}
            height={300}
            className="rounded-lg shadow-md mx-auto object-cover"
            data-ai-hint="school events banner"
          />
        </CardContent>
      </Card>
    </div>
  );
}
