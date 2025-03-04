import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <Navbar />
        <AboutMe />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
