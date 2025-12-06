export interface Tool {
  id: number;
  name: string;
  description: string;
  image: string;
  pricePerDay: number;
  category: string;
  specifications: string[];
  images: string[];
  available: boolean;
  rating: number;
  reviews: number;
  usage?: string;
  usageTips?: string[];
  safetyGuide?: string[];
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "Perceuse sans fil",
    description: "Perceuse légère, batterie longue durée. Parfaite pour tous vos travaux de perçage et vissage.",
    image: "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-electric-cordless-drill-tool-on-white-background-png-image_13759037.png",
    pricePerDay: 15,
    category: "Électroportatif",
    specifications: [
      "Batterie 18V Li-Ion",
      "2 vitesses mécaniques",
      "Couple max: 60 Nm",
      "Mandrin auto-serrant 13mm",
      "Poids: 1.5kg"
    ],
    images: [
      "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-electric-cordless-drill-tool-on-white-background-png-image_13759037.png",
      "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-electric-cordless-drill-tool-on-white-background-png-image_13759037.png",
      "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-electric-cordless-drill-tool-on-white-background-png-image_13759037.png"
    ],
    available: true,
    rating: 4.8,
    reviews: 124,
    usage: "Idéale pour le montage de meubles, la fixation d'étagères ou les travaux légers de rénovation.",
    usageTips: [
      "Chargez complètement la batterie avant la première utilisation",
      "Utilisez le bon embout pour éviter d'abîmer les vis",
      "Commencez le perçage à vitesse lente"
    ],
    safetyGuide: [
      "Portez des lunettes de protection",
      "Attachez vos cheveux longs",
      "Retirez bijoux et accessoires pendants"
    ]
  },
  {
    id: 2,
    name: "Tondeuse à gazon",
    description: "Idéale pour pelouses jusqu'à 500 m². Moteur puissant et silencieux.",
    image: "https://cdn-icons-png.flaticon.com/512/1673/1673671.png",
    pricePerDay: 25,
    category: "Jardin",
    specifications: [
      "Largeur de coupe: 46cm",
      "Hauteur réglable: 25-75mm",
      "Bac de ramassage: 60L",
      "Moteur thermique 4 temps",
      "Surface max: 500m²"
    ],
    images: [
      "https://cdn-icons-png.flaticon.com/512/1673/1673671.png",
      "https://cdn-icons-png.flaticon.com/512/1673/1673671.png"
    ],
    available: true,
    rating: 4.6,
    reviews: 89,
    usage: "Parfaite pour l'entretien régulier des jardins de taille moyenne.",
    usageTips: [
      "Tondez sur herbe sèche pour un meilleur résultat",
      "Videz le bac régulièrement",
      "Nettoyez le carter après chaque utilisation"
    ],
    safetyGuide: [
      "Portez des chaussures fermées robustes",
      "Éloignez enfants et animaux de la zone de tonte",
      "Ne jamais mettre les mains sous la tondeuse en marche"
    ]
  },
  {
    id: 3,
    name: "Brouette professionnelle",
    description: "Brouette robuste pour transporter matériaux ou terre. Construction renforcée.",
    image: "https://cdn-icons-png.flaticon.com/512/2903/2903411.png",
    pricePerDay: 10,
    category: "Manutention",
    specifications: [
      "Capacité: 100L",
      "Charge max: 150kg",
      "Roue gonflable",
      "Bac galvanisé",
      "Poignées ergonomiques"
    ],
    images: [
      "https://cdn-icons-png.flaticon.com/512/2903/2903411.png"
    ],
    available: true,
    rating: 4.5,
    reviews: 67,
    usage: "Transport de gravats, terre, sable ou outils sur chantier.",
    usageTips: [
      "Gonflez bien la roue pour faciliter le roulage",
      "Répartissez la charge uniformément",
      "Poussez avec les jambes, pas avec le dos"
    ],
    safetyGuide: [
      "Portez des gants de protection",
      "Attention à la stabilité en terrain pentu",
      "Ne surchargez pas au-delà de vos capacités"
    ]
  },
  {
    id: 4,
    name: "Scie circulaire",
    description: "Précise et puissante pour tous vos travaux bois. Lame carbure incluse.",
    image: "https://cdn-icons-png.flaticon.com/512/2919/2919627.png",
    pricePerDay: 20,
    category: "Électroportatif",
    specifications: [
      "Puissance: 1400W",
      "Diamètre lame: 190mm",
      "Profondeur coupe: 66mm",
      "Inclinaison: 0-45°",
      "Guide parallèle inclus"
    ],
    images: [
      "https://cdn-icons-png.flaticon.com/512/2919/2919627.png",
      "https://cdn-icons-png.flaticon.com/512/2919/2919627.png",
      "https://cdn-icons-png.flaticon.com/512/2919/2919627.png",
      "https://cdn-icons-png.flaticon.com/512/2919/2919627.png"
    ],
    available: true,
    rating: 4.7,
    reviews: 156,
    usage: "Découpe rectiligne de planches, panneaux et bois de construction.",
    usageTips: [
      "Utilisez un guide pour des coupes droites",
      "Réglez la profondeur de coupe selon l'épaisseur",
      "Laissez la lame atteindre sa vitesse max avant d'attaquer le bois"
    ],
    safetyGuide: [
      "Lunettes et casque anti-bruit obligatoires",
      "Ne bloquez jamais le carter de protection",
      "Débranchez avant de changer la lame"
    ]
  },
  {
    id: 5,
    name: "Ponceuse orbitale",
    description: "Ponceuse professionnelle pour finitions parfaites. Système anti-poussière intégré.",
    image: "https://cdn-icons-png.flaticon.com/512/2919/2919627.png",
    pricePerDay: 18,
    category: "Électroportatif",
    specifications: [
      "Puissance: 300W",
      "Plateau: 125mm",
      "Vitesse variable",
      "Aspiration intégrée",
      "Poids: 1.2kg"
    ],
    images: [
      "https://cdn-icons-png.flaticon.com/512/2919/2919627.png",
      "https://cdn-icons-png.flaticon.com/512/2919/2919627.png"
    ],
    available: true,
    rating: 4.9,
    reviews: 203,
    usage: "Ponçage de finition sur bois, métal ou vernis.",
    usageTips: [
      "Ne pas appuyer trop fort, laissez la machine travailler",
      "Changez régulièrement de grain (gros vers fin)",
      "Videz le sac à poussière souvent"
    ],
    safetyGuide: [
      "Portez un masque anti-poussière",
      "Lunettes de protection conseillées",
      "Attention aux vibrations sur la durée"
    ]
  },
  {
    id: 6,
    name: "Échelle télescopique",
    description: "Échelle extensible jusqu'à 3.8m. Compacte et facile à transporter.",
    image: "https://cdn-icons-png.flaticon.com/512/2903/2903411.png",
    pricePerDay: 22,
    category: "Accès en hauteur",
    specifications: [
      "Hauteur max: 3.8m",
      "Charge max: 150kg",
      "Pliée: 88cm",
      "Aluminium léger",
      "Stabilisateurs inclus"
    ],
    images: [
      "https://cdn-icons-png.flaticon.com/512/2903/2903411.png",
      "https://cdn-icons-png.flaticon.com/512/2903/2903411.png",
      "https://cdn-icons-png.flaticon.com/512/2903/2903411.png"
    ],
    available: false,
    rating: 4.4,
    reviews: 78,
    usage: "Accès aux toitures, combles ou travaux en hauteur.",
    usageTips: [
      "Vérifiez le verrouillage de chaque barreau",
      "Respectez l'angle d'inclinaison de 75°",
      "Posez sur un sol stable et plat"
    ],
    safetyGuide: [
      "Ne montez jamais sur les 3 derniers barreaux",
      "Une seule personne à la fois",
      "Ne pas utiliser par vent violent"
    ]
  },
  {
    id: 7,
    name: "Nettoyeur haute pression",
    description: "Puissant nettoyeur pour terrasses, voitures et façades. Accessoires inclus.",
    image: "https://cdn-icons-png.flaticon.com/512/1673/1673671.png",
    pricePerDay: 28,
    category: "Nettoyage",
    specifications: [
      "Pression: 150 bars",
      "Débit: 450L/h",
      "Moteur: 2000W",
      "Lance rotative incluse",
      "Réservoir détergent"
    ],
    images: [
      "https://cdn-icons-png.flaticon.com/512/1673/1673671.png"
    ],
    available: true,
    rating: 4.7,
    reviews: 142,
    usage: "Décapage de terrasses, nettoyage de véhicules, murs et allées.",
    usageTips: [
      "Purgez l'air du tuyau avant d'allumer",
      "Utilisez le détergent approprié",
      "Nettoyez le filtre d'arrivée d'eau"
    ],
    safetyGuide: [
      "Ne jamais diriger le jet vers une personne ou un animal",
      "Portez des lunettes de protection",
      "Attention aux surfaces fragiles (bois tendre, peinture)"
    ]
  },
  {
    id: 8,
    name: "Meuleuse d'angle",
    description: "Meuleuse professionnelle 125mm. Idéale pour découpe et meulage.",
    image: "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-electric-cordless-drill-tool-on-white-background-png-image_13759037.png",
    pricePerDay: 16,
    category: "Électroportatif",
    specifications: [
      "Puissance: 900W",
      "Disque: 125mm",
      "Vitesse: 11000 tr/min",
      "Poignée auxiliaire",
      "Carter de protection"
    ],
    images: [
      "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-electric-cordless-drill-tool-on-white-background-png-image_13759037.png",
      "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-electric-cordless-drill-tool-on-white-background-png-image_13759037.png"
    ],
    available: true,
    rating: 4.6,
    reviews: 98,
    usage: "Découpe de métal, carrelage, béton ou ébavurage.",
    usageTips: [
      "Utilisez le disque adapté au matériau",
      "Fixez solidement la pièce à travailler",
      "Laissez la machine s'arrêter seule"
    ],
    safetyGuide: [
      "Port de lunettes et gants obligatoire",
      "Ne retirez jamais le carter de protection",
      "Attention aux étincelles (risque incendie)"
    ]
  }
];
