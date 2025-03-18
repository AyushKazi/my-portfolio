"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="border-1 border-black/20 h-[5rem] w-0 flex justify-center items-center mx-auto"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.1, duration: 0.5 },
      }}
      viewport={{ once: true }}
    ></motion.div>
  );
}
