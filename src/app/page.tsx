import AboutMe from "@/components/about-me";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Projects />
    </>
  );
}
