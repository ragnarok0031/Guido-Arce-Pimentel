"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, Search, Moon, Sun, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Definir los tipos para los enlaces de navegación
type NavChild = {
  label: string;
  href: string;
};

type NavLinkItem = {
  label: string;
  children: NavChild[];
};

// Datos de navegación
const navLinks: NavLinkItem[] = [
  {
    label: 'Nuestra Escuela',
    children: [
      { label: 'Historia', href: '/institucional/historia' },
      { label: 'Misión y Visión', href: '/institucional/mision-vision' },
      { label: 'Estructura', href: '/institucional/estructura' },
      { label: 'Logros y Reconocimientos', href: '/institucional/logros' },
    ],
  },
  {
    label: 'Académico',
    children: [
      { label: 'Oferta Educativa', href: '/oferta-educativa/programas' },
      { label: 'Admisiones', href: '/oferta-educativa/admision' },
      { label: 'Recursos Educativos', href: '/recursos' },
      { label: 'Documentos', href: '/documentos' },
    ],
  },
  {
    label: 'Vida Escolar',
    children: [
      { label: 'Noticias y Eventos', href: '/noticias-eventos' },
      { label: 'Calendario Académico', href: '/noticias-eventos/calendario' },
      { label: 'Horarios', href: '/horarios' },
    ]
  },
  {
    label: 'Comunidad',
    children: [
      { label: 'Testimonios', href: '/testimonios' },
      { label: 'Exalumnos', href: '/comunidad/exalumnos' },
    ],
  },
  {
    label: 'Contacto',
    children: [
      { label: 'Preguntas Frecuentes', href: '/institucional/faq' },
      { label: 'Contacto', href: '/institucional/contacto' },
    ],
  },
];

// Componente del encabezado
export function Header() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Efecto para evitar problemas de hidratación con next-themes
  useEffect(() => {
    setMounted(true);
  }, []);

  // Manejador de clic en el logo
  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled
        ? "bg-gradient-red-black text-white shadow-md"
        : "bg-gradient-red-black text-white"
    )}>
      {/* Barra superior con información de contacto */}
      <div className="hidden md:block bg-accent-900 text-white py-1.5">
        <div className="container mx-auto px-4 flex justify-between text-xs">
          <div className="flex items-center space-x-4">
            <span>Teléfono: (+591) 3-9226234</span>
            <span>Email: info@guidoarcepimentel.edu.bo</span>
            <span>Horario: Lun-Vie 7:00-15:00</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/oferta-educativa/admision" className="hover:underline">
              Admisiones
            </Link>
            <Link href="/institucional/contacto" className="hover:underline">
              Contacto
            </Link>
            <Link href="/portal" className="hover:underline font-medium">
              Portal Educativo
            </Link>
          </div>
        </div>
      </div>

      {/* Barra de navegación principal */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleLogoClick();
              }
            }}
          >
            <div className="relative h-10 w-10 md:h-12 md:w-12 bg-white rounded-full p-1 shadow-sm">
              <Image
                src="/Logogap.png"
                alt="Escudo U.E. Guido Arce Pimentel"
                className="object-contain"
                fill
                priority
                sizes="(max-width: 640px) 40px, 48px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight">
                ArceConnect
              </span>
              <span className="text-xs md:text-sm opacity-90 hidden sm:block">
                U.E. Guido Arce Pimentel
              </span>
            </div>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavItem key={link.label} link={link} />
            ))}
          </nav>

          {/* Acciones del header */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Búsqueda */}
            <button
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Selector de tema */}
            {mounted && (
              <button
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            )}

            {/* Iniciar sesión */}
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "hidden md:flex",
                "border-white text-white hover:bg-white/10"
              )}
            >
              Iniciar Sesión
            </Button>

            {/* Menú móvil */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Abrir menú"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
                <SheetHeader className={cn(
                  "p-4 border-b",
                  "bg-gradient-red-black text-white"
                )}>
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 bg-white rounded-full p-1">
                      <Image
                        src="/Logogap.png"
                        alt="Escudo U.E."
                        className="object-contain"
                        fill
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">ArceConnect</h3>
                      <p className="text-xs text-gray-200">U.E. Guido Arce Pimentel</p>
                    </div>
                  </div>
                </SheetHeader>
                <div className="py-4 overflow-auto">
                  <div className="px-4 mb-6">
                    <Input
                      type="search"
                      placeholder="Buscar..."
                      className="w-full"
                    />
                  </div>
                  <div className="px-2">
                    {navLinks.map((section) => (
                      <div key={section.label} className="mb-4">
                        <h3 className="px-3 mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          {section.label}
                        </h3>
                        <ul>
                          {section.children.map((item) => (
                            <li key={item.label}>
                              <SheetClose asChild>
                                <Link
                                  href={item.href}
                                  className="flex px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                  {item.label}
                                </Link>
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 px-4 pt-6 border-t">
                    <Button className="w-full mb-3">
                      Iniciar Sesión
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                      {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
                      {theme === 'dark' ? (
                        <Sun className="ml-2 h-4 w-4" />
                      ) : (
                        <Moon className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

// Componente de elemento de navegación
function NavItem({ link }: { link: NavLinkItem }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="px-3 py-2 text-sm font-medium flex items-center gap-1 rounded-md hover:bg-white/10 transition-colors focus:outline-none"
          aria-label={`Menú de ${link.label}`}
        >
          {link.label}
          <ChevronDown className="h-4 w-4 opacity-70" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-56 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-1 z-50 animate-in fade-in-50 border border-gray-200 dark:border-gray-800">
        <DropdownMenuLabel className="text-gray-500 dark:text-gray-400 font-medium">
          {link.label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
        {link.children.map((child) => (
          <DropdownMenuItem key={child.label} asChild>
            <Link
              href={child.href}
              className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 w-full transition-colors"
            >
              <span className="truncate">{child.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
