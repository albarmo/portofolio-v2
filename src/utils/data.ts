export const MENU_DRAWER = [
  {
    id: "001",
    sectionTitle: "Discover",
    body: [
      { id: "001", title: "Home", ref: "/" },
      { id: "002", title: "Portfolio", ref: "/portfolio" },
      { id: "003", title: "Experience", ref: "/#hwtd" },
      { id: "004", title: "About", ref: "/about" },
      { id: "005", title: "The Concept", ref: "/#concepts" },
      { id: "006", title: "Contact", ref: "/contact" },
    ],
  },
  {
    id: "002",
    sectionTitle: "Connects",
    body: [
      {
        id: "Github",
        title: "Github",
        ref: "https://github.com/albarmo",
      },
      {
        id: "LinkedIn",
        title: "LinkedIn",
        ref: "https://www.linkedin.com/in/albar-moerhamsa-aa21681bb",
      },
      {
        id: "Instagram",
        title: "Instagram",
        ref: "https://www.instagram.com/albrm_",
      },
    ],
  },
];

export const STACK_LIST = [
  "typescript",
  "js",
  "nodejs",
  "nestjs",
  "postgresql",
  "go",
  "Redis",
  "mysql",
  "mongodb",
  "reactjs",
  "nextjs2",
  "vuejs",
  "tailwindcss",
  "storybook",
  "html5",
  "css3",
  "Git",
  "bunjs",
  "vitejs",
  "zod",
  "jira",
  "astro",
  "docusaurus",
  "figma",
  "postman",
  "eslint",
  "sass",
  "jest",
  "npm",
  "rollup",
  "babel",
  "aws",
  "ec2",
  "docker",
  "ionic",
];

export type Project = {
  id: string;
  name: string;
  year: string | number;
  thumbnail: string;
  hero: string;
  link: string;
  description: string;
  brief: {
    image?: string;
    text: string;
  };
  result: {
    image?: string;
    text: string;
  };
  tech_stack: {
    text: string;
    stacks: { id: string; name: string; logo: string }[];
  };
};

export const PROJECT_LIST: Project[] = [
  {
    id: "apoa",
    name: "APOA Dirjen Imigrasi",
    year: 2025,
    thumbnail: "/images/project/apoa-map.png",
    hero: "/images/project/apoa.png",
    link: "#",
    description:
      "APOA is a foreign guest reporting system developed for Indonesia’s Directorate General of Immigration, featuring passport scanning via OCR for check-in/check-out, along with user role management, guest and hotel data management, work region tracking, SSO, and data export, enabling secure and efficient immigration reporting.",
    brief: {
      image: "/images/project/apoa-map.png",
      text: "Development of a foreign guest reporting system for the Indonesian Directorate General of Immigration, enabling hotel check-in/check-out via OCR-based passport scanning, with features including guest management, regional tracking, and secure data export.",
    },
    result: {
      image: "/images/project/apoa.png",
      text: "Enabled automated, secure immigration guest reporting, Improved operational efficiency for hotels and immigration offices, Successfully integrated with existing SSO and centralized data systems.",
    },
    tech_stack: {
      text: "Tech stacks used for immigration system integration",
      stacks: [],
    },
  },
  {
    id: "localoka",
    name: "BRI Localoka",
    year: 2025,
    thumbnail: "/images/project/localoka-cover.png",
    hero: "/images/project/localoka-cover.png",
    link: "#",
    description:
      "Localoka is a marketplace platform designed to empower and support Mmes (Micro, Small, and Medium Enterprises) in Indonesia. It enables local businesses to promote and sell their products online, providing a user-friendly digital ecosystem for buyers and sellers. Localoka aims to accelerate the digital transformation of small enterprises by offering accessible tools for product listing, order management, and secure transactions.",
    brief: {
      text: "A marketplace platform to support and empower MSMEs in Indonesia by providing tools for product listing, order management, and online selling within a user-friendly digital ecosystem.",
    },
    result: {
      text: "By adopting a lean product development approach and implementing a composable architecture on the front end, we focused our efforts on delivering only the most critical features needed for initial user engagement. Close collaboration between product, design, and engineering ensured tight feedback loops, fast decision-making, and smooth execution. As a result, we successfully launched the MVP ahead of schedule, giving the team additional time to gather early user feedback, validate the product direction, and refine the experience iteratively. This early delivery not only accelerated the overall roadmap but also demonstrated the strength of strategic prioritization, modular technical foundations, and an agile development mindset.",
    },
    tech_stack: {
      text: "Tech stacks for marketplace web platform",
      stacks: [],
    },
  },
  {
    id: "delima",
    name: "BRI Delima",
    year: 2025,
    thumbnail: "/images/project/delima-cover.png",
    hero: "/images/project/delima-cover.png",
    link: "#",
    description:
      "Delima is a digital loan platform developed to provide accessible financing solutions for micro businesses...",
    brief: {
      text: "Development of a digital micro-loan platform to enhance financial inclusion by making loan applications accessible to small entrepreneurs via a seamless digital experience.",
    },
    result: {
      text: "Streamlined micro-loan application process, Supported the financial growth of small businesses, Contributed to BRI’s digital transformation in the microfinance sector.",
    },
    tech_stack: {
      text: "Tech stacks for microfinance application",
      stacks: [],
    },
  },
  {
    id: "housing",
    name: "Housing App - Interactive Static Map",
    year: 2024,
    thumbnail: "/images/project/ISMHousing.png",
    hero: "/images/project/ISMHousing.png",
    link: "#",
    description:
      "Housing App – Interactive Static Map is a user-friendly application that provides an interactive map interface for browsing and exploring housing options.",
    brief: {
      text: "An intuitive housing browser app with an interactive map interface for better real estate discovery and exploration.",
    },
    result: {
      text: "Delivered a smoother user experience in exploring housing data, Simplified user navigation using a static yet interactive visual interface.",
    },
    tech_stack: {
      text: "Tech stacks for real estate data visualization",
      stacks: [],
    },
  },
  {
    id: "teskarir",
    name: "Teskarir",
    year: 2024,
    thumbnail: "/images/project/Teskarir.png",
    hero: "/images/project/Teskarir.png",
    link: "https://softdulur-landing-git-main-albarmo.vercel.app",
    description:
      "Teskarir is a web-based application that lets you try career personality tests...",
    brief: {
      text: "Web-based platform offering career personality tests to help users identify suitable career paths based on their individual preferences and strengths.",
    },
    result: {
      text: "The startup success top 10 qualification, Successfully deployed with responsive and accessible design.",
    },
    tech_stack: {
      text: "Tech stacks for career assessment app",
      stacks: [],
    },
  },
  {
    id: "plagams",
    name: "Plagams",
    year: 2023,
    thumbnail: "/images/project/Plagams.png",
    hero: "/images/project/Plagams.png",
    link: "#",
    description:
      "Plagams is the official webstore for a local clothing brand...",
    brief: {
      text: "Creation of an official e-commerce webstore for a local fashion brand focusing on showcasing curated, high-quality clothing collections.",
    },
    result: {
      text: "Increased brand presence through a professional digital storefront.",
    },
    tech_stack: {
      text: "Tech stacks for fashion e-commerce",
      stacks: [],
    },
  },
  {
    id: "kulturlokal",
    name: "KulturLokal",
    year: 2023,
    thumbnail: "/images/project/KulturLokal.png",
    hero: "/images/project/KulturLokal.png",
    link: "#",
    description:
      "Kulturlokal is a digital media platform dedicated to Indonesian culture...",
    brief: {
      text: "A digital media platform dedicated to promoting Indonesian cultural heritage through curated content, stories, and educational features.",
    },
    result: {
      text: "Provided a platform for cultural preservation and digital exposure.",
    },
    tech_stack: {
      text: "Tech stacks for digital publishing",
      stacks: [],
    },
  },
  {
    id: "semangatbaik",
    name: "Semangatbaik",
    year: 2023,
    thumbnail: "/images/project/SemangatBaik.png",
    hero: "/images/project/SemangatBaik.png",
    link: "#",
    description:
      "Semangatbaik is a local news portal that delivers timely and relevant news...",
    brief: {
      text: "Local news and community portal focused on timely, positive, and relevant content tailored for grassroots readers.",
    },
    result: {
      text: "Increased community engagement with hyperlocal reporting.",
    },
    tech_stack: {
      text: "Tech stacks for news publishing",
      stacks: [],
    },
  },
];

