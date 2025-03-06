import React from "react";
import SectionHeader from "./common/section-header";
import { projects } from "@/lib/data";
import Image from "next/image";

type ProjectCardProps = (typeof projects)[number];

const Projects = () => {
  return (
    <div className=" scroll-mt-[5rem] pb-12" id="projects">
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
  tech,
  status,
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
