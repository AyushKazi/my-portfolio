import AboutMe from "@/components/about-me";
import Section from "@/components/common/section";
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
      <div className="border-1 border-black/20 h-[5rem] w-0 flex justify-center items-center mx-auto"></div>
      <Projects />
      <div className="border-1 border-black/20 h-[5rem] w-0 flex justify-center items-center mx-auto"></div>

      <Skills />
      <div className="border-1 border-black/20 h-[5rem] w-0 flex justify-center items-center mx-auto"></div>

      <Experience />
      <div className="border-1 border-black/20 h-[5rem] w-0 flex justify-center items-center mx-auto"></div>

      <Contact />
    </Section>
  );
}
