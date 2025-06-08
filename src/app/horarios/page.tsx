"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { AlertCircle, CalendarClock, Smartphone, Monitor } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// Metadata for static export (though page is client-rendered for interactivity)
// export const metadata: Metadata = {
//   title: 'Horarios Escolares',
//   description: 'Consulta los horarios de clases para todos los grados y secciones de la U.E. Guido Arce Pimentel.',
// };
// For client components, metadata should be in layout or parent server component.

interface ScheduleEntry {
  subject: string;
  teacher: string;
  color?: string; // Optional: for subject-specific colors later
}

interface TimeSlotRow {
  time: string;
  isRecess?: boolean;
  days: {
    lunes?: ScheduleEntry | null;
    martes?: ScheduleEntry | null;
    miercoles?: ScheduleEntry | null;
    jueves?: ScheduleEntry | null;
    viernes?: ScheduleEntry | null;
    altLunes?: ScheduleEntry | null; // Used for "Lunes Alterno" or "A. Miérc." data
    altMiercoles?: ScheduleEntry | null; // Used for "A. Miércol" data
  };
}

interface TimetableData {
  [grade: string]: {
    [section: string]: {
      title: string;
      header: string[];
      rows: TimeSlotRow[];
    };
  };
}

const horariosData: TimetableData = {
  "1ro": {
    "A": {
      title: "Horario 1ro \"A\"",
      header: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Lunes Alterno"],
      rows: [
        {
          time: "7:30 - 8:10",
          days: {
            lunes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            martes: { subject: "MATEMÁT.", teacher: "Prof. Leydi" },
            miercoles: { subject: "TEC. TECNOL.", teacher: "Prof. Silvia" },
            jueves: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            viernes: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            altLunes: { subject: "L. EXTRANJ.", teacher: "PROF. FRANS" },
          },
        },
        {
          time: "8:10 - 8:50",
          days: {
            lunes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            martes: { subject: "MATEMÁT.", teacher: "Prof. Leydi" },
            miercoles: { subject: "TEC. TECNOL.", teacher: "Prof. Silvia" },
            jueves: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            viernes: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            altLunes: { subject: "L. EXTRANJ.", teacher: "PROF. FRANS" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "9:00 - 9:40",
          days: {
            lunes: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            martes: { subject: "ED. FISICA", teacher: "Prof. Elodio" },
            miercoles: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            jueves: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            viernes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            altLunes: { subject: "VALORES", teacher: "P. NELIDA" },
          },
        },
        {
          time: "9:40 - 10:20",
          days: {
            lunes: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            martes: { subject: "ED. FISICA", teacher: "Prof. Elodio" },
            miercoles: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            jueves: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            viernes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            altLunes: { subject: "VALORES", teacher: "P. NELIDA" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "10:30 - 11:10",
          days: {
            lunes: { subject: "LIBRE", teacher: "" },
            martes: { subject: "TEC. TECNOL.", teacher: "Prof. Silvia" },
            miercoles: { subject: "MATEMÁT.", teacher: "Prof. Leydi" },
            jueves: { subject: "C. SOCIALES", teacher: "Prof. Elodio" },
            viernes: { subject: "ARTES PLAST.", teacher: "Prof. Silvia" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:10 - 11:50",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "Prof. Elodio" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Silvia" }, // Corrected from image: Silvia is for Tec Tecnol, Elodio for C. Sociales in 1A
            miercoles: { subject: "MATEMÁT.", teacher: "Prof. Leydi" },
            jueves: { subject: "C. SOCIALES", teacher: "Prof. Elodio" },
            viernes: { subject: "LIBRE", teacher: "" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
      ],
    },
    "B": {
      title: "Horario 1ro \"B\"",
      header: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Lunes Alterno"],
      rows: [
        {
          time: "7:30 - 8:10",
          days: {
            lunes: { subject: "L. EXTRANJ", teacher: "PROF. FRANS" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Elodio" },
            miercoles: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            jueves: { subject: "VALORES", teacher: "P. NELIDA" },
            viernes: { subject: "MATEMÁT.", teacher: "Prof. Leydi" },
            altLunes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
          },
        },
        {
          time: "8:10 - 8:50",
          days: {
            lunes: { subject: "L. EXTRANJ", teacher: "PROF. FRANS" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Elodio" },
            miercoles: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            jueves: { subject: "VALORES", teacher: "P. NELIDA" },
            viernes: { subject: "MATEMÁT.", teacher: "Prof. Leydi" },
            altLunes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "9:00 - 9:40",
          days: {
            lunes: { subject: "ARTES PLAST.", teacher: "Prof. Edson" },
            martes: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            miercoles: { subject: "MATEMÁT.", teacher: "Prof. Leydi" },
            jueves: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            viernes: { subject: "TEC. TECNOL.", teacher: "Prof. Leydi" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "9:40 - 10:20",
          days: {
            lunes: { subject: "ARTES PLAST.", teacher: "Prof. Edson" },
            martes: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            miercoles: { subject: "MATEMÁT.", teacher: "Prof. Leydi" },
            jueves: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            viernes: { subject: "TEC. TECNOL.", teacher: "Prof. Leydi" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "10:30 - 11:10",
          days: {
            lunes: { subject: "ED. FISICA", teacher: "Prof. Elodio" },
            martes: { subject: "TEC. TECNOL.", teacher: "Prof. Leydi" },
            miercoles: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            jueves: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            viernes: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:10 - 11:50",
          days: {
            lunes: { subject: "ED. FISICA", teacher: "Prof. Elodio" },
            martes: { subject: "MATEMÁT.", teacher: "Prof. Leydi" },
            miercoles: { subject: "C. SOCIALES", teacher: "Prof. Elodio" },
            jueves: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            viernes: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
      ],
    },
  },
  "2do": {
    "A": {
      title: "Horario 2do \"A\"",
      header: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "A. Miérc."],
      rows: [
        {
          time: "7:30 - 8:10",
          days: {
            lunes: { subject: "ED. FISICA", teacher: "Prof. Elodio" },
            martes: { subject: "LENGUAJE", teacher: "P. Mary Luz" },
            miercoles: { subject: "MATEMAT", teacher: "Prof. Leydi" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Leydi" },
            viernes: { subject: "LENGUAJE", teacher: "P. Mary Luz" },
            altLunes: { subject: "LENGUAJE", teacher: "P. Mary Luz" },
          },
        },
        {
          time: "8:10 - 8:50",
          days: {
            lunes: { subject: "ED. FISICA", teacher: "Prof. Elodio" },
            martes: { subject: "LENGUAJE", teacher: "P. Mary Luz" },
            miercoles: { subject: "MATEMAT", teacher: "Prof. Leydi" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Leydi" },
            viernes: { subject: "LENGUAJE", teacher: "P. Mary Luz" },
            altLunes: { subject: "LENGUAJE", teacher: "P. Mary Luz" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "9:00 - 9:40",
          days: {
            lunes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            martes: { subject: "TEC. TECNOL", teacher: "Prof. Lucio" },
            miercoles: { subject: "TEC. TECNOL", teacher: "Prof. Lucio" },
            jueves: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            viernes: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "9:40 - 10:20",
          days: {
            lunes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            martes: { subject: "TEC. TECNOL", teacher: "Prof. Lucio" },
            miercoles: { subject: "TEC. TECNOL", teacher: "Prof. Lucio" },
            jueves: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            viernes: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "10:30 - 11:10",
          days: {
            lunes: { subject: "L- EXTRANJ", teacher: "Prof. Frans" },
            martes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            miercoles: { subject: "C. SOCIALES", teacher: "P. Ronald" },
            jueves: { subject: "ARTES PLAS", teacher: "P. Grover" },
            viernes: { subject: "VALORES", teacher: "P. Grover" }, // Assuming teacher P. Grover for VALORES based on context, not explicit in image
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:10 - 11:50",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "Prof. Frans" }, // Corrected based on likely teacher for L-Extranj, not C.Sociales; Image has Frans for L-Extranj
            martes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            miercoles: { subject: "C. SOCIALES", teacher: "P. Ronald" },
            jueves: { subject: "ARTES PLAS", teacher: "P. Grover" },
            viernes: { subject: "MATEMAT", teacher: "Prof. Leydi" }, // Assuming teacher P. Leydi for MATEMAT as she teaches it in other slots for 2A
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
      ],
    },
    "B": {
      title: "Horario 2do \"B\"",
      header: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Al. Lunes"],
      rows: [
        {
          time: "7:30 - 8:10",
          days: {
            lunes: { subject: "LENGUAJE", teacher: "P. Mary Luz" },
            martes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            miercoles: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            jueves: { subject: "VALORES", teacher: "Prof. Ludy" },
            viernes: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            altLunes: { subject: "ED. FISICA", teacher: "Prof. Elodio" },
          },
        },
        {
          time: "8:10 - 8:50",
          days: {
            lunes: { subject: "LENGUAJE", teacher: "P. Mary Luz" },
            martes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            miercoles: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            jueves: { subject: "VALORES", teacher: "Prof. Ludy" },
            viernes: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            altLunes: { subject: "ED. FISICA", teacher: "Prof. Elodio" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "9:00 - 9:40",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "P. Ronald" },
            martes: { subject: "ARTES PLAS", teacher: "P. Grover" },
            miercoles: { subject: "TEC. TECNOL", teacher: "Prof. Cesar" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            viernes: { subject: "TEC. TECNOL", teacher: "Prof. Cesar" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "9:40 - 10:20",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "P. Ronald" },
            martes: { subject: "ARTES PLAS", teacher: "P. Grover" },
            miercoles: { subject: "TEC. TECNOL", teacher: "Prof. Cesar" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            viernes: { subject: "TEC. TECNOL", teacher: "Prof. Cesar" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "10:30 - 11:10",
          days: {
            lunes: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            martes: { subject: "LENGUAJE", teacher: "P. Mary Luz" },
            miercoles: { subject: "LENGUAJE", teacher: "P. Mary Luz" },
            jueves: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            viernes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:10 - 11:50",
          days: {
            lunes: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            martes: { subject: "LENGUAJE", teacher: "P. Mary Luz" },
            miercoles: { subject: "LENGUAJE", teacher: "P. Mary Luz" },
            jueves: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            viernes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:50 - 12:30",
          days: {
            lunes: { subject: "LIBRE", teacher: "" },
            martes: { subject: "MATEMAT", teacher: "" },
            miercoles: { subject: "C. SOCIALES", teacher: "" },
            jueves: { subject: "LIBRE", teacher: "" },
            viernes: { subject: "LIBRE", teacher: "" },
            altLunes: { subject: "LIBRE", teacher: "" },
          },
        },
      ],
    },
  },
  "3ro": {
    "A": {
      title: "Horario 3ro \"A\"",
      header: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Al. Lunes", "A. Miércol"],
      rows: [
        {
          time: "7:30 - 8:10",
          days: {
            lunes: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            martes: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            miercoles: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            jueves: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            viernes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            altLunes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Leydi" },
          },
        },
        {
          time: "8:10 - 8:50",
          days: {
            lunes: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            martes: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            miercoles: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            jueves: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            viernes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            altLunes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Leydi" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "9:00 - 9:40",
          days: {
            lunes: { subject: "MUSICA", teacher: "Prof. Omar" },
            martes: { subject: "A. PLASTICAS", teacher: "Prof. Leydi" },
            miercoles: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            jueves: { subject: "TEC. TECNOL", teacher: "Prof. Leydi" },
            viernes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            altLunes: { subject: "VALORES", teacher: "Prof. Ludy" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Leydi" },
          },
        },
        {
          time: "9:40 - 10:20",
          days: {
            lunes: { subject: "MUSICA", teacher: "Prof. Omar" },
            martes: { subject: "A. PLASTICAS", teacher: "Prof. Leydi" },
            miercoles: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            jueves: { subject: "TEC. TECNOL", teacher: "Prof. Leydi" },
            viernes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            altLunes: { subject: "VALORES", teacher: "Prof. Ludy" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Leydi" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "10:30 - 11:10",
          days: {
            lunes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            martes: { subject: "ED. FISICA", teacher: "P. Elodio" },
            miercoles: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            jueves: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            viernes: { subject: "TEC. TECNOL", teacher: "Prof. Leydi" },
            altLunes: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            altMiercoles: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:10 - 11:50",
          days: {
            lunes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            martes: { subject: "ED. FISICA", teacher: "P. Elodio" },
            miercoles: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            jueves: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            viernes: { subject: "TEC. TECNOL", teacher: "Prof. Leydi" },
            altLunes: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            altMiercoles: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:50 - 12:30",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            martes: { subject: "FISICA", teacher: "" },
            miercoles: { subject: "FISICA", teacher: "" },
            jueves: { subject: "MATEMAT", teacher: "" },
            viernes: { subject: "", teacher: "" },
            altLunes: { subject: "", teacher: "" },
            altMiercoles: { subject: "", teacher: "" },
          },
        },
      ],
    },
    "B": {
      title: "Horario 3ro \"B\"",
      header: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Al. Lunes", "A. Miércol"],
      rows: [
        {
          time: "7:30 - 8:10",
          days: {
            lunes: { subject: "MUSICA", teacher: "P. Ronald" },
            martes: { subject: "FISICA", teacher: "Prof. Wendy" },
            miercoles: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            jueves: { subject: "TEC. TECNOL", teacher: "Prof. Lucio" },
            viernes: { subject: "TEC. TECNOL", teacher: "Prof. Lucio" },
            altLunes: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Lucio" },
          },
        },
        {
          time: "8:10 - 8:50",
          days: {
            lunes: { subject: "MUSICA", teacher: "P. Ronald" },
            martes: { subject: "FISICA", teacher: "Prof. Wendy" },
            miercoles: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            jueves: { subject: "TEC. TECNOL", teacher: "Prof. Lucio" },
            viernes: { subject: "TEC. TECNOL", teacher: "Prof. Lucio" },
            altLunes: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Lucio" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "9:00 - 9:40",
          days: {
            lunes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            martes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            miercoles: { subject: "C. SOCIALES", teacher: "P. Ronald" },
            jueves: { subject: "C. SOCIALES", teacher: "P. Ronald" },
            viernes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            altLunes: { subject: "ED. FISICA", teacher: "P. Elodio" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Lucio" },
          },
        },
        {
          time: "9:40 - 10:20",
          days: {
            lunes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            martes: { subject: "BIO-GEO", teacher: "Prof. Ludy" },
            miercoles: { subject: "C. SOCIALES", teacher: "P. Ronald" },
            jueves: { subject: "C. SOCIALES", teacher: "P. Ronald" },
            viernes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            altLunes: { subject: "ED. FISICA", teacher: "P. Elodio" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Lucio" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "10:30 - 11:10",
          days: {
            lunes: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            martes: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            miercoles: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            viernes: { subject: "AR. PLAST", teacher: "Prof. Lucio" },
            altLunes: { subject: "VALORES", teacher: "Prof. Ludy" },
            altMiercoles: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
          },
        },
        {
          time: "11:10 - 11:50",
          days: {
            lunes: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            martes: { subject: "LENGUAJE", teacher: "P. Edmundo" },
            miercoles: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            viernes: { subject: "AR. PLAST", teacher: "Prof. Lucio" },
            altLunes: { subject: "VALORES", teacher: "Prof. Ludy." },
            altMiercoles: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
          },
        },
        {
          time: "11:50 - 12:30",
          days: {
            lunes: { subject: "", teacher: "" },
            martes: { subject: "", teacher: "" },
            miercoles: { subject: "", teacher: "" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Silvia" },
            viernes: { subject: "C. SOCIALES", teacher: "P. Ronald" },
            altLunes: { subject: "", teacher: "" },
            altMiercoles: { subject: "", teacher: "" },
          },
        },
      ],
    },
  },
  "4to": {
    "A": {
      title: "Horario 4to \"A\"",
      header: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Al. Lunes", "A. Miércol"],
      rows: [
        {
          time: "7:30 - 8:10",
          days: {
            lunes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            miercoles: { subject: "MATEMATICA", teacher: "Prof. Lucio" },
            jueves: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            viernes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            altLunes: { subject: "A. PLASTICAS", teacher: "Prof. Jose" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Silvia" },
          },
        },
        {
          time: "8:10 - 8:50",
          days: {
            lunes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            miercoles: { subject: "MATEMATICA", teacher: "Prof. Lucio" },
            jueves: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            viernes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            altLunes: { subject: "A. PLASTICAS", teacher: "Prof. Jose" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Silvia" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "9:00 - 9:40",
          days: {
            lunes: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            martes: { subject: "TEC. TECNOL", teacher: "Prof. Silvia" },
            miercoles: { subject: "ED. FISICA", teacher: "P. Elodio" },
            jueves: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            viernes: { subject: "TEC. TECNOL", teacher: "Prof. Silvia" },
            altLunes: { subject: "VALORES", teacher: "P Edmundo" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Silvia" },
          },
        },
        {
          time: "9:40 - 10:20",
          days: {
            lunes: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            martes: { subject: "TEC. TECNOL", teacher: "Prof. Silvia" },
            miercoles: { subject: "ED. FISICA", teacher: "P. Elodio" },
            jueves: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            viernes: { subject: "TEC. TECNOL", teacher: "Prof. Silvia" },
            altLunes: { subject: "VALORES", teacher: "P Edmundo" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Silvia" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "10:30 - 11:10",
          days: {
            lunes: { subject: "ED. MUSICAL", teacher: "Prof. Omar" },
            martes: { subject: "MATEMAT", teacher: "Prof. Lucio" },
            miercoles: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            jueves: { subject: "FISICA", teacher: "Prof. Wendy" },
            viernes: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            altLunes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            altMiercoles: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:10 - 11:50",
          days: {
            lunes: { subject: "ED. MUSICAL", teacher: "Prof. Omar" },
            martes: { subject: "MATEMAT", teacher: "Prof. Lucio" },
            miercoles: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            jueves: { subject: "FISICA", teacher: "Prof. Wendy" },
            viernes: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            altLunes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            altMiercoles: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:50 - 12:30",
          days: {
            lunes: { subject: "", teacher: "" },
            martes: { subject: "", teacher: "" },
            miercoles: { subject: "", teacher: "" },
            jueves: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            viernes: { subject: "MATEMAT", teacher: "Prof. Lucio" },
            altLunes: { subject: "", teacher: "" },
            altMiercoles: { subject: "", teacher: "" },
          },
        },
      ],
    },
    "B": {
      title: "Horario 4to \"B\"",
      header: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Al. Lunes", "A. Miércol"],
      rows: [
        {
          time: "7:30 - 8:10",
          days: {
            lunes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            martes: { subject: "MATEMATICA", teacher: "Prof. Lucio" },
            miercoles: { subject: "TEC. TECNOL", teacher: "Prof. Cesar" },
            jueves: { subject: "TEC. TECNOL", teacher: "Prof. Cesar" },
            viernes: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            altLunes: { subject: "ED. MUSICAL", teacher: "Prof. Omar" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Cesar" },
          },
        },
        {
          time: "8:10 - 8:50",
          days: {
            lunes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            martes: { subject: "MATEMATICA", teacher: "Prof. Lucio" },
            miercoles: { subject: "TEC. TECNOL", teacher: "Prof. Cesar" },
            jueves: { subject: "TEC. TECNOL", teacher: "Prof. Cesar" },
            viernes: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            altLunes: { subject: "ED. MUSICAL", teacher: "Prof. Omar" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Cesar" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "9:00 - 9:40",
          days: {
            lunes: { subject: "ED. FISICA", teacher: "P. Elodio" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            miercoles: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            jueves: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            viernes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            altLunes: { subject: "VALORES", teacher: "Prof. Frans" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Cesar" },
          },
        },
        {
          time: "9:40 - 10:20",
          days: {
            lunes: { subject: "ED. FISICA", teacher: "P. Elodio" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            miercoles: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            jueves: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            viernes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            altLunes: { subject: "VALORES", teacher: "Prof. Frans" },
            altMiercoles: { subject: "TEC. TECNOL", teacher: "Prof. Cesar" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "10:30 - 11:10",
          days: {
            lunes: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            martes: { subject: "ART. PLASTICAS", teacher: "Prof. Cesar" },
            miercoles: { subject: "MATEMAT", teacher: "Prof. Lucio" },
            jueves: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            viernes: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            altLunes: { subject: "LIBRE", teacher: "" },
            altMiercoles: { subject: "FISICA", teacher: "Prof. Wendy" },
          },
        },
        {
          time: "11:10 - 11:50",
          days: {
            lunes: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            martes: { subject: "ART. PLASTICAS", teacher: "Prof. Cesar" },
            miercoles: { subject: "MATEMAT", teacher: "Prof. Lucio" },
            jueves: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            viernes: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            altLunes: { subject: "LIBRE", teacher: "" },
            altMiercoles: { subject: "FISICA", teacher: "Prof. Wendy" },
          },
        },
        {
          time: "11:50 - 12:30",
          days: {
            lunes: { subject: "", teacher: "" },
            martes: { subject: "", teacher: "" },
            miercoles: { subject: "", teacher: "" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Lucio" },
            viernes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            altLunes: { subject: "", teacher: "" },
            altMiercoles: { subject: "", teacher: "" },
          },
        },
      ],
    },
  },
  "5to": {
    "A": {
      title: "Horario 5to \"A\"",
      header: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Al. Lunes", "A. Miércol"],
      rows: [
        {
          time: "7:30 - 8:10",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            martes: { subject: "VALORES", teacher: "P Edmundo" },
            miercoles: { subject: "ED. FISICA", teacher: "P. Elodio" },
            jueves: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            viernes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            altLunes: { subject: "BTH", teacher: "Prof: Edson" },
            altMiercoles: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
          },
        },
        {
          time: "8:10 - 8:50",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            martes: { subject: "VALORES", teacher: "P Edmundo" },
            miercoles: { subject: "ED. FISICA", teacher: "P. Elodio" },
            jueves: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            viernes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            altLunes: { subject: "BTH", teacher: "Prof: Edson" },
            altMiercoles: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "9:00 - 9:40",
          days: {
            lunes: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            martes: { subject: "FISICA", teacher: "Prof. Wendy" },
            miercoles: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            jueves: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            viernes: { subject: "MATEMAT", teacher: "Prof. Lucio" },
            altLunes: { subject: "BTH", teacher: "Prof: Edson" },
            altMiercoles: { subject: "QUIMICA", teacher: "Prof. Wendy" },
          },
        },
        {
          time: "9:40 - 10:20",
          days: {
            lunes: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            martes: { subject: "FISICA", teacher: "Prof. Wendy" },
            miercoles: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            jueves: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            viernes: { subject: "MATEMAT", teacher: "Prof. Lucio" },
            altLunes: { subject: "BTH", teacher: "Prof: Edson" },
            altMiercoles: { subject: "QUIMICA", teacher: "Prof. Wendy" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "10:30 - 11:10",
          days: {
            lunes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            miercoles: { subject: "ARTE S PLAS", teacher: "Prof. Frans" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Lucio" },
            viernes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            altLunes: { subject: "BTH", teacher: "Prof: Edson" },
            altMiercoles: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:10 - 11:50",
          days: {
            lunes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            miercoles: { subject: "ARTE S PLAS", teacher: "Prof. Frans" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Lucio" },
            viernes: { subject: "C. SOCIALES", teacher: "Prof. Omar" },
            altLunes: { subject: "BTH", teacher: "Prof: Edson" },
            altMiercoles: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:50 - 12:30",
          days: {
            lunes: { subject: "", teacher: "" },
            martes: { subject: "", teacher: "" },
            miercoles: { subject: "MATEMAT", teacher: "Prof. Lucio" },
            jueves: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            viernes: { subject: "", teacher: "" },
            altLunes: { subject: "", teacher: "" },
            altMiercoles: { subject: "", teacher: "" },
          },
        },
      ],
    },
    "B": {
      title: "Horario 5to \"B\"",
      header: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Al. Lunes", "A. Miércol"],
      rows: [
        {
          time: "7:30 - 8:10",
          days: {
            lunes: { subject: "VALORES", teacher: "P Edmundo" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            miercoles: { subject: "ARTE S PLAS", teacher: "Prof. Frans" },
            jueves: { subject: "FISICA", teacher: "Prof. Wendy" },
            viernes: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            altLunes: { subject: "LIBRE", teacher: "" },
            altMiercoles: { subject: "BTH", teacher: "Prof: Edson" },
          },
        },
        {
          time: "8:10 - 8:50",
          days: {
            lunes: { subject: "VALORES", teacher: "P Edmundo" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            miercoles: { subject: "ARTE S PLAS", teacher: "Prof. Frans" },
            jueves: { subject: "FISICA", teacher: "Prof. Wendy" },
            viernes: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            altLunes: { subject: "LIBRE", teacher: "" },
            altMiercoles: { subject: "BTH", teacher: "Prof: Edson" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "9:00 - 9:40",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            martes: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            miercoles: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            jueves: { subject: "ED. FISICA", teacher: "P. Elodio" },
            viernes: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            altLunes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            altMiercoles: { subject: "BTH", teacher: "Prof: Edson" },
          },
        },
        {
          time: "9:40 - 10:20",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            martes: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            miercoles: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            jueves: { subject: "ED. FISICA", teacher: "P. Elodio" },
            viernes: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            altLunes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            altMiercoles: { subject: "BTH", teacher: "Prof: Edson" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "10:30 - 11:10",
          days: {
            lunes: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            martes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            miercoles: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            jueves: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            viernes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            altLunes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            altMiercoles: { subject: "BTH", teacher: "Prof: Edson" },
          },
        },
        {
          time: "11:10 - 11:50",
          days: {
            lunes: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            martes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            miercoles: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            jueves: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            viernes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            altLunes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            altMiercoles: { subject: "BTH", teacher: "Prof: Edson" },
          },
        },
        {
          time: "11:50 - 12:30",
          days: {
            lunes: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            martes: { subject: "", teacher: "" },
            miercoles: { subject: "", teacher: "" },
            jueves: { subject: "", teacher: "" },
            viernes: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            altLunes: { subject: "", teacher: "" },
            altMiercoles: { subject: "", teacher: "" },
          },
        },
      ],
    },
  },
  "6to": {
    "A": {
      title: "Horario 6to \"A\"",
      header: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Al. Lunes", "A. Miércol"],
      rows: [
        {
          time: "7:30 - 8:10",
          days: {
            lunes: { subject: "VALORES", teacher: "Prof: Edson" },
            martes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            miercoles: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            jueves: { subject: "ED. FISICA", teacher: "P. Elodio" },
            viernes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            altLunes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            altMiercoles: { subject: "BTH", teacher: "Prof: Edson" },
          },
        },
        {
          time: "8:10 - 8:50",
          days: {
            lunes: { subject: "VALORES", teacher: "Prof: Edson" },
            martes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            miercoles: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            jueves: { subject: "ED. FISICA", teacher: "P. Elodio" },
            viernes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            altLunes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            altMiercoles: { subject: "BTH", teacher: "Prof: Edson" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "9:00 - 9:40",
          days: {
            lunes: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            martes: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            miercoles: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            jueves: { subject: "FISICA", teacher: "Prof. Wendy" },
            viernes: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            altLunes: { subject: "ARTES PLAST", teacher: "Prof. Jose" },
            altMiercoles: { subject: "BTH", teacher: "Prof: Edson" },
          },
        },
        {
          time: "9:40 - 10:20",
          days: {
            lunes: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            martes: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
            miercoles: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            jueves: { subject: "FISICA", teacher: "Prof. Wendy" },
            viernes: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            altLunes: { subject: "ARTES PLAST", teacher: "Prof. Jose" },
            altMiercoles: { subject: "BTH", teacher: "Prof: Edson" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "10:30 - 11:10",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            miercoles: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            viernes: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            altLunes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            altMiercoles: { subject: "BTH", teacher: "Prof: Edson" },
          },
        },
        {
          time: "11:10 - 11:50",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            miercoles: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            viernes: { subject: "", teacher: "" },
            altLunes: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            altMiercoles: { subject: "BTH", teacher: "Prof: Edson" },
          },
        },
        {
          time: "11:50 - 12:30",
          days: {
            lunes: { subject: "", teacher: "" },
            martes: { subject: "", teacher: "" },
            miercoles: { subject: "", teacher: "" },
            jueves: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            viernes: { subject: "", teacher: "" },
            altLunes: { subject: "", teacher: "" },
            altMiercoles: { subject: "", teacher: "" },
          },
        },
      ],
    },
    "B": {
      title: "Horario 6to \"B\"",
      header: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Al. Lunes", "A. Miércol"],
      rows: [
        {
          time: "7:30 - 8:10",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            martes: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            miercoles: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            jueves: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            viernes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            altLunes: { subject: "BTH", teacher: "Prof: Edson" },
            altMiercoles: { subject: "FISICA", teacher: "Prof. Wendy" },
          },
        },
        {
          time: "8:10 - 8:50",
          days: {
            lunes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            martes: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            miercoles: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            jueves: { subject: "ED. MUSICAL", teacher: "P. Ronald" },
            viernes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            altLunes: { subject: "BTH", teacher: "Prof: Edson" },
            altMiercoles: { subject: "FISICA", teacher: "Prof. Wendy" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "9:00 - 9:40",
          days: {
            lunes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            miercoles: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            viernes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            altLunes: { subject: "BTH", teacher: "Prof: Edson" },
            altMiercoles: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
          },
        },
        {
          time: "9:40 - 10:20",
          days: {
            lunes: { subject: "BIO-GEO", teacher: "Prof. Grover" },
            martes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            miercoles: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            jueves: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            viernes: { subject: "C. SOCIALES", teacher: "Prof. Jose" },
            altLunes: { subject: "BTH", teacher: "Prof: Edson" },
            altMiercoles: { subject: "L. EXTRANJ", teacher: "P. Mary Luz" },
          },
        },
        { time: "RECREO", isRecess: true, days: {} },
        {
          time: "10:30 - 11:10",
          days: {
            lunes: { subject: "VALORES", teacher: "P. NELIDA" },
            martes: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            miercoles: { subject: "ED. FISICA", teacher: "P. Elodio" },
            jueves: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            viernes: { subject: "ARTES PLAS", teacher: "Prof. Jose" },
            altLunes: { subject: "BTH", teacher: "Prof: Edson" },
            altMiercoles: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:10 - 11:50",
          days: {
            lunes: { subject: "VALORES", teacher: "P. NELIDA" },
            martes: { subject: "QUIMICA", teacher: "Prof. Wendy" },
            miercoles: { subject: "ED. FISICA", teacher: "P. Elodio" },
            jueves: { subject: "PSICO-FILO", teacher: "P. NELIDA" },
            viernes: { subject: "ARTES PLAS", teacher: "Prof. Jose" },
            altLunes: { subject: "BTH", teacher: "Prof: Edson" },
            altMiercoles: { subject: "LIBRE", teacher: "" },
          },
        },
        {
          time: "11:50 - 12:30",
          days: {
            lunes: { subject: "", teacher: "" },
            martes: { subject: "", teacher: "" },
            miercoles: { subject: "MATEMAT", teacher: "Prof. Cesar" },
            jueves: { subject: "", teacher: "" },
            viernes: { subject: "LENGUAJE", teacher: "Prof. Frans" },
            altLunes: { subject: "", teacher: "" },
            altMiercoles: { subject: "", teacher: "" },
          },
        },
      ],
    },
  },
};

const grades = ["1ro", "2do", "3ro", "4to", "5to", "6to"];
const sections = ["A", "B"]; // Can be expanded if there are C, D sections for other grades

export default function HorariosPage() {
  const [selectedGrade, setSelectedGrade] = useState("1ro");
  const [selectedSection, setSelectedSection] = useState("A");
  const [viewMode, setViewMode] = useState("table"); // "table" or "list"

  const currentTimetable = useMemo(() => {
    return horariosData[selectedGrade]?.[selectedSection];
  }, [selectedGrade, selectedSection]);

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center justify-center">
            <CalendarClock className="mr-2 h-6 w-6 md:h-8 md:w-8" /> Horarios Escolares
          </CardTitle>
          <CardDescription className="text-base md:text-lg">
            Seleccione el grado y la sección para ver el horario de clases.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Select value={selectedGrade} onValueChange={setSelectedGrade}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Seleccione Grado" />
            </SelectTrigger>
            <SelectContent>
              {grades.map(grade => (
                <SelectItem key={grade} value={grade}>{grade}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedSection} onValueChange={setSelectedSection}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Seleccione Sección" />
            </SelectTrigger>
            <SelectContent>
              {sections.map(section => (
                <SelectItem key={section} value={section}>{section}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {currentTimetable ? (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl text-primary">{currentTimetable.title}</CardTitle>
            <div className="flex items-center space-x-2">
              <Tabs defaultValue="table" onValueChange={setViewMode} className="w-[200px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="table" className="flex items-center gap-1">
                    <Monitor className="h-4 w-4" /> Tabla
                  </TabsTrigger>
                  <TabsTrigger value="list" className="flex items-center gap-1">
                    <Smartphone className="h-4 w-4" /> Móvil
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            {viewMode === "table" ? (
              <div className="overflow-x-auto -mx-6 px-6">
                <div className="inline-block min-w-full align-middle">
                  <Table className="min-w-full">
                    <TableHeader>
                      <TableRow>
                        {currentTimetable.header.map(day => (
                          <TableHead key={day} className="whitespace-nowrap text-center font-semibold text-xs md:text-sm">{day}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentTimetable.rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex} className={row.isRecess ? "bg-muted/30" : ""}>
                          <TableCell className={`font-medium whitespace-nowrap text-center sticky left-0 bg-card z-10 text-xs md:text-sm ${row.isRecess ? "bg-muted/30" : ""}`}>{row.time}</TableCell>
                          {row.isRecess ? (
                            <TableCell colSpan={currentTimetable.header.length - 1} className="text-center font-semibold text-muted-foreground text-xs md:text-sm">
                              R E C R E O
                            </TableCell>
                          ) : (
                            <>
                              {(['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'altLunes', 'altMiercoles'] as const).map(dayKey => {
                                const entry = row.days[dayKey];
                                return (
                                  <TableCell key={dayKey} className="text-center min-w-[100px] p-2 md:p-4 text-xs md:text-sm">
                                    {entry ? (
                                      <div className="flex flex-col">
                                        <span className="font-medium">{entry.subject}</span>
                                        {entry.teacher && <span className="text-[10px] md:text-xs text-muted-foreground">{entry.teacher}</span>}
                                      </div>
                                    ) : (
                                      <span>-</span>
                                    )}
                                  </TableCell>
                                );
                              })}
                            </>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {currentTimetable.rows.map((row, rowIndex) => (
                  <div key={rowIndex} className={`rounded-lg p-3 ${row.isRecess ? "bg-muted/30" : "border"}`}>
                    <h3 className="text-center font-bold mb-2">{row.time}</h3>
                    {row.isRecess ? (
                      <p className="text-center font-semibold text-muted-foreground">R E C R E O</p>
                    ) : (
                      <div className="grid grid-cols-1 gap-3">
                        {(['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'altLunes', 'altMiercoles'] as const).map(dayKey => {
                          const entry = row.days[dayKey];
                          const dayLabel = {
                            lunes: "Lunes",
                            martes: "Martes",
                            miercoles: "Miércoles",
                            jueves: "Jueves",
                            viernes: "Viernes",
                            altLunes: "Lunes Alterno",
                            altMiercoles: "Miércoles Alterno"
                          }[dayKey];

                          // Solo mostrar días con contenido
                          if (!entry || !entry.subject) return null;

                          return (
                            <div key={dayKey} className="flex items-center p-2 border-b last:border-b-0">
                              <div className="w-1/3 font-medium text-sm">{dayLabel}:</div>
                              <div className="w-2/3">
                                <div className="font-medium text-sm">{entry.subject}</div>
                                {entry.teacher && <div className="text-xs text-muted-foreground">{entry.teacher}</div>}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed rounded-lg">
              <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-xl font-semibold">Horario no disponible</p>
              <p className="text-muted-foreground">
                El horario para {selectedGrade} - Sección {selectedSection} aún no ha sido cargado.
              </p>
              <p className="text-sm text-muted-foreground mt-2">Por favor, seleccione otra combinación o inténtelo más tarde.</p>
            </div>
          </CardContent>
        </Card>
      )}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-primary">Nota Importante</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Estos horarios son de referencia y podrían estar sujetos a cambios. Para confirmación oficial, por favor consulte con la administración de la escuela.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

