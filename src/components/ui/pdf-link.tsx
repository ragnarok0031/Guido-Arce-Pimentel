import Link from 'next/link';
import { FileText } from 'lucide-react';
import { Button } from './button';
import { withSuppressHydration } from './icon-wrapper';

// Envolver los iconos con el wrapper para suprimir advertencias de hidratación
const SafeFileText = withSuppressHydration(FileText);

interface PDFLinkProps {
    href: string;
    fileName: string;
    description?: string;
    variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
}

export function PDFLink({ href, fileName, description, variant = 'outline' }: PDFLinkProps) {
    return (
        <div className="flex flex-col">
            <Button
                variant={variant}
                className="flex items-center gap-2 w-fit"
                asChild
            >
                <Link href={href} target="_blank" rel="noopener noreferrer">
                    <SafeFileText className="h-4 w-4" />
                    <span>{fileName}</span>
                </Link>
            </Button>
            {description && (
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
        </div>
    );
} 