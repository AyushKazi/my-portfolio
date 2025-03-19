"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "./common/section-header";
import { projects } from "@/lib/data";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/active-section-context";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithubSquare, FaPaperPlane } from "react-icons/fa";

type ProjectCardProps = (typeof projects)[number];

const Projects = () => {
  const [threshold, setThreshold] = useState(0.4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  // const itemVariants = {
  //   hidden: { opacity: 0, x: -20 },
  //   visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  // };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        setThreshold(0.2); // Lower threshold for better detection
      } else {
        setThreshold(0.4);
      }
    }
  }, []);

  const { inView, ref } = useInView({
    threshold,
    rootMargin: "-10% 0px",
    triggerOnce: false, // Ensures re-triggering
  });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("projects");
    }
  }, [inView, setActiveSection]);

  return (
    <div
      className=" scroll-mt-[6rem] min-h-[60vh]  pb-10 lg:pb-14 mt-4"
      id="projects"
      ref={ref}
    >
      <SectionHeader>Projects</SectionHeader>
      <motion.h2
        className="mb-[2rem] -mt-3 text-sm  lg:text-base text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Here are some of the projects that I have worked on along with the
        technologies I used.
      </motion.h2>
      <div
        // variants={containerVariants}
        className="grid sm:grid-cols-2 lg:grid-cols-3  gap-6"
        // initial="hidden"
        // whileInView="visible" // Triggers animation when in viewport
        // viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={fadeIn}
            key={index}
          >
            <ProjectCard key={index} {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

// export function ProjectCard({
//   title,
//   href,
//   description,
//   imageUrl,
//   tech,
// }: ProjectCardProps) {
//   return (
//     <>
//       <a
//         href={href}
//         target="_blank"
//         className="flex basis-full flex-col p-4  tracking-tight rounded-sm border hover:scale-105 transition-all border-black/20 w-[min(100%, 19rem)] h-[22rem] hover:shadow-lg hover:border-black/30 cursor-pointer"
//       >
//         <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base">{title}</h3>
//         <div className="text-base !m-0 !p-0 font-normal">
//           <span className="text-slate-500 ">{description}</span>
//         </div>
//         <div className="flex flex-1 w-full border border-black/20 rounded-lg mt-4 overflow-hidden ">
//           <Image
//             src={imageUrl}
//             alt={title}
//             width={300}
//             height={300}
//             className="object-cover object-top w-full h-full rounded-lg overflow-hidden"
//           />
//         </div>
//         <div className="flex flex-wrap pl-1 items-center gap-2 mt-3">
//           {tech.map((item, index) => (
//             <p key={index} className="py-1 px-3 bg-gray-200 rounded-lg text-xs">
//               {item}
//             </p>
//           ))}
//         </div>
//       </a>
//     </>
//   );
// }

export function ProjectCard({
  title,
  href,
  description,
  imageUrl,
  tech,
  github,
}: ProjectCardProps) {
  return (
    <>
      <div className="flex basis-full flex-col p-4 tracking-tight rounded-sm border transition-all border-foreground/40 w-[min(100%, 19rem)] h-fit md:h-[26rem] hover:shadow-lg hover:border-foreground/80 ">
        <h3 className="max-w-xs !m-0 font-bold text-base">{title}</h3>

        {/* Fixed height and aspect ratio for consistent images */}
        <div className="flex w-full h-[10rem] border border-black/20 rounded-lg my-4 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            className="object-cover object-center w-full h-full"
          />
        </div>

        <div className="text-base font-normal">
          <span className="text-foreground text-sm">{description}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-3">
          {tech.map((item, index) => (
            <p
              key={index}
              className="py-1 px-3 bg-background text-foreground border border-foreground/40 rounded-lg text-xs"
            >
              {item}
            </p>
          ))}
        </div>

        {/* View Project Button in flex column */}
        <div className=" flex gap-2 justify-end items-end  flex-1 mt-2">
          {github ? (
            <Link
              href={github}
              target="_blank"
              className="py-1 group px-3 hover:scale-105 justify-center items-center bg-foreground text-background border font-medium flex gap-1 border-foreground/40 rounded text-xs w-fit transition-all "
            >
              Code{" "}
              <FaGithubSquare className="text-background group-hover:scale-115 duration-100  transition-all " />
            </Link>
          ) : (
            <> </>
          )}
          {href ? (
            <Link
              href={href ? href : ""}
              target="_blank"
              className="py-1 group px-3 hover:scale-105 justify-center items-center bg-foreground text-background border font-medium flex gap-1 border-foreground/40 rounded text-xs w-fit transition-all "
            >
              View&nbsp;
              <FaPaperPlane className="text-background scale-90 text-xs group-hover:translate-x-[2px]  transition-all group-hover:-translate-y-[2px]" />
            </Link>
          ) : (
            <p className="text-sm py-1 group  flex items-center">
              Comming soon!
            </p>
          )}
        </div>
      </div>
    </>
  );
}