export const SOCIAL_MEDIA_LIST = [
  {
    id: 0,
    platform_name: "Linked In",
    profile_link: "https://www.linkedin.com/in/albar-moerhamsa-aa21681bb",
    iconPath: "/assets/social/linkedin.svg",
  },
  {
    id: 1,
    platform_name: "Github",
    profile_link: "https://github.com/albarmo",
    iconPath: "/assets/social/github.svg",
  },
  {
    id: 2,
    platform_name: "NPM",
    profile_link: "#",
    iconPath: "/assets/social/npm.svg",
  },
  {
    id: 3,
    platform_name: "Figma",
    profile_link: "https://www.figma.com/files/drafts?fuid=657399660815615932",
    iconPath: "/assets/social/figma.svg",
  },
  {
    id: 4,
    platform_name: "Instagram",
    profile_link: "https://www.instagram.com/albrm_",
    iconPath: "/assets/social/instagram.svg",
  },
];

export const GALLERY_LIST = [
  {
    name: "APOA",
    title: "Dirjen Imigrasi",
    image_url: "/images/project/apoa.png",
    location: "Jakarta, Indonesia",
  },
  {
    name: "Localoka",
    title: "Bank Rakyat Indonesia x Pari",
    image_url: "/images/project/localoka.png",
    location: "Jakarta, Indonesia",
  },
  {
    name: "Delima",
    title: "Bank Rakyat Indonesia",
    image_url: "/images/project/delima.png",
    location: "Jakarta, Indonesia",
  },
  {
    name: "Kulturlokal",
    title: "Everidea Interactive",
    image_url: "/images/project/kulturlokal-cover.png",
    location: "Jakarta, Indonesia",
  },
];

export const CLIENTS = [
  {
    name: "BRI",
    industry: "Digital Banking",
    location: "Jakarta, IDN",
    services: ["Web Development", "Mobile App Development", "UI/UX Design"],
    image_url: "/images/company/bri.png",
  },
  {
    name: "Feedloop",
    industry: "Low Code Platform",
    location: "Jakarta, IDN",
    services: ["Custom Software", "IoT Solutions", "Cloud Integration"],
    image_url: "/images/company/feedloop.jpg",
  },
  {
    name: "Everidea",
    industry: "Digital Agency",
    location: "Jakarta, IDN",
    image_url: "/images/company/everidea.webp",
  },
  {
    name: "1000 Startup",
    industry: "Government Program",
    location: "Jakarta, IDN",
    image_url: "/images/company/1000-startup.png",
  },
];
