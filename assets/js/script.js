// ===================== CONFIG =====================
const CONTACT = {
  whatsappNumber: "22893369070", // +228 93 36 90 70
  email: "edemcyrille@gmail.com",
  linkedin: "https://linkedin.com/in/edem-cyrille-sos",
  instagram: "https://www.instagram.com/mister_process_optimizer/",
  facebook: "https://www.facebook.com/profile.php?id=100007996022605",
  tiktok: "https://www.tiktok.com/@mister_process_optimize",
  youtube: "https://www.youtube.com/@Edemcyrille",
  github: "https://github.com/enixiscorp"
};

const WA_MESSAGE = "Bonjour Edem, j'ai consulté votre portfolio et je souhaite discuter d'une opportunité de collaboration.";
const MAIL_SUBJECT = "Opportunité de collaboration";
const MAIL_BODY = "Bonjour Edem,\n\nJ'ai consulté votre portfolio et je souhaite discuter d'une opportunité de collaboration.\n\n";

const ICONS = {
  whatsapp: `<svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C9 3 3 9 3 16c0 2.4.7 4.7 1.9 6.6L3 29l6.6-1.8A13 13 0 0 0 16 29c7 0 13-6 13-13S23 3 16 3Zm0 23.5c-2.1 0-4.1-.6-5.8-1.6l-.4-.3-3.9 1 1-3.8-.3-.4A10.5 10.5 0 1 1 26.5 16 10.5 10.5 0 0 1 16 26.5Zm5.9-7.8c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.3-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4-.1-.6-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.3 3.5 5.6 4.8 2.8 1.1 3.4.9 4-.2.4-.6.6-1.6.4-1.9-.1-.1-.3-.2-.6-.3Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6ZM8.3 18.2H5.7V9.9h2.6v8.3ZM7 8.8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm11.2 9.4h-2.6v-4c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.8v3.9h-2.6s.1-6.8 0-8.3h2.6v1.2c.3-.5 1-1.4 2.5-1.4 1.8 0 3.2 1.2 3.2 3.7v4.8Z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5.9.4.4.7.9.9 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-.9 1.5-.4.4-.9.7-1.5.9-.5.2-1.2.3-2.4.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-.9-.4-.4-.7-.9-.9-1.5-.2-.5-.3-1.2-.4-2.4C2 15.6 2 15.3 2 12s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.4.2-.6.5-1 .9-1.5.4-.4.9-.7 1.5-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.7 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.3-.5.2-.8.4-1.2.7-.3.3-.6.7-.7 1.2-.1.3-.3.9-.3 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 1.9.2.5.4.8.7 1.2.3.3.7.6 1.2.7.3.1.9.3 1.9.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.3.5-.2.8-.4 1.2-.7.3-.3.6-.7.7-1.2.1-.3.3-.9.3-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-1.9-.2-.5-.4-.8-.7-1.2-.3-.3-.7-.6-1.2-.7-.3-.1-.9-.3-1.9-.3-1.2-.1-1.6-.1-4.7-.1Zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5.7-2.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v2.8h2.5V21h3Z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 2h-2.7v13.2c0 1.4-1.1 2.6-2.6 2.6a2.6 2.6 0 0 1 0-5.2c.3 0 .5 0 .8.1v-2.8a5.4 5.4 0 0 0-.8-.1 5.4 5.4 0 1 0 5.4 5.4V8.8c1 .7 2.2 1.1 3.5 1.1V7.2c-2 0-3.6-1.6-3.6-3.6V2Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21.8 8.1s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C16 5 12 5 12 5s-4 0-6.9.1c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2 9.8 2 11.6v.8c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9C7.2 19 12 19 12 19s4 0 6.9-.1c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-.8c0-1.8-.2-3.5-.2-3.5ZM9.9 14.9V9.1l5 2.9-5 2.9Z"/></svg>`,
  github: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.35 4.7-4.58 4.95.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z"/></svg>`,
  cert: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6l-9-4Zm0 4.8 5.2 2.3v3.4c0 3.3-2.5 5.9-5.2 6.9-2.7-1-5.2-3.6-5.2-6.9V9.1L12 6.8Z"/></svg>`,
  external: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/></svg>`,
  people: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 5 18.5V20"/><circle cx="9.5" cy="8" r="3.2"/><path d="M16 8.2a2.8 2.8 0 1 1 1 5.4"/><path d="M20 20v-1.3a3 3 0 0 0-2-2.8"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,
  percent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><circle cx="7.5" cy="7.5" r="2"/><circle cx="16.5" cy="16.5" r="2"/></svg>`,
  coins: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="7" rx="6" ry="3.2"/><path d="M3 7v6c0 1.8 2.7 3.2 6 3.2s6-1.4 6-3.2V7"/><path d="M15 10.3c2.9.2 6 1.5 6 3.5s-2.7 3.2-6 3.2-6-1.4-6-3.2"/><path d="M9 13.2v3.6M15 13.8v3.7"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4.5 5.5v6c0 4.6 3.2 7.9 7.5 9.5 4.3-1.6 7.5-4.9 7.5-9.5v-6L12 3Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3.5" width="10" height="17" rx="1"/><path d="M15 9.5h4.5v11H15"/><path d="M8.5 7.5h3M8.5 11h3M8.5 14.5h3"/></svg>`
};

