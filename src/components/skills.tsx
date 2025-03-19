"use client";
import { techStack } from "@/lib/techstack";
import React, { useEffect } from "react";
import SectionHeader from "./common/section-header";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/active-section-context";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
};

const Skills = () => {
  const { inView, ref } = useInView({
    threshold: 1,
    rootMargin: "-10% 0px", // Makes detection a bit more aggressive
    triggerOnce: false,
  });

  // const { inView: childrenView } = useInView({
  //   threshold: 1,
  //   rootMargin: "-10% 0px",
  //   triggerOnce: true,
  // });

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
      <motion.div
        className="flex flex-wrap justify-center max-w-3xl  items-center mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Triggers animation when in viewport
        viewport={{ once: true }} // Animate only when in view
      >
        {techStack.map((tech, index) => (
          <motion.p
            key={index}
            className="px-4 py-2 m-2 text-sm bg-background border border-foreground shadow text-foreground rounded-md"
            variants={itemVariants}
          >
            {tech}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
