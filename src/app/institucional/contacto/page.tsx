import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import Image from "next/legacy/image";
import { MapPin, Phone, Mail } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Póngase en contacto con la U.E. Guido Arce Pimentel. Encuentre nuestra dirección, teléfono y formulario de contacto.',
};

export default function ContactoPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Contáctenos</CardTitle>
          <CardDescription className="text-lg">
            Estamos aquí para ayudarle. Complete el formulario o utilice nuestros datos de contacto.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary">Enviar un Mensaje</h3>
              <ContactForm />
            </div>

            {/* Contact Info and Map */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary">Información de Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Dirección:</p>
                    <p>Calle Ficticia 123, Sector Educativo,</p>
                    <p>Ciudad Capital, Provincia Ejemplo, País Imaginario</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Teléfono:</p>
                    <p>(+00) 123-456-7890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Correo Electrónico:</p>
                    <p>info@guidarcepimentel.edu.imag</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2 text-primary">Nuestra Ubicación</h4>
                <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-sm">
                  {/* Placeholder for map. In a real app, use @vis.gl/react-google-maps or similar */}
                  <Image 
                    src="https://placehold.co/600x400.png?text=Mapa+de+Ubicación" 
                    alt="Mapa de ubicación de la escuela" 
                    width={600} 
                    height={400} 
                    className="object-cover w-full h-full"
                    data-ai-hint="map location"
                  />
                </div>
                 <p className="text-sm text-muted-foreground mt-2">Horario de atención: Lunes a Viernes, 8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
