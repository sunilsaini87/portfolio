"use client";

import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";

const About = () => {
  return (
    <>
      <div className="relative flex flex-col h-full w-full" id="about-me">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-center px-5 sm:px-10 lg:px-20 mt-20 lg:mt-40 w-full z-[20]"
        >
          <Spotlight />
          <div className="h-full w-full flex flex-col gap-5 justify-center text-center lg:text-start m-auto">
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-2 px-4 border border-[#34323a8b] opacity-[0.9] flex justify-center lg:justify-start"
            >
              <SparklesIcon className="text-[#292141] mr-2 h-5 w-5" />
              <h1 className="Welcome-text text-sm">Welcome to My Portfolio</h1>
            </motion.div>

            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-full lg:max-w-[600px] w-auto h-auto"
            >
              <FlipWords
                words={["I am", "Sunil Kumar Saini"]}
                className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-white space-x-1"
              />
            </motion.div>

            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-base sm:text-lg text-gray-400 my-5 max-w-full lg:max-w-[600px]"
            >
              A full stack web developer dedicated to creating dynamic and
              responsive web applications. Discover my work and skills.
            </motion.p>
            <motion.a
              variants={slideInFromLeft(1)}
              className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px] sm:max-w-[200px] mx-auto lg:mx-0"
              href="/"
            >
              Learn More!
            </motion.a>
          </div>

          <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-center items-center mt-10 lg:mt-0"
          >
            <Image
              src="/12.svg"
              alt="work icons"
              height={500}
              width={500}
              className="sm:h-[300px] sm:w-[300px] lg:h-[500px] lg:w-[500px] opacity-30 hover:opacity-80 transition-all duration-300 hover:scale-110 "
            />
          </motion.div>
        </motion.div>
        <Spotlight className="ml-96 mt-96 hidden lg:block" />
      </div>
    </>
  );
};

export default About;
