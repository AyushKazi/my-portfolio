import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const AboutMe = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row w-full    scroll-mt-[10rem] gap-6 md:gap-0 pb-10 lg:pb-14 mt-[1rem]   md:mt-[6rem]"
      id="about-me"
    >
      {/* desc */}
      <div className=" flex flex-col text-center md:text-left md:w-2/3 gap-4 md:gap-6">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold">
          Hi there! 👋🏻
        </h1>
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-semibold">
          I'm Ayush Kazi Shrestha 🙇🏻‍♂️
        </h1>
        <p className="max-w-md lg:max-w-lg xl:max-w-2xl text-sm lg:text-base">
          I am a software developer with a passion for creating web
          applications. I have experience with JavaScript, React, Node.js, and
          MongoDB. I am currently learning TypeScript and GraphQL. I am excited
          to learn new technologies and improve my skills as a developer.
        </p>
        <div>
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
            className="rounded-full border-black/10 shadow-amber-600 border-2 h-[150px] w-[150px] md:h-[200px] md:w-[200px] xl:h-[250px] xl:w-[250px] "
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
