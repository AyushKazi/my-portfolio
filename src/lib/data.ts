import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export const experience = [
  {
    title: "Front-End Web Developer",
    location: "Pokhara, Nepal",
    description:
      "Worked on various project that involved building a website for a catering service, trekking, solar energies and electricals. Used Next.js, Tailwind, and Shadcn. Gained knowledge in client collaboration, enhancing user experience and enhancing SEO.",
    icon: React.createElement(SiNextdotjs),
    date: "July 2024 - Feb 2025",
  },
  {
    title: "Front-End Web Developer Intern",
    location: "Pokhara, Nepal",
    description:
      "I worked as a front-end developer intern on a project that involved building a restaurant management system. Used React, Tailwind, and Firebase. Gained experience in working with a team and using version control.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - July 2024",
  },
];

export const projects = [
  {
    title: "Women's Trek",
    description:
      "A website for women trekkers to find trekking partners, share experiences and plan trips.",
    tech: ["Next.js", "Tailwind", "Shadcn"],
    href: "https://womenstrek.com/",
    imageUrl: "/women.png",
    status: "In Progress",
    github: undefined,
  },
  {
    title: "Tishy and Co",
    description:
      "A website for catering services. Customers can order food, book catering services and leave reviews.",
    tech: ["React", "Tailwind", "Shadcn"],
    href: "https://tishyandco.com.au/",
    status: "In Progress",
    imageUrl: "/tishy.png",
    github: undefined,
  },
  {
    title: "ElectroHub ",
    description:
      "A website for an ecommerce store. Customers can browse products, add to cart, checkout and leave reviews.",
    tech: ["React", "Tailwind", "Sequelize", "MySQL", "Express"],
    href: undefined,
    status: "In Progress",
    imageUrl: "/electrohub.png",
    github: "https://github.com/AyushKazi/FYP",
  },
  {
    title: "Portfolio",
    description:
      "A portfolio website showcasing my work, skills and experience.",
    tech: ["Next.js", "Tailwind", "Shadcn", "Context API", "Framer Motion"],
    href: "https://my-portfolio-alpha-three-87.vercel.app/",
    imageUrl: "/portfolio.png",
    github: "https://github.com/AyushKazi/my-portfolio",
  },
  {
    title: "Foodi",
    description:
      "A landing page for a restaurant. Customers can view and add foods to cart.",
    tech: ["React", "Tailwind", "Shadcn", "Zustand", "React-Query"],
    href: "https://sample-project-nine-chi.vercel.app/",
    status: "Ongoing",
    imageUrl: "/foodi.png",
    github: "https://github.com/AyushKazi/Foodi",
  },
];
