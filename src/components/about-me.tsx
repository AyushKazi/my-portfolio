"use client";
import { useActiveSection } from "@/context/active-section-context";
import Image from "next/image";
import React, { useEffect } from "react";
// import { Button } from "./ui/button";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { inView, ref } = useInView({ threshold: 0.3 });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("about-me");
    }
  }, [inView, setActiveSection]);
  return (
    <div
      ref={ref}
      className="flex flex-col-reverse justify-center items-center w-full     scroll-mt-[12rem]  md:gap-0  mt-[3rem]  "
      id="about-me"
    >
      {/* desc */}
      <div className=" flex flex-col items-center text-center  md:w-2/3 gap-4 md:gap-6  my-[2rem]  ">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Hi there! 👋🏻
        </h1>
        <h1 className="text-2xl md:text-3xl -mt-1 xl:text-5xl font-semibold">
          I&apos;m Ayush Kazi Shrestha 🙇🏻‍♂️
        </h1>
        <p className="max-w-md mx-auto md:mx-0  lg:max-w-lg xl:max-w-2xl text-sm lg:text-base leading-relaxed  ">
          A frontend web developer with knowledge and experience with
          JavaScript, Typescript, React, Next.js, Tailwind CSS and many more. I
          am currently learning Framer Motion and I am always excited to learn
          new technologies and improve my skills as a developer. Provide me with
          an opportunity to work with you and I will make sure to deliver the
          best possible solution.
        </p>
        <div className="mx-auto md:mx-0">
          <a
            className="group text-white hover:scale-105 transition-all hover:bg-black/90 gap-2 w-fit bg-black/80 flex justify-center items-center  px-6 py-2 text-sm rounded-sm hover:cursor-pointer"
            download={true}
            href="/AyushKaziShresthaCV.pdf"
          >
            Download CV{" "}
            <HiDownload className="group-hover:translate-y-1 transition-all" />
          </a>
        </div>
      </div>

      {/* image */}
      <div className=" md:w-1/3 flex gap-6 flex-col justify-center items-center ">
        <div>
          <Image
            src={"/Kazi.jpg"}
            alt=""
            height={300}
            width={300}
            className="rounded-full border-black/10 shadow-amber-600 border-2 h-[150px] w-[150px] md:h-[200px] md:w-[200px]  "
          />
        </div>
        <div className="flex gap-4">
          {socials.map((social, index) => (
            <a
              href={social.href}
              target="_blank"
              key={index}
              className="border-2 hover:scale-105 transition-all border-black/20 rounded-full cursor-pointer p-2 hover:bg-black/10 bg-black/5"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

const socials = [
  {
    icon: <FaGithubSquare />,
    href: "https://github.com/AyushKazi",
  },
  {
    icon: <BsLinkedin />,
    href: "https://www.linkedin.com/in/ayush-kazi-shrestha-60074026b/",
  },
];
