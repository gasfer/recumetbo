import { parseISO } from "date-fns";
import { imagesByFolder } from "../utils/imagesByFolder";

// Noticias
export const newsData = [
  {
    id: "1",
    title: "AJ firma acuerdo con una empresa para destruir 782 máquinas de juego",
    source: "La Razón",
    date: parseISO("2023-10-04"),
    description:
      "La Autoridad de Fiscalización del Juego (AJ) firmó un convenio con Recumet para desmantelar, destruir y exportar las partes contaminantes de 782 máquinas de azar decomisadas. El artículo destaca que el proceso se inició el 4 de octubre de 2023 y concluyó en diciembre, siguiendo la Ley 060 (Juegos de Lotería y Azar) y la Ley 071 (Madre Tierra). La directora de la AJ señala que Santa Cruz es el departamento con mayor cantidad de máquinas ilegales.",
    link: "#",
    categories: ["RAEE", "Prensa"],
    keywords: ["máquinas de juego", "destrucción", "exportación", "AJ", "Recumet", "Santa Cruz"],
    imageUrl: imagesByFolder["raee"]?.[0] || null,
  },
  {
    id: "2",
    title: "AJ comisa nueve máquinas de juego ilegales en Sucre",
    source: "El Día",
    date: parseISO("2023-10-20"),
    description:
      "Tras un operativo en Sucre, la AJ confiscó nueve máquinas ilegales. El reportaje recuerda que la AJ ha destruido 19.533 máquinas ilegales y menciona que se firmó recientemente un convenio con Recumet para destruir y exportar partes contaminantes de 782 máquinas decomisadas durante el año.",
    link: "#",
    categories: ["RAEE", "Prensa"],
    keywords: ["máquinas de juego", "decomiso", "Sucre", "AJ", "Recumet"],
    imageUrl: imagesByFolder["raee"]?.[1] || null,
  },
  {
    id: "3",
    title: "La Autoridad del Juego y Recuperadora de Metales destruirán más de 630 máquinas ilegales",
    source: "Agencia Boliviana de Información",
    date: parseISO("2024-10-26"),
    description:
      "La nota informa que la AJ suscribió un nuevo convenio con Recumet para la destrucción de 639 máquinas de juego decomisadas. El director ejecutivo de la AJ resalta que la empresa cuenta con la experiencia necesaria para garantizar una destrucción responsable y ambientalmente segura.",
    link: "#",
    categories: ["RAEE", "Prensa"],
    keywords: ["máquinas de juego", "destrucción", "convenio", "AJ", "Recumet"],
    imageUrl: imagesByFolder["raee"]?.[2] || null,
  },
  {
    id: "4",
    title: "La Autoridad del Juego destruirá más de 600 máquinas ilegales",
    source: "ATB Digital",
    date: parseISO("2024-10-26"),
    description:
      "Este medio explica que la AJ destruirá 639 medios de juego decomisados y que el trabajo se realizará en coordinación con Recumet. El director de la AJ subraya que la alianza garantiza una destrucción responsable y destaca que la AJ ha destruido más de 20.000 máquinas ilegales desde 2016.",
    link: "#",
    categories: ["RAEE", "Prensa"],
    keywords: ["máquinas de juego", "destrucción", "AJ", "Recumet", "20.000 máquinas"],
    imageUrl: imagesByFolder["raee"]?.[3] || null,
  },
  {
    id: "5",
    title: "Bolivia: La Autoridad del Juego destruye más de 600 tragamonedas ilegales",
    source: "Yogonet",
    date: parseISO("2024-10-31"),
    description:
      "Yogonet informa que la AJ suscribió un convenio con Recumet para destruir 639 máquinas tragamonedas decomisadas. El director de la AJ resalta la importancia de la alianza y remarca que la destrucción seguirá estándares ambientales, separando componentes tóxicos y reciclando materiales reutilizables.",
    link: "#",
    categories: ["RAEE", "Prensa"],
    keywords: ["tragamonedas", "destrucción", "AJ", "Recumet", "estándares ambientales"],
    imageUrl: imagesByFolder["raee"]?.[4] || null,
  },
  // ... y así con las demás noticias, usando el índice para recorrer imagesByFolder["raee"] ...
];

// Categorías
export const categories = {
  type: ["Metal Ferroso", "No Ferroso", "RAEE"],
  source: ["TV", "Ferias", "Prensa", "RRSS"],
};

// Años ordenados de mayor a menor
export const years = Array.from(new Set(newsData.map((news) => news.date.getFullYear()))).sort((a, b) => b - a);
