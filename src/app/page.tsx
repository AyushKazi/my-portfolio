import AboutMe from "@/components/about-me";
import Section from "@/components/common/section";
import SectionDivider from "@/components/common/section-divider";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
// import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import React from "react";

export default function Home() {
  return (
    // <Section>
    //   <section className="scroll-mt-[7rem]" id="about-me">
    //     <AboutMe />
    //   </section>
    //   <section className="scroll-mt-[7rem]" id="projects">
    //     <Projects />
    //   </section>
    //   <section className="scroll-mt-[7rem]" id="skills">
    //     <Skills />
    //   </section>
    //   <section className="scroll-mt-[7rem]" id="experience">
    //     <Experience />
    //   </section>
    //   <section className="scroll-mt-[7rem]" id="contact">
    //     <Contact />
    //   </section>
    // </Section>
    <Section>
      <AboutMe />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </Section>
  );
}
