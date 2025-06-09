import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import Image from "next/legacy/image";
import { MapPin, Phone, Mail, Clock, Users, School } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - U.E. Guido Arce Pimentel',
  description: 'Póngase en contacto con la U.E. Guido Arce Pimentel. Encuentre nuestra dirección, teléfono y formulario de contacto.',
};

export default function ContactoPage() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-red-black text-white py-12 rounded-lg shadow-lg mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contáctenos</h1>
          <p className="text-xl max-w-3xl">
            Estamos aquí para responder sus consultas y brindarle la información que necesita sobre nuestra institución educativa.
          </p>
        </div>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">Información de Contacto</CardTitle>
          <CardDescription className="text-lg">
            Utilice cualquiera de nuestros canales de comunicación o visite nuestras instalaciones.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary">Enviar un Mensaje</h3>
              <ContactForm />
              <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">Horarios de Atención</h4>
                <div className="flex items-center text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mr-2 text-brand-600" />
                  <span>Lunes a Viernes: 7:00 AM - 3:00 PM</span>
                </div>
                <p className="text-sm text-gray-500">
                  Nos esforzamos por responder todas las consultas dentro de las 24-48 horas hábiles.
                </p>
              </div>
            </div>

            {/* Contact Info and Map */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 mt-1 text-brand-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Dirección:</p>
                    <p>Comunidad Los Negros, Provincia Florida</p>
                    <p>Santa Cruz, Bolivia</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-brand-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Teléfono:</p>
                    <p>(+591) 3-9226234</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-brand-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Correo Electrónico:</p>
                    <p>info@guidoarcepimentel.edu.bo</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-brand-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Admisiones:</p>
                    <p>admisiones@guidoarcepimentel.edu.bo</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <School className="h-5 w-5 mr-3 text-brand-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Dirección Académica:</p>
                    <p>direccion@guidoarcepimentel.edu.bo</p>
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
                <div className="flex items-center mt-2">
                  <Clock className="h-4 w-4 mr-2 text-brand-600" />
                  <p className="text-sm text-gray-600">Horario de atención: Lunes a Viernes, 7:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">Preguntas Frecuentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">¿Cómo puedo solicitar información sobre admisiones?</h4>
              <p className="text-gray-600 mt-1">
                Puede contactarnos a través del formulario en esta página, llamar directamente a nuestro número telefónico, o enviar un correo a admisiones@guidoarcepimentel.edu.bo.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">¿Cuál es el proceso para agendar una visita a la institución?</h4>
              <p className="text-gray-600 mt-1">
                Las visitas deben ser programadas con al menos 48 horas de anticipación. Puede solicitar una cita llamando a nuestro número principal o enviando un correo electrónico.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">¿Dónde puedo encontrar información sobre el calendario académico?</h4>
              <p className="text-gray-600 mt-1">
                El calendario académico actualizado está disponible en la sección de <a href="/noticias-eventos/calendario" className="text-brand-600 hover:underline">Calendario Académico</a> de nuestro sitio web.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
