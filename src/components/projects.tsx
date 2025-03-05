import React from "react";
import SectionHeader from "./common/section-header";

const Projects = () => {
  return (
    <div className="h-[60vh] scroll-mt-[5rem] pb-12" id="projects">
      <SectionHeader>Projects 🚀</SectionHeader>
      <div className="flex flex-wrap justify-center max-w-3xl  items-center mx-auto">
        <div className="p-4 m-2 text-sm bg-gray-100 shadow text-black/90 rounded-md">
          Project 1
        </div>
        <div className="p-4 m-2 text-sm bg-gray-100 shadow text-black/90 rounded-md">
          Project 2
        </div>
        <div className="p-4 m-2 text-sm bg-gray-100 shadow text-black/90 rounded-md">
          Project 3
        </div>
        <div className="p-4 m-2 text-sm bg-gray-100 shadow text-black/90 rounded-md">
          Project 4
        </div>
      </div>
    </div>
  );
};

export default Projects;
