import { techStack } from "@/lib/techstack";
import React from "react";
import Section from "./common/section";

const Skills = () => {
  return (
    <div className="pb-8 scroll-mt-[5rem] text-center  " id="skills">
      <h1 className="text-xl lg:text-2xl xl:text-4xl pb-4 font-semibold">
        Tech Stack 💻
      </h1>

      <div className="flex flex-wrap justify-center max-w-3xl  items-center mx-auto">
        {techStack.map((tech, index) => (
          <p
            key={index}
            className="px-4 py-2 m-2 text-sm lg:text-base bg-gray-200 text-black/90 rounded-md"
          >
            {tech}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
