import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full border border-red-600   py-14">
      {/* desc */}
      <div className="border border-black flex flex-col md:w-2/3 gap-6">
        <h1 className="text-3xl font-semibold">Hi there! 👋🏻</h1>
        <h1 className="text-5xl font-semibold">I'm Ayush Kazi Shrestha 🙇🏻‍♂️</h1>
        <p className="max-w-lg">
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
      <div className="border border-black md:w-1/3 flex gap-6 flex-col justify-center items-center">
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
