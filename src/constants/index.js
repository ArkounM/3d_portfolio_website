import { details, header, image, s } from "framer-motion/client";
import {
    architecture,
    archviz,
    creator,
    ue5,
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
    oht,
    aal,
    cims,
    carrent,
    exhibition1_render,
    sa_aerial,
    threejs,
    russellHeightsHero,
    rh,
    rh_cine1,
    rh_cine2,
    rh_1,
    rh_edit1,
    rh_edit2,
    rh_hub2,
    logo,
    sa_hero,
    sa,
    kasur_map,
    exhibition1_axo,
    exhibition1_section,
    exhibition2_axo,
    exhibition2_render,
    exhibition3_axo,
    exhibition3_section,
    exhibitionAll_axo,
    punjab_map,
    argentina_axo1,
    argentina_axo2,
    argentina_axo3,
    argentina_axo4,
    argentina_axo5,
    argentina_axo6,
    argentina_axo7,
    argentina_render1,
    argentina_render2,
    pf_axo,
    pf_build,
    pf_diagrams,
    pf_front,
    link,
    yt_python,
    yt_intro,
    yt_style,
    yt_usage, 
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Unreal Engine Developer",
      icon: ue5,
    },
    {
      title: "Architectural Designer",
      icon: architecture,
    },
    {
      title: "ArchitecturaL Vizualization Specialist",
      icon: archviz,
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
      icon: oht,
      iconBg: "#383E56",
      date: "May 2019 - August 2019",
      points: [
        "Site monitoring & recording the conditions of heritage easement sites around Ontario.",
      ],
    },
    {
      title: "Design and Construction Lead",
      company_name: "Architecture Action Lab",
      icon: aal,
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
      icon: cims,
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
      icon: logo,
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
      subtitle: "An Interactive ArchViz App for Showcasing Community Design",
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
      image: rh_cine1,
      image_hero: carrent,
      image_header: rh,
      image_1:russellHeightsHero,
      image_2: rh_cine2,
      image_3: rh_1,
      image_4: rh_hub2,
      image_5: rh_edit1,
      image_6: rh_edit2,
      image_7: "",
      image_8: "",
      video: "https://www.youtube.com/embed/jLLI8WyM4Vg?si=Y4U97i1R0gYA6JEq",
      source_code_link: "https://www.youtube.com/embed/jLLI8WyM4Vg?si=Y4U97i1R0gYA6JEq?=1111",
      project_link: "/projects/Russell-Heights-Hub",
      abstract: [
        "1700SPOT is a multifunctional public space co-designed with the Russell Heights community to promote youth mental health and well-being. Developed through a collaboration between community organizations and Carleton Architecture students, the space features a gathering zone, an outdoor cinema, and a gym. From the early stages of consultation, 3D visualizations proved especially engaging for the community—particularly the youth—who were excited to see representations of the spaces they helped shape.",
         ],
      body_text1:[
        "To build on this engagement, I set out to build a proof-of-concept interactive architectural visualization (ArchViz) app in 27 days using Unreal Engine. The 'Hub' app allows users to explore a detailed 3D model of 1700SPOT, simulating weather, time of day, and seasonal changes. The main features include a top-down view of design phases, toggles for BIM and drone-based point clouds, and an annotation menu to explain design decisions. A displacement mode lets users 'lift' parts of the model, and a project timeline slider helps visualize how the site evolved.",
        ],
      body_text2:[
        "Public engagement is vital for creating successful community interventions, but traditional consultation methods often fall short in fostering inclusivity and active participation. The Hub 2.0 aims to bridge this gap by transforming consultations into interactive, engaging, and community-driven experiences.", 
        "This project builds on Hub 1.0, which began as a personal passion project and proof of concept that was then presented to the Carleton University’s nonprofit Architecture Action Lab (AAL). It was designed to showcase what’s possible when communities are given digital tools to visualize and influence their own neighborhoods. Developed without any funding, Hub 1.0 laid the foundation for a new kind of participatory design process.",
        ],
      body_text3:["Using Unreal Engine 5’s real-time rendering capabilities, Hub 2.0 will gamify the consultation process, enabling community members to explore realistic digital versions of their neighborhoods and directly contribute to their design.",
         "With simple, intuitive tools, users can add models and basic shapes, sketch directly on the scene to highlight areas of interest, manipulate objects using move, rotate, and scale tools, and leave comments that are saved to the database. Every suggestion is saved to the platform, creating a visual timeline of community feedback from initial concepts through to final construction.",
      
      ],
      body_text4:["Check out the video below to see how I built the Hub 1.0 app in 27 days!",],
      header_text: ["What's Next? HUB 2.0"]
      },
    {
      name: "Rifts, Remnants & Reparations",
      subtitle: "Design as a Facilitator of Storytelling in Post-Partition Punjab - M.Arch Thesis",
      description:
        "This thesis explores how design can recover and honor the forgotten narratives of Partition survivors by transforming sites of refuge along the Radcliffe Line into spaces for storytelling, healing, and collective memory.",
      tags: [
        {
          name: "Thesis",
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
      image: exhibition1_render,
      image_hero: exhibition1_render,
      image_header: punjab_map,
      image_1:kasur_map,
      image_2: exhibition1_axo,
      image_3: exhibition1_section,
      image_4: exhibition2_axo,
      image_5: exhibition2_render,
      image_6: exhibition3_axo,
      image_7: exhibition3_section,
      image_8: exhibitionAll_axo,
      abstract: [
        "The 1947 Radcliffe Line demarcated a border that split the Indian subcontinent into two states. This Partition left over 10,000,000 displaced and hundreds of thousands killed in what became the single largest mass migration event in history. This thesis critiques the development of monumentality along the border while zooming into the sociospatial conditions the Radcliffe Line produced in Punjab province. The popular narrative perpetuated by these conditions have neglected the lived experiences of survivors and the sites of refuge they occupied during their migration. With these sites of refuge slowly becoming forgotten, this thesis builds off existing oral histories and envisions how design can facilitate awareness and healing through new sites of narrative sharing. Conversely, it also tackles how narratives and storytelling from oral history archives facilitate and inspire design decisions. These examinations provide a framework for an outdoor exhibition design that provides survivors and their families the space and agency to tell their story - the forgotten narrative of Partition. "],
      body_text1:[
        "The chosen town for the exhibition intervention is in Kasur, Pakistan, It is a city that saw its share of violence with the communal riots and the massacres at the train station being amongst the worst. The fallout saw much of its Hindu and Sikh population evicted and replaced by a flood of migrants who were housed in refugee camps. Between Kasur’s three refugee camps, the city saw a total of a quarter million people within its boundaries.",
        "The camp that will be the focus of this intervention is the Hanfia Camp, a high school that was repurposed into a makeshift medical camp for around 20,000 injured migrants - primarily women and orphaned children. These migrants were part of a larger convoy that had set out from Faridkot, a few days walk away with only half making it to Hanfia." ],
      body_text2:[
        "The first installation is the Pavilion for Weaving and (Re)learning. It serves to share and facilitate the further collection of oral histories in direct collaboration with existing organizations such as the Citizens Archive of Pakistan and 1947 Partition Archive. The work that they have collected thus far would help fill the contextual parts of the installation leaving the public to engage with the design.",
        "The formal language of the space argues against the nature of the arbitrary border line by intentionally pivoting its walls to create openings that allow visitors to slip through to the other side as they please. The walls are made up of a simple wood frame whose vertical members have slots carved into it to support the movement of horizontal rungs. Each rung carries a roll of fabric, blank save for the stories that have already been collected by these archival organizations. The rungs begin low on the vertical members and the roll can be shifted up to create more space as visitors contribute their own stories. Once a roll has been fully filled at the topmost rung it can then be suspended across to the other side. "],
      body_text3:["The Contem-play-tion Labyrinth is one fully inspired by the site’s use as a school ground and aims to facilitate spaces of play with that of contemplation. These two acts may seem opposites from one another. Contemplation has often been associated as self reflective, silent, and meditative while Play is often fun, light-hearted and can be collaborative. When children are young, play is one first things that they learn to express themselves and to be fully present in the act. It is in this regard that the two activities are quite similar. Contemplation and play both require one to be “in the moment” and as adults there are many activities of play that can be seen as meditative. From making music, painting, knitting to going for a walk or a run, these light-hearted mediums for contemplation allow one to self-reflect. The form largely came from explorations with fabric attached to wooden trusses and then playing with sweeps and folds to create a self supporting structure. The play structures located in the larger spaces are made up of weaved jute, a type of rope used for traditional weaved beds and benches called charpoy’s that were seen in the refugee camp."],
      body_text4:["The third and final intervention of the Exhibition is the Wayfinding and Discovery Pavilion. It is one that brings awareness of the many other sites of memory and refuge scattered throughout the city that have become forgotten since Partition. It reflects on the migration stories from Kasur by capturing the shadow impressions of objects that were carried across the border. This shadow is captured using SolarFast, a light sensitive chemical that changes colour upon contact with the sun."],
      source_code_link: "https://repository.library.carleton.ca/concern/etds/hq37vp96h?locale=en",
      project_link: "/projects/Architecture-Thesis",
    },
    {
      name: "Streamable Assets",
      subtitle: "The modeled content is property of PSPC, produced under contract with CENTRUS.",
      description:
        "Streamable Assets is a collaborative app by CIMS and CENTRUS that uses Unreal Engine 5 to create an interactive Visual Twin of Parliament's Centre Block Rehabilitation project using BIM, photogrammetry, and laser scanning data.",
      tags:[
        {
          name: "Unreal Engine 5",
          color: "blue-text-gradient",
        },
        {
          name: "Reality Capture",
          color: "green-text-gradient",
        },
        {
          name: "Revit",
          color: "pink-text-gradient",
        },
      ],
      image: sa,
      image_hero: sa_hero,
      image_header: sa_aerial,
      image_1: "",
      image_2: "",
      image_3: "",
      image_4: "",
      image_5: "",
      image_6: "",
      image_7: "",
      image_8: "",
      video: "https://www.youtube.com/embed/zVLCuKxAdjk?start=2425",
      abstract: ["Streamable Assets is a joint effort between CIMS and CENTRUS to create an application that serves as a Visual Twin of Parliament's Centre Block Rehabilitation (CBR) project. It uses assets from BIM, photogrammetry and terrestrial laser scanning to create an interactive app that allows users to manipulate existing models, proposed designs, a catalogue of heritage assets - all using the real-time rendering capabilities of Unreal Engine 5. CIMS has been working in Unreal Engine for over 5 years on our Visualization and Storytelling projects. It's a tool that provides users with an extensive range of features allowing for the real time rendering and simulation of large datasets, BIM models and so much more!", 
        "Check out this fantastic talk at Unreal Fest Seattle for the visualization work of the Centre-Block Rehabilitation Project! It has been a pleasure collaborating with HOK and CENTRUS on the Streamable Assets Application and producing the exterior visualizations for this talk.",
      ],
      body_text1:[],
      body_text2: [""],
      body_text3:[""],
      body_text4:[""],
      source_code_link: "https://youtu.be/zVLCuKxAdjk?t=2425",
      project_link: "/projects/Streamable-Assets",
    },
    {
      name: "Designed for Deconstruction",
      subtitle: "A Community-Led Approach to Urban Rehabilitation - M.Arch Options Studio",
      description:
        "Designed for Deconstruction is a proposal for Buenos Aires' Barrio Rodrigo Bueno that offers a community-led, sustainable alternative to government redevelopment by using recycled materials and participatory design to gradually rehabilitate self-built homes while preserving social and cultural ties.",
      tags: [
        {
          name: "V-Ray",
          color: "blue-text-gradient",
        },
        {
          name: "Rhino",
          color: "green-text-gradient",
        },
        {
          name: "QGIS",
          color: "pink-text-gradient",
        },
      ],
      image: argentina_render1,
      image_hero: argentina_render1,
      image_header: argentina_axo1,
      image_1: argentina_axo2,
      image_2: argentina_axo3,
      image_3: argentina_axo4,
      image_4: argentina_axo5,
      image_5: argentina_axo6,
      image_6: argentina_axo7,
      image_7: "",
      image_8: argentina_render2,
      source_code_link: "https://www.dezeen.com/2023/11/30/ten-projects-students-carleton-university/#:~:text=Designed%20for%20Deconstruction,cmail.carleton.ca",
      project_link: "/projects/Designed-for-Deconstruction",
      abstract: [
        "Designed for Deconstruction is a design proposal for Barrio Rodrigo Bueno, a self-built settlement in Buenos Aires, Argentina. These settlements are largely inhabited by migrants and their homes result from an iterative process. The homes can grow and evolve over time as the family’s needs change. Recent government initiatives aiming to demolish at-risk homes, provide new housing, add job security, and address soil erosion from the adjacent canal, mean radical change for the settlements. These initiatives however ignore intangible values, notably, the rich connection the community has with each other and their homes.",
        "Designed for Deconstruction proposes another path: presenting a framework for the deconstruction of the existing homes. Recycled material from the demolition stage is used to rehabilitate existing homes using new building methods that take advantage of natural ventilation and daylighting. These steps take advantage of the iterative nature of a self-built home, allowing rehabilitation to happen at a desirable pace for the family. Moreover, the community is encouraged to actively participate in the deconstruction and rehabilitation process to learn ideal building techniques - skills they can then apply in their own community and throughout the city."],
      body_text1:[],
      body_text2: [""],
      body_text3:[""],
      body_text4:[""],
      },
    {
      name: "Public Foods",
      subtitle: "A Community Fridge and Pantry for Ottawa - Architecture Action Lab Design-Build",
      description:
        "In response to Ottawa's rising living costs, Carleton architecture students, led by Dr. Menna Agha and local partners, designed and built Public Foods—a community fridge and pantry.",
      tags: [
        {
          name: "Design-Build",
          color: "blue-text-gradient",
        },
        {
          name: "Construction",
          color: "green-text-gradient",
        },
        {
          name: "Community Engagement",
          color: "pink-text-gradient",
        },
      ],
      image: pf_front,
      image_hero: pf_front,
      image_header: pf_axo,
      image_1: pf_build,
      image_2: pf_diagrams,
      image_3: "",
      image_4: "",
      image_5: "",
      image_6: "",
      image_7: "",
      image_8: "",
      source_code_link: "https://archactionlab.org/Public-Foods-2",
      project_link: "/projects/Public-Foods",
      abstract: [
        "As a response to the inflated cost of food and living in Ottawa, Carleton University architecture students designed and built Public Foods: a structure housing a community fridge and pantry accessible to all. Led by Assistant Professor of Design and Spatial Justice, Dr. Menna Agha in collaboration with OCH and a number of local organizations and businesses, the structure acts as a piece of community infrastructure that supports those experiencing food insecurity in Ottawa.",
        "Personal contribution to this build was during the construction phase of the Pantry. This was primarily seen during the carpentry phases where a small team of volunteer students was led for framing and finish carpentry tasks. Contributions were also seen in the landscaping, foundation, and drywall phases under the guide of Josh Eckert."],
      body_text1:[],
      body_text2: [""],
      body_text3:[""],
      body_text4:[""],
      },
    {
      name: "YT To Shorts",
      description:
        "An intelligent video processing tool that automatically identifies and extracts engaging moments from long-form videos, converting them into vertical format clips suitable for platforms like YouTube Shorts, Instagram Reels, or TikTok.",
      tags: [
        {
          name: "Unreal Engine 5",
          color: "blue-text-gradient",
        },
        {
          name: "Architecture",
          color: "green-text-gradient",
        },
        {
          name: "Community Engagement",
          color: "pink-text-gradient",
        },
      ],
      image: yt_python,
      image_hero: yt_style,
      image_header: yt_intro,
      image_1: "",
      image_2: "",
      image_3: yt_usage,
      image_4: "",
      image_5: "",
      image_6: "",
      image_7: "",
      image_8: "",
      source_code_link: "https://github.com/ArkounM/YT_to_Shorts",
      project_link: "/projects/YT_To_Shorts",
      abstract: [
        "YT_to_Shorts is an open-source Python utility developed to streamline the content repurposing process for video creators. By combining OpenAI’s Whisper and Google’s Gemini AI, the tool automatically identifies compelling moments in long-form video content and transforms them into polished, vertical-format clips optimized for platforms like TikTok, YouTube Shorts, and Instagram Reels.",
        
      ],
      header_text: ["Key Features"],
      body_text1:[],
      body_text2: ["Automatic Highlight Detection: Uses AI to detect engaging, emotional, or insightful moments suitable for short-form formats.",
        "Transcription & Captioning: Leverages Whisper to generate accurate transcriptions with word-level timing, enabling synced, dynamic captions.",
        "Vertical Video Formatting: Outputs ready-to-publish 9:16 clips, complete with background blur and caption styling via OpenCV and Pillow.",
        "CLI-Driven Workflow: A command-line interface supports efficient batch processing and full customization via flags and prompts.",
        "Additional Utilities: Includes companion scripts for full-length caption animations and automated chapter generation.",
        "This project demonstrates the practical application of AI in creator tooling, focusing on time-saving automation and content scalability.",],
      body_text3:[""],
      body_text4:[""],
      video: "https://www.youtube.com/embed/iaG6FjN2tqU?si=57SGyt5Uv2LtKYBH",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };