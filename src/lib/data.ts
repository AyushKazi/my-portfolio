import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const experience = [
  {
    title: "Front-End Web Developer Intern",
    location: "Pokhara, Nepal",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - July 2024",
  },
  {
    title: "Front-End Web Developer",
    location: "Pokhara, Nepal",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "July 2024 - Feb 2025",
  },
];

export const projects = [
  {
    title: "Women's Trek",
    description:
      "A website for women trekkers to find trekking partners, share experiences and plan trips.",
    tech: ["React", "Next.js", "Tailwind", "Prisma", "MongoDB"],
    href: "https://womenstrek.com/",
    status: "In Progress",
  },
  {
    title: "Tishy and Co",
    description:
      "A website for catering services. Customers can order food, book catering services and leave reviews.",
    tech: ["React", "Next.js", "Tailwind", "Prisma", "MongoDB"],
    href: "https://tishyandco.com.au/",
    status: "In Progress",
  },
  {
    title: "Ecommerce Web-App",
    description:
      "A website for an ecommerce store. Customers can browse products, add to cart, checkout and leave reviews.",
    tech: ["React", "Tailwind", "Sequelize", "MySQL", "Express"],
    href: "",
    status: "In Progress",
  },
];
