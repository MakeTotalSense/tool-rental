export interface Category {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
}

export const categories: Category[] = [
    {
        id: "electroportatif",
        name: "Électroportatif",
        description: "Outils électriques portables pour tous vos travaux",
        icon: "⚡",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: "jardin",
        name: "Jardin",
        description: "Équipement pour l'entretien de vos espaces verts",
        icon: "🌿",
        color: "from-green-500 to-emerald-500"
    },
    {
        id: "manutention",
        name: "Manutention",
        description: "Outils pour transporter et déplacer vos matériaux",
        icon: "🚚",
        color: "from-orange-500 to-red-500"
    },
    {
        id: "acces",
        name: "Accès en hauteur",
        description: "Échelles et échafaudages pour travailler en hauteur",
        icon: "🪜",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "nettoyage",
        name: "Nettoyage",
        description: "Équipement professionnel de nettoyage",
        icon: "💧",
        color: "from-cyan-500 to-blue-500"
    }
];
