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
    name: "Meuleuse d'angle (batterie)",
    description: "Meuleuse d'angle robuste pour tronçonner et ébarber. Indispensable pour la coupe de métaux et matériaux durs.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 15,
    category: "Électroportatif",
    specifications: [
      "Puissance: 800W",
      "Disque: 125mm",
      "Filaire 230V",
      "Poignée latérale 2 positions",
      "Carter de protection orientable"
    ],
    images: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=600"
    ],
    available: true,
    rating: 4.7,
    reviews: 24,
    usage: "Découpe de tuyaux métalliques, briques, carrelage ou meulage de soudures.",
    usageTips: [
      "Vérifiez l'état du disque avant chaque utilisation",
      "Ne forcez pas sur la machine, laissez le poids faire le travail",
      "Utilisez la poignée latérale pour plus de stabilité"
    ],
    safetyGuide: [
      "Port de lunettes de protection et gants OBLIGATOIRE",
      "Ne démontez jamais le carter de protection",
      "Attention aux projections d'étincelles"
    ]
  },
  {
    id: 2,
    name: "Ponceuse excentrique (filaire)",
    description: "Ponceuse circulaire polyvalente pour un ponçage fin et rapide sur grandes surfaces.",
    image: "https://images.unsplash.com/photo-1629904869752-130541743432?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 18,
    category: "Électroportatif",
    specifications: [
      "Plateau: 125mm",
      "Filaire 230V",
      "Variateur de vitesse",
      "Système micro-filtre",
      "Mouvement orbital et rotatif"
    ],
    images: [
      "https://images.unsplash.com/photo-1629904869752-130541743432?auto=format&fit=crop&q=80&w=600"
    ],
    available: true,
    rating: 4.8,
    reviews: 18,
    usage: "Ponçage de dégrossissage ou de finition sur bois, métal et plastique.",
    usageTips: [
      "Commencez avec un grain grossier et finissez avec un grain fin",
      "N'appuyez pas trop fort pour éviter de marquer le bois",
      "Videz le réservoir à poussière régulièrement"
    ],
    safetyGuide: [
      "Portez un masque anti-poussière",
      "Portez des protections auditives",
      "Attendez l'arrêt complet du plateau avant de poser la machine"
    ]
  },
  {
    id: 3,
    name: "Scie à onglet radiale",
    description: "Scie stationnaire précise pour coupes d'angles et biseaux. Fournie avec 2 disques (bois/métal).",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 35,
    category: "Électroportatif",
    specifications: [
      "Lame: 216mm / 254mm",
      "Coupes biaises jusqu'à 45°",
      "Guide laser",
      "Sac à poussière",
      "2 disques inclus (Bois & Métal)"
    ],
    images: [
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600"
    ],
    available: true,
    rating: 4.9,
    reviews: 42,
    usage: "Coupe de plinthes, parquet, tasseaux ou profilés alu avec précision.",
    usageTips: [
      "Bloquez bien la pièce à couper avec les étaux",
      "Laissez la lame atteindre sa vitesse max avant de descendre",
      "Changez de disque selon le matériau (Bois ou Métal)"
    ],
    safetyGuide: [
      "Gardez les mains loin de la zone de coupe",
      "Portez lunettes et casque anti-bruit",
      "Débranchez la scie pour changer le disque"
    ]
  },
  {
    id: 4,
    name: "Coupe-bordure (batterie)",
    description: "Léger et maniable, idéal pour les finitions de jardin < 50m² sans contrainte de fil.",
    image: "https://images.unsplash.com/photo-1622287431718-42e7c41eb407?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 20,
    category: "Jardin",
    specifications: [
      "Batterie 18V incluse",
      "Autonomie: ~30 min",
      "Largeur de coupe: 26cm",
      "Tête pivotante",
      "Manche télescopique"
    ],
    images: [
      "https://images.unsplash.com/photo-1622287431718-42e7c41eb407?auto=format&fit=crop&q=80&w=600"
    ],
    available: true,
    rating: 4.5,
    reviews: 15,
    usage: "Finitions le long des murs, grillages et autour des arbres. Aussi utilisable pour tondre des petits jardins.",
    usageTips: [
      "Avancez le fil régulièrement pour une coupe nette",
      "Utilisez le guide-étrier pour protéger vos fleurs",
      "Chargez la batterie à fond avant de commencer"
    ],
    safetyGuide: [
      "Portez des chaussures fermées et pantalons longs",
      "Lunettes de protection recommandées",
      "Ne pas utiliser sous la pluie"
    ]
  },
  {
    id: 5,
    name: "Bineuse électrique (filaire)",
    description: "Motobineuse électrique compacte pour retourner la terre de potagers entre 50 et 200m².",
    image: "https://images.unsplash.com/photo-1592429408663-1457df7336c1?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 25,
    category: "Jardin",
    specifications: [
      "Puissance: 1000W",
      "Largeur de travail: 36cm",
      "Profondeur: 20cm",
      "4 fraises en acier",
      "Guidon pliable"
    ],
    images: [
      "https://images.unsplash.com/photo-1592429408663-1457df7336c1?auto=format&fit=crop&q=80&w=600"
    ],
    available: true,
    rating: 4.6,
    reviews: 12,
    usage: "Préparation du sol avant semis, désherbage mécanique des plate-bandes.",
    usageTips: [
      "Retirez les grosses pierres avant de passer la machine",
      "Travaillez sur un sol légèrement humide, pas détrempé",
      "Croisez les passages pour un résultat fin"
    ],
    safetyGuide: [
      "Éloignez le câble d'alimentation des fraises",
      "Portez des bottes de sécurité",
      "Tenez fermement le guidon à deux mains"
    ]
  },
  {
    id: 6,
    name: "Carotteuse diamant",
    description: "Machine puissante pour perçage de gros diamètre dans béton et pierre. Si je n'ai pas le diamètre dont vous avez besoin pour vos travaux, nous pouvons nous arranger pour que je vous le rachète à la fin de votre travail.",
    image: "https://images.unsplash.com/photo-1536605055047-975dc5add72b?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 60,
    category: "Électroportatif",
    specifications: [
      "Diamètre max: 150mm",
      "Forage à sec ou à eau",
      "Puissance: 2000W",
      "Embrayage de sécurité",
      "Trépan non inclus (en supplément)"
    ],
    images: [
      "https://images.unsplash.com/photo-1536605055047-975dc5add72b?auto=format&fit=crop&q=80&w=600"
    ],
    available: false,
    rating: 5.0,
    reviews: 8,
    usage: "Passages de tuyaux, gaines vmc, ou prélèvements dans murs béton.",
    usageTips: [
      "Utilisez de l'eau pour refroidir le trépan et limiter la poussière",
      "Fixez le bâti si possible pour plus de précision",
      "Ne forcez pas, laissez le diamant 'manger' la matière"
    ],
    safetyGuide: [
      "Casque anti-bruit et lunettes obligatoires",
      "Attention au blocage brutal (kickback)",
      "Portez des gants anti-vibrations"
    ]
  },
  {
    id: 7,
    name: "Perforateur burineur",
    description: "Perfo puissant pour percer le béton armé ou petits travaux de démolition. Forets SDS+ inclus.",
    image: "https://images.unsplash.com/photo-1616782299719-20ff68194d2f?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 22,
    category: "Électroportatif",
    specifications: [
      "Force de frappe: 3J",
      "Mandrin SDS+",
      "3 modes: perçage, perfo, burinage",
      "Poignée anti-vibrations",
      "Set de forets inclus"
    ],
    images: [
      "https://images.unsplash.com/photo-1616782299719-20ff68194d2f?auto=format&fit=crop&q=80&w=600"
    ],
    available: true,
    rating: 4.8,
    reviews: 56,
    usage: "Perçage béton, pierre, brique ou retrait de carrelage.",
    usageTips: [
      "Graissez la queue des forets avant insertion",
      "Laissez la percussion travailler sans appuyer comme une brute",
      "Utilisez la butée de profondeur"
    ],
    safetyGuide: [
      "Protections auditives indispensables",
      "Lunettes de protection contre les éclats",
      "Attention aux armatures métalliques dans le béton"
    ]
  },
  {
    id: 9,
    name: "Perceuse visseuse (batterie)",
    description: "L'outil indispensable. Légère, maniable, pour tous vissages et perçages bois/métal.",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 12,
    category: "Électroportatif",
    specifications: [
      "Batterie 18V Li-Ion",
      "Couple 50Nm",
      "Mandrin 13mm auto",
      "2 vitesses",
      "Éclairage LED"
    ],
    images: [
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600"
    ],
    available: true,
    rating: 4.9,
    reviews: 89,
    usage: "Montage de meubles, accrochage de tableaux, perçage bois et métal.",
    usageTips: [
      "Réglez le couple pour ne pas abîmer les têtes de vis",
      "Vitesse 1 pour visser, Vitesse 2 pour percer",
      "Utilisez des embouts de qualité"
    ],
    safetyGuide: [
      "Retirez la batterie pour changer l'embout",
      "Ne pas porter de gants amples (risque d'entraînement)",
      "Lunettes conseillées pour le perçage"
    ]
  },
  {
    id: 10,
    name: "Brouette de chantier",
    description: "Brouette tout-terrain renforcée. Roue increvable.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 5,
    category: "Manutention",
    specifications: [
      "Cuve 100L",
      "Charge max: 150kg",
      "Roue pleine (pas de crevaison)",
      "Châssis tubulaire renforcé",
      "Poignées ergonomiques"
    ],
    images: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600"
    ],
    available: true,
    rating: 4.7,
    reviews: 33,
    usage: "Transport de terre, gravats, sacs de ciment ou outils sur chantier.",
    usageTips: [
      "Chargez le poids sur la roue (à l'avant) pas sur les bras",
      "Gardez le dos droit en levant",
      "Nettoyez la cuve au jet après usage (surtout béton)"
    ],
    safetyGuide: [
      "Portez des chaussures de sécurité",
      "Attention dans les descentes avec une charge lourde",
      "Portez des gants pour une meilleure prise"
    ]
  },
  {
    id: 11,
    name: "Scie sabre (batterie)",
    description: "La scie de démolition par excellence. Coupe bois, métal, plastique et plâtre sans effort.",
    image: "https://images.unsplash.com/photo-1566938064504-a38b58f89b6c?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 18,
    category: "Électroportatif",
    specifications: [
      "Puissance: 1100W",
      "Course de la lame: 28mm",
      "Vitesse variable",
      "Changement de lame sans outil",
      "Fournie avec lames bois et métal"
    ],
    images: [
      "https://images.unsplash.com/photo-1566938064504-a38b58f89b6c?auto=format&fit=crop&q=80&w=600"
    ],
    available: true,
    rating: 4.6,
    reviews: 28,
    usage: "Démolition de cloisons, découpe de tuyaux, élagage de grosses branches.",
    usageTips: [
      "Plaquez bien le sabot contre la pièce à découper pour éviter les vibrations",
      "Utilisez la bonne lame pour le bon matériau (dents fines pour métal)",
      "Laissez la lame s'arrêter avant de la retirer de la coupe"
    ],
    safetyGuide: [
      "Tenir la machine fermement à deux mains",
      "Port de lunettes de protection obligatoire (projections)",
      "Attention aux tuyaux ou câbles cachés dans les murs"
    ]
  },
  {
    id: 12,
    name: "Scie sauteuse (filaire)",
    description: "Pour vos découpes courbes et précises dans le bois, le mélaminé ou le métal.",
    image: "https://images.unsplash.com/photo-1610543666662-7945d81b2382?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 12,
    category: "Électroportatif",
    specifications: [
      "Mouvement pendulaire 4 positions",
      "Soufflerie de copeaux",
      "Guidage précis",
      "Variateur de vitesse",
      "Inclinaison de la semelle 45°"
    ],
    images: [
      "https://images.unsplash.com/photo-1610543666662-7945d81b2382?auto=format&fit=crop&q=80&w=600"
    ],
    available: true,
    rating: 4.7,
    reviews: 54,
    usage: "Découpe de plan de travail (évier), parquet, ou formes courbes.",
    usageTips: [
      "Coupez sur l'envers pour ne pas écailler le parement (sauf si lame inversée)",
      "Utilisez le mouvement pendulaire pour aller vite (coupe grossière)",
      "Avancez sans forcer pour une coupe d'équerre"
    ],
    safetyGuide: [
      "Ne mettez jamais les doigts devant la lame",
      "Portez des lunettes de protection",
      "Débranchez pour changer la lame"
    ]
  }
];
