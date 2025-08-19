export interface Project {
  id: string;
  title: string;
  description: string;
  mainMockupImage: string;
  clientDescription: string;
  secondMockupImage: string;
  challengeDescription: string;
  services: string[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: "e-ride-rentals",
    title: "E-Ride Rentals",
    description:
      "Maatwerk website met boekingfunctionaliteit om E-Chopper te huren.",
    mainMockupImage:
      "https://yqrmvrg5kc.ufs.sh/f/lJRCmX8Mhk5evoBAwGppOUSvzsXdbicwB2Z8FgE0aGCDjxQ5",
    clientDescription:
      "De opdrachtgever is een ondernemer die tijdens zijn vakantie op de Capfun camping in Voorthuizen merkte dat er geen mogelijkheid was om e-choppers te huren. Terwijl hij genoot van zijn verblijf, zag hij dat bezoekers die wel een e-chopper wilden huren, naar een andere camping verderop moesten rijden. Dit gaf hem het idee om zelf een oplossing te creëren en een e-chopper verhuur op zijn eigen camping op te zetten. Zo ontstond E-Ride Rentals, waarmee hij niet alleen het gemak van elektrische scooters beschikbaar maakte voor campinggasten, maar ook bijdroeg aan duurzame mobiliteit en het verkennen van de omgeving op een avontuurlijke manier.",
    challengeDescription:
      "De grootste uitdaging bij het opzetten van E-Ride Rentals was het ontwikkelen van een boekingsysteem dat volledig aansloot bij de specifieke wensen van de klant. In plaats van een standaard WordPress-plugin te gebruiken, besloot ik een custom oplossing te bouwen die niet alleen flexibel en schaalbaar was, maar ook eenvoudig te beheren. Het doel was om een intuïtief dashboard te creëren voor de eigenaar, waarmee hij op een overzichtelijke manier de choppers kon beheren, huurperiodes kon instellen en alle boekingen in één oogopslag kon overzien. Dit systeem moest niet alleen efficiënt werken, maar ook zorgen voor een gebruiksvriendelijke ervaring, zodat de eigenaar zich volledig kon focussen op de gasten en de groei van zijn bedrijf.",
    secondMockupImage:
      "https://yqrmvrg5kc.ufs.sh/f/lJRCmX8Mhk5ewpleEApaSQ34dcgqWk7JOpZM6DHYhn5CLGbz",
    services: [
      "Maatwerk website",
      "Stripe integratie",
      "Webdesign",
      "Multi-language",
    ],
    techStack: ["Next.js", "Supabase", "Vercel", "next-intl"],
  },
];

export const slides = [
  {
    img: "/projects/suitsbooks.png",
    alt: "SuitsBooks",
    url: "https://app.suitsbooks.com",
  },
  {
    img: "/projects/e-rides.png",
    alt: "E-Ride Rentals",
    url: "https://e-riderentals.nl",
  },
  {
    img: "/projects/koningsvogel.svg",
    alt: "Koningsvogel",
    url: "https://koningsvogel.vercel.app/",
  },

  {
    img: "/projects/unit-a.png",
    alt: "Unit-A",
    url: "https://unit-a-security.vercel.app/",
  },
  {
    img: "/projects/translatetunes.png",
    alt: "TranslateTunes",
    url: "https://translatetunes.web.app/",
  },
  {
    img: "/projects/antivlam.png",
    alt: "Antivlam",
    url: "https://antivlam.vercel.app",
  },
  {
    img: "/projects/dronesecurity.svg",
    alt: "DroneSecurity",
    url: "https://dronesecurity.nl",
  },
  {
    img: "/projects/isospect.svg",
    alt: "Isospect",
    url: "https://isospect.nl",
  },
  {
    img: "/projects/isospect-portal.svg",
    alt: "Isospect Portal",
    url: "https://portal.isospect.nl",
  },
  {
    img: "/projects/maisonlepuy.svg",
    alt: "MaisonlePuy",
    url: "https://maisonlepuy.nl",
  },
  {
    img: "/projects/qrspot.svg",
    alt: "QRSpot",
    url: "https://qrspot.nl",
  },
  {
    img: "/projects/qrspot-ios.svg",
    alt: "QRSpot App",
  },
  {
    img: "/projects/loveforpets.svg",
    alt: "Love For Pets",
    url: "https://loveforpets.nl",
  },
  {
    img: "/projects/antivlam-urenregistratie.svg",
    alt: "Antivlam Urenregistratie",
  },
  {
    img: "/projects/floatingsneaker.png",
    alt: "FloatingSneaker",
    url: "https://floatingsneaker.com",
  },
];
