import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const SectionHeader = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <h1 className="text-xl md:text-2xl tracking-wide lg:text-3xl xl:text-4xl capitalize pb-8 font-semibold text-center">
      {children}
    </h1>
  );
};

export default SectionHeader;
