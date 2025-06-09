"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
    homeElement?: React.ReactNode;
    separator?: React.ReactNode;
    containerClasses?: string;
    listClasses?: string;
    activeItemClasses?: string;
    inactiveItemClasses?: string;
}

export function Breadcrumb({
    homeElement = <Home className="h-4 w-4" />,
    separator = <ChevronRight className="h-4 w-4" />,
    containerClasses = "flex items-center text-sm text-text-light-secondary dark:text-text-dark-secondary py-3",
    listClasses = "flex items-center space-x-2",
    activeItemClasses = "font-medium text-brand-600 dark:text-brand-400",
    inactiveItemClasses = "hover:text-brand-600 dark:hover:text-brand-400 transition-colors",
}: BreadcrumbProps) {
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path);

    // Mapeo de rutas a nombres más legibles
    const pathMapping: Record<string, string> = {
        "institucional": "Institucional",
        "historia": "Historia",
        "mision-vision": "Misión y Visión",
        "estructura": "Estructura",
        "logros": "Logros y Reconocimientos",
        "contacto": "Contacto",
        "faq": "Preguntas Frecuentes",
        "oferta-educativa": "Oferta Educativa",
        "programas": "Programas",
        "admision": "Admisión",
        "recursos": "Recursos",
        "documentos": "Documentos",
        "noticias-eventos": "Noticias y Eventos",
        "calendario": "Calendario",
        "horarios": "Horarios",
        "comunidad": "Comunidad",
        "exalumnos": "Exalumnos",
        "testimonios": "Testimonios",
        "portal": "Portal Educativo",
    };

    return (
        <nav aria-label="Breadcrumb" className={containerClasses}>
            <ol className={listClasses}>
                <li className="flex items-center">
                    <Link href="/" className={inactiveItemClasses} aria-label="Inicio">
                        {homeElement}
                    </Link>
                </li>

                {pathNames.length > 0 && (
                    <li className="flex items-center">
                        <span className="mx-2 text-text-light-tertiary dark:text-text-dark-tertiary" aria-hidden="true">
                            {separator}
                        </span>
                    </li>
                )}

                {pathNames.map((name, index) => {
                    const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathNames.length - 1;
                    const displayName = pathMapping[name] || name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " ");

                    return (
                        <React.Fragment key={name}>
                            <li className="flex items-center">
                                {isLast ? (
                                    <span className={activeItemClasses} aria-current="page">
                                        {displayName}
                                    </span>
                                ) : (
                                    <Link href={routeTo} className={inactiveItemClasses}>
                                        {displayName}
                                    </Link>
                                )}
                            </li>
                            {!isLast && (
                                <li className="flex items-center">
                                    <span className="mx-2 text-text-light-tertiary dark:text-text-dark-tertiary" aria-hidden="true">
                                        {separator}
                                    </span>
                                </li>
                            )}
                        </React.Fragment>
                    );
                })}
            </ol>
        </nav>
    );
} 