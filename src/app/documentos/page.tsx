import { PDFLink } from "@/components/ui/pdf-link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { withSuppressHydration } from '@/components/ui/icon-wrapper';

// Envolver los iconos con el wrapper para suprimir advertencias de hidratación
const SafeFileText = withSuppressHydration(FileText);
const SafeDownload = withSuppressHydration(Download);
const SafeEye = withSuppressHydration(Eye);

export const metadata = {
    title: "Documentos - ArceConnect",
    description: "Documentos institucionales de la Unidad Educativa",
};

export default function DocumentosPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Documentos Institucionales</h1>

            {/* Sección destacada para Historia de Guido Arce Pimentel */}
            <div className="mb-10 bg-accent/10 p-6 rounded-lg border border-accent">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Historia de Guido Arce Pimentel</h2>
                <p className="mb-4 text-muted-foreground">
                    Conozca la inspiradora historia de Guido Arce Pimentel, figura emblemática que da nombre a nuestra institución
                    y cuyo legado continúa inspirando a nuestra comunidad educativa.
                </p>
                <div className="flex space-x-4">
                    <Button variant="default" asChild>
                        <Link href="/documents/Historia de Guido Arce Pimentel .docx" download>
                            <SafeDownload className="h-4 w-4 mr-2" />
                            Descargar documento
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="#historia-gap">
                            Ver más información
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-card border rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <SafeFileText className="h-5 w-5 text-primary" />
                        Reglamento Interno
                    </h2>

                    <Tabs defaultValue="download" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger value="download" className="flex items-center gap-1">
                                <SafeDownload className="h-4 w-4" />
                                <span>Descargar</span>
                            </TabsTrigger>
                            <TabsTrigger value="view" className="flex items-center gap-1">
                                <SafeEye className="h-4 w-4" />
                                <span>Ver</span>
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="download">
                            <PDFLink
                                href="/documents/Reglamento interno GAP 2025.pdf"
                                fileName="Reglamento interno GAP 2025.pdf"
                                description="Reglamento interno actualizado para el año escolar 2025"
                                variant="default"
                            />
                        </TabsContent>
                        <TabsContent value="view">
                            <div className="mt-2">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Vista previa del documento. Haga clic en "Ver en pantalla completa" para una mejor visualización.
                                </p>
                                <div className="border rounded-md overflow-hidden">
                                    <iframe
                                        src="/documents/Reglamento interno GAP 2025.pdf#toolbar=0&navpanes=0"
                                        className="w-full h-[400px]"
                                        title="Reglamento interno GAP 2025"
                                    />
                                </div>
                                <div className="flex justify-end mt-2">
                                    <a
                                        href="/documents/Reglamento interno GAP 2025.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-primary hover:underline flex items-center gap-1"
                                    >
                                        <SafeEye className="h-3 w-3" /> Ver en pantalla completa
                                    </a>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                <div className="bg-card border rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <SafeFileText className="h-5 w-5 text-primary" />
                        Historia de Guido Arce Pimentel
                    </h2>

                    <Tabs defaultValue="download" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger value="download" className="flex items-center gap-1">
                                <SafeDownload className="h-4 w-4" />
                                <span>Descargar</span>
                            </TabsTrigger>
                            <TabsTrigger value="view" className="flex items-center gap-1">
                                <SafeEye className="h-4 w-4" />
                                <span>Ver</span>
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="download">
                            <PDFLink
                                href="/documents/Historia de Guido Arce Pimentel .docx"
                                fileName="Historia de Guido Arce Pimentel.docx"
                                description="Documento histórico sobre Guido Arce Pimentel"
                                variant="default"
                            />
                        </TabsContent>
                        <TabsContent value="view">
                            <div className="mt-2">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Este documento está disponible para descarga. Los archivos de Word no pueden ser visualizados directamente en el navegador.
                                </p>
                                <Button
                                    variant="default"
                                    className="flex items-center gap-2 w-fit"
                                    asChild
                                >
                                    <Link href="/documents/Historia de Guido Arce Pimentel .docx" download>
                                        <SafeDownload className="h-4 w-4" />
                                        <span>Descargar documento</span>
                                    </Link>
                                </Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Puedes añadir más documentos aquí siguiendo el mismo formato */}
            </div>

            {/* Sección adicional sobre Guido Arce Pimentel */}
            <section id="historia-gap" className="mt-16 bg-card border rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-semibold mb-6 text-primary">Sobre Guido Arce Pimentel</h2>

                <div className="space-y-4">
                    <p>
                        Guido Arce Pimentel fue un destacado educador y figura emblemática en la región de Los Negros,
                        cuyo compromiso con la educación rural y el desarrollo comunitario dejó una huella imborrable
                        en nuestra comunidad.
                    </p>

                    <p>
                        Dedicó su vida a mejorar las oportunidades educativas para los jóvenes de zonas rurales,
                        implementando metodologías innovadoras que combinaban el conocimiento académico con las
                        realidades prácticas de la vida agrícola local.
                    </p>

                    <p>
                        Su visión de una educación integral, que preparara a los estudiantes tanto para continuar
                        estudios superiores como para desarrollar habilidades prácticas aplicables a su entorno,
                        sigue siendo el pilar fundamental de nuestra institución educativa.
                    </p>

                    <div className="mt-6">
                        <p className="font-medium">Para conocer más sobre su vida y legado, descargue el documento completo:</p>
                        <Button variant="default" className="mt-2" asChild>
                            <Link href="/documents/Historia de Guido Arce Pimentel .docx" download>
                                <SafeDownload className="h-4 w-4 mr-2" />
                                Descargar documento completo
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
} 