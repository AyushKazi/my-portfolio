"use client";
import { useActiveSection } from "@/context/active-section-context";
import Image from "next/image";
import React, { useEffect } from "react";
// import { Button } from "./ui/button";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }, // Stagger effect
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const AboutMe = () => {
  const { inView, ref } = useInView({
    threshold: 0.3,
    rootMargin: "-10% 0px", // Makes detection a bit more aggressive
    triggerOnce: false,
  });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("about-me");
    }
  }, [inView, setActiveSection]);

  const splitText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        variants={letterVariants}
        className="inline-block"
      >
        {word}&nbsp;
      </motion.span>
    ));
  };
  return (
    <div
      ref={ref}
      className="flex flex-col-reverse justify-center items-center w-full     scroll-mt-[12rem]  md:gap-0  mt-[3rem]  "
      id="about-me"
    >
      {/* desc */}
      <motion.div
        className=" flex flex-col items-center text-center  md:w-2/3 gap-4 md:gap-6  my-[2rem]  "
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
          {splitText("Hi there! 👋🏻")}
        </motion.h1>
        <motion.h1 className="text-2xl md:text-3xl -mt-1 xl:text-5xl font-semibold">
          {splitText("I'm Ayush Kazi Shrestha 🙇🏻‍♂️")}
        </motion.h1>
        <motion.p
          className="max-w-md mx-auto md:mx-0 lg:max-w-lg xl:max-w-3xl text-sm lg:text-base leading-relaxed"
          variants={containerVariants}
        >
          <motion.span variants={letterVariants}>
            A <span className="font-semibold">frontend web developer</span> with
            experience in <span className="font-semibold">JavaScript</span>,
            <span className="font-semibold">TypeScript</span>,
            <span className="font-semibold">React</span>,
            <span className="font-semibold">Next.js</span>,
            <span className="font-semibold">Tailwind CSS</span>, and more. I am
            currently learning{" "}
            <span className="font-semibold">Framer Motion</span> and always
            excited to explore new technologies and improve my skills as a
            developer. Provide me with an opportunity to work with you and I
            will make sure to deliver the best possible solution.
          </motion.span>
        </motion.p>
        <motion.div
          className="mx-auto flex gap-4 md:mx-0"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            className="group text-white hover:scale-105 transition-all hover:bg-black/90 gap-2 w-fit bg-black/80 flex justify-center items-center  px-6 py-2 text-sm rounded-sm hover:cursor-pointer"
            download={true}
            href="/AyushKaziShresthaCV.pdf"
          >
            Download CV{" "}
            <HiDownload className="group-hover:translate-y-1 transition-all" />
          </motion.a>
          {/* <a
            className="group text-white hover:scale-105 transition-all hover:bg-black/90 gap-2 w-fit bg-black/80 flex justify-center items-center  px-6 py-2 text-sm rounded-sm hover:cursor-pointer"
            href="/#contact"
          >
            Contact Me{" "}
            <CgMail className="group-hover:scale-105 transition-all" />
          </a> */}
        </motion.div>
      </motion.div>

      {/* image */}
      <div className=" md:w-1/3 flex gap-6 flex-col justify-center items-center ">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={"/Kazi.jpg"}
            alt=""
            height={300}
            width={300}
            className="rounded-full border-black/10 shadow-amber-600 border-2 h-[150px] w-[150px] md:h-[200px] md:w-[200px]  "
          />
        </motion.div>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {socials.map((social, index) => (
            <Link
              href={social.href}
              target="_blank"
              key={index}
              className="group border-2 hover:scale-105 transition-all border-black/20 rounded-full cursor-pointer p-2 hover:bg-black/10 bg-black/5"
            >
              {social.icon}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;

const socials = [
  {
    icon: <FaGithubSquare />,
    href: "https://github.com/AyushKazi",
    name: "Github",
  },
  {
    icon: <BsLinkedin />,
    href: "https://www.linkedin.com/in/ayush-kazi-shrestha-60074026b/",
    name: "LinkedIn",
  },
];

export function techData({ tech }: { tech: string }) {
  return (
    <span className="py-1 px-3 bg-gray-200 rounded-lg text-xs">{tech}</span>
  );
}
