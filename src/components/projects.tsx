import React from "react";
import SectionHeader from "./common/section-header";
import { projects } from "@/lib/data";

type ProjectCardProps = (typeof projects)[number];

const Projects = () => {
  return (
    <div className=" scroll-mt-[5rem] pb-12" id="projects">
      <SectionHeader>Projects 🚀</SectionHeader>
      <div className="flex flex-row  gap-4">
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
}: ProjectCardProps) {
  return (
    <>
      <div className="flex basis-full flex-col p-4  tracking-tight rounded-sm border hover:scale-105 transition-all border-black/20 sm:basis-1/2 w-[19rem] h-[18rem] hover:shadow-lg hover:border-black/30 cursor-pointer">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base">{title}</h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">{description}</span>
        </div>
        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
      </div>
    </>
  );
}
