import { techStack } from "@/lib/techstack";
import React from "react";
import SectionHeader from "./common/section-header";

const Skills = () => {
  return (
    <div
      className="pb-10 lg:pb-14 scroll-mt-[5rem] text-center mt-4  "
      id="skills"
    >
      <SectionHeader>TechStack 💻</SectionHeader>
      <div className="flex flex-wrap justify-center max-w-3xl  items-center mx-auto">
        {techStack.map((tech, index) => (
          <p
            key={index}
            className="px-4 py-2 m-2 text-sm bg-gray-100 shadow text-black/90 rounded-md"
          >
            {tech}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
