"use client";
import React, { useEffect } from "react";
import SectionHeader from "./common/section-header";
import { projects } from "@/lib/data";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/active-section-context";

type ProjectCardProps = (typeof projects)[number];

const Projects = () => {
  const { inView, ref } = useInView({ threshold: 0.4 });

  const { setActiveSection, activeSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("projects");
    }
  }, [inView]);

  return (
    <div
      className=" scroll-mt-[6rem]  pb-10 lg:pb-14 mt-4"
      id="projects"
      ref={ref}
    >
      <SectionHeader>Projects</SectionHeader>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

export function ProjectCard({
  title,
  href,
  description,
  imageUrl,
}: ProjectCardProps) {
  return (
    <>
      <a
        href={href}
        target="_blank"
        className="flex basis-full flex-col p-4  tracking-tight rounded-sm border hover:scale-105 transition-all border-black/20 w-[min(100%, 19rem)] h-[20rem] hover:shadow-lg hover:border-black/30 cursor-pointer"
      >
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base">{title}</h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">{description}</span>
        </div>
        <div className="flex flex-1 w-full border border-black/20 rounded-lg mt-4 overflow-hidden ">
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            className="object-cover object-top w-full h-full rounded-lg overflow-hidden"
          />
        </div>
      </a>
    </>
  );
}
