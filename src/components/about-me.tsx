import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

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
          <Button className=" text-white px-10 py-2 text-sm rounded-sm hover:cursor-pointer">
            View CV
          </Button>
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
            className="rounded-full border-green-300 border-2 h-[150px] w-[150px] md:h-[200px] md:w-[200px] xl:h-[250px] xl:w-[250px] "
          />
        </div>
        <div className="flex gap-4">
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
