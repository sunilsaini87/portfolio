import React from "react";
import HeroContent from "../components/HeroContent";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <HeroContent />
      <Spotlight className="ml-96 mt-96" />
    </div>
  );
};

export default Hero;
