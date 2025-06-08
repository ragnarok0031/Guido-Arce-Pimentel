
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Eye } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Misión y Visión',
  description: 'Descubra la misión, visión y valores de la U.E. Guido Arce Pimentel.',
};

export default function MisionVisionPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary flex items-center">
            <Target className="mr-3 h-8 w-8" /> Misión
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg">
          <p>
            Brindar una formación integral y holística en el nivel de Educación Secundaria Comunitaria Productiva y alcanzar una formación autónoma, crítica, reflexiva, cooperativa con identidad cultural y con un alto grado de respeto a la diversidad y equidad, consolidando la convivencia pacífica a través de la práctica de la interculturalidad e intraculturalidad, con vocación de servicio a la comunidad para transformar la educación y el vivir bien, con docentes innovadores, participativos, creativos y comprometidos con la calidad educativa, con valores y principios sociocomunitarios para afrontar los desafíos de una vida futura.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary flex items-center">
            <Eye className="mr-3 h-8 w-8" /> Visión
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg">
          <p>
            Constituirse en una comunidad educativa modelo mediante un trabajo coordinado, participativo y activo de todos los miembros de la comunidad educativa, con docentes comprometidos con su vocación, capaces de brindar una amplia diversidad de metodologías para lograr alumnos de excelencia, constructores de sus aprendizajes, críticos, reflexivos, participativos, capaces de expresar libremente sus ideas y sentimientos, que respeten su cultura, rescatando sus saberes y tradiciones para que puedan aportar a la construcción de un país productivo.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary flex items-center">
            <Lightbulb className="mr-3 h-8 w-8" /> Valores Institucionales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li><strong>Respeto:</strong> Fomentamos un ambiente de convivencia armónica, reconociendo la dignidad y los derechos de cada miembro de la comunidad educativa.</li>
            <li><strong>Responsabilidad:</strong> Promovemos el cumplimiento de los deberes y obligaciones, asumiendo las consecuencias de nuestros actos.</li>
            <li><strong>Honestidad:</strong> Actuamos con transparencia, sinceridad e integridad en todas nuestras acciones.</li>
            <li><strong>Solidaridad:</strong> Incentivamos la cooperación, el apoyo mutuo y la empatía hacia los demás.</li>
            <li><strong>Excelencia:</strong> Buscamos la mejora continua en todos los ámbitos de nuestro quehacer educativo.</li>
            <li><strong>Innovación:</strong> Impulsamos la creatividad y la adopción de nuevas metodologías para enriquecer el proceso de enseñanza-aprendizaje.</li>
            <li><strong>Compromiso Social:</strong> Formamos ciudadanos conscientes de su rol en la sociedad y comprometidos con el bienestar colectivo y el cuidado del medio ambiente.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
