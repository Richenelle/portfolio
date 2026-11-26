export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  screenshots: string[];
  tags: string[];
  status: "En ligne" | "En développement" | "Terminé";
  highlights: string[];
  challenges: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: "occaverse",
    title: "Occaverse",
    category: "E-Commerce",
    shortDescription: "Application de vente et achat de produits d'occasion à travers le monde.",
    fullDescription: "Occaverse est une plateforme mobile innovante permettant aux utilisateurs du monde entier d'acheter et vendre des produits d'occasion. L'application offre une expérience fluide avec de nombreuses fonctionnalités avancées pour faciliter les transactions internationales.",
    image: "/projects/occaverse/occaversemain.png",
    screenshots: [
      "/projects/occaverse/occaverse1.png",
      "/projects/occaverse/occaverse2.png",
      "/projects/occaverse/occaverse3.png",
    ],
    tags: ["Flutter", "Dart", "Firebase", "Stripe", "Postes Canada"],
    status: "En développement",
    highlights: [
      "Processus d'achat/vente transparent",
      "Contrôle de conformité",
      "Suivi de livraison",
      "Paiements sécurisés multi-devises",
      "Messagerie instantanée entre acheteurs et vendeurs",
      "Système de notation et avis",
    ],
    challenges: [
      "Gestion des devises et taux de change en temps réel",
      "Optimisation des performances pour de grandes quantités de produits",
      "Implémentation d'un système de recherche avancé avec filtres",
    ],
    year: "2023",
  },
  {
    id: "greenkidz",
    title: "GreenKidz",
    category: "E-Commerce Durable",
    shortDescription: "Application de vente d'occasion pour enfants (0-18 ans) au Canada, favorisant le recyclage.",
    fullDescription: "GreenKidz est une application éco-responsable dédiée à la vente et l'achat de produits d'occasion pour enfants au Canada. L'objectif est de promouvoir le recyclage et la consommation responsable tout en offrant aux familles une solution économique.",
    image: "/projects/greenkidz/greenmain.jpeg",
    screenshots: [
      "/projects/greenkidz/green1.jpeg",
      "/projects/greenkidz/green2.jpeg",
      "/projects/greenkidz/green3.jpeg",
    ],
    tags: ["Flutter", "Dart", "Firebase", "Maps API", "Push Notifications"],
    status: "En développement",
    highlights: [
      "Catégorisation par âge (0-18 ans)",
      // "Géolocalisation pour achats locaux",
      // "Impact écologique calculé pour chaque transaction",
      "Interface intuitive pour parents",
      "Système de messagerie intégré",
      "Notifications personnalisées pour nouvelles annonces",
      "Filtrage avancé par catégorie, taille et état du produit",
      "Système de paiement sécurisé",
    ],
    challenges: [
      "Conception UX adaptée aux parents pressés",
      "Système de vérification de qualité des produits",
      "Intégration des normes de sécurité canadiennes",
      "Gestion des retours et litiges",
    ],
    year: "2025",
  },
  {
    id: "lagora-discount",
    title: "LagoraDiscount",
    category: "Commerce Local",
    shortDescription: "Hypermarché connecté pour les produits locaux au Bénin.",
    fullDescription: "LagoraDiscount connecte les consommateurs béninois aux producteurs locaux via une plateforme mobile intuitive. L'application facilite l'accès aux produits frais et locaux tout en soutenant l'économie locale.",
    image: "/projects/lagoradiscount/lagoramain.jpg",
    screenshots: [
      "/projects/lagoradiscount/lagora1.jpg",
      "/projects/lagoradiscount/lagora2.jpg",
      "/projects/lagoradiscount/lagora3.jpg",
    ],
    tags: ["Flutter", "Dart", "REST API", "Local Storage", "Payment Gateway"],
    status: "En ligne",
    highlights: [
      "Catalogue de produits locaux actualisé",
      "Système de livraison intégré",
      "Promotions et réductions en temps réel",
      "Support multilingue (Français, Fon)",
    ],
    challenges: [
      "Adaptation aux connexions internet limitées",
      "Gestion des stocks multi-vendeurs",
      "Intégration de moyens de paiement locaux",
    ],
    year: "2022",
  },
  {
    id: "permismart",
    title: "Permismart",
    category: "Éducation",
    shortDescription: "Application de gestion des cours de conduite dans le système français.",
    fullDescription: "Permismart est une solution complète pour les auto-écoles et leurs élèves en France. L'application centralise la gestion des cours théoriques et pratiques, les évaluations, le suivi de progression et la planification des séances.",
    image: "/projects/permismart/permismartmain.png",
    screenshots: [
      "/projects/permismart/permismart1.png",
      "/projects/permismart/permismart2.png",
      "/projects/permismart/permismart3.png",
    ],
    tags: ["Flutter", "Dart", "Calendar API", "Push Notifications", "PDF Export"],
    status: "En développement",
    highlights: [
      "Calendrier de réservation intelligent",
      "Suivi de progression détaillé",
      "Système de notation des moniteurs",
      "Export des documents administratifs",
    ],
    challenges: [
      "Synchronisation temps réel entre élèves et moniteurs",
      "Gestion complexe des créneaux horaires",
      "Conformité RGPD pour les données personnelles",
    ],
    year: "2023",
  },
  {
    id: "agroweather",
    title: "Agroweather",
    category: "AgriTech",
    shortDescription: "Plateforme de gestion des prévisions agrométéorologiques au Bénin.",
    fullDescription: "Agroweather fournit aux agriculteurs béninois des prévisions météorologiques précises et adaptées à leurs cultures. L'application aide à optimiser les décisions agricoles grâce à des données localisées et des recommandations personnalisées.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=800&fit=crop",
    ],
    tags: ["Flutter", "Dart", "Weather API", "Charts", "Geolocation"],
    status: "En ligne",
    highlights: [
      "Prévisions météo localisées à 10 jours",
      "Alertes personnalisées par culture",
      "Conseils agronomiques automatisés",
      "Mode hors-ligne pour zones rurales",
    ],
    challenges: [
      "Précision des données météo pour zones rurales",
      "Fonctionnement en mode hors-ligne",
      "Interface accessible aux agriculteurs non-technophiles",
    ],
    year: "2022",
  },
  {
    id: "queue-manager",
    title: "Queue Manager",
    category: "Services",
    shortDescription: "Application mobile de gestion de file d'attente dans les services.",
    fullDescription: "Queue Manager révolutionne la gestion des files d'attente dans les administrations, hôpitaux et services publics. L'application permet aux usagers de prendre un ticket virtuel et de suivre leur position en temps réel, réduisant ainsi les temps d'attente physique.",
    image: "projects/queuemanagement/queuemain.jpg",
    screenshots: [
      "/projects/queuemanagement/queue1.jpg",
      "/projects/queuemanagement/queue2.jpg",
      "/projects/queuemanagement/queue3.jpg",
    ],
    tags: ["Flutter", "Dart", "Real-time DB", "QR Code", "Push Notifications"],
    status: "Terminé",
    highlights: [
      "Ticket virtuel avec QR code",
      "Estimation du temps d'attente en temps réel",
      "Notifications quand son tour approche",
      "Statistiques pour les gestionnaires",
    ],
    challenges: [
      "Synchronisation temps réel multi-utilisateurs",
      "Gestion des pics d'affluence",
      "Accessibilité pour tous les publics",
    ],
    year: "2025",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};
