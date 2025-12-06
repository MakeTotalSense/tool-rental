# ToolRental - Premium Tool Rental Website

Une plateforme de location d'outils professionnels avec une expérience utilisateur premium inspirée d'Awwwards.

## 🚀 Fonctionnalités

- ✨ Design premium avec animations avancées
- 🧲 Curseur magnétique personnalisé
- 🎨 Glassmorphism et effets 3D
- 📱 Entièrement responsive
- 🔥 Déploiement automatique sur Firebase
- ⚡ Performance optimisée

## 📦 Technologies

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Three.js** - Effets 3D
- **Firebase Hosting** - Déploiement

## 🛠️ Installation

```bash
# Cloner le repository
git clone <your-repo-url>
cd tool-rental

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Scripts

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linter
```

## 🔥 Déploiement Firebase

### Configuration initiale

1. Créer un projet Firebase
2. Installer Firebase CLI: `npm install -g firebase-tools`
3. Se connecter: `firebase login`
4. Initialiser: `firebase init hosting`

### Déploiement automatique (GitHub Actions)

Le projet est configuré pour un déploiement automatique via GitHub Actions.

**Secrets GitHub requis:**
- `FIREBASE_SERVICE_ACCOUNT` - Clé de compte de service
- `FIREBASE_PROJECT_ID` - ID du projet Firebase

Voir [DEPLOYMENT.md](./DEPLOYMENT.md) pour les instructions détaillées.

### Déploiement manuel

```bash
npm run build
firebase deploy --only hosting
```

## 📄 Pages

- `/` - Page d'accueil avec hero et catalogue
- `/about` - À propos avec statistiques et valeurs
- `/contact` - Formulaire de contact

## 🎨 Composants

- **MagneticCursor** - Curseur personnalisé avec physique
- **Navbar** - Navigation avec glassmorphism
- **HeroSection** - Section hero avec animations
- **ToolsGrid** - Grille d'outils avec filtres
- **Testimonials** - Témoignages clients
- **Footer** - Pied de page complet

## 📊 Structure des données

- `data/tools.ts` - Catalogue d'outils
- `data/categories.ts` - Catégories d'outils
- `data/testimonials.ts` - Témoignages clients

## 🎯 Fonctionnalités premium

- Curseur magnétique avec états multiples
- Animations de scroll avec Framer Motion
- Filtrage par catégories
- Glassmorphism sur tous les composants
- Indicateur de progression de scroll
- Animations blob organiques
- Transitions de page fluides

## 📱 Responsive

Le site est entièrement responsive avec:
- Navigation mobile avec menu hamburger
- Grilles adaptatives (1-4 colonnes)
- Curseur désactivé sur mobile
- Layouts optimisés pour tablettes

## 🔧 Configuration

### Next.js

Le projet utilise l'export statique pour Firebase:

```typescript
// next.config.ts
{
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true
}
```

### Firebase

```json
// firebase.json
{
  "hosting": {
    "public": "out",
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

## 📄 License

MIT

## 👨‍💻 Auteur

Créé avec ❤️ pour une expérience utilisateur premium
