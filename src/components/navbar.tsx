"use client";
import { navdata } from "@/lib/navdata";
import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="sticky top-6 z-50   ">
      <div className=" flex items-center justify-center h-[2.8rem] md:h-[3rem]  sm:px-6 lg:px-8 ">
        {/* Desktop Navigation */}
        <div className="flex items-center space-x-4 md:space-x-8 border border-black/10 bg-white drop-shadow-sm  h-full px-8 md:px-16 rounded-full">
          {navdata.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "text-xs md:text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        {/* <div className="absolute right-4 md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div> */}
      </div>

      {/* Mobile Menu */}
      {/* <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navdata.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "block rounded-md px-3 py-2 text-base font-medium text-center",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