function iconForStat(s){
  const num = s.num.toLowerCase();
  const label = s.label.toLowerCase();
  if(num.includes("%")) return ICONS.percent;
  if(label.includes("marché") || label.includes("pays")) return ICONS.globe;
  if(label.includes("fcfa") || label.includes("gmv") || label.includes("bonus")) return ICONS.coins;
  if(label.includes("incident")) return ICONS.shield;
  if(label.includes("temps")) return ICONS.clock;
  if(label.includes("département")) return ICONS.building;
  if(label.includes("coursier") || label.includes("utilisateur") || label.includes("profil") || label.includes("client") || label.includes("collaborateur")) return ICONS.people;
  return ICONS.target;
}

// ===================== DATA =====================
const MARKETS_11 = ["Togo","Bénin","Cameroun","Mali","RDC","Botswana","Zambie","Zimbabwe","Namibie","République dominicaine","République du Costa Rica"];

const STATS = [
  { num: "850", label: "coursiers pilotés dans le dispositif d'activation Yango (17 mois)" },
  { num: "155K+", label: "commandes soutenues par les campagnes d'activation et de réactivation" },
  { num: "930M", label: "FCFA de GMV estimé soutenu par le dispositif Yango" },
  { num: "30M", label: "FCFA de bonus de parrainage gérés (Yango)" },
  { num: "140K+", label: "utilisateurs-mois VTC couverts en gestion des risques (Bolt Safety)" },
  { num: "-45%", label: "d'incidents critiques réduits sur le périmètre Safety (Bolt)" },
  { num: "8K+", label: "profils chauffeurs validés sur 11 marchés (Bolt Expansion)" },
  { num: "120%", label: "de l'objectif de conversion dépassé (Bolt Expansion)" },
  { num: "92%", label: "de satisfaction client maintenue (Bolt, support VTC)" },
  { num: "25%", label: "d'amélioration qualité obtenue en 6 semaines (Bolt, coaching)" },
  { num: "60%", label: "de temps de reporting économisé grâce à l'automatisation (MC Impact)" },
  { num: "11", label: "marchés internationaux pilotés simultanément", markets: MARKETS_11 },
];

const SKILLS = [
  { title: "Leadership & Management", chips: ["Management d'équipes","Coaching","Mentorat","Gestion des conflits","Management multisites","Gestion interculturelle","Délégation","Relève managériale"] },
  { title: "Opérations & Performance", chips: ["Pilotage opérationnel","Planification des capacités","Pilotage par indicateurs","Continuité opérationnelle","Gestion des priorités","Résilience opérationnelle","Suivi des objectifs"] },
  { title: "Optimisation des processus", chips: ["Cartographie des processus","Amélioration continue","Standardisation","Procédures (SOP)","Analyse des causes racines","Réingénierie","Réduction des erreurs"] },
  { title: "Data & Business Intelligence", chips: ["Excel","Google Sheets","Power BI","DataLens BI","Tableaux de bord","Reporting automatisé","Visualisation de données","KPI"] },
  { title: "Relation & Expérience Client", chips: ["CRM","Parcours client","Satisfaction client","Gestion des réclamations","Fidélisation","Qualité de service"] },
  { title: "Développement Commercial", chips: ["Prospection B2B","Génération de leads","Développement de portefeuille","Gestion de comptes","Analyse des besoins clients"] },
  { title: "Banque, Risques & Conformité", chips: ["KYC","Contrôle documentaire","Audit de portefeuille","Sopra Banking Software","MoneyGram","Conformité"] },
  { title: "IA & Digitalisation", chips: ["ChatGPT","Gemini","Claude","Automatisation","Transformation digitale","Supabase","Neon","Vercel","GitHub"] },
];

