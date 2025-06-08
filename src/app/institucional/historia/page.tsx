import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/legacy/image";
import type { Metadata } from 'next';
import { BookOpenText, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { withSuppressHydration } from '@/components/ui/icon-wrapper';

// Envolver los iconos con el wrapper para suprimir advertencias de hidratación
const SafeBookOpenText = withSuppressHydration(BookOpenText);
const SafeDownload = withSuppressHydration(Download);

export const metadata: Metadata = {
  title: 'Historia',
  description: 'Conozca la historia y el legado de la U.E. Guido Arce Pimentel.',
};

export default function HistoriaPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center mb-4">
            <SafeBookOpenText className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-4xl font-bold text-primary">Nuestra Historia</CardTitle>
          <CardDescription className="text-xl text-muted-foreground mt-2">
            Un Recorrido por el Legado y Evolución de la Unidad Educativa
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 text-lg">

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3 mt-4 text-center">
              RESEÑA HISTÓRICA DE LA UNIDAD EDUCATIVA "GUIDO ARCE PIMENTEL"
            </h2>
            <p className="text-center text-accent font-semibold text-xl mb-6">
              Fundada el 16 de Julio de 2012
            </p>
            <p>
              La fundación de la nueva Unidad Educativa (aun sin nombre por entonces) tiene como antecedente la aplicación de la nueva Ley Avelino Siñani donde contempla la ampliación del Nivel Secundario de 1ro a 6to de secundaria es decir 7mo-8vo-1ro-2do-3ro y 4to. Con este panorama, la Dirección Distrital de Educación a cargo del Lic. Víctor Galarza Rojas convoca a una reunión a los Directores, Juntas Escolares, Sindicatos y autoridades invitadas del Municipio a una reunión en Pampagrande para analizar aspectos educativos de reordenamiento y optimización de las Unidades Educativas del Distrito. Entre uno de los puntos contemplaba el caso específico de los estudiantes de 7mo y 8vo de las U.E. Eduardo Abaroa y América. Entre las sugerencias de los presentes estaban, en primera instancia el traslado de estos estudiantes para completar a la U.E. Simón Bolívar y en segunda instancia propuesta por el Director Distrital se vería la posibilidad de crear una nueva Unidad Educativa en Los Negros. Luego de un amplio debate entre los presentes se decide crear un nuevo establecimiento que funcione en el turno de la tarde con una administración separada ya que no existían los ambientes necesarios para fusionar a la U.E. Simón Bolívar y que los estudiantes y Padres de familia serían los mas beneficiados de tener ambos turnos para que sus hijos continúen sus estudios en el Nivel Secundario Comunitario Productivo. Además, sugieren invitar a uno de los maestros como encargado de este proyecto. Quedando pendiente una reunión específica para acordar los pasos a seguir.
            </p>
            <p>
              En fecha 21 de junio del 2012, siendo a horas 10:20 am se lleva a cabo la reunión de la Comisión Encargada a la cabeza del Director Distrital Lic. Víctor Galarza Rojas la participación de Lic. Karen Lazarte Valdez, Prof. Palmira Coronado Canda, Prof. Juan Vidal Velez Bustos y Prof. Eli Inturias Guaman, en la Dirección de la U.E. América además se invitado al Profesor Sandro Soliz Quispe (profesor de la U.E. América). En dicha reunión se analiza los siguientes pasos de los presentes: traslado de alumnos con sus respectivos profesores, el nombre de la nueva unidad educativa y el procedimiento de creación oficial. Luego de un receso a hrs 13:40 del mismo día, se vuelve a reunir la Comisión con los profesores afectados Prof. Ana María Flores Camacho, Prof. Leidy Ojeda Lazarte, Prof. Oscar Edmundo Siles Veizaga, Prof. Teodoro Iñiguez Ticlla, Prof. David Flores Valverde y Prof. Sandro Soliz Quispe de la U.E. América y los profesores Lipio Porco Choque, Edmundo Dionisio Silvestre García, Elodio Bonilla Valverde, Elma Gutierrez Arévalo y Limbania Montaño Guaman de la U.E. Eduardo Abaroa para elegir al Director de la nueva Unidad Educativa. Luego de las pautas que da el Lic. Víctor Galarza sobre la estrategia de creación de la nueva U.E. y avances logrados a los presentes se procedió a la votación donde por unanimidad fue elegido el Prof. Sandro Soliz Quispe como Director del nuevo establecimiento.
            </p>
            <p>
              En fecha 29 de junio del 2012 siendo a hrs. 18:30 a convocatoria de la Comisión Encargada se reúne a los Padres de Familia de los estudiantes afectados de las U.E. Eduardo Abaroa y América para informarles del traslado de sus hijos a la infraestructura de la U.E. Simón Bolívar en el turno tarde desde el 16 de julio del 2012 (luego del retorno del descanso pedagógico). El Lic. Víctor Galarza además da lectura a Ordenanza Municipal Nº 019/2012 donde el Honorable Concejo Municipal, autoriza el traslado de estudiantes y maestros a la infraestructura de la U.E. Simón Bolívar turno tarde, con la visión de crear un nuevo establecimiento en la comunidad. Además se posesionó frente a los presentes al Profesor Sandro Soliz Quispe como Director de este establecimiento dando el juramento de rigor.
            </p>
            <p>
              Quedaba aún pendiente el nombre que llevaría el establecimiento habiendo varias sugerencias entre ellas: Colegio Los Negros, U.E. Libertad, U.E. Nacional Florida, U.E. Antonio José de Sucre, U.E. Florida Valles Crucéños y otros, pero el Director responsable decide dar este honor a un personaje que había trabajado como profesor en el lugar dejando grandes logros y recuerdos, es así que sugiere el nombre del Prof. Guido Arce Pimentel (ex Director creador de la U.E. Simón Bolívar), propuesta que en primera instancia es aceptada por los docentes y que en reunión a ello es apoyada por las Directivas de Padres de Familia de los 8 cursos 1ro A - 1ro B - 1ro C - 1ro D - 2do A - 2do B - 2do C y 2do D. (gestión 2012). Se hace conocer esta decisión al Director Distrital y autoridades del municipio procediendo a solicitar la autorización de la Prof. Susana Nuñez Vda. de Arce para otorgarnos ese honor, solicitud que fue aceptada con mucha alegría y satisfacción. Presentado estos documentos a las autoridades municipales el Concejo Municipal a través de la Ordenanza Municipal N° 023/2012 dispone la creación de la U.E. "GUIDO ARCE PIMENTEL" con fecha de fundación el 16 de julio de 2012 lugar de funcionamiento infraestructura U.E. Simón Bolívar turno tarde.
            </p>
            <p>
              La Unidad Educativa nace con 8 cursos: 194 estudiantes (93 varones y 101 mujeres) que correspondían a los cursos 7mo A - B; 8vo A - B “Unidad Educativa Eduardo Abaroa” 7mo A - B; 8vo A - B “Unidad Educativa América”.
            </p>
          </div>

          <div className="pt-6 border-t border-border">
            <h3 className="text-2xl font-semibold text-primary mb-4 mt-6">Guido Arce Pimentel: Nuestro Patrono</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://placehold.co/400x600.png"
                    alt="Guido Arce Pimentel"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    data-ai-hint="portrait of older male teacher"
                  />
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p>
                  Guido Arce Pimentel fue un destacado educador y figura emblemática en la región de Los Negros,
                  cuyo compromiso con la educación rural y el desarrollo comunitario dejó una huella imborrable
                  en nuestra comunidad. Su dedicación a la formación integral de los estudiantes y su visión de
                  una educación que combinara conocimientos académicos con habilidades prácticas lo convirtieron
                  en un referente educativo en la región.
                </p>
                <p>
                  Como ex Director y creador de la U.E. Simón Bolívar, su legado perdura en cada una de las
                  generaciones que se han formado en nuestras aulas. Su enfoque innovador y su profundo compromiso
                  con el desarrollo de la comunidad fueron las razones principales para que nuestra institución
                  lleve su nombre con orgullo.
                </p>
                <div className="flex items-center mt-4 space-x-2">
                  <BookOpenText className="h-5 w-5 text-primary" />
                  <Link href="/documentos#historia-gap" className="text-primary hover:underline font-medium">
                    Conozca más sobre su vida y legado
                  </Link>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="flex items-center gap-2" asChild>
                    <Link href="/documents/Historia de Guido Arce Pimentel .docx" download>
                      <Download className="h-4 w-4" />
                      Descargar documento completo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <h3 className="text-2xl font-semibold text-primary mb-4 mt-6">Personal Docente Fundador</h3>
            <p className="text-muted-foreground mb-6">Participó de la fundación el siguiente personal docente:</p>
            <div className="overflow-x-auto shadow-md border border-border rounded-lg">
              <table className="min-w-full divide-y divide-border text-sm">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-foreground tracking-wider">U.E. de Procedencia</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground tracking-wider">Nombre y Apellido del Docente</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground tracking-wider">Asignaturas que Regenta</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground tracking-wider">Cargo/Responsable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">AMÉRICA</td>
                    <td className="px-6 py-4 whitespace-nowrap">Sandro Soliz Quispe</td>
                    <td className="px-6 py-4 whitespace-nowrap">Cs. Naturales/Tecnología/A. Plásticas</td>
                    <td className="px-6 py-4 whitespace-nowrap">Director/Consejero 1ro B</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">AMÉRICA</td>
                    <td className="px-6 py-4 whitespace-nowrap">Leidy Ojeda Lazarte</td>
                    <td className="px-6 py-4 whitespace-nowrap">Matemáticas/A. Plásticas</td>
                    <td className="px-6 py-4 whitespace-nowrap">Consejera 2do A</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">AMÉRICA</td>
                    <td className="px-6 py-4 whitespace-nowrap">Ana María Flores Camacho</td>
                    <td className="px-6 py-4 whitespace-nowrap">Lenguaje/Religión</td>
                    <td className="px-6 py-4 whitespace-nowrap">Consejera 1ro A</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">AMÉRICA</td>
                    <td className="px-6 py-4 whitespace-nowrap">Oscar Edmundo Siles Veizaga</td>
                    <td className="px-6 py-4 whitespace-nowrap">Cs. Sociales/Ingles</td>
                    <td className="px-6 py-4 whitespace-nowrap">Consejero 2do A</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">AMÉRICA</td>
                    <td className="px-6 py-4 whitespace-nowrap">Teodoro Iñiguez Ticlla</td>
                    <td className="px-6 py-4 whitespace-nowrap">Educación Musical</td>
                    <td className="px-6 py-4 whitespace-nowrap">-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">AMÉRICA</td>
                    <td className="px-6 py-4 whitespace-nowrap">David Flores Valverde</td>
                    <td className="px-6 py-4 whitespace-nowrap">E. Fisica/Tecnologia</td>
                    <td className="px-6 py-4 whitespace-nowrap">-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">EDUARDO ABAROA</td>
                    <td className="px-6 py-4 whitespace-nowrap">Lipio Porco Choque</td>
                    <td className="px-6 py-4 whitespace-nowrap">Matemáticas/A. Plásticas</td>
                    <td className="px-6 py-4 whitespace-nowrap">Consejero 2do A</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">EDUARDO ABAROA</td>
                    <td className="px-6 py-4 whitespace-nowrap">Edmundo Dionisio Silvestre García</td>
                    <td className="px-6 py-4 whitespace-nowrap">Lenguaje/Idiomas</td>
                    <td className="px-6 py-4 whitespace-nowrap">Consejero 2do B</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">EDUARDO ABAROA</td>
                    <td className="px-6 py-4 whitespace-nowrap">Elma Gutiérrez Arévalo</td>
                    <td className="px-6 py-4 whitespace-nowrap">Cs. Naturales/Tecnologia</td>
                    <td className="px-6 py-4 whitespace-nowrap">Consejera 1ro A</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">EDUARDO ABAROA</td>
                    <td className="px-6 py-4 whitespace-nowrap">Elodio Bonilla Valverde</td>
                    <td className="px-6 py-4 whitespace-nowrap">Cs. Sociales/E. Física</td>
                    <td className="px-6 py-4 whitespace-nowrap">Consejero 1ro B</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">EDUARDO ABAROA</td>
                    <td className="px-6 py-4 whitespace-nowrap">Limbania Montaño Guzmán</td>
                    <td className="px-6 py-4 whitespace-nowrap">Música/Religión</td>
                    <td className="px-6 py-4 whitespace-nowrap">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="my-8 pt-6 border-t border-border">
            <h3 className="text-2xl font-semibold text-primary mb-4 mt-6">Hitos Visuales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <Image
                  src="https://placehold.co/800x400.png"
                  alt="Edificio histórico de la escuela"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-md mx-auto object-cover w-full"
                  data-ai-hint="historic building"
                />
                <p className="text-center text-sm text-muted-foreground mt-2">Fachada original de la institución.</p>
              </div>
              <div>
                <Image
                  src="https://placehold.co/800x400.png"
                  alt="Hitos importantes de la escuela"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-md mx-auto object-cover w-full"
                  data-ai-hint="timeline infographic"
                />
                <p className="text-center text-sm text-muted-foreground mt-2">Línea de tiempo con algunos de nuestros hitos más importantes.</p>
              </div>
            </div>
          </div>
          <p className="pt-6 border-t border-border text-center text-muted-foreground">
            Con cada nuevo año escolar, reafirmamos nuestro compromiso con la educación y con el futuro de nuestros estudiantes, preparándolos para enfrentar un mundo en constante cambio con las herramientas y los valores necesarios para triunfar.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
