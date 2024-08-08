"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex flex-col md:flex-row max-w-full md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-full border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-y-4 md:space-y-0 md:space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="flex items-center justify-between w-full">
          <button
            className="block md:hidden text-white"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {/* Add a menu icon here, e.g., using an SVG or an icon library */}☰
          </button>
          <div className="hidden md:flex items-center justify-center w-full space-x-4">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 flex items-center justify-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
          </div>
        </div>
        {dropdownOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-black mt-2 p-2 rounded-lg shadow-lg md:hidden">
            {navItems.map((navItem, idx) => (
              <Link
                key={`dropdown-link=${idx}`}
                href={navItem.link}
                className={cn(
                  "block w-full text-center px-4 py-2 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
                onClick={() => setDropdownOpen(false)}
              >
                {navItem.icon && (
                  <span className="inline-block mr-2">{navItem.icon}</span>
                )}
                <span className="text-sm">{navItem.name}</span>
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