const TIMELINE = [
  {
    badge: "Actuel",
    role: "Responsable des Opérations",
    org: "MC Impact Togo · À distance, Lomé",
    period: "Oct. 2025 — Présent",
    intro: "Structuration du pilotage commercial et opérationnel d'une scale-up — ventes, projets, partenaires — avec un focus sur l'automatisation du reporting et la digitalisation des processus.",
    skills: ["Pilotage opérationnel","Power BI","Automatisation","Procédures (SOP)","Reporting automatisé","Transformation digitale"],
    bullets: [
      "Structuré le pilotage commercial et opérationnel de l'entreprise : ventes, projets, partenaires et systèmes de reporting.",
      "Conçu un système structuré de suivi des opportunités sous Google Sheets & Power BI pour centraliser les prospects et le pipeline.",
      "Réduit d'environ 60% le temps consacré au reporting de la direction, en remplaçant les mises à jour manuelles par des tableaux de bord automatisés.",
      "Standardisé l'intégration des partenaires et collaborateurs via des procédures opérationnelles (SOP), cadres de communication et workflows.",
      "Contribué au développement de solutions digitales et data pour les clients (tableaux de bord, outils SaaS, systèmes de gestion).",
    ]
  },
  {
    badge: "Leadership",
    role: "Responsable Centre d'Appels — Opérations Télémarketing",
    org: "Yango Côte d'Ivoire · Serviap - Yango Group · À distance, Lomé",
    period: "Oct. 2024 — Fév. 2026",
    intro: "Structuration et développement du département Télémarketing, pilotage simultané de l'engagement, la réactivation, les campagnes d'incitation et le dispatch sur un dispositif à grande échelle.",
    skills: ["Management d'équipes","Pilotage par indicateurs","CRM","Activation","Reporting automatisé"],
    bullets: [
      "Structuré et développé le département Télémarketing, faisant évoluer l'équipe de 3 à 5 collaborateurs pour piloter simultanément l'engagement, la réactivation, les campagnes d'incitation et le dispatch.",
      "Contribué au pilotage d'un dispositif d'activation d'environ 850 coursiers sur 17 mois, soutenant ~155 000 commandes pour un GMV estimé à ~930 M FCFA.",
      "Géré des mécanismes de parrainage représentant jusqu'à ~30 M FCFA de bonus, ainsi qu'un programme de financement de 15 000 à 100 000 FCFA par coursier selon leur niveau d'activité.",
      "Porté le taux de réactivation hebdomadaire à plus de 30% et augmenté l'engagement des coursiers de plus de 30% via des campagnes ciblées.",
      "Augmenté de 40% l'utilisation des services de livraison en 3 mois et les recharges quotidiennes des comptes coursiers de 40%.",
      "Automatisé le traitement d'environ 50 retours de livraison par jour et structuré la documentation opérationnelle (procédures, guides CRM, supports de formation).",
    ]
  },
  {
    badge: "Recrutement",
    role: "Responsable Centre d'Appels — Opérations de Recrutement des Coursiers",
    org: "Yango Côte d'Ivoire · Serviap - Yango Group · À distance, Lomé",
    period: "Déc. 2024 — Fév. 2026",
    intro: "Pilotage d'une équipe dédiée au recrutement des coursiers, de la vérification documentaire à l'intégration, avec un objectif de conversion largement dépassé.",
    skills: ["Management d'équipes","Contrôle documentaire","Conversion","Procédures (SOP)"],
    bullets: [
      "Piloté une équipe dédiée de 5 collaborateurs sur le recrutement des coursiers : vérification documentaire, validation des candidatures, accompagnement et intégration.",
      "Dépassé l'objectif de conversion fixé à 10%, avec des performances atteignant 30% selon les campagnes et périodes.",
      "Structuré le suivi du parcours de recrutement pour identifier les points de perte et réduire les abandons.",
      "Créé les procédures et standards opérationnels du département, avec des outils de suivi de performance individuelle.",
    ]
  },
  {
    badge: "Expansion internationale",
    role: "Responsable Support des Opérations",
    org: "Yango Zambie · Serviap - Yango Group · À distance, Lomé",
    period: "Fév. 2025 — Août 2025",
    intro: "Transfert du modèle opérationnel développé en Côte d'Ivoire vers un nouveau marché anglophone, avec préparation d'une relève managériale locale.",
    skills: ["Gestion interculturelle","Transfert de modèle opérationnel","Coaching","Relève managériale"],
    bullets: [
      "Transféré en Zambie le modèle opérationnel développé en Côte d'Ivoire (recrutement des coursiers et télémarketing).",
      "Managé une équipe locale de 4 collaborateurs anglophones, en adaptant les méthodes de communication au contexte local.",
      "Identifié un profil à potentiel managérial et préparé personnellement sa montée en responsabilités sur les six mois de la mission.",
      "Organisé une transmission progressive du leadership, passant le relais au collaborateur devenu Manager local à l'issue de la mission.",
    ]
  },
  {
    badge: "Expansion internationale",
    role: "Responsable Support des Opérations",
    org: "Yango Bolivie · Serviap - Yango Group · À distance, Lomé",
    period: "Fév. 2025 — Août 2025",
    intro: "Déploiement du modèle opérationnel en Bolivie, avec une approche orientée transfert de compétences et autonomisation de l'équipe locale.",
    skills: ["Transfert de compétences","Formation","Autonomie décisionnelle","Management multisites"],
    bullets: [
      "Accompagné le déploiement du modèle opérationnel en Bolivie, en adaptant les processus aux réalités du marché local.",
      "Formé et accompagné une équipe locale de 4 collaborateurs sur les processus de recrutement et d'engagement.",
      "Privilégié une approche de transfert de compétences, favorisant l'autonomie décisionnelle de l'équipe locale.",
      "Contribué à la capitalisation internationale du modèle opérationnel, reproduit avec succès sur trois marchés (Côte d'Ivoire, Zambie, Bolivie).",
    ]
  },
  {
    badge: "Amélioration continue",
    role: "Coach Qualité — Opérations & Qualité, Support Bolt",
    org: "Majorel Africa - Teleperformance · Sur site, Lomé",
    period: "Août 2024 — Oct. 2024",
    intro: "Structuration d'un dispositif d'évaluation qualité homogène et accélération de la montée en compétence des équipes support.",
    skills: ["Coaching","Amélioration continue","Conformité SLA","Évaluation qualité"],
    bullets: [
      "Amélioré de 25% la qualité des opérations en six semaines, en structurant un dispositif d'évaluation fondé sur des critères homogènes et des séances de coaching ciblées.",
      "Accéléré la montée en compétence de plus de 20 agents sur la conformité SLA, la documentation des dossiers et les procédures d'escalade.",
      "Harmonisé les critères d'évaluation qualité et transformé les résultats des contrôles en plans d'amélioration exploitables.",
      "Développé une approche de coaching orientée résolution de problèmes, reliant chaque écart constaté à une action corrective précise.",
    ]
  },
  {
    badge: "Expansion",
    role: "Chargé des Opérations d'Expansion, Support Bolt",
    org: "Majorel Africa - Teleperformance · Sur site, Lomé",
    period: "Fév. 2024 — Août 2024",
    intro: "Pilotage des opérations d'activation des chauffeurs sur 11 marchés simultanément, avec conception du module de formation officiel du département.",
    skills: ["Expansion multi-marchés","Contrôle documentaire","Formation","Conformité"],
    bullets: [
      "Atteint 120% des objectifs de conversion d'activation des chauffeurs, en optimisant le parcours d'intégration et la vérification documentaire.",
      "Structuré les opérations d'activation sur 11 marchés simultanément, avec des procédures communes de contrôle documentaire et de conformité.",
      "Contribué à la validation d'environ 8 000+ profils chauffeurs sur la période, avec près de 4 000 activations effectives — soit un funnel validation → activation de l'ordre de 50%.",
      "Standardisé la transmission des connaissances du département en concevant le module officiel de formation des nouveaux spécialistes.",
      "Utilisé des campagnes de communication ciblées (InfoBip) pour accélérer les activations sur des environnements africains et latino-américains.",
      { markets: MARKETS_11 },
    ]
  },
  {
    badge: "Gestion des risques",
    role: "Chargé des Opérations Sécurité · Micromobilité · Repas",
    org: "Majorel Africa - Teleperformance · Sur site, Lomé",
    period: "Jan. 2023 — Fév. 2024",
    intro: "Prise en charge d'investigations complexes et de la continuité opérationnelle sur plusieurs verticales (VTC, micromobilité, food) et marchés européens.",
    skills: ["Gestion des risques","Investigations","Formation","Continuité opérationnelle"],
    bullets: [
      "Couvert plus de 140 000 utilisateurs-mois VTC sur sept marchés européens (France, Belgique, Italie, Portugal, Malte, Chypre, Slovénie).",
      "Réduit d'environ 45% les incidents critiques sur son périmètre, en structurant des modèles de communication et des procédures de traitement.",
      "Pris en charge la Micromobilité (≈400 à 750 utilisateurs-trimestres) et Bolt Food (≈800 à 1 000+ utilisateurs-trimestres) sur quatre marchés.",
      "Traité des investigations complexes (accidents, agressions, harcèlement, vols, discrimination) en coordination avec assureurs et autorités.",
      "Formé environ 25 nouveaux spécialistes et soutenu la continuité opérationnelle de plus de 50 collaborateurs sur les files EMEA.",
    ]
  },
  {
    badge: "Support client",
    role: "Chargé du Support Client — Transport VTC",
    org: "Majorel Africa - Teleperformance · Sur site, Lomé",
    period: "Oct. 2022 — Déc. 2023",
    intro: "Traitement de files de support à fort volume avec un haut niveau de satisfaction client maintenu dans la durée.",
    skills: ["Relation client","Zendesk","Qualité de service","Gestion des réclamations"],
    bullets: [
      "Maintenu un niveau de satisfaction client de 92%, en traitant des files de tickets à fort volume sur Zendesk.",
      "Réduit de 25% le volume de demandes de support récurrentes, en identifiant les motifs fréquents de contact.",
      "Amélioré la précision de la facturation des courses, en analysant manuellement trajets, itinéraires et calculs tarifaires.",
    ]
  },
  {
    badge: "Formation",
    role: "Stagiaire — Opérations Bancaires & Relation Client, Support Commercial",
    org: "BIA Togo · Groupe Attijariwafa Bank · Sur site, Lomé",
    period: "Mai 2022 — Sept. 2022",
    intro: "Première expérience bancaire : contrôle de conformité, gestion de dossiers de crédit et prospection commerciale B2B.",
    skills: ["KYC","Conformité","Prospection B2B","Sopra Banking Software"],
    bullets: [
      "Contribué à l'acquisition de 15 nouveaux clients particuliers et entreprises via la prospection B2B.",
      "Analysé et contrôlé plus de 1 500 comptes clients, contribuant à une réduction de 25% des écarts de conformité.",
      "Participé au traitement de dossiers de crédit, financements PME, leasing et opérations de commerce international via Sopra Banking Software.",
    ]
  },
  {
    badge: "Entrepreneuriat",
    role: "Promoteur & Consultant en Optimisation des Processus",
    org: "Enixis Corp · Sur site, Lomé",
    period: "Fév. 2020 — Actuel",
    intro: "Accompagnement d'entrepreneurs et de PME dans l'amélioration de leur performance opérationnelle, de la formation à la livraison de solutions data.",
    skills: ["Conseil","Formation","Power BI","Accompagnement PME"],
    bullets: [
      "Accompagné des entrepreneurs, PME et équipes professionnelles dans l'amélioration de leur performance opérationnelle.",
      "Conçu un programme de formation de 9 modules en marketing digital, structuré autour de cas pratiques et de solutions d'IA.",
      "Développé des tableaux de bord de pilotage sous Excel, Google Sheets et Power BI adaptés aux besoins de chaque activité.",
      "Piloté les missions de conseil de la compréhension du besoin jusqu'à la livraison des solutions et l'accompagnement des utilisateurs.",
    ]
  },
];

const CERTS = [
  { title: "Développement Commercial — Gestion d'inventaire", issuer: "HP LIFE", date: "2026", link: "https://www.life-global.org/certificate/956b291e-bb13-498a-899f-95f6a118abf5" },
  { title: "Développement Commercial — Anticiper les ventes", issuer: "HP LIFE", date: "2026", link: "https://www.life-global.org/certificate/75b13e08-5968-4d8e-a52a-b959969ab560" },
  { title: "Sciences et Analyses des Données", issuer: "HP LIFE", date: "Sept. 2025", link: "https://www.life-global.org/certificate/a2a18960-16fe-458c-8190-a416c25601fb" },
  { title: "Simplifiez votre travail avec Microsoft Copilot", issuer: "LinkedIn Learning", date: "Sept. 2025", link: "https://www.linkedin.com/learning/certificates/e52ac3537812656ae60ccbc51117f76081cfdde7666d42b0cd132f44597cb8ea" },
  { title: "L'Expérience Client (CX) au service de la réussite de l'entreprise", issuer: "HP LIFE", date: "Août 2025", link: "https://www.life-global.org/certificate/2b72858d-5e1b-42db-a364-28fb11e63f34" },
  { title: "Data Analysis and Action Planning", issuer: "Disaster Ready", date: "Août 2025", link: "https://ready.csod.com/LMS/Eval/CustomCertificate.aspx?qs=%5e%5e%5e2Lto225q6G1%2bhXMhoCvsLRfZZdJ8aJXTTVJyOsDATeT%2ffUT61XCavCHw6Pppk4%2b7XlYkhUDtASPeDTfxSSVq3DR3N5UUHmwprIyceay6Pn2C3UQKlLxvsOnuPaA1RGYT" },
  { title: "Gestion de la Relation Client (CRM)", issuer: "HP LIFE", date: "Août 2025", link: "https://www.life-global.org/certificate/7d4c6777-8395-4587-a64d-ec31164cee7e" },
  { title: "Managing Project Stakeholders", issuer: "PMI Inc.", date: "Août 2024", link: "https://www.linkedin.com/learning/certificates/aede1f54a1dd332ffffc5c0a600860a100a61180d118d95ddd7fbde8f887b9fe" },
  { title: "Les Fondamentaux de la Gestion Financière", issuer: "Disaster Ready", date: "Juin 2024", link: "https://pdftolink.io/file/r2_dXNlcnMvZ3Vlc3QvMjljYjA0MzktYzk3Mi00N2M0LTkzNTgtYmVkODBkN2M4NjY1LnBkZg" },
  { title: "Informatique de Gestion Sage — Saari 100 & GesCom", issuer: "Cabinet Afrique Audit and Accounting", date: "2019", link: "https://pdftolink.io/file/r2_dXNlcnMvZ3Vlc3QvZmFmNmRkZmItNDhlMy00NGU1LTk4ZmMtNWE0MmM1YWE1ZTJhLnBkZg" },
  { title: "Suite MS Office 2019", issuer: "Cabinet Afrique Audit and Accounting", date: "2019", link: "https://pdftolink.io/file/r2_dXNlcnMvZ3Vlc3QvZTM1MDQzZjAtZTFiOS00NjZjLWI1ZGItODhkYzNhMThiNDQxLnBkZg" },
];

