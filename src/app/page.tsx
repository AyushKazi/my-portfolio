import AboutMe from "@/components/about-me";
import Section from "@/components/common/section";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import React from "react";

export default function Home() {
  return (
    <Section>
      <div>
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </Section>
  );
}
