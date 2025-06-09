import { Breadcrumb } from '@/components/ui/breadcrumb';

export default function InternalPagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container mx-auto px-4 py-4 md:py-6">
            <Breadcrumb />
            {children}
        </div>
    );
} 