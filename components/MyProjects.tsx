"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data/index";
import { PinContainer } from "./ui/Pin";

const MyProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-white text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-700 py-20">
        Projects
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex justify-center items-center">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <p className="flex lg:text-xl md:text-xs text-sm text-blue-900">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#fff" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <p className="flex lg:text-xl md:text-xs text-sm text-blue-900">
                      GitHub Link
                    </p>
                    <FaLocationArrow className="ms-3" color="#fff" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
