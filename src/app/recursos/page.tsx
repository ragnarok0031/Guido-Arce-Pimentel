"use client"; // Ensure this is at the top if you use React hooks for filtering in the future

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/legacy/image";
import { BookMarked, FileText, Video, Link2, Download, Search, Code2, Archive } from "lucide-react"; // Changed FileZip to Archive
// import type { Metadata } from 'next'; // Metadata should be handled in server components or page.tsx for App Router
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react"; // Import React if you plan to use state hooks

// Metadata for this page (if it remains "use client" and is a top-level route component)
// should ideally be exported from a parent layout.tsx or a wrapping server component.
// For now, we'll assume metadata is handled elsewhere or this component structure will be refactored.
// export const metadata: Metadata = {
//   title: 'Centro de Recursos Educativos',
//   description: 'Acceda a materiales didácticos, guías de estudio, videos y enlaces útiles para el aprendizaje en la U.E. Guido Arce Pimentel.',
// };


const mockResources = [
  { id: 1, title: "Guía de Estudio: Álgebra Básica", category: "Matemáticas", type: "Guía", icon: FileText, format: "PDF", link: "#", dataAiHint: "math textbook" },
  { id: 2, title: "Video Tutorial: La Célula y sus Partes", category: "Ciencias Naturales", type: "Video", icon: Video, format: "MP4", link: "#", dataAiHint: "science animation" },
  { id: 3, title: "Enlace: Museo Virtual de Historia Universal", category: "Ciencias Sociales", type: "Enlace Externo", icon: Link2, format: "Web", link: "#", dataAiHint: "museum website" },
  { id: 4, title: "Ejercicios de Comprensión Lectora - Nivel Primaria", category: "Lenguaje", type: "Práctica", icon: FileText, format: "DOCX", link: "#", dataAiHint: "reading worksheet" },
  { id: 5, title: "Presentación: Introducción a la Programación", category: "Tecnología", type: "Presentación", icon: FileText, format: "PPTX", link: "#", dataAiHint: "code presentation" },
  { id: 6, title: "Guía: Normas APA 7ma Edición", category: "Investigación", type: "Guía", icon: FileText, format: "PDF", link: "#", dataAiHint: "citation guide" },
];

const categories = ["Todas", "Matemáticas", "Ciencias Naturales", "Ciencias Sociales", "Lenguaje", "Tecnología", "Investigación", "Arte y Música"];
const types = ["Todos", "Guía", "Video", "Enlace Externo", "Práctica", "Presentación"];

export default function RecursosPage() {
  // Basic filtering logic placeholder (would be client-side or server-side in a real app)
  // const [searchTerm, setSearchTerm] = React.useState("");
  // const [selectedCategory, setSelectedCategory] = React.useState("Todas");
  // const [selectedType, setSelectedType] = React.useState("Todos");

  // const filteredResources = mockResources.filter(resource =>
  //   resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //   (selectedCategory === "Todas" || resource.category === selectedCategory) &&
  //   (selectedType === "Todos" || resource.type === selectedType)
  // );

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary flex items-center justify-center">
            <BookMarked className="mr-3 h-8 w-8" /> Centro de Recursos Educativos
          </CardTitle>
          <CardDescription className="text-lg">
            Encuentre materiales de apoyo, guías, videos y más para enriquecer su aprendizaje.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Filters Section - Placeholder for functionality */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-primary">Buscar y Filtrar Recursos</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Input
              type="search"
              placeholder="Buscar por título o palabra clave..."
              className="pr-10"
            // onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          <Select
          // onValueChange={(value) => setSelectedCategory(value)}
          // defaultValue="Todas"
          >
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select
          // onValueChange={(value) => setSelectedType(value)}
          // defaultValue="Todos"
          >
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Tipo de Recurso" />
            </SelectTrigger>
            <SelectContent>
              {types.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
            </SelectContent>
          </Select>
          <Button className="w-full md:w-auto">Aplicar Filtros</Button>
        </CardContent>
      </Card>

      {/* Educational Code Exploration Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center">
            <Code2 className="mr-3 h-7 w-7 text-primary" />
            <CardTitle className="text-xl text-primary">Explora el Código Fuente de ArceConnect</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Con fines educativos, te invitamos a explorar el código fuente de esta plataforma.
            Descubre cómo se construyen aplicaciones web modernas utilizando tecnologías como Next.js, React, Tailwind CSS y Genkit para funcionalidades de IA.
          </p>
          <a href="/source-code.zip" download="arceconnect-source-code.zip">
            <Button>
              <Archive className="mr-2 h-5 w-5" /> {/* Changed FileZip to Archive */}
              Descargar Código Fuente (ZIP)
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            <strong>Nota para el desarrollador:</strong> Para que esta descarga funcione, debe crear un archivo llamado <code>source-code.zip</code> que contenga todo el código fuente del proyecto y colocarlo en la carpeta <code>public</code> de su aplicación Next.js.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockResources.map(resource => (
          <Card key={resource.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <resource.icon className="h-6 w-6 text-accent flex-shrink-0" />
              </div>
              <CardDescription>
                <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs mr-2">{resource.category}</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">{resource.type}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-2">Formato: {resource.format}</p>
              {/* Placeholder image for resource type */}
              <div className="my-4 h-32 bg-muted rounded-md flex items-center justify-center">
                <Image
                  src={`https://placehold.co/150x100.png?text=${resource.format}`}
                  alt={resource.title}
                  width={150}
                  height={100}
                  className="object-contain"
                  data-ai-hint={resource.dataAiHint || "document icon"}
                />
              </div>
            </CardContent>
            <CardContent>
              <Button className="w-full" asChild>
                <Link href={resource.link} target={resource.type === "Enlace Externo" ? "_blank" : "_self"} rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  {resource.type === "Enlace Externo" ? "Visitar Enlace" : "Descargar/Ver"}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" size="lg">Cargar más recursos</Button> {/* Placeholder for pagination */}
      </div>
    </div>
  );
}

// If this page requires client-side interactivity for filters, "use client" is appropriate.
// However, for Next.js App Router, metadata should typically be exported from Server Components.
// If this page is intended to be a Server Component, remove "use client" and ensure hooks like useState are not used directly.
// For now, I'm keeping "use client" as it was in the original file structure you provided,
// A separate metadata file could be:
// src/app/recursos/layout.tsx or page.tsx (if this file was renamed e.g. to client.tsx)
/*
// Example: src/app/recursos/page.tsx (if this file was a server component)
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centro de Recursos Educativos',
  description: 'Acceda a materiales didácticos, guías de estudio, videos y enlaces útiles para el aprendizaje en la U.E. Guido Arce Pimentel.',
};

// ... then import the client part of the page:
// import RecursosClientPage from './recursos-client-component';
// export default function RecursosPage() { return <RecursosClientPage />; }
*/

// Or, if src/app/recursos/layout.tsx exists, metadata can be there:
/*
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Centro de Recursos Educativos',
  description: 'Acceda a materiales didácticos, guías de estudio, videos y enlaces útiles para el aprendizaje en la U.E. Guido Arce Pimentel.',
};
export default function RecursosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
*/

// For this specific change, I've updated the card for direct ZIP download.
// The "use client" directive and metadata handling comments are preserved from the original state of the file.
// If this page needs to be a Server Component to export metadata, the filter logic (if made interactive)
// would need to be extracted into its own client component.
// For now, the metadata is commented out as it would cause an error in a "use client" component if not handled via layout.
