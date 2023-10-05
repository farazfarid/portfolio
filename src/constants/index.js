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
  docker,
  angular,
  blender,
  figma,
  illustrator,
  java,
  photoshop,
  python,
  liquid,
  unity,
  adesso,
  ccc,
  guider,
  hhu,
  ngs,
  pepperminds,
  carrent,
  jobit,
  tripguide,
  threejs,
  avecamxur,
  allhersofficial,
  thedrivingteacher,
  kirrvn,
  silah,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Game Development",
    icon: mobile,
  },
  {
    title: "Marketing",
    icon: backend,
  },
  {
    title: "Content Creation",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "blender",
    icon: blender,
  },
  {
    name: "illustrator",
    icon: illustrator,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "liquid",
    icon: liquid,
  },
  {
    name: "unity",
    icon: unity,
  },
];

const experiences = [
  {
    title: "CEO & Founder",
    company_name: "Nova Game Studios",
    icon: ngs,
    iconBg: "#444444",
    date: "May 2015 - May 2019",
    points: [
      'Developing a Local-Multiplayer Game "Two Men Dungeon".',
      "Animation of characters with Blender.",
      "Implementation of the game with the Engine Unity in C#.",
      "Programming a website for the public in HTML, CSS, PHP und JavaScript, Administration of user data in SQL.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Comet Cine Center",
    icon: ccc,
    iconBg: "#ffffff",
    date: "April 2020 - July 2020",
    points: [
      "Cinema administration and booking system in Java Spring Boot.",
      "Design of a technological architecture with class diagrams based on Domain Driven Design.",
      "Specification of a data set for the Cinema administration and the connection of movies to the cinema hall with an UML-Diagram.",
      "Programming of a User Interface with Login-Screen in Thymeleaf, Administration of user data in a MySQL-Database.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Heinrich-Heine-University",
    icon: hhu,
    iconBg: "#ffffff",
    date: "July 2020 - October 2020",
    points: [
      "Usage of the Springboot Framework to create the Web-Application for control and surveillance of the customer number in a store.",
      "Implementation of a Backend for the customer class with the attributes: healthy, recovered, vaccinated. Development of special rights for emergency services.",
      "Communication of data is done through the given internal network by sending the number of customers to each entrance control.",
      "JUnit Tests for validating the methods.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Adesso",
    icon: adesso,
    iconBg: "#016fc8",
    date: "October 2021 - Present",
    points: [
      "Programming Websites and Web Apps using Angular with HTML, CSS and Typescript.",
      "Bug fixing and implementing new features.",
      "Agile Software Development with Scrum and Kanban.",
    ],
  },
  {
    title: "Chief Information Officer",
    company_name: "Avec Amxur",
    icon: avecamxur,
    iconBg: "#ffffff",
    date: "November 2021 - Present",
    points: [
      "Designing and creating a website for the company using Shopify.",
      "Designing images using Adobe Photoshop and Illustrator.",
      "Creating Ad Campaigns with Google Ads, Meta Business Suite and TikTok Ads.",
    ],
  },
  {
    title: "Chief Information Officer",
    company_name: "Kirrvn",
    icon: kirrvn,
    iconBg: "#ffffff",
    date: "December 2021 - Present",
    points: [
      "Designing and creating a website for the company using Shopify.",
      "Designing images using Adobe Photoshop and Illustrator.",
      "Creating Ad Campaigns with Google Ads, Meta Business Suite and TikTok Ads.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Guider",
    icon: guider,
    iconBg: "#073d59",
    date: "September 2022 - Present",
    points: [
      "Pushing content using Contentful.",
      "Creating e-mail automations for growth and customer experience.",
      "Writing Audio versions of the company's content.",
    ],
  },
  {
    title: "Chief Information Officer",
    company_name: "The Driving School",
    icon: thedrivingteacher,
    iconBg: "#000000",
    date: "October 2022 - Present",
    points: [
      "Designing and creating a website for the company using Shopify.",
      "Designing images using Adobe Photoshop and Illustrator.",
      "Creating an intro animation for the company's YouTube channel using Adobe After Effects and Adobe Premiere Pro.",
    ],
  },
  {
    title: "Chief Technology Officer",
    company_name: "All Hers Official",
    icon: allhersofficial,
    iconBg: "#f4e7d5",
    date: "December 2022 - Present",
    points: [
      "Designing and creating a website for the company using Shopify.",
      "Designing images using Adobe Photoshop and Illustrator.",
      "Optimising the company's logistic and order fulfillment.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
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
