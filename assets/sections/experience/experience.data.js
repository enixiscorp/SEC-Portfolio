// Chronologie professionnelle affichée dans la section Expérience.
// MARKETS_20 est dupliqué ici volontairement (plutôt qu'importé depuis la section Stats)
// pour que cette section reste modifiable indépendamment de la section Stats.
const MARKETS_20 = ["Belgique","Bénin","Bolivie","Botswana","Cameroun","Chypre","Côte d'Ivoire","France","Italie","Mali","Malte","Namibie","Portugal","RDC","République dominicaine","République du Costa Rica","Slovénie","Togo","Zambie","Zimbabwe"];

export const TIMELINE = [
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
    intro: "Pilotage des opérations d'activation des chauffeurs sur 20 marchés simultanément, avec conception du module de formation officiel du département.",
    skills: ["Expansion multi-marchés","Contrôle documentaire","Formation","Conformité"],
    bullets: [
      "Atteint 120% des objectifs de conversion d'activation des chauffeurs, en optimisant le parcours d'intégration et la vérification documentaire.",
      "Structuré les opérations d'activation sur 20 marchés simultanément, avec des procédures communes de contrôle documentaire et de conformité.",
      "Contribué à la validation d'environ 8 000+ profils chauffeurs sur la période, avec près de 4 000 activations effectives — soit un funnel validation → activation de l'ordre de 50%.",
      "Standardisé la transmission des connaissances du département en concevant le module officiel de formation des nouveaux spécialistes.",
      "Utilisé des campagnes de communication ciblées (InfoBip) pour accélérer les activations sur des environnements africains et latino-américains.",
      { markets: MARKETS_20 },
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
