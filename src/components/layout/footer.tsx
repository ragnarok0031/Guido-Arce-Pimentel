import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent-900 text-white">
      {/* Footer principal con información de contacto y enlaces */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e información */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 bg-white rounded-full p-1">
                <Image
                  src="/Logogap.png"
                  alt="Logo U.E. Guido Arce Pimentel"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 48px, 48px"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">ArceConnect</h2>
                <p className="text-sm text-gray-300">U.E. Guido Arce Pimentel</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Educando con valores, formando el futuro de nuestra sociedad desde 1978.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/institucional/historia"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link
                  href="/institucional/mision-vision"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Misión y Visión
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias-eventos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Noticias y Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/oferta-educativa/admision"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Admisiones
                </Link>
              </li>
              <li>
                <Link
                  href="/institucional/contacto"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Av. Principal, Ciudad Guayana, Venezuela
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-400 flex-shrink-0" />
                <span className="text-gray-300">(+58) 286-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-400 flex-shrink-0" />
                <a
                  href="mailto:contacto@arceschool.edu.ve"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contacto@arceschool.edu.ve
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios y Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <div className="mb-4">
              <p className="text-gray-300">Lunes a Viernes</p>
              <p className="font-medium">7:00 AM - 3:00 PM</p>
            </div>

            <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-700 hover:bg-brand-600 text-white p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-700 hover:bg-brand-600 text-white p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-700 hover:bg-brand-600 text-white p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright y política de privacidad */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center md:text-left">
            &copy; {currentYear} U.E. Guido Arce Pimentel. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link
              href="/politica-privacidad"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos-servicio"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
