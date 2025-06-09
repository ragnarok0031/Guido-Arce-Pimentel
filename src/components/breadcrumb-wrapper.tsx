"use client";

import { usePathname } from 'next/navigation';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export function BreadcrumbWrapper() {
    const pathname = usePathname();

    // No mostrar breadcrumbs en la página principal
    if (pathname === '/') return null;

    return <div className="container mx-auto px-4"><Breadcrumb /></div>;
} 