# Système de Gestion de Restaurant

Une application moderne de gestion de restaurant construite avec Next.js, TypeScript, Tailwind CSS et Prisma.

## Fonctionnalités

- 📊 Tableau de bord avec statistiques en temps réel
- 🪑 Gestion des tables et des réservations
- 🍽️ Gestion du menu et des catégories
- 💳 Système de commande et de paiement
- ⚙️ Paramètres du restaurant configurables

## Prérequis

- Node.js 18.x ou supérieur
- PostgreSQL 12.x ou supérieur
- npm ou yarn

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/restaurant-app.git
cd restaurant-app
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
```bash
cp .env.example .env
```
Modifiez le fichier `.env` avec vos informations de base de données.

4. Initialisez la base de données :
```bash
npx prisma migrate dev
```

5. Lancez l'application en mode développement :
```bash
npm run dev
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure du Projet

```
restaurant-app/
├── src/
│   ├── app/              # Pages de l'application
│   ├── components/       # Composants réutilisables
│   ├── lib/             # Utilitaires et configurations
│   └── types/           # Types TypeScript
├── prisma/              # Schéma et migrations de la base de données
├── public/              # Fichiers statiques
└── ...
```

## Technologies Utilisées

- [Next.js](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Prisma](https://www.prisma.io/) - ORM pour la base de données
- [PostgreSQL](https://www.postgresql.org/) - Base de données
- [Lucide Icons](https://lucide.dev/) - Icônes
- [Headless UI](https://headlessui.dev/) - Composants UI accessibles

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

MIT 