"use client";
import { techStack } from "@/lib/techstack";
import React, { useEffect } from "react";
import SectionHeader from "./common/section-header";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/active-section-context";

const Skills = () => {
  const { inView, ref } = useInView({ threshold: 1 });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("skills");
    }
  }, [inView, setActiveSection]);
  return (
    <div
      ref={ref}
      className="pb-10 lg:pb-14 scroll-mt-[6rem] text-center mt-4  "
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
