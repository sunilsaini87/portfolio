"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Texts = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Skills
      </motion.div>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#3711508b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#381774] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          The core competencies that drive my development process and fuel my
          creativity.
        </h1>
      </motion.div>
    </div>
  );
};

export default Texts;
