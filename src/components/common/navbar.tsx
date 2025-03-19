"use client";
import { useActiveSection } from "@/context/active-section-context";
import { navdata } from "@/lib/navdata";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { activeSection } = useActiveSection();

  return (
    <nav className="sticky top-6 z-50    ">
      <motion.div
        className=" flex items-center justify-center h-[2.8rem] md:h-[3rem]  sm:px-6 lg:px-8 "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.1 }}
      >
        {/* Desktop Navigation */}
        <div className="flex items-center space-x-4 md:space-x-8 border border-foreground bg-background drop-shadow-sm  h-full px-8 md:px-16 rounded-full">
          {navdata.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "relative text-xs md:text-sm font-medium transition-colors hover:text-foreground pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-100",
                activeSection === item.hash
                  ? "text-foreground after:w-full"
                  : "text-foreground/70 after:w-0 hover:after:w-full"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
