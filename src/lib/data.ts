import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const experience = [
  {
    title: "Front-End Web Developer",
    location: "Pokhara, Nepal",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "July 2024 - Feb 2025",
  },
  {
    title: "Front-End Web Developer Intern",
    location: "Pokhara, Nepal",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
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
  },
  {
    title: "Tishy and Co",
    description:
      "A website for catering services. Customers can order food, book catering services and leave reviews.",
    tech: ["React", "Tailwind", "Shadcn"],
    href: "https://tishyandco.com.au/",
    status: "In Progress",
    imageUrl: "/tishy.png",
  },
  {
    title: "ElectroHub Ecommerce Web-App",
    description:
      "A website for an ecommerce store. Customers can browse products, add to cart, checkout and leave reviews.",
    tech: ["React", "Tailwind", "Sequelize", "MySQL", "Express"],
    href: undefined,
    status: "In Progress",
    imageUrl: "/electro.jpeg",
  },
  {
    title: "Portfolio",
    description:
      "A portfolio website showcasing my work, skills and experience.",
    tech: ["Next.js", "Tailwind", "Shadcn", "Context API", "Framer Motion"],
    href: undefined,
    imageUrl: "/portfolio.png",
  },
  {
    title: "Foodi",
    description:
      "A landing page for a restaurant. Customers can view and add foods to cart.",
    tech: ["React", "Tailwind", "Shadcn", "Zustand", "React-Query"],
    href: "https://sample-project-nine-chi.vercel.app/",
    status: "Ongoing",
    imageUrl: "/foodi.png",
  },
];
