// PROJECTS: ajouter ici les projets à afficher dans la section "Projets".
// Filtres affichés : "Tous", "Ressources" (types formation + document), "Sites Web" (type site).
// - type "formation": { title, kind, category, description, image (optionnel), link (optionnel) }
// - type "site": { title, category, description, image (capture d'écran, optionnel), link (URL du site vitrine) }
// - type "document": { title, kind, category, description, cover (page de garde), pages: [page2..page5] (max 4, optionnel) }
//   → seules la page de garde et jusqu'à 4 pages suivantes sont visibles (5 pages max) ; le reste reste confidentiel.
// "kind" est le libellé court affiché sur le badge de la carte (ex: "Formation", "Fichier", "Business Case", "Conférence").
export const PROJECTS = [
  {
    type: "document",
    title: "Formation Complète — Marketing Digital (9 modules)",
    kind: "Formation",
    category: "Formation · Enixis Corp Academy",
    description: "9 modules, de la visibilité à la monétisation : stratégie de contenu, LinkedIn, prompt engineering, Canva, email marketing et plan d'action 90 jours.",
    cover: "assets/documents/marketing-digital-9-modules/page-1.jpg",
    pages: [
      "assets/documents/marketing-digital-9-modules/page-2.jpg",
      "assets/documents/marketing-digital-9-modules/page-3.jpg",
      "assets/documents/marketing-digital-9-modules/page-4.jpg",
      "assets/documents/marketing-digital-9-modules/page-5.jpg"
    ]
  },
  {
    type: "document",
    title: "Agile in Action — Du Projet au Leadership : gérer les imprévus",
    kind: "Formation",
    category: "Masterclass + Escape Room · Tech Campus Club × Lomé Business School",
    description: "Masterclass de 5 h (4 modules + simulation) sur la gestion de projet Agile, le management d'équipe et les comptes rendus professionnels, avec mise en situation.",
    cover: "assets/documents/agile-in-action-gestion-imprevus/page-1.jpg",
    pages: [
      "assets/documents/agile-in-action-gestion-imprevus/page-2.jpg",
      "assets/documents/agile-in-action-gestion-imprevus/page-3.jpg",
      "assets/documents/agile-in-action-gestion-imprevus/page-4.jpg",
      "assets/documents/agile-in-action-gestion-imprevus/page-5.jpg"
    ]
  },
  {
    type: "site",
    title: "Seder",
    category: "Livraison de repas · Lomé",
    description: "Plateforme de commande de repas en ligne : composition de plat sur mesure, menus prêts à commander et livraison rapide à Lomé.",
    image: "assets/sites/seder/cover.jpg",
    link: "https://seder-mu.vercel.app/"
  },
  {
    type: "site",
    title: "Enixis Corp",
    category: "Conseil & Solutions Digitales",
    description: "Site vitrine officiel d'Enixis Corp : présentation des services (développement, design, automatisation, formation), des projets réalisés et prise de contact.",
    image: "assets/sites/enixiscorp/cover.jpg",
    link: "https://enixiscorp.vercel.app/"
  },
  {
    type: "site",
    title: "Krantos",
    category: "Énergie · Togo",
    description: "Calculateur intelligent pour dimensionner un groupe électrogène et mise en relation instantanée avec des vendeurs vérifiés via WhatsApp.",
    image: "assets/sites/krantos/cover.jpg",
    link: "https://krantos.vercel.app/"
  },
  {
    type: "site",
    title: "NaturExpress",
    category: "E-commerce · Épices & herbes",
    description: "Boutique en ligne d'épices, herbes aromatiques et mélanges 100% naturels, avec livraison à domicile partout au Togo.",
    image: "assets/sites/natur-express/cover.jpg",
    link: "https://natur-express.vercel.app/"
  },
  {
    type: "document",
    title: "Comment créer une activité génératrice de revenu afin de bâtir un patrimoine",
    kind: "Conférence",
    category: "Conférence · Enixis Corp Academy",
    description: "Conférence sur l'identification et la structuration d'une activité génératrice de revenus, pensée comme un levier de constitution de patrimoine.",
    cover: "assets/documents/conference-entrepreneuriat/page-1.jpg",
    pages: [
      "assets/documents/conference-entrepreneuriat/page-2.jpg",
      "assets/documents/conference-entrepreneuriat/page-3.jpg",
      "assets/documents/conference-entrepreneuriat/page-4.jpg",
      "assets/documents/conference-entrepreneuriat/page-5.jpg"
    ]
  },
  {
    type: "document",
    title: "Challenge Pilotage de Projets Tech",
    kind: "Formation",
    category: "Module de formation · Les Pros de la Tech",
    description: "Programme de 4 semaines sur le pilotage de projets tech, de la décision d'investir à la mise en production — 16 challenges autour d'un projet fil rouge.",
    cover: "assets/documents/challenge-pilotage-projets-tech/page-1.jpg",
    pages: [
      "assets/documents/challenge-pilotage-projets-tech/page-2.jpg",
      "assets/documents/challenge-pilotage-projets-tech/page-3.jpg",
      "assets/documents/challenge-pilotage-projets-tech/page-4.jpg",
      "assets/documents/challenge-pilotage-projets-tech/page-5.jpg"
    ]
  },
  {
    type: "document",
    title: "Formation Complète — Relation Clientèle Professionnelle",
    kind: "Formation",
    category: "Formation · Enixis Corp",
    description: "Programme de 13 modules sur 3 jours (21h) consacré à l'excellence du service, l'écoute et la fidélisation client.",
    cover: "assets/documents/formation-relation-clientele/page-1.jpg",
    pages: [
      "assets/documents/formation-relation-clientele/page-2.jpg",
      "assets/documents/formation-relation-clientele/page-3.jpg",
      "assets/documents/formation-relation-clientele/page-4.jpg",
      "assets/documents/formation-relation-clientele/page-5.jpg"
    ]
  },
  {
    type: "document",
    title: "People Performance System — Kaba Delivery",
    kind: "Business Case",
    category: "Stratégie & Organisation · Kaba Delivery",
    description: "Système de pilotage de la performance des équipes : organisation, workflows interdépartementaux et stratégie de croissance régionale.",
    cover: "assets/documents/kaba-delivery-people-performance/page-1.jpg",
    pages: [
      "assets/documents/kaba-delivery-people-performance/page-2.jpg",
      "assets/documents/kaba-delivery-people-performance/page-3.jpg",
      "assets/documents/kaba-delivery-people-performance/page-4.jpg",
      "assets/documents/kaba-delivery-people-performance/page-5.jpg"
    ]
  },
  {
    type: "document",
    title: "Le Réseautage, clé de voûte du succès entrepreneurial",
    kind: "Conférence",
    category: "Conférence · Enixis Corp Academy",
    description: "Présentation des vertus commerciales du réseau et de son rôle déterminant dans la réussite entrepreneuriale.",
    cover: "assets/documents/reseautage-cle-succes-entrepreneurial/page-1.jpg",
    pages: [
      "assets/documents/reseautage-cle-succes-entrepreneurial/page-2.jpg",
      "assets/documents/reseautage-cle-succes-entrepreneurial/page-3.jpg",
      "assets/documents/reseautage-cle-succes-entrepreneurial/page-4.jpg",
      "assets/documents/reseautage-cle-succes-entrepreneurial/page-5.jpg"
    ]
  },
  {
    type: "document",
    title: "Marketing et Communication Entreprenarial",
    kind: "Formation",
    category: "Formation · Enixis Corp Academy",
    description: "Formation en marketing et communication entrepreneuriale : acquisition de clients, profil client, proposition de valeur et feuille de route produit.",
    cover: "assets/documents/marketing-communication-entrepreneurial/page-1.jpg",
    pages: [
      "assets/documents/marketing-communication-entrepreneurial/page-2.jpg",
      "assets/documents/marketing-communication-entrepreneurial/page-3.jpg",
      "assets/documents/marketing-communication-entrepreneurial/page-4.jpg",
      "assets/documents/marketing-communication-entrepreneurial/page-5.jpg"
    ]
  },
  {
    type: "document",
    title: "Devenir le PM qui performe",
    kind: "Conférence",
    category: "Conférence · Tech Meet-Up Edition 5",
    description: "Intervention sur les principes pour devenir un Product Manager qui performe : construire le système, pas juste le projet.",
    cover: "assets/documents/tech-meetup-edition5-pm/page-1.jpg",
    pages: [
      "assets/documents/tech-meetup-edition5-pm/page-2.jpg",
      "assets/documents/tech-meetup-edition5-pm/page-3.jpg",
      "assets/documents/tech-meetup-edition5-pm/page-4.jpg",
      "assets/documents/tech-meetup-edition5-pm/page-5.jpg"
    ]
  }
];
