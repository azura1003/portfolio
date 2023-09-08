import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    ariane,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    azura,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "A Propos",
    },
    {
      id: "work",
      title: "Mes Projets",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Developpeur Web",
      icon: web,
    },
    {
      title: "Developpeur frontend",
      icon: mobile,
    },
    {
      title: "Developpeur backend",
      icon: backend,
    },
    {
      title: "Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Chief Technology officer",
      company_name: "Azura Network",
      icon: azura,
      iconBg: "#383E56",
      date: "March 2022 - Now",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Ingénieur en Intelligence Artificielle",
      company_name: "ArianeSpace",
      icon: ariane,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Feb 2022",
      points: [
        "Développement et maintenance de systèmes d'IA utilisant TensorFlow, PyTorch et d'autres plateformes d'apprentissage profond.",
        "Collaboration avec des équipes pluridisciplinaires, incluant data scientists, ingénieurs en robotique et chefs de produit pour créer des solutions spatiales innovantes.",
        "Mise en œuvre d'algorithmes de traitement d'image et garantie de l'optimisation des modèles pour des performances en temps réel.",
        "Participation aux revues de code et apport de retours constructifs sur les techniques et méthodologies d'apprentissage automatique.",
      ],
    },
    {
      title: "Ingénieur devops",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Conception et mise en œuvre d'infrastructures cloud évolutives et résilientes pour soutenir la croissance rapide de la plateforme e-commerce.",
        "Collaboration étroite avec les équipes de développement pour automatiser les processus de déploiement, garantir la continuité des services et optimiser les performances.",
        "Gestion et amélioration des pipelines CI/CD, en intégrant les meilleures pratiques pour assurer des livraisons rapides et fiables.",
        "Surveillance proactive des systèmes en production, avec mise en place d'alertes et de mécanismes de récupération pour assurer une disponibilité maximale.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Je croyais qu'aucun site web ne pourrait égaler la beauté de notre produit, mais ManoDev a dépassé toutes mes attentes.",
      name: "Sara Rodriguez",
      designation: "Direction Artistique",
      company: "MybYT",
      image: "https://randomuser.me/api/portraits/women/82.jpg",
    },
    {
      testimonial:
        "Jamais je n'avais rencontré un développeur web aussi investi dans la réussite de ses clients que Manodev",
      name: "Chris Lavandier",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/66.jpg",
    },
    {
      testimonial:
        "Après que ManoDev a optimisé notre site web, notre trafic a augmenté de 50%. Nous ne saurions le remercier assez !",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Rives des lumières",
      image: "https://randomuser.me/api/portraits/women/85.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My Precious Coiffure",
      description:
        "Découvrez l'élégance intemporelle de MPC salon de coiffure de prestige. Où chaque coupe et coiffure reflète le raffinement et le savoir-faire d'artisans passionnés.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "gray-text-gradient",
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Azura Network",
      description:
        "Réseau social des joueurs, connectez vous à la plus grande communauté de joueurs. Innovant et immersif, vivez votre passion fond.",
      tags: [
        {
          name: "Android",
          color: "grey-text-gradient",
        },
        {
          name: "Vue.js",
          color: "green-text-gradient",
        },
        {
          name: "Symfony",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Traveloori",
      description:
        "Une plateforme de réservation de voyages complète qui permet aux utilisateurs de réserver des vols, hôtels, voitures, et qui propose des recommandations pour les destinations populaires.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };