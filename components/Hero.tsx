import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      {" "}
      {/* Removed overflow-hidden */}
      {/**
       *  UI: Spotlights
       */}
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      {/**
       *  UI: Grid Background
       */}
      <div className="absolute inset-0 flex items-center justify-center h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      </div>
      {/**
       *  Main Content
       */}
      <div className="relative my-20 z-10 flex justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center text-center">
          <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Sunil, a Next.js Developer.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
