import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.5 },
      }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl tracking lg:text-3xl xl:text-4xl capitalize pb-8 font-semibold text-center">
        {children}
      </h1>
    </motion.div>
  );
};

export default SectionHeader;