const SOCIALS = [
  { key:"whatsapp", url: null, label:"WhatsApp" },
  { key:"linkedin", url: CONTACT.linkedin, label:"LinkedIn" },
  { key:"github", url: CONTACT.github, label:"GitHub — Projets" },
  { key:"instagram", url: CONTACT.instagram, label:"Instagram" },
  { key:"facebook", url: CONTACT.facebook, label:"Facebook" },
  { key:"tiktok", url: CONTACT.tiktok, label:"TikTok" },
  { key:"youtube", url: CONTACT.youtube, label:"YouTube" },
  { key:"mail", url: null, label:"E-mail" },
];

// ===================== BUILD LINKS =====================
const waLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(WA_MESSAGE)}`;
const mailLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent(MAIL_SUBJECT)}&body=${encodeURIComponent(MAIL_BODY)}`;

["waHero","waContact"].forEach(id=>{ const el=document.getElementById(id); if(el) el.href = waLink; });
const mailContact = document.getElementById("mailContact");
if (mailContact) mailContact.href = mailLink;

const menuMail = document.getElementById("menuMail");
if (menuMail) menuMail.href = mailLink;
const menuLinkedin = document.getElementById("menuLinkedin");
if (menuLinkedin) menuLinkedin.href = CONTACT.linkedin;

