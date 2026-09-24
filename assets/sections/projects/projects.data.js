// PROJECTS: ajouter ici les projets à afficher dans la section "Projets".
// Filtres affichés : "Tous", "Ressources" (types formation + document), "Sites Web" (type site).
// - type "formation": { title, kind, category, description, image (optionnel), link (optionnel) }
// - type "site": { title, category, description, image (capture d'écran, optionnel), link (URL du site vitrine) }
// - type "document": { title, kind, category, description, cover (page de garde), pages: [page2..page5] (max 4, optionnel) }
//   → seules la page de garde et jusqu'à 4 pages suivantes sont visibles (5 pages max) ; le reste reste confidentiel.
// - type "dashboard": { title, kind, category, description, cover, demo: { images[], steps[{ img, x, y, click, label, detail }] } }
//   → ouvre la démo animée (souris qui clique sur les segments), voir dashboard-demo.js.
// "kind" est le libellé court affiché sur le badge de la carte (ex: "Formation", "Fichier", "Business Case", "Conférence").
export const PROJECTS = [
  {
    type: "dashboard",
    title: "Dashboard Excel — Ventes & Stock FIFO (Krantos Solar, Togo)",
    kind: "Dashboard",
    category: "Excel · 6 segments interactifs · données fictives",
    description: "Tableau de bord piloté par des segments (année, mois, région, ville, catégorie, canal) : chiffre d'affaires, unités, stock, croissance et conformité FIFO. Regarde la démo animée des filtres en action.",
    cover: "assets/demos/krantos-dashboard/step-0.jpg",
    demo: {
      images: [0, 1, 2, 3, 4, 5, 6].map(n => `assets/demos/krantos-dashboard/step-${n}.jpg`),
      // x / y : position de la souris en % de l'image ; click : la souris clique avant que l'image (img) change.
      steps: [
        { img: 0, x: 56, y: 9, click: false, label: "Vue globale", detail: "Tous les segments actifs : 807,8 M XOF de CA · 16 804 unités vendues." },
        { img: 1, x: 7.7, y: 29.5, click: true, label: "Année → 2026", detail: "Le CA passe à 411,9 M XOF · 8 717 unités." },
        { img: 2, x: 3.9, y: 39.8, click: true, label: "Région → Maritime", detail: "Filtre combiné : 204,9 M XOF · 4 554 unités." },
        { img: 3, x: 3.7, y: 55.3, click: true, label: "Catégorie → Kit solaire", detail: "104,3 M XOF · 939 unités · Lomé domine (82 % du CA)." },
        { img: 4, x: 4.3, y: 67.1, click: true, label: "Canal → Agent terrain", detail: "61,5 M XOF · 560 unités · panier moyen 341 644 XOF." },
        { img: 0, x: 6, y: 78.4, click: true, label: "Effacer les filtres", detail: "Retour instantané à la vue globale." },
        { img: 5, x: 90.3, y: 45.2, click: true, label: "Ville → Kara", detail: "89,9 M XOF · 1 867 unités · croissance +38,8 %." },
        { img: 6, x: 58, y: 35.3, click: true, label: "Mois → Août", detail: "Zoom sur un mois : 7,6 M XOF · 146 unités." }
      ]
    }
  },
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
    type: "site",
    title: "Miss Léa Fashion Brand",
    category: "CRM & Boutique en ligne · Mode",
    description: "Site CRM et boutique d'accessoires de mode : catalogue par catégorie, commande avec livraison, échanges WhatsApp, inscription aux nouveautés avec consentement et réservation d'ateliers créatifs.",
    image: "assets/sites/miss-lea/cover.jpg",
    link: "https://missleaaccessories.vercel.app/"
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
