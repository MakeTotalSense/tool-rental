export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sophie Martin",
        role: "Architecte d'intérieur",
        company: "Studio Design",
        content: "Service impeccable ! Les outils sont toujours en parfait état et la location est très simple. Je recommande vivement pour tous vos projets professionnels.",
        rating: 5,
        avatar: "https://ui-avatars.com/api/?name=Sophie+Martin&background=a855f7&color=fff"
    },
    {
        id: 2,
        name: "Thomas Dubois",
        role: "Bricoleur",
        company: "Particulier",
        content: "Excellent rapport qualité-prix. J'ai pu rénover toute ma maison sans investir dans des outils coûteux. Le service client est très réactif.",
        rating: 5,
        avatar: "https://ui-avatars.com/api/?name=Thomas+Dubois&background=ec4899&color=fff"
    },
    {
        id: 3,
        name: "Marie Lefebvre",
        role: "Paysagiste",
        company: "Jardins & Co",
        content: "Une solution parfaite pour mes besoins saisonniers. Les outils de jardin sont professionnels et bien entretenus. Gain de temps et d'argent considérable.",
        rating: 5,
        avatar: "https://ui-avatars.com/api/?name=Marie+Lefebvre&background=06b6d4&color=fff"
    },
    {
        id: 4,
        name: "Pierre Rousseau",
        role: "Entrepreneur",
        company: "Bâti Pro",
        content: "Nous utilisons régulièrement ce service pour compléter notre parc d'outils. Très pratique et économique pour les chantiers ponctuels.",
        rating: 4,
        avatar: "https://ui-avatars.com/api/?name=Pierre+Rousseau&background=fbbf24&color=000"
    }
];
