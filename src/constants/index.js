import { details } from "framer-motion/client";
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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Unreal Engine Developer",
      icon: web,
    },
    {
      title: "Architectural Designer",
      icon: mobile,
    },
    {
      title: "ArchitecturaL Vizualization Specialist",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Architectural Conservation Assistant",
      company_name: "Ontario Heritage Trust",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2019 - August 2019",
      points: [
        "Site monitoring & recording the conditions of heritage easement sites around Ontario.",
      ],
    },
    {
      title: "Design and Construction Lead",
      company_name: "Architecture Action Lab",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2022 - March 2024",
      points: [
        "Led the design and construction of the Russel Heights Youth House and Playground, guiding projects from community engagement through final build phases to ensure inclusive, community-driven outcomes.",
        "Facilitated participatory design sessions with local residents and youth, translating community needs into functional, inspiring architectural solutions.",
        "Managed on-site construction and coordinated multidisciplinary teams, ensuring projects stayed on schedule and aligned with design intentions.",
        "Contributed as a core construction team member for Public Foods: Community Pantry & Fridge.",
      ],
    },
    {
      title: "Research Team Lead",
      company_name: "CIMS",
      icon: shopify,
      iconBg: "#383E56",
      date: "August 2020 - Present",
      points: [
        "Led development of a Python-based workflow that automated the conversion of Point Cloud data to 3D Tiles, drastically improving load times and enabling real-time visualization of massive data.",
        "Designed and implemented the UI for the a game-engine based digital twin application, conducting user testing sessions to ensure intuitive interaction and optimal user experience.",
        "Created a geolocated federated model in Revit, consolidating all BIM and IFC Assets, and automated data workflows using Dynamo and Clarity to streamline export to Unreal Engine 5.",
        "Led visualization and asset management projects for major heritage buildings using UE5, incorporating laser scanning, drone photogrammetry, BIM/HBIM modeling (Revit, Rhino), and LiDAR flood risk mapping with QGIS.",
      ],
    },
    {
      title: "Freelance Software Developer",
      company_name: "Merchant.Designs",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Dec 2024 - Present",
      points: [
        "Developed an interactive community consultation platform, The Hub 2.0, using Unreal Engine 5 to visualize and gamify neighborhood planning and design for increased inclusivity and engagement.",
        "Implemented features for BIM and scan data integration, allowing users to view, manipulate, and export contextual models directly into professional design software at accurate scale.",
        "Collaborated with Carleton University’s Architecture Action Lab to launch the platform in Ottawa’s Russell Heights neighborhood, facilitating accessible and meaningful engagement for marginalized communities.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Russell Heights Hub App",
      description:
        "The Hub is an interactive, real-time platform that gamifies community consultation by enabling residents to collaboratively visualize, and shape their neighborhoods using immersive 3D tools.",
      details:"vibing",
      tags: [
        {
          name: "Unreal Engine 5",
          color: "blue-text-gradient",
        },
        {
          name: "Reality Capture",
          color: "green-text-gradient",
        },
        {
          name: "Rhino",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
      project_link: "/projects/Russell-Heights-Hub",
    },
    {
      name: "Thesis: Rifts, Remnants and Reparations",
      description:
        "This thesis explores how design can recover and honor the forgotten narratives of Partition survivors by transforming sites of refuge along the Radcliffe Line into spaces for storytelling, healing, and collective memory.",
      tags: [
        {
          name: "Architecture Thesis",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
        {
          name: "Rhino",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
      project_link: "/projects/Architecture-Thesis",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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