function socialHref(item){
  if(item.key === "whatsapp") return waLink;
  if(item.key === "mail") return mailLink;
  return item.url;
}
function renderSocials(container){
  if(!container) return;
  container.innerHTML = SOCIALS.map(item => `
    <a href="${socialHref(item)}" target="_blank" rel="noopener" aria-label="${item.label}" title="${item.label}">
      ${ICONS[item.key]}
    </a>
  `).join("");
}
renderSocials(document.getElementById("socialRow"));
renderSocials(document.getElementById("socialRowContact"));

// ===================== RENDER STATS =====================
const statsGrid = document.getElementById("statsGrid");
statsGrid.innerHTML = STATS.map(s => {
  const marketsHtml = s.markets ? `
    <div class="stat-markets">
      <span class="stat-markets-preview">(${s.markets.slice(0, 3).join(", ")}, …)</span>
      <span class="stat-markets-full">(${s.markets.join(", ")})</span>
    </div>
    <button class="stat-toggle" type="button" data-more="Voir tous les marchés" data-less="Voir moins">
      <span class="stat-toggle-label">Voir tous les marchés</span>
      <svg class="ic-chev" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>
    </button>
  ` : ``;
  return `
  <div class="stat-card" data-reveal>
    <div class="stat-icon">${iconForStat(s)}</div>
    <div class="stat-num" data-count="${s.num}">0</div>
    <div class="stat-label">${s.label}</div>
    ${marketsHtml}
  </div>
`;
}).join("");

statsGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".stat-toggle");
  if(!btn) return;
  const card = btn.closest(".stat-card");
  const label = btn.querySelector(".stat-toggle-label");
  const expanded = card.classList.toggle("markets-expanded");
  label.textContent = expanded ? btn.dataset.less : btn.dataset.more;
});

// ===================== RENDER SKILLS =====================
const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = SKILLS.map(s => `
  <div class="skill-card" data-reveal>
    <h3><span class="dotmark"></span>${s.title}</h3>
    <div class="chip-row">${s.chips.map(c => `<span class="chip">${c}</span>`).join("")}</div>
  </div>
`).join("");

// ===================== RENDER TIMELINE =====================
const TL_PREVIEW_COUNT = 3;
function renderBullet(b){
  return b && b.markets
    ? `<li class="tl-markets">${b.markets.join(", ")}</li>`
    : `<li>${b}</li>`;
}
const timelineEl = document.getElementById("timeline");
timelineEl.innerHTML = TIMELINE.map((t, i) => {
  const visible = t.bullets.slice(0, TL_PREVIEW_COUNT);
  const hidden = t.bullets.slice(TL_PREVIEW_COUNT);
  return `
  <div class="tl-item ${i % 2 ? 'orange' : ''}" data-reveal>
    <span class="tl-dot"></span>
    <div class="tl-card">
      <div class="tl-top">
        <span class="tl-badge">${t.badge}</span>
        <span class="tl-period">${t.period}</span>
      </div>
      <span class="tl-role">${t.role}</span>
      <div class="tl-org">${t.org}</div>
      <p class="tl-intro">${t.intro}</p>
      <p class="tl-subhead">Réalisations clés</p>
      <ul class="tl-list">${visible.map(renderBullet).join("")}</ul>
      ${hidden.length ? `
        <ul class="tl-list tl-list-more">${hidden.map(renderBullet).join("")}</ul>
        <button class="tl-toggle" type="button" data-more="Voir plus (${hidden.length} autre${hidden.length > 1 ? 's' : ''})" data-less="Voir moins">
          <span class="tl-toggle-label">Voir plus (${hidden.length} autre${hidden.length > 1 ? 's' : ''})</span>
          <svg class="ic-chev" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>
        </button>
      ` : ``}
      ${t.skills && t.skills.length ? `
        <p class="tl-subhead">Compétences mobilisées</p>
        <div class="tl-skills">${t.skills.map(s => `<span class="chip">${s}</span>`).join("")}</div>
      ` : ``}
    </div>
  </div>
`;
}).join("");

timelineEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".tl-toggle");
  if(!btn) return;
  const card = btn.closest(".tl-card");
  const label = btn.querySelector(".tl-toggle-label");
  const expanded = card.classList.toggle("expanded");
  label.textContent = expanded ? btn.dataset.less : btn.dataset.more;
});

// ===================== RENDER CERTIFICATIONS =====================
const certGrid = document.getElementById("certGrid");
certGrid.innerHTML = CERTS.map(c => `
  <a class="cert-card" href="${c.link}" target="_blank" rel="noopener" data-reveal>
    <div class="cert-badge">${ICONS.cert}</div>
    <div class="cert-title">${c.title}</div>
    <div class="cert-meta"><span>${c.issuer}</span><span>${c.date}</span></div>
    <span class="cert-link">Voir le certificat ${ICONS.external}</span>
  </a>
`).join("");

// ===================== SCROLL REVEAL =====================
const revealEls = document.querySelectorAll("[data-reveal]");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===================== STAT COUNTERS =====================
function animateCount(el){
  const raw = el.dataset.count;
  const match = raw.match(/-?[\d.]+/);
  if(!match){ el.textContent = raw; return; }
  const target = parseFloat(match[0]);
  const idx = raw.indexOf(match[0]);
  const prefix = raw.slice(0, idx);
  const suffix = raw.slice(idx + match[0].length);
  let cur = 0;
  const dur = 1200;
  const start = performance.now();
  function tick(now){
    const p = Math.min(1, (now - start) / dur);
    cur = target * (1 - Math.pow(1 - p, 3));
    el.textContent = prefix + (target % 1 === 0 ? Math.round(cur) : cur.toFixed(1)) + suffix;
    if(p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const countEls = document.querySelectorAll(".stat-num");
const countIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      animateCount(e.target);
      countIO.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
countEls.forEach(el => countIO.observe(el));

// ===================== NAV BEHAVIOR =====================
const nav = document.getElementById("nav");
const progressBar = document.getElementById("scrollProgress");
const navLinks = document.querySelectorAll("[data-nav]");
const sections = document.querySelectorAll("main section[id]");

function onScroll(){
  const y = window.scrollY;
  nav.classList.toggle("scrolled", y > 20);

  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - doc.clientHeight;
  progressBar.style.width = scrollable > 0 ? (y / scrollable * 100) + "%" : "0%";

  let current = "";
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top <= 120 && rect.bottom > 120) current = sec.id;
  });
  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// expansion menu
const menuToggle = document.getElementById("menuToggle");
const menuPanel = document.getElementById("menuPanel");
const menuBackdrop = document.getElementById("menuBackdrop");
const menuClose = document.getElementById("menuClose");

function openMenu(){
  document.body.classList.add("menu-open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuPanel.setAttribute("aria-hidden", "false");
}
function closeMenu(){
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuPanel.setAttribute("aria-hidden", "true");
}
menuToggle.addEventListener("click", () => {
  document.body.classList.contains("menu-open") ? closeMenu() : openMenu();
});
menuClose.addEventListener("click", closeMenu);
menuBackdrop.addEventListener("click", closeMenu);
document.addEventListener("keydown", e => { if(e.key === "Escape") closeMenu(); });
menuPanel.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

// back to top & scroll cue
document.getElementById("backTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.getElementById("scrollCue").addEventListener("click", () => document.getElementById("profil").scrollIntoView({ behavior: "smooth" }));

// year
document.getElementById("year").textContent = new Date().getFullYear();

// ===================== PARTICLES CANVAS =====================
(function particles(){
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let w, h, particlesArr;
  const COLORS = ["rgba(41,121,255,0.55)", "rgba(255,45,85,0.5)", "rgba(0,198,255,0.4)"];

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  function init(){
    resize();
    const count = Math.min(40, Math.floor(w / 32));
    particlesArr = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      c: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
  }
  function step(){
    ctx.clearRect(0, 0, w, h);
    particlesArr.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > w) p.vx *= -1;
      if(p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.fill();
    });
    requestAnimationFrame(step);
  }
  window.addEventListener("resize", resize);
  init();
  step();
})();
