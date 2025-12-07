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
  usage?: string;
  usageTips?: string[];
  safetyGuide?: string[];
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "Meuleuse d'angle (batterie)",
    description: "Meuleuse d'angle robuste pour tronçonner et ébarber. Indispensable pour la coupe de métaux et matériaux durs.",
    image: "https://www.bosch-diy.com/imagestorage/fr-be/universalgrind-18v-75-100057220-hires-png-rgb-oneux-388300_w_3200_h_1600.png?imgWidth=3200&imgHeight=1600",
    pricePerDay: 15,
    category: "Électroportatif",
    specifications: [
      "Batterie 18V incluse",
      "Disque: 115mm",
      "Poignée latérale 2 positions",
      "Carter de protection orientable"
    ],
    images: [
      "https://www.bosch-diy.com/imagestorage/fr-be/universalgrind-18v-75-100057220-hires-png-rgb-oneux-388300_w_3200_h_1600.png?imgWidth=3200&imgHeight=1600",
      "https://i.ebayimg.com/00/s/MTQzNlgxNDQw/z/fpMAAOSwN51lzqyB/$_57.JPG?set_id=880000500F"
    ],
    available: true,
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
    usage: "Ponçage de dégrossissage ou de finition sur bois, métal et plastique.",
    usageTips: [
      "Commencez avec un grain grossier et finissez avec un grain fin",
      "N'appuyez pas trop fort pour éviter de marquer le bois ou l'enduit",
      "Videz le réservoir à poussière régulièrement ou branchez-y un aspirateur"
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
    image: "https://www.bosch-diy.com/imagestorage/fr-fr/easygrasscut-18v-26-100053443-hires-png-rgb-oneux-359265_w_1474_h_1474.png?imgWidth=1474&imgHeight=1474",
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
      "https://www.bosch-diy.com/imagestorage/fr-fr/easygrasscut-18v-26-100053443-hires-png-rgb-oneux-359265_w_1474_h_1474.png?imgWidth=1474&imgHeight=1474",
      "https://www.bosch-diy.com/imagestorage/en-gb/easygrasscut-26-100053348-hires-png-rgb-oneux-358195_w_3200_h_1600.png?imgWidth=3200&imgHeight=1600",
      "https://www.powertoolworld.co.uk/media/catalog/product/cache/0116182253c5f60b6fc682c7434d441c/b/o/bosch-06008c1f70-a3-bosch-universalgrasscut-18v-26-500-p4a-18-volt-powerforall-grass-trimmer_1.jpg"
    ],
    available: true,
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
    image: "https://media.castorama.fr/is/image/Castorama/motoculteur-electrique-scheppach-mte460-1500-w~4046664090977_01c_FR_CF?$MOB_PREV$&$width=1200&$height=1200",
    pricePerDay: 25,
    category: "Jardin",
    specifications: [
      "Puissance: 1500W",
      "Largeur de travail: 450mm",
      "Profondeur: 20cm",
      "4 fraises en acier",
      "Guidon pliable",
      "24 couteaux"
    ],
    images: [
      "https://media.castorama.fr/is/image/Castorama/motoculteur-electrique-scheppach-mte460-1500-w~4046664090977_01c_FR_CF?$MOB_PREV$&$width=1200&$height=1200",
      "https://m.media-amazon.com/images/I/815GhzoAJZL._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/81lnCBLhm+L.jpg"
    ],
    available: true,
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
    image: "https://www.bosch-diy.com/imagestorage/fr-fr/universalimpact-18v-60-100053514-hires-png-rgb-oneux-371707_w_1474_h_1474.png?imgWidth=1474&imgHeight=1474",
    pricePerDay: 12,
    category: "Électroportatif",
    specifications: [
      "Batterie 18V incluse",
      "Couple 40Nm",
      "Mandrin 13mm auto",
      "2 vitesses",
      "3 modes (vissage, perçage, percution",
      "Éclairage LED"
    ],
    images: [
      "https://www.bosch-diy.com/imagestorage/fr-fr/universalimpact-18v-60-100053514-hires-png-rgb-oneux-371707_w_1474_h_1474.png?imgWidth=1474&imgHeight=1474",
      "https://m.media-amazon.com/images/I/71UEKg7WplL._AC_UF1000,1000_QL80_.jpg"
    ],
    available: true,
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
    description: "Brouette tout-terrain renforcée.",
    image: "https://static.vecteezy.com/system/resources/previews/017/345/410/non_2x/3d-rendering-of-wheelbarrow-object-free-png.png",
    pricePerDay: 5,
    category: "Manutention",
    specifications: [
      "Cuve 100L",
      "Charge max: 150kg",
      "Châssis tubulaire renforcé",
      "Poignées ergonomiques"
    ],
    images: [
      "https://static.vecteezy.com/system/resources/previews/017/345/410/non_2x/3d-rendering-of-wheelbarrow-object-free-png.png"
    ],
    available: true,
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
    image: "https://media.mr-bricolage.fr/media/catalog/product/0/6/06033b2300-3165140739894-visuel_produit_base-610289_600_370.png",
    pricePerDay: 18,
    category: "Électroportatif",
    specifications: [
      "Batterie 18V incluse",
      "Course de la lame: 28mm",
      "Vitesse variable",
      "Changement de lame sans outil",
      "Fournie avec lames bois, métal ou brique"
    ],
    images: [
      "https://media.mr-bricolage.fr/media/catalog/product/0/6/06033b2300-3165140739894-visuel_produit_base-610289_600_370.png",
      "https://www.bosch-diy.com/imagestorage/en-gb/06033b2402-advancedrecip-18-fcp-2000x2000px-386823-png-image-png_w_3200_h_1600.png?imgWidth=3200&imgHeight=1600"
    ],
    available: true,
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
    description: "Pour vos découpes courbes et précises dans le bois ou le métal.",
    image: "https://www.bosch-diy.com/imagestorage/fr-fr/pst-900-pel-100024168-hires-png-rgb-oneux-67888_w_1920_h_1080.png?imgWidth=1920&imgHeight=1080",
    pricePerDay: 12,
    category: "Électroportatif",
    specifications: [
      "Mouvement pendulaire 2 positions",
      "Soufflerie de copeaux",
      "Guidage précis",
      "Variateur de vitesse",
      "Possibilité de brancher un aspirateur",
      "620W"
    ],
    images: [
      "https://www.bosch-diy.com/imagestorage/fr-fr/pst-900-pel-100024168-hires-png-rgb-oneux-67888_w_1920_h_1080.png?imgWidth=1920&imgHeight=1080",
      "https://m.media-amazon.com/images/I/61v+5MvoigL._AC_UF1000,1000_QL80_.jpg"
    ],
    available: true,
    usage: "Découpe droite ou courbée de bois et metal.",
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
  },
  {
    id: 13,
    name: "Ponceuse d'angle (filaire)",
    description: "Ponceuse d'angle polyvalente pour un ponçage fin et rapide des angles.",
    image: "https://images.unsplash.com/photo-1629904869752-130541743432?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 18,
    category: "Électroportatif",
    specifications: [
      
      "Filaire 230V",
      "Variateur de vitesse",
      "Système micro-filtre",
      "Mouvement orbital et rotatif"
    ],
    images: [
      "https://images.unsplash.com/photo-1629904869752-130541743432?auto=format&fit=crop&q=80&w=600"
    ],
    available: true,
    usage: "Ponçage de dégrossissage ou de finition sur bois, métal et plastique.",
    usageTips: [
      "Commencez avec un grain grossier et finissez avec un grain fin",
      "N'appuyez pas trop fort pour éviter de marquer le bois ou l'enduit",
      "Videz le réservoir à poussière régulièrement ou branchez-y un aspirateur"
    ],
    safetyGuide: [
      "Portez un masque anti-poussière",
      "Portez des protections auditives",
      "Attendez l'arrêt complet du plateau avant de poser la machine"
    ]
  },
  {
    id: 14,
    name: "Aspirateur de chantier (filaire)",
    description: "Aspirateur de chantier polyvalent pour nettoyer les surfaces ou brancher à vos appareils",
    image: "https://images.unsplash.com/photo-1629904869752-130541743432?auto=format&fit=crop&q=80&w=600",
    pricePerDay: 20,
    category: "Électroportatif",
    specifications: [
      "Filaire 230V",
      "Variateur de vitesse",
      "Système micro-filtre",
      "Mouvement orbital et rotatif"
    ],
    images: [
      "https://images.unsplash.com/photo-1629904869752-130541743432?auto=format&fit=crop&q=80&w=600"
    ],
    available: true,
    usage: "Nettoyage de surfaces ou brancher à vos appareils.",
    usageTips: [
      "Commencez avec un grain grossier et finissez avec un grain fin",
      "N'appuyez pas trop fort pour éviter de marquer le bois ou l'enduit",
      "Videz le réservoir à poussière régulièrement ou branchez-y un aspirateur"
    ],
    safetyGuide: [
      "Portez un masque anti-poussière",
      "Portez des protections auditives",
      "Attendez l'arrêt complet du plateau avant de poser la machine"
    ]
  },
];
